import { Router } from "express";
import { getPublicProject } from "../controllers/projectController.js";

const projectRouter = Router();

// Public Route
projectRouter.get("public/:id", getPublicProject);
