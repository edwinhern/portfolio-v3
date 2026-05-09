import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	reactStrictMode: true,
	cacheComponents: true,
	images: {
		remotePatterns: [{ hostname: "f.media-amazon.com" }],
	},
};

export default nextConfig;

// added by create cloudflare to enable calling `getCloudflareContext()` in `next dev`
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

initOpenNextCloudflareForDev();
