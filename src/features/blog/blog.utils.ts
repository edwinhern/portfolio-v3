import { promises as fs } from "node:fs";
import path from "node:path";
import { getViewCount } from "@/lib/views";
import matter from "gray-matter";
import type { BlogPost, BlogPostWithContent } from "./blog.types";

async function getBlogFilePath(slug?: string) {
	const blogDir = path.join(process.cwd(), "src/features/blog/content");

	if (slug) {
		return {
			dir: blogDir,
			path: path.join(blogDir, `${slug}.mdx`),
		};
	}

	const entries = await fs.readdir(blogDir);
	const mdxFiles = entries.filter((filename) => filename.endsWith(".mdx"));

	return {
		dir: blogDir,
		files: mdxFiles,
	};
}

async function parseBlogFile(filePath: string, slug: string): Promise<BlogPostWithContent | null> {
	try {
		// Read and parse the MDX file
		const fileContent = await fs.readFile(filePath, "utf-8");
		const { data: metadata, content } = matter(fileContent);

		// Get file stats
		const stats = await fs.stat(filePath);

		// Get view count
		const { id, views } = await getViewCount(slug);

		return {
			id,
			slug,
			title: metadata?.title || slug,
			date: new Date(metadata?.date || "").toISOString(),
			summary: metadata?.summary || "",
			tags: metadata?.tags || [],
			views,
			lastModified: stats.mtime.toISOString(),
			content,
		};
	} catch (error) {
		console.error(`Failed to parse blog file for slug: ${slug}`, error);
		return null;
	}
}

export async function getBlogPosts(): Promise<BlogPost[]> {
	const { dir, files } = await getBlogFilePath();

	if (!files) {
		return [];
	}

	const blogPosts = await Promise.all(
		files.map(async (filename) => {
			const slug = filename.replace(".mdx", "");
			const post = await parseBlogFile(path.join(dir, filename), slug);

			if (!post) return null;

			// Omit content when returning list of posts
			const { content, ...postWithoutContent } = post;
			return postWithoutContent;
		}),
	);

	return blogPosts
		.filter((post): post is BlogPost => post !== null)
		.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getBlogPost(slug: string): Promise<BlogPostWithContent | null> {
	try {
		const { path: filePath } = await getBlogFilePath(slug);

		if (!filePath) {
			return null;
		}

		return await parseBlogFile(filePath, slug);
	} catch (error) {
		console.error(`Failed to get blog post for slug: ${slug}`, error);
		return null;
	}
}
