"use client";

import { useState, useCallback, useEffect } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

const ZONES = [
	{ top: [5, 20], left: [5, 25] },
	{ top: [5, 20], left: [45, 65] },
	{ top: [45, 65], left: [5, 25] },
	{ top: [45, 65], left: [45, 65] },
	{ top: [25, 45], left: [5, 20] },
	{ top: [25, 45], left: [50, 65] },
];

let lastZoneIndex = -1;

function getRandomPosition() {
	let idx: number;
	do {
		idx = Math.floor(Math.random() * ZONES.length);
	} while (idx === lastZoneIndex);
	lastZoneIndex = idx;
	const zone = ZONES[idx];
	const top = Math.floor(Math.random() * (zone.top[1] - zone.top[0]) + zone.top[0]);
	const left = Math.floor(Math.random() * (zone.left[1] - zone.left[0]) + zone.left[0]);
	return { top: `${top}%`, left: `${left}%` };
}

export function PopupDemo() {
	const [active, setActive] = useState(false);
	const [showPopup, setShowPopup] = useState(false);
	const [dismissCount, setDismissCount] = useState(0);
	const [position, setPosition] = useState({ top: "30vh", left: "40vw" });
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	const activate = useCallback(() => {
		setActive(true);
		setShowPopup(true);
		setDismissCount(0);
		setPosition(getRandomPosition());
	}, []);

	const dismissPopup = useCallback(() => {
		const next = dismissCount + 1;
		if (next >= 3) {
			setShowPopup(false);
			setActive(false);
			setDismissCount(0);
		} else {
			setDismissCount(next);
			setPosition(getRandomPosition());
		}
	}, [dismissCount]);

	return (
		<div>
			{/* Miniaturized preview card */}
			{!active && (
				<button
					onClick={activate}
					className="group cursor-pointer rounded-xl border border-border bg-card p-4 shadow-sm transition-all hover:shadow-md hover:border-primary/30 w-full"
				>
					<p className="text-base font-medium text-muted-foreground mb-3 text-center">
						Pop-up
					</p>
					{/* Mini preview */}
					<div className="relative h-40 rounded-lg bg-muted/50 overflow-hidden">
						{/* Fake dimmed background */}
						<div className="absolute inset-0 bg-foreground/5" />
						{/* Mini popup */}
						<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/5 rounded-md border border-border bg-card shadow-lg p-3 space-y-2">
							<div className="flex items-center justify-between">
								<div className="h-2 w-12 rounded bg-foreground/20" />
								<div className="h-3 w-3 rounded-sm bg-muted-foreground/30 flex items-center justify-center">
									<X className="h-2 w-2 text-muted-foreground/60" />
								</div>
							</div>
							<div className="space-y-1">
								<div className="h-1.5 w-full rounded bg-muted-foreground/15" />
								<div className="h-1.5 w-4/5 rounded bg-muted-foreground/15" />
							</div>
							<div className="h-4 w-10 rounded bg-primary/20 mx-auto" />
						</div>
					</div>
					<p className="text-xs text-muted-foreground mt-3 group-hover:text-foreground transition-colors">
						Click to activate
					</p>
				</button>
			)}

			{/* Active state: full interactive area */}
			{active && mounted && createPortal(
				<>
					{/* Full-screen dimmed overlay */}
					<div className="fixed inset-0 bg-foreground/20 z-50" />
					{/* Popup */}
					{showPopup && (
						<div
							className="fixed z-[60] w-72 rounded-lg border border-border bg-card shadow-2xl transition-all duration-500 ease-in-out"
							style={position}
						>
							<div className="flex items-center justify-between border-b border-border px-4 py-2">
								<h3 className="text-sm font-semibold">
									Notice
								</h3>
								<button
									onClick={dismissPopup}
									className="rounded-sm p-0.5 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
									aria-label="Close popup"
								>
									<X className="h-4 w-4" />
								</button>
							</div>
							<div className="flex items-center justify-center h-24">
								<p className="text-base text-foreground text-center">
									Welcome to my demo site.
								</p>
							</div>
						</div>
					)}
				</>,
				document.body
			)}
		</div>
	);
}
