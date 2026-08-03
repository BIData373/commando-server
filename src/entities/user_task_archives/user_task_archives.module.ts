import { Module } from '@nestjs/common';
import { UserTaskArchivesService } from './user_task_archives.service';
import { UserTaskArchivesController } from './user_task_archives.controller';
import { TaskModule } from '../task/task.module';

@Module({
  imports: [TaskModule],
  controllers: [UserTaskArchivesController],
  providers: [UserTaskArchivesService],
})
export class UserTaskArchivesModule {}
