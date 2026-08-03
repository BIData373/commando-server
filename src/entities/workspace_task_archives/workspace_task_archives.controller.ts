import { Controller, Get, Param, Patch, Query } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiParam } from '@nestjs/swagger';
import { TransformPlainToInstance } from 'class-transformer';
import { GetViewerWorkspaceIdFieldDto } from '../workspace/dto/request/get-workspace-id-field.dto';
import { WorkspaceTaskArchive } from './dto/response/workspace-task-archive.dto';
import { WorkspaceTaskArchivesService } from './workspace_task_archives.service';
import { GetManagerArchiveTaskIdDto } from '../user_task_archives/dto/request/get-task-id.dto';
import { GetAssiggneeIdDto } from '../user_task_archives/dto/request/get-assignee-id.dto';

@Controller('workspace-task-archives')
export class WorkspaceTaskArchivesController {
  constructor(private readonly workspaceTaskArchivesService: WorkspaceTaskArchivesService) { }

  @ApiOperation({ operationId: 'listWorkspaceArchivedTasks' })
  @Get()
  @ApiOkResponse({ type: [WorkspaceTaskArchive] })
  @TransformPlainToInstance(WorkspaceTaskArchive)
  async findWorkspaceTasks(
    @Query() { context: { workspace, user } }: GetViewerWorkspaceIdFieldDto
  ) {
    return await this.workspaceTaskArchivesService.findAll(workspace, user)
  }

  @ApiOperation({ operationId: 'toggleWorkspaceTaskArchive' })
  @ApiParam({ name: 'id', type: Number })
  @Patch(':id')
  @ApiOkResponse({ type: [WorkspaceTaskArchive] })
  @TransformPlainToInstance(WorkspaceTaskArchive)
  async toggleWorkspace(
    @Param() { context: { task } }: GetManagerArchiveTaskIdDto,
    @Query() { assigneeId } : GetAssiggneeIdDto
  ) {
    return await this.workspaceTaskArchivesService.toggle(task.id, assigneeId)
  }
}
