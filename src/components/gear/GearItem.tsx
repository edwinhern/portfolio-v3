import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/ui/button";
import type { GearImage, GearItem } from "./gearTypes";

interface ItemImageProps {
	image: GearImage;
	title: string;
}

function ItemImage({ image, title }: ItemImageProps) {
	const baseClass = cn("rounded-md border border-input bg-white object-contain object-center p-2");

	if (image.type === "simpleicon") {
		return (
			<div className={cn(baseClass, "flex size-full items-center justify-center")}>
				<svg
					role="img"
					viewBox="0 0 24 24"
					aria-label={image.icon.title}
					className="size-8"
					style={{ fill: `#${image.icon.hex}` }}
				>
					<path d={image.icon.path} />
				</svg>
			</div>
		);
	}

	return <Image src={image.src} alt={title} fill sizes="100px" className={baseClass} />;
}

export function Item({ title, description, image, link }: Readonly<GearItem>) {
	return (
		<li className="flex snap-start items-center gap-4 transition-opacity">
			<Link className="relative size-16 shrink-0" href={link} target="_blank" rel="noreferrer">
				<ItemImage image={image} title={title} />
			</Link>
			<div className="flex grow items-center justify-between gap-2">
				<div className="space-y-1">
					<h3 className="line-clamp-2 font-medium text-primary leading-tight">{title}</h3>
					<p className="line-clamp-3 text-muted-foreground text-sm leading-tight">{description}</p>
				</div>
				<div>
					<Link
						className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
						href={link}
						target="_blank"
						rel="noreferrer"
					>
						Get
					</Link>
				</div>
			</div>
		</li>
	);
}
