import { Test, TestingModule } from '@nestjs/testing';
import { hash } from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(async () => {
    process.env.ADMIN_EMAIL = 'admin@example.com';
    process.env.ADMIN_PASSWORD_HASH = await hash('correct-horse-battery', 4);
    process.env.ADMIN_ROLE = 'admin';
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        {
          provide: JwtService,
          useValue: { signAsync: jest.fn().mockResolvedValue('signed-token') },
        },
      ],
    }).compile();
    service = module.get<AuthService>(AuthService);
  });

  afterEach(() => {
    delete process.env.ADMIN_EMAIL;
    delete process.env.ADMIN_PASSWORD_HASH;
    delete process.env.ADMIN_ROLE;
  });

  it('issues a role-bearing token for valid admin credentials', async () => {
    await expect(
      service.login({
        email: 'ADMIN@example.com',
        password: 'correct-horse-battery',
      }),
    ).resolves.toEqual({
      access_token: 'signed-token',
      email: 'admin@example.com',
      role: 'admin',
    });
  });

  it('rejects an incorrect admin password', async () => {
    await expect(
      service.login({
        email: 'admin@example.com',
        password: 'incorrect-password',
      }),
    ).rejects.toThrow('Invalid email or password');
  });

  it('validates login request fields', async () => {
    const credentials = plainToInstance(LoginDto, {
      email: 'not-an-email',
      password: '',
      unexpected: true,
    });

    const errors = await validate(credentials, {
      whitelist: true,
      forbidNonWhitelisted: true,
    });
    expect(errors).toHaveLength(3);
  });
});
