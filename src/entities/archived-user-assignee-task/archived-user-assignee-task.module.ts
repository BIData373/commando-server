import { Module } from '@nestjs/common';
import { ArchivedUserAssigneeTaskController } from './archived-user-assignee-task.controller';
import { ArchivedUserAssigneeTaskService } from './archived-user-assignee-task.service';

@Module({
  controllers: [ArchivedUserAssigneeTaskController],
  providers: [ArchivedUserAssigneeTaskService],
  exports: [ArchivedUserAssigneeTaskService],
})
export class ArchivedUserAssigneeTaskModule { }
