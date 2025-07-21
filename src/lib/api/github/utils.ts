import { GITHUB_API_CONFIG } from "./constants";
import type { GitHubRepository } from "./types";

export async function getPinnedRepos(): Promise<GitHubRepository[]> {
	const query = `
		query {
			user(login: "edwinhern") {
				pinnedItems(first: 6, types: REPOSITORY) {
					edges {
						node {
							... on Repository {
								name
								description
								stargazerCount
								forkCount
								url
								homepageUrl
								primaryLanguage {
									name
									color
								}
								owner {
									login
								}
							}
						}
					}
				}
			}
		}
	`;

	try {
		const response = await fetch(GITHUB_API_CONFIG.GRAPHQL_API, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${GITHUB_API_CONFIG.TOKEN}`,
			},
			body: JSON.stringify({ query }),
			next: { revalidate: GITHUB_API_CONFIG.CACHE_DURATION },
		});

		if (!response.ok) {
			const error = await response.text();
			throw new Error(`GitHub GraphQL error: ${response.status} - ${error}`);
		}

		const json = await response.json();

		return json.data.user.pinnedItems.edges.map((edge: any): GitHubRepository => {
			const repo = edge.node;
			return {
				owner: repo.owner.login,
				repo: repo.name,
				description: repo.description,
				stars: repo.stargazerCount,
				forks: repo.forkCount,
				link: repo.url,
				website: repo.homepageUrl,
				language: repo.primaryLanguage?.name,
				languageColor: repo.primaryLanguage?.color,
				image: `https://opengraph.githubassets.com/1/${repo.owner.login}/${repo.name}`,
			};
		});
	} catch (error) {
		console.error("[GitHub GraphQL API]:", error instanceof Error ? error.message : "Unknown error");
		return [];
	}
}
