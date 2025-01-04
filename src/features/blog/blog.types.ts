import type { UUID } from "node:crypto";

interface BlogMetadata {
	title: string;
	date: string;
	summary: string;
	tags: string[];
}

interface BlogStats {
	id: UUID;
	views: number;
	lastModified: string;
}

export interface BlogPost extends BlogMetadata, BlogStats {
	slug: string;
}

export interface BlogPostWithContent extends BlogPost {
	content: string;
}
