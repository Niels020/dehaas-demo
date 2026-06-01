"use client";

import {
	useEffect,
	useRef,
	useState,
	type DragEvent,
	type FocusEvent,
	type FormEvent,
	type KeyboardEvent,
} from "react";
import { createPortal } from "react-dom";
import { GripVertical, Plus, X } from "lucide-react";
import { useAccent } from "@/components/accent-provider";
import { cn } from "@/lib/utils";

type Card = { id: string; title: string; priority: "low" | "medium" | "high" };
type ColumnId = "todo" | "inprogress" | "done";
type Columns = Record<ColumnId, Card[]>;

const COLUMN_META: Record<
	ColumnId,
	{ label: string; headerClassName: string }
> = {
	todo: { label: "Todo", headerClassName: "text-muted-foreground" },
	inprogress: { label: "In Progress", headerClassName: "text-primary" },
	done: { label: "Done", headerClassName: "text-green-400" },
};

const PRIORITY_STYLES: Record<Card["priority"], string> = {
	high: "bg-destructive/20 text-destructive",
	medium: "bg-yellow-500/20 text-yellow-600 dark:text-yellow-400",
	low: "bg-green-500/20 text-green-700 dark:text-green-400",
};

function createInitialColumns(): Columns {
	return {
		todo: [
			{ id: "1", title: "Design landing page", priority: "high" },
			{ id: "2", title: "Set up CI pipeline", priority: "medium" },
			{ id: "3", title: "Write unit tests", priority: "low" },
		],
		inprogress: [
			{ id: "4", title: "Build auth module", priority: "high" },
			{ id: "5", title: "Integrate payment API", priority: "medium" },
		],
		done: [
			{ id: "6", title: "Project kickoff", priority: "low" },
			{ id: "7", title: "Requirements spec", priority: "medium" },
		],
	};
}

