import { Introduction } from "@/features/home/introduction";
import { Projects } from "@/features/home/projects";
import { Work } from "@/features/home/work";
import { AnimateIn } from "@/ui/animate-in";

export default async function Home() {
	return (
		<div className="flex flex-col space-y-12 md:space-y-24">
			<Introduction />
			<AnimateIn index={4} className="space-y-12 md:space-y-24">
				<Work />
				<Projects />
			</AnimateIn>
		</div>
	);
}
