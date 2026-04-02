import type { SimpleIcon } from "simple-icons";

export type WorkPlaceImage = { type: "url"; src: string } | { type: "simpleicon"; icon: SimpleIcon; color?: string };

export interface WorkPlace {
	title: string;
	company: string;
	date?: string;
	image: WorkPlaceImage;
	link: string;
}
