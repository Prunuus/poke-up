import mongoose, { Types } from "mongoose";
import "dotenv/config.js";
import userSchema, { IUser, UserDTO } from "../schemas/userSchema.ts";

// UserDB = mongoose.createConnection(process.env.USER_DB_URL || "mongodb://localhost:27017/");
const UserDB = mongoose.createConnection(process.env.USER_DB_URL!);
const User = UserDB.model("user", userSchema);

export async function createUser(
  name: string,
  email: string,
  password: string
): Promise<UserDTO> {
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

  const userDTO: UserDTO = user.toObject({
    transform: (_doc, ret) => {
      delete ret.password;
      ret._id = ret._id.toString();
      return ret;
    },
  });
  console.log(userDTO);
  return userDTO as UserDTO;
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
