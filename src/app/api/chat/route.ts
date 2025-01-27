import { env } from "@/env";
import { streamText } from "ai";
import { createOllama } from "ollama-ai-provider";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

const instance = createOllama({
	baseURL: env.OLLAMA_URL,
	headers: { "Content-Type": "application/json" },
});

export async function POST(req: Request) {
	const { messages } = await req.json();

	const result = streamText({
		model: instance.languageModel("deepseek-r1:8b"),
		messages,
	});

	return result.toDataStreamResponse();
}
