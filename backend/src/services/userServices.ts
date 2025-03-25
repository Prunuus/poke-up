import * as userQueries from "../models/userQueries.ts";
import { UserDTO } from "../schemas/userSchema.ts";

export async function createUser(
  name: string,
  email: string,
  password: string
): Promise<UserDTO | null> {
  // add authentication here
  const safeUser = await userQueries.createUser(name, email, password);
  return safeUser;
}
