import { Controller, HttpCode, Param, Patch, Query } from '@nestjs/common';
import { ApiNoContentResponse, ApiOperation, ApiParam, ApiQuery } from '@nestjs/swagger';
import { HttpStatusCode } from 'axios';
import { GetAssignedAssigneeIdFieldDto } from '../assignee/dto/request/get-assignee-id-field.dto';
import { GetViewerTaskIdDto } from '../task/dto/request/get-task-id.dto';
import { ArchivedUserAssigneeTaskService } from './archived-user-assignee-task.service';

@Controller('archived-user-assignee-task')
export class ArchivedUserAssigneeTaskController {
  constructor(private readonly userTaskArchivesService: ArchivedUserAssigneeTaskService) { }

  @ApiOperation({ operationId: 'toggleUserTaskArchive' })
  @ApiParam({ name: 'id', type: Number })
  @Patch(':id')
  @HttpCode(HttpStatusCode.NoContent)
  @ApiNoContentResponse()
  async togglePersonal(
    // FIX Make task dto for this route more specific - allow getting task only if its in your personal space with the given assignee
    @Param() { context: { task, user } }: GetViewerTaskIdDto,
    @Query() { assigneeId }: GetAssignedAssigneeIdFieldDto
  ) {
    return await this.userTaskArchivesService.toggle(task.id, user.id, assigneeId);
  }
}
