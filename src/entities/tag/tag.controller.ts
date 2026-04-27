import { Body, Controller, Delete, Get, Param, Patch, Post, Query, Req } from '@nestjs/common';
import { TransformPlainToInstance } from 'class-transformer';
import { Request } from 'express';
import { AddUserToContext } from '../../common/interceptors/add-user-to-context.interceptor';
import { GetViewerQueryWorkspaceIdFieldDto } from '../workspace/dto/request/get-workspace-id-field.dto';
import { CreateTagDto } from './dto/request/create-tag.dto';
import { GetManagerParamsTagIdDto, GetViewerParamsTagIdDto } from './dto/request/get-tag-id.dto';
import { UpdateTagDto } from './dto/request/update-tag.dto';
import { TagDto } from './dto/response/tag.dto';
import { TagService } from './tag.service';

@Controller('tag')
export class TagController {
  constructor(private readonly tagService: TagService) { }

  @AddUserToContext('body')
  @Post()
  @TransformPlainToInstance(TagDto)
  async create(
    @Req() { user }: Request,
    @Body() { context, ...dto }: CreateTagDto
  ) {
    return await this.tagService.create(dto, user.id);
  }

  @AddUserToContext('query')
  @Get()
  @TransformPlainToInstance(TagDto)
  async findAll(
    @Query() { workspaceId }: GetViewerQueryWorkspaceIdFieldDto
  ) {
    return await this.tagService.findInWorkspace(workspaceId);
  }

  @AddUserToContext('params')
  @Get(':id')
  @TransformPlainToInstance(TagDto)
  async findOne(
    @Param() { context: { tag } }: GetViewerParamsTagIdDto
  ) {
    return tag;
  }

  @AddUserToContext('params')
  @Patch(':id')
  @TransformPlainToInstance(TagDto)
  async update(
    @Req() { user }: Request,
    @Param() { id }: GetManagerParamsTagIdDto,
    @Body() { context, ...dto }: UpdateTagDto
  ) {
    return await this.tagService.update(id, dto, user.id);
  }

  @AddUserToContext('params')
  @Delete(':id')
  @TransformPlainToInstance(TagDto)
  async remove(
    @Param() { id }: GetManagerParamsTagIdDto
  ) {
    return await this.tagService.remove(id);
  }
}
