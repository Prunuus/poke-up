import * as userQueries from "../models/userQueries.ts";
import type { UserDTO } from "../schemas/userSchema.ts";
import { Types } from "mongoose";
import * as auth from "./auth.ts";

export async function createUser(
  name: string,
  email: string,
  password: string
): Promise<UserDTO | null> {
  if (await auth.isUser(name, email)) {
    return null;
  }
  const hashedPassword = await auth.hashPassword(password);
  const safeUser = await userQueries.createUser(name, email, hashedPassword);
  return safeUser;
}

export async function getUserByID(id: string): Promise<UserDTO | null> {
  const userID = new Types.ObjectId(id);
  try {
    const user = await userQueries.getUserByID(userID);
    if (!user) {
      return null;
    }

    const userObj = user.toObject();
    delete userObj.password;
    userObj._id = userObj._id.toString();
    const userDTO: UserDTO = userObj as UserDTO;
    console.log(userDTO);
    return userDTO as UserDTO;
  } catch {
    return null;
  }
}
