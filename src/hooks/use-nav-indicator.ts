import { useCallback, useEffect, useRef, useState } from "react";

interface NavItem {
	href: string;
}

interface IndicatorState {
	left: number;
	width: number;
}

function isActiveHref(href: string, pathname: string): boolean {
	return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function useNavIndicator<T extends NavItem>(items: readonly T[], pathname: string) {
	const containerRef = useRef<HTMLDivElement>(null);
	const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);
	const [indicator, setIndicator] = useState<IndicatorState | null>(null);

	const updateIndicator = useCallback(() => {
		const activeIndex = items.findIndex((item) => isActiveHref(item.href, pathname));
		const el = itemRefs.current[activeIndex];
		const container = containerRef.current;

		if (!el || !container) {
			setIndicator(null);
			return;
		}

		const { left: containerLeft } = container.getBoundingClientRect();
		const { left, width } = el.getBoundingClientRect();
		setIndicator({ left: left - containerLeft, width });
	}, [items, pathname]);

	useEffect(() => {
		updateIndicator();

		const observer = new ResizeObserver(updateIndicator);
		if (containerRef.current) {
			observer.observe(containerRef.current);
		}

		return () => observer.disconnect();
	}, [updateIndicator]);

	return { containerRef, itemRefs, indicator, isActiveHref };
}
