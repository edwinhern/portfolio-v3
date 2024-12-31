"use client";

import { Card } from "ui";

interface HeaderProps {
	title: string;
	description: string;
}

export function Header({ title, description }: Readonly<HeaderProps>) {
	return (
		<Card.Header className="max-w-xl p-0">
			<Card.Title level={1} className="text-xl sm:text-2xl">
				{title}
			</Card.Title>
			<Card.Description className="text-sm sm:text-base">{description}</Card.Description>
		</Card.Header>
	);
}
