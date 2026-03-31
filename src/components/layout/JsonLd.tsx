import { siteConfig } from "@/config/site";

export function JsonLd() {
	const structuredData = {
		"@context": "https://schema.org",
		"@type": "Person",
		name: "Edwin Hernandez",
		jobTitle: "Software Engineer",
		url: siteConfig.url.href,
		sameAs: [siteConfig.links.github, siteConfig.links.linkedin],
		worksFor: {
			"@type": "Organization",
			name: "Liberty Mutual Insurance",
		},
		address: {
			"@type": "PostalAddress",
			addressLocality: "Dallas",
			addressRegion: "TX",
			addressCountry: "US",
		},
	};

	// biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD requires dangerouslySetInnerHTML — data is static, not user-supplied
	return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />;
}
