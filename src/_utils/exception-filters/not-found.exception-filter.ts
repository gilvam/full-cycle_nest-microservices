import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { Response } from 'express';

@Catch(Prisma.PrismaClientKnownRequestError)
export class NotFoundExceptionFilter implements ExceptionFilter {
	catch(exception: Prisma.PrismaClientKnownRequestError, host: ArgumentsHost): any {
		const context = host.switchToHttp();
		const response = context.getResponse<Response>();
		const messageError = exception.meta?.cause ?? exception.message;

		if (exception.code === 'P2025') {
			response.status(404).json({
				statusCode: 404,
				message: messageError,
			});
			return;
		}

		response.status(500).json({
			statusCode: 500,
			message: messageError,
		});
	}
}
