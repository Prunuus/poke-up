import express from "express";

const router = express.Router();

// Define routes inside the controller file
router.get("/", (req, res) => {
  res.json({ message: "Get all users" });
});

router.get("/:id", (req, res) => {
  res.json({ message: `Get user with ID: ${req.params.id}` });
});

export default router;
