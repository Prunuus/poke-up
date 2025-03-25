import mongoose, { Schema, Document } from "mongoose";
// import Task from "./taskSchema.ts";
import taskSchema, { ITask } from "./taskSchema.ts";
import userMonSchema, { IUserMon } from "./userMon.ts";

const userSchema: Schema<IUser> = new mongoose.Schema({
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

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  Pokemon: IUserMon[];
  Team: IUserMon[];
  Exp: number;
  Tasks: ITask[];
}
