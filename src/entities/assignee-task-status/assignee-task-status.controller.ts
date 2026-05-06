import { Body, Controller, Delete, Get, Param, Put } from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiOperation, ApiParam } from '@nestjs/swagger';
import { TransformPlainToInstance } from 'class-transformer';
import { GetManagerAssigneeIdFieldDto } from '../assignee/dto/request/get-assignee-id-field.dto';
import { GetManagerTaskIdFieldDto, GetViewerTaskIdFieldDto } from '../task/dto/request/get-task-id-field.dto';
import { AssigneeTaskStatusService } from './assignee-task-status.service';
import { UpdateAssigneeTaskStatusDto } from './dto/request/update-assignee-task-status.dto';
import { AssigneeTaskStatusDto } from './dto/response/assignee-task-status.dto';

@Controller('assignee-task-status')
export class AssigneeTaskStatusController {
  constructor(private readonly assigneeTaskStatusService: AssigneeTaskStatusService) { }

  @ApiOperation({ operationId: 'listAssigneeTaskStatuses' })
  @ApiParam({ name: 'taskId', type: Number })
  @Get(':taskId')
  @ApiOkResponse({ type: [AssigneeTaskStatusDto] })
  @TransformPlainToInstance(AssigneeTaskStatusDto)
  async findInTask(
    @Param() { taskId }: GetViewerTaskIdFieldDto
  ) {
    return await this.assigneeTaskStatusService.findInTask(taskId);
  }

  @ApiOperation({ operationId: 'putAssigneeTaskStatus' })
  @ApiBody({ type: UpdateAssigneeTaskStatusDto })
  @Put()
  @ApiOkResponse({ type: AssigneeTaskStatusDto })
  @TransformPlainToInstance(AssigneeTaskStatusDto)
  async upsert(
    @Body() dto: UpdateAssigneeTaskStatusDto
  ) {
    return await this.assigneeTaskStatusService.upsert(dto);
  }

  @ApiOperation({ operationId: 'deleteAssigneeTaskStatus' })
  @ApiParam({ name: 'taskId', type: Number })
  @ApiParam({ name: 'assigneeId', type: Number })
  @Delete(':taskId/:assigneeId')
  @ApiOkResponse({ type: AssigneeTaskStatusDto })
  @TransformPlainToInstance(AssigneeTaskStatusDto)
  async remove(
    @Param() { assigneeId }: GetManagerAssigneeIdFieldDto,
    @Param() { taskId }: GetManagerTaskIdFieldDto
  ) {
    return await this.assigneeTaskStatusService.remove(taskId, assigneeId);
  }
}