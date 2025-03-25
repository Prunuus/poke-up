import mongoose from "mongoose";
import "dotenv/config.js";
import userSchema, { IUser } from "../schemas/userSchema.ts";
// mongoose.connect(process.env.USER_DB_URL || "mongodb://localhost:27017/");
const UserDB = mongoose.createConnection(process.env.USER_DB_URL!);
const User = UserDB.model("user", userSchema);

export async function createUser(
  name: string,
  email: string,
  password: string
): Promise<IUser> {
  const user = new User({
    name: name,
    email: email,
    password: password,
    Pokemon: [],
    Team: [],
    Exp: 0,
    Tasks: [],
  });
  await user.save();
  const newUser = user.toObject();
  console.log(newUser);
  return newUser;
}
