// todo: Desaclopar ?
import { compare, hash } from "bcryptjs";

const SALT_ROUNDS = 10;

export class PasswordHasher {
  static async hashPassword(password: string): Promise<string> {
    return await hash(password, SALT_ROUNDS);
  }

  static async comparePassword(password: string, hashedPassword: string): Promise<boolean> {
    return await compare(password, hashedPassword);
  }
}