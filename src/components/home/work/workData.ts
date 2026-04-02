import { siMotorola, siTesla } from "simple-icons";

import type { WorkPlace } from "./workTypes";

export const WORK_PLACES: WorkPlace[] = [
	{
		title: "Software Engineer",
		company: "Liberty Mutual Insurance",
		date: "2025 - Present",
		image: { type: "url", src: "/work/liberty-mutual.jpeg" },
		link: "https://www.libertymutual.com",
	},
	{
		title: "Software Engineer",
		company: "Motorola Solutions",
		date: "2025 - 2025",
		image: { type: "simpleicon", icon: siMotorola, color: "285FB6" },
		link: "https://www.motorolasolutions.com",
	},
	{
		title: "Software Engineer",
		company: "Tesla",
		date: "2023 - 2024",
		image: { type: "simpleicon", icon: siTesla },
		link: "https://www.tesla.com",
	},
];
