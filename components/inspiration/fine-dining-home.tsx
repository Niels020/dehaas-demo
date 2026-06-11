import Image from "next/image";
import { Clock, MapPin, Phone, Sparkles, Wine } from "lucide-react";

const menu = [
	{
		course: "I",
		name: "Cured Arctic Char",
		detail: "buttermilk · dill oil · pickled kohlrabi",
	},
	{
		course: "II",
		name: "Charred Leek Velouté",
		detail: "smoked crème fraîche · rye crumb",
	},
	{
		course: "III",
		name: "Aged Duck Breast",
		detail: "black garlic · roasted beetroot · jus gras",
	},
	{
		course: "IV",
		name: "Salt-Baked Celeriac",
		detail: "brown butter · hazelnut · sage",
	},
	{
		course: "V",
		name: "Woodland Honey Parfait",
		detail: "bee pollen · chamomile · sea buckthorn",
	},
];

export function FineDiningHome() {
	return (
		<div
			className="min-h-screen bg-[#171410] text-[#e9e2d6]"
			style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
		>
			{/* Navigation */}
			<header className="flex items-center justify-between border-b border-[#2e2820] px-12 py-6">
				<nav className="flex gap-8 text-xs uppercase tracking-[0.25em] text-[#9a8f7d]">
					<a href="#" className="hover:text-[#e9e2d6] transition-colors">
						Menu
					</a>
					<a href="#" className="hover:text-[#e9e2d6] transition-colors">
						Wine Cellar
					</a>
				</nav>
				<a href="#" className="text-center">
					<span className="block text-2xl tracking-[0.3em] text-[#e9e2d6]">EMBER</span>
					<span className="mt-1 block text-[10px] uppercase tracking-[0.5em] text-[#b08d4f]">
						Restaurant
					</span>
				</a>
				<nav className="flex items-center gap-8 text-xs uppercase tracking-[0.25em] text-[#9a8f7d]">
					<a href="#" className="hover:text-[#e9e2d6] transition-colors">
						Private Dining
					</a>
					<a
						href="#"
						className="border border-[#b08d4f] px-5 py-2.5 text-[#b08d4f] hover:bg-[#b08d4f] hover:text-[#171410] transition-colors"
					>
						Reserve
					</a>
				</nav>
			</header>

			{/* Hero */}
			<section className="relative flex min-h-[620px] items-center justify-center overflow-hidden text-center">
				<Image
					src="/restaurant-interior-unsplash.jpg"
					alt="Candlelit restaurant table with plated dish and wine glasses"
					fill
					sizes="100vw"
					priority
					className="object-cover object-center"
				/>
				<div className="absolute inset-0 bg-[#171410]/70" />
				<div className="relative z-10 max-w-2xl px-8">
					<p className="mb-6 text-xs uppercase tracking-[0.5em] text-[#b08d4f]">
						One Michelin Star — Est. 2016
					</p>
					<h1 className="text-6xl font-light leading-tight">
						Fire, season,
						<br />
						<em>patience</em>
					</h1>
					<div className="mx-auto my-8 h-px w-16 bg-[#b08d4f]" />
					<p className="mx-auto max-w-md text-base italic leading-relaxed text-[#e9e2d6]/70">
						A five-course conversation between the open hearth and whatever the
						season brings through our kitchen door.
					</p>
					<a
						href="#"
						className="mt-10 inline-block bg-[#b08d4f] px-10 py-4 text-xs uppercase tracking-[0.3em] text-[#171410] hover:bg-[#e9e2d6] transition-colors"
					>
						Reserve a table
					</a>
				</div>
			</section>

			{/* Tasting menu */}
			<section className="px-12 py-24">
				<div className="mx-auto max-w-2xl text-center">
					<p className="mb-3 text-xs uppercase tracking-[0.5em] text-[#b08d4f]">
						This season
					</p>
					<h2 className="text-4xl font-light">The Tasting Menu</h2>
					<p className="mt-4 text-sm italic text-[#9a8f7d]">
						Five courses · €115 — wine pairing €68
					</p>
				</div>
				<div className="mx-auto mt-14 max-w-xl">
					{menu.map((dish) => (
						<div
							key={dish.course}
							className="flex items-baseline gap-6 border-b border-[#2e2820] py-6 last:border-b-0"
						>
							<span className="w-8 shrink-0 text-sm tracking-widest text-[#b08d4f]">
								{dish.course}
							</span>
							<div className="flex-1">
								<h3 className="text-xl font-light">{dish.name}</h3>
								<p className="mt-1 text-sm italic text-[#9a8f7d]">{dish.detail}</p>
							</div>
						</div>
					))}
				</div>
				<p className="mt-10 text-center text-xs uppercase tracking-[0.3em] text-[#9a8f7d]">
					Vegetarian menu available on request
				</p>
			</section>

			{/* Chef */}
			<section className="grid grid-cols-2 items-stretch bg-[#1f1b15]">
				<div className="relative min-h-[480px] overflow-hidden">
					<Image
						src="/chef-knife-unsplash.jpg"
						alt="Chef finely chopping herbs on a cutting board"
						fill
						sizes="50vw"
						className="object-cover object-center"
					/>
				</div>
				<div className="flex flex-col justify-center px-16 py-16">
					<p className="mb-6 text-xs uppercase tracking-[0.5em] text-[#b08d4f]">
						The kitchen
					</p>
					<h2 className="mb-8 text-4xl font-light leading-snug">
						Cooked over oak,
						<br />
						plated by hand
					</h2>
					<p className="mb-4 max-w-md text-sm leading-relaxed text-[#9a8f7d]">
						Chef Elin Maes built Ember around a single wood-fired hearth. No gas,
						no shortcuts — every dish passes through flame, smoke or ember before
						it reaches the table.
					</p>
					<p className="max-w-md text-sm leading-relaxed text-[#9a8f7d]">
						The menu changes with the market, the weather, and occasionally her
						mood. We think that&apos;s a feature.
					</p>
					<a
						href="#"
						className="mt-8 w-fit border-b border-[#b08d4f] pb-1 text-xs uppercase tracking-[0.3em] text-[#b08d4f] hover:text-[#e9e2d6] hover:border-[#e9e2d6] transition-colors"
					>
						Meet the team
					</a>
				</div>
			</section>

			{/* Signature dish + bar */}
			<section className="grid grid-cols-2 items-stretch">
				<div className="flex flex-col justify-center px-16 py-20">
					<Sparkles className="mb-6 h-6 w-6 text-[#b08d4f]" />
					<h2 className="mb-6 text-3xl font-light leading-snug">
						The dish people
						<br />
						cross town for
					</h2>
					<p className="max-w-md text-sm leading-relaxed text-[#9a8f7d]">
						Hearth-roasted salmon, spinach wilted in brown butter, and a garden
						salsa cut minutes before serving. On the menu since night one — the
						only thing we&apos;ve never dared to change.
					</p>
				</div>
				<div className="relative min-h-[420px] overflow-hidden">
					<Image
						src="/plated-dish-unsplash.jpg"
						alt="Roasted salmon plated with greens and a dark reduction, red wine behind"
						fill
						sizes="50vw"
						className="object-cover object-center"
					/>
				</div>
			</section>
			<section className="grid grid-cols-2 items-stretch bg-[#1f1b15]">
				<div className="relative min-h-[420px] overflow-hidden">
					<Image
						src="/bar-interior-unsplash.jpg"
						alt="Warmly lit bar with chalkboard menus and rows of bottles"
						fill
						sizes="50vw"
						className="object-cover object-center"
					/>
				</div>
				<div className="flex flex-col justify-center px-16 py-20">
					<Wine className="mb-6 h-6 w-6 text-[#b08d4f]" />
					<h2 className="mb-6 text-3xl font-light leading-snug">
						The cellar bar
					</h2>
					<p className="mb-4 max-w-md text-sm leading-relaxed text-[#9a8f7d]">
						Forty-odd natural wines, a short list of sharp cocktails, and the
						full menu served at the counter — no reservation required.
					</p>
					<p className="max-w-md text-xs uppercase tracking-[0.3em] text-[#b08d4f]">
						Walk-ins welcome from 17:00
					</p>
				</div>
			</section>

			{/* Reservation strip */}
			<section className="border-y border-[#2e2820] px-12 py-20 text-center">
				<h2 className="text-4xl font-light">An evening at Ember</h2>
				<p className="mx-auto mt-4 max-w-md text-sm italic leading-relaxed text-[#9a8f7d]">
					Two seatings nightly, Wednesday through Sunday. Tables release on the
					first of each month.
				</p>
				<div className="mt-10 flex items-center justify-center gap-12 text-sm text-[#9a8f7d]">
					<span className="flex items-center gap-2">
						<Clock className="h-4 w-4 text-[#b08d4f]" />
						18:00 &amp; 20:45
					</span>
					<span className="flex items-center gap-2">
						<MapPin className="h-4 w-4 text-[#b08d4f]" />
						Vijzelgracht 14, Amsterdam
					</span>
					<span className="flex items-center gap-2">
						<Phone className="h-4 w-4 text-[#b08d4f]" />
						+31 20 555 0184
					</span>
				</div>
				<a
					href="#"
					className="mt-10 inline-block bg-[#b08d4f] px-10 py-4 text-xs uppercase tracking-[0.3em] text-[#171410] hover:bg-[#e9e2d6] transition-colors"
				>
					Book your evening
				</a>
			</section>

			{/* Footer */}
			<footer className="flex items-center justify-between px-12 py-8 text-xs uppercase tracking-[0.25em] text-[#9a8f7d]">
				<span className="tracking-[0.3em] text-[#e9e2d6]">EMBER</span>
				<nav className="flex gap-8">
					<a href="#" className="hover:text-[#e9e2d6] transition-colors">
						Gift Cards
					</a>
					<a href="#" className="hover:text-[#e9e2d6] transition-colors">
						Careers
					</a>
					<a href="#" className="hover:text-[#e9e2d6] transition-colors">
						Press
					</a>
				</nav>
				<span>© 2025</span>
			</footer>
		</div>
	);
}
