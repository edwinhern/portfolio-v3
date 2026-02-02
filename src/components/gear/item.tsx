import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/ui/button";
import type { GearItem } from "./types";

export function Item({ title, description, image, link }: Readonly<GearItem>) {
	return (
		<li className="col-span-1 row-span-1 flex snap-start items-center gap-4 transition-opacity">
			<Link className="relative h-20 w-20 flex-shrink-0" href={link} target="_blank" rel="noreferrer">
				<Image
					src={image}
					alt={title}
					fill
					className="rounded-md border border-input bg-white object-contain object-center p-2"
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
