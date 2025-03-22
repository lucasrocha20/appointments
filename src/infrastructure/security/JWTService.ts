import jwt from "jsonwebtoken";

export class JWTService {
  private secret: string;
  private expiresIn: number;

  constructor() {
    this.secret = process.env.JWT_SECRET || "default_secret";
    this.expiresIn = 60 * 60 * 1000;// "1h"
  }

  generateToken(payload: object): string | null {
    return jwt.sign(payload, this.secret, { expiresIn: this.expiresIn });
  }

  async verifyToken(token: string): Promise<jwt.DecodedJwtToken | null> {
    try {
      return jwt.verify(token, this.secret);
    } catch (error) {
      return null;
    }
  }
}