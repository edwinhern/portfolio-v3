import { IconArrowUpRight, IconBrandGithub, IconBrandLinkedin, IconCalendarDaysFill } from "justd-icons";
import Link from "next/link";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/ui/button";

const SOCIAL_ICONS = {
	github: IconBrandGithub,
	linkedin: IconBrandLinkedin,
	calendar: IconCalendarDaysFill,
} as const;

export const SocialMedia: React.FC<React.ComponentProps<"div">> = ({ ...props }) => {
	return (
		<div {...props} className={cn("flex gap-4", props.className)}>
			{siteConfig.socialLinks.map((link) => {
				const href = "href" in link ? link.href : siteConfig.links[link.id];
				const Icon = SOCIAL_ICONS[link.id];
				return (
					<Link
						key={link.label}
						className={cn(buttonVariants({ variant: "outline" }))}
						href={href}
						target={href.startsWith("mailto") ? undefined : "_blank"}
						rel={href.startsWith("mailto") ? undefined : "noreferrer"}
						aria-label={link.label}
					>
						<span className="hidden sm:block">{link.label}</span>
						<span className="block sm:hidden">
							<Icon className="size-4" />
						</span>
						<IconArrowUpRight className="hidden size-4 sm:block" />
					</Link>
				);
			})}
		</div>
	);
};
