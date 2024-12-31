import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import type { PropsWithChildren } from "react";

import { AppNavbar } from "@/app/(routes)/app-navbar";
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
	metadataBase: new URL("https://edwinhern.com"),
	alternates: { canonical: "/" },
	title: {
		default: "Edwin Hernandez",
		template: "%s | Edwin Hernandez",
	},
	description: "Dallas TX based software engineer, optimist, community builder.",
	icons: {
		apple: "/favicons/apple-touch-icon.png",
		icon: "/favicons/favicon.ico",
		shortcut: "/favicons/favicon-16x16.png",
	},
	openGraph: {
		description: "Dallas TX based software engineer, optimist, community builder.",
		images: [
			{
				alt: "Edwin Hernandez",
				url: "/og-image.png",
			},
		],
		locale: "en_US",
		siteName: "edwinhern",
		title: "Edwin Hernandez",
		type: "website",
		url: "https://edwinhern.com",
	},
};

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
	return (
		<html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable}`}>
			<body className="min-h-svh antialiased">
				<Providers>
					<AppNavbar className="mx-auto max-w-[700px]">
						<div className="px-6 pt-16 pb-24 md:px-6 md:pt-20 md:pb-44">{children}</div>
					</AppNavbar>
				</Providers>
			</body>
		</html>
	);
}
