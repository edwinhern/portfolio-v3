import Link from "next/link";

import { ThemeSwitcher } from "@/components/theme/theme-switcher";
import { cn } from "@/lib/utils";
import { IconGear, IconHome } from "justd-icons";

export function AppNavbar({ children, ...props }: Readonly<React.ComponentProps<"nav">>) {
	return (
		<nav {...props} className={cn("container relative isolate flex w-full flex-col", props.className)}>
			<div className="flex justify-between">
				<Link href="/" className="flex items-center">
					<h1 className="font-bold text-lg">edwinhern</h1>
				</Link>

				<div className="flex gap-4">
					<ul className="flex items-center space-x-4 text-sm">
						<li className="hover:underline">
							<Link href="/" className="flex items-center gap-2">
								<IconHome />
								Home
							</Link>
						</li>
						<li className="hover:underline">
							<Link href="/gear" className="flex items-center gap-2">
								<IconGear />
								Gear
							</Link>
						</li>
					</ul>
					<ThemeSwitcher />
				</div>
			</div>
			{children}
		</nav>
	);
}
