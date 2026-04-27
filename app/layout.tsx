import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import {
	Playfair_Display,
	Nunito,
	Inter,
	Lora,
	Raleway,
	Space_Grotesk,
	DM_Serif_Display,
	Fira_Code,
	Merriweather,
	Space_Mono,
} from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { FontBody } from "@/components/font-body";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

const playfair = Playfair_Display({
	variable: "--font-playfair",
	subsets: ["latin"],
});

const nunito = Nunito({
	variable: "--font-nunito",
	subsets: ["latin"],
});

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
});

const lora = Lora({
	variable: "--font-lora",
	subsets: ["latin"],
});

const raleway = Raleway({
	variable: "--font-raleway",
	subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
	variable: "--font-space-grotesk",
	subsets: ["latin"],
});

const dmSerif = DM_Serif_Display({
	variable: "--font-dm-serif",
	subsets: ["latin"],
	weight: "400",
});

const firaCode = Fira_Code({
	variable: "--font-fira-code",
	subsets: ["latin"],
});

const merriweather = Merriweather({
	variable: "--font-merriweather",
	subsets: ["latin"],
	weight: ["400", "700"],
});

const spaceMono = Space_Mono({
	variable: "--font-space-mono",
	subsets: ["latin"],
	weight: ["400", "700"],
});

export const metadata: Metadata = {
	title: {
		default: "DeHaas Demo",
		template: "%s | DeHaas Demo",
	},
	description:
		"Exploring the possibilities of modern web development using AI.",
	icons: {
		icon: "/favicon.svg",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body
				className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} ${nunito.variable} ${inter.variable} ${lora.variable} ${raleway.variable} ${spaceGrotesk.variable} ${dmSerif.variable} ${firaCode.variable} ${merriweather.variable} ${spaceMono.variable} antialiased`}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					enableSystem
					disableTransitionOnChange
				>
					<FontBody>
						<Navigation />
						<div className="flex-1">{children}</div>
						<Footer />
					</FontBody>
				</ThemeProvider>
			</body>
		</html>
	);
}
