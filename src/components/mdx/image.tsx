import { cn } from "@/utils/classes";
import Image from "next/image";

type CustomImageProps = Readonly<{
	src: string;
	width: number;
	height: number;
	alt: string;
	caption?: string;
	priority?: boolean;
	reset?: boolean;
	contained?: boolean;
	size?: "base" | "lg";
}>;

export default function CustomImage({
	src,
	width,
	height,
	alt,
	caption,
	priority,
	reset,
	contained,
	size = "base",
}: CustomImageProps) {
	return (
		<div className={cn(reset ? "" : "not-prose my-8 w-full")}>
			<figure className={cn("m-0 flex flex-col gap-2")}>
				<Image
					src={src}
					width={width}
					height={height}
					alt={alt}
					priority={priority}
					className={cn(
						"h-auto w-full",
						contained && "overflow-hidden rounded-md border border-secondary bg-secondary md:rounded-lg",
						size === "lg" && "md:-ml-20 max-w-none md:w-[calc(100%+160px)]",
					)}
				/>
				{caption && <figcaption>{caption}</figcaption>}
			</figure>
		</div>
	);
}
