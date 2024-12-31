import { createClient } from "@/lib/supabase/server";

export async function getViewCount(slug: string): Promise<number> {
	try {
		const supabase = await createClient();
		const { data, error } = await supabase.from("blog").select("views").eq("slug", slug).single();

		if (error) throw error;
		return data?.views || 0;
	} catch (error) {
		console.error("Error fetching view count:", error);
		return 0;
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
