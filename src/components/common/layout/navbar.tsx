import Link from "next/link";

import { ThemeSwitcher } from "@/common/theme/switcher";
import { cn } from "@/lib/utils";
import { Icons } from "@/ui/icons";

export function AppNavbar({ children, ...props }: Readonly<React.ComponentProps<"nav">>) {
	return (
		<nav {...props} className={cn("container relative isolate flex w-full flex-col", props.className)}>
			<div className="flex justify-between">
				<Link href="/" className="flex items-center">
					<Icons.Logo className="size-10" />
				</Link>

				<div className="flex gap-4">
					<ul className="flex items-center space-x-4 text-sm">
						<li className="decoration-2 underline-offset-4 transition-colors hover:underline">
							<Link href="/" className="flex items-center gap-2">
								Home
							</Link>
						</li>
						<li className="decoration-2 underline-offset-4 transition-colors hover:underline">
							<Link href="/gear" className="flex items-center gap-2">
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
