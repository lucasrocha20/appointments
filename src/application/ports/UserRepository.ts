import type { User } from "../../domain/entities/User";

export interface UserRepository {
  save(user: User): void;
  findByEmail(email: string): User | undefined;
}