import { Body, Controller, Delete, Get, Param, Patch, Post, Query, Req } from '@nestjs/common';
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

  @Post()
  @TransformPlainToInstance(AssigneeDto)
  async create(
    @Req() { user }: Request,
    @Body() dto: CreateAssigneeDto
  ) {
    return await this.assigneeService.create(dto, user.id);
  }

  @Get()
  @TransformPlainToInstance(AssigneeDto)
  async findInWorkspace(
    @Query() { workspaceId }: GetViewerWorkspaceIdFieldDto
  ) {
    return await this.assigneeService.findInWorkspace(workspaceId);
  }

  @Get(':id')
  @TransformPlainToInstance(AssigneeDto)
  async findOne(
    @Param() { id }: GetViewerAssigneeIdDto
  ) {
    return await this.assigneeService.findOne(id);
  }

  @Patch(':id')
  @TransformPlainToInstance(AssigneeDto)
  async update(
    @Req() { user }: Request,
    @Param() { id }: GetManagerAssigneeIdDto,
    @Body() dto: UpdateAssigneeDto
  ) {
    return await this.assigneeService.update(id, dto, user.id);
  }

  @Delete(':id')
  @TransformPlainToInstance(AssigneeDto)
  async remove(
    @Req() { user }: Request,
    @Param() { id }: GetManagerAssigneeIdDto
  ) {
    return await this.assigneeService.remove(id, user.id);
  }
}
