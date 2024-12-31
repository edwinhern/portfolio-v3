"use client";

import * as React from "react";

import { Link as LinkPrimitive, type LinkProps as LinkPrimitiveProps, composeRenderProps } from "react-aria-components";
import { tv } from "tailwind-variants";

const linkStyles = tv({
	base: [
		"relative outline-0 outline-primary outline-offset-2 transition-colors focus:outline-none focus-visible:outline-2",
		"disabled:focus-visible:outline-0 forced-colors:outline-[Highlight] forced-colors:disabled:text-[GrayText]",
		"disabled:cursor-default disabled:opacity-60",
	],
	variants: {
		intent: {
			unstyled: "text-current",
			primary: "text-primary hover:text-primary/80 forced-colors:disabled:text-[GrayText]",
			danger: "text-danger hover:text-danger/80 forced-colors:disabled:text-[GrayText]",
			"lad/primary":
				"text-fg hover:text-primary dark:hover:text-primary/80 forced-colors:disabled:text-[GrayText]",
			secondary: "text-secondary-fg hover:text-secondary-fg/80",
		},
	},
	defaultVariants: {
		intent: "unstyled",
	},
});

interface LinkProps extends LinkPrimitiveProps {
	intent?: "primary" | "secondary" | "danger" | "lad/primary" | "unstyled";
}

const Link = ({ className, ...props }: LinkProps) => {
	return (
		<LinkPrimitive
			{...props}
			className={composeRenderProps(className, (className, ...renderProps) =>
				linkStyles({ ...renderProps, intent: props.intent, className }),
			)}
		>
			{(values) => <>{typeof props.children === "function" ? props.children(values) : props.children}</>}
		</LinkPrimitive>
	);
};

export { Link, LinkPrimitive, type LinkPrimitiveProps, type LinkProps };
