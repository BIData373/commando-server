import { Module } from '@nestjs/common'
import { MessageRelayModule } from '../services/message-relay.module'
import { WorkspaceRequestsController } from './workspace-requests.controller'
import { WorkspaceRequestsService } from './workspace-requests.service'

@Module({
  imports: [MessageRelayModule],
  controllers: [WorkspaceRequestsController],
  providers: [WorkspaceRequestsService],
  exports: [WorkspaceRequestsService]
})
export class WorkspaceRequestsModule { }
