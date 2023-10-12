import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { NotFoundExceptionFilter } from './_utils/exception-filters/not-found.exception-filter';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);

	app.useGlobalPipes(new ValidationPipe({ errorHttpStatusCode: 422 })); // global pipe
	app.useGlobalFilters(new NotFoundExceptionFilter());

	await app.listen(3003);
}

bootstrap();
