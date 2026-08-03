import {
    Body,
    Controller,
    Get,
    Patch,
    Query,
    Req
} from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiOperation, ApiQuery } from '@nestjs/swagger';
import { TransformPlainToInstance } from 'class-transformer';
import type { Request } from 'express';
import { GetOptionalViewerWorkspaceIdFieldDto, GetViewerWorkspaceIdFieldDto } from '../workspace/dto/request/get-workspace-id-field.dto';
import { UpsertUserViewDto } from './dto/request/upsert-user-view.dto';
import { UserViewDto } from './dto/response/user-view.dto';
import { UserViewService } from './user-view.service';


@Controller('user-views')
export class UserViewController {
    constructor(
        private readonly userViewsService: UserViewService,
    ) { }

    @ApiOperation({ operationId: 'getUserView' })
    @ApiQuery({ type: GetOptionalViewerWorkspaceIdFieldDto })
    @Get()
    @ApiOkResponse({ type: UserViewDto })
    @TransformPlainToInstance(UserViewDto)
    async findOne(
        @Req() { user }: Request,
        @Query() { workspaceId }: GetOptionalViewerWorkspaceIdFieldDto
    ) {
        return await this.userViewsService.findOne(user.id, workspaceId);
    }

    @ApiOperation({ operationId: 'upsertUserView' })
    @ApiBody({ type: UpsertUserViewDto })
    @Patch()
    @ApiOkResponse({ type: UserViewDto })
    @TransformPlainToInstance(UserViewDto)
    async upsert(
        @Req() { user }: Request,
        @Body() dto: UpsertUserViewDto,
    ) {
        return await this.userViewsService.upsert(user.id, dto);
    }
}