"use client";

import { useTheme } from "next-themes";
import { SettingsIcon, MoonIcon, SunIcon, TypeIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useFont } from "@/components/font-provider";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";

export function SettingsMenu() {
	const { setTheme, resolvedTheme } = useTheme();
	const { fontLabel, cycleFont } = useFont();

	return (
		<Popover>
			<PopoverTrigger
				render={
					<Button variant="ghost" size="icon">
						<SettingsIcon className="h-5 w-5" />
						<span className="sr-only">Settings</span>
					</Button>
				}
			/>
			<PopoverContent align="end" className="w-56">
				<div className="space-y-3">
					<p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
						Settings
					</p>
					<div className="flex items-center justify-between">
						<span className="text-sm">Theme</span>
						<Button
							variant="ghost"
							size="icon"
							className="h-8 w-8"
							onClick={() =>
								setTheme(resolvedTheme === "dark" ? "light" : "dark")
							}
						>
							<SunIcon className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
							<MoonIcon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
							<span className="sr-only">Toggle theme</span>
						</Button>
					</div>
					<div className="flex items-center justify-between">
						<span className="text-sm">Font</span>
						<Button
							variant="ghost"
							size="sm"
							className="h-8 gap-1.5"
							onClick={cycleFont}
						>
							<TypeIcon className="h-4 w-4" />
							<span className="text-xs">{fontLabel}</span>
						</Button>
					</div>
				</div>
			</PopoverContent>
		</Popover>
	);
}
