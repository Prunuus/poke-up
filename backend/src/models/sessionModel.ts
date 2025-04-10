import mongoose from "mongoose";
import sessionSchema, { ISession } from "../schemas/sessionSchema.ts";

const Session = mongoose.model<ISession>("Session", sessionSchema);
export default Session;
