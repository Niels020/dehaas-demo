import Image from "next/image";
import {
	BarChart3,
	Bell,
	Cloud,
	Lock,
	Waypoints,
	Zap,
} from "lucide-react";

export function DarkSaasHome() {
	const features = [
		{
			Icon: Zap,
			title: "Real-time Logs",
			description:
				"Stream millions of events per second with zero configuration.",
		},
		{
			Icon: Waypoints,
			title: "Distributed Tracing",
			description:
				"Follow a request across every service with full context.",
		},
		{
			Icon: BarChart3,
			title: "Dashboards",
			description:
				"Drag-and-drop dashboards. No PromQL required.",
		},
		{
			Icon: Bell,
			title: "Alerts",
			description:
				"PagerDuty, Slack or webhooks — notify the right people, instantly.",
		},
		{
			Icon: Lock,
			title: "SSO & RBAC",
			description:
				"Enterprise-grade access controls out of the box.",
		},
		{
			Icon: Cloud,
			title: "Any Cloud",
			description: "AWS, GCP, Azure or on-prem — one SDK, everywhere.",
		},
	];

	const stats = [
		{ value: "99.99%", label: "Uptime SLA" },
		{ value: "<5ms", label: "Query p99" },
		{ value: "10B+", label: "Events/month" },
		{ value: "500+", label: "Engineering teams" },
	];

	const pricing = [
		{
			name: "Free",
			price: "$0/mo",
			details: ["Up to 1B events/month", "7-day retention", "3 team members"],
			highlighted: false,
		},
		{
			name: "Pro",
			price: "$49/mo",
			details: [
				"Up to 50B events/month",
				"90-day retention",
				"Unlimited seats",
			],
			highlighted: true,
		},
		{
			name: "Enterprise",
			price: "Custom",
			details: ["Unlimited events", "Custom retention", "Dedicated support"],
			highlighted: false,
		},
	];

	return (
		<div
			className="min-h-screen bg-[#0a0a0f] text-[#f1f5f9]"
			style={{ fontFamily: "'Inter', 'system-ui', sans-serif" }}
		>
			<header className="sticky top-0 z-20 border-b border-[#1f1f2e] bg-[#0a0a0f]/95 backdrop-blur">
				<div className="flex items-center justify-between px-12 py-5">
					<a href="#" className="flex items-center gap-2 text-lg font-bold text-white">
						<span className="text-[#818cf8]">◈</span>
						<span>Axiom</span>
					</a>
					<nav className="flex items-center gap-8 text-sm text-slate-400">
						<a href="#" className="hover:text-white transition-colors">
							Docs
						</a>
						<a href="#" className="hover:text-white transition-colors">
							Pricing
						</a>
						<a href="#" className="hover:text-white transition-colors">
							Blog
						</a>
						<a href="#" className="hover:text-white transition-colors">
							Changelog
						</a>
					</nav>
					<div className="flex items-center gap-3">
						<a
							href="#"
							className="rounded-md border border-[#1f1f2e] px-4 py-2 text-sm text-slate-300 hover:border-[#6366f1] hover:text-white transition-colors"
						>
							Sign in
						</a>
						<a
							href="#"
							className="rounded-md bg-[#6366f1] px-4 py-2 text-sm font-semibold text-white hover:bg-[#818cf8] transition-colors"
						>
							Start free
						</a>
					</div>
				</div>
			</header>

			<section className="relative overflow-hidden px-12 py-28 text-center">
				<Image
					src="/christopher-gower-m_HRfLhgABo-unsplash.jpg"
					alt="Developer workspace with code on MacBook"
					fill
					sizes="100vw"
					priority
					className="object-cover object-center"
				/>
				<div className="absolute inset-0 bg-[#0a0a0f]/88" />
				<div className="relative z-10 mx-auto max-w-4xl">
					<span className="inline-flex rounded-full border border-[#6366f1]/40 bg-[#6366f1]/10 px-3 py-1 text-xs text-[#818cf8]">
						◈ Now in public beta
					</span>
					<h1 className="mt-8 text-6xl font-black leading-tight tracking-tight text-white">
						Observability for
						<br />
						teams that ship fast
					</h1>
					<p className="mx-auto mt-4 max-w-lg text-lg text-slate-400">
						Ship with confidence. Real-time logs, traces and metrics — unified in
						one place.
					</p>
					<div className="mt-8 flex items-center justify-center gap-4">
						<a
							href="#"
							className="rounded-md bg-[#6366f1] px-6 py-3 text-sm font-semibold text-white hover:bg-[#818cf8] transition-colors"
						>
							Start for free →
						</a>
						<a
							href="#"
							className="rounded-md border border-[#1f1f2e] px-6 py-3 text-sm text-slate-300 hover:border-[#6366f1] hover:text-white transition-colors"
						>
							View live demo
						</a>
					</div>
					<div className="mx-auto mt-12 max-w-md rounded-xl border border-[#1f1f2e] bg-[#13131a] p-4 text-left shadow-2xl shadow-[#000000]/20">
						<div className="mb-4 flex items-center gap-2">
							<span className="h-2.5 w-2.5 rounded-full bg-[#ef4444]" />
							<span className="h-2.5 w-2.5 rounded-full bg-[#f59e0b]" />
							<span className="h-2.5 w-2.5 rounded-full bg-[#22c55e]" />
							<span className="ml-2 font-mono text-[11px] text-slate-500">
								stream.log
							</span>
						</div>
						<div className="space-y-3 font-mono text-xs text-slate-300">
							<p>
								<span className="text-[#22d3ee]">●</span> [INFO] request received —
								POST /api/events (2ms)
							</p>
							<p>
								<span className="text-[#6366f1]">●</span> [TRACE] db.query — SELECT *
								FROM events LIMIT 1000 (8ms)
							</p>
							<p>
								<span className="text-[#f59e0b]">●</span> [WARN] rate limit
								approaching — 4 800/5 000 req/min
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className="border-y border-[#1f1f2e] px-12 py-10">
				<p className="mb-6 text-center text-xs uppercase tracking-widest text-slate-500">
					Trusted by engineering teams at
				</p>
				<div className="flex items-center justify-center gap-4 text-sm font-bold tracking-wide text-slate-600">
					<span>Stripe</span>
					<span>·</span>
					<span>Linear</span>
					<span>·</span>
					<span>Vercel</span>
					<span>·</span>
					<span>Notion</span>
					<span>·</span>
					<span>Resend</span>
					<span>·</span>
					<span>PlanetScale</span>
				</div>
			</section>

			<section className="px-12 py-20">
				<div className="mx-auto max-w-6xl">
					<h2 className="mb-3 text-center text-3xl font-bold text-white">
						Everything you need
					</h2>
					<p className="mb-12 text-center text-slate-400">
						From first deploy to peak scale, Axiom keeps your stack visible.
					</p>
					<div className="grid grid-cols-3 gap-4">
						{features.map((feature) => (
							<div
								key={feature.title}
								className="rounded-2xl border border-[#1f1f2e] bg-[#13131a] p-6 hover:border-[#6366f1]/60 transition-colors"
							>
								<div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#6366f1]/10">
									<feature.Icon className="h-5 w-5 text-[#818cf8]" />
								</div>
								<h3 className="mb-2 text-sm font-bold text-white">
									{feature.title}
								</h3>
								<p className="text-xs leading-relaxed text-slate-400">
									{feature.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="border-y border-[#1f1f2e] bg-[#13131a] px-12 py-12">
				<div className="mx-auto grid max-w-6xl grid-cols-4 gap-6">
					{stats.map((stat) => (
						<div key={stat.label} className="text-center">
							<p className="text-3xl font-black text-white">{stat.value}</p>
							<p className="mt-2 text-sm text-slate-400">{stat.label}</p>
						</div>
					))}
				</div>
			</section>

			<section className="px-12 py-20 text-center">
				<h2 className="text-3xl font-bold text-white">Simple, predictable pricing</h2>
				<div className="mx-auto mt-12 grid max-w-4xl grid-cols-3 gap-6">
					{pricing.map((plan) => (
						<div
							key={plan.name}
							className={`rounded-2xl border p-8 text-left ${
								plan.highlighted
									? "border-[#6366f1] bg-[#6366f1]/5"
									: "border-[#1f1f2e] bg-[#13131a]"
							}`}
						>
							<p className="text-sm font-bold text-white">{plan.name}</p>
							<p className="mt-4 text-4xl font-black text-white">{plan.price}</p>
							<ul className="mt-6 space-y-3 text-sm text-slate-400">
								{plan.details.map((detail) => (
									<li key={detail}>{detail}</li>
								))}
							</ul>
							<a
								href="#"
								className={`mt-8 inline-flex rounded-md px-4 py-2 text-sm font-semibold transition-colors ${
									plan.highlighted
										? "bg-[#6366f1] text-white hover:bg-[#818cf8]"
										: "border border-[#1f1f2e] text-slate-300 hover:border-[#6366f1] hover:text-white"
								}`}
							>
								Choose plan
							</a>
						</div>
					))}
				</div>
			</section>

			<section className="bg-[#6366f1] px-12 py-20 text-center">
				<h2 className="text-4xl font-black text-white">
					Start shipping with confidence
				</h2>
				<p className="mx-auto mt-4 max-w-xl text-white/70">
					Unify your logs, traces and alerts before the next incident finds you
					first.
				</p>
				<a
					href="#"
					className="mt-8 inline-flex rounded-full bg-white px-7 py-3 text-sm font-semibold text-[#6366f1] hover:bg-[#eef2ff] transition-colors"
				>
					Get started free
				</a>
			</section>

			<footer className="border-t border-[#1f1f2e] bg-[#13131a] px-12 py-10">
				<div className="grid grid-cols-[1.1fr_1fr_1.1fr] gap-10 border-b border-[#1f1f2e] pb-8">
					<div>
						<a href="#" className="flex items-center gap-2 text-lg font-bold text-white">
							<span className="text-[#818cf8]">◈</span>
							<span>Axiom</span>
						</a>
						<p className="mt-3 max-w-xs text-sm text-slate-400">
							Developer analytics for modern engineering teams.
						</p>
					</div>
					<div className="grid grid-cols-2 gap-6 text-sm">
						<div className="space-y-3">
							<p className="text-xs uppercase tracking-widest text-slate-500">
								Product
							</p>
							<a href="#" className="block text-slate-400 hover:text-white transition-colors">
								Product
							</a>
							<a href="#" className="block text-slate-400 hover:text-white transition-colors">
								Docs
							</a>
							<a href="#" className="block text-slate-400 hover:text-white transition-colors">
								Blog
							</a>
						</div>
						<div className="space-y-3">
							<p className="text-xs uppercase tracking-widest text-slate-500">
								Company
							</p>
							<a href="#" className="block text-slate-400 hover:text-white transition-colors">
								Status
							</a>
							<a href="#" className="block text-slate-400 hover:text-white transition-colors">
								Legal
							</a>
						</div>
					</div>
					<div>
						<p className="text-xs uppercase tracking-widest text-slate-500">
							Get product updates
						</p>
						<div className="mt-4 flex gap-3">
							<input
								type="email"
								placeholder="name@company.com"
								className="w-full rounded-md border border-[#1f1f2e] bg-[#0a0a0f] px-4 py-3 text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none"
							/>
							<a
								href="#"
								className="rounded-md bg-[#6366f1] px-4 py-3 text-sm font-semibold text-white hover:bg-[#818cf8] transition-colors"
							>
								Subscribe
							</a>
						</div>
					</div>
				</div>
				<div className="flex items-center justify-between pt-6 text-sm text-slate-500">
					<p>© 2025 Axiom, Inc.</p>
					<div className="flex gap-5">
						<a href="#" className="hover:text-white transition-colors">
							GitHub
						</a>
						<a href="#" className="hover:text-white transition-colors">
							Twitter
						</a>
						<a href="#" className="hover:text-white transition-colors">
							Discord
						</a>
					</div>
				</div>
			</footer>
		</div>
	);
}
