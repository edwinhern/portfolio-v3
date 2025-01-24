import { Gallery } from "@/components/features/about/gallery";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "About",
	description: "A glimpse into my life, work, and interests.",
};

export default function Page() {
	return (
		<div className="flex flex-col space-y-12 md:space-y-24">
			<div className="flex animate-in flex-col space-y-4">
				<h1 className="animate-in font-bold text-lg text-primary">About</h1>

				<p className="animate-in font-light leading-relaxed" style={{ "--index": 1 } as React.CSSProperties}>
					A glimpse into my life, work, and interests.
				</p>
			</div>

			<div className="hidden md:block">
				<Gallery />
			</div>
		</div>
	);
}
