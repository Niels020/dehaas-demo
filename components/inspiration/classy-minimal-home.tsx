import Image from "next/image";

export function ClassyMinimalHome() {
	return (
		<div
			className="min-h-screen bg-[#f9f7f4] text-zinc-900"
			style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
		>
			{/* Navigation */}
			<header className="flex items-center justify-between px-12 py-6 border-b border-zinc-200 bg-white">
				<span className="text-lg tracking-[0.35em] uppercase font-light text-zinc-800">
					Forme
				</span>
				<nav className="flex gap-8 text-xs tracking-widest uppercase text-zinc-400">
					<a href="#" className="hover:text-zinc-900 transition-colors">
						Collections
					</a>
					<a href="#" className="hover:text-zinc-900 transition-colors">
						Materials
					</a>
					<a href="#" className="hover:text-zinc-900 transition-colors">
						Showrooms
					</a>
					<a href="#" className="hover:text-zinc-900 transition-colors">
						Trade
					</a>
				</nav>
				<a
					href="#"
					className="text-xs tracking-widest uppercase border border-zinc-300 px-5 py-2.5 hover:bg-zinc-900 hover:text-white hover:border-zinc-900 transition-colors"
				>
					Book Showroom
				</a>
			</header>

			{/* Hero */}
			<section className="relative grid grid-cols-2 min-h-[560px]">
				{/* Left: hero image */}
				<div className="relative overflow-hidden">
					<Image
						src="/bench-accounting-nvzvOPQW0gc-unsplash.jpg"
						alt="Minimal desk with chair"
						fill
						sizes="50vw"
						className="object-cover object-center"
					/>
				</div>
				{/* Right: copy */}
				<div className="flex flex-col justify-center px-16 py-16 bg-[#f9f7f4]">
					<p className="text-xs tracking-[0.4em] uppercase text-zinc-400 mb-6">
						New Collection — 2025
					</p>
					<h1 className="text-5xl font-light leading-snug tracking-tight text-zinc-900 mb-8">
						Furniture that
						<br />
						<em>outlives</em> trends
					</h1>
					<div className="w-10 h-px bg-zinc-400 mb-8" />
					<p className="text-zinc-500 text-base max-w-xs leading-relaxed mb-10">
						Every piece is designed to age gracefully — in your home for
						decades, not seasons.
					</p>
					<a
						href="#"
						className="text-xs tracking-widest uppercase border-b border-zinc-800 pb-1 w-fit hover:text-zinc-500 transition-colors"
					>
						Explore the collection
					</a>
				</div>
			</section>

			{/* Categories */}
			<section className="grid grid-cols-4 border-t border-zinc-200">
				{[
					{ label: "Seating", count: "42 pieces" },
					{ label: "Tables", count: "28 pieces" },
					{ label: "Storage", count: "19 pieces" },
					{ label: "Lighting", count: "31 pieces" },
				].map((cat) => (
					<div
						key={cat.label}
						className="px-8 py-10 text-center border-r last:border-r-0 border-zinc-200 group cursor-pointer hover:bg-white transition-colors"
					>
						<h3 className="text-lg font-light mb-2 tracking-wide">
							{cat.label}
						</h3>
						<p className="text-xs text-zinc-400 tracking-widest uppercase">
							{cat.count}
						</p>
						<span className="block mt-4 text-zinc-300 group-hover:text-zinc-700 transition-colors text-sm">
							→
						</span>
					</div>
				))}
			</section>

			{/* Materials */}
			<section className="py-24 px-12 bg-white">
				<div className="grid grid-cols-2 gap-16 items-center">
					<div>
						<p className="text-xs tracking-[0.4em] uppercase text-zinc-400 mb-6">
							Our Philosophy
						</p>
						<h2 className="text-4xl font-light leading-snug mb-8">
							Honest materials,
							<br />
							conscious craft
						</h2>
						<p className="text-zinc-500 text-sm leading-relaxed max-w-sm mb-8">
							We work exclusively with sustainably sourced solid woods,
							vegetable-tanned leathers, and natural stone — materials that tell
							a story as they age.
						</p>
						<a
							href="#"
							className="text-xs tracking-widest uppercase border-b border-zinc-800 pb-1 hover:text-zinc-500 transition-colors"
						>
							Our Materials
						</a>
					</div>
					<div className="grid grid-cols-2 gap-3">
						{[
							{ name: "White Oak", bg: "#d9c9b0" },
							{ name: "Walnut", bg: "#8b6545" },
							{ name: "Linen", bg: "#e8e0d4" },
							{ name: "Marble", bg: "#eeece8" },
						].map((mat) => (
							<div
								key={mat.name}
								className="h-28 rounded-sm flex items-end p-3"
								style={{ backgroundColor: mat.bg }}
							>
								<span className="text-xs text-zinc-700/70 tracking-widest uppercase">
									{mat.name}
								</span>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Featured pieces */}
			<section className="py-24 px-12 bg-[#f9f7f4]">
				<div className="flex items-end justify-between mb-12">
					<div>
						<p className="text-xs tracking-[0.4em] uppercase text-zinc-400 mb-3">
							Featured
						</p>
						<h2 className="text-4xl font-light">New arrivals</h2>
					</div>
					<a
						href="#"
						className="text-xs tracking-widest uppercase border-b border-zinc-400 pb-1 text-zinc-400 hover:text-zinc-900 hover:border-zinc-900 transition-colors"
					>
						View all
					</a>
				</div>
				<div className="grid grid-cols-3 gap-6">
					{/* Card 1 — lounge chair */}
					<div className="group cursor-pointer">
						<div className="relative h-64 rounded-sm mb-4 overflow-hidden bg-[#ebebeb]">
							<Image
								src="/ellen-qin-bxLhqZIp2LI-unsplash.jpg"
								alt="Séville Lounge Chair"
								fill
								sizes="33vw"
								className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
							/>
						</div>
						<p className="text-xs text-zinc-400 mb-1 tracking-widest uppercase">
							White Oak / Linen
						</p>
						<h4 className="text-base font-light">Séville Lounge Chair</h4>
					</div>
					{/* Card 2 — dining table */}
					<div className="group cursor-pointer">
						<div className="relative h-64 rounded-sm mb-4 overflow-hidden bg-[#e8e3db]">
							<Image
								src="/sarah-dorweiler-WohqvxsSNU8-unsplash.jpg"
								alt="Ardoise Dining Table"
								fill
								sizes="33vw"
								className="object-cover object-bottom group-hover:scale-105 transition-transform duration-500"
							/>
						</div>
						<p className="text-xs text-zinc-400 mb-1 tracking-widest uppercase">
							Solid Walnut
						</p>
						<h4 className="text-base font-light">Ardoise Dining Table</h4>
					</div>
					{/* Card 3 — sofa */}
					<div className="group cursor-pointer">
						<div className="relative h-64 rounded-sm mb-4 overflow-hidden bg-[#d8d4ce]">
							<Image
								src="/parichehr-rezaei-j71LdLOCTIM-unsplash.jpg"
								alt="Belvédère Sofa"
								fill
								sizes="33vw"
								className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
							/>
						</div>
						<p className="text-xs text-zinc-400 mb-1 tracking-widest uppercase">
							Grain Leather / Oak
						</p>
						<h4 className="text-base font-light">Belvédère Sofa</h4>
					</div>
				</div>
			</section>

			{/* Showroom CTA */}
			<section className="py-20 px-12 bg-zinc-900 text-white text-center">
				<p className="text-xs tracking-[0.4em] uppercase text-zinc-400 mb-6">
					Experience in person
				</p>
				<h2 className="text-4xl font-light mb-6">Visit our showroom</h2>
				<p className="text-zinc-400 max-w-sm mx-auto mb-10 text-sm leading-relaxed">
					Some things need to be touched. Our consultants are on hand to guide
					you through every detail.
				</p>
				<a
					href="#"
					className="border border-white/30 text-xs tracking-widest uppercase px-8 py-4 hover:bg-white hover:text-zinc-900 transition-colors"
				>
					Book an appointment
				</a>
			</section>

			{/* Footer */}
			<footer className="border-t border-zinc-200 bg-white px-12 py-8 flex justify-between items-center text-xs text-zinc-400 tracking-widest uppercase">
				<span className="text-zinc-700 font-light text-base tracking-[0.35em]">
					Forme
				</span>
				<nav className="flex gap-8">
					<a href="#" className="hover:text-zinc-700 transition-colors">
						Collections
					</a>
					<a href="#" className="hover:text-zinc-700 transition-colors">
						Showrooms
					</a>
					<a href="#" className="hover:text-zinc-700 transition-colors">
						Trade Programme
					</a>
					<a href="#" className="hover:text-zinc-700 transition-colors">
						Contact
					</a>
				</nav>
				<span>© 2025</span>
			</footer>
		</div>
	);
}
