export const GITHUB_API_CONFIG = {
	BASE_URL: "https://gh-pinned-repos-tsj7ta5xfhep.deno.dev",
	GRAPHQL_API: "https://api.github.com/graphql",
	USERNAME: "edwinhern",
	TOKEN: process.env.GITHUB_API_TOKEN || "",
	CACHE_DURATION: 3600,
} as const;
