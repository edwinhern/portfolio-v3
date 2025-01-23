import Link from "next/link";

import Section from "@/components/ui/section";
import { siteConfig } from "@/config/site";
import { getGithubRepos } from "@/lib/api/github/utils";
import { ProjectCard } from "./project-card";

export const Project: React.FC = async () => {
	const repositories = await getGithubRepos();

	return (
		<Section heading="Projects" headingAlignment="left">
			<div className="flex flex-col items-end gap-4">
				<ul className="animated-list grid w-full grid-cols-1 md:grid-cols-2">
					{repositories.map(ProjectCard)}
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
