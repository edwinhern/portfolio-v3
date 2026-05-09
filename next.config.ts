import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	reactStrictMode: true,
	cacheComponents: true,
	images: {
		remotePatterns: [{ hostname: "f.media-amazon.com" }],
	},
};

export default nextConfig;
