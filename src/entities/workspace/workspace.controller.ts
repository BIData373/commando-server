import { Body, Controller, Delete, Get, Param, Patch, Post, Req, UseGuards } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiParam } from '@nestjs/swagger';
import { Request } from 'express';
import { TransformPlainToInstance } from 'class-transformer';
import { BIGuard } from '../../common/guards/bi.guard';
import { CreateWorkspaceDto } from './dto/request/create-workspace.dto';
import { GetManagerWorkspaceIdDto, GetWorkspaceIdDto } from './dto/request/get-workspace-id.dto';
import { UpdateWorkspaceDto } from './dto/request/update-workspace.dto';
import { WorkspaceDto } from './dto/response/workspace.dto';
import { WorkspaceService } from './workspace.service';

@Controller('workspace')
export class WorkspaceController {
  constructor(private readonly workspaceService: WorkspaceService) { }

  @UseGuards(BIGuard)
  @ApiOperation({ operationId: 'createWorkspace' })
  @ApiBody({ type: CreateWorkspaceDto })
  @Post()
  @ApiCreatedResponse({ type: WorkspaceDto })
  @TransformPlainToInstance(WorkspaceDto)
  async create(
    @Req() { user }: Request,
    @Body() dto: CreateWorkspaceDto
  ) {
    return await this.workspaceService.create(dto, user.id);
  }

  @ApiOperation({ operationId: 'listWorkspaces' })
  @Get()
  @ApiOkResponse({ type: [WorkspaceDto] })
  @TransformPlainToInstance(WorkspaceDto)
  async findAll() {
    return await this.workspaceService.findAll();
  }

  @ApiOperation({ operationId: 'getWorkspace' })
  @ApiParam({ name: 'id', type: Number })
  @Get(':id')
  @ApiOkResponse({ type: WorkspaceDto })
  @TransformPlainToInstance(WorkspaceDto)
  async findOne(
    @Param() { id }: GetWorkspaceIdDto
  ) {
    return await this.workspaceService.findOne(id);
  }

  @ApiOperation({ operationId: 'updateWorkspace' })
  @ApiParam({ name: 'id', type: Number })
  @ApiBody({ type: UpdateWorkspaceDto })
  @Patch(':id')
  @ApiOkResponse({ type: WorkspaceDto })
  @TransformPlainToInstance(WorkspaceDto)
  async update(
    @Req() { user }: Request,
    @Param() { id }: GetManagerWorkspaceIdDto,
    @Body() dto: UpdateWorkspaceDto
  ) {
    return await this.workspaceService.update(id, dto, user.id);
  }

  @ApiOperation({ operationId: 'deleteWorkspace' })
  @ApiParam({ name: 'id', type: Number })
  @Delete(':id')
  @ApiOkResponse({ type: WorkspaceDto })
  @TransformPlainToInstance(WorkspaceDto)
  async remove(
    @Req() { user }: Request,
    @Param() { id }: GetManagerWorkspaceIdDto
  ) {
    return await this.workspaceService.remove(id, user.id);
  }
}
