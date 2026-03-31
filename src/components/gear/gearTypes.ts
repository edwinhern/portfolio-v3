import type { StaticImageData } from "next/image";
import type { SimpleIcon } from "simple-icons";

export enum GearCategory {
	Home = "Home Desk Setup",
	Everyday = "Everyday Carry",
	Apps = "Apps",
	Other = "Other",
}

export type GearImage = { type: "url"; src: string | StaticImageData } | { type: "simpleicon"; icon: SimpleIcon };

export interface GearItem {
	title: string;
	description: string;
	category: GearCategory;
	image: GearImage;
	link: string;
}
