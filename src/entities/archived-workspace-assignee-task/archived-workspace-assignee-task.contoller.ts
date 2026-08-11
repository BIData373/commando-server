import { Controller, HttpCode, Param, Patch, Query } from '@nestjs/common';
import { ApiNoContentResponse, ApiOperation, ApiParam } from '@nestjs/swagger';
import { HttpStatusCode } from 'axios';
import { GetOptionalManagerAssigneeIdFieldDto } from '../assignee/dto/request/get-assignee-id-field.dto';
import { GetManagerTaskIdDto } from '../task/dto/request/get-task-id.dto';
import { ArchivedWorkspaceAssigneeService } from './archived-workspace-assignee-task.service';

@Controller('archived-workspace-assignee-task')
export class ArchivedWorkspaceAssigneeController {
  constructor(private readonly workspaceTaskArchivesService: ArchivedWorkspaceAssigneeService) { }

  @ApiOperation({ operationId: 'toggleWorkspaceTaskArchive' })
  @ApiParam({ name: 'id', type: Number })
  @Patch(':id')
  @HttpCode(HttpStatusCode.NoContent)
  @ApiNoContentResponse()
  async toggleWorkspace(
    @Param() { context: { task } }: GetManagerTaskIdDto,
    @Query() { assigneeId }: GetOptionalManagerAssigneeIdFieldDto
  ) {
    return await this.workspaceTaskArchivesService.toggle(task.id, assigneeId)
  }
}
