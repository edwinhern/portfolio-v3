import { SectionList } from "@/ui/section-list";
import { WorkCard } from "./WorkCard";
import { WORK_PLACES } from "./workData";

export function Work() {
	return (
		<SectionList heading="Work">
			{WORK_PLACES.map((workplace) => (
				<WorkCard key={`${workplace.company}-${workplace.title}-${workplace.date ?? ""}`} {...workplace} />
			))}
		</SectionList>
	);
}
