import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { AssigneeTaskStatusService } from './assignee-task-status.service';
import { CreateAssigneeTaskStatusDto } from './dto/request/create-assignee-task-status.dto';
import { DeleteAssigneeTaskStatusDto } from './dto/request/delete-assignee-task-status.dto';
import { UpdateAssigneeTaskStatusDto } from './dto/request/update-assignee-task-status.dto';
import { AssigneeTaskStatusDto } from './dto/response/assignee-task-status.dto';

@Controller('assignee-task-status')
export class AssigneeTaskStatusController {
  constructor(private readonly assigneeTaskStatusService: AssigneeTaskStatusService) {}

  @Post()
  async create(@Body() dto: CreateAssigneeTaskStatusDto): Promise<AssigneeTaskStatusDto> {
    const record = await this.assigneeTaskStatusService.create(dto);
    return plainToInstance(AssigneeTaskStatusDto, record);
  }

  @Get()
  async findAll(): Promise<AssigneeTaskStatusDto[]> {
    const records = await this.assigneeTaskStatusService.findAll();
    return plainToInstance(AssigneeTaskStatusDto, records);
  }

  @Get(':taskId/:assigneeId')
  async findOne(
    @Param('taskId', ParseIntPipe) taskId: number,
    @Param('assigneeId', ParseIntPipe) assigneeId: number,
  ): Promise<AssigneeTaskStatusDto> {
    const record = await this.assigneeTaskStatusService.findOne(taskId, assigneeId);
    return plainToInstance(AssigneeTaskStatusDto, record);
  }

  @Patch(':taskId/:assigneeId')
  async update(
    @Param('taskId', ParseIntPipe) taskId: number,
    @Param('assigneeId', ParseIntPipe) assigneeId: number,
    @Body() dto: UpdateAssigneeTaskStatusDto,
  ): Promise<AssigneeTaskStatusDto> {
    const record = await this.assigneeTaskStatusService.update(taskId, assigneeId, dto);
    return plainToInstance(AssigneeTaskStatusDto, record);
  }

  @Delete(':taskId/:assigneeId')
  async remove(
    @Param('taskId', ParseIntPipe) taskId: number,
    @Param('assigneeId', ParseIntPipe) assigneeId: number,
    @Body() dto: DeleteAssigneeTaskStatusDto,
  ): Promise<AssigneeTaskStatusDto> {
    const record = await this.assigneeTaskStatusService.remove(dto.taskId, dto.assigneeId);
    return plainToInstance(AssigneeTaskStatusDto, record);
  }
}
