import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { TransformPlainToInstance } from 'class-transformer';
import { GetAssigneeIdFieldDto } from '../assignee/dto/request/get-assignee-id-field.dto';
import { GetTaskIdFieldDto } from '../task/dto/request/get-task-id-field.dto';
import { AssigneeTaskStatusService } from './assignee-task-status.service';
import { CreateAssigneeTaskStatusDto } from './dto/request/create-assignee-task-status.dto';
import { UpdateAssigneeTaskStatusDto } from './dto/request/update-assignee-task-status.dto';
import { AssigneeTaskStatusDto } from './dto/response/assignee-task-status.dto';

// FIX Guards
@Controller('assignee-task-status')
export class AssigneeTaskStatusController {
  constructor(private readonly assigneeTaskStatusService: AssigneeTaskStatusService) { }

  @Post()
  @TransformPlainToInstance(AssigneeTaskStatusDto)
  async create(
    @Body() dto: CreateAssigneeTaskStatusDto
  ) {
    return await this.assigneeTaskStatusService.create(dto);
  }

  @Get()
  @TransformPlainToInstance(AssigneeTaskStatusDto)
  async findAll() {
    return await this.assigneeTaskStatusService.findAll();
  }

  @Get(':taskId/:assigneeId')
  @TransformPlainToInstance(AssigneeTaskStatusDto)
  async findOne(
    @Param() { assigneeId }: GetAssigneeIdFieldDto,
    @Param() { taskId }: GetTaskIdFieldDto
  ) {
    return await this.assigneeTaskStatusService.findOne(taskId, assigneeId);
  }

  @Patch(':taskId/:assigneeId')
  @TransformPlainToInstance(AssigneeTaskStatusDto)
  async update(
    @Param() { assigneeId }: GetAssigneeIdFieldDto,
    @Param() { taskId }: GetTaskIdFieldDto,
    @Body() dto: UpdateAssigneeTaskStatusDto
  ) {
    return await this.assigneeTaskStatusService.update(taskId, assigneeId, dto);
  }

  @Delete(':taskId/:assigneeId')
  @TransformPlainToInstance(AssigneeTaskStatusDto)
  async remove(
    @Param() { assigneeId }: GetAssigneeIdFieldDto,
    @Param() { taskId }: GetTaskIdFieldDto
  ) {
    return await this.assigneeTaskStatusService.remove(taskId, assigneeId);
  }
}