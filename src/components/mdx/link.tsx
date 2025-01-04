import { cn } from "@/utils/classes";
import { Link, type LinkProps } from "../ui";

interface CustomLinkProps extends Omit<LinkProps & React.AnchorHTMLAttributes<HTMLAnchorElement>, "className"> {
	children: React.ReactNode;
	className?: string;
}

const CustomLink: React.FC<CustomLinkProps> = (props) => {
	const href = props?.href;
	const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

	if (isInternalLink) {
		return (
			<Link {...props} href={href} intent="primary">
				{props.children}
			</Link>
		);
	}
	return (
		<a
			target="_blank"
			rel="noopener noreferrer"
			className={cn("font-normal text-link underline underline-offset-4", props.className)}
			{...props}
		/>
	);
};

export default CustomLink;
