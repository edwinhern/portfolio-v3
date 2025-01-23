"use client";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { IconArrowUpRight } from "justd-icons";
import Link from "next/link";
import { useMemo } from "react";

export const SocialMediaIcons: React.FC<React.ComponentProps<"div">> = ({ ...props }) => {
	const links = useMemo(() => {
		return [
			{ href: "https://github.com/edwinhern", label: "Github" },
			{ href: "https://linkedin.com/in/edwinhern", label: "LinkedIn" },
			{ href: "mailto:edwinhern.16@gmail.com", label: "Collab" },
		];
	}, []);

	return (
		<div {...props} className={cn("flex gap-4", props.className)}>
			{links.map((link) => (
				<motion.div key={link.label} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
					<Link
						className={cn(buttonVariants({ variant: "outline" }))}
						href={link.href}
						target={link.href.startsWith("mailto") ? undefined : "_blank"}
						aria-label={link.label}
					>
						{link.label}
						<IconArrowUpRight className="size-4" />
					</Link>
				</motion.div>
			))}
		</div>
	);
};
