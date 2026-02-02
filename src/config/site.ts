export const siteConfig = {
	description: "Dallas TX based software engineer, optimist, community builder.",
	icons: {
		apple: "/favicons/apple-touch-icon.png",
		icon: "/favicons/favicon.ico",
		shortcut: "/favicons/favicon-16x16.png",
	},
	githubUsername: "edwinhern",
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
			href: "https://calendar.app.google/LygB6ogzdxv7tHr56",
			label: "Coffee Chat",
		},
	],
	opImage: "/og-image.png",
	siteTitle: "edwinhern",
	url: new URL("https://edwinhern.com"),
} as const;
