import { UserRepository } from "../src/application/ports/UserRepository";
import type { User } from "../src/domain/entities/User";

export class InMemoryUserRepository implements UserRepository {
  public users: User[] = [];

  async save(user: User): Promise<void> {
    this.users.push(user);
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = this.users.find(user => user.email === email);

    if(!user) return null;

    return user;
  }
}