import { Controller, Get, Param, Patch, Query, Req } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiParam } from '@nestjs/swagger';
import { TransformPlainToInstance } from 'class-transformer';
import { Request } from 'express';
import { TaskRowWithWorkspaceDto } from '../task/dto/response/task-row-with-workspace.dto';
import { ArchivedUserAssigneeTaskService } from './archived-user-assignee-task.service';
import { GetTaskArchiveTaskIdDto } from './dto/request/get-task-id.dto';
import { GetOptionalAssiggneeIdDto } from './dto/request/get-assignee-id.dto';

@Controller('archived-user-assignee-task')
export class ArchivedUserAssigneeTaskController {
  constructor(private readonly userTaskArchivesService: ArchivedUserAssigneeTaskService) { }

  @ApiOperation({ operationId: 'listArchivedTasks' })
  @Get()
  @ApiOkResponse({ type: [TaskRowWithWorkspaceDto] })
  @TransformPlainToInstance(TaskRowWithWorkspaceDto)
  async findAll(
    @Req() { user }: Request
  ) {
    return await this.userTaskArchivesService.findAll(user)
  }

  @ApiOperation({ operationId: 'toggleUserTaskArchive' })
  @ApiParam({ name: 'id', type: Number })
  @Patch(':id')
  async togglePersonal(
    @Param() { context: { task, user } }: GetTaskArchiveTaskIdDto,
    @Query() { assigneeId }: GetOptionalAssiggneeIdDto
  ) {
    return await this.userTaskArchivesService.toggle(task.id, user.id, assigneeId);
  }


}
