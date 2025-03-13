import mongoose from "mongoose";
// import Session from "./sessionSchema.ts";
import sessionSchema from "./sessionSchema.ts";

const taskSchema = new mongoose.Schema({
  name: String,
  description: String,
  dueDate: Date,
  priority: Number,
  completed: Boolean,
  Sessions: [sessionSchema],
});

// export default mongoose.model("Task", taskSchema);
export default taskSchema;
