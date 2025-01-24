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
