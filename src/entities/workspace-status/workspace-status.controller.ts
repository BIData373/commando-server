import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
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

  @Post()
  @TransformPlainToInstance(WorkspaceStatusDto)
  async create(
    @Body() dto: CreateWorkspaceStatusDto
  ) {
    return await this.workspaceStatusService.create(dto);
  }

  @Get()
  @TransformPlainToInstance(WorkspaceStatusDto)
  async findInWorkspace(
    @Query() { workspaceId }: GetViewerWorkspaceIdFieldDto
  ) {
    return await this.workspaceStatusService.findInWorkspace(workspaceId);
  }

  @Get(':id')
  @TransformPlainToInstance(WorkspaceStatusDto)
  async findOne(
    @Param() { id }: GetViewerWorkspaceStatusIdDto
  ) {
    return await this.workspaceStatusService.findOne(id);
  }

  @TransformPlainToInstance(WorkspaceStatusDto)
  @Patch(':id')
  async update(
    @Param() { id }: GetManagerWorkspaceStatusIdDto,
    @Body() dto: UpdateWorkspaceStatusDto,
  ) {
    return await this.workspaceStatusService.update(id, dto);
  }

  @Delete(':id')
  @TransformPlainToInstance(WorkspaceStatusDto)
  async remove(
    @Param('id', ParseIntPipe) id: number,
  ) {
    return await this.workspaceStatusService.remove(id);
  }
}
