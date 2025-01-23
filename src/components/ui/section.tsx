"use client";

import clsx from "clsx";
import type { ReactNode } from "react";

interface SectionProps {
	heading: string;
	headingAlignment?: "right" | "left";
	children: ReactNode;
}

export default function Section({ heading, headingAlignment, children }: Readonly<SectionProps>) {
	return (
		<section
			className="col-reverse flex flex-col gap-4 md:flex-row md:gap-9"
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
