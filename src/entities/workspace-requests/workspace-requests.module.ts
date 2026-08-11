import { Module } from '@nestjs/common';
import { PermissionModule } from '../permission/permission.module';
import { MessageRelayModule } from '../services/message-relay.module';
import { WorkspaceModule } from '../workspace/workspace.module';
import { WorkspaceRequestsService } from './workspace-requests.service';
import { WorkspaceRequestsController } from './workspace-requests.controller';

@Module({
  imports: [MessageRelayModule, PermissionModule, WorkspaceModule],
  controllers: [WorkspaceRequestsController],
  providers: [WorkspaceRequestsService],
  exports: [WorkspaceRequestsService]
})
export class WorkspaceRequestsModule { }
