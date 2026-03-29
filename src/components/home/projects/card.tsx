import { IconStar } from "@intentui/icons";
import Link from "next/link";
import type { GitHubRepository } from "@/lib/api/github";
import { Badge } from "@/ui/badge";

interface ProjectCardProps extends GitHubRepository {
	index: number;
}

export function ProjectCard({ link, repo, description, stars }: Readonly<ProjectCardProps>) {
	const starCount = stars >= 1000 ? `${(stars / 1000).toFixed(1)}k+` : stars.toString();

	return (
		<li className="rounded-lg transition-opacity" key={`${repo}-${link}`}>
			<Link
				target="_blank"
				href={link}
				rel="noreferrer"
				aria-label={repo}
				className="-my-2 flex w-full flex-col py-3 no-underline"
			>
				<div className="flex flex-col gap-px">
					<div className="flex w-full items-center justify-between">
						<p className="mr-4">{repo}</p>
						<Badge variant="secondary" className="shrink-0 gap-1 font-normal">
							<IconStar className="size-3" />
							{starCount}
						</Badge>
					</div>
					<p className="line-clamp-2 text-muted-foreground">{description}</p>
				</div>
			</Link>
		</li>
	);
}
