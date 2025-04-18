import express from "express";
import * as userServices from "../services/userServices.ts";
import * as auth from "../services/auth.ts";

const router = express.Router();

// Define routes inside the controller file
router.get("/", (res: express.Response) => {
  res.json({ message: "Get all users" });
});

router.get("/id/:id", async (req: express.Request, res: express.Response) => {
  const authHeader = req.headers["authorization"];
  const accessToken = authHeader && authHeader.split(" ")[1];
  const refreshToken = req.headers["refreshToken"] as string;

  if (!accessToken || !refreshToken) {
    res.status(401).json({ error: "Tokens are missing" });
    return;
  }

  const userAuth = auth.authorizeToken(accessToken, refreshToken);
  if (userAuth && userAuth.userID !== req.params.id) {
    res.status(401).json({ error: "Unauthorized - Invalid tokens" });
    return;
  }

  const user = await userServices.getUserByID(req.params.id);
  if (!user) {
    res
      .status(404)
      .json({ error: "User not found", accessToken: userAuth!.accessToken });
    return;
  }
  res.status(200).json({ user: user, accessToken: userAuth!.accessToken });
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
      const accessToken = auth.createAccessToken(
        createdUser._id,
        createdUser.name
      );
      const refreshToken = auth.createRefreshToken(
        createdUser._id,
        createdUser.name
      );
      res.status(200).json({
        user: createdUser,
        accessToken: accessToken,
        refreshToken: refreshToken,
      });
      return;
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Failed to create user" });
      return;
    }
  }
);

router.post("/login", async (req: express.Request, res: express.Response) => {
  const authHeader = req.headers["authorization"];
  const accessToken = authHeader && authHeader.split(" ")[1];
  const refreshToken = req.headers["refreshToken"] as string;

  if (!accessToken || !refreshToken) {
    const user = await auth.authenticateUser(
      req.body.name,
      req.body.email,
      req.body.password
    );
    if (!user) {
      res.status(401).json({ error: "Invalid credentials" });
      return;
    }
    const accessToken = auth.createAccessToken(user._id, user.name);
    const refreshToken = auth.createRefreshToken(user._id, user.name);
    res.status(200).json({
      user: user,
      accessToken: accessToken,
      refreshToken: refreshToken,
    });
    return;
  }

  const userAuth = auth.authorizeToken(accessToken, refreshToken);
  if (userAuth && userAuth.userID !== req.params.id) {
    res.status(401).json({ error: "Unauthorized - Invalid tokens" });
    return;
  }
});
export default router;
