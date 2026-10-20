import { createOpenAI } from "@ai-sdk/openai";
import { generateObject } from "ai";
import { FilePlanSchema } from "./aiSchemas.js";
import { FILE_PLAN_SYSTEM } from "./prompts.js";

// OpenRouter Model Client Setup
const MODEL = process.env.OPENROUTER_MODEL || "openrouter/free";
const MAX_CONCURRENCY = parseInt(process.env.AI_MAX_CONCURRENCY || "6", 10);

const openrouter = createOpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPENROUTER_API_KEY,
});

const model = openrouter(MODEL);

// Generate a single file's code
async function generateSingleFile(
  file,
  allFiles,
  prompt,
  alreadyGeneratedFiles,
) {}

// Generate project files: plan first, then build files in order with fallback retries

export async function generateProject(prompt, callbacks) {
  // Phase 1: Plan
  console.log(
    `[AI] Phase 1: Planning file structure for: "${prompt.slice(0, 80)}..."`,
  );
  const { object: plan } = await generateObject({
    model,
    schema: FilePlanSchema,
    system: FILE_PLAN_SYSTEM,
    prompt: `Plan a React website for: ${prompt}`,
    maxRetries: 2,
  });

  if (!plan.files.find((f) => f.path === "/App.js")) {
    plan.files.unshift({
      path: "/App.js",
      description: "Main application entry point",
      exports: "default App",
      imports: ["./styles.css"],
    });
  }
}

export async function reviseProject(prompt, manifest, relevantFiles) {}
