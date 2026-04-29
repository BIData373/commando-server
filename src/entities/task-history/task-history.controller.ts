import { Controller, Get, Query } from '@nestjs/common';
import { TransformPlainToInstance } from 'class-transformer';
import { GetViewerTaskIdFieldDto } from '../task/dto/request/get-task-id-field.dto';
import { TaskHistoryDto } from './dto/response/task-history.dto';
import { TaskHistoryService } from './task-history.service';

@Controller('task-history')
export class TaskHistoryController {
  constructor(private readonly taskHistoryService: TaskHistoryService) { }

  @Get()
  @TransformPlainToInstance(TaskHistoryDto)
  async findInTask(
    @Query() { taskId }: GetViewerTaskIdFieldDto
  ) {
    return await this.taskHistoryService.findInTask(taskId);
  }
}
