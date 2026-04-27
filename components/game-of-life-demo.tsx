"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { createPortal } from "react-dom";
import { X, Play, Pause, RotateCcw, Zap, ZapOff } from "lucide-react";
import { useAccent } from "@/components/accent-provider";
import { useFont } from "@/components/font-provider";
import { cn } from "@/lib/utils";

const COLS = 100;
const ROWS = 100;
const CELL_SIZE = 5;
const SPEEDS = [2000, 1000, 500, 250, 125, 60]; // ms, each step 2× faster

// ─── Pattern helpers ─────────────────────────────────────────────────────────

function parsePattern(s: string): [number, number][] {
	const rows = s.trim().split("\n");
	const maxW = Math.max(...rows.map((r) => r.length));
	const cx = Math.floor(maxW / 2);
	const cy = Math.floor(rows.length / 2);
	const cells: [number, number][] = [];
	rows.forEach((row, y) => {
		[...row].forEach((c, x) => {
			if (c === "X") cells.push([x - cx, y - cy]);
		});
	});
	return cells;
}

const PRESETS = [
	{
		key: "glider",
		label: "Glider",
		cells: parsePattern(".X.\n..X\nXXX"),
	},
	{
		key: "pulsar",
		label: "Pulsar",
		cells: parsePattern(
			"..XXX...XXX..\n" +
				".............\n" +
				"X....X.X....X\n" +
				"X....X.X....X\n" +
				"X....X.X....X\n" +
				"..XXX...XXX..\n" +
				".............\n" +
				"..XXX...XXX..\n" +
				"X....X.X....X\n" +
				"X....X.X....X\n" +
				"X....X.X....X\n" +
				".............\n" +
				"..XXX...XXX..",
		),
	},
	{
		key: "rpentomino",
		label: "R-Pentomino",
		cells: parsePattern(".XX\nXX.\n.X."),
	},
	{
		key: "gun",
		label: "Glider Gun",
		cells: parsePattern(
			"........................X...........\n" +
				"......................X.X...........\n" +
				"............XX......XX............XX\n" +
				"...........X...X....XX............XX\n" +
				"XX........X.....X...XX..............\n" +
				"XX........X...X.XX....X.X...........\n" +
				"..........X.....X.......X...........\n" +
				"...........X...X....................\n" +
				"............XX.....................",
		),
	},
];

// ─── Grid helpers ─────────────────────────────────────────────────────────────

function emptyGrid(): Uint8Array {
	return new Uint8Array(COLS * ROWS);
}

function randomGrid(): Uint8Array {
	const g = new Uint8Array(COLS * ROWS);
	for (let i = 0; i < g.length; i++) g[i] = Math.random() < 0.3 ? 1 : 0;
	return g;
}

function patternGrid(cells: [number, number][]): Uint8Array {
	const g = new Uint8Array(COLS * ROWS);
	const cx = Math.floor(COLS / 2);
	const cy = Math.floor(ROWS / 2);
	for (const [dx, dy] of cells) {
		const x = cx + dx;
		const y = cy + dy;
		if (x >= 0 && x < COLS && y >= 0 && y < ROWS) g[y * COLS + x] = 1;
	}
	return g;
}

function stepGrid(g: Uint8Array): [Uint8Array, number] {
	const n = new Uint8Array(COLS * ROWS);
	let pop = 0;
	for (let y = 0; y < ROWS; y++) {
		for (let x = 0; x < COLS; x++) {
			let nb = 0;
			for (let dy = -1; dy <= 1; dy++)
				for (let dx = -1; dx <= 1; dx++) {
					if (!dx && !dy) continue;
					nb += g[((y + dy + ROWS) % ROWS) * COLS + ((x + dx + COLS) % COLS)];
				}
			const alive = g[y * COLS + x] ? nb === 2 || nb === 3 : nb === 3;
			n[y * COLS + x] = alive ? 1 : 0;
			if (alive) pop++;
		}
	}
	return [n, pop];
}

// ─── SpeedGauge ─────────────────────────────────────────────────────────────

