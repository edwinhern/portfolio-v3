import Link from "next/link";

import { siteConfig } from "@/config/site";
import { getPinnedRepos } from "@/lib/api/github";
import Section from "@/ui/section";
import { ProjectCard } from "./card";

export const Projects: React.FC = async () => {
	const repositories = await getPinnedRepos();

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
					className="text-muted-foreground text-sm underline decoration-2 underline-offset-4 transition-colors hover:text-primary/80"
					href={`${siteConfig.links.github}?tab=repositories`}
					rel="noreferrer"
				>
					See More...
				</Link>
			</div>
		</Section>
	);
};
