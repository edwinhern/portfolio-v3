import { siteConfig } from "@/config/site";
import { Introduction } from "@/features/home/components/introduction";
import { ProjectCard } from "@/features/home/components/project-card";
import { SocialMediaIcons } from "@/features/home/components/social-media-icons";
import { getGithubRepos } from "@/lib/api/github/utils";
import Link from "next/link";

export default async function Home() {
	const repositories = await getGithubRepos();

	return (
		<div className="flex flex-col space-y-4">
			<Introduction />
			<SocialMediaIcons />
			<section className="space-y-4 py-4">
				<h2 className="font-semibold text-lg">Projects</h2>

				<div className="flex flex-col items-end gap-4">
					<div className="grid w-full grid-cols-1 md:grid-cols-2">
						{repositories.map((project, index) => (
							<ProjectCard key={index} project={project} />
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
		</div>
	);
}
