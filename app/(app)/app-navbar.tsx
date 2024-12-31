"use client";

import { ThemeSwitcher } from "@/components/theme-switcher";
import { Icons } from "@/components/ui/icons";
import { IconBook, IconCircleInfo, IconGear, IconHome } from "justd-icons";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Navbar } from "ui";

export function AppNavbar({ children, ...props }: Readonly<React.ComponentProps<typeof Navbar>>) {
	const pathname = usePathname();
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => setIsOpen(false), [pathname]);

	return (
		<Navbar isOpen={isOpen} onOpenChange={setIsOpen} intent="inset" {...props}>
			<Navbar.Nav>
				<Navbar.Logo className="text-fg" href="/">
					<Icons.Logo className="size-5" />
				</Navbar.Logo>

				<Navbar.Section className="w-full justify-between md:items-center">
					<Navbar.Flex className="flex-col items-start md:flex-1 md:flex-row">
						<Navbar.Item isCurrent={pathname === "/"} href="/" className="flex">
							<IconHome />
							Home
						</Navbar.Item>
						<Navbar.Item isCurrent={pathname === "/about"} href="/about">
							<IconCircleInfo />
							About
						</Navbar.Item>
						<Navbar.Item isCurrent={pathname === "/blog"} href="/blog">
							<IconBook />
							Blog
						</Navbar.Item>
						<Navbar.Item isCurrent={pathname === "/gear"} href="/gear">
							<IconGear />
							Gear
						</Navbar.Item>
					</Navbar.Flex>

					<ThemeSwitcher />
				</Navbar.Section>
			</Navbar.Nav>

			<Navbar.Compact>
				<Navbar.Flex className="w-full items-center justify-between">
					<Navbar.Flex className="gap-4">
						<Navbar.Item isCurrent={pathname === "/"} href="/">
							Home
						</Navbar.Item>
						<Navbar.Item isCurrent={pathname === "/about"} href="/about">
							About
						</Navbar.Item>
						<Navbar.Item isCurrent={pathname === "/blog"} href="/blog">
							Blog
						</Navbar.Item>
						<Navbar.Item isCurrent={pathname === "/gear"} href="/gear">
							Gear
						</Navbar.Item>
					</Navbar.Flex>
				</Navbar.Flex>

				<Navbar.Flex>
					<ThemeSwitcher appearance="plain" />
					{/* <Navbar.Trigger className="-ml-2" /> */}
				</Navbar.Flex>
			</Navbar.Compact>
			{children}
		</Navbar>
	);
}
