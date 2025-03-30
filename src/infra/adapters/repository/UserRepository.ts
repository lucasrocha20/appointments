import { IUserRepository } from "@/core/application/ports/UserRepository";
import { User } from "@/core/domain/entities/User";
import { AppDataSource } from "@/infra/database/typeorm";

export class UserRepository implements IUserRepository {
    async save(user: User): Promise<void> {
        // throw new Error("Method not implemented.");
        console.log("teste")
        await AppDataSource.manager.save(user)
        
    }
    findByEmail(email: string): Promise<User | null> {
        throw new Error("Method not implemented.");
    }

}