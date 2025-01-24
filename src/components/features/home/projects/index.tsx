import Link from "next/link";

import { siteConfig } from "@/config/site";
import { getGithubRepos } from "@/lib/api/github";
import Section from "@/ui/section";
import { ProjectCard } from "./card";

export const Projects: React.FC = async () => {
	const repositories = await getGithubRepos();

	return (
		<Section heading="Projects" headingAlignment="left">
			<div className="flex w-full flex-col items-end gap-4">
				<ul className="animated-list flex w-full flex-col gap-8">
					{repositories.map((repo, index) => (
						<ProjectCard key={repo.repo} {...repo} index={index} />
					))}
				</ul>
				<Link
					target="_blank"
					href={`${siteConfig.links.github}?tab=repositories`}
					className="text-muted-foreground text-sm underline underline-offset-4 hover:text-primary"
					rel="noreferrer"
				>
					See More...
				</Link>
			</div>
		</Section>
	);
};
