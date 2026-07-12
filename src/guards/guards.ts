import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import crypto from "crypto";
import config from "../config/config";

interface TokenPayload {
  id: string;
  email: string;
  role: string;
}

export interface JwtPayload {
  id: string;
  email: string;
  role: string;
  iat: number;
  exp: number;
}

interface RefreshTokenResult {
  refreshToken: string;
  hashedToken: string;
}

class Guards {

  static hashPassword = (password: string): string => {
    return bcrypt.hashSync(password, 10);
  };

  static createAccessToken = (user: TokenPayload): string => {
    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
        role: user.role,
      },
      config.secret_key,
      {expiresIn : "15m"}
    );
    return token;
  };

  static verifyAccesToken = (token:string):JwtPayload=>{
    return jwt.verify(token,config.secret_key) as JwtPayload
  };

  static comparePassword = async(password:string,hashPassword:string):Promise<boolean>=>{
    return await bcrypt.compare(password,hashPassword)
  }
  // static createRefreshToke = ():RefreshTokenResult=>{

  //     const

  // }
}

export default Guards;
