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

export const GALLERY_PHOTOS: GalleryPhoto[] = [
	{
		src: "/gallery/me-nat.JPG",
		meta: "2024-08-14",
		alt: "Me and Nat",
		width: 220,
		height: 280,
		rotate: -4,
		left: -20,
	},
	{
		src: "/gallery/seattle.JPG",
		meta: "2024-05-02",
		alt: "Seattle cityscape",
		width: 220,
		height: 280,
		rotate: 7.6,
		left: 140,
		flipDirection: "left",
	},
	{
		src: "/gallery/yachats.JPG",
		meta: "2024-04-27",
		alt: "Yachats ocean view",
		width: 220,
		height: 280,
		rotate: -6,
		left: 300,
		flipDirection: "right",
	},
	{
		src: "/gallery/california.JPG",
		meta: "2023-09-15",
		alt: "California",
		width: 220,
		height: 280,
		rotate: 6.3,
		left: 500,
		flipDirection: "left",
	},
];
