import { Body, Controller, Delete, Get, Param, Patch, Post, Query, Req } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiParam, ApiQuery } from '@nestjs/swagger';
import { TransformPlainToInstance } from 'class-transformer';
import { Request } from 'express';
import { GetViewerWorkspaceIdFieldDto } from '../workspace/dto/request/get-workspace-id-field.dto';
import { CreateTagDto } from './dto/request/create-tag.dto';
import { GetManagerTagIdDto, GetViewerTagIdDto } from './dto/request/get-tag-id.dto';
import { UpdateTagDto } from './dto/request/update-tag.dto';
import { TagDto } from './dto/response/tag.dto';
import { TagService } from './tag.service';

@Controller('tag')
export class TagController {
  constructor(private readonly tagService: TagService) { }

  @ApiOperation({ operationId: 'createTag' })
  @ApiBody({ type: CreateTagDto })
  @Post()
  @ApiCreatedResponse({ type: TagDto })
  @TransformPlainToInstance(TagDto)
  async create(
    @Req() { user }: Request,
    @Body() { context, ...dto }: CreateTagDto
  ) {
    return await this.tagService.create(dto, user.id);
  }

  @ApiOperation({ operationId: 'listTags' })
  @ApiQuery({ type: GetViewerWorkspaceIdFieldDto })
  @Get()
  @ApiOkResponse({ type: [TagDto] })
  @TransformPlainToInstance(TagDto)
  async findAll(
    @Query() { workspaceId }: GetViewerWorkspaceIdFieldDto
  ) {
    return await this.tagService.findInWorkspace(workspaceId);
  }

  @ApiOperation({ operationId: 'getTag' })
  @ApiParam({ name: 'id', type: Number })
  @Get(':id')
  @ApiOkResponse({ type: TagDto })
  @TransformPlainToInstance(TagDto)
  async findOne(
    @Param() { context: { tag } }: GetViewerTagIdDto
  ) {
    return tag;
  }

  @ApiOperation({ operationId: 'updateTag' })
  @ApiParam({ name: 'id', type: Number })
  @ApiBody({ type: UpdateTagDto })
  @Patch(':id')
  @ApiOkResponse({ type: TagDto })
  @TransformPlainToInstance(TagDto)
  async update(
    @Req() { user }: Request,
    @Param() { id }: GetManagerTagIdDto,
    @Body() { context, ...dto }: UpdateTagDto
  ) {
    return await this.tagService.update(id, dto, user.id);
  }

  @ApiOperation({ operationId: 'deleteTag' })
  @ApiParam({ name: 'id', type: Number })
  @Delete(':id')
  @ApiOkResponse({ type: TagDto })
  @TransformPlainToInstance(TagDto)
  async remove(
    @Param() { id }: GetManagerTagIdDto
  ) {
    return await this.tagService.remove(id);
  }
}
