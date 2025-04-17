import * as userQueries from "../models/userQueries.ts";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config.js";
import { UserDTO } from "../schemas/userSchema.ts";

export async function isUser(name: string, email: string): Promise<boolean> {
  try {
    let user = await userQueries.getUserByName(name);
    if (!user) {
      return false;
    }
    user = await userQueries.getUserByEmail(email);
    if (!user) {
      return false;
    }
    return true;
  } catch {
    return true;
  }
}

export async function authenticateUser(
  username: string,
  email: string,
  password: string
): Promise<UserDTO | null> {
  if (!username || !email || !password) {
    return null;
  }
  if (
    typeof username !== "string" ||
    typeof email !== "string" ||
    typeof password !== "string"
  ) {
    return null;
  }
  const user = await userQueries.getUserByName(username);
  if (!user) {
    return null;
  }
  if (
    user.email !== email ||
    user.password !== (await hashPassword(password))
  ) {
    return null;
  } else {
    const userObj = user.toObject();
    delete userObj.password;
    userObj._id = userObj._id.toString();
    const userDTO: UserDTO = userObj as UserDTO;
    console.log(userDTO);
    return userDTO as UserDTO;
  }
}

export async function hashPassword(password: string): Promise<string> {
  return await bcrypt.hash(password, process.env.BCRYPT_SALT_ROUNDS!);
}

export function createAccessToken(_id: string, name: string): string {
  return jwt.sign(
    { userID: _id, username: name },
    process.env.ACCESS_TOKEN_SECRET!,
    { expiresIn: "3h" }
  );
}

export function createRefreshToken(_id: string, name: string): string {
  return jwt.sign(
    { userID: _id, username: name },
    process.env.REFRESH_TOKEN_SECRET!,
    { expiresIn: "7d" }
  );
}

export function verifyAccessToken(token: string): jwt.JwtPayload | null {
  try {
    return jwt.verify(
      token,
      process.env.ACCESS_TOKEN_SECRET!
    ) as jwt.JwtPayload;
  } catch {
    return null; // Expired or invalid access token
  }
}

// Verify refresh token

export function verifyRefreshToken(token: string): jwt.JwtPayload | null {
  try {
    return jwt.verify(
      token,
      process.env.REFRESH_TOKEN_SECRET!
    ) as jwt.JwtPayload;
  } catch {
    return null; // Invalid refresh token
  }
}

export interface userJWTPayload extends jwt.JwtPayload {
  userID: string;
  username: string;
  accessToken: string;
}
export function authorizeToken(
  accessToken: string,
  refreshToken: string
): userJWTPayload | null {
  const accessTokenPayload = verifyAccessToken(accessToken);
  if (!accessTokenPayload) {
    const refreshTokenPayload = verifyRefreshToken(refreshToken);
    if (!refreshTokenPayload) {
      return null;
    }

    const newAccessToken = createAccessToken(
      refreshTokenPayload.userID,
      refreshTokenPayload.username
    );

    return {
      userID: refreshTokenPayload.userID,
      username: refreshTokenPayload.username,
      accessToken: newAccessToken,
    };
  }
  return {
    userID: accessTokenPayload.userID,
    username: accessTokenPayload.username,
    accessToken: accessToken,
  };
}
