import { MiddlewareConsumer, Module, NestModule, ValidationPipe } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_PIPE } from '@nestjs/core';
import path from 'node:path';
import { CookieMiddleware } from './common/middleware/cookie.middleware';
import { SharedModule } from './common/shared.module';
import { AssigneeTaskStatusModule } from './entities/assignee-task-status/assignee-task-status.module';
import { AssigneeUserModule } from './entities/assignee-user/assignee-user.module';
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

// FIX Use CrudService on all services
// FIX Use GetIdDto instead of all ParseIntPipe's
// FIX Add & use read, edit, manager, bi guards
// FIX Use types
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [
        path.join(__dirname, '../config/common.env'),
        path.join(__dirname, `../config`, process.env.ENV ?? '', '.env')
      ],
    }),
    SharedModule,
    PikudModule,
    WorkspaceModule,
    TagModule,
    SourceModule,
    TaskModule,
    WorkspaceStatusModule,
    AssigneeModule,
    UserModule,
    AssigneeTaskStatusModule,
    AssigneeUserModule,
    PermissionModule,
    MessageModule,
    TaskHistoryModule,
  ],
  providers: [
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({
        whitelist: true,
        stopAtFirstError: true,
        transform: true
      })
    },
  ]
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(CookieMiddleware).forRoutes('*');
  }
}
