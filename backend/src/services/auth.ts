import * as userQueries from "../models/userQueries.ts";
import bcrypt from "bcrypt";
import jwt, { JwtPayload } from "jsonwebtoken";
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

function verifyAccessToken(token: string): JwtPayload | null {
  try {
    return jwt.verify(token, process.env.ACCESS_TOKEN_SECRET!) as JwtPayload;
  } catch {
    return null; // Expired or invalid access token
  }
}

// Verify refresh token
function verifyRefreshToken(token: string): JwtPayload | null {
  try {
    return jwt.verify(token, process.env.REFRESH_TOKEN_SECRET!) as JwtPayload;
  } catch {
    return null; // Invalid refresh token
  }
}

export interface userJWTPayload extends JwtPayload {
  userID: string;
  username: string;
  accessToken: string;
}
export function authorize(
  accessToken: string,
  refreshToken: string
): userJWTPayload | null {
  const accessTokenPayload = verifyAccessToken(accessToken);
  if (!accessTokenPayload) {
    const refreshTokenPayload = verifyRefreshToken(refreshToken);
    if (!refreshTokenPayload) {
      return null;
    }

    return {
      userID: refreshTokenPayload.userID,
      username: refreshTokenPayload.username,
      accessToken: accessToken,
    };
  }
  return {
    userID: accessTokenPayload.userID,
    username: accessTokenPayload.username,
    accessToken: accessToken,
  };
}
