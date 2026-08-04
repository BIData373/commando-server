import { Module } from '@nestjs/common';
import { ArchivedUserAssigneeTaskService } from './archived-user-assignee-task.service';
import { ArchivedUserAssigneeTaskController } from './archived-user-assignee-task.controller';

@Module({
  controllers: [ArchivedUserAssigneeTaskController],
  providers: [ArchivedUserAssigneeTaskService],
})
export class ArchivedUserAssigneeTaskModule { }
