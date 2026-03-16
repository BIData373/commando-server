import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { CreateTaskHistoryDto } from './dto/request/create-task-history.dto';
import { TaskHistoryDto } from './dto/response/task-history.dto';
import { TaskHistoryService } from './task-history.service';

@Controller('task-history')
export class TaskHistoryController {
  constructor(private readonly taskHistoryService: TaskHistoryService) {}

  @Post()
  async create(@Body() dto: CreateTaskHistoryDto): Promise<TaskHistoryDto> {
    const record = await this.taskHistoryService.create(dto);
    return plainToInstance(TaskHistoryDto, record);
  }

  @Get()
  async findAll(): Promise<TaskHistoryDto[]> {
    const records = await this.taskHistoryService.findAll();
    return plainToInstance(TaskHistoryDto, records);
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<TaskHistoryDto> {
    const record = await this.taskHistoryService.findOne(id);
    return plainToInstance(TaskHistoryDto, record);
  }
}
