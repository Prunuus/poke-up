import * as userQueries from "../models/userQueries.ts";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config.js";

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
