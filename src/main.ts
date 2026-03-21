import { NestFactory } from '@nestjs/core';
import { useContainer } from 'class-validator';
import 'reflect-metadata';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  useContainer(app.select(AppModule), { fallbackOnErrors: true });

  const port = process.env.PORT;

  await app.listen(Number(port));
  console.log(`Application is running on: http://localhost:${port}`);
}

bootstrap().catch(err => {
  console.error('Error starting application:', err);
  process.exit(1);
});
