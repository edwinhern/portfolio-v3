import type { MDXComponents } from "mdx/types";
import { MDXRemote } from "next-mdx-remote/rsc";
import Alert from "./alert";
import CustomImage from "./image";
import CustomLink from "./link";
import LinkPreview from "./link-preview";

const components = {
	Alert,
	LinkPreview,
	Image: CustomImage,
	a: CustomLink,
};

interface MdxLayoutProps {
	source: string;
	components?: MDXComponents;
}
export function MdxLayout(props: Readonly<MdxLayoutProps>) {
	return <MDXRemote {...props} components={{ ...components, ...(props.components ?? {}) }} />;
}
