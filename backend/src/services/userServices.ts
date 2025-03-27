import * as userQueries from "../models/userQueries.ts";
import { UserDTO } from "../schemas/userSchema.ts";
import { Types } from "mongoose";
import * as auth from "./auth.ts";

export async function createUser(
  name: string,
  email: string,
  password: string
): Promise<UserDTO | null> {
  // add authentication here
  if (await auth.isUser(name, email)) {
    return null;
  }
  const hashedPassword = await auth.hashPassword(password);
  const safeUser = await userQueries.createUser(name, email, hashedPassword);
  return safeUser;
}

export async function getUserByID(id: string): Promise<UserDTO | null> {
  //authentication here
  const userID = new Types.ObjectId(id);
  try {
    const user = await userQueries.getUserByID(userID);
    if (!user) {
      return null;
    }

    const userDTO: UserDTO = user.toObject({
      transform: (_doc, ret) => {
        delete ret.password;
        ret._id = ret._id.toString();
        return ret as UserDTO;
      },
    });
    console.log(userDTO);
    return userDTO;
  } catch {
    return null;
  }
}
