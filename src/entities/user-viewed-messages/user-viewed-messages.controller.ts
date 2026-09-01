import { Controller, HttpCode, Patch, Query, Req } from '@nestjs/common';
import { ApiNoContentResponse, ApiOperation } from '@nestjs/swagger';
import { HttpStatusCode } from 'axios';
import { Request } from 'express';
import { GetTaskOrWorkspaceIdDto } from './dto/request/get-task-or-workspace-id.dto';
import { UserViewedMessagesService } from './user-viewed-messages.service';

@Controller('user-viewed-messages')
export class UserViewedMessageController {
    constructor(private readonly userViewedMessagesService: UserViewedMessagesService) { }

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
