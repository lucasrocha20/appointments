import fastify, { FastifyPluginCallback } from "fastify";
import type { FastifyRequest } from "fastify";
import { CreateUserUseCase, CreateUserUseCaseRequest } from '@/core/application/useCases/user/CreateUser';
import { UserRepository } from "@/infra/adapters/repository/UserRepository";

const userController: FastifyPluginCallback = (fastify, _, next) => {
    fastify.post('/user', async (request: FastifyRequest<{ Body: CreateUserUseCaseRequest }>, reply) => {
        const userRepository = new UserRepository();
        const createUser = new CreateUserUseCase(userRepository);

        const {
            name,
            email,
            avatar_url = "",
            password
        } = request.body;

        await createUser.execute({
            name,
            email,
            avatar_url,
            password
        })

        reply.status(201).send()
    })

    next()
}

export { userController }