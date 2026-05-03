import { Body, Controller, Delete, Get, Param, Patch, Post, Query, Req } from '@nestjs/common';
import { Request } from 'express';
import { GetViewerWorkspaceIdFieldDto } from '../workspace/dto/request/get-workspace-id-field.dto';
import { CreateSourceDto } from './dto/request/create-source.dto';
import { GetManagerSourceIdDto, GetViewerSourceIdDto } from './dto/request/get-source-id.dto';
import { UpdateSourceDto } from './dto/request/update-source.dto';
import { SourceService } from './source.service';

@Controller('source')
export class SourceController {
  constructor(private readonly sourceService: SourceService) { }

  @Post()
  async create(
    @Req() { user }: Request,
    @Body() dto: CreateSourceDto
  ) {
    return await this.sourceService.create(dto, user.id);
  }

  @Get()
  async findAll(
    @Query() { workspaceId }: GetViewerWorkspaceIdFieldDto
  ) {
    return await this.sourceService.findInWorkspace(workspaceId);
  }

  @Get(':id')
  async findOne(
    @Param() { id }: GetViewerSourceIdDto
  ) {
    return await this.sourceService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Req() { user }: Request,
    @Param() { id }: GetManagerSourceIdDto,
    @Body() dto: UpdateSourceDto
  ) {
    return await this.sourceService.update(id, dto, user.id);
  }

  @Delete(':id')
  async remove(
    @Req() { user }: Request,
    @Param() { id }: GetManagerSourceIdDto
  ) {
    return await this.sourceService.remove(id, user.id);
  }
}