function SpeedGauge({ speedIdx }: { speedIdx: number }) {
	const genPerSec = 1000 / SPEEDS[speedIdx];
	const label =
		genPerSec >= 10 ? Math.round(genPerSec).toString() : genPerSec.toFixed(1);
	const pct = speedIdx / (SPEEDS.length - 1);

	const cx = 40,
		cy = 38,
		r = 26;
	const toRad = (deg: number) => (deg * Math.PI) / 180;
	const pt = (deg: number) => ({
		x: (cx + r * Math.cos(toRad(deg))).toFixed(2),
		y: (cy - r * Math.sin(toRad(deg))).toFixed(2),
	});

	const s = pt(210);
	const e = pt(-30);
	const fe = pt(210 - 240 * pct);
	const fillLarge = 240 * pct > 180 ? 1 : 0;

	const trackPath = `M ${s.x} ${s.y} A ${r} ${r} 0 1 1 ${e.x} ${e.y}`;
	const fillPath =
		pct > 0
			? `M ${s.x} ${s.y} A ${r} ${r} 0 ${fillLarge} 1 ${fe.x} ${fe.y}`
			: null;

	return (
		<div className="flex flex-col items-center">
			<svg width="80" height="52" viewBox="0 0 80 52">
				<path
					d={trackPath}
					fill="none"
					stroke="var(--muted-foreground)"
					strokeOpacity="0.25"
					strokeWidth="4"
					strokeLinecap="round"
				/>
				{fillPath && (
					<path
						d={fillPath}
						fill="none"
						stroke="var(--primary)"
						strokeWidth="4"
						strokeLinecap="round"
					/>
				)}
				<text
					x={cx}
					y={cy + 7}
					textAnchor="middle"
					fontSize="12"
					fontWeight="600"
					fill="var(--foreground)"
				>
					{label}
				</text>
			</svg>
			<span
				className="text-[10px] leading-none -mt-1"
				style={{ color: "var(--muted-foreground)" }}
			>
				gen/s
			</span>
		</div>
	);
}

// ─── GameBoard ────────────────────────────────────────────────────────────────

