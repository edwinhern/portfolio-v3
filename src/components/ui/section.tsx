"use client";

import { cn } from "@/lib/utils";
import clsx from "clsx";
import type { ReactNode } from "react";

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
	heading: string;
	headingAlignment?: "right" | "left";
	children: ReactNode;
}

export default function Section({ heading, headingAlignment, children, ...props }: Readonly<SectionProps>) {
	return (
		<section
			{...props}
			className={cn("col-reverse flex flex-col gap-4 md:flex-row md:gap-9", props.className)}
			id={heading.toLowerCase().replace(/\s/g, "-")}
		>
			<h2
				className={clsx(
					"shrink-0 font-semibold text-lg md:w-32",
					headingAlignment === "right" && "md:text-right",
				)}
			>
				{heading}
			</h2>
			{children}
		</section>
	);
}
