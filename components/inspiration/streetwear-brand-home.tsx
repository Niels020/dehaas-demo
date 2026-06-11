import Image from "next/image";

const products = [
	{
		name: "VOID HOODIE 003",
		price: "€180",
		status: "AVAILABLE",
		statusClassName: "text-[#c8ff00]",
		image: "/hoodie-unsplash.jpg",
		alt: "Figure in a grey hoodie seen from behind in an open field",
	},
	{
		name: "CARBON TEE",
		price: "€85",
		status: "SOLD OUT",
		statusClassName: "text-[#666666]",
		image: "/white-tee-unsplash.jpg",
		alt: "Plain white tee worn against a blurred bright background",
	},
	{
		name: "COURT RUNNER 01",
		price: "€240",
		status: "AVAILABLE",
		statusClassName: "text-[#c8ff00]",
		image: "/sneakers-unsplash.jpg",
		alt: "High-top sneakers resting on an outdoor court at dusk",
	},
] as const;

const values = [
	{
		number: "001",
		title: "Small runs",
		body: "Every item produced in batches of 72 or fewer.",
	},
	{
		number: "002",
		title: "Zero waste",
		body: "Made to order where possible. No excess inventory.",
	},
	{
		number: "003",
		title: "No resellers",
		body: "Direct only. We ban bots. We ban flippers.",
	},
] as const;

const tickerItems = [
	"★ DROP 003 LIVE NOW",
	"★ FREE WORLDWIDE SHIPPING",
	"★ DROP 003 LIVE NOW",
	"★ FREE WORLDWIDE SHIPPING",
	"★ DROP 003 LIVE NOW",
	"★ FREE WORLDWIDE SHIPPING",
] as const;

