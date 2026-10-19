import { createOpenAI } from "@ai-sdk/openai";

// OpenRouter Model Client Setup
const MODEL = process.env.OPENROUTER_MODEL || "openrouter/free";
const MAX_CONCURRENCY = parseInt(process.env.AI_MAX_CONCURRENCY || "6", 10);
