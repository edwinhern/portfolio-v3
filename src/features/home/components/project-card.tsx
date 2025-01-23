import Link from "next/link";

import { CardDescription, CardTitle } from "@/components/ui/card";
import type { GitHubRepository } from "@/lib/api/github/types";
import { IconStar } from "justd-icons";

export function ProjectCard({ link, repo, description, stars }: Readonly<GitHubRepository>) {
	return (
		<li className="rounded-lg transition-opacity" key={`${repo}-${link}`}>
			<Link
				target="_blank"
				href={link}
				rel="noopener noreferrer"
				aria-label={repo}
				className="flex flex-col justify-between gap-2 p-4"
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
