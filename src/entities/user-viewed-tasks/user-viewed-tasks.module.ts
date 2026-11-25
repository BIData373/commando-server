import { Module } from '@nestjs/common';
import { UserViewedTasksController } from './user-viewed-tasks.controller';
import { UserViewedTasksService } from './user-viewed-tasks.service';

@Module({
  controllers: [UserViewedTasksController],
  providers: [UserViewedTasksService],
  exports: [UserViewedTasksService],
})
export class UserViewedTasksModule { }
