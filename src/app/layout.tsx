import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import type { PropsWithChildren } from "react";

import { AppNavbar } from "@/common/layout/navbar";
import { Providers } from "@/common/layout/providers";

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
	metadataBase: new URL("https://v3.edwinhern.com"),
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
		url: "https://v3.edwinhern.com",
	},
};

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
	return (
		<html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable}`}>
			<body className="min-h-svh w-full overflow-x-hidden scroll-smooth antialiased">
				<Providers>
					<AppNavbar className="mx-auto px-4 py-4 md:max-w-[700px] md:px-0 md:py-8">
						<div className="pt-8">{children}</div>
					</AppNavbar>
				</Providers>
			</body>
		</html>
	);
}
