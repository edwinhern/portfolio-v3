export const siteConfig = {
	assets: {
		avatar: "/assets/images/avatar.png",
		discordGif: "/assets/gifs/discord.gif",
		logo: "/assets/images/logo.png",
		resume: "/assets/resume/Edwin-Hernandez-Resume-2024.pdf",
	},
	description: "Software Engineer, gamer, soccer player, and minimalist, based in Dallas, TX.",
	keywords: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
	links: {
		github: "https://github.com/edwinhern",
		linkedin: "https://www.linkedin.com/in/edwinhern/",
	},
	name: "Edwin Hernandez",
	opImage: "/og-image.png",
	siteTitle: "edwinhern",
	url: new URL("https://edwinhern.com"),
};

export type SiteConfig = typeof siteConfig;
