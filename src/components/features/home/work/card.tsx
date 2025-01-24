import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

interface WorkCardProps {
	title: string;
	company: string;
	imageSrc: string | StaticImageData;
	date?: string;
	link?: string;
}

export function WorkCard({ title, company, imageSrc, date, link }: Readonly<WorkCardProps>) {
	const content = (
		<>
			<div className="flex items-center gap-4">
				<Image
					className="rounded-md border border-input bg-background transition-colors hover:bg-accent hover:text-accent-foreground"
					src={imageSrc}
					alt={company}
					width={50}
					height={50}
				/>

				<div className="flex flex-col gap-px">
					<p>{title}</p>
					<p className="text-muted-foreground">{company}</p>
				</div>
			</div>
			{date && <time className="text-muted-foreground">{date}</time>}
		</>
	);

	return (
		<li className="rounded-lg transition-opacity" key={`${company}-${title}`}>
			{link ? (
				<Link href={link} className="-my-2 flex w-full justify-between py-3 no-underline">
					{content}
				</Link>
			) : (
				<div className="flex justify-between ">{content}</div>
			)}
		</li>
	);
}
