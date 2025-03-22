import * as jwt from 'jsonwebtoken';

declare module 'jsonwebtoken' {
  export interface DecodedJwtToken extends jwt.JwtPayload {
    userId: string;
    email: string;
  }
  function verify(token: string, secret: Secret, options?: VerifyOptions): DecodedJwtToken;
}