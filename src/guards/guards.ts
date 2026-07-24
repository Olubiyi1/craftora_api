import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import crypto from "crypto";
import config from "../config/config";

interface TokenPayload {
  id: string;
  email: string;
  role: string;
}

export interface AccessTokenPayload {
  id: string;
  email: string;
  role: string;
  iat: number;
  exp: number;
}

interface RefreshTokenPayload {
  sub: string;
  iat: number;
  exp: number;
}

interface RefreshTokenResult {
  refreshToken: string;
  hashedRefreshToken: string;
}

// 
class Guards {

  // hash password
  static hashPassword = (password: string): string => {
    return bcrypt.hashSync(password, 10);
  };

  // compare password
  static comparePassword = async (
    password: string,
    hashPassword: string,
  ): Promise<boolean> => {
    return await bcrypt.compare(password, hashPassword);
  };

  // create refresh token
  static createAccessToken = (user: TokenPayload): string => {
    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
        role: user.role,
      },
      config.access_token_secret_key,
      { expiresIn: "15m" },
    );
    return token;
  };

  // verify access toekn
  static verifyAccessToken = (token: string): AccessTokenPayload => {
    return jwt.verify(token, config.access_token_secret_key) as AccessTokenPayload;
  };


  // create refresh token
  static createRefreshToken = (user: TokenPayload): RefreshTokenResult => {

    // raw refresh token
    const refreshToken = jwt.sign(
      {
        sub: user.id,
      },
      config.refresh_token_secret_key,
      { expiresIn: "7d" },
    );

    // hashed refresh token
    const hashedRefreshToken = crypto
      .createHash("sha256")
      .update(refreshToken)
      .digest("hex");

    return {
      refreshToken,
      hashedRefreshToken,
    };
  };

  // verify refresh token
  static verifyRefreshToken = (token: string): RefreshTokenPayload => {
    return jwt.verify(token, config.refresh_token_secret_key) as RefreshTokenPayload;
  };
}

export default Guards;
