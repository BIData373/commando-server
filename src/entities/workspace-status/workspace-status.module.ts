import { Module } from '@nestjs/common';
import { WorkspaceStatusController } from './workspace-status.controller';
import { WorkspaceStatusService } from './workspace-status.service';

@Module({
  controllers: [WorkspaceStatusController],
  providers: [WorkspaceStatusService],
})
export class WorkspaceStatusModule {}
