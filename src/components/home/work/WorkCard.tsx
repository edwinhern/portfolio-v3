import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "@/ui/avatar";
import type { WorkPlace, WorkPlaceImage } from "./workTypes";

function CompanyAvatar({ image, company }: { image: WorkPlaceImage; company: string }) {
	if (image.type === "simpleicon") {
		const bg = image.color ?? image.icon.hex;
		return (
			<span className="flex size-full items-center justify-center rounded-md" style={{ backgroundColor: `#${bg}` }}>
				<svg role="img" viewBox="0 0 24 24" aria-label={image.icon.title} className="size-6" fill="white">
					<path d={image.icon.path} />
				</svg>
			</span>
		);
	}

	return company.slice(0, 2).toUpperCase();
}

export function WorkCard({ title, company, image, date, link }: Readonly<WorkPlace>) {
	return (
		<li className="transition-opacity">
			<Link
				href={link}
				target="_blank"
				className="-my-2 flex w-full justify-between py-3 no-underline"
				rel="noreferrer"
			>
				<div className="flex items-center gap-4">
					<Avatar className="size-12 after:border-0">
						{image.type === "url" && <AvatarImage src={image.src} alt={title} />}
						<AvatarFallback>
							<CompanyAvatar image={image} company={company} />
						</AvatarFallback>
					</Avatar>

					<div className="flex flex-col gap-px">
						<p>{title}</p>
						<p className="text-muted-foreground">{company}</p>
					</div>
				</div>

				{date && <time className="text-muted-foreground">{date}</time>}
			</Link>
		</li>
	);
}
