export interface GitHubRepository {
	id: string;
	description: string;
	forks: number;
	image: string;
	language: string;
	languageColor: string;
	link: string;
	owner: string;
	repo: string;
	stars: number;
	website: string;
}

export interface GitHubLanguage {
	name: string;
	color: string;
}

export interface GitHubOwner {
	login: string;
}

export interface GitHubRepositoryNode {
	id: string;
	name: string;
	description: string;
	stargazerCount: number;
	forkCount: number;
	url: string;
	homepageUrl: string;
	primaryLanguage: GitHubLanguage | null;
	owner: GitHubOwner;
}

export interface GitHubEdge {
	node: GitHubRepositoryNode;
}

export interface GitHubPinnedItems {
	edges: GitHubEdge[];
}

export interface GitHubUser {
	pinnedItems: GitHubPinnedItems;
}

export interface GitHubData {
	user: GitHubUser;
}

export interface GitHubGraphQLError {
	message: string;
	type?: string;
	path?: string[];
}

export interface GitHubRepositoryResponse {
	data?: GitHubData;
	errors?: GitHubGraphQLError[];
}
