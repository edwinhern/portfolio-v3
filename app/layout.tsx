import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import type { PropsWithChildren } from "react";

import { Providers } from "@/components/providers";

import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Edwin Hernandez",
	description:
		"Dallas TX based software engineer, sharing insights on well-designed products and technology advancements.",
	metadataBase: new URL("https://edwinhern.com"),
	openGraph: {
		title: "Edwin Hernandez",
		url: "https://edwinhern.com",
		images: [
			{
				url: "https://edwinhern.com/api/og?title=Edwinhern",
				alt: "Edwinhern",
			},
		],
	},
};

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
	return (
		<html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable}`}>
			<body className="min-h-svh antialiased">
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
