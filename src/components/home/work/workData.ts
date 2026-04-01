export interface WorkPlace {
	title: string;
	company: string;
	date?: string;
	imageSrc: string;
	link: string;
}

export const WORK_PLACES: WorkPlace[] = [
	{
		title: "Software Engineer",
		company: "Liberty Mutual Insurance",
		date: "2025 - Present",
		imageSrc: "/work/liberty-mutual.jpeg",
		link: "https://www.libertymutual.com",
	},
	{
		title: "Software Engineer",
		company: "Motorola Solutions",
		date: "2025 - 2025",
		imageSrc: "/work/motorola-solutions.png",
		link: "https://www.motorolasolutions.com",
	},
	{
		title: "Software Engineer",
		company: "Tesla",
		date: "2023 - 2024",
		imageSrc: "/work/tesla.png",
		link: "https://www.tesla.com",
	},
];
