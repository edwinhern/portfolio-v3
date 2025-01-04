import Image from "next/image";
import Link from "next/link";

interface LinkPreviewProps {
	title: string;
	description: string;
	imageUrl: string;
	link: string;
}

const LinkPreview: React.FC<LinkPreviewProps> = ({ title, description, imageUrl, link }) => {
	const url = new URL(link);
	const baseUrl = `${url.hostname}/${url.pathname.split("/")[1]}`;

	return (
		<Link
			className="my-8 flex items-center gap-4 overflow-clip rounded-md border border-secondary bg-secondary p-4 no-underline md:gap-6 md:p-6"
			href={link}
			target="_blank"
			rel="noopener noreferrer"
		>
			{imageUrl && (
				<div className="prose w-full max-w-[12rem]">
					<Image
						width={600}
						height={400}
						src={imageUrl}
						alt="OG Image"
						className="aspect-video w-full rounded object-cover"
					/>
				</div>
			)}

			<div className="flex w-full flex-col gap-1 leading-tight">
				<p className="m-0 flex items-center gap-0.5 text-muted-fg text-sm">{baseUrl}</p>
				<p className="m-0 line-clamp-3 font-medium text-base text-primary leading-tight">{title}</p>
				<div className="">
					<p className="m-0 line-clamp-2 text-muted-fg text-sm">{description}</p>
				</div>
			</div>
		</Link>
	);
};

export default LinkPreview;
