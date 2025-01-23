import Link from "next/link";

import { CardDescription, CardTitle } from "@/components/ui/card";
import type { GitHubRepository } from "@/lib/api/github/types";
import { cn } from "@/lib/utils";
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
				className={cn("flex flex-col justify-between gap-2 pt-0 pb-4 pl-0", index % 2 === 0 ? "pr-2" : "")}
			>
				<div className="flex flex-col gap-1">
					<CardTitle className="text-base">{repo}</CardTitle>
					<CardDescription className="line-clamp-2 font-light text-sm">{description}</CardDescription>
				</div>
				<CardDescription className="flex items-center gap-1">
					<IconStar className="size-4" />
					{stars}
				</CardDescription>
			</Link>
		</li>
	);
}
