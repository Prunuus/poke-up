import express from "express";

const router = express.Router();

// Define routes inside the controller file
router.get("/", (res: express.Response) => {
  res.json({ message: "Get all users" });
});

router.get("/:id", (req: express.Request, res: express.Response) => {
  res.json({ message: `Get user with ID: ${req.params.id}` });
});

export default router;
