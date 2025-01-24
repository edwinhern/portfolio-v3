import { Introduction } from "@/features/home/introduction";
import { Projects } from "@/features/home/projects";
import { Work } from "@/features/home/work";

export default async function Home() {
	return (
		<div className="flex flex-col space-y-12 md:space-y-24">
			<Introduction />
			<div className="animate-in space-y-12 md:space-y-24" style={{ "--index": 4 } as React.CSSProperties}>
				<Work />
				<Projects />
			</div>
		</div>
	);
}
