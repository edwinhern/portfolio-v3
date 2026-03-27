import { Introduction } from "@/home/introduction";
import { Projects } from "@/home/projects";
import { Work } from "@/home/work";
import { AnimateIn } from "@/ui/animate-in";
import { Separator } from "@/ui/separator";

export default async function Home() {
	return (
		<div className="flex flex-col space-y-12 md:space-y-24">
			<Introduction />
			<Separator className="bg-border/50" />
			<AnimateIn index={4} className="space-y-12 md:space-y-24">
				<Work />
				<Separator className="bg-border/50" />
				<Projects />
			</AnimateIn>
		</div>
	);
}
