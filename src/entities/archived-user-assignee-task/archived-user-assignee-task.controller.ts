import { Controller, Param, Patch, Query } from '@nestjs/common';
import { ApiOperation, ApiParam } from '@nestjs/swagger';
import { ArchivedUserAssigneeTaskService } from './archived-user-assignee-task.service';
import { GetOptionalAssiggneeIdDto } from './dto/request/get-assignee-id.dto';
import { GetTaskArchiveTaskIdDto } from './dto/request/get-task-id.dto';

@Controller('archived-user-assignee-task')
export class ArchivedUserAssigneeTaskController {
  constructor(private readonly userTaskArchivesService: ArchivedUserAssigneeTaskService) { }

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
