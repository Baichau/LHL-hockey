import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcryptjs';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  private readonly adminEmail = process.env.ADMIN_EMAIL?.trim().toLowerCase();
  private readonly adminPasswordHash = process.env.ADMIN_PASSWORD_HASH;
  private readonly adminRole = process.env.ADMIN_ROLE || 'admin';

  constructor(private readonly jwt: JwtService) {}

  async login(credentials: LoginDto) {
    const email = credentials.email.trim().toLowerCase();
    if (!this.adminEmail || !this.adminPasswordHash) {
      throw new Error('ADMIN_EMAIL and ADMIN_PASSWORD_HASH must be configured');
    }
    const valid =
      email === this.adminEmail &&
      (await compare(credentials.password, this.adminPasswordHash));

    if (!valid) {
      throw new UnauthorizedException('Invalid email or password');
    }

    const payload = { sub: email, role: this.adminRole };
    return {
      access_token: await this.jwt.signAsync(payload),
      email,
      role: this.adminRole,
    };
  }
}
