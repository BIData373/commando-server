import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { useContainer } from 'class-validator';
import express, { Request, Response } from 'express';
import 'reflect-metadata';
import { AppModule, openApiRoute } from './app.module';
import { isDev, ssoEnabled } from './common/consts/env';
import { staticTokenHeader } from './common/consts/headers';

const expressApp = express();
let isReady = false;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, new ExpressAdapter(expressApp), {
    cors: {
      credentials: ssoEnabled && isDev,
    },
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

  SwaggerModule.setup(openApiRoute, app, document, {
    jsonDocumentUrl: `${openApiRoute}/json`,
  });

  useContainer(app.select(AppModule), { fallbackOnErrors: true });

  if (isDev) {
    const port = process.env.PORT;
    await app.listen(Number(port));
    
    console.log(`Application is running on: http://localhost:${port}`);
  }

  else {
    await app.init();
  }

  isReady = true;
}

if (isDev) {
  bootstrap().catch((err) => {
    console.error(err);
    throw err;
  });
}

export default async function handler(req: Request, res: Response): Promise<void> {
  if (!isReady) await bootstrap();
  expressApp(req, res);
}