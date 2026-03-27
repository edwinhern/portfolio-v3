import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{ url: siteConfig.url.href, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
		{ url: `${siteConfig.url.href}gear`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
	];
}
