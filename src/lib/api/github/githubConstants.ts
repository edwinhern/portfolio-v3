export const GITHUB_API_CONFIG = {
	GRAPHQL_API: "https://api.github.com/graphql",
} as const;

export function getGitHubToken(): string {
	return process.env.GH_API_TOKEN ?? "";
}
