import { Body, Controller, Delete, Get, Param, Patch, Post, Req } from '@nestjs/common';
import { TransformPlainToInstance } from 'class-transformer';
import { Request } from 'express';
import { CreateMessageDto } from './dto/request/create-message.dto';
import { GetMessageIdDto } from './dto/request/get-message-id.dto';
import { UpdateMessageDto } from './dto/request/update-message.dto';
import { MessageDto } from './dto/response/message.dto';
import { MessageService } from './message.service';

// FIX Guards
@Controller('message')
export class MessageController {
  constructor(private readonly messageService: MessageService) { }

  @Post()
  @TransformPlainToInstance(MessageDto)
  async create(
    @Req() { user }: Request,
    @Body() dto: CreateMessageDto
  ) {
    return await this.messageService.create(dto, user.id);
  }

  @Get()
  @TransformPlainToInstance(MessageDto)
  async findAll() {
    return await this.messageService.findAll();
  }

  @Get(':id')
  @TransformPlainToInstance(MessageDto)
  async findOne(
    @Param() { id }: GetMessageIdDto
  ) {
    return await this.messageService.findOne(id);
  }

  @Patch(':id')
  @TransformPlainToInstance(MessageDto)
  async update(
    @Req() { user }: Request,
    @Param() { id }: GetMessageIdDto,
    @Body() dto: UpdateMessageDto,
  ) {
    return await this.messageService.update(id, dto, user.id);
  }

  @Delete(':id')
  @TransformPlainToInstance(MessageDto)
  async remove(
    @Req() { user }: Request,
    @Param() { id }: GetMessageIdDto
  ) {
    return await this.messageService.remove(id, user.id);
  }
}
