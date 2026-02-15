export const GITHUB_API_CONFIG = {
	GRAPHQL_API: "https://api.github.com/graphql",
	TOKEN: process.env.GH_API_TOKEN || "",
} as const;
