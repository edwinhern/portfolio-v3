import type { StaticImageData } from "next/image";

interface Item {
	title: string;
	description: string;
	image: string | StaticImageData | Element;
	link: string;
}

const gear = [
	{
		name: "Sway Standing Desk",
		category: "Ergonofis",
		image: "",
		description: "The highest of quality and made to last. Solid wood and a unique touch control panel.",
		link: "https://shrsl.com/49346",
		sponsored: true,
	},
	{
		name: "Desk Shelf",
		category: "Ergonofis",
		image: "",
		description: "Elevates your screen(s) to help position your neck in a comfortable ergonomic posture.",
		link: "https://shrsl.com/49342",
	},
	{
		name: "Cable Management Solution",
		category: "Ergonofis",
		image: "",
		description: "An essential for a clean and clutter free workspace.",
		link: "https://shrsl.com/4933x",
	},
];
