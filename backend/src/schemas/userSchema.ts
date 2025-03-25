import mongoose, { Schema, Document } from "mongoose";
// import Task from "./taskSchema.ts";
import taskSchema, { ITask } from "./taskSchema.ts";
import userMonSchema, { IUserMon } from "./userMon.ts";

const userSchema: Schema<IUser> = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
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
  name: string;
  email: string;
  pokemon: IUserMon[];
  team: IUserMon[];
  exp: number;
  tasks: ITask[];
}
