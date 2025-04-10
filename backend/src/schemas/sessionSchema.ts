import mongoose, { Schema, Document } from "mongoose";

const sessionSchema: Schema<ISession> = new mongoose.Schema({
  startTime: Date,
  endTime: Date,
  duration: Number,
  timePaused: Number,
  taskName: String,
});

// export default mongoose.model("Session", sessionSchema);
export default sessionSchema;

interface ISession extends Document {
  startTime: Date;
  endTime: Date;
  duration: number;
  timePaused: number;
  taskName: string;
}

export type { ISession };
