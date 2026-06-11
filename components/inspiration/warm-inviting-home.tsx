import Image from "next/image";

export function WarmInvitingHome() {
	return (
		<div
			className="min-h-screen bg-[#fdf6ee] text-[#3d2c1e]"
			style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
		>
			{/* Navigation */}
			<header className="flex items-center justify-between px-10 py-4 bg-[#3d2c1e]">
				<div>
					<span className="text-xl font-bold text-[#f5dfc0]">
						The Daily Grind
					</span>
					<p className="text-xs text-[#c4a882] tracking-widest uppercase">
						Specialty Coffee
					</p>
				</div>
				<nav className="flex gap-8 text-sm text-[#c4a882]">
					<a href="#" className="hover:text-[#f5dfc0] transition-colors">
						Menu
					</a>
					<a href="#" className="hover:text-[#f5dfc0] transition-colors">
						Our Beans
					</a>
					<a href="#" className="hover:text-[#f5dfc0] transition-colors">
						Catering
					</a>
					<a href="#" className="hover:text-[#f5dfc0] transition-colors">
						Find Us
					</a>
				</nav>
				<a
					href="#"
					className="bg-[#c26f3c] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#a85c2e] transition-colors"
				>
					Order Online
				</a>
			</header>

			{/* Hero */}
			<section className="relative py-24 px-10 overflow-hidden bg-[#3d2c1e]">
				<Image
					src="/nathan-dumlao-pMW4jzELQCw-unsplash.jpg"
					alt="Coffee shop atmosphere"
					fill
					sizes="100vw"
					className="object-cover object-center"
					priority
				/>
				<div className="absolute inset-0 bg-gradient-to-br from-[#3d2c1e]/85 via-[#3d2c1e]/70 to-[#3d2c1e]/50" />
				<div className="relative max-w-2xl">
					<p className="text-[#c26f3c] font-semibold mb-4 text-sm uppercase tracking-wider">
						Freshly roasted daily
					</p>
					<h1 className="text-6xl leading-tight font-bold text-[#f5dfc0] mb-6">
						Your favourite
						<br />
						corner of the
						<br />
						<em className="text-[#c26f3c]">world</em>
					</h1>
					<p className="text-lg text-[#c4a882] max-w-sm leading-relaxed mb-10">
						Single-origin brews, homemade pastries and a seat by the window —
						every morning since 2017.
					</p>
					<div className="flex gap-4 items-center">
						<a
							href="#"
							className="bg-[#c26f3c] text-white px-8 py-4 rounded-2xl font-semibold hover:bg-[#a85c2e] transition-colors"
						>
							See our menu
						</a>
						<a
							href="#"
							className="text-[#c4a882] font-semibold hover:text-[#f5dfc0] transition-colors"
						>
							Find a location →
						</a>
					</div>
				</div>
			</section>

			{/* Our story */}
			<section className="px-10 py-20 bg-[#fdf6ee]">
				<div className="max-w-2xl mx-auto text-center">
					<p className="text-[#c26f3c] text-xs uppercase tracking-widest font-semibold mb-6">
						In the cup
					</p>
					<h2 className="text-4xl font-bold text-[#3d2c1e] mb-8 leading-snug">
						Every bean has
						<br />a story worth tasting
					</h2>
					<p className="text-[#7a5c46] leading-relaxed mb-6">
						We source our beans from small farms in Ethiopia, Colombia and
						Guatemala — places where altitude, soil and the hands of the farmer
						shape every harvest. We visit each farm personally, cup the lots on
						site, and only bring home what genuinely excites us.
					</p>
					<p className="text-[#7a5c46] leading-relaxed mb-6">
						Back home, our head roaster works in small batches, dialling in each
						origin to highlight what makes it distinct — the bright citrus of a
						natural Ethiopian, the smooth caramel weight of a washed Colombian,
						the dark cocoa depth of a Guatemalan grown at 1 800 metres.
					</p>
					<p className="text-[#7a5c46] leading-relaxed">
						The result lands in your cup within days of roasting. No blends
						designed to hide flaws. Just honest, seasonal coffee served the way
						it deserves to be.
					</p>
					<div className="w-12 h-px bg-[#c26f3c]/40 mx-auto mt-10" />
				</div>
			</section>

			{/* Story / ambience */}
			<section className="grid grid-cols-2 gap-0">
				<div className="relative h-72 overflow-hidden">
					<Image
						src="/rizky-subagja-1k7TnX5GAww-unsplash.jpg"
						alt="Café terrace with a latte, croissant and open magazine on wooden tables"
						fill
						sizes="50vw"
						className="object-cover object-center"
					/>
				</div>
				<div className="bg-[#fdf6ee] px-12 flex flex-col justify-center py-12">
					<p className="text-[#c26f3c] text-xs uppercase tracking-widest font-semibold mb-4">
						Our story
					</p>
					<h2 className="text-3xl font-bold text-[#3d2c1e] mb-6">
						Rooted in community,
						<br />
						brewed with care
					</h2>
					<p className="text-sm text-[#7a5c46] leading-relaxed max-w-xs">
						We started as a tiny cart at the weekend market. Today we have three
						locations, but the same recipe: great beans, honest prices and a
						friendly face.
					</p>
				</div>
			</section>

			{/* Testimonial */}
			<section className="bg-[#c26f3c] px-10 py-14 text-center">
				<p className="text-white/70 text-xs uppercase tracking-widest mb-6 font-semibold">
					From our regulars
				</p>
				<blockquote className="text-2xl text-white italic font-medium max-w-xl mx-auto leading-relaxed">
					&ldquo;The flat white here is the only reason I leave my house before
					9am. I&apos;m not even sorry.&rdquo;
				</blockquote>
				<cite className="mt-5 block text-white/70 text-sm not-italic">
					— Sonya F., daily regular
				</cite>
			</section>

			{/* Atmosphere image */}
			<section className="relative h-64 overflow-hidden">
				<Image
					src="/ante-samarzija-lsmu0rUhUOk-unsplash.jpg"
					alt="Steaming coffee cup with beans splashing on a dark background"
					fill
					sizes="100vw"
					className="object-cover object-[center_70%]"
				/>
				<div className="absolute inset-0 bg-[#3d2c1e]/20" />
			</section>

			{/* Loyalty & Newsletter */}
			<section className="bg-[#f4ddc8] px-10 py-16">
				<div className="grid grid-cols-2 gap-12 items-center">
					<div>
						<span className="text-4xl">🎟️</span>
						<h2 className="text-3xl font-bold text-[#3d2c1e] mt-4 mb-3">
							Loyalty card
						</h2>
						<p className="text-[#7a5c46] text-sm leading-relaxed mb-6">
							Every 10th coffee is on us. Pick up a card in store or sign up
							digitally.
						</p>
						<a
							href="#"
							className="inline-block bg-[#3d2c1e] text-white px-6 py-3 rounded-2xl text-sm font-semibold hover:bg-[#c26f3c] transition-colors"
						>
							Join the programme
						</a>
					</div>
					<div>
						<h2 className="text-2xl font-bold text-[#3d2c1e] mb-3">
							Stay in the loop ☕
						</h2>
						<p className="text-[#7a5c46] text-sm mb-6">
							New beans, seasonal specials and the occasional recipe.
						</p>
						<div className="flex gap-3">
							<input
								type="email"
								placeholder="your@email.com"
								readOnly
								className="flex-1 px-4 py-3 rounded-xl border border-[#e8d5c4] bg-white text-[#3d2c1e] text-sm focus:outline-none"
							/>
							<span className="bg-[#c26f3c] text-white px-5 py-3 rounded-xl font-semibold text-sm cursor-pointer">
								Subscribe
							</span>
						</div>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="bg-[#3d2c1e] px-10 py-8 flex justify-between items-center text-[#c4a882] text-sm">
				<div>
					<span className="font-bold text-[#f5dfc0] text-lg block">
						The Daily Grind
					</span>
					<span className="text-xs text-[#c4a882]/60">Specialty Coffee</span>
				</div>
				<nav className="flex gap-6 text-[#c4a882]/70 text-xs uppercase tracking-wider">
					<a href="#" className="hover:text-white transition-colors">
						Menu
					</a>
					<a href="#" className="hover:text-white transition-colors">
						Locations
					</a>
					<a href="#" className="hover:text-white transition-colors">
						Catering
					</a>
					<a href="#" className="hover:text-white transition-colors">
						Instagram
					</a>
				</nav>
				<p className="text-xs text-[#c4a882]/50">Made with ♥ — © 2025</p>
			</footer>
		</div>
	);
}
