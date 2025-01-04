import type { MDXComponents } from "mdx/types";
import { MDXRemote } from "next-mdx-remote/rsc";

import Alert from "@/components/mdx/alert";
import CustomImage from "@/components/mdx/image";
import CustomLink from "@/components/mdx/link";
import LinkPreview from "@/components/mdx/link-preview";

function useMDXComponents(components?: MDXComponents): MDXComponents {
	return {
		Alert,
		LinkPreview,
		Image: CustomImage,
		a: CustomLink,
		...components,
	};
}

interface MdxLayoutProps {
	source: string;
	components?: MDXComponents;
}
export function MdxLayout(props: Readonly<MdxLayoutProps>) {
	return <MDXRemote {...props} components={useMDXComponents(props.components)} />;
}
