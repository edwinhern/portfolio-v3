import { Introduction } from "@/features/home/components/introduction";
import { Project } from "@/features/home/components/project";
import { Work } from "@/features/home/components/work";

export default async function Home() {
	return (
		<div className="flex flex-col space-y-16 md:space-y-18">
			<Introduction />
			<div className="animate-in space-y-16 md:space-y-18" style={{ "--index": 5 } as React.CSSProperties}>
				<Work />
				<Project />
			</div>
		</div>
	);
}
