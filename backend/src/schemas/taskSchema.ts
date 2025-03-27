import mongoose, { Schema, Document } from "mongoose";
// import Session from "./sessionSchema.ts";
import sessionSchema, { ISession } from "./sessionSchema.ts";

const taskSchema: Schema<ITask> = new mongoose.Schema({
  name: String,
  description: String,
  dueDate: Date,
  priority: Number,
  completed: Boolean,
  sessions: [sessionSchema],
});

// export default mongoose.model("Task", taskSchema);
export default taskSchema;

export interface ITask extends Document {
  name: string;
  description: string;
  dueDate: Date;
  priority: number;
  completed: boolean;
  sessions: ISession[];
}
