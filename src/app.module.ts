import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import path from 'node:path';
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
import { SharedModule } from './common/shared.module';

// FIX Use CrudService on all services
// FIX Use GetIdDto instead of all ParseIntPipe's
// FIX Add & use read, edit, manager, bi guards
// FIX Add cookie middleware
// FIX Use types
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: path.join(__dirname, `../config`, process.env.ENV ?? '', '.env'),
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
  providers: []
})
export class AppModule { }
