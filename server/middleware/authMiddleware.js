import jwt from "jsonwebtoken";

export function authMiddleware(req, res, next) {
  const token = req.cookies.token;

  if (!token) {
    res
      .status(401)
      .json({ error: "Access denied. No session token provided." });
  }

  try {
  } catch (error) {}
}
