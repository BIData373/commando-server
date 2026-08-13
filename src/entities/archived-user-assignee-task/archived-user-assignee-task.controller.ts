import { Controller, HttpCode, Param, Patch, Query, UseInterceptors } from '@nestjs/common';
import { ApiNoContentResponse, ApiOperation, ApiParam } from '@nestjs/swagger';
import { HttpStatusCode } from 'axios';
import { CopyDtosInRequest } from '../../common/interceptors/copy-dtos-in-request.interceptor';
import { GetAssignedAssigneeIdFieldDto } from '../assignee/dto/request/get-assignee-id-field.dto';
import { GetViewerTaskIdDto } from '../task/dto/request/get-task-id.dto';
import { ArchivedUserAssigneeTaskService } from './archived-user-assignee-task.service';

@Controller('archived-user-assignee-task')
export class ArchivedUserAssigneeTaskController {
  constructor(private readonly userTaskArchivesService: ArchivedUserAssigneeTaskService) { }

  @ApiOperation({ operationId: 'toggleUserTaskArchive' })
  @ApiParam({ name: 'id', type: Number })
  @UseInterceptors(
    CopyDtosInRequest<GetAssignedAssigneeIdFieldDto, GetViewerTaskIdDto>({ from: 'params.id', to: 'query.context.task', dto: GetViewerTaskIdDto })
  )
  @Patch(':id')
  @HttpCode(HttpStatusCode.NoContent)
  @ApiNoContentResponse()
  async togglePersonal(
    @Param() { context: { task, user } }: GetViewerTaskIdDto,
    @Query() { assigneeId }: GetAssignedAssigneeIdFieldDto
  ) {
    return await this.userTaskArchivesService.toggle(task.id, user.id, assigneeId);
  }
}
