import { type UUID, randomUUID } from "node:crypto";
import { createClient } from "@/lib/supabase/server";

interface View {
	id: UUID;
	views: number;
}

export async function getViewCount(slug: string): Promise<View> {
	try {
		const supabase = await createClient();
		const { data, error } = await supabase.from("blog").select("id, views").eq("slug", slug).single();

		if (error) {
			if (error.code === "PGRST106") {
				return { id: randomUUID(), views: 0 };
			}
			throw error;
		}

		return { id: data?.id, views: data?.views ?? 0 };
	} catch (error) {
		if (error instanceof Error && "code" in error && error.code !== "PGRST106") {
			console.error("Error fetching view count:", error);
		}
		return { id: randomUUID(), views: 0 };
	}
}

export async function incrementView(slug: string): Promise<void> {
	try {
		const supabase = await createClient();
		const { error } = await supabase.rpc("increment_view_count", {
			slug_text: slug,
		});

		if (error) throw error;
	} catch (error) {
		console.error("Error incrementing view:", error);
	}
}
