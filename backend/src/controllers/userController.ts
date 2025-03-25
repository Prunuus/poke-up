import express from "express";
import * as userServices from "../services/userServices.ts";

const router = express.Router();

// Define routes inside the controller file
router.get("/", (res: express.Response) => {
  res.json({ message: "Get all users" });
});

router.get("/id/:id", async (req: express.Request, res: express.Response) => {
  // if we add authentication inside the getuserbyid then we need might neet to pass in other things from req
  const user = await userServices.getUserByID(req.params.id);
  if (!user) {
    res.status(500).json({ error: "Failed to create user" });
    return;
  }
  res.json({ user: user });
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
      const createdUser = await userServices.createUser(name, email, password);
      if (!createdUser) {
        res.status(409).json({ error: "Username or Email already in use" });
        return;
      }
      res.json({ user: createdUser });
      return;
    } catch {
      res.status(500).json({ error: "Failed to create user" });
      return;
    }
  }
);

export default router;