function GameBoard({
	accentClassName,
	fontClassName,
}: {
	accentClassName: string;
	fontClassName: string;
}) {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const colorSrcRef = useRef<HTMLDivElement>(null);
	const gridRef = useRef(emptyGrid());
	const runningRef = useRef(false);
	const rafRef = useRef(0);
	const lastRef = useRef(0);
	const genRef = useRef(0);
	const tickMsRef = useRef(SPEEDS[0]);
	const paintModeRef = useRef<0 | 1 | null>(null);

	const [generation, setGeneration] = useState(0);
	const [population, setPopulation] = useState(0);
	const [running, setRunning] = useState(false);
	const [speedIdx, setSpeedIdx] = useState(0);
	const [extinct, setExtinct] = useState(false);

	const draw = useCallback((grid: Uint8Array) => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;
		const el = colorSrcRef.current;
		const styles = el ? getComputedStyle(el) : null;
		const primary =
			styles?.getPropertyValue("--primary").trim() || "oklch(0.65 0.22 240)";
		const border =
			styles?.getPropertyValue("--border").trim() || "oklch(0.5 0 0)";

		ctx.clearRect(0, 0, canvas.width, canvas.height);

		// Grid lines
		ctx.strokeStyle = border;
		ctx.globalAlpha = 0.6;
		ctx.lineWidth = 0.5;
		ctx.beginPath();
		for (let x = 0; x <= COLS; x++) {
			ctx.moveTo(x * CELL_SIZE, 0);
			ctx.lineTo(x * CELL_SIZE, ROWS * CELL_SIZE);
		}
		for (let y = 0; y <= ROWS; y++) {
			ctx.moveTo(0, y * CELL_SIZE);
			ctx.lineTo(COLS * CELL_SIZE, y * CELL_SIZE);
		}
		ctx.stroke();

		// Live cells
		ctx.globalAlpha = 1;
		ctx.fillStyle = primary;
		for (let y = 0; y < ROWS; y++)
			for (let x = 0; x < COLS; x++)
				if (grid[y * COLS + x])
					ctx.fillRect(
						x * CELL_SIZE + 1,
						y * CELL_SIZE + 1,
						CELL_SIZE - 1,
						CELL_SIZE - 1,
					);
	}, []);

	useEffect(() => {
		draw(gridRef.current);

		const tick = (time: number) => {
			if (runningRef.current && time - lastRef.current >= tickMsRef.current) {
				lastRef.current = time;
				const [next, p] = stepGrid(gridRef.current);
				gridRef.current = next;
				genRef.current++;
				draw(next);
				setGeneration(genRef.current);
				setPopulation(p);
				if (p === 0) {
					runningRef.current = false;
					setRunning(false);
					setExtinct(true);
				}
			}
			rafRef.current = requestAnimationFrame(tick);
		};

		rafRef.current = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(rafRef.current);
	}, [draw]);

	// ── Drawing ──────────────────────────────────────────────────────────────

	const getCanvasCell = (e: React.MouseEvent<HTMLCanvasElement>) => {
		const canvas = canvasRef.current;
		if (!canvas) return null;
		const rect = canvas.getBoundingClientRect();
		const x = Math.floor(((e.clientX - rect.left) / rect.width) * COLS);
		const y = Math.floor(((e.clientY - rect.top) / rect.height) * ROWS);
		if (x < 0 || x >= COLS || y < 0 || y >= ROWS) return null;
		return { x, y };
	};

	const paintCell = (x: number, y: number, val: 0 | 1) => {
		if (gridRef.current[y * COLS + x] === val) return;
		const ng = new Uint8Array(gridRef.current);
		ng[y * COLS + x] = val;
		gridRef.current = ng;
		draw(ng);
		let pop = 0;
		for (let i = 0; i < ng.length; i++) pop += ng[i];
		setPopulation(pop);
	};

	const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
		const cell = getCanvasCell(e);
		if (!cell) return;
		const cur = gridRef.current[cell.y * COLS + cell.x] as 0 | 1;
		paintModeRef.current = cur === 1 ? 0 : 1;
		paintCell(cell.x, cell.y, paintModeRef.current);
	};

	const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
		if (paintModeRef.current === null) return;
		const cell = getCanvasCell(e);
		if (!cell) return;
		paintCell(cell.x, cell.y, paintModeRef.current);
	};

	const stopPaint = () => {
		paintModeRef.current = null;
	};

	// ── Controls ─────────────────────────────────────────────────────────────

	const toggleRunning = () => {
		runningRef.current = !runningRef.current;
		setRunning((r) => !r);
	};

	const reset = () => {
		runningRef.current = false;
		setRunning(false);
		setExtinct(false);
		const g = emptyGrid();
		gridRef.current = g;
		genRef.current = 0;
		tickMsRef.current = SPEEDS[0];
		setGeneration(0);
		setPopulation(0);
		setSpeedIdx(0);
		draw(g);
	};

	const faster = () => {
		setSpeedIdx((i) => {
			const next = Math.min(i + 1, SPEEDS.length - 1);
			tickMsRef.current = SPEEDS[next];
			return next;
		});
	};

	const slower = () => {
		setSpeedIdx((i) => {
			const next = Math.max(i - 1, 0);
			tickMsRef.current = SPEEDS[next];
			return next;
		});
	};

	const loadPreset = (cells: [number, number][]) => {
		const g = patternGrid(cells);
		gridRef.current = g;
		genRef.current = 0;
		setGeneration(0);
		let pop = 0;
		for (let i = 0; i < g.length; i++) pop += g[i];
		setPopulation(pop);
		draw(g);
	};

	const loadRandom = () => {
		const g = randomGrid();
		gridRef.current = g;
		genRef.current = 0;
		setGeneration(0);
		let pop = 0;
		for (let i = 0; i < g.length; i++) pop += g[i];
		setPopulation(pop);
		draw(g);
	};

	const atMaxSpeed = speedIdx === SPEEDS.length - 1;
	const atMinSpeed = speedIdx === 0;
	const isEmpty = population === 0 && generation === 0 && !extinct;

	return (
		<div ref={colorSrcRef} className={cn(accentClassName, fontClassName)}>
			{/* Title */}
			<p className="text-lg font-semibold text-center mb-3">
				Conway&apos;s Game of Life
			</p>

			{/* Stats */}
			<div className="flex items-center justify-center gap-6 text-sm mb-3">
				<span className="text-muted-foreground">
					Generation{" "}
					<span className="font-mono tabular-nums inline-block min-w-[5ch] text-right text-foreground">
						{generation}
					</span>
				</span>
				<SpeedGauge speedIdx={speedIdx} />
				<span className="text-muted-foreground">
					Population{" "}
					<span className="font-mono tabular-nums inline-block min-w-[7ch] text-right text-foreground">
						{population.toLocaleString()}
					</span>
				</span>
			</div>

			{/* Controls */}
			<div className="flex items-center justify-center gap-6 mb-3">
				<button
					onClick={reset}
					disabled={isEmpty}
					className={cn(
						"flex flex-col items-center gap-1 transition-colors",
						isEmpty
							? "opacity-30 cursor-not-allowed text-muted-foreground"
							: "text-muted-foreground hover:text-foreground",
					)}
				>
					<RotateCcw size={16} />
					<span className="text-[10px] leading-none">Clear</span>
				</button>
				<button
					onClick={slower}
					disabled={!running || atMinSpeed}
					className={cn(
						"flex flex-col items-center gap-1 transition-colors",
						!running || atMinSpeed
							? "opacity-30 cursor-not-allowed text-muted-foreground"
							: "text-muted-foreground hover:text-foreground",
					)}
				>
					<ZapOff size={16} />
					<span className="text-[10px] leading-none">
						{atMinSpeed ? "Min" : "Slower"}
					</span>
				</button>
				<button
					onClick={toggleRunning}
					disabled={population === 0 && !running}
					className={cn(
						"flex flex-col items-center gap-1 transition-colors",
						population === 0 && !running
							? "opacity-30 cursor-not-allowed text-muted-foreground"
							: "text-muted-foreground hover:text-foreground",
					)}
				>
					{running ? <Pause size={16} /> : <Play size={16} />}
					<span className="text-[10px] leading-none">
						{running ? "Pause" : "Play"}
					</span>
				</button>
				<button
					onClick={faster}
					disabled={!running || atMaxSpeed}
					className={cn(
						"flex flex-col items-center gap-1 transition-colors",
						!running || atMaxSpeed
							? "opacity-30 cursor-not-allowed text-muted-foreground"
							: "text-muted-foreground hover:text-foreground",
					)}
				>
					<Zap size={16} />
					<span className="text-[10px] leading-none">
						{atMaxSpeed ? "Max" : "Faster"}
					</span>
				</button>
			</div>

			{/* Preset buttons */}
			<div className="flex flex-wrap justify-center gap-2 mb-4">
				{PRESETS.map((p) => (
					<button
						key={p.key}
						onClick={() => loadPreset(p.cells)}
						disabled={running}
						className={cn(
							"text-xs px-2.5 py-1 rounded border transition-colors",
							running
								? "border-border text-muted-foreground opacity-30 cursor-not-allowed"
								: "border-border text-muted-foreground hover:text-foreground hover:border-primary/50",
						)}
					>
						{p.label}
					</button>
				))}
				<button
					onClick={loadRandom}
					disabled={running}
					className={cn(
						"text-xs px-2.5 py-1 rounded border transition-colors",
						running
							? "border-border text-muted-foreground opacity-30 cursor-not-allowed"
							: "border-border text-muted-foreground hover:text-foreground hover:border-primary/50",
					)}
				>
					Random
				</button>
			</div>

			{/* Canvas */}
			<div className="relative">
				<canvas
					ref={canvasRef}
					width={COLS * CELL_SIZE}
					height={ROWS * CELL_SIZE}
					className="rounded-lg block cursor-crosshair"
					onMouseDown={handleMouseDown}
					onMouseMove={handleMouseMove}
					onMouseUp={stopPaint}
					onMouseLeave={stopPaint}
				/>
				{isEmpty && (
					<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
						<p className="text-xs text-muted-foreground/60">
							Draw cells or choose a pattern above, then press play
						</p>
					</div>
				)}
				{extinct && (
					<div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none gap-1">
						<p className="text-sm font-semibold text-foreground">Extinct</p>
						<p className="text-xs text-muted-foreground">
							All cells died at generation {generation}
						</p>
					</div>
				)}
			</div>
		</div>
	);
}

