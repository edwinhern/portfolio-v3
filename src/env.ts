import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
	server: {
		OLLAMA_URL: z.string().url(),
		GITHUB_API_URL: z.string().url(),
		GITHUB_USERNAME: z.string().min(1),
		GITHUB_CACHE_DURATION: z.coerce.number().min(1),
	},
	experimental__runtimeEnv: process.env,
});
