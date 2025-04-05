import { Users } from "@/infra/database/typeorm/entities/Users";
import type { User } from "../../domain/entities/User";

export interface IUserRepository {
  save(user: Users): Promise<void>;
  findByEmail(email: string): Promise<User | null>;
}