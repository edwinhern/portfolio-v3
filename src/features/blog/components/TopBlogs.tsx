import { Link } from "@/components/ui/link";
import { getBlogPosts } from "@/features/blog/blog.utils";

export async function TopBlogs() {
	const posts = await getBlogPosts();

	const topPosts = posts.toSorted((a, b) => b.views - a.views).slice(0, 5);

	return (
		<div className="space-y-4">
			<h2 className="font-semibold text-lg">Popular Posts</h2>
			<ul className="space-y-2">
				{topPosts.map((post) => (
					<li key={post.slug} className="flex items-center justify-between">
						<Link href={`/blog/${post.slug}`} intent="primary">
							{post.title}
						</Link>
						<span className="text-muted-fg text-sm">{post.views} views</span>
					</li>
				))}
			</ul>
		</div>
	);
}
