import { InMemoryUserRepository } from "test/InMemoryUserRepository";
import { CreateUserUseCase } from "../user/CreateUser";
import { CreateSessionUseCase } from './CreateSession';
import { JWTService } from "@/infra/security/JWTService";

let inMemoryUserRepository: InMemoryUserRepository;
let createUserUseCase: CreateUserUseCase;
let createSessionUseCase: CreateSessionUseCase;
let jwtService: JWTService;

describe('Create Session', () => {
  beforeEach(() => {
    inMemoryUserRepository = new InMemoryUserRepository();
    createUserUseCase = new CreateUserUseCase(inMemoryUserRepository);
    jwtService = new JWTService();
    createSessionUseCase = new CreateSessionUseCase(inMemoryUserRepository, jwtService);
  })

  it('should be able to create an session', async () => {
    await createUserUseCase.execute({
      id: "1",
      name: "Lucas",
      email: "lucas@test.com",
      password: "abc123",
      avatar_url: "",
    });
    
    const sessionToken = await createSessionUseCase.execute({ email: "lucas@test.com", password: "abc123" })

    const jwtDecoded = await jwtService.verifyToken(sessionToken || '');

    expect(jwtDecoded).toHaveProperty('userId');
    expect(jwtDecoded).toHaveProperty('email');
    expect(jwtDecoded?.userId).toBe('1');
    expect(jwtDecoded?.email).toBe('lucas@test.com');
  });
});