import { expect, it } from "vitest";
import { getBuiltinModel } from "../src/providers/all.ts";
import { novitaProvider } from "../src/providers/novita.ts";

it("registers Novita AI with the OpenAI-compatible endpoint", () => {
	const provider = novitaProvider();
	expect(provider.id).toBe("novita");
	expect(provider.name).toBe("Novita AI");
	expect(provider.baseUrl).toBe("https://api.novita.ai/openai");
	expect(provider.getModels()[0]?.api).toBe("openai-completions");
});

it("includes a generated Novita model", () => {
	const model = getBuiltinModel("novita", "deepseek/deepseek-v4-flash");
	expect(model.provider).toBe("novita");
	expect(model.api).toBe("openai-completions");
	expect(model.compat?.maxTokensField).toBe("max_tokens");
});
