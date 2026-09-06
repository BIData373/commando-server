import { Module } from '@nestjs/common';
import { UserWorkspaceEntriesService } from './user-workspace-entries.service';
import { UserWorkspaceEntriesController } from './user-workspace-entries.controller';

@Module({
  controllers: [UserWorkspaceEntriesController],
  providers: [UserWorkspaceEntriesService],
  exports: [UserWorkspaceEntriesService]
})
export class UserWorkspaceEntriesModule { }
