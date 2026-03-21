import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { TransformPlainToInstance } from 'class-transformer';
import { CreateWorkspaceStatusDto } from './dto/request/create-workspace-status.dto';
import { DeleteWorkspaceStatusDto } from './dto/request/delete-workspace-status.dto';
import { UpdateWorkspaceStatusDto } from './dto/request/update-workspace-status.dto';
import { WorkspaceStatusDto } from './dto/response/workspace-status.dto';
import { WorkspaceStatusService } from './workspace-status.service';

// FIX Guards
@Controller('workspace-status')
export class WorkspaceStatusController {
  constructor(private readonly workspaceStatusService: WorkspaceStatusService) { }

  @Post()
  @TransformPlainToInstance(WorkspaceStatusDto)
  async create(@Body() dto: CreateWorkspaceStatusDto) {
    return await this.workspaceStatusService.create(dto);
  }

  @Get()
  @TransformPlainToInstance(WorkspaceStatusDto)
  async findAll() {
    return await this.workspaceStatusService.findAll();
  }

  // FIX Use GetIdDto
  @Get(':id')
  @TransformPlainToInstance(WorkspaceStatusDto)
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return await this.workspaceStatusService.findOne(id);
  }

  // FIX Use GetIdDto
  @Patch(':id')
  @TransformPlainToInstance(WorkspaceStatusDto)
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateWorkspaceStatusDto,
  ) {
    return await this.workspaceStatusService.update(id, dto);
  }

  // FIX Use GetIdDto
  @Delete(':id')
  @TransformPlainToInstance(WorkspaceStatusDto)
  async remove(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: DeleteWorkspaceStatusDto,
  ) {
    return await this.workspaceStatusService.remove(dto.id);
  }
}
