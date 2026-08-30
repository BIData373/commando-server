import { Body, Controller, Delete, Get, Param, Patch, Post, Query, Req, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiConsumes, ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiParam, ApiQuery } from '@nestjs/swagger';
import { TransformPlainToInstance } from 'class-transformer';
import { Request } from 'express';
import { memoryStorage } from 'multer';
import { AddUserToContextInterceptor } from '../../common/interceptors/add-user-to-context.interceptor';
import { CopyDtosInRequest } from '../../common/interceptors/copy-dtos-in-request.interceptor';
import { GetManagerWorkspaceIdFieldDto, GetViewerWorkspaceIdFieldDto } from '../workspace/dto/request/get-workspace-id-field.dto';
import { CreateSourceDto } from './dto/request/create-source.dto';
import { GetAIExtractionCallbackDto } from './dto/request/get-ai-extraction-callback.dto';
import { GetManagerSourceIdDto, GetViewerSourceIdDto } from './dto/request/get-source-id.dto';
import { UpdateSourceDto } from './dto/request/update-source.dto';
import { SourceWithTasksDto } from './dto/response/source-with-tasks.dto';
import { SourceDto } from './dto/response/source.dto';
import { SourceService } from './source.service';

@Controller('source')
export class SourceController {
  constructor(private readonly sourceService: SourceService) { }

  @ApiOperation({ operationId: 'createSource' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({ type: CreateSourceDto })
  @UseInterceptors(
    FileInterceptor('attachment', {
      storage: memoryStorage(),
      limits: { fileSize: 30 * 1024 * 1024 }
    }),
    AddUserToContextInterceptor,
    CopyDtosInRequest<CreateSourceDto, CreateSourceDto>({
      from: 'body.workspaceId',
      to: 'body.tasks[].assignees[].context.workspaceId',
      dto: GetManagerWorkspaceIdFieldDto
    })
  )
  @Post()
  @ApiCreatedResponse({ type: SourceDto })
  @TransformPlainToInstance(SourceDto)
  async create(
    @Req() { user }: Request,
    @Body() dto: CreateSourceDto,
    @UploadedFile() file?: Express.Multer.File
  ) {
    return await this.sourceService.create(dto, user.id, file);
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
  @ApiOkResponse({ type: SourceWithTasksDto })
  @TransformPlainToInstance(SourceWithTasksDto)
  async findOne(
    @Param() { id, context: { user } }: GetViewerSourceIdDto
  ) {
    return await this.sourceService.findOne(id, user);
  }

  @ApiOperation({ operationId: 'updateSource' })
  @ApiConsumes('multipart/form-data')
  @ApiParam({ name: 'id', type: Number })
  @ApiBody({ type: UpdateSourceDto })
  @UseInterceptors(
    FileInterceptor('attachment', { storage: memoryStorage() }),
    AddUserToContextInterceptor
  )
  @Patch(':id')
  @ApiOkResponse({ type: SourceDto })
  @TransformPlainToInstance(SourceDto)
  async update(
    @Req() { user }: Request,
    @Param() { context: { source } }: GetManagerSourceIdDto,
    @Body() dto: UpdateSourceDto,
    @UploadedFile() file?: Express.Multer.File
  ) {
    return await this.sourceService.update(source, dto, user.id, file);
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

  @ApiOperation({ operationId: 'extractSource' })
  @ApiParam({ name: 'id', type: Number })
  @Post(':id/extract')
  @ApiOkResponse({ type: SourceDto })
  @TransformPlainToInstance(SourceDto)
  async extract(
    @Param() { context: { source } }: GetManagerSourceIdDto,
  ) {
    return await this.sourceService.extract(source);
  }

  @ApiOperation({ operationId: 'aiExtractionCallback' })
  @ApiParam({ name: 'id', type: Number })
  @ApiBody({ type: GetAIExtractionCallbackDto })
  @Post(':id/ai-result')
  @ApiOkResponse({ type: SourceWithTasksDto })
  @TransformPlainToInstance(SourceWithTasksDto)
  async aiCallback(
    @Param() { context: { source } }: GetManagerSourceIdDto,
    @Body() dto: GetAIExtractionCallbackDto
  ) {
    return await this.sourceService.processAiResult(source, dto);
  }
}
