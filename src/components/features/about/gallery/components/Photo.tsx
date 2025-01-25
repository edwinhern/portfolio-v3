"use client";

import { motion } from "framer-motion";
import { Noto_Serif_Display } from "next/font/google";
import Image from "next/image";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";
import clsx from "clsx";

export interface PhotoProps {
	src: string;
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

const getFileName = (src: string): string => {
	return src.split("/").at(-1)?.split(".")[0].concat(".jpg") ?? "";
};

const notoSerifDisplay = Noto_Serif_Display({
	variable: "--font-noto-serif-display",
	subsets: ["latin"],
});

export function Photo({
	src,
	alt,
	width,
	height,
	rotate,
	left,
	index,
	flipDirection,
	meta,
	children,
}: Readonly<PhotoProps>) {
	const fileName: string = getFileName(src);
	const shared = "absolute h-full w-full overflow-hidden";

	const getDuration = (index: number) => {
		if (index === 1) return 0.8;
		if (index === 2) return 0.85;
		if (index === 3) return 0.9;
		return 1;
	};

	const getX = (index: number) => {
		if (index === 1) return -60;
		if (index === 2) return -30;
		if (index === 3) return 30;
		return 60;
	};

	return (
		<motion.div
			className={
				"hover:before:-top-8 hover:before:-left-7 absolute mx-auto cursor-grab hover:before:absolute hover:before:block hover:before:h-[300px] hover:before:w-[calc(100%+55px)]"
			}
			style={{ rotate: `${rotate}deg`, left, width, height, perspective: 1000 }}
			initial={{
				width,
				height,
				rotate: (rotate || 0) - 20,
				y: 200 + index * 20,
				x: getX(index),
				opacity: 0,
			}}
			transition={{
				default: {
					type: "spring",
					bounce: 0.2,
					duration: getDuration(index),
					delay: index * 0.15,
				},
				opacity: {
					duration: 0.7,
					ease: [0.23, 0.64, 0.13, 0.99],
					delay: index * 0.15,
				},
				scale: { duration: 0.12 },
			}}
			animate={{ width, height, rotate, y: 0, opacity: 1, x: 0 }}
			drag
			whileTap={{ scale: 1.1, cursor: "grabbing" }}
			whileDrag={{ scale: 1.1, cursor: "grabbing" }}
			whileHover="flipped"
		>
			<motion.div
				className="relative h-full w-full shadow-md will-change-transform"
				style={{ transformStyle: "preserve-3d" }}
				transition={{ type: "spring", duration: 0.4 }}
				variants={{
					flipped: {
						scale: 1.1,
						rotateY: flipDirection === "right" ? -180 : 180,
						rotateX: 5,
					},
				}}
			>
				<div className={shared} style={{ backfaceVisibility: "hidden" }}>
					<Image
						src={src}
						alt={alt}
						width={width}
						height={height}
						className="pointer-events-none absolute inset-0 h-full w-full bg-neutral-400 object-cover"
						priority
					/>
					{children}
				</div>
				<div
					className={cn(shared, "flex items-center overflow-hidden bg-[#FFFAF2]")}
					style={{
						backfaceVisibility: "hidden",
						transform: "rotateY(180deg)",
					}}
				>
					<div className="flex items-center">
						<span className="absolute h-[500px] w-[500px] rotate-[-20deg] bg-[length:280px] bg-[url('/photopaper.png')] bg-repeat" />
						<div className="z-[1] px-6 text-black">
							<div className={clsx("flex flex-col gap-1 uppercase")}>
								<p className="text-sm">{fileName}</p>
								{meta && <p className="text-xs">{meta}</p>}
							</div>
						</div>
					</div>
				</div>
			</motion.div>
		</motion.div>
	);
}
