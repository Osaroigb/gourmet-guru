import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { NotFoundExceptionFilter, BadRequestExceptionFilter } from './http-exception.filter';

const bootstrap = async() => {
  const app = await NestFactory.create(AppModule);

  //* Enable validation globally
  app.useGlobalPipes(new ValidationPipe());

  //* Enable http exception filtering
  app.useGlobalFilters(new NotFoundExceptionFilter(), new BadRequestExceptionFilter());
  await app.listen(8800);
}

bootstrap();
