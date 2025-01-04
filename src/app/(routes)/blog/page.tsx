import { BlogPage } from "@/features/blog/BlogPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Blog",
	description: "My blog posts about tech, design, productivity, programming, and more!",
};

export default async function Page() {
	return <BlogPage />;
}
