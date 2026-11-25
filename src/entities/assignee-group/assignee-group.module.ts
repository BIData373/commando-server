import { Module } from '@nestjs/common';
import { AssigneeGroupController } from './assignee-group.controller';
import { AssigneeGroupService } from './assignee-group.service';

@Module({
  controllers: [AssigneeGroupController],
  providers: [AssigneeGroupService],
  exports: [AssigneeGroupService]
})
export class AssigneeGroupModule { }
