import { buttonVariants } from "@/components/ui/button";
import { IconArrowUpRight } from "justd-icons";
import Link from "next/link";

export const SocialMediaIcons: React.FC = () => {
	return (
		<div className="flex gap-3">
			<Link
				className={buttonVariants({ variant: "outline" })}
				href="https://github.com/edwinhern"
				target="_blank"
				aria-label="Github"
			>
				Github
				<IconArrowUpRight className="size-4 text-tertiary" />
			</Link>
			<Link
				className={buttonVariants({ variant: "outline" })}
				href="https://linkedin.com/in/edwinhern"
				target="_blank"
				aria-label="LinkedIn"
			>
				LinkedIn
				<IconArrowUpRight className="h-4 w-4" />
			</Link>

			<Link className={buttonVariants({ variant: "outline" })} href="mailto:edwinhern.16@gmail.com">
				Collab
				<IconArrowUpRight className="h-4 w-4 text-tertiary" />
			</Link>
		</div>
	);
};
