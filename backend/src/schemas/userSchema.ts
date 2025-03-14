import mongoose from "mongoose";
// import Task from "./taskSchema.ts";
import taskSchema from "./taskSchema.ts";
import userMonSchema from "./userMon.ts";

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  Pokemon: [userMonSchema],
  Team: [userMonSchema],
  Exp: Number,
  Tasks: [taskSchema],
});

// export default mongoose.model("User", userSchema);
export default userSchema;
