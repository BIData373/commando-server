import { Controller, HttpCode, Patch, Query, Req } from '@nestjs/common'
import { ApiNoContentResponse, ApiOperation } from '@nestjs/swagger'
import { HttpStatusCode } from 'axios'
import { Request } from 'express'
import { ArchivedUserAssigneeTaskService } from './archived-user-assignee-task.service'
import { ToggleUserArchiveDto } from './dto/request/toggle-user-archive.dto'

@Controller('archived-user-assignee-task')
export class ArchivedUserAssigneeTaskController {
  constructor(private readonly userTaskArchivesService: ArchivedUserAssigneeTaskService) { }

  @ApiOperation({ operationId: 'toggleUserTaskArchive' })
  @Patch()
  @HttpCode(HttpStatusCode.NoContent)
  @ApiNoContentResponse()
  async togglePersonal(
    @Req() { user }: Request,
    @Query() { taskId, assigneeId }: ToggleUserArchiveDto
  ) {
    return await this.userTaskArchivesService.toggle(taskId, user.id, assigneeId)
  }
}
