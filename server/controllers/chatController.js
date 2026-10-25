import { Project } from "../models/Project.js";

export function buildManifest(files) {
  const manifest = [];
  for (const [path, entry] of Object.entries(files)) {
    manifest.push({ path, hash: entry.hash, size: entry.content.length });
  }
  return manifest;
}

// POST /api/projects/:id/chat
// Send a revision prompt and return updated project.

export async function chat(req, res) {
  const { prompt } = req.body;

  if (!prompt || typeof prompt !== "string") {
    res.status(400).json({ error: "prompt is required" });
    return;
  }

  if (!req.user) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }

  const project = await Project.findOne({
    _id: req.params.id,
    owner: req.user.userId,
  });

  if (!project) {
    res.status(404).json({ error: "Project not found" });
    return;
  }

  // Set status to revising and save user prompt immediately
  ((project.status = "revising"),
    project.messages.push({
      role: "user",
      content: prompt,
      timestamp: new Date(),
    }));
  await project.save();

  try {
    // Build compact manifest (path + hash + size) instead of sending all code
  } catch (error) {}
}
