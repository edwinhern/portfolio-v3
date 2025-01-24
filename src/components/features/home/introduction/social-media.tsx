import { IconArrowUpRight } from "justd-icons";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/ui/button";
import { SOCIAL_MEDIA_LINKS } from "./constants";

export const SocialMedia: React.FC<React.ComponentProps<"div">> = ({ ...props }) => {
	return (
		<div {...props} className={cn("flex gap-4", props.className)}>
			{SOCIAL_MEDIA_LINKS.map((link) => (
				<Link
					key={link.label}
					className={cn(buttonVariants({ variant: "outline" }))}
					href={link.href}
					target={link.href.startsWith("mailto") ? undefined : "_blank"}
					aria-label={link.label}
				>
					<span className="hidden sm:block">{link.label}</span>
					<span className="block sm:hidden">{link.icon}</span>
					<IconArrowUpRight className="hidden size-4 sm:block" />
				</Link>
			))}
		</div>
	);
};
