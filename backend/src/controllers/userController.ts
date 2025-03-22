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

router.post(
  "/create",
  async (
    req: express.Request<
      unknown,
      unknown,
      { name: string; email: string; password: string }
    >,
    res: express.Response
  ) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      res.status(400).json({ error: "Name, email, and password are required" });
      return;
    }
    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof password !== "string"
    ) {
      res
        .status(400)
        .json({ error: "Name, email, and password are not the correct types" });
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
  }
);

export default router;
