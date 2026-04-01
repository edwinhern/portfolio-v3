import type { ReactNode } from "react";

import { Section } from "./section";

interface SectionListProps {
	heading: string;
	footer?: ReactNode;
	children: ReactNode;
}

export function SectionList({ heading, footer, children }: Readonly<SectionListProps>) {
	return (
		<Section heading={heading} headingAlignment="left">
			<div className="flex w-full flex-col items-end gap-4">
				<ul className="animated-list flex w-full flex-col gap-8">{children}</ul>
				{footer}
			</div>
		</Section>
	);
}
