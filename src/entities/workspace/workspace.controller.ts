import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { TransformPlainToInstance } from 'class-transformer';
import { CreateWorkspaceDto } from './dto/request/create-workspace.dto';
import { DeleteWorkspaceDto } from './dto/request/delete-workspace.dto';
import { GetWorkspaceIdDto } from './dto/request/get-workspace-id.dto';
import { UpdateWorkspaceDto } from './dto/request/update-workspace.dto';
import { WorkspaceDto } from './dto/response/workspace.dto';
import { WorkspaceService } from './workspace.service';

// FIX Guards
@Controller('workspace')
export class WorkspaceController {
  constructor(private readonly workspaceService: WorkspaceService) { }

  @Post()
  @TransformPlainToInstance(WorkspaceDto)
  async create(
    @Body() dto: CreateWorkspaceDto
  ) {
    return await this.workspaceService.create(dto);
  }

  @Get()
  @TransformPlainToInstance(WorkspaceDto)
  async findAll() {
    return await this.workspaceService.findAll();
  }

  // FIX Use GetIdDto
  @Get(':id')
  @TransformPlainToInstance(WorkspaceDto)
  async findOne(
    @Param() { id }: GetWorkspaceIdDto
  ) {
    return await this.workspaceService.findOne(id);
  }

  // FIX Use GetIdDto
  @Patch(':id')
  @TransformPlainToInstance(WorkspaceDto)
  async update(
    @Param() { id }: GetWorkspaceIdDto,
    @Body() dto: UpdateWorkspaceDto,
  ) {
    return await this.workspaceService.update(id, dto);
  }

  // FIX Use GetIdDto
  @Delete(':id')
  @TransformPlainToInstance(WorkspaceDto)
  async remove(
    @Param() { id }: GetWorkspaceIdDto,
    @Body() dto: DeleteWorkspaceDto,
  ) {
    return await this.workspaceService.remove(dto.id, dto.deletedBy);
  }
}
