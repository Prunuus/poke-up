import mongoose from "mongoose";
import "dotenv/config.js";
import userSchema, { UserDTO } from "../schemas/userSchema.ts";
// mongoose.connect(process.env.USER_DB_URL || "mongodb://localhost:27017/");
const UserDB = mongoose.createConnection(process.env.USER_DB_URL!);
const User = UserDB.model("user", userSchema);

export async function createUser(
  name: string,
  email: string,
  password: string
): Promise<UserDTO> {
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
  const { password: _password, ...safeUser } = user.toObject();
  console.log(safeUser);
  return safeUser;
}
