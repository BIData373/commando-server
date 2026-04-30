import { NestFactory } from '@nestjs/core';
import { useContainer } from 'class-validator';
import 'reflect-metadata';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Vector')
    .setDescription('The Vector API')
    .setVersion('1.0')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config, {
    autoTagControllers: true
  });
  // if dev only
  SwaggerModule.setup('open-api', app, documentFactory, {
    jsonDocumentUrl: 'open-api/json',
  });


  useContainer(app.select(AppModule), { fallbackOnErrors: true });

  const port = process.env.PORT;

  await app.listen(Number(port));
  console.log(`Application is running on: http://localhost:${port}`);
}

bootstrap().catch(err => {
  console.error('Error starting application:', err);
  process.exit(1);
});
