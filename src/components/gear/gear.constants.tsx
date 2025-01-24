import type { StaticImageData } from "next/image";

export enum GearCategory {
	Home = "Home Desk Setup",
	Everyday = "Everyday Carry",
	Apps = "Apps",
	Other = "Other",
}

export interface GearItem {
	title: string;
	description: string;
	category: GearCategory;
	image: string | StaticImageData;
	link: string;
}

export const gear: GearItem[] = [
	{
		title: "BenQ  Monitor Light",
		description: "Auto-dimming comes in clutch with zero screen glare.",
		category: GearCategory.Home,
		image: "https://f.media-amazon.com/images/I/51TVzOs05eL._AC_SL1500_.jpg",
		link: "https://a.co/d/iHjTfm3",
	},
	{
		title: "Anker USB-C Hub",
		description: "One cable solution for a MacBook.",
		category: GearCategory.Home,
		image: "https://f.media-amazon.com/images/I/61dt+Oo4PfL._AC_SL1500_.jpg",
		link: "https://a.co/d/ezFCEfd",
	},
	{
		title: "Apple Magic Trackpad",
		description: "Best trackpad for MacOS gestures and control.",
		category: GearCategory.Home,
		image: "https://f.media-amazon.com/images/I/41KZtzhlK+L._AC_SL1500_.jpg",
		link: "https://a.co/d/7X2yXE2",
	},
	{
		title: "Logitech MX Master 3S",
		description: "Ergonomic and comfortable for daily use.",
		category: GearCategory.Home,
		image: "https://f.media-amazon.com/images/I/61xKiCADfpL._AC_SL1500_.jpg",
		link: "https://amzn.to/3PFWCKu",
	},
	{
		title: "Keychron Q1 Max",
		description: "Wireless - favorite keyboard for work and gaming.",
		category: GearCategory.Home,
		image: "https://f.media-amazon.com/images/I/616rea0RO4L._AC_SL1500_.jpg",
		link: "https://a.co/d/eop43z3",
	},
	{
		title: 'LG 27" UltraGear OLED',
		description: "Crisp, great display, and great for gaming.",
		category: GearCategory.Home,
		image: "https://f.media-amazon.com/images/I/616ZOS5bnnL._AC_SL1500_.jpg",
		link: "https://a.co/d/cJ25XuO",
	},
	{
		title: "Patagonia Refugio Pack 26L",
		description: "Versatile daypack for everyday carry and travel.",
		category: GearCategory.Everyday,
		image: "https://f.media-amazon.com/images/I/51YI1+sgISL._AC_SL1200_.jpg",
		link: "https://a.co/d/amJ1yIx",
	},
	{
		title: 'MacBook Pro 16"',
		description: "Daily driver. Sleek, great display, and powerful.",
		category: GearCategory.Everyday,
		image: "https://f.media-amazon.com/images/I/618d5bS2lUL._AC_SL1500_.jpg",
		link: "https://a.co/d/deJ5vZ1",
	},
	{
		title: "Apple AirPods Pro",
		description: "Perfect for on-the-go listening and calls.",
		category: GearCategory.Everyday,
		image: "https://f.media-amazon.com/images/I/61SUj2aKoEL._AC_SL1500_.jpg",
		link: "https://a.co/d/95nVh2Z",
	},
	{
		title: "Sony WH-1000XM5",
		description: "Premium noise-canceling, perfect for bass music lovers.",
		category: GearCategory.Everyday,
		image: "https://f.media-amazon.com/images/I/51aXvjzcukL._AC_SL1500_.jpg",
		link: "https://a.co/d/6QF6UuG",
	},
	{
		title: "Notion",
		description: "All-in-one workspace for notes and project planning.",
		category: GearCategory.Apps,
		image: "https://cdn.brandfetch.io/idPYUoikV7/theme/dark/symbol.svg?c=1bfwsmEH20zzEfSNTed",
		link: "https://notion.so",
	},
	{
		title: "Raycast",
		description: "Spotlight replacement with powerful workflows and extensions.",
		category: GearCategory.Apps,
		image: "https://cdn.brandfetch.io/idxxHV50Mm/theme/dark/symbol.svg?c=1bfwsmEH20zzEfSNTed",
		link: "https://raycast.com",
	},
	{
		title: "Cursor",
		description: "VS Code alternative with AI. Perfect for development.",
		category: GearCategory.Apps,
		image: "https://www.cursor.com/assets/images/logo.svg",
		link: "https://cursor.sh",
	},
];
