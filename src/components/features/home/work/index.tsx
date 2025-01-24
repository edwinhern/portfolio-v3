import Section from "@/ui/section";
import { WorkCard } from "./card";
import { WORK_PLACES } from "./constants";

export const Work: React.FC = () => {
	return (
		<Section heading="Work" headingAlignment="left">
			<div className="flex w-full flex-col">
				<ul className="animated-list flex flex-col gap-8">
					{WORK_PLACES.map((workplace) => (
						<WorkCard key={workplace.title} {...workplace} />
					))}
				</ul>
			</div>
		</Section>
	);
};
