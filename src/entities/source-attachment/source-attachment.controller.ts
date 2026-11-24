import { Body, Controller, Delete, Get, Param, ParseFilePipe, Patch, Post, Req, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBody, ApiConsumes, ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiParam } from '@nestjs/swagger';
import { TransformPlainToInstance } from 'class-transformer';
import { Request } from 'express';
import { memoryStorage } from 'multer';
import { AddUserToContextInterceptor } from '../../common/interceptors/add-user-to-context.interceptor';
import { SignedUrlDto } from '../s3/dto/response/signed-url.dto';
import { CreateSourceAttachmentDto } from './dto/request/create-source-attachment.dto';
import { GetAccessibleSourceAttachmentIdDto, GetManagerSourceAttachmentIdDto } from './dto/request/get-source-attachment-id.dto';
import { UpdateSourceAttachmentDto } from './dto/request/update-source-attachment.dto';
import { SourceAttachmentDto } from './dto/response/source-attachment.dto';
import { SourceAttachmentService } from './source-attachment.service';

@Controller('source-attachment')
export class SourceAttachmentController {
  constructor(private readonly sourceAttachmentService: SourceAttachmentService) { }

  @ApiOperation({ operationId: 'createSourceAttachment' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({ type: CreateSourceAttachmentDto })
  @UseInterceptors(
    FileInterceptor('attachment', {
      storage: memoryStorage(),
      limits: { fileSize: 30 * 1024 * 1024 }
    }),
    AddUserToContextInterceptor
  )
  @Post()
  @ApiCreatedResponse({ type: SourceAttachmentDto })
  @TransformPlainToInstance(SourceAttachmentDto)
  async create(
    @Req() { user }: Request,
    @Body() { context, attachment, ...dto }: CreateSourceAttachmentDto,
    @UploadedFile(new ParseFilePipe()) file: Express.Multer.File
  ) {
    return await this.sourceAttachmentService.create(dto, file, user.id);
  }

  @ApiOperation({ operationId: 'getSourceAttachment' })
  @ApiParam({ name: 'id', type: Number })
  @Get(':id')
  @ApiOkResponse({ type: SourceAttachmentDto })
  @TransformPlainToInstance(SourceAttachmentDto)
  async findOne(
    @Param() { id }: GetAccessibleSourceAttachmentIdDto
  ) {
    return await this.sourceAttachmentService.findOne(id);
  }

  @ApiOperation({ operationId: 'getSourceAttachmentSignedUrl' })
  @ApiParam({ name: 'id', type: Number })
  @Get(':id/signed-url')
  @ApiOkResponse({ type: SignedUrlDto })
  @TransformPlainToInstance(SignedUrlDto)
  async signUrl(
    @Param() { context: { sourceAttachment } }: GetAccessibleSourceAttachmentIdDto
  ) {
    return await this.sourceAttachmentService.signUrl(sourceAttachment);
  }

  @ApiOperation({ operationId: 'updateSourceAttachment' })
  @ApiParam({ name: 'id', type: Number })
  @ApiBody({ type: UpdateSourceAttachmentDto })
  @Patch(':id')
  @ApiOkResponse({ type: SourceAttachmentDto })
  @TransformPlainToInstance(SourceAttachmentDto)
  async update(
    @Req() { user }: Request,
    @Param() { id }: GetManagerSourceAttachmentIdDto,
    @Body() dto: UpdateSourceAttachmentDto
  ) {
    return await this.sourceAttachmentService.update(id, dto, user.id);
  }

  @ApiOperation({ operationId: 'deleteSourceAttachment' })
  @ApiParam({ name: 'id', type: Number })
  @Delete(':id')
  @ApiOkResponse({ type: SourceAttachmentDto })
  @TransformPlainToInstance(SourceAttachmentDto)
  async remove(
    @Param() { context: { sourceAttachment } }: GetManagerSourceAttachmentIdDto
  ) {
    return await this.sourceAttachmentService.remove(sourceAttachment);
  }
}
