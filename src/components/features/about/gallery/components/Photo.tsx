"use client";

import { motion } from "framer-motion";
import Image, { type StaticImageData } from "next/image";
import { photoVariants } from "../animations/variants";
import { photoStyles } from "../styles/photo.styles";
import type { PhotoProps } from "../types";
import { PhotoMeta } from "./PhotoMeta";

const getFileName = (src: string | StaticImageData, filename?: string) => {
	return filename ?? (typeof src !== "string" ? `${src.src.split("/").at(-1)?.split(".")[0]}.jpg` : "");
};

export function Photo({
	src,
	alt,
	filename,
	width,
	height,
	rotate,
	left,
	index,
	flipDirection,
	meta,
	children,
}: Readonly<PhotoProps>) {
	const fileName: string = getFileName(src, filename);

	return (
		<motion.div
			className={photoStyles.wrapper}
			style={{ rotate: `${rotate}deg`, left, width, height, perspective: 1000 }}
			initial={photoVariants.initial(index)}
			animate={photoVariants.animate}
			transition={{
				default: {
					type: "spring",
					bounce: 0.2,
					duration: 0.8 + index * 0.05,
					delay: index * 0.15,
				},
				opacity: {
					duration: 0.7,
					ease: [0.23, 0.64, 0.13, 0.99],
					delay: index * 0.15,
				},
			}}
			drag
			whileTap={{ scale: 1.1, cursor: "grabbing" }}
			whileDrag={{ scale: 1.1, cursor: "grabbing" }}
			whileHover="flipped"
		>
			<motion.div
				className="relative h-full w-full rounded-xl shadow-md will-change-transform"
				style={{ transformStyle: "preserve-3d" }}
				transition={{ type: "spring", duration: 0.4 }}
				variants={photoVariants}
			>
				<div className={photoStyles.shared} style={{ backfaceVisibility: "hidden" }}>
					<Image src={src} alt={alt} width={width} height={height} className={photoStyles.image} priority />
					{children}
				</div>
				<div
					className={photoStyles.backface}
					style={{
						backfaceVisibility: "hidden",
						transform: "rotateY(180deg)",
					}}
				>
					<PhotoMeta fileName={fileName} meta={meta} />
				</div>
			</motion.div>
		</motion.div>
	);
}
