import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiParam, ApiQuery } from '@nestjs/swagger';
import { TransformPlainToInstance } from 'class-transformer';
import { GetViewerWorkspaceIdFieldDto } from '../workspace/dto/request/get-workspace-id-field.dto';
import { CreateWorkspaceStatusDto } from './dto/request/create-workspace-status.dto';
import { GetManagerWorkspaceStatusIdDto, GetViewerWorkspaceStatusIdDto } from './dto/request/get-workspace-status-id.dto';
import { UpdateWorkspaceStatusDto } from './dto/request/update-workspace-status.dto';
import { WorkspaceStatusDto } from './dto/response/workspace-status.dto';
import { WorkspaceStatusService } from './workspace-status.service';

@Controller('workspace-status')
export class WorkspaceStatusController {
  constructor(private readonly workspaceStatusService: WorkspaceStatusService) { }

  @ApiOperation({ operationId: 'createWorkspaceStatus' })
  @ApiBody({ type: CreateWorkspaceStatusDto })
  @Post()
  @ApiCreatedResponse({ type: WorkspaceStatusDto })
  @TransformPlainToInstance(WorkspaceStatusDto)
  async create(
    @Body() dto: CreateWorkspaceStatusDto
  ) {
    return await this.workspaceStatusService.create(dto);
  }

  @ApiOperation({ operationId: 'listWorkspaceStatuses' })
  @ApiQuery({ type: GetViewerWorkspaceIdFieldDto })
  @Get()
  @ApiOkResponse({ type: WorkspaceStatusDto })
  @TransformPlainToInstance(WorkspaceStatusDto)
  async findInWorkspace(
    @Query() { workspaceId }: GetViewerWorkspaceIdFieldDto
  ) {
    return await this.workspaceStatusService.findInWorkspace(workspaceId);
  }

  @ApiOperation({ operationId: 'getWorkspaceStatus' })
  @ApiParam({ name: 'id', type: Number })
  @Get(':id')
  @ApiOkResponse({ type: WorkspaceStatusDto })
  @TransformPlainToInstance(WorkspaceStatusDto)
  async findOne(
    @Param() { id }: GetViewerWorkspaceStatusIdDto
  ) {
    return await this.workspaceStatusService.findOne(id);
  }

  @ApiOperation({ operationId: 'patchWorkspaceStatus' })
  @ApiParam({ name: 'id', type: Number })
  @ApiBody({ type: UpdateWorkspaceStatusDto })
  @Patch(':id')
  @TransformPlainToInstance(WorkspaceStatusDto)
  @ApiOkResponse({ type: WorkspaceStatusDto })
  async update(
    @Param() { id }: GetManagerWorkspaceStatusIdDto,
    @Body() dto: UpdateWorkspaceStatusDto
  ) {
    return await this.workspaceStatusService.update(id, dto);
  }

  @ApiOperation({ operationId: 'deleteWorkspaceStatus' })
  @ApiParam({ name: 'id', type: Number })
  @Delete(':id')
  @ApiOkResponse({ type: WorkspaceStatusDto })
  @TransformPlainToInstance(WorkspaceStatusDto)
  async remove(
    @Param() { id }: GetManagerWorkspaceStatusIdDto
  ) {
    return await this.workspaceStatusService.remove(id);
  }
}
