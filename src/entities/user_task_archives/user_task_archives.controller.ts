import { Controller, Get, Param, Patch, Query, Req } from '@nestjs/common'; // Req kept for findAll/findWorkspaceTasks
import { ApiOkResponse, ApiOperation, ApiParam } from '@nestjs/swagger';
import { TransformPlainToInstance } from 'class-transformer';
import { Request } from 'express';
import { UserTaskArchive } from './dto/response/user-task-archive.dto';
import { UserTaskArchivesService } from './user_task_archives.service';
import { GetTaskArchiveTaskIdDto } from './dto/request/get-task-id.dto';
import { GetAssiggneeIdDto } from './dto/request/get-assignee-id.dto';

@Controller('user-task-archives')
export class UserTaskArchivesController {
  constructor(private readonly userTaskArchivesService: UserTaskArchivesService) { }

  @ApiOperation({ operationId: 'listArchivedTasks' })
  @Get()
  @ApiOkResponse({ type: [UserTaskArchive] })
  @TransformPlainToInstance(UserTaskArchive)
  async findAll(
    @Req() { user }: Request
  ) {
    return await this.userTaskArchivesService.findAll(user)
  }

  @ApiOperation({ operationId: 'toggleUserTaskArchive' })
  @ApiParam({ name: 'id', type: Number })
  @Patch(':id')
  @ApiOkResponse({ type: [UserTaskArchive] })
  @TransformPlainToInstance(UserTaskArchive)
  async togglePersonal(
    @Param() { context: { task, user } }: GetTaskArchiveTaskIdDto,
    @Query() { assigneeId }: GetAssiggneeIdDto
  ) {
    return await this.userTaskArchivesService.toggle(task.id, user.id, assigneeId);
  }


}
