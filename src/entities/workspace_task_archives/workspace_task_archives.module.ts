import { Module } from '@nestjs/common';
import { WorkspaceTaskArchivesService } from './workspace_task_archives.service';
import { WorkspaceTaskArchivesController } from './workspace_task_archives.controller';
import { TaskModule } from '../task/task.module';

@Module({
  imports: [TaskModule],
  controllers: [WorkspaceTaskArchivesController],
  providers: [WorkspaceTaskArchivesService],
})
export class WorkspaceTaskArchivesModule {}
