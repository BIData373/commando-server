import { Controller, Get, Query } from '@nestjs/common';
import { TransformPlainToInstance } from 'class-transformer';
//import { AddUserToContext } from '../../common/interceptors/add-user-to-context.interceptor';
import { GetTaskIdFieldDto } from '../task/dto/request/get-task-id-field.dto';
import { TaskHistoryDto } from './dto/response/task-history.dto';
import { TaskHistoryService } from './task-history.service';

// FIX Guards
@Controller('task-history')
export class TaskHistoryController {
  constructor(private readonly taskHistoryService: TaskHistoryService) { }

  // @Post()
  // @TransformPlainToInstance(TaskHistoryDto)
  // async create(
  //   @Body() dto: CreateTaskHistoryDto
  // ) {
  //   return await this.taskHistoryService.create(dto);
  // }

  //@AddUserToContext('query')
  @Get()
  @TransformPlainToInstance(TaskHistoryDto)
  async findInTask(
    @Query() { taskId }: GetTaskIdFieldDto
  ) {
    return await this.taskHistoryService.findInTask(taskId);
  }
}
