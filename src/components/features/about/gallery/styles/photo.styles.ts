import { clsx } from "clsx";

export const photoStyles = {
	wrapper:
		"absolute mx-auto cursor-grab hover:before:block hover:before:w-[calc(100%+55px)] hover:before:h-[300px] hover:before:absolute hover:before:-top-8 hover:before:-left-7",
	shared: "absolute h-full w-full rounded-xl overflow-hidden",
	backface: clsx(
		"absolute h-full w-full overflow-hidden rounded-xl",
		"flex items-center overflow-hidden rounded-xl bg-[#FFFAF2]",
	),
	image: clsx("pointer-events-none absolute inset-0 rounded-xl", "h-full w-full object-contain"),
};
