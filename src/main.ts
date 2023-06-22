import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe)
  app.enableCors({
    origin: 'https://todolist-fe-nu.vercel.app'
  });
  await app.listen(5678);
}
bootstrap();
