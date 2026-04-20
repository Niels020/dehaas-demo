import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Playfair_Display, Nunito } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { FontProvider } from "@/components/font-provider";
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

export const metadata: Metadata = {
	title: {
		default: "DeHaas Demo",
		template: "%s | DeHaas Demo",
	},
	description:
		"Exploring the possibilities of modern web development using AI.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<script
					dangerouslySetInnerHTML={{
						__html: `try{var f=localStorage.getItem("font");if(f)document.documentElement.setAttribute("data-font",f)}catch(e){}`,
					}}
				/>
			</head>
			<body
				className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} ${nunito.variable} antialiased`}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					enableSystem
					disableTransitionOnChange
				>
					<FontProvider>
						<FontBody>
							<Navigation />
							<div className="flex-1">{children}</div>
							<Footer />
						</FontBody>
					</FontProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
