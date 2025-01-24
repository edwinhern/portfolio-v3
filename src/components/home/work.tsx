import Section from "@/components/ui/section";
import { WorkCard } from "./work-card";

const workplaces = [
	{
		title: "Software Engineer II",
		company: "Motorola Solutions",
		date: "2025 - Present",
		imageSrc: "/work/motorola-solutions.jpeg",
		link: "https://www.motorolasolutions.com",
	},
	{
		title: "Software Engineer II",
		company: "Tesla",
		date: "2023 - 2024",
		imageSrc: "/work/tesla.png",
		link: "https://www.tesla.com",
	},
	{
		title: "Software Engineer Intern",
		company: "Tesla",
		date: "2022 - 2023",
		imageSrc: "/work/tesla.png",
		link: "https://www.tesla.com",
	},
	{
		title: "Software Engineer Intern",
		company: "JPMorgan Chase & Co.",
		date: "2022 - 2023",
		imageSrc: "/work/jpmc.jpeg",
		link: "https://www.jpmorganchase.com",
	},
];

export const Work: React.FC = () => {
	return (
		<Section heading="Work" headingAlignment="left">
			<div className="flex w-full flex-col">
				<ul className="animated-list flex flex-col gap-8">
					{workplaces.map((workplace) => (
						<WorkCard key={workplace.title} {...workplace} />
					))}
				</ul>
			</div>
		</Section>
	);
};
