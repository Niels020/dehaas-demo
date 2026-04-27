"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";
import {
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
	type ChartConfig,
} from "@/components/ui/chart";
import { useAccent } from "@/components/accent-provider";

const data = [
	{ month: "Jan", revenue: 4200 },
	{ month: "Feb", revenue: 5800 },
	{ month: "Mar", revenue: 3900 },
	{ month: "Apr", revenue: 7100 },
	{ month: "May", revenue: 6400 },
	{ month: "Jun", revenue: 8200 },
];

const chartConfig = {
	revenue: { label: "Revenue", color: "var(--primary)" },
} satisfies ChartConfig;

export function BarChartDemo() {
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
						Bar Chart
					</p>
					<div className="relative h-40 rounded-lg bg-muted/50 overflow-hidden flex items-end gap-1 px-4 pb-4 pt-6">
						{data.map((d) => (
							<div
								key={d.month}
								className="flex-1 rounded-t bg-primary/30"
								style={{ height: `${(d.revenue / 8200) * 80}%` }}
							/>
						))}
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
								<p className="text-lg font-semibold mb-1">Monthly Revenue</p>
								<p className="text-xs text-muted-foreground mb-6">
									Jan – Jun 2025
								</p>
								<ChartContainer config={chartConfig} className="h-64 w-full">
									<BarChart
										data={data}
										margin={{ top: 4, right: 4, left: -20, bottom: 0 }}
									>
										<CartesianGrid vertical={false} strokeDasharray="3 3" />
										<XAxis
											dataKey="month"
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
											tickFormatter={(v) => `$${v / 1000}k`}
										/>
										<ChartTooltip content={<ChartTooltipContent />} />
										<Bar
											dataKey="revenue"
											fill="var(--color-revenue)"
											radius={[4, 4, 0, 0]}
										/>
									</BarChart>
								</ChartContainer>
							</div>
						</div>
					</div>,
					document.body,
				)}
		</>
	);
}
