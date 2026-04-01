import { siClaude, siCursor, siNotion, siRaycast } from "simple-icons";

import { GearCategory, type GearSection } from "./gearTypes";

export const gear: GearSection[] = [
	{
		category: GearCategory.Apps,
		items: [
			{
				title: "Claude Code",
				description: "My go-to for vibe-coding.",
				image: { type: "simpleicon", icon: siClaude },
				link: "https://claude.ai/code",
			},
			{
				title: "Cursor",
				description: "Perfect for tab-based development.",
				image: { type: "simpleicon", icon: siCursor },
				link: "https://cursor.com/",
			},
			{
				title: "Raycast",
				description: "Spotlight replacement with powerful workflows and extensions.",
				image: { type: "simpleicon", icon: siRaycast },
				link: "https://raycast.com/?via=edwinhern",
			},
			{
				title: "Notion",
				description: "All-in-one workspace for notes and project planning.",
				image: { type: "simpleicon", icon: siNotion },
				link: "https://notion.so",
			},
		],
	},
	{
		category: GearCategory.Home,
		items: [
			{
				title: 'LG 27" UltraGear',
				description: "Crisp, great display, and great for gaming.",
				image: { type: "url", src: "https://f.media-amazon.com/images/I/616ZOS5bnnL._AC_SL1500_.jpg" },
				link: "https://amzn.to/4awlYUg",
			},
			{
				title: "Keychron Q1 Max",
				description: "Wireless - favorite keyboard for work and gaming.",
				image: { type: "url", src: "https://f.media-amazon.com/images/I/616rea0RO4L._AC_SL1500_.jpg" },
				link: "https://amzn.to/40oJw8U",
			},
			{
				title: "Logitech MX Master 3S",
				description: "Ergonomic and comfortable for daily use.",
				image: { type: "url", src: "https://f.media-amazon.com/images/I/61xKiCADfpL._AC_SL1500_.jpg" },
				link: "https://amzn.to/40ozUe8",
			},
			{
				title: "Apple Magic Trackpad 2",
				description: "Best trackpad for MacOS gestures.",
				image: { type: "url", src: "https://f.media-amazon.com/images/I/41KZtzhlK+L._AC_SL1500_.jpg" },
				link: "https://amzn.to/4bZ6OrS",
			},
			{
				title: "BenQ Monitor Light",
				description: "Auto-dims and keeps glare off my screen.",
				image: { type: "url", src: "https://f.media-amazon.com/images/I/51TVzOs05eL._AC_SL1500_.jpg" },
				link: "https://amzn.to/3Wy5SUi",
			},
			{
				title: "Anker USB-C Hub",
				description: "One cable solution to keep my setup clean.",
				image: { type: "url", src: "https://f.media-amazon.com/images/I/61dt+Oo4PfL._AC_SL1500_.jpg" },
				link: "https://amzn.to/40uqbDo",
			},
			{
				title: "Herman Miller Embody",
				description: "Perfect for long hours of work.",
				image: { type: "url", src: "https://f.media-amazon.com/images/I/61vsHNwGGWL._AC_SX679_.jpg" },
				link: "https://store.hermanmiller.com/office-chairs-ergonomic-chairs/embody-chair/100147357.html?lang=en_US&sku=100147357",
			},
		],
	},
	{
		category: GearCategory.Everyday,
		items: [
			{
				title: 'Apple MacBook Pro 16"',
				description: "Daily driver. Sleek, great display, and powerful.",
				image: { type: "url", src: "https://f.media-amazon.com/images/I/61hw7aZWYSL._AC_SL1500_.jpg" },
				link: "https://amzn.to/42zMQRa",
			},
			{
				title: "Apple AirPods Pro",
				description: "Perfect for on-the-go listening and calls.",
				image: { type: "url", src: "https://f.media-amazon.com/images/I/61SUj2aKoEL._AC_SL1500_.jpg" },
				link: "https://amzn.to/40Lew4n",
			},
			{
				title: "Sony WH-1000XM6",
				description: "Premium noise-canceling, perfect for bass music lovers.",
				image: { type: "url", src: "https://f.media-amazon.com/images/I/61JI1UpiU4L._AC_SX679_.jpg" },
				link: "https://amzn.to/4bW1y85",
			},
			{
				title: "Patagonia Refugio Pack 26L",
				description: "Versatile daypack for everyday carry and travel.",
				image: { type: "url", src: "https://f.media-amazon.com/images/I/51YI1+sgISL._AC_SL1200_.jpg" },
				link: "https://amzn.to/3Wz9pBD",
			},
		],
	},
];
