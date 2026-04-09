import { Body, Controller, Get, Post } from '@nestjs/common';
import { TransformPlainToInstance } from 'class-transformer';
import { CreateTaskHistoryDto } from './dto/request/create-task-history.dto';
import { TaskHistoryDto } from './dto/response/task-history.dto';
import { TaskHistoryService } from './task-history.service';

// FIX Guards
@Controller('task-history')
export class TaskHistoryController {
  constructor(private readonly taskHistoryService: TaskHistoryService) { }

  @Post()
  @TransformPlainToInstance(TaskHistoryDto)
  async create(
    @Body() dto: CreateTaskHistoryDto
  ) {
    return await this.taskHistoryService.create(dto);
  }

  @Get()
  @TransformPlainToInstance(TaskHistoryDto)
  async findAll() {
    return await this.taskHistoryService.findAll();
  }
}
