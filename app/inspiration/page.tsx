"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { ClassyMinimalHome } from "@/components/inspiration/classy-minimal-home";
import { CorkyCreativeHome } from "@/components/inspiration/corky-creative-home";
import { WarmInvitingHome } from "@/components/inspiration/warm-inviting-home";
import { DarkSaasHome } from "@/components/inspiration/dark-saas-home";
import { WellnessStudioHome } from "@/components/inspiration/wellness-studio-home";
import { StreetwearBrandHome } from "@/components/inspiration/streetwear-brand-home";
import { AdventureTravelHome } from "@/components/inspiration/adventure-travel-home";
import { FineDiningHome } from "@/components/inspiration/fine-dining-home";
import { FintechHome } from "@/components/inspiration/fintech-home";

const samples = [
	{
		id: "classy-minimal",
		label: "Design Studio",
		description:
			"A high-end furniture store — timeless pieces, honest materials, refined showroom feel.",
		Component: ClassyMinimalHome,
	},
	{
		id: "corky-creative",
		label: "Creative Branding",
		description:
			"A bold design studio — branding, UI/UX and motion work for brands that want to be remembered.",
		Component: CorkyCreativeHome,
	},
	{
		id: "warm-inviting",
		label: "Coffee Shop",
		description:
			"A specialty coffee shop — single-origin brews, homemade pastries and a seat by the window.",
		Component: WarmInvitingHome,
	},
	{
		id: "dark-saas",
		label: "Dark SaaS",
		description:
			"A developer observability platform — real-time logs, traces and metrics built for engineers who ship fast.",
		Component: DarkSaasHome,
	},
	{
		id: "wellness-studio",
		label: "Wellness Studio",
		description:
			"A yoga and mindfulness studio — calm spaces, expert teachers and a community rooted in intention.",
		Component: WellnessStudioHome,
	},
	{
		id: "streetwear-brand",
		label: "Streetwear Brand",
		description:
			"A cult streetwear label — limited drops, raw energy and a look that speaks before you do.",
		Component: StreetwearBrandHome,
	},
	{
		id: "adventure-travel",
		label: "Adventure Travel",
		description:
			"A small-group expedition company — wild routes, local guides and mountains without the crowds.",
		Component: AdventureTravelHome,
	},
	{
		id: "fine-dining",
		label: "Fine Dining",
		description:
			"A Michelin-starred restaurant — wood-fired cooking, a seasonal tasting menu and candlelit calm.",
		Component: FineDiningHome,
	},
	{
		id: "fintech",
		label: "Fintech App",
		description:
			"A modern challenger bank — zero-fee spending, instant transfers and savings on autopilot.",
		Component: FintechHome,
	},
];

export default function InspirationPage() {
	const [active, setActive] = useState<string | null>(null);
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	useEffect(() => {
		if (active) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}
		return () => {
			document.body.style.overflow = "";
		};
	}, [active]);

	const activeSample = samples.find((s) => s.id === active);

	return (
		<main className="container mx-auto px-4 py-16">
			<div className="max-w-2xl mx-auto space-y-6 text-center">
				<h1 className="text-4xl font-bold tracking-tight">Inspiration</h1>
				<p className="text-lg text-muted-foreground">
					Nine distinct homepage styles to spark your creative vision.
				</p>
			</div>

			<div className="max-w-4xl mx-auto mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
				{samples.map(({ id, label, description, Component }) => (
					<div
						key={id}
						role="button"
						tabIndex={0}
						onClick={() => setActive(id)}
						onKeyDown={(e) =>
							(e.key === "Enter" || e.key === " ") && setActive(id)
						}
						className="group cursor-pointer rounded-xl border border-border bg-card p-4 shadow-sm transition-all hover:shadow-md hover:border-primary/30 w-full text-left"
					>
						<p className="text-base font-medium text-muted-foreground mb-3 text-center">
							{label}
						</p>

						{/* Scaled-down preview */}
						<div className="relative h-44 rounded-lg overflow-hidden border border-border/50 bg-white">
							<div
								style={{
									transform: "scale(0.21)",
									transformOrigin: "top left",
									width: "476%",
									height: "476%",
									pointerEvents: "none",
									userSelect: "none",
								}}
							>
								<Component />
							</div>
						</div>

						<p className="text-xs text-muted-foreground mt-3 group-hover:text-foreground transition-colors text-center">
							{description}
						</p>
						<p className="text-xs text-primary/60 mt-1 group-hover:text-primary transition-colors text-center font-medium">
							Click to view full page
						</p>
					</div>
				))}
			</div>

			{/* Full-page overlay portal */}
			{active &&
				activeSample &&
				mounted &&
				createPortal(
					<div className="fixed inset-0 z-[200] overflow-y-auto bg-background">
						<button
							onClick={() => setActive(null)}
							className="fixed top-4 right-4 z-[210] flex items-center gap-2 rounded-full bg-black/80 px-4 py-2 text-sm font-medium text-white shadow-lg hover:bg-black transition-colors backdrop-blur-sm"
							aria-label="Close preview"
						>
							<X className="h-4 w-4" />
							Close
						</button>
						<activeSample.Component />
					</div>,
					document.body,
				)}
		</main>
	);
}
