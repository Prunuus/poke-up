import express, { Request, Response } from "express";
import Session from "../models/sessionModel.ts";

const router = express.Router();
export default router;

router.post("/start", startSession);
router.post("/end/:sessionId", endSession);

export async function startSession(req: Request, res: Response): Promise<void> {
  try {
    const { taskName } = req.body;

    const newSession = await Session.create({
      startTime: new Date(),
      endTime: null,
      duration: 0,
      timePaused: 0,
      taskName,
    });

    res.status(201).json({
      success: true,
      data: newSession,
    });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
}

export async function endSession(req: Request, res: Response): Promise<void> {
  try {
    const sessionId = req.params.sessionId;

    const session = await Session.findById(sessionId);

    if (!session) {
      res.status(404).json({ success: false, message: "Session not found" });
      return;
    }

    session.endTime = new Date();
    session.duration = Math.floor(
      (session.endTime.getTime() - session.startTime.getTime()) / 1000
    );

    await session.save();

    res.status(200).json({
      success: true,
      data: session,
    });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
}
