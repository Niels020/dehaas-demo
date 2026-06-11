import Image from "next/image";
import { Leaf, Moon, Sparkles, Waves } from "lucide-react";

const practices = [
	{
		Icon: Leaf,
		title: "Hatha",
		description: "Grounding sequences that build steadiness, mobility, and breath awareness.",
		duration: "60 – 90 min",
	},
	{
		Icon: Waves,
		title: "Vinyasa",
		description: "Fluid movement and mindful transitions to awaken strength and spaciousness.",
		duration: "60 min",
	},
	{
		Icon: Moon,
		title: "Yin",
		description: "Longer holds and quiet stillness to soften tension and invite deep release.",
		duration: "75 min",
	},
	{
		Icon: Sparkles,
		title: "Meditation",
		description: "Simple guided practices for clarity, rest, and returning to the present.",
		duration: "30 – 45 min",
	},
];

const elements = [
	{ label: "Earth", className: "bg-[#b5c4a8]" },
	{ label: "Water", className: "bg-[#7fa8a8]" },
	{ label: "Fire", className: "bg-[#c8a96e]" },
	{ label: "Air", className: "bg-[#ddd8cc]" },
];

const teachers = [
	{
		avatar: "🍃",
		name: "Mira Sol",
		specialty: "Breath & Flow",
		bio: "Mira leads spacious morning sequences rooted in breath, balance, and gentle resilience.",
	},
	{
		avatar: "🌾",
		name: "Leonie Vale",
		specialty: "Yin & Restore",
		bio: "Leonie creates deeply calming classes that invite softness, patience, and nervous system rest.",
	},
	{
		avatar: "🌿",
		name: "Arin Moss",
		specialty: "Meditation",
		bio: "Arin blends mindfulness, philosophy, and grounding ritual into practical daily practice.",
	},
];

