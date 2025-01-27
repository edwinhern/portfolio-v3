import { env } from "@/env";
import type { GitHubRepository } from "./types";

export async function getGithubRepos(): Promise<GitHubRepository[]> {
	try {
		const url = new URL(env.GITHUB_API_URL);
		url.searchParams.append("username", env.GITHUB_USERNAME);

		const response = await fetch(url.toString(), {
			next: { revalidate: env.GITHUB_CACHE_DURATION },
		});

		if (!response.ok) {
			const errorData = await response.json();
			throw new Error(`GitHub API Error: ${errorData.message || response.statusText}`);
		}

		const data = (await response.json()) as GitHubRepository[];

		if (!Array.isArray(data)) {
			throw new Error("Invalid response format: expected an array");
		}

		return data;
	} catch (error) {
		console.error("[GitHub API]:", error instanceof Error ? error.message : "Unknown error occurred");
		return [];
	}
}
