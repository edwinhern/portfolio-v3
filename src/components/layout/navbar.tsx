import Link from "next/link";
import { ThemeSwitcher } from "@/layout/theme-switcher";
import { Button } from "@/ui/button";
import { Icons } from "@/ui/icons";

type NavItem = {
	href: string;
	label: string;
};

const NAV_ITEMS: readonly NavItem[] = [
	{ href: "/", label: "Home" },
	{ href: "/gear", label: "Gear" },
] as const;

export function Navbar({ children, ...props }: Readonly<React.ComponentProps<"nav">>) {
	return (
		<nav {...props}>
			<div className="flex justify-between">
				<Link href="/" className="flex items-center">
					<Icons.Logo className="size-5" />
				</Link>

				<div className="flex items-center gap-0">
					{NAV_ITEMS.map((item) => (
						<Button key={item.href} variant="ghost" asChild size="sm" className="px-2.5">
							<Link href={item.href} className="relative items-center">
								{item.label}
							</Link>
						</Button>
					))}
					<ThemeSwitcher />
				</div>
			</div>
			{children}
		</nav>
	);
}
