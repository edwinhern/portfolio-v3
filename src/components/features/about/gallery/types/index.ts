import type { StaticImageData } from "next/image";
import type { ReactNode } from "react";

export interface PhotoProps {
	src: StaticImageData | string;
	meta?: ReactNode;
	filename?: string;
	alt: string;
	width: number;
	height: number;
	rotate: number;
	left: number;
	index: number;
	flipDirection?: "left" | "right";
	children?: ReactNode;
}

export interface GalleryPhoto {
	src: string;
	meta: string;
	alt: string;
	width: number;
	height: number;
	rotate: number;
	left: number;
	flipDirection?: "left" | "right";
}
