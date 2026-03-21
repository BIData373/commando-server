import { Body, Controller, Delete, Get, Param, Patch, Post, Req } from '@nestjs/common';
import { TransformPlainToInstance } from 'class-transformer';
import { Request } from 'express';
import { CreateTaskDto } from './dto/request/create-task.dto';
import { GetTaskIdDto } from './dto/request/get-task-id.dto';
import { UpdateTaskDto } from './dto/request/update-task.dto';
import { TaskDto } from './dto/response/task.dto';
import { TaskService } from './task.service';

// FIX Guards
@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) { }

  @Post()
  @TransformPlainToInstance(TaskDto)
  async create(
    @Req() { user }: Request,
    @Body() dto: CreateTaskDto
  ) {
    return await this.taskService.create(dto, user.id);
  }

  @Get()
  @TransformPlainToInstance(TaskDto)
  async findAll() {
    return await this.taskService.findAll();
  }

  // FIX Use GetIdDto
  @Get(':id')
  @TransformPlainToInstance(TaskDto)
  async findOne(
    @Param() { id }: GetTaskIdDto
  ) {
    return await this.taskService.findOne(id);
  }

  // FIX Use GetIdDto
  @Patch(':id')
  @TransformPlainToInstance(TaskDto)
  async update(
    @Req() { user }: Request,
    @Param() { id }: GetTaskIdDto,
    @Body() dto: UpdateTaskDto,
  ) {
    return await this.taskService.update(id, dto, user.id);
  }

  // FIX Use GetIdDto
  @Delete(':id')
  @TransformPlainToInstance(TaskDto)
  async remove(
    @Req() { user }: Request,
    @Param() { id }: GetTaskIdDto,
  ) {
    return await this.taskService.remove(id, user.id);
  }
}