export function KanbanDemo() {
	const { accentClassName } = useAccent();
	const [active, setActive] = useState(false);
	const [mounted, setMounted] = useState(false);
	const [columns, setColumns] = useState<Columns>(() => createInitialColumns());
	const [draggingId, setDraggingId] = useState<string | null>(null);
	const [dragOverCol, setDragOverCol] = useState<ColumnId | null>(null);
	const [addingColumn, setAddingColumn] = useState<ColumnId | null>(null);
	const [newTitle, setNewTitle] = useState("");
	const dragCard = useRef<{ id: string; col: ColumnId } | null>(null);

	useEffect(() => {
		const frame = window.requestAnimationFrame(() => setMounted(true));
		return () => window.cancelAnimationFrame(frame);
	}, []);

	const cancelAdding = () => {
		setAddingColumn(null);
		setNewTitle("");
	};

	const submitNewCard = (columnId: ColumnId) => {
		const title = newTitle.trim();
		if (!title) {
			cancelAdding();
			return;
		}

		setColumns((current) => ({
			...current,
			[columnId]: [
				...current[columnId],
				{ id: Date.now().toString(), title, priority: "medium" },
			],
		}));
		cancelAdding();
	};

	const handleDragStart = (
		event: DragEvent<HTMLDivElement>,
		columnId: ColumnId,
		cardId: string,
	) => {
		dragCard.current = { id: cardId, col: columnId };
		setDraggingId(cardId);
		event.dataTransfer.effectAllowed = "move";
		event.dataTransfer.setData("text/plain", cardId);
	};

	const handleDrop = (targetColumn: ColumnId) => {
		const currentDrag = dragCard.current;
		setDragOverCol(null);
		setDraggingId(null);
		dragCard.current = null;

		if (!currentDrag || currentDrag.col === targetColumn) {
			return;
		}

		setColumns((current) => {
			const card = current[currentDrag.col].find(
				(item) => item.id === currentDrag.id,
			);
			if (!card) {
				return current;
			}

			return {
				...current,
				[currentDrag.col]: current[currentDrag.col].filter(
					(item) => item.id !== currentDrag.id,
				),
				[targetColumn]: [...current[targetColumn], card],
			};
		});
	};

	const handleFormBlur = (event: FocusEvent<HTMLFormElement>) => {
		if (event.currentTarget.contains(event.relatedTarget as Node | null)) {
			return;
		}
		cancelAdding();
	};

	const handleInputKeyDown = (
		event: KeyboardEvent<HTMLInputElement>,
		columnId: ColumnId,
	) => {
		if (event.key === "Escape") {
			event.preventDefault();
			cancelAdding();
			return;
		}

		if (event.key === "Enter") {
			event.preventDefault();
			submitNewCard(columnId);
		}
	};

	return (
		<>
			{/* CARD PREVIEW — shown when inactive */}
			{!active && (
				<button
					onClick={() => setActive(true)}
					className="group cursor-pointer rounded-xl border border-border bg-card p-4 shadow-sm transition-all hover:shadow-md hover:border-primary/30 w-full"
				>
					<p className="text-base font-medium text-muted-foreground mb-3 text-center">
						Kanban Board
					</p>
					<div className="relative h-40 overflow-hidden rounded-lg bg-muted/50">
						<div className="flex h-full gap-2 p-2">
							{[
								[3, 2, 2],
								[2, 3],
								[2, 2],
							].map((stubs, index) => (
								<div
									key={index}
									className="flex-1 rounded bg-muted/30 p-1"
								>
									<div className="mb-1 h-1.5 w-2/3 rounded bg-foreground/15" />
									{stubs.map((width, stubIndex) => (
										<div
											key={stubIndex}
											className={cn(
												"mb-1 h-2 rounded bg-primary/20 last:mb-0",
												width === 3 && "w-full",
												width === 2 && "w-4/5",
											)}
										/>
									))}
								</div>
							))}
						</div>
					</div>
					<p className="text-xs text-muted-foreground mt-3 group-hover:text-foreground transition-colors">
						Click to manage
					</p>
				</button>
			)}

			{/* FULL MODAL — via portal */}
			{mounted &&
				active &&
				createPortal(
					<div className={accentClassName}>
						<div
							className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-6"
							onClick={() => {
								setActive(false);
								setDragOverCol(null);
								setDraggingId(null);
								dragCard.current = null;
								cancelAdding();
							}}
						>
							<div
								className="relative w-full max-w-2xl rounded-2xl border border-border bg-card p-6 shadow-2xl"
								onClick={(event) => event.stopPropagation()}
							>
								<button
									onClick={() => {
										setActive(false);
										setDragOverCol(null);
										setDraggingId(null);
										dragCard.current = null;
										cancelAdding();
									}}
									className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
									aria-label="Close kanban board"
								>
									<X size={18} />
								</button>

								<div className="mb-5 pr-8">
									<h2 className="text-xl font-semibold text-foreground">
										Kanban Board
									</h2>
									<p className="mt-1 text-sm text-muted-foreground">
										Drag cards between columns and add new tasks inline.
									</p>
								</div>

								<div className="grid grid-cols-3 gap-4">
									{(Object.keys(COLUMN_META) as ColumnId[]).map((columnId) => (
										<div
											key={columnId}
											onDragOver={(event) => {
												event.preventDefault();
												setDragOverCol(columnId);
											}}
											onDrop={(event) => {
												event.preventDefault();
												handleDrop(columnId);
											}}
											className={cn(
												"flex min-h-[26rem] flex-col rounded-xl border border-border/70 bg-muted/20 p-3 transition-all",
												dragOverCol === columnId && "ring-2 ring-primary/40",
											)}
										>
											<h3
												className={cn(
													"mb-3 text-sm font-semibold",
													COLUMN_META[columnId].headerClassName,
												)}
											>
												{COLUMN_META[columnId].label} ({columns[columnId].length})
											</h3>

											<div className="flex-1 space-y-2 overflow-y-auto pr-1 max-h-[60vh]">
												{columns[columnId].map((card) => (
													<div
														key={card.id}
														draggable
														onDragStart={(event) =>
															handleDragStart(event, columnId, card.id)
														}
														onDragEnd={() => {
															setDraggingId(null);
															setDragOverCol(null);
															dragCard.current = null;
														}}
														className={cn(
															"select-none rounded-lg border border-border/60 bg-muted/40 p-3 cursor-grab active:cursor-grabbing",
															draggingId === card.id && "opacity-50",
														)}
													>
														<div className="flex items-start gap-2">
															<GripVertical className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground/60" />
															<div className="min-w-0">
																<p className="text-sm font-medium text-foreground">
																	{card.title}
																</p>
																<span
																	className={cn(
																		"mt-2 inline-flex rounded-full px-1.5 py-0.5 text-[10px] font-medium capitalize",
																		PRIORITY_STYLES[card.priority],
																	)}
																>
																	{card.priority}
																</span>
															</div>
														</div>
													</div>
												))}
											</div>

											{addingColumn === columnId ? (
												<form
													onSubmit={(event: FormEvent<HTMLFormElement>) => {
														event.preventDefault();
														submitNewCard(columnId);
													}}
													onBlur={handleFormBlur}
													className="mt-3 space-y-2 rounded-lg border border-border/70 bg-background/70 p-2"
												>
													<input
														type="text"
														value={newTitle}
														onChange={(event) => setNewTitle(event.target.value)}
														onKeyDown={(event) => handleInputKeyDown(event, columnId)}
														placeholder="Card title..."
														autoFocus
														className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
													/>
													<div className="flex justify-end">
														<button
															type="submit"
															disabled={!newTitle.trim()}
															className="rounded-md bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
														>
															Add
														</button>
													</div>
												</form>
											) : (
												<button
													onClick={() => {
														setAddingColumn(columnId);
														setNewTitle("");
													}}
													className="mt-3 inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
													aria-label={`Add card to ${COLUMN_META[columnId].label}`}
												>
													<Plus className="h-4 w-4" />
													Add card
												</button>
											)}
										</div>
									))}
								</div>
							</div>
						</div>
					</div>,
					document.body,
				)}
		</>
	);
}
