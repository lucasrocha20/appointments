import { PasswordHasher } from "@/infra/PasswordHasher";
import type { IUserRepository } from "../../ports/UserRepository";
import type { JWTService } from "@/infra/security/JWTService";

export class CreateSessionUseCase {
  constructor(
    private userRepository: IUserRepository,
    private jwtService: JWTService,
  ) { }

  async execute({ email, password }: { email: string, password: string }) {
    const user = await this.userRepository.findByEmail(email);

    if (!user || !password) return null;

    const decodedPassword = await PasswordHasher.comparePassword(password, user?.password || '');

    if(!decodedPassword) return null;

    const { id } = user;

    return this.jwtService.generateToken({ userId: id, email })
  }
}