"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useState, useEffect, useCallback, useRef } from "react";

export default function Home() {
	const { resolvedTheme } = useTheme();
	const [dotPos, setDotPos] = useState({ x: 0, y: 0 });
	const [showMessage, setShowMessage] = useState(false);
	const repositionRef = useRef<ReturnType<typeof setInterval> | null>(null);
	const messageTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

	const randomizePosition = useCallback(() => {
		const edgeChance = Math.random();
		let x: number;
		if (edgeChance < 0.8) {
			x = Math.random() > 0.5 ? 90 + Math.random() * 9 : 1 + Math.random() * 9;
		} else {
			x = 10 + Math.random() * 80;
		}
		const y = 5 + Math.random() * 45;
		setDotPos({ x, y });
	}, []);

	const startRepositioning = useCallback(() => {
		if (repositionRef.current) clearInterval(repositionRef.current);
		randomizePosition();
		repositionRef.current = setInterval(randomizePosition, 12000);
	}, [randomizePosition]);

	useEffect(() => {
		startRepositioning();
		return () => {
			if (repositionRef.current) clearInterval(repositionRef.current);
			if (messageTimeoutRef.current) clearTimeout(messageTimeoutRef.current);
		};
	}, [startRepositioning]);

	const handleDotClick = useCallback(() => {
		setShowMessage(true);
		if (repositionRef.current) clearInterval(repositionRef.current);
		if (messageTimeoutRef.current) clearTimeout(messageTimeoutRef.current);

		messageTimeoutRef.current = setTimeout(() => {
			setShowMessage(false);
			startRepositioning();
		}, 3000);
	}, [startRepositioning]);

	const isDark = resolvedTheme === "dark";

	return (
		<main>
			<section className="relative h-[70vh] min-h-[400px] w-full">
				<Image
					src="/steve-busch-JD7T8Y1B79U-unsplash.jpg"
					alt="Hero image"
					fill
					className="object-cover dark:block hidden dark:brightness-75"
					priority
				/>
				<Image
					src="/gabriel-alenius-USXfF_ONUGo-unsplash.jpg"
					alt="Hero image"
					fill
					className="object-cover dark:hidden block"
					priority
				/>

				{!showMessage && (
					<button
						onClick={handleDotClick}
						aria-label="Find the hidden dot"
						className="absolute z-20 h-2 w-2 rounded-full cursor-pointer dark:bg-white/60 bg-black/60"
						style={{
							left: `${dotPos.x}%`,
							top: `${dotPos.y}%`,
							transform: "translate(-50%, -50%)",
						}}
					/>
				)}

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

						{showMessage && (
							<p className="text-xl font-bold dark:text-white text-foreground">
								{isDark
									? "You won! Explore the stars"
									: "You won! Lost in the woods"}
							</p>
						)}
					</div>
				</div>
			</section>
		</main>
	);
}
