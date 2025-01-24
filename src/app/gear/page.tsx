import type { Metadata } from "next";

import { gear } from "@/features/gear/constants";
import { Item } from "@/features/gear/item";
import type { GearCategory, GearItem } from "@/features/gear/types";
import Section from "@/ui/section";

export const metadata: Metadata = {
	title: "Gear",
	description: "My toolbox. This is gear I actually own and recommend.",
};

export default function Page() {
	const categories = gear.reduce((acc, item) => {
		if (!acc.has(item.category)) {
			acc.set(item.category, []);
		}
		acc.get(item.category)?.push(item);
		return acc;
	}, new Map<GearCategory, GearItem[]>());

	const sortedCategories = Array.from(categories.entries()).sort((a, b) => a[0].localeCompare(b[0]));

	return (
		<div className="flex flex-col space-y-12 md:space-y-24">
			<div className="flex animate-in flex-col space-y-4">
				<h1 className="animate-in font-bold text-lg text-primary">Gear</h1>

				<p className="animate-in font-light leading-relaxed" style={{ "--index": 1 } as React.CSSProperties}>
					List of tools I actually own and enjoy using.
				</p>
			</div>
			{sortedCategories.map(([category, items], index) => (
				<Section
					className="animate-in"
					style={{ "--index": index + 2 } as React.CSSProperties}
					key={category}
					heading={category}
					headingAlignment="left"
				>
					<ul className="animated-list flex flex-col gap-8">
						{items.map((item) => (
							<Item key={item.title} {...item} />
						))}
					</ul>
				</Section>
			))}
		</div>
	);
}
