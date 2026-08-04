import { Module } from '@nestjs/common';
import { ArchivedWorkspaceAssigneeService } from './archived-workspace-assignee-task.service';
import { ArchivedWorkspaceAssigneeController } from './archived-workspace-assignee-task.contoller';

@Module({
  controllers: [ArchivedWorkspaceAssigneeController],
  providers: [ArchivedWorkspaceAssigneeService],
})
export class ArchivedWorkspaceAssigneeModule { }
