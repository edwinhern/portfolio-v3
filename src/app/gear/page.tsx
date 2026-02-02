import type { Metadata } from "next";

import { gear } from "@/features/gear/constants";
import { Item } from "@/features/gear/item";
import { groupByCategory } from "@/features/gear/utils";
import { AnimateIn, AnimateInGroup } from "@/ui/animate-in";
import { Section } from "@/ui/section";

export const metadata: Metadata = {
	title: "Gear",
	description: "My toolbox. This is gear I actually own and recommend.",
};

export default function Page() {
	const sortedCategories = groupByCategory(gear);

	return (
		<div className="flex flex-col space-y-12 md:space-y-24">
			<AnimateInGroup className="flex flex-col space-y-4">
				<h1 className="font-bold text-lg text-primary">Gear</h1>
				<p className="font-light leading-relaxed">List of tools I actually own and enjoy using.</p>
			</AnimateInGroup>
			{sortedCategories.map(([category, items], index) => (
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
