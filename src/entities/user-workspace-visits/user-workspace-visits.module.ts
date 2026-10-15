import { Module } from '@nestjs/common';
import { UserWorkspaceVisitsService } from './user-workspace-visits.service';
import { UserWorkspaceVisitsController } from './user-workspace-visits.controller';

@Module({
  controllers: [UserWorkspaceVisitsController],
  providers: [UserWorkspaceVisitsService],
  exports: [UserWorkspaceVisitsService]
})
export class UserWorkspaceVisitsModule { }
