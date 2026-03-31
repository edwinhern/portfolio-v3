import { SectionList } from "@/ui/section-list";
import { WorkCard } from "./card";
import { WORK_PLACES } from "./work.data";

export const Work: React.FC = () => {
	return (
		<SectionList heading="Work">
			{WORK_PLACES.map((workplace) => (
				<WorkCard key={`${workplace.company}-${workplace.title}-${workplace.date ?? ""}`} {...workplace} />
			))}
		</SectionList>
	);
};
