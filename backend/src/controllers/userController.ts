import express, { Request, Response } from "express";

const router = express.Router();

// Define routes inside the controller file
router.get("/", (req: Request, res: Response) => {
  res.json({ message: "Get all users" });
});

router.get("/:id", (req: Request, res: Response) => {
  res.json({ message: `Get user with ID: ${req.params.id}` });
});

export default router;
