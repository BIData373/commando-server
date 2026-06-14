import { Body, Controller, Delete, Get, Param, Patch, Post, Query, Req, UseInterceptors } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiParam, ApiQuery } from '@nestjs/swagger';
import { TransformPlainToInstance } from 'class-transformer';
import { Request } from 'express';
import { AddDtosToContext } from '../../common/interceptors/add-dtos-to-context.interceptor';
import { GetViewerWorkspaceIdFieldDto } from '../workspace/dto/request/get-workspace-id-field.dto';
import { CreateTaskDto } from './dto/request/create-task.dto';
import { GetManagerTaskIdDto, GetViewerTaskIdDto } from './dto/request/get-task-id.dto';
import { UpdateTaskDto } from './dto/request/update-task.dto';
import { TaskWithWorkspaceDto } from './dto/response/task-with-workspace.dto';
import { TaskDto } from './dto/response/task.dto';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) { }

  // FIX Add to history
  @ApiOperation({ operationId: 'createTask' })
  @ApiBody({ type: CreateTaskDto })
  @Post()
  @ApiCreatedResponse({ type: TaskWithWorkspaceDto })
  @TransformPlainToInstance(TaskWithWorkspaceDto)
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
    @Query() { context: { workspace, user } }: GetViewerWorkspaceIdFieldDto
  ) {
    return await this.taskService.findInWorkspace(workspace, user);
  }

  @ApiOperation({ operationId: 'listPersonalTasks' })
  @Get('personal')
  @ApiOkResponse({ type: [TaskWithWorkspaceDto] })
  @TransformPlainToInstance(TaskWithWorkspaceDto)
  async findPersonal(
    @Req() { user }: Request
  ) {
    return await this.taskService.findPersonal(user as any);
  }

  @ApiOperation({ operationId: 'getTask' })
  @ApiParam({ name: 'id', type: Number })
  @Get(':id')
  @ApiOkResponse({ type: TaskWithWorkspaceDto })
  @TransformPlainToInstance(TaskWithWorkspaceDto)
  async findOne(
    @Param() { id, context: { user } }: GetViewerTaskIdDto
  ) {
    return await this.taskService.findOne(id, user);
  }

  // FIX Add to history
  @ApiOperation({ operationId: 'updateTask' })
  @ApiParam({ name: 'id', type: Number })
  @ApiBody({ type: UpdateTaskDto })
  @UseInterceptors(
    AddDtosToContext({ from: 'params', to: 'body', dto: GetManagerTaskIdDto, field: 'task' })
  )
  @Patch(':id')
  @ApiOkResponse({ type: TaskWithWorkspaceDto })
  @TransformPlainToInstance(TaskWithWorkspaceDto)
  async update(
    @Req() { user }: Request,
    @Param() { context: { task } }: GetManagerTaskIdDto,
    @Body() dto: UpdateTaskDto
  ) {
    return await this.taskService.update(task, dto, user.id);
  }

  // FIX Add to history
  @ApiOperation({ operationId: 'deleteTask' })
  @ApiParam({ name: 'id', type: Number })
  @Delete(':id')
  @ApiOkResponse({ type: TaskWithWorkspaceDto })
  @TransformPlainToInstance(TaskWithWorkspaceDto)
  async remove(
    @Req() { user }: Request,
    @Param() { id }: GetManagerTaskIdDto
  ) {
    return await this.taskService.remove(id, user.id);
  }
}
