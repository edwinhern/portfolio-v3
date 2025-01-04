import Alert from "@/components/mdx/alert";
import LinkPreview from "@/components/mdx/link-preview";
import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
	return {
		Alert,
		LinkPreview,
		...components,
	};
}
