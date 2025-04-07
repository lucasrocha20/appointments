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
            password,
            avatar_url = ""
        } = request.body;

        const userCreated = await createUser.execute({
            name,
            email,
            avatar_url,
            password
        })

        if(!userCreated) {
            return reply.status(400).send()
        }

        reply.status(201).send()
    })

    next()
}

export { userController }