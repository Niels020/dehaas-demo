"use client";

import { useState, useCallback, useEffect } from "react";
import { createPortal } from "react-dom";
import { Cookie, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CookiesDemo() {
	const [active, setActive] = useState(false);
	const [accepted, setAccepted] = useState<"all" | "essential" | null>(null);
	const [showSettings, setShowSettings] = useState(false);
	const [mounted, setMounted] = useState(false);

	const [analytics, setAnalytics] = useState(true);
	const [marketing, setMarketing] = useState(true);
	const [functional, setFunctional] = useState(true);

	useEffect(() => {
		setMounted(true);
	}, []);

	const activate = useCallback(() => {
		setActive(true);
		setAccepted(null);
		setShowSettings(false);
		setAnalytics(true);
		setMarketing(true);
		setFunctional(true);
	}, []);

	const close = useCallback(() => {
		setActive(false);
		setAccepted(null);
		setShowSettings(false);
	}, []);

	const acceptAll = useCallback(() => {
		setAccepted("all");
		setShowSettings(false);
	}, []);

	const acceptEssential = useCallback(() => {
		setAccepted("essential");
		setShowSettings(false);
	}, []);

	const savePreferences = useCallback(() => {
		setAccepted("all");
		setShowSettings(false);
	}, []);

	return (
		<div>
			{/* Miniaturized preview card */}
			{!active && (
				<button
					onClick={activate}
					className="group cursor-pointer rounded-xl border border-border bg-card p-4 shadow-sm transition-all hover:shadow-md hover:border-primary/30 w-full"
				>
					<p className="text-base font-medium text-muted-foreground mb-3 text-center">
						Cookies
					</p>
					{/* Mini preview */}
					<div className="relative h-40 rounded-lg bg-muted/50 overflow-hidden flex flex-col justify-end">
						{/* Mini page content lines */}
						<div className="absolute top-3 left-3 right-3 space-y-2">
							<div className="h-1.5 w-16 rounded bg-foreground/15" />
							<div className="h-1 w-full rounded bg-muted-foreground/10" />
							<div className="h-1 w-4/5 rounded bg-muted-foreground/10" />
							<div className="h-1 w-full rounded bg-muted-foreground/10" />
						</div>
						{/* Mini cookie banner */}
						<div className="mx-2 mb-2 rounded-md border border-border bg-card shadow-md p-2 space-y-1.5">
							<div className="flex items-center gap-1">
								<Cookie className="h-2.5 w-2.5 text-muted-foreground/50" />
								<div className="h-1.5 w-14 rounded bg-foreground/20" />
							</div>
							<div className="h-1 w-full rounded bg-muted-foreground/10" />
							<div className="h-1 w-3/4 rounded bg-muted-foreground/10" />
							<div className="flex gap-1 justify-end">
								<div className="h-3 w-8 rounded bg-muted/80" />
								<div className="h-3 w-10 rounded bg-primary/20" />
							</div>
						</div>
					</div>
					<p className="text-xs text-muted-foreground mt-3 group-hover:text-foreground transition-colors">
						Click to activate
					</p>
				</button>
			)}

			{/* Active state: full-screen overlay */}
			{active && mounted && createPortal(
				<>
					{/* Dimmed overlay */}
					<div className="fixed inset-0 bg-foreground/20 z-50" onClick={close} />

					{!accepted && !showSettings && (
						/* Cookie banner at bottom */
						<div className="fixed z-[60] bottom-0 left-0 right-0 border-t border-border bg-card shadow-2xl">
							<div className="mx-auto max-w-3xl px-6 py-5">
								<div className="flex items-start gap-4">
									<Cookie className="h-6 w-6 text-muted-foreground shrink-0 mt-0.5" />
									<div className="flex-1 space-y-3">
										<h2 className="text-base font-semibold text-foreground">
											We use cookies
										</h2>
										<p className="text-sm text-muted-foreground leading-relaxed">
											This website uses cookies to ensure you get the best experience.
											We use cookies for analytics, personalization, and advertising.
											You can choose to accept all cookies or customize your preferences.
										</p>
										<div className="flex flex-wrap gap-2 pt-1">
											<Button size="sm" onClick={acceptAll}>
												Accept all
											</Button>
											<Button size="sm" variant="outline" onClick={acceptEssential}>
												Essential only
											</Button>
											<Button
												size="sm"
												variant="ghost"
												onClick={() => setShowSettings(true)}
											>
												Customize
											</Button>
										</div>
									</div>
									<button
										onClick={close}
										className="rounded-sm p-0.5 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
										aria-label="Close cookies banner"
									>
										<X className="h-4 w-4" />
									</button>
								</div>
							</div>
						</div>
					)}

					{!accepted && showSettings && (
						/* Cookie settings panel */
						<div className="fixed z-[60] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md rounded-xl border border-border bg-card shadow-2xl">
							<div className="flex items-center justify-between border-b border-border px-5 py-3">
								<h2 className="text-base font-semibold text-foreground">
									Cookie preferences
								</h2>
								<button
									onClick={close}
									className="rounded-sm p-0.5 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
									aria-label="Close settings"
								>
									<X className="h-4 w-4" />
								</button>
							</div>
							<div className="p-5 space-y-4">
								{/* Essential - always on */}
								<div className="flex items-center justify-between">
									<div>
										<p className="text-sm font-medium text-foreground">Essential</p>
										<p className="text-xs text-muted-foreground">Required for the site to function</p>
									</div>
									<div className="h-5 w-9 rounded-full bg-primary flex items-center justify-end px-0.5">
										<div className="h-4 w-4 rounded-full bg-primary-foreground" />
									</div>
								</div>

								{/* Analytics */}
								<div className="flex items-center justify-between">
									<div>
										<p className="text-sm font-medium text-foreground">Analytics</p>
										<p className="text-xs text-muted-foreground">Help us understand usage patterns</p>
									</div>
									<button
										onClick={() => setAnalytics(!analytics)}
										className={`h-5 w-9 rounded-full flex items-center px-0.5 transition-colors ${analytics ? "bg-primary justify-end" : "bg-muted justify-start"}`}
									>
										<div className={`h-4 w-4 rounded-full transition-colors ${analytics ? "bg-primary-foreground" : "bg-muted-foreground/50"}`} />
									</button>
								</div>

								{/* Marketing */}
								<div className="flex items-center justify-between">
									<div>
										<p className="text-sm font-medium text-foreground">Marketing</p>
										<p className="text-xs text-muted-foreground">Personalized advertising</p>
									</div>
									<button
										onClick={() => setMarketing(!marketing)}
										className={`h-5 w-9 rounded-full flex items-center px-0.5 transition-colors ${marketing ? "bg-primary justify-end" : "bg-muted justify-start"}`}
									>
										<div className={`h-4 w-4 rounded-full transition-colors ${marketing ? "bg-primary-foreground" : "bg-muted-foreground/50"}`} />
									</button>
								</div>

								{/* Functional */}
								<div className="flex items-center justify-between">
									<div>
										<p className="text-sm font-medium text-foreground">Functional</p>
										<p className="text-xs text-muted-foreground">Enhanced features and preferences</p>
									</div>
									<button
										onClick={() => setFunctional(!functional)}
										className={`h-5 w-9 rounded-full flex items-center px-0.5 transition-colors ${functional ? "bg-primary justify-end" : "bg-muted justify-start"}`}
									>
										<div className={`h-4 w-4 rounded-full transition-colors ${functional ? "bg-primary-foreground" : "bg-muted-foreground/50"}`} />
									</button>
								</div>

								<div className="flex gap-2 pt-2">
									<Button size="sm" className="flex-1" onClick={savePreferences}>
										Save preferences
									</Button>
									<Button size="sm" variant="outline" className="flex-1" onClick={acceptAll}>
										Accept all
									</Button>
								</div>
							</div>
						</div>
					)}

					{accepted && (
						/* Confirmation */
						<div className="fixed z-[60] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-sm rounded-xl border border-border bg-card shadow-2xl p-6">
							<div className="flex flex-col items-center space-y-3">
								<div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
									<svg
										className="h-5 w-5 text-primary"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										strokeWidth={2}
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M5 13l4 4L19 7"
										/>
									</svg>
								</div>
								<p className="text-sm font-medium text-foreground">
									{accepted === "all"
										? "All cookies accepted"
										: "Essential cookies only"}
								</p>
								<p className="text-xs text-muted-foreground text-center">
									Your cookie preferences have been saved.
								</p>
								<Button size="sm" variant="outline" onClick={close}>
									Close
								</Button>
							</div>
						</div>
					)}
				</>,
				document.body
			)}
		</div>
	);
}
