import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { useContainer } from 'class-validator';
import 'reflect-metadata';
import { AppModule, openApiRoute } from './app.module';
import { staticTokenHeader } from './common/consts/headers';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      credentials: JSON.parse(process.env.VITE_USE_SSO ?? 'false') && process.env.ENVIRONMENT === 'development',
    }
  });

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
    .addSecurityRequirements(staticTokenHeader)
    .build();

  const document = SwaggerModule.createDocument(app, config, {
    autoTagControllers: true
  });

  // if dev only
  SwaggerModule.setup(openApiRoute, app, document, {
    jsonDocumentUrl: `${openApiRoute}/json`
  });

  useContainer(app.select(AppModule), { fallbackOnErrors: true });

  const port = process.env.PORT;
  await app.listen(Number(port));

  console.log(`Application is running on: http://localhost:${port}`);
}

bootstrap()
  .catch(err => {
    throw err
  });
