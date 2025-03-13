import mongoose from "mongoose";

const sessionSchema = new mongoose.Schema({
  startTime: Date,
  endTime: Date,
  duration: Number,
  timePaused: Number,
  taskName: String,
});

// export default mongoose.model("Session", sessionSchema);
export default sessionSchema;
