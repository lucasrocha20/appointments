import { User } from "../../domain/entities/User";
import { UserRepository } from "../ports/UserRepository";
import { randomUUID } from "node:crypto";
import { PasswordHasher } from "@/infrastructure/PasswordHasher";

interface CreateUserUseCaseRequest {
  id?: string,
  name: string,
  email: string,
  password: string,
  avatar_url: string,
}

export class CreateUserUseCase {
  constructor(private userRepository: UserRepository) { }

  async execute({ id, name, email, password, avatar_url }: CreateUserUseCaseRequest): Promise<User> {
    const generatedId = id ?? randomUUID();
    const hashedPassword = await PasswordHasher.hashPassword(password);
    const user = new User(generatedId, name, email, avatar_url, hashedPassword);
    this.userRepository.save(user);
    
    delete user.password;

    return user;
  }
}