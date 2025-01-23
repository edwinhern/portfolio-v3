import Link from "next/link";

import { siteConfig } from "@/config/site";
import { getGithubRepos } from "@/lib/api/github/utils";
import { cn } from "@/lib/utils";
import { ProjectCard } from "./project-card";

export const Project: React.FC<React.ComponentProps<"div">> = async ({ ...props }) => {
	const repositories = await getGithubRepos();

	return (
		<section {...props} className={cn("space-y-4 py-4", props.className)}>
			<h2 className="font-semibold text-lg">Projects</h2>

			<div className="flex flex-col items-end gap-4">
				<div className="grid w-full grid-cols-1 md:grid-cols-2">
					{repositories.map((project) => (
						<ProjectCard key={project.repo} project={project} />
					))}
				</div>
				<Link
					target="_blank"
					href={`${siteConfig.links.github}?tab=repositories`}
					className="text-muted-foreground text-sm underline underline-offset-4 hover:text-primary"
					rel="noreferrer"
				>
					See More...
				</Link>
			</div>
		</section>
	);
};