// ─── GameOfLifeDemo ───────────────────────────────────────────────────────────

export function GameOfLifeDemo() {
	const { accentClassName } = useAccent();
	const { fontClassName } = useFont();
	const [active, setActive] = useState(false);
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	return (
		<>
			{!active && (
				<button
					onClick={() => setActive(true)}
					className="group cursor-pointer rounded-xl border border-border bg-card p-4 shadow-sm transition-all hover:shadow-md hover:border-primary/30 w-full"
				>
					<p className="text-base font-medium text-muted-foreground mb-3 text-center">
						Game of Life
					</p>
					<div className="relative h-40 rounded-lg bg-muted/50 overflow-hidden flex items-center justify-center">
						<div
							className="grid gap-px opacity-40"
							style={{ gridTemplateColumns: `repeat(20, 8px)` }}
						>
							{Array.from({ length: 400 }, (_, i) => (
								<div
									key={i}
									className={
										((i * 2654435761) >>> 0) % 10 < 3
											? "w-2 h-2 rounded-sm bg-primary"
											: "w-2 h-2"
									}
								/>
							))}
						</div>
					</div>
					<p className="text-xs text-muted-foreground mt-3 group-hover:text-foreground transition-colors">
						Click to start
					</p>
				</button>
			)}
			{mounted &&
				active &&
				createPortal(
					<div className={cn(accentClassName, fontClassName)}>
						<div
							className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-6"
							onClick={() => setActive(false)}
						>
							<div
								className="relative rounded-2xl border border-border bg-card p-6 shadow-2xl"
								onClick={(e) => e.stopPropagation()}
							>
								<button
									onClick={() => setActive(false)}
									className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
								>
									<X size={18} />
								</button>
								<GameBoard
									accentClassName={accentClassName}
									fontClassName={fontClassName}
								/>
							</div>
						</div>
					</div>,
					document.body,
				)}
		</>
	);
}
