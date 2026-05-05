import { Body, Controller, Delete, Get, Param, Patch, Post, Req, UseGuards } from '@nestjs/common';
import { TransformPlainToInstance } from 'class-transformer';
import { Request } from 'express';
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
  @Post()
  @TransformPlainToInstance(WorkspaceDto)
  async create(
    @Req() { user }: Request,
    @Body() dto: CreateWorkspaceDto
  ) {
    return await this.workspaceService.create(dto, user.id);
  }

  @Get()
  @TransformPlainToInstance(WorkspaceDto)
  async findAll() {
    return await this.workspaceService.findAll();
  }

  @Get(':id')
  @TransformPlainToInstance(WorkspaceDto)
  async findOne(
    @Param() { id }: GetWorkspaceIdDto
  ) {
    return await this.workspaceService.findOne(id);
  }

  @Patch(':id')
  @TransformPlainToInstance(WorkspaceDto)
  async update(
    @Req() { user }: Request,
    @Param() { id }: GetManagerWorkspaceIdDto,
    @Body() dto: UpdateWorkspaceDto
  ) {
    return await this.workspaceService.update(id, dto, user.id);
  }

  @Delete(':id')
  @TransformPlainToInstance(WorkspaceDto)
  async remove(
    @Req() { user }: Request,
    @Param() { id }: GetManagerWorkspaceIdDto
  ) {
    return await this.workspaceService.remove(id, user.id);
  }
}
