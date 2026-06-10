import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { useContainer } from 'class-validator';
import express from 'express';
import 'reflect-metadata';
import { AppModule, openApiRoute } from './app.module';
import { isDev, ssoEnabled } from './common/consts/env';
import { staticTokenHeader } from './common/consts/headers';

const server = express()

const PREFIX = process.env.SERVER_PREFIX ?? ''

async function bootstrap() {
  const app = await NestFactory.create(AppModule, new ExpressAdapter(server), {
    cors: isDev && {
      credentials: ssoEnabled,
      origin: (origin, callback) => callback(null, origin ?? false)
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
    autoTagControllers: true,
  });

  // FIX Dont setup swagger in prod
  if (process.env.SWAGGER_ENABLED === 'true') {
    SwaggerModule.setup(openApiRoute, app, document, {
      jsonDocumentUrl: `${openApiRoute}/json`,
    });
  }

  app.setGlobalPrefix(PREFIX);

  useContainer(app.select(AppModule), { fallbackOnErrors: true });

  const port = process.env.PORT;
  await app.listen(Number(port));

  console.log(`Application is running on: http://localhost:${port}`);
}

bootstrap().catch((err) => {
  console.error(err);
  throw err;
});

export default server;