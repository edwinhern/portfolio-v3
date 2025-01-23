import { siteConfig } from "@/config/site";
import { getGithubRepos } from "@/lib/api/github/utils";
import Link from "next/link";
import { ProjectCard } from "./project-card";

export const Project = async () => {
	const repositories = await getGithubRepos();

	return (
		<section className="space-y-4 py-4">
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
					className="px-4 text-sm underline"
					rel="noreferrer"
				>
					See More...
				</Link>
			</div>
		</section>
	);
};
