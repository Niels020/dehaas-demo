import Image from "next/image";
import {
	ArrowRight,
	ArrowUpRight,
	CreditCard,
	Globe,
	LineChart,
	Lock,
	PiggyBank,
	ShieldCheck,
	Smartphone,
	Wifi,
	Zap,
} from "lucide-react";

const features = [
	{
		Icon: CreditCard,
		title: "One card, zero fees",
		description: "Spend in 150+ currencies at the real exchange rate. No monthly cost, no surprises.",
	},
	{
		Icon: PiggyBank,
		title: "Pockets that save for you",
		description: "Round up every purchase and auto-sweep the spare change into savings earning 3.2%.",
	},
	{
		Icon: LineChart,
		title: "Spending insights",
		description: "Every transaction categorised instantly. See where the month went — before it's gone.",
	},
	{
		Icon: Zap,
		title: "Instant transfers",
		description: "Send money to any Nova user in under a second. Free, always, anywhere.",
	},
	{
		Icon: Globe,
		title: "Travel mode",
		description: "Land, tap, pay. Local currency detected automatically with zero markup abroad.",
	},
	{
		Icon: Lock,
		title: "Freeze in a tap",
		description: "Lost your card? Freeze it from the app in one tap and order a replacement in two.",
	},
];

export function FintechHome() {
	return (
		<div
			className="min-h-screen bg-white text-[#10231c]"
			style={{ fontFamily: "'Inter', 'system-ui', sans-serif" }}
		>
			{/* Navigation */}
			<header className="sticky top-0 z-20 border-b border-[#e8efec] bg-white/90 backdrop-blur">
				<div className="flex items-center justify-between px-4 sm:px-6 md:px-12 py-4">
					<a href="#" className="flex items-center gap-2 text-lg font-extrabold tracking-tight">
						<span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#0bbf7d] text-white">
							<Zap className="h-4 w-4" />
						</span>
						Nova
					</a>
					<nav className="hidden md:flex gap-8 text-sm font-medium text-[#5c6f68]">
						<a href="#" className="hover:text-[#10231c] transition-colors">
							Personal
						</a>
						<a href="#" className="hover:text-[#10231c] transition-colors">
							Business
						</a>
						<a href="#" className="hover:text-[#10231c] transition-colors">
							Pricing
						</a>
						<a href="#" className="hover:text-[#10231c] transition-colors">
							Help
						</a>
					</nav>
					<div className="flex items-center gap-3">
						<a
							href="#"
							className="px-4 py-2 text-sm font-semibold text-[#10231c] hover:text-[#0bbf7d] transition-colors"
						>
							Log in
						</a>
						<a
							href="#"
							className="rounded-full bg-[#10231c] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#0bbf7d] transition-colors"
						>
							Get the app
						</a>
					</div>
				</div>
			</header>

			{/* Hero */}
			<section className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12 overflow-hidden bg-gradient-to-b from-[#f2faf6] to-white px-4 sm:px-6 md:px-12 py-12 sm:py-16 md:py-20">
				<div>
					<span className="inline-flex items-center gap-2 rounded-full border border-[#0bbf7d]/30 bg-[#0bbf7d]/10 px-3 py-1 text-xs font-semibold text-[#078b5b]">
						<ShieldCheck className="h-3.5 w-3.5" />
						Licensed European bank
					</span>
					<h1 className="mt-6 text-3xl sm:text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-tight">
						Money that
						<br />
						moves like
						<br />
						<span className="text-[#0bbf7d]">you do</span>
					</h1>
					<p className="mt-6 max-w-md text-base sm:text-lg leading-relaxed text-[#5c6f68]">
						Open an account in 8 minutes. Spend, save and send across borders —
						all from one beautifully simple app.
					</p>
					<div className="mt-8 flex flex-wrap items-center gap-4">
						<a
							href="#"
							className="flex items-center gap-2 rounded-full bg-[#10231c] px-7 py-4 text-sm font-semibold text-white hover:bg-[#0bbf7d] transition-colors"
						>
							<Smartphone className="h-4 w-4" />
							Download Nova
						</a>
						<a
							href="#"
							className="flex items-center gap-1 text-sm font-semibold text-[#10231c] hover:text-[#0bbf7d] transition-colors"
						>
							See how it works
							<ArrowRight className="h-4 w-4" />
						</a>
					</div>
					<p className="mt-8 text-xs text-[#8aa098]">
						Deposits protected up to €100 000 · 3.4M customers
					</p>
				</div>

				{/* CSS card + balance mockup */}
				<div className="relative flex items-center justify-center">
					<div className="absolute h-80 w-80 rounded-full bg-[#0bbf7d]/10 blur-2xl" />
					<div className="relative w-full max-w-sm">
						<div className="rounded-3xl border border-[#e8efec] bg-white p-6 shadow-xl shadow-[#10231c]/5">
							<div className="flex items-center justify-between">
								<p className="text-sm font-medium text-[#5c6f68]">Main account</p>
								<span className="rounded-full bg-[#0bbf7d]/10 px-2.5 py-1 text-xs font-bold text-[#078b5b]">
									+3.2% APY
								</span>
							</div>
							<p className="mt-2 text-4xl font-extrabold tracking-tight">€8 421,90</p>
							<div className="mt-5 space-y-3 border-t border-[#eef4f1] pt-4 text-sm">
								{[
									{ label: "Salary — Acme BV", amount: "+€3 200,00", positive: true },
									{ label: "Rent · standing order", amount: "−€1 450,00", positive: false },
									{ label: "Round-up to savings", amount: "+€18,42", positive: true },
								].map((row) => (
									<div key={row.label} className="flex items-center justify-between">
										<span className="text-[#5c6f68]">{row.label}</span>
										<span
											className={
												row.positive
													? "font-semibold text-[#078b5b]"
													: "font-semibold text-[#10231c]"
											}
										>
											{row.amount}
										</span>
									</div>
								))}
							</div>
						</div>
						{/* Floating bank card */}
						<div className="absolute -bottom-6 -right-2 sm:-bottom-10 sm:-right-6 w-48 sm:w-60 rotate-6 rounded-2xl bg-gradient-to-br from-[#10231c] to-[#1d4536] p-5 text-white shadow-2xl">
							<div className="flex items-center justify-between">
								<Zap className="h-5 w-5 text-[#0bbf7d]" />
								<Wifi className="h-4 w-4 rotate-90 text-white/60" />
							</div>
							<p className="mt-8 font-mono text-sm tracking-[0.2em] text-white/80">
								•••• 4921
							</p>
							<div className="mt-3 flex items-center justify-between text-xs text-white/60">
								<span>N. de Vries</span>
								<span className="font-bold text-white">nova</span>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Trust strip */}
			<section className="border-y border-[#e8efec] px-4 sm:px-6 md:px-12 py-8">
				<div className="flex flex-wrap items-center justify-center gap-4 sm:gap-10 text-sm font-semibold tracking-wide text-[#8aa098]">
					<span>As featured in</span>
					<span className="text-[#5c6f68]">TechCrunch</span>
					<span className="text-[#5c6f68]">Financial Times</span>
					<span className="text-[#5c6f68]">Sifted</span>
					<span className="text-[#5c6f68]">Bloomberg</span>
					<span className="text-[#5c6f68]">De Tijd</span>
				</div>
			</section>

			{/* Features */}
			<section className="px-4 sm:px-6 md:px-12 py-12 sm:py-16 md:py-20">
				<div className="mx-auto mb-12 max-w-xl text-center">
					<h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
						Everything your old bank
						<br />
						should have built
					</h2>
				</div>
				<div className="mx-auto grid max-w-5xl grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
					{features.map(({ Icon, title, description }) => (
						<div
							key={title}
							className="rounded-2xl border border-[#e8efec] bg-[#fafcfb] p-6 hover:border-[#0bbf7d]/50 hover:bg-white transition-colors"
						>
							<div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#0bbf7d]/10">
								<Icon className="h-5 w-5 text-[#078b5b]" />
							</div>
							<h3 className="mb-2 text-base font-bold">{title}</h3>
							<p className="text-sm leading-relaxed text-[#5c6f68]">{description}</p>
						</div>
					))}
				</div>
			</section>

			{/* Insights section with image */}
			<section className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-16 bg-[#10231c] px-4 sm:px-6 md:px-12 py-12 sm:py-16 md:py-24 text-white">
				<div className="relative h-64 md:h-96 overflow-hidden rounded-3xl border border-white/10">
					<Image
						src="/analytics-laptop-unsplash.jpg"
						alt="Laptop screen showing dark analytics dashboard with charts"
						fill
						sizes="(max-width: 768px) 100vw, 50vw"
						className="object-cover object-center"
					/>
				</div>
				<div>
					<p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-[#0bbf7d]">
						Nova for Business
					</p>
					<h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight tracking-tight">
						Your runway,
						<br />
						in real time
					</h2>
					<p className="mt-5 max-w-md text-base leading-relaxed text-white/65">
						Burn rate, cash flow and team spending in one live dashboard. Issue
						cards to your whole team and set limits that enforce themselves.
					</p>
					<ul className="mt-7 space-y-3 text-sm text-white/80">
						{[
							"Unlimited virtual cards",
							"Receipt capture & accounting sync",
							"Approval flows for anything over budget",
						].map((item) => (
							<li key={item} className="flex items-center gap-3">
								<span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#0bbf7d]/20">
									<ArrowUpRight className="h-3 w-3 text-[#0bbf7d]" />
								</span>
								{item}
							</li>
						))}
					</ul>
					<a
						href="#"
						className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#0bbf7d] px-7 py-3.5 text-sm font-semibold text-[#10231c] hover:bg-white transition-colors"
					>
						Explore Business
						<ArrowRight className="h-4 w-4" />
					</a>
				</div>
			</section>

			{/* In-person payments */}
			<section className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-16 px-4 sm:px-6 md:px-12 py-12 sm:py-16 md:py-24">
				<div>
					<p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-[#078b5b]">
						Tap to pay
					</p>
					<h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight tracking-tight">
						Works where
						<br />
						you do
					</h2>
					<p className="mt-5 max-w-md text-base leading-relaxed text-[#5c6f68]">
						Phone, watch or card — pay however you like, and watch the receipt
						land in the app before you&apos;ve left the counter. Merchants love
						us too: Nova Terminal settles next day, not next week.
					</p>
					<div className="mt-8 grid grid-cols-3 gap-3 sm:gap-6 border-t border-[#e8efec] pt-8 text-center">
						{[
							{ value: "0,9%", label: "Merchant fee" },
							{ value: "<1s", label: "Tap to confirm" },
							{ value: "24/7", label: "Human support" },
						].map((stat) => (
							<div key={stat.label}>
								<p className="text-2xl font-extrabold text-[#10231c]">{stat.value}</p>
								<p className="mt-1 text-xs font-medium uppercase tracking-wider text-[#8aa098]">
									{stat.label}
								</p>
							</div>
						))}
					</div>
				</div>
				<div className="relative h-64 md:h-96 overflow-hidden rounded-3xl">
					<Image
						src="/card-payment-unsplash.jpg"
						alt="Customer paying by phone at a bright boutique checkout"
						fill
						sizes="(max-width: 768px) 100vw, 50vw"
						className="object-cover object-center"
					/>
				</div>
			</section>

			{/* CTA */}
			<section className="px-4 sm:px-6 md:px-12 pb-12 sm:pb-16 md:pb-24">
				<div className="rounded-3xl bg-gradient-to-br from-[#0bbf7d] to-[#078b5b] px-6 sm:px-10 md:px-14 py-10 sm:py-12 md:py-16 text-center text-white">
					<h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
						8 minutes to a better bank
					</h2>
					<p className="mx-auto mt-3 max-w-md text-white/80">
						No paperwork, no branch visits, no fine print written to be skipped.
					</p>
					<a
						href="#"
						className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-[#078b5b] hover:bg-[#10231c] hover:text-white transition-colors"
					>
						<Smartphone className="h-4 w-4" />
						Open your account
					</a>
				</div>
			</section>

			{/* Footer */}
			<footer className="border-t border-[#e8efec] px-4 sm:px-6 md:px-12 py-10">
				<div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center">
					<a href="#" className="flex items-center gap-2 text-base font-extrabold tracking-tight">
						<span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#0bbf7d] text-white">
							<Zap className="h-3.5 w-3.5" />
						</span>
						Nova
					</a>
					<nav className="flex flex-wrap justify-center gap-4 sm:gap-8 text-sm text-[#8aa098]">
						<a href="#" className="hover:text-[#10231c] transition-colors">
							Security
						</a>
						<a href="#" className="hover:text-[#10231c] transition-colors">
							Fees
						</a>
						<a href="#" className="hover:text-[#10231c] transition-colors">
							Careers
						</a>
						<a href="#" className="hover:text-[#10231c] transition-colors">
							Press
						</a>
					</nav>
					<p className="text-xs text-[#8aa098]">© 2025 Nova Financial B.V.</p>
				</div>
				<p className="mt-6 max-w-2xl text-[11px] leading-relaxed text-[#b3c2bc]">
					Nova is a registered credit institution supervised by the ECB. Your
					eligible deposits are protected up to €100 000 by the Deposit Guarantee
					Scheme.
				</p>
			</footer>
		</div>
	);
}
