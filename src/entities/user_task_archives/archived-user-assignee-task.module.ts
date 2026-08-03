import { Module } from '@nestjs/common';
import { ArchivedUserAssigneeTaskService } from './archived-user-assignee-task.service';
import { TaskModule } from '../task/task.module';
import { ArchivedUserAssigneeTaskController } from './archived-user-assignee-task.controller';

@Module({
  imports: [TaskModule],
  controllers: [ArchivedUserAssigneeTaskController],
  providers: [ArchivedUserAssigneeTaskService],
})
export class ArchivedUserAssigneeTaskModule { }
