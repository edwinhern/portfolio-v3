import { IconArrowUpRight } from "justd-icons";
import type { Metadata } from "next";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { AnimateInGroup } from "@/ui/animate-in";
import { buttonVariants } from "@/ui/button";

export const metadata: Metadata = {
	title: "404",
	description: "Uh oh! This page does not exist",
};

export default function Custom404() {
	return (
		<div className="flex flex-col gap-2">
			<AnimateInGroup>
				<h1 className="font-bold text-lg text-primary">404!</h1>
				<p className="max-w-md font-light leading-relaxed">
					Uh oh! This page does not exist, maybe you clicked an old link or misspelled. Please try again…
				</p>
				<div className="h-2" />
				<Link className={cn(buttonVariants({ variant: "outline" }), "max-w-fit")} href="/">
					Return home
					<IconArrowUpRight className="size-4" />
				</Link>
			</AnimateInGroup>
		</div>
	);
}
