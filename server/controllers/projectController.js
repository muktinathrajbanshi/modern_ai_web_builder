// POST /api/projects
// Create a new project from an AI prompt.
export async function createProject(req, res) {}

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
