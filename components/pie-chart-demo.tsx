"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { PieChart, Pie, Cell } from "recharts";
import {
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
	ChartLegend,
	ChartLegendContent,
	type ChartConfig,
} from "@/components/ui/chart";
import { useAccent } from "@/components/accent-provider";

const data = [
	{ name: "organic", value: 42 },
	{ name: "direct", value: 28 },
	{ name: "social", value: 18 },
	{ name: "referral", value: 12 },
];

const chartConfig = {
	organic: { label: "Organic", color: "var(--primary)" },
	direct: {
		label: "Direct",
		color: "color-mix(in oklch, var(--primary) 70%, transparent)",
	},
	social: {
		label: "Social",
		color: "color-mix(in oklch, var(--primary) 45%, transparent)",
	},
	referral: {
		label: "Referral",
		color: "color-mix(in oklch, var(--primary) 25%, transparent)",
	},
} satisfies ChartConfig;

const COLORS = [
	"var(--primary)",
	"color-mix(in oklch, var(--primary) 70%, var(--background))",
	"color-mix(in oklch, var(--primary) 45%, var(--background))",
	"color-mix(in oklch, var(--primary) 25%, var(--background))",
];

export function PieChartDemo() {
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
						Pie Chart
					</p>
					<div className="relative h-40 rounded-lg bg-muted/50 overflow-hidden flex items-center justify-center">
						<svg viewBox="0 0 80 80" className="w-24 h-24">
							<circle
								cx="40"
								cy="40"
								r="30"
								fill="none"
								stroke="currentColor"
								strokeWidth="18"
								strokeDasharray="79 110"
								strokeDashoffset="0"
								className="text-primary/40"
							/>
							<circle
								cx="40"
								cy="40"
								r="30"
								fill="none"
								stroke="currentColor"
								strokeWidth="18"
								strokeDasharray="52 137"
								strokeDashoffset="-79"
								className="text-primary/25"
							/>
							<circle
								cx="40"
								cy="40"
								r="30"
								fill="none"
								stroke="currentColor"
								strokeWidth="18"
								strokeDasharray="34 155"
								strokeDashoffset="-131"
								className="text-primary/15"
							/>
							<circle
								cx="40"
								cy="40"
								r="30"
								fill="none"
								stroke="currentColor"
								strokeWidth="18"
								strokeDasharray="23 166"
								strokeDashoffset="-165"
								className="text-primary/10"
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
							<p className="text-lg font-semibold mb-1">Traffic Sources</p>
							<p className="text-xs text-muted-foreground mb-6">This month</p>
							<ChartContainer config={chartConfig} className="h-64 w-full">
								<PieChart>
									<ChartTooltip content={<ChartTooltipContent nameKey="name" />} />
									<Pie
										data={data}
										dataKey="value"
										nameKey="name"
										cx="50%"
										cy="50%"
										outerRadius={100}
										innerRadius={52}
										strokeWidth={2}
									>
										{data.map((_, index) => (
											<Cell key={index} fill={COLORS[index % COLORS.length]} />
										))}
									</Pie>
									<ChartLegend content={<ChartLegendContent nameKey="name" />} />
								</PieChart>
							</ChartContainer>
						</div>
					</div>
				</div>,
				document.body,
			)}
	</>
	);
}