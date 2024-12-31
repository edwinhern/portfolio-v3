import { Header } from "@/components/header";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Blog",
};

export default async function Page() {
	return (
		<div className="py-6">
			<Header
				title="Blog"
				description="Acme is a leading software house dedicated to delivering innovative and custom software solutions. Our team of experienced developers and designers work closely with clients to bring their ideas to life, ensuring high-quality products that meet their business needs."
			/>
		</div>
	);
}
