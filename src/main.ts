import 'reflect-metadata';
import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log(process.env)
  const port = process.env.PORT;
  await app.listen(Number(port));
  console.log(`Application is running on: http://localhost:${port}`);
}

bootstrap().catch(err => {
  console.error('Error starting application:', err);
  process.exit(1);
});
