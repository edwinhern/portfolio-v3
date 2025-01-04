import { type PropsWithChildren, Suspense } from "react";

export default function Layout({ children }: Readonly<PropsWithChildren>) {
	return (
		<div className="prose prose-headings:mt-8 prose-headings:font-semibold prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg prose-headings:text-black dark:prose-headings:text-white dark:text-muted-fg">
			<Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
		</div>
	);
}
