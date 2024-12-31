import { promises as fs } from "node:fs";
import path from "node:path";

async function getBlogSlugs(dir: string) {
	const entries = await fs.readdir(dir, {
		recursive: true,
		withFileTypes: true,
	});

	return entries
		.filter((entry) => entry.isFile() && entry.name === "page.mdx")
		.map((entry) => {
			const relativePath = path.relative(dir, path.join(entry.parentPath, entry.name));
			return path.dirname(relativePath);
		})
		.map((slug) => slug.replace(/\\/g, "/"));
}

export default async function sitemap() {
	const blogDir = path.join(process.cwd(), "app/(routes)/", "blog");
	const slugs = await getBlogSlugs(blogDir);

	const blogs = slugs.map((slug) => ({
		url: `https://edwinhern.com/blog/${slug}`,
		lastModified: new Date().toISOString(),
	}));

	const routes = ["", "/about", "/gear"].map((route) => ({
		url: `https://edwinhern.com${route}`,
		lastModified: new Date().toISOString(),
	}));

	return [...routes, ...blogs];
}
