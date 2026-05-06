import { Body, Controller, Delete, Get, Param, Patch, Post, Query, Req } from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiOperation, ApiParam, ApiQuery } from '@nestjs/swagger';
import { TransformPlainToInstance } from 'class-transformer';
import { Request } from 'express';
import { GetViewerWorkspaceIdFieldDto } from '../workspace/dto/request/get-workspace-id-field.dto';
import { CreateTaskDto } from './dto/request/create-task.dto';
import { GetManagerTaskIdDto, GetViewerTaskIdDto } from './dto/request/get-task-id.dto';
import { UpdateTaskDto } from './dto/request/update-task.dto';
import { TaskDto } from './dto/response/task.dto';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) { }

  // FIX Add to history
  @ApiOperation({ operationId: 'createTask' })
  @ApiBody({ type: CreateTaskDto })
  @Post()
  @ApiOkResponse({ type: TaskDto })
  @TransformPlainToInstance(TaskDto)
  async create(
    @Req() { user }: Request,
    @Body() dto: CreateTaskDto
  ) {
    return await this.taskService.create(dto, user.id);
  }

  @ApiOperation({ operationId: 'listTasks' })
  @ApiQuery({ type: GetViewerWorkspaceIdFieldDto })
  @Get()
  @ApiOkResponse({ type: [TaskDto] })
  @TransformPlainToInstance(TaskDto)
  async findInWorkspace(
    @Query() { workspaceId }: GetViewerWorkspaceIdFieldDto
  ) {
    return await this.taskService.findInWorkspace(workspaceId);
  }

  @ApiOperation({ operationId: 'getTask' })
  @ApiParam({ name: 'id', type: Number })
  @Get(':id')
  @ApiOkResponse({ type: TaskDto })
  @TransformPlainToInstance(TaskDto)
  async findOne(
    @Param() { id }: GetViewerTaskIdDto
  ) {
    return await this.taskService.findOne(id);
  }

  // FIX Add to history
  @ApiOperation({ operationId: 'patchTask' })
  @ApiParam({ name: 'id', type: Number })
  @ApiBody({ type: UpdateTaskDto })
  @Patch(':id')
  @ApiOkResponse({ type: TaskDto })
  @TransformPlainToInstance(TaskDto)
  async update(
    @Req() { user }: Request,
    @Param() { id }: GetManagerTaskIdDto,
    @Body() dto: UpdateTaskDto
  ) {
    return await this.taskService.update(id, dto, user.id);
  }

  // FIX Add to history
  @ApiOperation({ operationId: 'deleteTask' })
  @ApiParam({ name: 'id', type: Number })
  @Delete(':id')
  @ApiOkResponse({ type: TaskDto })
  @TransformPlainToInstance(TaskDto)
  async remove(
    @Req() { user }: Request,
    @Param() { id }: GetManagerTaskIdDto
  ) {
    return await this.taskService.remove(id, user.id);
  }
}
