import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { CreateWorkspaceDto } from './dto/request/create-workspace.dto';
import { DeleteWorkspaceDto } from './dto/request/delete-workspace.dto';
import { UpdateWorkspaceDto } from './dto/request/update-workspace.dto';
import { WorkspaceDto } from './dto/response/workspace.dto';
import { WorkspaceService } from './workspace.service';

// FIX Guards
// FIX Use @TransfromPlainToInstance instead of plainToInstance
@Controller('workspace')
export class WorkspaceController {
  constructor(private readonly workspaceService: WorkspaceService) {}

  @Post()
  async create(@Body() dto: CreateWorkspaceDto): Promise<WorkspaceDto> {
    const record = await this.workspaceService.create(dto);
    return plainToInstance(WorkspaceDto, record);
  }

  @Get()
  async findAll(): Promise<WorkspaceDto[]> {
    const records = await this.workspaceService.findAll();
    return plainToInstance(WorkspaceDto, records);
  }

  // FIX Use GetIdDto
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<WorkspaceDto> {
    const record = await this.workspaceService.findOne(id);
    return plainToInstance(WorkspaceDto, record);
  }

  // FIX Use GetIdDto
  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateWorkspaceDto,
  ): Promise<WorkspaceDto> {
    const record = await this.workspaceService.update(id, dto);
    return plainToInstance(WorkspaceDto, record);
  }

  // FIX Use GetIdDto
  @Delete(':id')
  async remove(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: DeleteWorkspaceDto,
  ): Promise<WorkspaceDto> {
    const record = await this.workspaceService.remove(dto.id, dto.deletedBy);
    return plainToInstance(WorkspaceDto, record);
  }
}
