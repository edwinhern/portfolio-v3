import type { Metadata } from "next";

import { gear, groupByCategory, Item } from "@/gear";
import { AnimateIn, AnimateInGroup } from "@/ui/animate-in";
import { Section } from "@/ui/section";
import { Separator } from "@/ui/separator";

export const metadata: Metadata = {
	title: "Gear",
	description: "Tools, apps, and hardware I use daily as a software engineer. Curated recommendations for developers.",
};

export default function Page() {
	const sortedCategories = groupByCategory(gear);

	return (
		<div className="flex flex-col space-y-12 md:space-y-24">
			<AnimateInGroup className="flex flex-col space-y-4">
				<h1 className="font-bold text-lg text-primary">Gear</h1>
				<p className="font-light leading-relaxed">
					Tools, apps, and hardware I use daily. Every item is something I personally own and recommend.
				</p>
			</AnimateInGroup>
			{sortedCategories.map(([category, items], index) => (
				<AnimateIn key={category} index={index + 2}>
					{index > 0 && <Separator className="mb-12 bg-border/50 md:mb-24" />}
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
