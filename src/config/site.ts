export const siteConfig = {
	assets: {
		avatar: "/assets/images/avatar.png",
		discordGif: "/assets/gifs/discord.gif",
		logo: "/assets/images/logo.png",
		resume: "/assets/resume/Edwin-Hernandez-Resume-2024.pdf",
	},
	description: "Dallas TX based software engineer, optimist, community builder.",
	icons: {
		apple: "/favicons/apple-touch-icon.png",
		icon: "/favicons/favicon.ico",
		shortcut: "/favicons/favicon-16x16.png",
	},
	keywords: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
	links: {
		github: "https://github.com/edwinhern",
		linkedin: "https://www.linkedin.com/in/edwinhern/",
	},
	name: "Edwin Hernandez",
	socialLinks: [
		{ id: "github", label: "Github" },
		{ id: "linkedin", label: "LinkedIn" },
		{
			id: "calendar",
			href: "https://calendar.app.google/hUzVu9tgiTJjjdvp8",
			label: "Coffee Chat",
		},
	],
	opImage: "/og-image.png",
	siteTitle: "edwinhern",
	url: new URL("https://edwinhern.com"),
} as const;

export type SiteConfig = typeof siteConfig;
