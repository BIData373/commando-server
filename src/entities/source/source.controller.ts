import { Body, Controller, Delete, Get, Param, Patch, Post, Query, Req } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiParam, ApiQuery } from '@nestjs/swagger';
import { TransformPlainToInstance } from 'class-transformer';
import { Request } from 'express';
import { GetViewerWorkspaceIdFieldDto } from '../workspace/dto/request/get-workspace-id-field.dto';
import { CreateSourceDto } from './dto/request/create-source.dto';
import { GetManagerSourceIdDto, GetViewerSourceIdDto } from './dto/request/get-source-id.dto';
import { UpdateSourceDto } from './dto/request/update-source.dto';
import { SourceDto } from './dto/response/source.dto';
import { SourceService } from './source.service';

@Controller('source')
export class SourceController {
  constructor(private readonly sourceService: SourceService) { }

  @ApiOperation({ operationId: 'createSource' })
  @ApiBody({ type: CreateSourceDto })
  @Post()
  @ApiCreatedResponse({ type: SourceDto })
  @TransformPlainToInstance(SourceDto)
  async create(
    @Req() { user }: Request,
    @Body() dto: CreateSourceDto
  ) {
    return await this.sourceService.create(dto, user.id);
  }

  @ApiOperation({ operationId: 'listSources' })
  @ApiQuery({ type: GetViewerWorkspaceIdFieldDto })
  @Get()
  @ApiOkResponse({ type: [SourceDto] })
  @TransformPlainToInstance(SourceDto)
  async findAll(
    @Query() { workspaceId }: GetViewerWorkspaceIdFieldDto
  ) {
    return await this.sourceService.findInWorkspace(workspaceId);
  }

  @ApiOperation({ operationId: 'getSource' })
  @ApiParam({ name: 'id', type: Number })
  @Get(':id')
  @ApiOkResponse({ type: SourceDto })
  @TransformPlainToInstance(SourceDto)
  async findOne(
    @Param() { id }: GetViewerSourceIdDto
  ) {
    return await this.sourceService.findOne(id);
  }

  @ApiOperation({ operationId: 'updateSource' })
  @ApiParam({ name: 'id', type: Number })
  @ApiBody({ type: UpdateSourceDto })
  @Patch(':id')
  @ApiOkResponse({ type: SourceDto })
  @TransformPlainToInstance(SourceDto)
  async update(
    @Req() { user }: Request,
    @Param() { id }: GetManagerSourceIdDto,
    @Body() dto: UpdateSourceDto
  ) {
    return await this.sourceService.update(id, dto, user.id);
  }

  @ApiOperation({ operationId: 'deleteSource' })
  @ApiParam({ name: 'id', type: Number })
  @Delete(':id')
  @ApiOkResponse({ type: SourceDto })
  @TransformPlainToInstance(SourceDto)
  async remove(
    @Req() { user }: Request,
    @Param() { id }: GetManagerSourceIdDto
  ) {
    return await this.sourceService.remove(id, user.id);
  }
}
