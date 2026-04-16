"use client";

import { useFont } from "@/components/font-provider";

export function FontBody({ children }: { children: React.ReactNode }) {
	const { fontClassName } = useFont();

	return (
		<div className={`${fontClassName} min-h-screen flex flex-col`}>
			{children}
		</div>
	);
}
