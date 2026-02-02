import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
	heading: string;
	headingAlignment?: "right" | "left";
	children: ReactNode;
}

export function Section({ heading, headingAlignment, children, ...props }: Readonly<SectionProps>) {
	return (
		<section
			{...props}
			className={cn("flex flex-col gap-4 md:flex-row md:gap-9", props.className)}
			id={heading.toLowerCase().replace(/\s/g, "-")}
		>
			<h2 className={cn("shrink-0 font-semibold text-lg md:w-32", headingAlignment === "right" && "md:text-right")}>
				{heading}
			</h2>
			<div className="flex-1">{children}</div>
		</section>
	);
}
