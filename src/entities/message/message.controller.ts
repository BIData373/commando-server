import { Body, Controller, Delete, Get, Param, Patch, Post, Query, Req } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiParam, ApiQuery } from '@nestjs/swagger';
import { TransformPlainToInstance } from 'class-transformer';
import { Request } from 'express';
import { GetViewerTaskIdFieldDto } from '../task/dto/request/get-task-id-field.dto';
import { CreateMessageDto } from './dto/request/create-message.dto';
import { GetManagerMessageIdDto, GetViewerMessageIdDto } from './dto/request/get-message-id.dto';
import { UpdateMessageDto } from './dto/request/update-message.dto';
import { MessageDto } from './dto/response/message.dto';
import { MessageService } from './message.service';

@Controller('message')
export class MessageController {
  constructor(private readonly messageService: MessageService) { }

  @ApiOperation({ operationId: 'createMessage' })
  @ApiBody({ type: CreateMessageDto })
  @Post()
  @ApiCreatedResponse({ type: MessageDto })
  @TransformPlainToInstance(MessageDto)
  async create(
    @Req() { user }: Request,
    @Body() dto: CreateMessageDto
  ) {
    return await this.messageService.create(dto, user.id);
  }

  @ApiOperation({ operationId: 'listMessages' })
  @ApiQuery({ type: GetViewerTaskIdFieldDto })
  @Get()
  @ApiOkResponse({ type: [MessageDto] })
  @TransformPlainToInstance(MessageDto)
  async findInTask(
    @Query() { taskId }: GetViewerTaskIdFieldDto
  ) {
    return await this.messageService.findInTask(taskId);
  }

  @ApiOperation({ operationId: 'getMessage' })
  @ApiParam({ name: 'id', type: Number })
  @Get(':id')
  @ApiOkResponse({ type: MessageDto })
  @TransformPlainToInstance(MessageDto)
  async findOne(
    @Param() { id }: GetViewerMessageIdDto
  ) {
    return await this.messageService.findOne(id);
  }

  @ApiOperation({ operationId: 'patchMessage' })
  @ApiParam({ name: 'id', type: Number })
  @ApiBody({ type: UpdateMessageDto })
  @Patch(':id')
  @ApiOkResponse({ type: MessageDto })
  @TransformPlainToInstance(MessageDto)
  async update(
    @Req() { user }: Request,
    @Param() { id }: GetManagerMessageIdDto,
    @Body() dto: UpdateMessageDto
  ) {
    return await this.messageService.update(id, dto, user.id);
  }

  @ApiOperation({ operationId: 'deleteMessage' })
  @ApiParam({ name: 'id', type: Number })
  @Delete(':id')
  @ApiOkResponse({ type: MessageDto })
  @TransformPlainToInstance(MessageDto)
  async remove(
    @Req() { user }: Request,
    @Param() { id }: GetManagerMessageIdDto
  ) {
    return await this.messageService.remove(id, user.id);
  }
}
