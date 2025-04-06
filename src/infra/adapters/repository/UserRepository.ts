import { IUserRepository } from "@/core/application/ports/UserRepository";
import { User } from "@/core/domain/entities/User";
import { AppDataSource } from "@/infra/database/typeorm";
import { Users } from "@/infra/database/typeorm/entities/Users"

export class UserRepository implements IUserRepository {
    constructor(private usersRepository = AppDataSource.getRepository(Users)) {}

    async save(user: User): Promise<void> {
        const createdUser = this.usersRepository.create(user);
        await this.usersRepository.save(createdUser)
    }
    async findByEmail(email: string): Promise<Users | null> {
        const user = await AppDataSource.manager.findOneBy(Users, { 
            email
        });

        return user || null;
    }
}