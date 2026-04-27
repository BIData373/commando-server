import { Body, Controller, Delete, Get, Param, Patch, Post, Query, Req } from '@nestjs/common';
import { TransformPlainToInstance } from 'class-transformer';
import { Request } from 'express';
import { AddUserToContext } from '../../common/interceptors/add-user-to-context.interceptor';
import { GetViewerQueryWorkspaceIdFieldDto } from '../workspace/dto/request/get-workspace-id-field.dto';
import { CreateTaskDto } from './dto/request/create-task.dto';
import { GetTaskIdDto } from './dto/request/get-task-id.dto';
import { UpdateTaskDto } from './dto/request/update-task.dto';
import { TaskDto } from './dto/response/task.dto';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) { }

  @AddUserToContext('body')
  @Post()
  @TransformPlainToInstance(TaskDto)
  async create(
    @Req() { user }: Request,
    @Body() dto: CreateTaskDto
  ) {
    return await this.taskService.create(dto, user.id);
  }

  @AddUserToContext('query')
  @Get()
  @TransformPlainToInstance(TaskDto)
  async findInWorkspace(
    @Query() { workspaceId }: GetViewerQueryWorkspaceIdFieldDto
  ) {
    return await this.taskService.findInWorkspace(workspaceId);
  }

  @AddUserToContext('params')
  @Get(':id')
  @TransformPlainToInstance(TaskDto)
  async findOne(
    @Param() { id }: GetTaskIdDto
  ) {
    return await this.taskService.findOne(id);
  }

  @AddUserToContext('params')
  @Patch(':id')
  @TransformPlainToInstance(TaskDto)
  async update(
    @Req() { user }: Request,
    @Param() { id }: GetTaskIdDto,
    @Body() dto: UpdateTaskDto
  ) {
    return await this.taskService.update(id, dto, user.id);
  }

  @AddUserToContext('params')
  @Delete(':id')
  @TransformPlainToInstance(TaskDto)
  async remove(
    @Req() { user }: Request,
    @Param() { id }: GetTaskIdDto
  ) {
    return await this.taskService.remove(id, user.id);
  }
}
