import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/ui/button";
import { GearCategory, type GearItem } from "./types";

export function Item({ title, description, image, link, category }: Readonly<GearItem>) {
	const isApp = category === GearCategory.Apps;

	return (
		<li className="flex snap-start items-center gap-4 transition-opacity">
			<Link className="relative h-20 w-20 shrink-0" href={link} target="_blank" rel="noreferrer">
				<Image
					src={image}
					alt={title}
					fill
					className={cn(
						"rounded-md border border-input object-contain object-center p-2",
						isApp ? "bg-background" : "bg-white",
					)}
				/>
			</Link>
			<div className="flex grow items-center justify-between gap-2">
				<div className="space-y-1">
					<h3 className="line-clamp-2 font-medium text-primary leading-tight">{title}</h3>
					<p className="line-clamp-3 text-muted-foreground text-sm leading-tight">{description}</p>
				</div>
				<div>
					<Link
						className={cn(
							"ml-auto h-fit rounded-full bg-secondary px-4 py-2 text-sm",
							buttonVariants({ variant: "outline" }),
						)}
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
