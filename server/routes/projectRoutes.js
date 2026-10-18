import { Router } from "express";
import {
  createProject,
  getPublicProject,
  listProjects,
} from "../controllers/projectController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const projectRouter = Router();

// Public Route
projectRouter.get("public/:id", getPublicProject);

// Protect all following routes
projectRouter.use(authMiddleware);

projectRouter.post("/", createProject);
projectRouter.get("/", listProjects);
