import express from "express";
import * as userQueries from "../models/userQueries.ts";

const router = express.Router();

// Define routes inside the controller file
router.get("/", (res: express.Response) => {
  res.json({ message: "Get all users" });
});

router.get("/:id", (req: express.Request, res: express.Response) => {
  res.json({ message: `Get user with ID: ${req.params.id}` });
});

router.post("/create", async (req: express.Request, res: express.Response) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(400).json({ error: "Name, email, and password are required" });
    return;
  }
  try {
    const createdUser = await userQueries.createUser(name, email, password);
    res.json({ user: createdUser });
    return;
  } catch {
    res.status(500).json({ error: "Failed to create user" });
    return;
  }
});

export default router;
