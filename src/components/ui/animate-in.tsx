import type { CSSProperties } from "react";
import { Children } from "react";

import { cn } from "@/lib/utils";

interface AnimateInProps extends React.HTMLAttributes<HTMLDivElement> {
	index: number;
}

/** Single item with explicit index (e.g. inside a map). */
export function AnimateIn({ index, className, style, ...props }: Readonly<AnimateInProps>) {
	return (
		<div className={cn("animate-in", className)} style={{ "--index": index, ...style } as CSSProperties} {...props} />
	);
}

interface AnimateInGroupProps extends React.HTMLAttributes<HTMLDivElement> {
	/** Index of the first child (subsequent children get startIndex + 1, + 2, …). */
	startIndex?: number;
}

/** Wraps children and staggers animate-in by child order. No manual indices needed. */
export function AnimateInGroup({ startIndex = 0, className, children, ...props }: Readonly<AnimateInGroupProps>) {
	return (
		<div className={cn(className)} {...props}>
			{Children.map(children, (child, i) => (
				<div className="animate-in" style={{ "--index": startIndex + i } as CSSProperties}>
					{child}
				</div>
			))}
		</div>
	);
}
