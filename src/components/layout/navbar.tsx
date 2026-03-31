"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { useNavIndicator } from "@/hooks/use-nav-indicator";
import { ThemeSwitcher } from "@/layout/theme-switcher";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
	{ href: "/", label: "Home" },
	{ href: "/gear", label: "Gear" },
] as const;

export function Navbar({ children, ...props }: Readonly<React.ComponentProps<"nav">>) {
	const pathname = usePathname();
	const { containerRef, itemRefs, indicator, isActiveHref } = useNavIndicator(NAV_ITEMS, pathname);

	return (
		<nav {...props}>
			<div className="flex items-center justify-end">
				<div ref={containerRef} className="relative flex items-center">
					{NAV_ITEMS.map((item, index) => (
						<Link
							key={item.href}
							ref={(el) => {
								itemRefs.current[index] = el;
							}}
							href={item.href}
							className={cn(
								"px-4 py-2 text-sm transition-colors",
								isActiveHref(item.href, pathname) ? "text-foreground" : "text-muted-foreground hover:text-foreground",
							)}
						>
							{item.label}
						</Link>
					))}
					{indicator && (
						<span
							className="pointer-events-none absolute bottom-0 h-px bg-foreground transition-all duration-200"
							style={{ left: indicator.left, width: indicator.width }}
						/>
					)}
					<ThemeSwitcher />
				</div>
			</div>
			{children}
		</nav>
	);
}
