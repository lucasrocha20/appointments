import { IUserRepository } from "@/core/application/ports/UserRepository";
import type { User } from "@/core/domain/entities/User";

export class InMemoryUserRepository implements IUserRepository {
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