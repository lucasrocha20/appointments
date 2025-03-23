import { IUserRepository } from "@/core/application/ports/UserRepository";
import { User } from "@/core/domain/entities/User";

export class UserRepository implements IUserRepository {
    async save(user: User): Promise<void> {
        // throw new Error("Method not implemented.");
        console.log("teste")
    }
    findByEmail(email: string): Promise<User | null> {
        throw new Error("Method not implemented.");
    }

}