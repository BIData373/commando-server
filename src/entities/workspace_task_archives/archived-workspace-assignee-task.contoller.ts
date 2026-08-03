import { Controller, Get, Param, Patch, Query } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiParam } from '@nestjs/swagger';
import { TransformPlainToInstance } from 'class-transformer';
import { GetViewerWorkspaceIdFieldDto } from '../workspace/dto/request/get-workspace-id-field.dto';
import { TaskRowWithWorkspaceDto } from '../task/dto/response/task-row-with-workspace.dto';
import { ArchivedWorkspaceAssigneeService } from './archived-workspace-assignee-task.service';
import { GetManagerArchiveTaskIdDto } from '../user_task_archives/dto/request/get-task-id.dto';
import { GetOptionalAssiggneeIdDto } from '../user_task_archives/dto/request/get-assignee-id.dto';

@Controller('archived-workspace-assignee-task')
export class ArchivedWorkspaceAssigneeController {
  constructor(private readonly workspaceTaskArchivesService: ArchivedWorkspaceAssigneeService) { }

  @ApiOperation({ operationId: 'listWorkspaceArchivedTasks' })
  @Get()
  @ApiOkResponse({ type: [TaskRowWithWorkspaceDto] })
  @TransformPlainToInstance(TaskRowWithWorkspaceDto)
  async findWorkspaceTasks(
    @Query() { context: { workspace, user } }: GetViewerWorkspaceIdFieldDto
  ) {
    return await this.workspaceTaskArchivesService.findAll(workspace, user)
  }

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
