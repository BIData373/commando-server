import { Body, Controller, Delete, Get, Param, Patch, Post, Query, Req } from '@nestjs/common';
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

  @Post()
  @TransformPlainToInstance(TagDto)
  async create(
    @Req() { user }: Request,
    @Body() { context, ...dto }: CreateTagDto
  ) {
    return await this.tagService.create(dto, user.id);
  }

  @Get()
  @TransformPlainToInstance(TagDto)
  async findAll(
    @Query() { workspaceId }: GetViewerWorkspaceIdFieldDto
  ) {
    return await this.tagService.findInWorkspace(workspaceId);
  }

  @Get(':id')
  @TransformPlainToInstance(TagDto)
  async findOne(
    @Param() { context: { tag } }: GetViewerTagIdDto
  ) {
    return tag;
  }

  @Patch(':id')
  @TransformPlainToInstance(TagDto)
  async update(
    @Req() { user }: Request,
    @Param() { id }: GetManagerTagIdDto,
    @Body() { context, ...dto }: UpdateTagDto
  ) {
    return await this.tagService.update(id, dto, user.id);
  }

  @Delete(':id')
  @TransformPlainToInstance(TagDto)
  async remove(
    @Param() { id }: GetManagerTagIdDto
  ) {
    return await this.tagService.remove(id);
  }
}
