export function CorkyCreativeHome() {
	return (
		<div
			className="min-h-screen bg-[#f0ede8] text-zinc-900"
			style={{ fontFamily: "'Arial', sans-serif" }}
		>
			{/* Navigation */}
			<header className="flex items-center justify-between px-8 py-5 bg-[#111111]">
				<span className="text-2xl font-black text-white">
					✦ Pixel<span className="text-[#ffd60a]">Push</span>
				</span>
				<nav className="flex gap-6 text-sm font-bold text-white/70">
					<a href="#" className="hover:text-[#ffd60a] transition-colors">
						Work
					</a>
					<a href="#" className="hover:text-[#ffd60a] transition-colors">
						Services
					</a>
					<a href="#" className="hover:text-[#ffd60a] transition-colors">
						About
					</a>
					<a href="#" className="hover:text-[#ffd60a] transition-colors">
						Blog
					</a>
				</nav>
				<a
					href="#"
					className="bg-[#ffd60a] text-[#111111] font-black text-xs px-5 py-2.5 rounded-full hover:scale-105 transition-transform"
				>
					Start a project ✦
				</a>
			</header>

			{/* Hero */}
			<section className="relative px-8 py-20 overflow-hidden">
				<div className="absolute top-0 right-0 w-80 h-80 bg-[#ff6b6b] rounded-full -translate-y-1/3 translate-x-1/4 opacity-20" />
				<div className="absolute bottom-0 left-0 w-56 h-56 bg-[#ffd60a] rounded-full translate-y-1/3 -translate-x-1/4 opacity-30" />
				<div className="absolute top-1/3 right-1/4 w-36 h-36 bg-[#7b61ff] rounded-full opacity-15" />
				<div className="relative max-w-4xl">
					<span className="inline-block bg-[#ffd60a] text-[#111111] font-black text-xs px-4 py-1.5 rounded-full mb-8 uppercase tracking-wider rotate-[-1deg]">
						🎨 Design Studio
					</span>
					<h1 className="text-7xl font-black leading-none tracking-tighter text-[#111111] mb-8">
						We design
						<br />
						<span className="text-[#ff6b6b]">brands</span> that
						<br />
						people <span className="italic">remember</span>
					</h1>
					<p className="text-xl text-zinc-600 max-w-md leading-relaxed">
						Branding, UI/UX & digital campaigns for companies that want to be
						unforgettable.
					</p>
					<div className="mt-10 flex gap-4">
						<a
							href="#"
							className="bg-[#111111] text-white px-8 py-4 rounded-full font-bold text-sm hover:bg-[#ff6b6b] transition-colors"
						>
							See our work →
						</a>
						<a
							href="#"
							className="border-2 border-[#111111] px-8 py-4 rounded-full font-bold text-sm hover:bg-[#111111] hover:text-white transition-colors"
						>
							Let&apos;s talk
						</a>
					</div>
				</div>
			</section>

			{/* Marquee strip */}
			<div className="bg-[#111111] text-[#ffd60a] py-4 font-black uppercase text-sm tracking-widest overflow-hidden">
				<div className="flex gap-12 whitespace-nowrap">
					{[
						"★ Branding",
						"★ UI/UX Design",
						"★ Motion Graphics",
						"★ Strategy",
						"★ Visual Identity",
						"★ Branding",
						"★ UI/UX Design",
						"★ Motion Graphics",
						"★ Strategy",
						"★ Visual Identity",
					].map((t, i) => (
						<span key={i}>{t}</span>
					))}
				</div>
			</div>

			{/* Services */}
			<section className="px-8 py-16 grid grid-cols-3 gap-6">
				{[
					{
						emoji: "✏️",
						title: "Brand Identity",
						color: "#ff6b6b",
						desc: "Logo, colour, type & tone — your full brand system from scratch.",
						rotate: "-1deg",
					},
					{
						emoji: "🖥️",
						title: "UI/UX Design",
						color: "#ffd60a",
						desc: "Interfaces that delight users and convert visitors into fans.",
						rotate: "1.5deg",
					},
					{
						emoji: "🎬",
						title: "Motion & Content",
						color: "#7b61ff",
						desc: "Animations, reels & visual content that stops the scroll.",
						rotate: "-0.5deg",
					},
				].map((card) => (
					<div
						key={card.title}
						className="rounded-3xl p-8 shadow-md"
						style={{
							backgroundColor: card.color,
							transform: `rotate(${card.rotate})`,
						}}
					>
						<span className="text-5xl">{card.emoji}</span>
						<h3 className="text-xl font-black mt-4 mb-2 text-[#111111]">
							{card.title}
						</h3>
						<p className="text-sm text-[#111111]/70 leading-relaxed">
							{card.desc}
						</p>
					</div>
				))}
			</section>

			{/* Case studies */}
			<section className="px-8 py-10 bg-[#111111]">
				<div className="flex items-center justify-between mb-8">
					<h2 className="text-3xl font-black text-white">
						Selected <span className="text-[#ffd60a]">work</span>
					</h2>
					<a
						href="#"
						className="text-[#ffd60a] font-bold text-sm hover:underline"
					>
						View all →
					</a>
				</div>
				<div className="grid grid-cols-2 gap-4">
					{[
						{
							label: "Brand Overhaul",
							tag: "Identity & Web",
							sub: "Food & beverage client",
							bg: "#ff6b6b",
						},
						{
							label: "App Redesign",
							tag: "UI/UX",
							sub: "Fintech startup",
							bg: "#7b61ff",
						},
					].map((project) => (
						<div
							key={project.label}
							className="rounded-2xl h-44 flex flex-col justify-end p-6 cursor-pointer"
							style={{ backgroundColor: project.bg }}
						>
							<p className="text-xs font-bold uppercase tracking-widest text-white/70 mb-1">
								{project.tag}
							</p>
							<h4 className="text-2xl font-black text-white">
								{project.label}
							</h4>
							<p className="text-xs text-white/60 mt-1">{project.sub}</p>
						</div>
					))}
				</div>
			</section>

			{/* Process */}
			<section className="px-8 py-16 bg-[#f0ede8]">
				<h2 className="text-4xl font-black text-[#111111] mb-10">
					How we <span className="text-[#ff6b6b] italic">work</span>
				</h2>
				<div className="grid grid-cols-4 gap-6">
					{[
						{
							step: "01",
							label: "Discover",
							desc: "We dig deep into your brand, audience and goals.",
						},
						{
							step: "02",
							label: "Concept",
							desc: "Bold ideas backed by research and strategic thinking.",
						},
						{
							step: "03",
							label: "Create",
							desc: "Pixel-perfect execution with obsessive craft.",
						},
						{
							step: "04",
							label: "Launch",
							desc: "Delivered on time, refined until it shines.",
						},
					].map((p) => (
						<div key={p.step} className="bg-white rounded-2xl p-6">
							<span className="text-4xl font-black text-[#ffd60a]">
								{p.step}
							</span>
							<h4 className="text-lg font-black mt-3 mb-2">{p.label}</h4>
							<p className="text-sm text-zinc-500 leading-relaxed">{p.desc}</p>
						</div>
					))}
				</div>
			</section>

			{/* CTA */}
			<section className="px-8 py-20 text-center">
				<h2 className="text-5xl font-black text-[#111111] mb-4">
					Ready to stand out? 👀
				</h2>
				<p className="text-zinc-600 mb-8 text-lg">
					Let&apos;s make something you&apos;re proud to show off.
				</p>
				<a
					href="#"
					className="inline-block bg-[#111111] text-white px-12 py-5 rounded-full font-black text-sm hover:bg-[#ff6b6b] transition-colors"
				>
					Start a project ✦
				</a>
			</section>

			{/* Footer */}
			<footer className="bg-[#111111] px-8 py-8 flex justify-between items-center">
				<span className="text-white font-black text-xl">✦ PixelPush</span>
				<div className="flex gap-6 text-white/50 text-xs font-bold uppercase tracking-widest">
					<a href="#" className="hover:text-white transition-colors">
						Instagram
					</a>
					<a href="#" className="hover:text-white transition-colors">
						Dribbble
					</a>
					<a href="#" className="hover:text-white transition-colors">
						LinkedIn
					</a>
				</div>
				<p className="text-white/40 text-xs">© 2025 PixelPush Studio</p>
			</footer>
		</div>
	);
}
