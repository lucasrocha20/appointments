import { Users } from "@/infra/database/typeorm/entities/Users";
import type { User } from "../../domain/entities/User";

export interface IUserRepository {
  save(user: User): Promise<void>;
  findByEmail(email: string): Promise<Users | null>;
}