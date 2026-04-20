import type { Metadata } from "next";
import { PopupDemo } from "./popup-demo";
import { FormDemo } from "./form-demo";
import { CookiesDemo } from "./cookies-demo";

export const metadata: Metadata = {
	title: "Creations",
	description:
		"A collection of demos and experiments built with AI-assisted development.",
};

export default function Creations() {
	return (
		<main className="container mx-auto px-4 py-16">
			<div className="max-w-2xl mx-auto space-y-6">
				<h1 className="text-4xl font-bold tracking-tight">Creations</h1>
				<p className="text-lg text-muted-foreground">
					A collection of demos and experiments built with AI-assisted
					development.
				</p>
			</div>
			<div className="max-w-4xl mx-auto mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
				<PopupDemo />
				<FormDemo />
				<CookiesDemo />
			</div>
		</main>
	);
}
