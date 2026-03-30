import { Body, Controller, Delete, Get, Param, Patch, Post, Req } from '@nestjs/common';
import { TransformPlainToInstance } from 'class-transformer';
import { Request } from 'express';
import { CreateTagDto } from './dto/request/create-tag.dto';
import { GetTagIdDto } from './dto/request/get-tag-id.dto';
import { UpdateTagDto } from './dto/request/update-tag.dto';
import { TagDto } from './dto/response/tag.dto';
import { TagService } from './tag.service';

// FIX Guards
@Controller('tag')
export class TagController {
  constructor(private readonly tagService: TagService) { }

  @Post()
  @TransformPlainToInstance(TagDto)
  async create(
    @Req() { user }: Request,
    @Body() dto: CreateTagDto
  ) {
    return await this.tagService.create(dto, user.id);
  }

  @Get()
  @TransformPlainToInstance(TagDto)
  async findAll() {
    return await this.tagService.findAll();
  }

  @Get(':id')
  @TransformPlainToInstance(TagDto)
  async findOne(
    @Param() { id }: GetTagIdDto
  ) {
    return await this.tagService.findOne(id);
  }

  @Patch(':id')
  @TransformPlainToInstance(TagDto)
  async update(
    @Req() { user }: Request,
    @Param() { id }: GetTagIdDto,
    @Body() dto: UpdateTagDto,
  ) {
    return await this.tagService.update(id, dto, user.id);
  }

  @Delete(':id')
  @TransformPlainToInstance(TagDto)
  async remove(
    @Param() { id }: GetTagIdDto
  ) {
    return await this.tagService.remove(id);
  }
}
