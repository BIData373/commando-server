import { Body, Controller, Delete, Get, Param, Patch, Post, Query, Req } from '@nestjs/common';
import { TransformPlainToInstance } from 'class-transformer';
import { Request } from 'express';
import { AddUserToContext } from '../../common/interceptors/add-user-to-context.interceptor';
import { GetTaskIdFieldDto } from '../task/dto/request/get-task-id-field.dto';
import { CreateMessageDto } from './dto/request/create-message.dto';
import { GetMessageIdDto } from './dto/request/get-message-id.dto';
import { UpdateMessageDto } from './dto/request/update-message.dto';
import { MessageDto } from './dto/response/message.dto';
import { MessageService } from './message.service';

@Controller('message')
export class MessageController {
  constructor(private readonly messageService: MessageService) { }

  @AddUserToContext('body')
  @Post()
  @TransformPlainToInstance(MessageDto)
  async create(
    @Req() { user }: Request,
    @Body() dto: CreateMessageDto
  ) {
    return await this.messageService.create(dto, user.id);
  }

  @AddUserToContext('query')
  @Get()
  @TransformPlainToInstance(MessageDto)
  async findInTask(
    @Query() { taskId }: GetTaskIdFieldDto
  ) {
    return await this.messageService.findInTask(taskId);
  }

  @AddUserToContext('params')
  @Get(':id')
  @TransformPlainToInstance(MessageDto)
  async findOne(
    @Param() { id }: GetMessageIdDto
  ) {
    return await this.messageService.findOne(id);
  }

  @AddUserToContext('params')
  @Patch(':id')
  @TransformPlainToInstance(MessageDto)
  async update(
    @Req() { user }: Request,
    @Param() { id }: GetMessageIdDto,
    @Body() dto: UpdateMessageDto
  ) {
    return await this.messageService.update(id, dto, user.id);
  }

  @AddUserToContext('params')
  @Delete(':id')
  @TransformPlainToInstance(MessageDto)
  async remove(
    @Req() { user }: Request,
    @Param() { id }: GetMessageIdDto
  ) {
    return await this.messageService.remove(id, user.id);
  }
}
