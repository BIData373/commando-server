import { Body, Controller, Delete, Get, Param, Patch, Post, Query, Req, UseGuards } from '@nestjs/common';
import { TransformPlainToInstance } from 'class-transformer';
import { Request } from 'express';
import { PermissionSettings } from '../../common/decorators/permission-settings.decorator';
import { PermissionType } from '../../types';
import { PermissionGuard } from '../permission/guards/permission.guard';
import { GetWorkspaceIdFieldDto } from '../workspace/dto/request/get-workspace-id-field.dto';
import { CreateTagDto } from './dto/request/create-tag.dto';
import { GetTagIdDto } from './dto/request/get-tag-id.dto';
import { UpdateTagDto } from './dto/request/update-tag.dto';
import { TagDto } from './dto/response/tag.dto';
import { TagService } from './tag.service';

// @UseGuards(PermissionGuard)
@Controller('tag')
export class TagController {
  constructor(private readonly tagService: TagService) { }

  @PermissionSettings({
    type: PermissionType.MANAGER,
    from: 'body'
  })
  @Post()
  @TransformPlainToInstance(TagDto)
  async create(
    @Req() { user }: Request,
    @Body() dto: CreateTagDto
  ) {
    return await this.tagService.create(dto, user.id);
  }

  @PermissionSettings({
    type: PermissionType.VIEWER,
    from: 'query'
  })
  @Get()
  @TransformPlainToInstance(TagDto)
  async findAll(
    @Query() { workspaceId }: GetWorkspaceIdFieldDto
  ) {
    return await this.tagService.findInWorkspace(workspaceId);
  }

  // @PermissionSettings({
  //   type: PermissionType.VIEWER,
  //   from: 'params',
  //   dto: GetTagIdDto,
  //   contextField: 'tag'
  // })
  @Get(':id')
  @TransformPlainToInstance(TagDto)
  async findOne(
    @Param() { id }: GetTagIdDto
  ) {
    return await this.tagService.findOne(id);
  }

  // @PermissionSettings({
  //   type: PermissionType.MANAGER,
  //   from: 'params',
  //   dto: GetTagIdDto,
  //   contextField: 'tag'
  // })
  @Patch(':id')
  @TransformPlainToInstance(TagDto)
  async update(
    @Req() { user }: Request,
    @Param() { id }: GetTagIdDto,
    @Body() dto: UpdateTagDto
  ) {
    return await this.tagService.update(id, dto, user.id);
  }

  // @PermissionSettings({
  //   type: PermissionType.MANAGER,
  //   from: 'params',
  //   dto: GetTagIdDto,
  //   contextField: 'tag'
  // })
  @Delete(':id')
  @TransformPlainToInstance(TagDto)
  async remove(
    @Param() { id }: GetTagIdDto
  ) {
    return await this.tagService.remove(id);
  }
}
