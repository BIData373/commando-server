import { Body, Controller, Delete, Get, Param, Patch, Post, Query, Req } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiParam, ApiQuery } from '@nestjs/swagger';
import { TransformPlainToInstance } from 'class-transformer';
import { Request } from 'express';
import { GetViewerWorkspaceIdFieldDto } from '../workspace/dto/request/get-workspace-id-field.dto';
import { AssigneeService } from './assignee.service';
import { CreateAssigneeDto } from './dto/request/create-assignee.dto';
import { GetManagerAssigneeIdDto, GetViewerAssigneeIdDto } from './dto/request/get-assignee-id.dto';
import { UpdateAssigneeDto } from './dto/request/update-assignee.dto';
import { AssigneeDto } from './dto/response/assignee.dto';

@Controller('assignee')
export class AssigneeController {
  constructor(private readonly assigneeService: AssigneeService) { }

  @ApiOperation({ operationId: 'createAssignee' })
  @ApiBody({ type: CreateAssigneeDto })
  @Post()
  @ApiCreatedResponse({ type: AssigneeDto })
  @TransformPlainToInstance(AssigneeDto)
  async create(
    @Req() { user }: Request,
    @Body() dto: CreateAssigneeDto
  ) {
    return await this.assigneeService.create(dto, user.id);
  }

  @ApiOperation({ operationId: 'listAssignees' })
  @ApiQuery({ type: GetViewerWorkspaceIdFieldDto })
  @Get()
  @ApiOkResponse({ type: [AssigneeDto] })
  @TransformPlainToInstance(AssigneeDto)
  async findInWorkspace(
    @Query() { workspaceId }: GetViewerWorkspaceIdFieldDto
  ) {
    return await this.assigneeService.findInWorkspace(workspaceId);
  }

  @ApiOperation({ operationId: 'getAssignee' })
  @ApiParam({ name: 'id', type: Number })
  @Get(':id')
  @ApiOkResponse({ type: AssigneeDto })
  @TransformPlainToInstance(AssigneeDto)
  async findOne(
    @Param() { id }: GetViewerAssigneeIdDto
  ) {
    return await this.assigneeService.findOne(id);
  }

  @ApiOperation({ operationId: 'updateAssignee' })
  @ApiParam({ name: 'id', type: Number })
  @ApiBody({ type: UpdateAssigneeDto })
  @Patch(':id')
  @ApiOkResponse({ type: AssigneeDto })
  @TransformPlainToInstance(AssigneeDto)
  async update(
    @Req() { user }: Request,
    @Param() { id }: GetManagerAssigneeIdDto,
    @Body() dto: UpdateAssigneeDto
  ) {
    return await this.assigneeService.update(id, dto, user.id);
  }

  @ApiOperation({ operationId: 'deleteAssignee' })
  @ApiParam({ name: 'id', type: Number })
  @Delete(':id')
  @ApiOkResponse({ type: AssigneeDto })
  @TransformPlainToInstance(AssigneeDto)
  async remove(
    @Req() { user }: Request,
    @Param() { id }: GetManagerAssigneeIdDto
  ) {
    return await this.assigneeService.remove(id, user.id);
  }
}
