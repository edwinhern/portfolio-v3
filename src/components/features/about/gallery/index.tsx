"use client";

import { Photo } from "./components/Photo";
import { GALLERY_PHOTOS } from "./constants/photos";

export function Gallery() {
	return (
		<section className="relative flex h-[268px] gap-4">
			{GALLERY_PHOTOS.map((photo, index) => (
				<Photo key={photo.alt} {...photo} index={index + 1} />
			))}
		</section>
	);
}
