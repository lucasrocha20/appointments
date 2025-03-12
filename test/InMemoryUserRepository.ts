import { UserRepository } from "../src/application/ports/UserRepository";
import type { User } from "../src/domain/entities/User";

export class InMemoryUserRepository implements UserRepository {
  public users: User[] = [];

  save(user: User): void {
    this.users.push(user);
  }

  findByEmail(email: string): User | undefined {
    return this.users.find(user => user.email === email);
  }
}