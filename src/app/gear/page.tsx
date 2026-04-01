import type { Metadata } from "next";

import { gear, Item } from "@/gear";
import { AnimateIn, AnimateInGroup } from "@/ui/animate-in";
import { Section } from "@/ui/section";

export const metadata: Metadata = {
	title: "Gear",
	description: "Tools, apps, and hardware I use daily as a software engineer. Curated recommendations for developers.",
};

export default function Page() {
	return (
		<div className="flex flex-col space-y-12 md:space-y-24">
			<AnimateInGroup className="flex flex-col space-y-4">
				<h1 className="font-bold text-lg text-primary">Gear</h1>
				<p className="font-light leading-relaxed">Tools, apps, and hardware I use daily.</p>
			</AnimateInGroup>
			{gear.map(({ category, items }, index) => (
				<AnimateIn key={category} index={index + 2}>
					<Section heading={category} headingAlignment="left">
						<ul className="animated-list flex flex-col gap-8">
							{items.map((item) => (
								<Item key={item.title} {...item} />
							))}
						</ul>
					</Section>
				</AnimateIn>
			))}
		</div>
	);
}
