import { Controller, HttpCode, Patch, Query, Req } from '@nestjs/common';
import { ApiNoContentResponse, ApiOperation } from '@nestjs/swagger';
import { HttpStatusCode } from 'axios';
import { Request } from 'express';
import { GetTaskOrWorkspaceIdDto } from './dto/request/get-task-or-workspace-id.dto';
import { UserViewedTasksService } from './user-viewed-tasks.service';

@Controller('user-viewed-tasks')
export class UserViewedTasksController {
    constructor(private readonly userViewedMessagesService: UserViewedTasksService) { }

    @ApiOperation({ operationId: 'viewMessages' })
    @Patch()
    @HttpCode(HttpStatusCode.NoContent)
    @ApiNoContentResponse()
    async viewMessages(
        @Req() { user }: Request,
        @Query() { taskId, workspaceId }: GetTaskOrWorkspaceIdDto,
    ) {
        return await this.userViewedMessagesService.viewMessages(user.id, taskId, workspaceId);
    }
}
