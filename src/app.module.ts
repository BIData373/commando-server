import { MiddlewareConsumer, Module, NestModule, ValidationPipe } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core';
import { LoggerModule } from 'pino-nestjs';
import { PrettyOptions } from 'pino-pretty';
import { envFilePath, isDev } from './common/consts/env';
import { excludedLogHeaders } from './common/consts/headers';
import { forbiddenExceptionFactory } from './common/functions/transform';
import { BIGuard } from './common/guards/bi.guard';
import { AddUserToContextInterceptor } from './common/interceptors/add-user-to-context.interceptor';
import { CookieMiddleware } from './common/middleware/cookie.middleware';
import { WritableQueryMiddleware } from './common/middleware/writable-query.middleware';
import { PrismaModule } from './common/prisma.module';
import { AssigneeTaskStatusModule } from './entities/assignee-task-status/assignee-task-status.module';
import { AssigneeModule } from './entities/assignee/assignee.module';
import { MessageModule } from './entities/message/message.module';
import { PermissionModule } from './entities/permission/permission.module';
import { PikudModule } from './entities/pikud/pikud.module';
import { SourceModule } from './entities/source/source.module';
import { TagModule } from './entities/tag/tag.module';
import { TaskHistoryModule } from './entities/task-history/task-history.module';
import { TaskModule } from './entities/task/task.module';
import { UserModule } from './entities/user/user.module';
import { WorkspaceStatusModule } from './entities/workspace-status/workspace-status.module';
import { WorkspaceModule } from './entities/workspace/workspace.module';

// FIX Move to env
export const openApiRoute = 'open-api'

// FIX Add POST recover endpoints for all entities with deletedAt
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath }),
    LoggerModule.forRoot({
      pinoHttp: {
        redact: { paths: excludedLogHeaders, remove: true, },
        transport: isDev
          ? {
            target: 'pino-pretty',
            options: {
              colorize: true,
              translateTime: 'SYS:standard',
              hideObject: true,
              singleLine: false,
              messageFormat: '{req.method} {req.url} {res.statusCode} {msg}'
            } as PrettyOptions,
          }
          : undefined,
      },
    }),
    PrismaModule,
    PikudModule,
    WorkspaceModule,
    TagModule,
    SourceModule,
    TaskModule,
    WorkspaceStatusModule,
    AssigneeModule,
    UserModule,
    AssigneeTaskStatusModule,
    PermissionModule,
    MessageModule,
    TaskHistoryModule,
  ],
  providers: [
    BIGuard,
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({
        whitelist: true,
        stopAtFirstError: true,
        transform: true,
        validateCustomDecorators: true,
        exceptionFactory: forbiddenExceptionFactory
      })
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: AddUserToContextInterceptor
    },
  ]
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer
      .apply(WritableQueryMiddleware, CookieMiddleware)
      .exclude(openApiRoute, `${openApiRoute}/(.*)`)
      .forRoutes('*');
  }
}
