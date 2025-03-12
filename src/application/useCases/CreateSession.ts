import { PasswordHasher } from "@/infrastructure/PasswordHasher";
import type { UserRepository } from "../ports/UserRepository";

export class CreateSessionUseCase {
  constructor(private userRepository: UserRepository) { }

  async execute({ email, password }: { email: string, password: string }) {
    const user = this.userRepository.findByEmail(email);

    if (!user || !password) throw new Error("User not authorized!");

    const decodedPassword = PasswordHasher.comparePassword;

    if(!decodedPassword)  throw new Error("User not authorized!");

    return {
      token: "abc"
    }
  }
}