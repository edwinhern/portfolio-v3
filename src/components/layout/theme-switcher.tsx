"use client";

import { CircleHalfIcon } from "@phosphor-icons/react";
import { useTheme } from "next-themes";
import { type ComponentProps, useCallback } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/ui/button";

interface ThemeSwitcherProps {
	variant?: ComponentProps<typeof Button>["variant"];
	className?: ComponentProps<typeof Button>["className"];
}
export function ThemeSwitcher({ variant = "ghost", className }: ThemeSwitcherProps) {
	const { resolvedTheme, setTheme } = useTheme();

	const toggleTheme = useCallback(() => {
		setTheme(resolvedTheme === "dark" ? "light" : "dark");
	}, [resolvedTheme, setTheme]);

	return (
		<Button
			variant={variant}
			size="icon"
			aria-label="Toggle theme"
			className={cn("group/toggle extend-touch-target size-8", className)}
			onClick={toggleTheme}
		>
			<CircleHalfIcon className="size-4.5" />
		</Button>
	);
}
