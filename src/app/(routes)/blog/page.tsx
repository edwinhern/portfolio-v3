import { BlogPage } from "@/features/blog/BlogPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Blog",
};

export default async function Page() {
	return <BlogPage />;
}
