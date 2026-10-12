import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import 'dotenv/config';
import { AppModule } from './app.module';

async function bootstrap() {
  const adminCredentialsConfigured = Boolean(
    process.env.ADMIN_EMAIL?.trim() ||
    process.env.ADMIN_PASSWORD_HASH?.trim() ||
    process.env.JWT_SECRET?.trim(),
  );
  if (
    adminCredentialsConfigured &&
    (!process.env.ADMIN_EMAIL?.trim() ||
      !process.env.ADMIN_PASSWORD_HASH?.trim() ||
      !process.env.JWT_SECRET?.trim())
  ) {
    throw new Error(
      'Configure ADMIN_EMAIL, ADMIN_PASSWORD_HASH, and JWT_SECRET together.',
    );
  }

  if (process.env.JWT_SECRET && process.env.JWT_SECRET.length < 32) {
    throw new Error('JWT_SECRET must contain at least 32 characters');
  }
  if (
    adminCredentialsConfigured &&
    !['admin', 'editor'].includes(process.env.ADMIN_ROLE || 'admin')
  ) {
    throw new Error('ADMIN_ROLE must be either "admin" or "editor"');
  }

  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  const swaggerConfig = new DocumentBuilder()
    .setTitle('LHL Hockey API')
    .setDescription('League teams, match schedules, news, and admin access')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  SwaggerModule.setup(
    'api/docs',
    app,
    SwaggerModule.createDocument(app, swaggerConfig),
  );

  await app.listen(process.env.PORT ?? 3000);
}

void bootstrap();
