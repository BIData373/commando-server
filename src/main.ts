import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { useContainer } from 'class-validator';
import cookieParser from 'cookie-parser';
import express, { json, urlencoded } from 'express';
import { Logger } from 'pino-nestjs';
import 'reflect-metadata';
import { AppModule, openApiRoute } from './app.module';
import { isDev, port, serverPrefix, ssoEnabled, swaggerEnabled } from './common/consts/env';
import { staticTokenHeader } from './common/consts/headers';

const server = express()

async function bootstrap() {
  const app = await NestFactory.create(
    AppModule,
    new ExpressAdapter(server),
    {
      logger: ['verbose'],
      bufferLogs: true,
      cors: {
        credentials: true,
        ...(isDev && ssoEnabled && {
          origin: (origin, callback) => callback(null, origin ?? false)
        })
      }
    }
  );

  app.useLogger(app.get(Logger));

  app.setGlobalPrefix(serverPrefix);

  if (swaggerEnabled) {
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

    SwaggerModule.setup(openApiRoute, app, document, {
      jsonDocumentUrl: `${openApiRoute}/json`,
    });
  }

  app.use(cookieParser())

  app.use(json({ limit: '10mb' }));
  app.use(urlencoded({ extended: true, limit: '10mb' }));

  useContainer(app.select(AppModule), { fallbackOnErrors: true });

  await app.listen(Number(port));

  console.log(`Application is running on: http://localhost:${port}`);
}

bootstrap().catch((err) => {
  console.error(err);
  throw err;
});

export default server;