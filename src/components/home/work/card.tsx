import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "@/ui/avatar";

interface WorkCardProps {
	title: string;
	company: string;
	imageSrc: string;
	date?: string;
	link?: string;
}

export function WorkCard({ title, company, imageSrc, date, link }: Readonly<WorkCardProps>) {
	const content = (
		<>
			<div className="flex items-center gap-4">
				<Avatar className="size-12 rounded-md border border-input">
					<AvatarImage src={imageSrc} alt={company} />
					<AvatarFallback className="rounded-md text-xs">{company.slice(0, 2).toUpperCase()}</AvatarFallback>
				</Avatar>

				<div className="flex flex-col gap-px">
					<p>{title}</p>
					<p className="text-muted-foreground">{company}</p>
				</div>
			</div>
			{date && <time className="text-muted-foreground">{date}</time>}
		</>
	);

	return (
		<li className="rounded-lg transition-all duration-200 hover:translate-x-1">
			{link ? (
				<Link
					href={link}
					target="_blank"
					className="-my-2 flex w-full justify-between py-3 no-underline"
					rel="noreferrer"
				>
					{content}
				</Link>
			) : (
				<div className="flex justify-between">{content}</div>
			)}
		</li>
	);
}
