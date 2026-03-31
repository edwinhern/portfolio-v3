import Link from "next/link";

import { siteConfig } from "@/config/site";
import { getPinnedRepos } from "@/lib/api/github";
import { SectionList } from "@/ui/section-list";
import { ProjectCard } from "./card";

export async function Projects() {
	const repositories = await getPinnedRepos();

	const footer = (
		<Link
			target="_blank"
			className="link text-muted-foreground text-sm hover:text-primary/80"
			href={`${siteConfig.links.github}?tab=repositories`}
			rel="noreferrer"
		>
			See More...
		</Link>
	);

	return (
		<SectionList heading="Projects" footer={footer}>
			{repositories.map((repo, index) => (
				<ProjectCard key={repo.repo} {...repo} index={index} />
			))}
		</SectionList>
	);
}
