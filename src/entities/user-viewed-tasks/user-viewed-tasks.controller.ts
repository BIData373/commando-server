import { Controller, HttpCode, Patch, Query, Req } from '@nestjs/common';
import { ApiNoContentResponse, ApiOperation, ApiQuery } from '@nestjs/swagger';
import { HttpStatusCode } from 'axios';
import { Request } from 'express';
import { UserViewedTasksService } from './user-viewed-tasks.service';
import { GetViewerTaskIdFieldDto } from '../task/dto/request/get-task-id-field.dto';

@Controller('user-viewed-tasks')
export class UserViewedTasksController {
    constructor(private readonly userViewedMessagesService: UserViewedTasksService) { }

    @ApiOperation({ operationId: 'viewTasks' })
    @ApiQuery({ type: GetViewerTaskIdFieldDto })
    @Patch()
    @HttpCode(HttpStatusCode.NoContent)
    @ApiNoContentResponse()
    async viewTasks(
        @Req() { user }: Request,
        @Query() { taskId }: GetViewerTaskIdFieldDto,
    ) {
        return await this.userViewedMessagesService.viewTasks(user.id, taskId);
    }
}
