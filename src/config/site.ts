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
		{ id: "github", href: "https://github.com/edwinhern", label: "Github", tooltip: "View my open-source projects" },
		{
			id: "linkedin",
			href: "https://www.linkedin.com/in/edwinhern/",
			label: "LinkedIn",
			tooltip: "Connect with me professionally",
		},
		{
			id: "calendar",
			href: "https://calendar.app.google/LygB6ogzdxv7tHr56",
			label: "Coffee Chat",
			tooltip: "Schedule a 30-min coffee chat",
		},
	] as const satisfies readonly SocialLink[],
	opImage: "/og-image.webp",
	siteTitle: "edwinhern",
	url: new URL("https://edwinhern.com"),
} as const;
