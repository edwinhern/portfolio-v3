import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "@/ui/avatar";
import type { WorkPlace } from "./workData";

export function WorkCard({ title, company, imageSrc, date, link }: Readonly<WorkPlace>) {
	const content = (
		<>
			<div className="flex items-center gap-4">
				<Avatar className="size-12 after:border-0">
					<AvatarImage src={imageSrc} alt={company} />
					<AvatarFallback>{company.slice(0, 2).toUpperCase()}</AvatarFallback>
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
		<li className="transition-opacity">
			<Link
				href={link}
				target="_blank"
				className="-my-2 flex w-full justify-between py-3 no-underline"
				rel="noreferrer"
			>
				{content}
			</Link>
		</li>
	);
}
