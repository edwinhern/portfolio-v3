import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import type { PropsWithChildren } from "react";

import { JsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/config/site";
import { Navbar } from "@/layout/navbar";
import { Providers } from "@/layout/providers";

import "./globals.css";

const publicSans = Public_Sans({ subsets: ["latin"], variable: "--font-public-sans" });

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
	twitter: {
		card: "summary_large_image",
		title: siteConfig.name,
		description: siteConfig.description,
		images: [siteConfig.opImage],
		creator: "@edwinhern",
	},
};

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
	return (
		<html lang="en" suppressHydrationWarning className={`${publicSans.variable}`}>
			<head>
				<link rel="dns-prefetch" href="https://f.media-amazon.com" />
				<link rel="dns-prefetch" href="https://cdn.brandfetch.io" />
			</head>
			<body className="mx-auto px-4 py-4 md:max-w-[750px] md:px-0 md:py-8">
				<JsonLd />
				<Providers>
					<Navbar>
						<div className="pt-8">{children}</div>
					</Navbar>
				</Providers>
			</body>
		</html>
	);
}
