import { Button } from "@/components/ui";
import { getBlogPosts } from "@/features/blog/blog.utils";
import { BlogTable } from "./components/BlogTable";

export const BlogPage: React.FC = async () => {
	const posts = await getBlogPosts();

	return (
		<div className="max-w-2xl space-y-16">
			<div className="space-y-2">
				<h1 className="font-semibold text-3xl tracking-tight">Blog</h1>
				<p className="text-lg text-muted-fg">{posts.length} posts so far. Stay tuned for more!</p>
			</div>

			<BlogTable posts={posts} />

			<div className="space-y-6 rounded-lg bg-secondary/5">
				<div className="space-y-2">
					<h2 className="font-semibold text-xl tracking-tight">Newsletter</h2>
					<p className="text-muted-fg">
						Get personal updates and readings on topics like tech, design, productivity, programming, and
						more!
					</p>
				</div>

				<form className="flex gap-3">
					<input
						type="email"
						placeholder="you@example.com"
						className="flex-1 rounded-md border bg-background px-3 py-2 text-sm"
					/>
					<Button type="submit" intent="primary">
						Sign up
					</Button>
				</form>

				<p className="text-muted-fg text-sm">Join the 155 other readers.</p>
			</div>
		</div>
	);
};
