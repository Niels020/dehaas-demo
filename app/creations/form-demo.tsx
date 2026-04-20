"use client";

import { useState, useCallback, useEffect } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function FormDemo() {
	const [active, setActive] = useState(false);
	const [submitted, setSubmitted] = useState(false);
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	const activate = useCallback(() => {
		setActive(true);
		setSubmitted(false);
		setFirstName("");
		setLastName("");
		setEmail("");
		setPhone("");
	}, []);

	const handleSubmit = useCallback(
		(e: React.FormEvent) => {
			e.preventDefault();
			setSubmitted(true);
		},
		[]
	);

	const close = useCallback(() => {
		setActive(false);
		setSubmitted(false);
		setFirstName("");
		setLastName("");
		setEmail("");
		setPhone("");
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
						Form
					</p>
					{/* Mini preview */}
					<div className="relative h-40 rounded-lg bg-muted/50 overflow-hidden p-4 space-y-2">
						{/* Mini label + input */}
						<div className="space-y-1">
							<div className="h-1.5 w-8 rounded bg-foreground/20" />
							<div className="h-4 w-full rounded border border-border bg-card" />
						</div>
						<div className="space-y-1">
							<div className="h-1.5 w-10 rounded bg-foreground/20" />
							<div className="h-4 w-full rounded border border-border bg-card" />
						</div>
						<div className="space-y-1">
							<div className="h-1.5 w-12 rounded bg-foreground/20" />
							<div className="h-4 w-full rounded border border-border bg-card" />
						</div>
						<div className="h-4 w-14 rounded bg-primary/20 ml-auto" />
					</div>
					<p className="text-xs text-muted-foreground mt-3 group-hover:text-foreground transition-colors">
						Click to activate
					</p>
				</button>
			)}

			{/* Active state: full-screen overlay with centered form */}
			{active && mounted && createPortal(
				<>
					{/* Dimmed overlay */}
					<div className="fixed inset-0 bg-foreground/20 z-50" onClick={close} />
					{/* Centered form card */}
					<div className="fixed z-[60] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md rounded-xl border border-border bg-card shadow-2xl">
						<div className="flex items-center justify-between border-b border-border px-5 py-3">
							<h2 className="text-base font-semibold text-foreground">
								Contact Form
							</h2>
							<button
								onClick={close}
								className="rounded-sm p-0.5 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
								aria-label="Close form"
							>
								<X className="h-4 w-4" />
							</button>
						</div>
						<div className="p-6">
							{!submitted ? (
								<form onSubmit={handleSubmit} className="space-y-4">
									<div className="grid grid-cols-2 gap-4">
										<div className="space-y-1.5">
											<label
												htmlFor="form-firstname"
												className="text-sm font-medium text-foreground"
											>
												First name
											</label>
											<input
												id="form-firstname"
												type="text"
												required
												value={firstName}
												onChange={(e) => setFirstName(e.target.value)}
												placeholder="John"
												className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
											/>
										</div>
										<div className="space-y-1.5">
											<label
												htmlFor="form-lastname"
												className="text-sm font-medium text-foreground"
											>
												Last name
											</label>
											<input
												id="form-lastname"
												type="text"
												required
												value={lastName}
												onChange={(e) => setLastName(e.target.value)}
												placeholder="Doe"
												className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
											/>
										</div>
									</div>
									<div className="space-y-1.5">
										<label
											htmlFor="form-email"
											className="text-sm font-medium text-foreground"
										>
											Email
										</label>
										<input
											id="form-email"
											type="email"
											required
											value={email}
											onChange={(e) => setEmail(e.target.value)}
											placeholder="you@example.com"
											className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
										/>
									</div>
									<div className="space-y-1.5">
										<label
											htmlFor="form-phone"
											className="text-sm font-medium text-foreground"
										>
											Phone number
										</label>
										<input
											id="form-phone"
											type="tel"
											required
											value={phone}
											onChange={(e) => setPhone(e.target.value)}
											placeholder="+1 (555) 000-0000"
											className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
										/>
									</div>
									<div className="flex justify-end pt-2">
										<Button size="sm" type="submit">
											Submit
										</Button>
									</div>
								</form>
							) : (
								<div className="flex flex-col items-center justify-center py-8 space-y-3">
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
										Thanks, {firstName}!
									</p>
									<p className="text-xs text-muted-foreground">
										Your submission has been received.
									</p>
									<Button
										size="sm"
										variant="outline"
										onClick={close}
									>
										Close
									</Button>
								</div>
							)}
						</div>
					</div>
				</>,
				document.body
			)}
		</div>
	);
}
