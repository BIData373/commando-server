import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { CreateWorkspaceStatusDto } from './dto/request/create-workspace-status.dto';
import { DeleteWorkspaceStatusDto } from './dto/request/delete-workspace-status.dto';
import { UpdateWorkspaceStatusDto } from './dto/request/update-workspace-status.dto';
import { WorkspaceStatusDto } from './dto/response/workspace-status.dto';
import { WorkspaceStatusService } from './workspace-status.service';

// FIX Guards
// FIX Use @TransfromPlainToInstance instead of plainToInstance
@Controller('workspace-status')
export class WorkspaceStatusController {
  constructor(private readonly workspaceStatusService: WorkspaceStatusService) {}

  @Post()
  async create(@Body() dto: CreateWorkspaceStatusDto): Promise<WorkspaceStatusDto> {
    const record = await this.workspaceStatusService.create(dto);
    return plainToInstance(WorkspaceStatusDto, record);
  }

  @Get()
  async findAll(): Promise<WorkspaceStatusDto[]> {
    const records = await this.workspaceStatusService.findAll();
    return plainToInstance(WorkspaceStatusDto, records);
  }

  // FIX Use GetIdDto
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<WorkspaceStatusDto> {
    const record = await this.workspaceStatusService.findOne(id);
    return plainToInstance(WorkspaceStatusDto, record);
  }

  // FIX Use GetIdDto
  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateWorkspaceStatusDto,
  ): Promise<WorkspaceStatusDto> {
    const record = await this.workspaceStatusService.update(id, dto);
    return plainToInstance(WorkspaceStatusDto, record);
  }

  // FIX Use GetIdDto
  @Delete(':id')
  async remove(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: DeleteWorkspaceStatusDto,
  ): Promise<WorkspaceStatusDto> {
    const record = await this.workspaceStatusService.remove(dto.id);
    return plainToInstance(WorkspaceStatusDto, record);
  }
}
