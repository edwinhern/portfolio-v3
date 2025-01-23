import Link from "next/link";

import { CardDescription, CardTitle } from "@/components/ui/card";
import type { GitHubRepository } from "@/lib/api/github/types";
import { IconStar } from "justd-icons";

interface ProjectCardProps {
	project: GitHubRepository;
}

export function ProjectCard({ project }: Readonly<ProjectCardProps>) {
	return (
		<Link
			target="_blank"
			href={project.link}
			rel="noopener noreferrer"
			aria-label={project.repo}
			className="flex flex-col justify-between gap-2 p-4 hover:bg-muted"
		>
			<div className="flex flex-col gap-1">
				<CardTitle className="text-base">{project.repo}</CardTitle>
				<CardDescription className="line-clamp-2 font-light text-sm">{project.description}</CardDescription>
			</div>
			<CardDescription className="flex items-center gap-1">
				<IconStar className="size-4" />
				{project.stars}
			</CardDescription>
		</Link>
	);
}
