import Image from "next/image";
import {
	ArrowRight,
	Calendar,
	Compass,
	MapPin,
	Mountain,
	ShieldCheck,
	Star,
	Tent,
	Users,
} from "lucide-react";

const expeditions = [
	{
		image: "/hikers-trail-unsplash.jpg",
		alt: "Two hikers on a trail beneath snow-capped peaks in Patagonia",
		region: "Patagonia, Chile",
		title: "Torres del Paine Circuit",
		days: "9 days",
		difficulty: "Challenging",
		price: "from €2 450",
	},
	{
		image: "/canoe-lake-unsplash.jpg",
		alt: "Wooden canoe gliding across a turquoise alpine lake",
		region: "Dolomites, Italy",
		title: "Alpine Lakes Traverse",
		days: "6 days",
		difficulty: "Moderate",
		price: "from €1 780",
	},
	{
		image: "/mountain-valley-light-unsplash.jpg",
		alt: "Lone hiker standing on a rock above a sunlit green valley",
		region: "Carpathians, Romania",
		title: "Ridges of the Wild East",
		days: "7 days",
		difficulty: "Moderate",
		price: "from €1 390",
	},
];

const promises = [
	{
		Icon: Users,
		title: "Small groups",
		description: "Never more than 10 travellers. Real conversations, no megaphone tours.",
	},
	{
		Icon: Compass,
		title: "Local guides",
		description: "Led by people born in these valleys — their shortcuts, their stories.",
	},
	{
		Icon: Tent,
		title: "Wild camps",
		description: "Hand-picked camps and mountain huts far from the crowded routes.",
	},
	{
		Icon: ShieldCheck,
		title: "Fully covered",
		description: "Certified guides, satellite comms and full expedition insurance included.",
	},
];

