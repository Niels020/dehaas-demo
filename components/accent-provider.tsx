"use client";

import { createContext, useContext, useState } from "react";

export const accentColors = [
	{
		key: "blue",
		label: "Blue",
		swatch: "oklch(0.6 0.22 240)",
		className: "accent-blue",
	},
	{
		key: "indigo",
		label: "Indigo",
		swatch: "oklch(0.55 0.22 260)",
		className: "accent-indigo",
	},
	{
		key: "purple",
		label: "Purple",
		swatch: "oklch(0.55 0.22 290)",
		className: "accent-purple",
	},
	{
		key: "pink",
		label: "Pink",
		swatch: "oklch(0.65 0.22 340)",
		className: "accent-pink",
	},
	{
		key: "rose",
		label: "Rose",
		swatch: "oklch(0.65 0.22 10)",
		className: "accent-rose",
	},
	{
		key: "red",
		label: "Red",
		swatch: "oklch(0.58 0.22 25)",
		className: "accent-red",
	},
	{
		key: "orange",
		label: "Orange",
		swatch: "oklch(0.68 0.22 55)",
		className: "accent-orange",
	},
	{
		key: "yellow",
		label: "Yellow",
		swatch: "oklch(0.78 0.18 90)",
		className: "accent-yellow",
	},
	{
		key: "lime",
		label: "Lime",
		swatch: "oklch(0.68 0.22 130)",
		className: "accent-lime",
	},
	{
		key: "green",
		label: "Green",
		swatch: "oklch(0.6 0.22 145)",
		className: "accent-green",
	},
	{
		key: "teal",
		label: "Teal",
		swatch: "oklch(0.6 0.18 185)",
		className: "accent-teal",
	},
	{
		key: "cyan",
		label: "Cyan",
		swatch: "oklch(0.65 0.18 200)",
		className: "accent-cyan",
	},
] as const;

export type AccentKey = (typeof accentColors)[number]["key"];

type AccentContextType = {
	accent: AccentKey | null;
	accentClassName: string;
	setAccent: (key: AccentKey | null) => void;
};

const AccentContext = createContext<AccentContextType | undefined>(undefined);

export function AccentProvider({ children }: { children: React.ReactNode }) {
	const [accent, setAccent] = useState<AccentKey | null>(null);

	const current = accentColors.find((c) => c.key === accent);

	return (
		<AccentContext.Provider
			value={{
				accent,
				accentClassName: current?.className ?? "",
				setAccent,
			}}
		>
			{children}
		</AccentContext.Provider>
	);
}

export function useAccent() {
	const context = useContext(AccentContext);
	if (!context)
		throw new Error("useAccent must be used within an AccentProvider");
	return context;
}
