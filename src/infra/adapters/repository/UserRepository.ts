import { IUserRepository } from "@/core/application/ports/UserRepository";
import { User } from "@/core/domain/entities/User";
import { AppDataSource } from "@/infra/database/typeorm";
import { Users } from "@/infra/database/typeorm/entities/Users"

export class UserRepository implements IUserRepository {
    constructor(private usersRepository = AppDataSource.getRepository(Users)) {}

    async save(user: Users): Promise<void> {
        await this.usersRepository.save(user)
    }
    async findByEmail(email: string): Promise<User | null> {
        const user = await AppDataSource.manager.findOneBy(User, { 
            email
        });

        return user || null;
    }
}