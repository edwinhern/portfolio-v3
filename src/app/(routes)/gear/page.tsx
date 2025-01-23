import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Gear",
	description: "My toolbox. This is gear I actually own and recommend.",
};

export default function Page() {
	return (
		<CardHeader className="max-w-xl p-0">
			<CardTitle className="text-xl sm:text-2xl">Gear</CardTitle>
			<CardDescription className="text-sm sm:text-base">
				Here are some of the things I use to build software.
			</CardDescription>
		</CardHeader>
	);
}
