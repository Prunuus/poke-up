import * as userQueries from "../models/userQueries.ts";
import { UserDTO } from "../schemas/userSchema.ts";
import { Types } from "mongoose";
export async function createUser(
  name: string,
  email: string,
  password: string
): Promise<UserDTO | null> {
  // add authentication here
  const safeUser = await userQueries.createUser(name, email, password);
  return safeUser;
}

export async function getUserByID(id: string): Promise<UserDTO | null> {
  //authentication here
  const userID = new Types.ObjectId(id);
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
}
