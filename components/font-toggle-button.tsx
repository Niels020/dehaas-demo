"use client";

import { useState } from "react";
import { TypeIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { useFont, fonts, type FontKey } from "@/components/font-provider";
import { cn } from "@/lib/utils";

export function FontToggleButton() {
	const { font, setFont } = useFont();
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
						<TypeIcon className="h-5 w-5" />
						<span className="text-base">Font</span>
					</Button>
				}
			/>
			<PopoverContent align="center" className="w-56">
				<p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">
					Font
				</p>
				<div className="grid grid-cols-3 gap-1.5">
					{fonts.map((f) => (
						<button
							key={f.key}
							title={f.label}
							onClick={() => {
								setFont(f.key as FontKey);
								setOpen(false);
							}}
							className={cn(
								"h-10 rounded-md border-2 text-xs px-1 transition-all hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring truncate",
								f.key === font
									? "border-primary text-primary bg-primary/5"
									: "border-border text-muted-foreground",
							)}
							style={{
								fontFamily: `var(${f.className.match(/var\(([^)]+)\)/)?.[1]})`,
							}}
						>
							{f.label}
						</button>
					))}
				</div>
				{font !== "geist-sans" && (
					<button
						onClick={() => {
							setFont("geist-sans");
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
