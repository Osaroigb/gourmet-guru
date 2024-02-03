import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';
import { NotFoundExceptionFilter, BadRequestExceptionFilter } from './http-exception.filter';

const bootstrap = async() => {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  
  //* Enable validation globally
  app.useGlobalPipes(new ValidationPipe());

  //* Enable http exception filtering
  app.useGlobalFilters(new NotFoundExceptionFilter(), new BadRequestExceptionFilter());
  await app.listen(+configService.get('APP_PORT'));
}

bootstrap();
