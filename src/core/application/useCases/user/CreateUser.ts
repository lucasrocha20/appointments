import { User } from "@/core/domain/entities/User";
import { IUserRepository } from "@/core/application/ports/UserRepository";
import { randomUUID } from "node:crypto";
import { PasswordHasher } from "@/infra/PasswordHasher";

interface CreateUserUseCaseRequest {
  id?: string,
  name: string,
  email: string,
  password: string,
  avatar_url: string,
}

export class CreateUserUseCase {
  constructor(private userRepository: IUserRepository) { }

  async execute({ id, name, email, password, avatar_url }: CreateUserUseCaseRequest): Promise<void> {
    const generatedId = id ?? randomUUID();
    const hashedPassword = await PasswordHasher.hashPassword(password);
    const user = new User(generatedId, name, email, avatar_url, hashedPassword);

    await this.userRepository.save(user);
    
    // delete user.password;

    return;
  }
}