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
import { GetUserViewDto } from './dto/request/get-user-view.dto';
import { UpsertUserViewDto } from './dto/request/upsert-user-view.dto';
import { UserViewDto } from './dto/response/user-view.dto';
import { UserViewService } from './user-view.service';

@Controller('user-views')
export class UserViewController {
    constructor(
        private readonly userViewsService: UserViewService,
    ) { }

    @ApiOperation({ operationId: 'getUserView' })
    @ApiQuery({ type: GetUserViewDto })
    @Get()
    @ApiOkResponse({ type: UserViewDto })
    @TransformPlainToInstance(UserViewDto)
    async findOne(
        @Req() { user }: Request,
        @Query() dto: GetUserViewDto
    ) {
        return await this.userViewsService.findOne(user.id, dto);
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