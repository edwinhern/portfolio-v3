import { MdxLayout } from "@/components/mdx/mdx-layout";
import { getBlogPost } from "@/features/blog/blog.utils";
import { incrementView } from "@/lib/views";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type SlugProps = Promise<{
	slug: string;
}>;

export async function generateMetadata({ params }: { params: SlugProps }): Promise<Metadata> {
	const { slug } = await params;
	const blogPost = await getBlogPost(slug);

	if (!blogPost) {
		return notFound();
	}

	return {
		metadataBase: new URL("https://www.edwinhern.com"),
		title: `${blogPost.title} | Edwin Hernandez`,
		description: blogPost.summary,
		openGraph: {
			title: `${blogPost.title} | Edwin Hernandez`,
			description: blogPost.summary,
			publishedTime: blogPost.date,
			tags: blogPost.tags,
		},
	};
}

export default async function Page({ params }: Readonly<{ params: SlugProps }>) {
	const { slug } = await params;
	const blogPost = await getBlogPost(slug);

	if (!blogPost) {
		return notFound();
	}

	await incrementView(slug);

	return <MdxLayout source={blogPost.content} />;
}
