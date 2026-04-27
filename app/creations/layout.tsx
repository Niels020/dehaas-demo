"use client";

import { FontProvider, useFont } from "@/components/font-provider";
import { AccentProvider, useAccent } from "@/components/accent-provider";
import { cn } from "@/lib/utils";

function CreationsScope({ children }: { children: React.ReactNode }) {
	const { fontClassName } = useFont();
	const { accentClassName } = useAccent();
	return <div className={cn(fontClassName, accentClassName)}>{children}</div>;
}

export default function CreationsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<FontProvider>
			<AccentProvider>
				<CreationsScope>{children}</CreationsScope>
			</AccentProvider>
		</FontProvider>
	);
}
