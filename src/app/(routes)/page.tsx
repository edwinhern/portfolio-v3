import { Introduction } from "@/features/home/components/introduction";
import { Project } from "@/features/home/components/project";
import { SocialMediaIcons } from "@/features/home/components/social-media-icons";

export default async function Home() {
	return (
		<div className="flex flex-col space-y-4">
			<Introduction />
			<SocialMediaIcons />
			<Project />
		</div>
	);
}
