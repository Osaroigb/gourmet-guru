import { Response } from 'express';
import { NotFoundException, BadRequestException } from '@nestjs/common';
import { ArgumentsHost, Catch, ExceptionFilter, HttpStatus } from '@nestjs/common';

@Catch(NotFoundException)
export class NotFoundExceptionFilter implements ExceptionFilter {

  catch(exception: NotFoundException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();

    response.status(HttpStatus.NOT_FOUND).json({
      statusCode: status,
      error: 'Not Found',
      message: exception.message,
    });
  }

}

@Catch(BadRequestException)
export class BadRequestExceptionFilter implements ExceptionFilter {

  catch(exception: BadRequestException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();

    response.status(HttpStatus.BAD_REQUEST).json({
      statusCode: status,
      error: 'Bad Request',
      message: exception.message,
    });
  }

}
