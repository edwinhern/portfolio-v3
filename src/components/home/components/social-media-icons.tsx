"use client";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { IconArrowUpRight } from "justd-icons";
import Link from "next/link";
import { useMemo } from "react";

export const SocialMediaIcons: React.FC<React.ComponentProps<"div">> = ({ ...props }) => {
	const links = useMemo(() => {
		return [
			{ href: "https://github.com/edwinhern", label: "Github" },
			{ href: "https://linkedin.com/in/edwinhern", label: "LinkedIn" },
		];
	}, []);

	return (
		<div {...props} className={cn("flex gap-4", props.className)}>
			{links.map((link) => (
				<Link
					key={link.label}
					className={cn(buttonVariants({ variant: "outline" }))}
					href={link.href}
					target={link.href.startsWith("mailto") ? undefined : "_blank"}
					aria-label={link.label}
				>
					{link.label}
					<IconArrowUpRight className="size-4" />
				</Link>
			))}
		</div>
	);
};
