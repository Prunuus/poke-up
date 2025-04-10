import mongoose, { Schema, Document } from "mongoose";
// import Task from "./taskSchema.ts";
import taskSchema from "./taskSchema.ts";
import type { ITask } from "./taskSchema.ts";
import userMonSchema from "./userMon.ts";
import type { IUserMon } from "./userMon.ts";

const userSchema: Schema<IUser> = new mongoose.Schema({
  name: String,
  email: String,
  password: { type: String, select: false },
  pokemon: [userMonSchema],
  team: [userMonSchema],
  exp: Number,
  tasks: [taskSchema],
});

// export default mongoose.model("User", userSchema);
export default userSchema;

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  pokemon: IUserMon[];
  team: IUserMon[];
  exp: number;
  tasks: ITask[];
}

export interface UserDTO {
  _id: string;
  name: string;
  email: string;
  pokemon: IUserMon[];
  team: IUserMon[];
  exp: number;
  tasks: ITask[];
}
