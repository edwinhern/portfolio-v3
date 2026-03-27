interface SocialLink {
	id: string;
	href: string;
	label: string;
}

export const siteConfig = {
	description: "Software engineer in Dallas, TX specializing in React, TypeScript, and full-stack web development.",
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
		{ id: "github", href: "https://github.com/edwinhern", label: "Github" },
		{ id: "linkedin", href: "https://www.linkedin.com/in/edwinhern/", label: "LinkedIn" },
		{ id: "calendar", href: "https://calendar.app.google/LygB6ogzdxv7tHr56", label: "Coffee Chat" },
	] as const satisfies readonly SocialLink[],
	opImage: "/og-image.webp",
	siteTitle: "edwinhern",
	url: new URL("https://edwinhern.com"),
} as const;
