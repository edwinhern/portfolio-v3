import { promises as fs } from "node:fs";
import path from "node:path";
import { getViewCount } from "@/lib/views";

interface BlogPost {
	slug: string;
	title: string;
	views: number;
	lastModified: string;
}

export async function getBlogPosts(): Promise<BlogPost[]> {
	const blogDir = path.join(process.cwd(), "src/app/(routes)/", "blog");

	// Get all blog directories
	const entries = await fs.readdir(blogDir, {
		recursive: true,
		withFileTypes: true,
	});

	// Get blog posts metadata
	const blogPosts = await Promise.all(
		entries
			.filter((entry) => entry.isFile() && entry.name === "page.mdx")
			.map(async (entry) => {
				const relativePath = path.relative(blogDir, path.join(entry.parentPath, entry.name));
				const slug = path.dirname(relativePath).replace(/\\/g, "/");

				// Get file stats for lastModified
				const stats = await fs.stat(path.join(entry.parentPath, entry.name));

				// Get view count from Supabase
				const views = await getViewCount(slug);

				// Import the MDX file to get metadata
				const { metadata } = await import(`@/app/(routes)/blog/${slug}/page.mdx`);

				return {
					slug,
					title: metadata?.title || slug,
					views,
					lastModified: stats.mtime.toISOString(),
				};
			}),
	);

	return blogPosts;
}
