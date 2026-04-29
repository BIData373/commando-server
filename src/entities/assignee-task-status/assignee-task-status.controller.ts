import { Body, Controller, Delete, Get, Param, Put } from '@nestjs/common';
import { TransformPlainToInstance } from 'class-transformer';
import { GetManagerAssigneeIdFieldDto } from '../assignee/dto/request/get-assignee-id-field.dto';
import { GetManagerTaskIdFieldDto } from '../task/dto/request/get-task-id-field.dto';
import { AssigneeTaskStatusService } from './assignee-task-status.service';
import { UpdateAssigneeTaskStatusDto } from './dto/request/update-assignee-task-status.dto';
import { AssigneeTaskStatusDto } from './dto/response/assignee-task-status.dto';

// FIX Remove controller, move to tasks?
@Controller('assignee-task-status')
export class AssigneeTaskStatusController {
  constructor(private readonly assigneeTaskStatusService: AssigneeTaskStatusService) { }

  // FIX Filter by task? Guard
  @Get()
  @TransformPlainToInstance(AssigneeTaskStatusDto)
  async findAll() {
    return await this.assigneeTaskStatusService.findAll();
  }

  @Put()
  @TransformPlainToInstance(AssigneeTaskStatusDto)
  async update(
    @Body() dto: UpdateAssigneeTaskStatusDto
  ) {
    return await this.assigneeTaskStatusService.update(dto);
  }

  @Delete(':taskId/:assigneeId')
  @TransformPlainToInstance(AssigneeTaskStatusDto)
  async remove(
    @Param() { assigneeId }: GetManagerAssigneeIdFieldDto,
    @Param() { taskId }: GetManagerTaskIdFieldDto
  ) {
    return await this.assigneeTaskStatusService.remove(taskId, assigneeId);
  }
}