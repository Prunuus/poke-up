import userSchema from "./userSchema.ts";
import sessionSchema from "./sessionSchema.ts";
import taskSchema from "./taskSchema.ts";
import userMonSchema from "./userMon.ts";
import { InferSchemaType } from "mongoose";

export type UserType = InferSchemaType<typeof userSchema>;

export type UserDTO = Omit<UserType, "password">;

export type taskType = InferSchemaType<typeof taskSchema>;

export type sessionType = InferSchemaType<typeof sessionSchema>;

export type userMonType = InferSchemaType<typeof userMonSchema>;
