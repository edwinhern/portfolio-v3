import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

interface Workplace {
	title: string;
	company: string;
	imageSrc: string | StaticImageData;
	date?: string;
	link?: string;
}

function Workplace({ title, company, imageSrc, date, link }: Readonly<Workplace>) {
	const content = (
		<>
			<div className="flex items-center gap-4">
				<Image src={imageSrc} alt={company} width={48} height={48} />

				<div className="flex flex-col gap-px">
					<p className={link ? "external-arrow" : ""}>{title}</p>
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

export default function Workplaces({ items }: Readonly<{ items: Workplace[] }>) {
	return <ul className="animated-list flex flex-col gap-8">{items.map(Workplace)}</ul>;
}