export function StreetwearBrandHome() {
	return (
		<div
			className="min-h-screen bg-[#0d0d0d] text-[#f5f5f5]"
			style={{ fontFamily: "'Arial Black', 'Arial', sans-serif" }}
		>
			<header className="flex items-center justify-between border-b border-[#2a2a2a] bg-[#0d0d0d] px-8 py-4">
				<a href="#" className="text-2xl font-black tracking-[0.5em] text-[#f5f5f5]">
					VOID
				</a>
				<nav className="flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] text-[#666666]">
					<a href="#" className="transition-colors hover:text-[#f5f5f5]">
						DROP 003
					</a>
					<span>·</span>
					<a href="#" className="transition-colors hover:text-[#f5f5f5]">
						ARCHIVE
					</a>
					<span>·</span>
					<a href="#" className="transition-colors hover:text-[#f5f5f5]">
						ABOUT
					</a>
					<span>·</span>
					<a href="#" className="transition-colors hover:text-[#f5f5f5]">
						STOCKISTS
					</a>
				</nav>
				<a
					href="#"
					className="bg-[#c8ff00] px-5 py-2.5 text-[10px] font-black uppercase tracking-[0.3em] text-[#0d0d0d] transition-colors hover:bg-[#f5f5f5]"
				>
					SHOP
				</a>
			</header>

			<section className="relative min-h-[700px] overflow-hidden">
				<Image
					src="/sammy-swae-gKoRJvThM6w-unsplash.jpg"
					alt="Young woman in white sweatshirt against graffiti wall"
					fill
					sizes="100vw"
					priority
					className="object-cover object-center brightness-50"
				/>
				<div className="absolute inset-0 z-10 flex flex-col justify-end p-12">
					<p className="absolute top-8 right-8 text-[10px] uppercase tracking-[0.4em] text-[#666666]">
						DROP 003 — SS25
					</p>
					<div>
						<h1 className="text-[96px] font-black leading-none tracking-tighter text-[#f5f5f5]">
							LIMITED
						</h1>
						<h1 className="text-[96px] font-black leading-none tracking-tighter text-[#c8ff00]">
							EDITION
						</h1>
						<p className="mt-4 text-xs uppercase tracking-[0.4em] text-[#666666]">
							72 PIECES. NO RESTOCK.
						</p>
						<a
							href="#"
							className="mt-8 inline-block bg-[#c8ff00] px-8 py-4 text-xs font-black uppercase tracking-[0.3em] text-[#0d0d0d] transition-colors hover:bg-[#f5f5f5]"
						>
							SHOP THE DROP
						</a>
					</div>
				</div>
			</section>

			<section className="bg-[#0d0d0d] px-8 py-16">
				<div className="flex items-center justify-between text-xs uppercase tracking-[0.4em] text-[#666666]">
					<p>CURRENT DROP</p>
					<p>03 / 06 ITEMS</p>
				</div>
				<div className="mb-8 mt-4 border-t border-[#2a2a2a]" />
				<div className="grid grid-cols-3 gap-px bg-[#2a2a2a]">
					{products.map((product) => (
						<div key={product.name} className="group bg-[#0d0d0d] p-6">
							<div className="relative h-64 overflow-hidden bg-[#1a1a1a]">
								<Image
									src={product.image}
									alt={product.alt}
									fill
									sizes="33vw"
									className={`object-cover object-center grayscale-[35%] transition-all duration-500 group-hover:grayscale-0 ${
										product.status === "SOLD OUT" ? "opacity-50" : ""
									}`}
								/>
							</div>
							<h3 className="mt-3 text-sm font-black uppercase tracking-wider text-[#f5f5f5]">
								{product.name}
							</h3>
							<p className="mt-1 text-sm font-black text-[#c8ff00]">
								{product.price}
							</p>
							<p
								className={`mt-2 text-[10px] tracking-widest ${product.statusClassName}`}
							>
								{product.status}
							</p>
						</div>
					))}
				</div>
			</section>

			<section className="grid grid-cols-[220px_1fr] items-start gap-8 border-t border-[#2a2a2a] bg-[#0d0d0d] px-8 py-24">
				<div aria-hidden="true" className="select-none text-[200px] leading-none text-[#1a1a1a]">
					/
				</div>
				<div className="pt-6">
					<h2 className="text-4xl font-black leading-none text-[#f5f5f5]">
						WE DON&apos;T FOLLOW
					</h2>
					<h2 className="text-4xl font-black leading-none text-[#c8ff00]">
						TRENDS.
					</h2>
					<p className="mt-6 max-w-sm text-sm leading-relaxed text-[#666666]">
						VOID exists outside the seasonal cycle. No collections, no
						markdowns, no hype machine. Just objects made to last.
					</p>
					<p className="mt-4 max-w-sm text-sm leading-relaxed text-[#666666]">
						Each drop is designed, produced and released once. When it&apos;s
						gone, it&apos;s gone.
					</p>
				</div>
			</section>

			<section className="bg-[#c8ff00] py-3">
				<div className="flex gap-12 overflow-hidden whitespace-nowrap px-8 text-xs font-black uppercase tracking-[0.3em] text-[#0d0d0d]">
					{tickerItems.map((item, index) => (
						<span key={`${item}-${index}`}>{item}</span>
					))}
				</div>
			</section>

			<section className="grid grid-cols-3 gap-8 border-t border-[#2a2a2a] bg-[#1a1a1a] px-8 py-20">
				{values.map((value) => (
					<div key={value.number}>
						<p className="text-3xl font-black text-[#c8ff00]">{value.number}</p>
						<h3 className="mt-5 text-xl font-black uppercase tracking-wider text-[#f5f5f5]">
							{value.title}
						</h3>
						<p className="mt-3 max-w-xs text-sm leading-relaxed text-[#666666]">
							{value.body}
						</p>
					</div>
				))}
			</section>

			<section className="border-t border-[#2a2a2a] bg-[#0d0d0d] px-8 py-16">
				<div className="mx-auto grid max-w-3xl grid-cols-2 items-end gap-8">
					<div>
						<h2 className="text-4xl font-black text-[#f5f5f5]">BE FIRST.</h2>
						<p className="mt-2 text-sm text-[#666666]">Drop alerts, no spam.</p>
					</div>
					<div className="flex items-end">
						<input
							type="email"
							placeholder="EMAIL ADDRESS"
							className="w-full border-0 border-b border-[#2a2a2a] bg-transparent pb-2 text-sm text-[#f5f5f5] placeholder:text-[#666666] focus:outline-none"
						/>
						<a
							href="#"
							className="ml-6 text-xs font-black uppercase tracking-widest text-[#c8ff00] transition-colors hover:text-[#f5f5f5]"
						>
							NOTIFY ME →
						</a>
					</div>
				</div>
			</section>

			<footer className="flex items-center justify-between border-t border-[#2a2a2a] bg-[#0d0d0d] px-8 py-10">
				<a href="#" className="text-xl font-black tracking-[0.5em] text-[#f5f5f5]">
					VOID
				</a>
				<nav className="flex items-center gap-3 text-[10px] tracking-[0.3em] text-[#666666]">
					<a href="#" className="uppercase transition-colors hover:text-[#f5f5f5]">
						SHOP
					</a>
					<span>·</span>
					<a href="#" className="uppercase transition-colors hover:text-[#f5f5f5]">
						ARCHIVE
					</a>
					<span>·</span>
					<a href="#" className="uppercase transition-colors hover:text-[#f5f5f5]">
						ABOUT
					</a>
					<span>·</span>
					<a href="#" className="uppercase transition-colors hover:text-[#f5f5f5]">
						RETURNS
					</a>
					<span>·</span>
					<a href="#" className="uppercase transition-colors hover:text-[#f5f5f5]">
						TERMS
					</a>
				</nav>
				<p className="text-[10px] tracking-[0.3em] text-[#666666]">© 2025 VOID STUDIO</p>
			</footer>
		</div>
	);
}
