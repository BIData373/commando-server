import { Controller, HttpCode, Patch, Query } from '@nestjs/common'
import { ApiNoContentResponse, ApiOperation } from '@nestjs/swagger'
import { HttpStatusCode } from 'axios'
import { ArchivedWorkspaceAssigneeService } from './archived-workspace-assignee-task.service'
import { ToggleWorkspaceArchiveDto } from './dto/request/toggle-workspace-archive.dto'

@Controller('archived-workspace-assignee-task')
export class ArchivedWorkspaceAssigneeController {
  constructor(private readonly workspaceTaskArchivesService: ArchivedWorkspaceAssigneeService) { }

  @ApiOperation({ operationId: 'toggleWorkspaceTaskArchive' })
  @Patch()
  @HttpCode(HttpStatusCode.NoContent)
  @ApiNoContentResponse()
  async toggleWorkspace(
    @Query() { taskId, assigneeId }: ToggleWorkspaceArchiveDto
  ) {
    return await this.workspaceTaskArchivesService.toggle(taskId, assigneeId)
  }
}