export function WellnessStudioHome() {
	return (
		<div
			className="min-h-screen bg-[#f7f5f1] text-[#2d3a2d]"
			style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
		>
			<header className="border-b border-[#e0dbd3] bg-[#f7f5f1] px-12 py-6">
				<div className="flex items-center justify-between gap-8">
					<a href="#" className="flex items-center gap-3 text-[#2d3a2d] transition-colors">
						<span className="text-[#5c7a5c]">✦</span>
						<span className="text-xl font-light tracking-[0.2em]">Serenova</span>
					</a>
					<nav className="flex gap-8 text-sm tracking-wider text-[#6b7a6b]">
						<a href="#" className="hover:text-[#2d3a2d] transition-colors">
							Classes
						</a>
						<a href="#" className="hover:text-[#2d3a2d] transition-colors">
							Retreats
						</a>
						<a href="#" className="hover:text-[#2d3a2d] transition-colors">
							About
						</a>
						<a href="#" className="hover:text-[#2d3a2d] transition-colors">
							Journal
						</a>
					</nav>
					<a
						href="#"
						className="border border-[#5c7a5c] px-5 py-2 text-xs uppercase tracking-widest text-[#5c7a5c] transition-colors hover:bg-[#5c7a5c] hover:text-white"
					>
						Book a class
					</a>
				</div>
			</header>

			<section className="relative flex min-h-[600px] items-center justify-center overflow-hidden px-8 text-center">
				<Image
					src="/kike-vega-F2qh3yjz6Jk-unsplash.jpg"
					alt="Silhouette of woman doing yoga at sunrise"
					fill
					sizes="100vw"
					priority
					className="object-cover object-center"
				/>
				<div className="absolute inset-0 bg-[#2d3a2d]/50" />
				<div className="relative z-10 flex max-w-3xl flex-col items-center justify-center">
					<p className="mb-6 text-xs uppercase tracking-[0.5em] text-[#b5c4a8]">
						Find your stillness
					</p>
					<h1 className="mb-6 text-5xl font-light leading-snug text-white">
						Yoga for every
						<br />
						body, every day
					</h1>
					<p className="mb-10 max-w-xl text-sm italic text-white/70">
						A quiet place for movement, breath, and mindful ritual in the heart of the city.
					</p>
					<a
						href="#"
						className="bg-[#5c7a5c] px-10 py-4 text-sm uppercase tracking-widest text-white transition-colors hover:bg-[#4a6649]"
					>
						Begin your practice
					</a>
					<p className="mt-8 text-xs tracking-[0.3em] text-white/75 uppercase">
						500+ Students · 12 Teachers · 8 Years
					</p>
				</div>
			</section>

			<section className="bg-[#f7f5f1] px-12 py-16">
				<h2 className="mb-12 text-center text-3xl font-light text-[#2d3a2d]">Our practices</h2>
				<div className="grid grid-cols-4 gap-6">
					{practices.map((practice) => (
						<div key={practice.title} className="bg-[#edeae3] p-8 text-center">
							<div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#5c7a5c]/15">
								<practice.Icon className="h-6 w-6 text-[#5c7a5c]" strokeWidth={1.5} />
							</div>
							<h3 className="mt-4 mb-2 text-base font-light tracking-wider text-[#2d3a2d]">
								{practice.title}
							</h3>
							<p className="text-xs leading-relaxed text-[#6b7a6b]">
								{practice.description}
							</p>
							<p className="mt-3 text-xs uppercase tracking-widest text-[#5c7a5c]">
								{practice.duration}
							</p>
						</div>
					))}
				</div>
			</section>

			<section className="grid grid-cols-2 items-center gap-16 bg-white px-12 py-24">
				<div>
					<p className="mb-6 text-xs uppercase tracking-[0.4em] text-[#c8a96e]">Our philosophy</p>
					<h2 className="mb-6 text-4xl font-light leading-snug text-[#2d3a2d]">
						Movement as medicine
					</h2>
					<p className="mb-4 max-w-lg text-sm leading-relaxed text-[#6b7a6b]">
						We believe practice begins long before the mat. In the way we arrive, the way we breathe,
						and the way we listen inward. Each class at Serenova is designed to feel spacious,
						grounded, and quietly restorative.
					</p>
					<p className="max-w-lg text-sm leading-relaxed text-[#6b7a6b]">
						Rooted in classical yoga, informed by mindfulness, and softened by nature, our teaching asks
						for presence rather than perfection. We move slowly enough to notice what the body has been
						trying to say all along.
					</p>
					<a
						href="#"
						className="mt-8 inline-block border-b border-[#2d3a2d] pb-1 text-sm text-[#2d3a2d] transition-colors hover:text-[#5c7a5c] hover:border-[#5c7a5c]"
					>
						Read our philosophy →
					</a>
				</div>
				<div className="grid grid-cols-2 gap-4">
					{elements.map((element) => (
						<div key={element.label} className={`${element.className} flex h-28 items-end rounded-sm p-3`}>
							<span className="text-xs uppercase tracking-widest text-white/80">{element.label}</span>
						</div>
					))}
				</div>
			</section>

			<section className="bg-[#edeae3] px-12 py-20 text-center">
				<h2 className="mb-4 text-3xl font-light text-[#2d3a2d]">Meet your guides</h2>
				<p className="text-sm text-[#6b7a6b]">
					Experienced teachers offering thoughtful movement, meditation, and care.
				</p>
				<div className="mx-auto mt-12 grid max-w-3xl grid-cols-3 gap-8">
					{teachers.map((teacher) => (
						<div key={teacher.name} className="bg-[#f7f5f1] p-6 text-center">
							<div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-[#b5c4a8] text-2xl text-white">
								{teacher.avatar}
							</div>
							<h3 className="text-base font-light text-[#2d3a2d]">{teacher.name}</h3>
							<p className="mt-1 text-xs uppercase tracking-widest text-[#5c7a5c]">
								{teacher.specialty}
							</p>
							<p className="mt-3 text-xs leading-relaxed text-[#6b7a6b]">{teacher.bio}</p>
						</div>
					))}
				</div>
			</section>

			<section className="bg-[#5c7a5c] px-12 py-24 text-center">
				<h2 className="mb-4 text-4xl font-light text-white">Join our next retreat</h2>
				<p className="text-white/70">Five days in the mountains. Disconnect to reconnect.</p>
				<p className="mt-2 mb-8 text-sm tracking-wider text-[#b5c4a8]">
					Blue Ridge Highlands · October 14–18
				</p>
				<a
					href="#"
					className="border border-white px-10 py-4 text-xs uppercase tracking-widest text-white transition-colors hover:bg-white hover:text-[#5c7a5c]"
				>
					Reserve your place
				</a>
			</section>

			<section className="bg-white px-12 py-16 text-center">
				<div className="text-6xl leading-none text-[#b5c4a8]">&ldquo;</div>
				<blockquote className="mx-auto max-w-xl text-xl font-light italic leading-relaxed text-[#2d3a2d]">
					Serenova feels like an exhale. Every class leaves me steadier, softer, and more at home in my body.
				</blockquote>
				<p className="mt-6 text-sm uppercase tracking-widest text-[#6b7a6b]">Elena R. · Member since 2021</p>
			</section>

			<section className="bg-[#f7f5f1] px-12 py-16">
				<div className="mx-auto max-w-2xl text-center">
					<h3 className="mb-4 text-3xl font-light text-[#2d3a2d]">A slower inbox</h3>
					<p className="mb-8 text-sm leading-relaxed text-[#6b7a6b]">
						Receive practice notes, retreat announcements, and seasonal journal reflections.
					</p>
					<div className="flex items-center justify-center gap-3">
						<input
							type="email"
							placeholder="Email address"
							className="w-full max-w-sm rounded-none border border-[#ddd8cc] bg-white px-4 py-3 text-sm text-[#2d3a2d] outline-none"
						/>
						<button
							type="button"
							className="bg-[#5c7a5c] px-6 py-3 text-xs uppercase tracking-widest text-white transition-colors hover:bg-[#4a6649]"
						>
							Subscribe
						</button>
					</div>
				</div>
			</section>

			<footer className="bg-[#2d3a2d] px-12 py-10">
				<div className="grid grid-cols-[1.2fr_1fr_1fr] gap-10">
					<div>
						<a href="#" className="text-lg font-light tracking-[0.2em] text-[#b5c4a8]">
							✦ Serenova
						</a>
						<p className="mt-4 max-w-xs text-sm leading-relaxed text-[#6b7a6b]">
							Quietly rooted in movement, mindfulness, and the healing rhythm of nature.
						</p>
					</div>
					<div className="grid grid-cols-2 gap-6 text-sm text-[#b5c4a8]">
						<div className="space-y-3">
							<a href="#" className="block transition-colors hover:text-white">
								Classes
							</a>
							<a href="#" className="block transition-colors hover:text-white">
								Retreats
							</a>
							<a href="#" className="block transition-colors hover:text-white">
								About
							</a>
						</div>
						<div className="space-y-3">
							<a href="#" className="block transition-colors hover:text-white">
								Journal
							</a>
							<a href="#" className="block transition-colors hover:text-white">
								Contact
							</a>
						</div>
					</div>
					<div className="text-sm text-[#b5c4a8]">
						<p className="mb-3 uppercase tracking-[0.3em] text-[#c8a96e]">Visit</p>
						<p className="leading-relaxed text-[#b5c4a8]">
							28 Willow Court
							<br />
							Hudson, NY 12534
						</p>
						<div className="mt-5 flex gap-4 text-xs uppercase tracking-widest text-[#6b7a6b]">
							<a href="#" className="transition-colors hover:text-white">
								Instagram
							</a>
							<a href="#" className="transition-colors hover:text-white">
								Spotify
							</a>
							<a href="#" className="transition-colors hover:text-white">
								Email
							</a>
						</div>
					</div>
				</div>
				<p className="mt-10 text-xs text-[#6b7a6b]/50">© 2025 Serenova Studio. All rights reserved.</p>
			</footer>
		</div>
	);
}
