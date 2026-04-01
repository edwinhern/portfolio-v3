import type { CSSProperties, ReactNode } from "react";

import { cn } from "@/lib/utils";

interface AnimateInProps extends React.HTMLAttributes<HTMLDivElement> {
	index: number;
}

/** Single item with explicit index (e.g. inside a map). */
export function AnimateIn({ index, className, style, ...props }: Readonly<AnimateInProps>) {
	return (
		<div
			className={cn("animate-in motion-reduce:animate-none", className)}
			style={{ "--index": index, ...style } as CSSProperties}
			{...props}
		/>
	);
}

interface AnimateInGroupProps extends React.HTMLAttributes<HTMLDivElement> {
	/** Index of the first child (subsequent children get startIndex + 1, + 2, …). */
	startIndex?: number;
}

/** Wraps children and staggers animate-in by child order. No manual indices needed. */
export function AnimateInGroup({ startIndex = 0, className, children, ...props }: Readonly<AnimateInGroupProps>) {
	const childArray = Array.isArray(children) ? children : children != null ? [children] : [];
	return (
		<div className={cn(className)} {...props}>
			{(childArray as ReactNode[]).map((child, i) => (
				<div
					// biome-ignore lint/suspicious/noArrayIndexKey: order is stable, no reordering occurs
					key={i}
					className="animate-in motion-reduce:animate-none"
					style={{ "--index": startIndex + i } as CSSProperties}
				>
					{child}
				</div>
			))}
		</div>
	);
}
