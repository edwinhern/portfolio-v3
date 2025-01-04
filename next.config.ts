import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	pageExtensions: ["mdx", "ts", "tsx"],
	transpilePackages: ["next-mdx-remote"],
	reactStrictMode: true,
	images: {
		domains: [
			"tailwindui.com",
			"images.unsplash.com",
			"cdn.dribbble.com",
			"m.media-amazon.com",
			"ik.imagekit.io",
			"miro.medium.com",
			"img.clerk.com",
			"i.ytimg.com",
			"store.storeimages.cdn-apple.com",
			"www.apple.com",
		],
	},
};

const withMDX = createMDX();

export default withMDX(nextConfig);
