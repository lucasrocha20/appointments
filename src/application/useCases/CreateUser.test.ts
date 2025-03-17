import { InMemoryUserRepository } from "test/InMemoryUserRepository";
import { CreateUserUseCase } from "./CreateUser";

let inMemoryUserRepository: InMemoryUserRepository;
let createUserUseCase: CreateUserUseCase;

describe('Create User', () => {
  beforeEach(() => {
    inMemoryUserRepository = new InMemoryUserRepository();
    createUserUseCase = new CreateUserUseCase(inMemoryUserRepository);
  })

  it('should be able to create an user', async () => {
    await createUserUseCase.execute({
      id: "1",
      name: "Lucas",
      email: "lucas@test.com",
      password: "abc123",
      avatar_url: "",
    });

    const { password, ...rest } = inMemoryUserRepository.users[0];

    expect({...rest}).toEqual({
      id: "1",
      name: "Lucas",
      email: "lucas@test.com",
      avatar_url: "",
    });
  });
});