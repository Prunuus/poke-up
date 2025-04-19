import mongoose, { Types } from "mongoose";
import "dotenv/config.js";
import userSchema from "../schemas/userSchema.ts";
import type { IUser } from "../schemas/userSchema.ts";

// UserDB = mongoose.createConnection(process.env.USER_DB_URL || "mongodb://localhost:27017/");
const UserDB = mongoose.createConnection(process.env.USER_DB_URL!);
const User = UserDB.model("user", userSchema);

export async function createUser(
  name: string,
  email: string,
  password: string
): Promise<IUser | null> {
  const user: IUser = new User({
    name: name,
    email: email,
    password: password,
    Pokemon: [],
    Team: [],
    Exp: 0,
    Tasks: [],
  });
  await user.save();
  return user;
}

export async function getUserByID(id: Types.ObjectId): Promise<IUser | null> {
  return await User.findById(id);
}

export async function getUserByName(name: string): Promise<IUser | null> {
  return await User.findOne({ name: name });
}

export async function getUserByEmail(email: string): Promise<IUser | null> {
  return await User.findOne({ email: email });
}
