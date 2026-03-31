"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { ThemeSwitcher } from "@/layout/theme-switcher";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
	{ href: "/", label: "Home" },
	{ href: "/gear", label: "Gear" },
] as const;

function isActive(href: string, pathname: string) {
	return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function Navbar({ children, ...props }: Readonly<React.ComponentProps<"nav">>) {
	const pathname = usePathname();
	const navRef = useRef<HTMLDivElement>(null);
	const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
	const [indicator, setIndicator] = useState<{ left: number; width: number } | null>(null);

	useEffect(() => {
		const activeIndex = NAV_ITEMS.findIndex((item) => isActive(item.href, pathname));
		const el = linkRefs.current[activeIndex];
		const container = navRef.current;

		if (el && container) {
			const { left: containerLeft } = container.getBoundingClientRect();
			const { left, width } = el.getBoundingClientRect();
			setIndicator({ left: left - containerLeft, width });
		}
	}, [pathname]);

	return (
		<nav {...props}>
			<div className="flex items-center justify-end">
				<div ref={navRef} className="relative flex items-center">
					{NAV_ITEMS.map((item, index) => {
						const isActive = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
						return (
							<Link
								key={item.href}
								ref={(el) => {
									linkRefs.current[index] = el;
								}}
								href={item.href}
								className={cn(
									"px-4 py-2 text-sm transition-colors",
									isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground",
								)}
							>
								{item.label}
							</Link>
						);
					})}
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
