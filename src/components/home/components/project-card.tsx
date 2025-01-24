import Link from "next/link";

import type { GitHubRepository } from "@/lib/api/github/types";
import { IconStar } from "justd-icons";

interface ProjectCardProps extends GitHubRepository {
	index: number;
}

export function ProjectCard({ link, repo, description, stars, index }: Readonly<ProjectCardProps>) {
	return (
		<li className="rounded-lg transition-opacity" key={`${repo}-${link}`}>
			<Link
				target="_blank"
				href={link}
				rel="noopener noreferrer"
				aria-label={repo}
				className="-my-2 flex w-full justify-between py-3 no-underline"
			>
				<div className="flex flex-col gap-px">
					<p>{repo}</p>
					<p className="line-clamp-2 text-muted-foreground">{description}</p>
				</div>
				<div className="flex items-center gap-1 text-muted-foreground">
					<IconStar className="size-4" />
					{stars}
				</div>
			</Link>
		</li>
	);
}
