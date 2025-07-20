import { IconArrowUpRight } from "justd-icons";
import type { Metadata } from "next";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
	title: "404",
	description: "Uh oh! This page does not exist",
};

export default function Custom404() {
	return (
		<div className="flex flex-col gap-2">
			<h1 className="animate-in font-bold text-lg text-primary">404!</h1>
			<p className="max-w-md animate-in font-light leading-relaxed" style={{ "--index": 1 } as React.CSSProperties}>
				Uh oh! This page does not exists, maybe you clicked an old link or misspelled. Please try again…
			</p>

			<div className="h-2" />
			<Link
				className={cn(buttonVariants({ variant: "outline" }), "max-w-fit animate-in")}
				href="/"
				style={{ "--index": 1 } as React.CSSProperties}
			>
				Return home
				<IconArrowUpRight className="size-4" />
			</Link>
		</div>
	);
}
