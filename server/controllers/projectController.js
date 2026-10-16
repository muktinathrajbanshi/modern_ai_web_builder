import { Project } from "../models/Project.js";

// POST /api/projects
// Create a new project from an AI prompt.
export async function createProject(req, res) {
  const { prompt } = req.body;
  if (!prompt || typeof prompt !== "string") {
    res.status(400).json({ error: "prompt is required" });
    return;
  }

  if (!req.user) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }

  // Create project in DB immediately with "pending" status
  const project = await Project.create({
    name: "Planning project...",
    description: prompt,
    files: {},
    messages: [
      { role: "user", content: prompt },
      { role: "assistant", content: "Planning project structure..." },
    ],
    version: 0,
    owner: req.user.userId,
    status: "pending",
    filesPlanned: [],
  });
}

// Background worker to progressive generate files and update database in real-time.
export async function runBackgroundGeneration(projectId, prompt) {}

// GET /api/projects
// List all projects owned by the user (summary only, no file contents).
export async function runBackgroundGeneration(req, res) {}

// GET /api/projects/:id
// Get full project details
export async function getProject(req, res) {}

// DELETE /api/projects/:id
// Delete a project.
export async function deleteProject(req, res) {}

// PUT /api/projects/:id/files
// Update project files (manual edits).
export async function deleteProjectFiles(req, res) {}

// POST /api/projects/:id/publish
// Mark a project as publicly published.
export async function publishProject(req, res) {}

// GET /api/projects/public/:id
// Get a publicly published project details (without auth).
export async function getPublicProject(req, res) {}
