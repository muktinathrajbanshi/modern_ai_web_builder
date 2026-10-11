import express from "express";
import "dotenv/config";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({ origin: process.env.ORIGINS.split(","), credentials: true }));
app.use(cookieParser());
app.use(express.json());

app.get("/", (req, res) => res.send("Server is Live!"));

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
