import { siClaude, siCursor, siNotion, siRaycast } from "simple-icons";

import { GearCategory, type GearItem } from "./gearTypes";

export const gear: GearItem[] = [
	{
		title: "BenQ  Monitor Light",
		description: "Auto-dimming comes in clutch with zero screen glare.",
		category: GearCategory.Home,
		image: { type: "url", src: "https://f.media-amazon.com/images/I/51TVzOs05eL._AC_SL1500_.jpg" },
		link: "https://amzn.to/3Wy5SUi",
	},
	{
		title: "Anker USB-C Hub",
		description: "One cable solution for a MacBook.",
		category: GearCategory.Home,
		image: { type: "url", src: "https://f.media-amazon.com/images/I/61dt+Oo4PfL._AC_SL1500_.jpg" },
		link: "https://amzn.to/40uqbDo",
	},
	{
		title: "Apple Magic Trackpad",
		description: "Best trackpad for MacOS gestures and control.",
		category: GearCategory.Home,
		image: { type: "url", src: "https://f.media-amazon.com/images/I/41KZtzhlK+L._AC_SL1500_.jpg" },
		link: "https://amzn.to/4bZ6OrS",
	},
	{
		title: "Logitech MX Master 3S",
		description: "Ergonomic and comfortable for daily use.",
		category: GearCategory.Home,
		image: { type: "url", src: "https://f.media-amazon.com/images/I/61xKiCADfpL._AC_SL1500_.jpg" },
		link: "https://amzn.to/40ozUe8",
	},
	{
		title: "Keychron Q1 Max",
		description: "Wireless - favorite keyboard for work and gaming.",
		category: GearCategory.Home,
		image: { type: "url", src: "https://f.media-amazon.com/images/I/616rea0RO4L._AC_SL1500_.jpg" },
		link: "https://amzn.to/40oJw8U",
	},
	{
		title: 'LG 27" UltraGear',
		description: "Crisp, great display, and great for gaming.",
		category: GearCategory.Home,
		image: { type: "url", src: "https://f.media-amazon.com/images/I/616ZOS5bnnL._AC_SL1500_.jpg" },
		link: "https://amzn.to/4awlYUg",
	},
	{
		title: "Patagonia Refugio Pack 26L",
		description: "Versatile daypack for everyday carry and travel.",
		category: GearCategory.Everyday,
		image: { type: "url", src: "https://f.media-amazon.com/images/I/51YI1+sgISL._AC_SL1200_.jpg" },
		link: "https://amzn.to/3Wz9pBD",
	},
	{
		title: 'MacBook Pro 16"',
		description: "Daily driver. Sleek, great display, and powerful.",
		category: GearCategory.Everyday,
		image: { type: "url", src: "https://f.media-amazon.com/images/I/61hw7aZWYSL._AC_SL1500_.jpg" },
		link: "https://amzn.to/42zMQRa",
	},
	{
		title: "Apple AirPods Pro",
		description: "Perfect for on-the-go listening and calls.",
		category: GearCategory.Everyday,
		image: { type: "url", src: "https://f.media-amazon.com/images/I/61SUj2aKoEL._AC_SL1500_.jpg" },
		link: "https://amzn.to/40Lew4n",
	},
	{
		title: "Sony WH-1000XM6",
		description: "Premium noise-canceling, perfect for bass music lovers.",
		category: GearCategory.Everyday,
		image: { type: "url", src: "https://f.media-amazon.com/images/I/61JI1UpiU4L._AC_SX679_.jpg" },
		link: "https://amzn.to/4bW1y85",
	},
	{
		title: "Notion",
		description: "All-in-one workspace for notes and project planning.",
		category: GearCategory.Apps,
		image: { type: "simpleicon", icon: siNotion },
		link: "https://notion.so",
	},
	{
		title: "Raycast",
		description: "Spotlight replacement with powerful workflows and extensions.",
		category: GearCategory.Apps,
		image: { type: "simpleicon", icon: siRaycast },
		link: "https://raycast.com/?via=edwinhern",
	},
	{
		title: "Claude",
		description: "Goat AI model for coding and writing.",
		category: GearCategory.Apps,
		image: { type: "simpleicon", icon: siClaude },
		link: "https://claude.ai",
	},
	{
		title: "Cursor",
		description: "VS Code alternative with AI. Perfect for development.",
		category: GearCategory.Apps,
		image: { type: "simpleicon", icon: siCursor },
		link: "https://cursor.sh",
	},
];
