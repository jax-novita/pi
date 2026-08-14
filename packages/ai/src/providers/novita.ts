import { openAICompletionsApi } from "../api/openai-completions.lazy.ts";
import { envApiKeyAuth } from "../auth/helpers.ts";
import { createProvider, type Provider } from "../models.ts";
import { NOVITA_MODELS } from "./novita.models.ts";

export function novitaProvider(): Provider<"openai-completions"> {
	return createProvider({
		id: "novita",
		name: "Novita AI",
		baseUrl: "https://api.novita.ai/openai",
		auth: { apiKey: envApiKeyAuth("Novita API key", ["NOVITA_API_KEY"]) },
		models: Object.values(NOVITA_MODELS),
		api: openAICompletionsApi(),
	});
}
