import type { GitHubRepository } from "./types";

export async function getGithubRepos(): Promise<GitHubRepository[]> {
	try {
		const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/github`, {
			method: "GET",
			headers: { "Content-Type": "application/json" },
		});

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		const { data } = await response.json();

		return data;
	} catch (error) {
		console.error("Error fetching GitHub repos:", error);
		return [];
	}
}
