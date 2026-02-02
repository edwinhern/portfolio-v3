import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import type { PropsWithChildren } from "react";
import { siteConfig } from "@/config/site";
import { Navbar } from "@/layout/navbar";
import { Providers } from "@/layout/providers";

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
	metadataBase: siteConfig.url,
	alternates: { canonical: "/" },
	title: {
		default: siteConfig.name,
		template: `%s | ${siteConfig.name}`,
	},
	description: siteConfig.description,
	icons: siteConfig.icons,
	openGraph: {
		description: siteConfig.description,
		images: [{ alt: siteConfig.name, url: siteConfig.opImage }],
		locale: "en_US",
		siteName: siteConfig.siteTitle,
		title: siteConfig.name,
		type: "website",
		url: siteConfig.url.href,
	},
};

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
	return (
		<html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable}`}>
			<body className="min-h-svh w-full overflow-x-hidden scroll-smooth antialiased">
				<Providers>
					<Navbar className="mx-auto px-4 py-4 md:max-w-[700px] md:px-0 md:py-8">
						<div className="pt-8">{children}</div>
					</Navbar>
				</Providers>
			</body>
		</html>
	);
}
