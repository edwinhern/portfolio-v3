import { getBlogPosts } from "@/features/blog/blog.utils";

export default async function sitemap() {
	const posts = await getBlogPosts();

	const blogs = posts.map((post) => ({
		url: `https://edwinhern.com/blog/${post.slug}`,
		lastModified: new Date(post.lastModified).toISOString(),
	}));

	const routes = ["", "/about", "/gear"].map((route) => ({
		url: `https://edwinhern.com${route}`,
		lastModified: new Date().toISOString(),
	}));

	return [...routes, ...blogs];
}
