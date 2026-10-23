import { Body, Controller, Delete, Get, Param, Patch, Post, Query, Req, UseInterceptors } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiParam, ApiQuery } from '@nestjs/swagger';
import { TransformPlainToInstance } from 'class-transformer';
import { Request } from 'express';
import { CopyDtosInRequest } from '../../common/interceptors/copy-dtos-in-request.interceptor';
import { GetViewerWorkspaceIdFieldDto } from '../workspace/dto/request/get-workspace-id-field.dto';
import { AssigneeGroupService } from './assignee-group.service';
import { CreateAssigneeGroupDto } from './dto/request/create-assignee-group.dto';
import { GetManagerAssigneeGroupIdDto, GetViewerAssigneeGroupIdDto } from './dto/request/get-assignee-group-id.dto';
import { UpdateAssigneeGroupDto } from './dto/request/update-assignee-group.dto';
import { AssigneeGroupDto } from './dto/response/assignee-group.dto';

@Controller('assignee-group')
export class AssigneeGroupController {
  constructor(private readonly assigneeGroupService: AssigneeGroupService) { }

  @ApiOperation({ operationId: 'createAssigneeGroup' })
  @ApiBody({ type: CreateAssigneeGroupDto })
  @Post()
  @ApiCreatedResponse({ type: AssigneeGroupDto })
  @TransformPlainToInstance(AssigneeGroupDto)
  async create(
    @Req() { user }: Request,
    @Body() dto: CreateAssigneeGroupDto
  ) {
    return await this.assigneeGroupService.create(dto, user.id);
  }

  @ApiOperation({ operationId: 'listAssigneeGroups' })
  @ApiQuery({ type: GetViewerWorkspaceIdFieldDto })
  @Get()
  @ApiOkResponse({ type: [AssigneeGroupDto] })
  @TransformPlainToInstance(AssigneeGroupDto)
  async findInWorkspace(
    @Query() { workspaceId }: GetViewerWorkspaceIdFieldDto
  ) {
    return await this.assigneeGroupService.findInWorkspace(workspaceId);
  }

  @ApiOperation({ operationId: 'getAssigneeGroup' })
  @ApiParam({ name: 'id', type: Number })
  @Get(':id')
  @ApiOkResponse({ type: AssigneeGroupDto })
  @TransformPlainToInstance(AssigneeGroupDto)
  async findOne(
    @Param() { id }: GetViewerAssigneeGroupIdDto
  ) {
    return await this.assigneeGroupService.findOne(id);
  }

  @ApiOperation({ operationId: 'updateAssigneeGroup' })
  @ApiParam({ name: 'id', type: Number })
  @ApiBody({ type: UpdateAssigneeGroupDto })
  @UseInterceptors(
    CopyDtosInRequest<UpdateAssigneeGroupDto, GetManagerAssigneeGroupIdDto>({ from: 'params.id', to: 'body.context.assigneeGroup', dto: GetManagerAssigneeGroupIdDto })
  )
  @Patch(':id')
  @ApiOkResponse({ type: AssigneeGroupDto })
  @TransformPlainToInstance(AssigneeGroupDto)
  async update(
    @Req() { user }: Request,
    @Param() { id }: GetManagerAssigneeGroupIdDto,
    @Body() dto: UpdateAssigneeGroupDto
  ) {
    return await this.assigneeGroupService.update(id, dto, user.id);
  }

  @ApiOperation({ operationId: 'deleteAssigneeGroup' })
  @ApiParam({ name: 'id', type: Number })
  @Delete(':id')
  @ApiOkResponse({ type: AssigneeGroupDto })
  @TransformPlainToInstance(AssigneeGroupDto)
  async remove(
    @Req() { user }: Request,
    @Param() { id }: GetManagerAssigneeGroupIdDto
  ) {
    return await this.assigneeGroupService.remove(id, user.id);
  }
}
