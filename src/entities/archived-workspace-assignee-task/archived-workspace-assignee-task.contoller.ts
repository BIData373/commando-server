import { Controller, Get, Param, Patch, Query } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiParam } from '@nestjs/swagger';
import { TransformPlainToInstance } from 'class-transformer';
import { GetViewerWorkspaceIdFieldDto } from '../workspace/dto/request/get-workspace-id-field.dto';
import { TaskRowWithWorkspaceDto } from '../task/dto/response/task-row-with-workspace.dto';
import { ArchivedWorkspaceAssigneeService } from './archived-workspace-assignee-task.service';
import { GetManagerArchiveTaskIdDto } from '../archived-user-assignee-task/dto/request/get-task-id.dto';
import { GetOptionalAssiggneeIdDto } from '../archived-user-assignee-task/dto/request/get-assignee-id.dto';

@Controller('archived-workspace-assignee-task')
export class ArchivedWorkspaceAssigneeController {
  constructor(private readonly workspaceTaskArchivesService: ArchivedWorkspaceAssigneeService) { }

  @ApiOperation({ operationId: 'toggleWorkspaceTaskArchive' })
  @ApiParam({ name: 'id', type: Number })
  @Patch(':id')
  async toggleWorkspace(
    @Param() { context: { task } }: GetManagerArchiveTaskIdDto,
    @Query() { assigneeId }: GetOptionalAssiggneeIdDto
  ) {
    return await this.workspaceTaskArchivesService.toggle(task.id, assigneeId)
  }
}
