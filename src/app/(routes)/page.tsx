import { Introduction } from "@/components/home/introduction";
import { Project } from "@/components/home/project";
import { Work } from "@/components/home/work";

export default async function Home() {
	return (
		<div className="flex flex-col space-y-12 md:space-y-24">
			<Introduction />
			<div className="animate-in space-y-12 md:space-y-24" style={{ "--index": 4 } as React.CSSProperties}>
				<Work />
				<Project />
			</div>
		</div>
	);
}
