import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { useContainer } from 'class-validator';
import path from 'node:path';
import 'reflect-metadata';
import { AppModule, openApiRoute } from './app.module';
import { staticTokenHeader } from './common/consts/headers';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Vector')
    .setDescription('The Vector API')
    .setVersion('1.0')
    .addCookieAuth('ssoUser')
    .addApiKey({
      type: 'apiKey',
      name: staticTokenHeader,
      in: 'header',
    }, staticTokenHeader)
    .build();

  const documentFactory = () => SwaggerModule.createDocument(app, config, {
    autoTagControllers: true
  });

  // if dev only
  SwaggerModule.setup(openApiRoute, app, documentFactory, {
    jsonDocumentUrl: `${openApiRoute}/json`,
    customSwaggerUiPath: path.join(process.cwd(), 'node_modules', 'swagger-ui-dist')
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
