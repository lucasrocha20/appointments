import fastify, { FastifyInstance, FastifyPluginCallback } from "fastify";
import { CreateUserUseCase } from '@/core/application/useCases/user/CreateUser';
import { UserRepository } from "@/infra/adapters/repository/UserRepository";

const userController: FastifyPluginCallback = (fastify, _, next) => {
    
    fastify.post('/user', async (request, reply) => {
        const userRepository = new UserRepository();
        const createUser = new CreateUserUseCase(userRepository);
        const response = await createUser.execute({
            name: 'Lucas',
            email: 'teste@teste.com',
            avatar_url: '',
            password: 'abc123'
        })
        return response;
    })

    next()
}

export { userController }