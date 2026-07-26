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
import { GetWorkspaceIdFieldDto } from '../workspace/dto/request/get-workspace-id-field.dto';
import { UpsertUserViewsDto } from './dto/upsert-user-view.dto';
import { UserViewsDto } from './dto/user-views.dto';
import { UserViewsService } from './user-views.service';


@Controller('user-views')
export class UserViewsController {
    constructor(
        private readonly userViewsService: UserViewsService,
    ) { }

    @ApiOperation({ operationId: 'getUserViews' })
    @ApiQuery({ type: GetWorkspaceIdFieldDto })
    @Get()
    @ApiOkResponse({ type: UserViewsDto })
    @TransformPlainToInstance(UserViewsDto)
    async findOne(
        @Req() { user }: Request,
        @Query() { workspaceId }: GetWorkspaceIdFieldDto
    ) {
        return await this.userViewsService.findOne(user.id, workspaceId);
    }

    @ApiOperation({ operationId: 'upsertUserViews' })
    @ApiBody({ type: UpsertUserViewsDto })
    @Patch()
    @ApiOkResponse({ type: UserViewsDto })
    @TransformPlainToInstance(UserViewsDto)
    async upsert(
        @Req() { user }: Request,
        @Body() dto: UpsertUserViewsDto,
    ) {
        return await this.userViewsService.upsert(user.id, dto);
    }
}