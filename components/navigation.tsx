"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { MenuIcon, SunIcon, MoonIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
	Sheet,
	SheetContent,
	SheetTrigger,
	SheetTitle,
} from "@/components/ui/sheet";

const navItems = [
	{ label: "Home", href: "/" },
	{ label: "Inspiration", href: "/inspiration" },
	{ label: "Creations", href: "/creations" },
];

export function Navigation() {
	const pathname = usePathname();
	const [open, setOpen] = useState(false);
	const { setTheme, resolvedTheme } = useTheme();

	return (
		<header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
			<div className="container mx-auto flex h-16 items-center justify-between px-4">
				<Link href="/" className="flex items-center">
					<Image
						src="/logo.svg"
						alt="DeHaas Demo"
						width={120}
						height={40}
						style={{ height: "auto" }}
						priority
					/>
				</Link>

				{/* Desktop nav */}
				<nav className="hidden md:flex items-center gap-1">
					{navItems.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className={cn(
								"px-4 py-2 text-sm font-medium rounded-md transition-colors hover:bg-accent hover:text-accent-foreground",
								pathname === item.href
									? "bg-accent text-accent-foreground"
									: "text-muted-foreground",
							)}
						>
							{item.label}
						</Link>
					))}
					<Button
						variant="ghost"
						size="icon"
						onClick={() =>
							setTheme(resolvedTheme === "dark" ? "light" : "dark")
						}
					>
						<SunIcon className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
						<MoonIcon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
						<span className="sr-only">Toggle theme</span>
					</Button>
				</nav>

				<div className="flex items-center gap-1 md:hidden">
					<Button
						variant="ghost"
						size="icon"
						onClick={() =>
							setTheme(resolvedTheme === "dark" ? "light" : "dark")
						}
					>
						<SunIcon className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
						<MoonIcon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
						<span className="sr-only">Toggle theme</span>
					</Button>
					{/* Mobile nav */}
					<Sheet open={open} onOpenChange={setOpen}>
						<SheetTrigger
							render={
								<Button variant="ghost" size="icon" className="md:hidden">
									<MenuIcon className="h-5 w-5" />
									<span className="sr-only">Toggle menu</span>
								</Button>
							}
						/>
						<SheetContent side="right">
							<SheetTitle className="sr-only">Navigation</SheetTitle>
							<nav className="flex flex-col gap-2 mt-8">
								{navItems.map((item) => (
									<Link
										key={item.href}
										href={item.href}
										onClick={() => setOpen(false)}
										className={cn(
											"px-4 py-3 text-base font-medium rounded-md transition-colors hover:bg-accent hover:text-accent-foreground",
											pathname === item.href
												? "bg-accent text-accent-foreground"
												: "text-muted-foreground",
										)}
									>
										{item.label}
									</Link>
								))}
							</nav>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</header>
	);
}
