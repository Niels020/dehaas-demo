"use client";

import { createContext, useContext, useState } from "react";

export const fonts = [
	{
		key: "geist-sans",
		label: "Geist",
		className: "font-[family-name:var(--font-geist-sans)]",
	},
	{
		key: "geist-mono",
		label: "Mono",
		className: "font-[family-name:var(--font-geist-mono)]",
	},
	{
		key: "playfair",
		label: "Playfair",
		className: "font-[family-name:var(--font-playfair)]",
	},
	{
		key: "nunito",
		label: "Nunito",
		className: "font-[family-name:var(--font-nunito)]",
	},
	{
		key: "inter",
		label: "Inter",
		className: "font-[family-name:var(--font-inter)]",
	},
	{
		key: "lora",
		label: "Lora",
		className: "font-[family-name:var(--font-lora)]",
	},
	{
		key: "raleway",
		label: "Raleway",
		className: "font-[family-name:var(--font-raleway)]",
	},
	{
		key: "space-grotesk",
		label: "Grotesk",
		className: "font-[family-name:var(--font-space-grotesk)]",
	},
	{
		key: "dm-serif",
		label: "DM Serif",
		className: "font-[family-name:var(--font-dm-serif)]",
	},
	{
		key: "fira-code",
		label: "Fira",
		className: "font-[family-name:var(--font-fira-code)]",
	},
	{
		key: "merriweather",
		label: "Merriweather",
		className: "font-[family-name:var(--font-merriweather)]",
	},
	{
		key: "space-mono",
		label: "Space Mono",
		className: "font-[family-name:var(--font-space-mono)]",
	},
] as const;

export type FontKey = (typeof fonts)[number]["key"];

type FontContextType = {
	font: FontKey;
	fontLabel: string;
	fontClassName: string;
	setFont: (key: FontKey) => void;
};

const FontContext = createContext<FontContextType | undefined>(undefined);

export function FontProvider({ children }: { children: React.ReactNode }) {
	const [font, setFont] = useState<FontKey>("geist-sans");

	const current = fonts.find((f) => f.key === font)!;

	return (
		<FontContext.Provider
			value={{
				font,
				fontLabel: current.label,
				fontClassName: current.className,
				setFont,
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
