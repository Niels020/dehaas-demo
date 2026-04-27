"use client";

import { useState } from "react";
import { PaletteIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { useAccent, accentColors, type AccentKey } from "@/components/accent-provider";
import { cn } from "@/lib/utils";

export function AccentPickerButton() {
	const { accent, setAccent } = useAccent();
	const [open, setOpen] = useState(false);

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger
				render={
					<Button
						variant="outline"
						size="lg"
						className="gap-2 hover:border-primary hover:text-primary transition-colors"
					>
						<PaletteIcon className="h-5 w-5" />
						<span className="text-base">Color</span>
					</Button>
				}
			/>
			<PopoverContent align="center" className="w-52">
				<p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">
					Accent Color
				</p>
				<div className="grid grid-cols-4 gap-2">
					{accentColors.map((color) => (
						<button
							key={color.key}
							title={color.label}
							onClick={() =>
								setAccent(
									accent === color.key ? null : (color.key as AccentKey),
								)
							}
							className={cn(
								"h-8 w-8 rounded-full border-2 transition-all hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
								accent === color.key
									? "border-foreground scale-110"
									: "border-transparent",
							)}
							style={{ backgroundColor: color.swatch }}
						/>
					))}
				</div>
				{accent && (
					<button
						onClick={() => {
							setAccent(null);
							setOpen(false);
						}}
						className="mt-3 w-full text-xs text-muted-foreground hover:text-foreground transition-colors"
					>
						Reset
					</button>
				)}
			</PopoverContent>
		</Popover>
	);
}
