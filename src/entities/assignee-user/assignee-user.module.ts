import { Module } from '@nestjs/common';
import { AssigneeUserController } from './assignee-user.controller';
import { AssigneeUserService } from './assignee-user.service';

@Module({
  controllers: [AssigneeUserController],
  providers: [AssigneeUserService],
  exports: [AssigneeUserService]
})
export class AssigneeUserModule { }
