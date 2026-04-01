import { Module } from '@nestjs/common';
import { AssigneeTaskStatusController } from './assignee-task-status.controller';
import { AssigneeTaskStatusService } from './assignee-task-status.service';

@Module({
  controllers: [AssigneeTaskStatusController],
  providers: [AssigneeTaskStatusService],
  exports: [AssigneeTaskStatusService]
})
export class AssigneeTaskStatusModule { }
