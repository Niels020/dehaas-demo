"use client";

import { createContext, useContext, useState, useEffect } from "react";

const fonts = [
	{
		key: "geist-sans",
		label: "Sans",
		className: "font-[family-name:var(--font-geist-sans)]",
	},
	{
		key: "geist-mono",
		label: "Mono",
		className: "font-[family-name:var(--font-geist-mono)]",
	},
	{
		key: "serif",
		label: "Serif",
		className: "font-[family-name:var(--font-playfair)]",
	},
	{
		key: "rounded",
		label: "Rounded",
		className: "font-[family-name:var(--font-nunito)]",
	},
] as const;

export type FontKey = (typeof fonts)[number]["key"];

type FontContextType = {
	font: FontKey;
	fontLabel: string;
	fontClassName: string;
	cycleFont: () => void;
};

const FontContext = createContext<FontContextType | undefined>(undefined);

export function FontProvider({ children }: { children: React.ReactNode }) {
	const [font, setFont] = useState<FontKey>("geist-sans");

	useEffect(() => {
		const stored = localStorage.getItem("font") as FontKey | null;
		if (stored && fonts.some((f) => f.key === stored)) {
			setFont(stored);
		}
	}, []);

	const currentIndex = fonts.findIndex((f) => f.key === font);
	const current = fonts[currentIndex];

	const cycleFont = () => {
		const nextIndex = (currentIndex + 1) % fonts.length;
		const next = fonts[nextIndex];
		setFont(next.key);
		localStorage.setItem("font", next.key);
	};

	return (
		<FontContext.Provider
			value={{
				font,
				fontLabel: current.label,
				fontClassName: current.className,
				cycleFont,
			}}
		>
			{children}
		</FontContext.Provider>
	);
}

export function useFont() {
	const context = useContext(FontContext);
	if (!context) {
		throw new Error("useFont must be used within a FontProvider");
	}
	return context;
}
