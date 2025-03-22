import mongoose from "mongoose";
import "dotenv/config.js";
import userSchema from "../schemas/userSchema.ts";
import { UserType, UserDTO } from "../schemas/userTypes.ts";
// mongoose.connect(process.env.USER_DB_URL || "mongodb://localhost:27017/");
const UserDB = mongoose.createConnection(process.env.USER_DB_URL!);
const User = UserDB.model("user", userSchema);

// type UserType = InferSchemaType<typeof userSchema>;

// type UserDTO = Omit<UserType, "password">;

export async function createUser(newUser: UserType): Promise<UserDTO> {
  const user = new User(newUser);
  await user.save();
  const { password: _password, ...safeUser } = user.toObject();
  console.log(safeUser);
  return safeUser;
}
