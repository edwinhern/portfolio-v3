import { IconStar } from "justd-icons";
import Link from "next/link";
import type { GitHubRepository } from "@/lib/api/github";

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
				rel="noopener noreferrer"
				aria-label={repo}
				className="-my-2 flex w-full flex-col py-3 no-underline"
			>
				<div className="flex flex-col gap-px">
					<div className="flex w-full items-center justify-between">
						<p className="mr-4">{repo}</p>
						<div className="flex flex-shrink-0 items-center gap-1 text-muted-foreground">
							<IconStar className="size-4" />
							{starCount}
						</div>
					</div>
					<p className="line-clamp-2 text-muted-foreground">{description}</p>
				</div>
			</Link>
		</li>
	);
}
