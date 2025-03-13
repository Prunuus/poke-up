import mongoose from "mongoose";
import "dotenv/config.js";
import userSchema from "../schemas/userSchema.ts";

// mongoose.connect(process.env.USER_DB_URL || "mongodb://localhost:27017/");
const UserDB = mongoose.createConnection(process.env.USER_DB_URL!);
const User = UserDB.model("user", userSchema);

run();
async function run(): Promise<void> {
  const user = new User({
    name: "John Doe",
    email: "JohnDoe@email.xyz",
    password: "password",
    Pokemon: [],
    Team: [],
    Exp: 0,
    Tasks: [],
  });
  await user.save();
  console.log(user);
}
