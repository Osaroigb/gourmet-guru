import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';

const bootstrap = async() => {
  const app = await NestFactory.create(AppModule);
  await app.listen(3300);
}

bootstrap();
