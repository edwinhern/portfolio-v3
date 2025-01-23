import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Gear",
	description: "My toolbox. This is gear I actually own and recommend.",
};

export default function Page() {
	return (
		<div className="flex flex-col gap-16 md:gap-24">
			<div className="flex animate-in flex-col space-y-4">
				<h1 className="animate-in font-bold text-lg text-primary">Gear</h1>

				<p className="animate-in font-light leading-relaxed" style={{ "--index": 1 } as React.CSSProperties}>
					List of tools I actually own and enjoy using.
				</p>
			</div>
		</div>
	);
}
