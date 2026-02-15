export const GITHUB_API_CONFIG = {
	GRAPHQL_API: "https://api.github.com/graphql",
	TOKEN: process.env.GITHUB_API_TOKEN || "",
} as const;
