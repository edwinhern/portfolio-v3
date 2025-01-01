import { Header } from "@/components/header";
import { TopBlogs } from "./components/TopBlogs";

export const BlogPage: React.FC = () => {
	return (
		<div className="space-y-8">
			<Header title="Blog" description="Thoughts on software development, design, and building products." />
			<TopBlogs />
		</div>
	);
};
