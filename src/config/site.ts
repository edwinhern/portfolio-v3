export type SocialIconId = "github" | "linkedin" | "calendar";

interface SocialLink {
	id: SocialIconId;
	href: string;
	label: string;
	tooltip: string;
}

export const siteConfig = {
	description:
		"Software engineer focused on front-end, infrastructure, and AI — building fast, thoughtful web experiences.",
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
		{ id: "github", href: "https://github.com/edwinhern", label: "Github", tooltip: "My Github" },
		{
			id: "linkedin",
			href: "https://www.linkedin.com/in/edwinhern/",
			label: "LinkedIn",
			tooltip: "My LinkedIn",
		},
		{
			id: "calendar",
			href: "https://calendar.app.google/LygB6ogzdxv7tHr56",
			label: "Coffee Chat",
			tooltip: "Book a 30-min chat",
		},
	] as const satisfies readonly SocialLink[],
	opImage: "/og-image.webp",
	siteTitle: "edwinhern",
	url: new URL("https://edwinhern.com"),
} as const;
