import Image from "next/image";

export default function Home() {
	return (
		<main>
			<section className="relative h-[70vh] min-h-[400px] w-full">
				<Image
					src="/aperture-vintage-Z6EpCdMcoUU-unsplash.jpg"
					alt="Dark mode hero"
					fill
					sizes="100vw"
					className="object-cover dark:block hidden dark:brightness-75"
					priority
				/>
				<Image
					src="/gabriel-alenius-USXfF_ONUGo-unsplash.jpg"
					alt="Misty forest landscape"
					fill
					sizes="100vw"
					className="object-cover dark:hidden block"
					priority
				/>

				{/* Bottom fade to background */}
				<div className="absolute bottom-0 left-0 right-0 h-1/2 z-10 bg-gradient-to-b from-transparent to-background pointer-events-none" />

				<div className="relative z-10 flex h-full items-center justify-center pointer-events-none">
					<div className="max-w-2xl text-center space-y-6 px-4 pointer-events-auto">
						<h1 className="text-4xl font-bold tracking-tight dark:text-white text-foreground sm:text-5xl">
							AI-Powered Web Development
						</h1>
						<p className="text-lg dark:text-white/80 text-foreground/70">
							Exploring the possibilities of modern web development using AI.
							This site serves as a demo showcasing what&apos;s possible when
							combining cutting-edge tools with creative ideas.
						</p>
					</div>
				</div>
			</section>
		</main>
	);
}
