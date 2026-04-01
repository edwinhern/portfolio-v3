import { cacheLife } from "next/cache";

import { siteConfig } from "@/config/site";
import { GITHUB_API_CONFIG } from "./githubConstants";
import type { GitHubEdge, GitHubRepository, GitHubRepositoryResponse } from "./githubTypes";

const PINNED_REPOS_QUERY = (username: string) => `
	query {
		user(login: "${username}") {
			pinnedItems(first: 3, types: REPOSITORY) {
				edges {
					node {
						... on Repository {
							id
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

function mapEdgeToRepository(edge: GitHubEdge): GitHubRepository {
	const repo = edge.node;
	return {
		id: repo.id,
		owner: repo.owner.login,
		repo: repo.name,
		description: repo.description,
		stars: repo.stargazerCount,
		forks: repo.forkCount,
		link: repo.url,
		website: repo.homepageUrl,
		language: repo.primaryLanguage?.name ?? "",
		languageColor: repo.primaryLanguage?.color ?? "",
		image: `https://opengraph.githubassets.com/1/${repo.owner.login}/${repo.name}`,
	};
}

export async function getPinnedRepos(): Promise<GitHubRepository[]> {
	"use cache";
	cacheLife("days");

	if (!GITHUB_API_CONFIG.TOKEN) {
		throw new Error("GH_API_TOKEN is not set");
	}

	try {
		const response = await fetch(GITHUB_API_CONFIG.GRAPHQL_API, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${GITHUB_API_CONFIG.TOKEN}`,
			},
			body: JSON.stringify({ query: PINNED_REPOS_QUERY(siteConfig.githubUsername) }),
		});

		if (!response.ok) {
			const error = await response.text();
			throw new Error(`GitHub GraphQL error: ${response.status} - ${error}`);
		}

		const json = (await response.json()) as GitHubRepositoryResponse;

		if (json.errors?.length) {
			throw new Error(`GitHub GraphQL errors: ${json.errors.map((e) => e.message).join(", ")}`);
		}

		const edges = json.data?.user?.pinnedItems?.edges;
		if (!edges) {
			return [];
		}

		return edges.map(mapEdgeToRepository);
	} catch (error) {
		console.error("[getPinnedRepos] Failed to fetch GitHub pinned repos:", error);
		return [];
	}
}
