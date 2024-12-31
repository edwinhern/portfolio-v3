import { Header } from "@/components/header";
import { getViewCount, incrementView } from "@/lib/views";
import type { Metadata } from "next";
import { Suspense } from "react";

type SlugProps = Promise<{
	slug: string;
}>;

export async function generateMetadata({ params }: { params: SlugProps }): Promise<Metadata> {
	const { slug } = await params;
	const viewCount = await getViewCount(slug);

	return {
		title: `${slug}`,
		description: `View count: ${viewCount}`,
	};
}

async function ViewCounter({ slug }: Readonly<{ slug: string }>) {
	const views = await getViewCount(slug);

	return <span>{views} views</span>;
}

export default async function Page({ params }: Readonly<{ params: SlugProps }>) {
	const { slug } = await params;
	await incrementView(slug);

	return (
		<div className="py-6">
			<Header
				title="Blog"
				description="Acme is a leading software house dedicated to delivering innovative and custom software solutions. Our team of experienced developers and designers work closely with clients to bring their ideas to life, ensuring high-quality products that meet their business needs."
			/>
			<Suspense fallback={<div>Loading...</div>}>
				<ViewCounter slug={slug} />
			</Suspense>
		</div>
	);
}
