import { InMemoryUserRepository } from "test/InMemoryUserRepository";
import { CreateUserUseCase } from "./CreateUser";
import { CreateSessionUseCase } from './CreateSession';

let inMemoryUserRepository: InMemoryUserRepository;
let createUserUseCase: CreateUserUseCase;
let createSessionUseCase: CreateSessionUseCase;

describe('Create User', () => {
  beforeEach(() => {
    inMemoryUserRepository = new InMemoryUserRepository();
    createUserUseCase = new CreateUserUseCase(inMemoryUserRepository);
    createSessionUseCase = new CreateSessionUseCase(inMemoryUserRepository);
  })

  it('should be able to create an user', async () => {
    await createUserUseCase.execute({
      id: "1",
      name: "Lucas",
      email: "lucas@test.com",
      password: "abc123",
      avatar_url: "",
    });

    const session = await createSessionUseCase.execute({ email: "lucas@test.com", password: "abc123" })

    console.log("session", session)
  });
});