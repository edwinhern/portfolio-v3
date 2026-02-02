import type { GearCategory, GearItem } from "./types";

export function groupByCategory(items: GearItem[]): [GearCategory, GearItem[]][] {
	const categories = items.reduce((acc, item) => {
		if (!acc.has(item.category)) {
			acc.set(item.category, []);
		}
		acc.get(item.category)?.push(item);
		return acc;
	}, new Map<GearCategory, GearItem[]>());
	return Array.from(categories.entries()).sort((a, b) => a[0].localeCompare(b[0]));
}