export function AdventureTravelHome() {
	return (
		<div
			className="min-h-screen bg-[#fbfaf7] text-[#1f2a24]"
			style={{ fontFamily: "'Helvetica Neue', 'Arial', sans-serif" }}
		>
			{/* Navigation */}
			<header className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-4 sm:px-6 md:px-12 py-4 sm:py-6">
				<a href="#" className="flex items-center gap-2 text-lg font-bold tracking-tight text-white">
					<Mountain className="h-5 w-5 text-[#e8b04b]" />
					Wildpath
				</a>
				<nav className="hidden md:flex gap-8 text-sm font-medium text-white/80">
					<a href="#" className="hover:text-white transition-colors">
						Expeditions
					</a>
					<a href="#" className="hover:text-white transition-colors">
						Destinations
					</a>
					<a href="#" className="hover:text-white transition-colors">
						Guides
					</a>
					<a href="#" className="hover:text-white transition-colors">
						Journal
					</a>
				</nav>
				<a
					href="#"
					className="rounded-full bg-[#e8b04b] px-5 py-2.5 text-sm font-bold text-[#1f2a24] hover:bg-white transition-colors"
				>
					Plan your trip
				</a>
			</header>

			{/* Hero */}
			<section className="relative flex min-h-[480px] sm:min-h-[560px] md:min-h-[640px] items-end overflow-hidden">
				<Image
					src="/mountain-peak-hero-unsplash.jpg"
					alt="Snow-capped peaks rising above a sea of clouds at sunrise"
					fill
					sizes="100vw"
					priority
					className="object-cover object-center"
				/>
				<div className="absolute inset-0 bg-gradient-to-t from-[#101813]/90 via-[#101813]/30 to-[#101813]/20" />
				<div className="relative z-10 w-full px-4 sm:px-6 md:px-12 pb-10 sm:pb-16">
					<p className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.3em] text-[#e8b04b]">
						<Compass className="h-4 w-4" />
						Est. 2014 — 40+ routes worldwide
					</p>
					<h1 className="max-w-3xl text-3xl sm:text-4xl md:text-6xl font-bold leading-[1.05] tracking-tight text-white">
						Go where the
						<br />
						road gives up
					</h1>
					<div className="mt-8 flex flex-col items-start gap-6 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
						<p className="max-w-md text-base leading-relaxed text-white/75">
							Small-group expeditions to the quiet corners of the world — guided
							by locals, carried by your own two feet.
						</p>
						<a
							href="#"
							className="flex shrink-0 items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-bold text-[#1f2a24] hover:bg-[#e8b04b] transition-colors"
						>
							Browse expeditions
							<ArrowRight className="h-4 w-4" />
						</a>
					</div>
				</div>
			</section>

			{/* Stats strip */}
			<section className="grid grid-cols-2 sm:grid-cols-4 gap-6 border-b border-[#e5e1d8] bg-white px-4 sm:px-6 md:px-12 py-8 text-center">
				{[
					{ value: "4 800+", label: "Travellers guided" },
					{ value: "23", label: "Countries" },
					{ value: "98%", label: "Would go again" },
					{ value: "4.9", label: "Average rating" },
				].map((stat) => (
					<div key={stat.label}>
						<p className="text-3xl font-bold tracking-tight text-[#1f2a24]">{stat.value}</p>
						<p className="mt-1 text-xs uppercase tracking-widest text-[#8a9088]">
							{stat.label}
						</p>
					</div>
				))}
			</section>

			{/* Expeditions */}
			<section className="px-4 sm:px-6 md:px-12 py-12 sm:py-16 md:py-20">
				<div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
					<div>
						<p className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-[#5c7a5c]">
							Departing soon
						</p>
						<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">This season&apos;s expeditions</h2>
					</div>
					<a
						href="#"
						className="flex items-center gap-1 text-sm font-bold text-[#5c7a5c] hover:text-[#1f2a24] transition-colors"
					>
						All 40 routes
						<ArrowRight className="h-4 w-4" />
					</a>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
					{expeditions.map((trip) => (
						<div
							key={trip.title}
							className="group cursor-pointer overflow-hidden rounded-2xl border border-[#e5e1d8] bg-white shadow-sm hover:shadow-lg transition-shadow"
						>
							<div className="relative h-56 overflow-hidden">
								<Image
									src={trip.image}
									alt={trip.alt}
									fill
									sizes="(max-width: 640px) 100vw, 33vw"
									className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
								/>
								<span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-[#1f2a24] backdrop-blur-sm">
									{trip.difficulty}
								</span>
							</div>
							<div className="p-6">
								<p className="mb-2 flex items-center gap-1.5 text-xs font-medium uppercase tracking-widest text-[#8a9088]">
									<MapPin className="h-3.5 w-3.5 text-[#e8b04b]" />
									{trip.region}
								</p>
								<h3 className="text-xl font-bold tracking-tight">{trip.title}</h3>
								<div className="mt-4 flex items-center justify-between border-t border-[#eeeae2] pt-4 text-sm">
									<span className="flex items-center gap-1.5 text-[#8a9088]">
										<Calendar className="h-4 w-4" />
										{trip.days}
									</span>
									<span className="font-bold text-[#1f2a24]">{trip.price}</span>
								</div>
							</div>
						</div>
					))}
				</div>
			</section>

			{/* Promises */}
			<section className="bg-[#1f2a24] px-4 sm:px-6 md:px-12 py-12 sm:py-16 md:py-20 text-white">
				<div className="mb-12 max-w-xl">
					<p className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-[#e8b04b]">
						The Wildpath way
					</p>
					<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight tracking-tight">
						Adventure, without
						<br />
						the guesswork
					</h2>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
					{promises.map(({ Icon, title, description }) => (
						<div key={title}>
							<div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#e8b04b]/15">
								<Icon className="h-6 w-6 text-[#e8b04b]" />
							</div>
							<h3 className="mb-2 text-lg font-bold">{title}</h3>
							<p className="text-sm leading-relaxed text-white/60">{description}</p>
						</div>
					))}
				</div>
			</section>

			{/* Testimonial */}
			<section className="bg-[#fbfaf7] px-4 sm:px-6 md:px-12 py-12 sm:py-16 md:py-20 text-center">
				<div className="mx-auto mb-4 flex items-center justify-center gap-1 text-[#e8b04b]">
					{Array.from({ length: 5 }).map((_, i) => (
						<Star key={i} className="h-5 w-5 fill-current" />
					))}
				</div>
				<blockquote className="mx-auto max-w-2xl text-2xl font-medium leading-relaxed text-[#1f2a24]">
					&ldquo;Eight days without a single bar of signal, and I&apos;ve never felt
					more connected. The guides knew every stream, every shepherd, every
					shortcut.&rdquo;
				</blockquote>
				<p className="mt-6 text-sm font-bold uppercase tracking-widest text-[#8a9088]">
					Jonas K. — Ridges of the Wild East, 2024
				</p>
			</section>

			{/* CTA */}
			<section className="px-4 sm:px-6 md:px-12 pb-12 sm:pb-16 md:pb-20">
				<div className="flex flex-col items-start gap-6 rounded-3xl bg-[#5c7a5c] px-6 sm:px-10 md:px-14 py-10 md:py-14 sm:flex-row sm:items-center sm:justify-between">
					<div>
						<h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
							Not sure which trail is yours?
						</h2>
						<p className="mt-2 max-w-md text-white/75">
							Take the 2-minute route finder and we&apos;ll match you with three
							expeditions that fit your legs and your calendar.
						</p>
					</div>
					<a
						href="#"
						className="flex shrink-0 items-center gap-2 rounded-full bg-[#e8b04b] px-8 py-4 text-sm font-bold text-[#1f2a24] hover:bg-white transition-colors"
					>
						Find my route
						<ArrowRight className="h-4 w-4" />
					</a>
				</div>
			</section>

			{/* Footer */}
			<footer className="border-t border-[#e5e1d8] bg-white px-4 sm:px-6 md:px-12 py-10">
				<div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row">
					<a href="#" className="flex items-center gap-2 text-base font-bold tracking-tight">
						<Mountain className="h-5 w-5 text-[#e8b04b]" />
						Wildpath
					</a>
					<nav className="flex flex-wrap justify-center gap-4 sm:gap-8 text-sm text-[#8a9088]">
						<a href="#" className="hover:text-[#1f2a24] transition-colors">
							Expeditions
						</a>
						<a href="#" className="hover:text-[#1f2a24] transition-colors">
							Sustainability
						</a>
						<a href="#" className="hover:text-[#1f2a24] transition-colors">
							FAQ
						</a>
						<a href="#" className="hover:text-[#1f2a24] transition-colors">
							Contact
						</a>
					</nav>
					<p className="text-xs text-[#8a9088]">© 2025 Wildpath Expeditions</p>
				</div>
			</footer>
		</div>
	);
}
