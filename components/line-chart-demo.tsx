"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid } from "recharts";
import {
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
	type ChartConfig,
} from "@/components/ui/chart";
import { useAccent } from "@/components/accent-provider";

const data = [
	{ week: "W1", users: 120 },
	{ week: "W2", users: 185 },
	{ week: "W3", users: 162 },
	{ week: "W4", users: 240 },
	{ week: "W5", users: 198 },
	{ week: "W6", users: 310 },
	{ week: "W7", users: 275 },
	{ week: "W8", users: 390 },
];

const chartConfig = {
	users: { label: "Active users", color: "var(--primary)" },
} satisfies ChartConfig;

export function LineChartDemo() {
	const { accentClassName } = useAccent();
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
						Line Chart
					</p>
					<div className="relative h-40 rounded-lg bg-muted/50 overflow-hidden px-4 py-4 flex items-end">
						<svg
							viewBox="0 0 160 60"
							className="w-full h-full"
							preserveAspectRatio="none"
						>
							<polyline
								points="0,50 20,35 40,42 60,20 80,30 100,8 120,18 160,5"
								fill="none"
								stroke="currentColor"
								strokeWidth="2.5"
								className="text-primary/40"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</div>
					<p className="text-xs text-muted-foreground mt-3 group-hover:text-foreground transition-colors">
						Click to expand
					</p>
				</button>
			)}
			{mounted &&
				active &&
				createPortal(
					<div className={accentClassName}>
						<div
							className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-6"
							onClick={() => setActive(false)}
						>
							<div
								className="relative w-full max-w-xl rounded-2xl border border-border bg-card p-6 shadow-2xl"
								onClick={(e) => e.stopPropagation()}
							>
								<button
									onClick={() => setActive(false)}
									className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
								>
									<X size={18} />
								</button>
								<p className="text-lg font-semibold mb-1">Active Users</p>
								<p className="text-xs text-muted-foreground mb-6">
									Last 8 weeks
								</p>
								<ChartContainer config={chartConfig} className="h-64 w-full">
									<LineChart
										data={data}
										margin={{ top: 4, right: 4, left: -20, bottom: 0 }}
									>
										<CartesianGrid vertical={false} strokeDasharray="3 3" />
										<XAxis
											dataKey="week"
											tickLine={false}
											axisLine={false}
											tickMargin={8}
											tick={{ fontSize: 12 }}
										/>
										<YAxis
											tickLine={false}
											axisLine={false}
											tickMargin={8}
											tick={{ fontSize: 12 }}
										/>
										<ChartTooltip content={<ChartTooltipContent />} />
										<Line
											dataKey="users"
											stroke="var(--color-users)"
											strokeWidth={2.5}
											dot={false}
											activeDot={{ r: 5, strokeWidth: 0 }}
										/>
									</LineChart>
								</ChartContainer>
							</div>
						</div>
					</div>,
					document.body,
				)}
		</>
	);
}
