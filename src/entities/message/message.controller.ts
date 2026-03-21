import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { TransformPlainToInstance } from 'class-transformer';
import { CreateMessageDto } from './dto/request/create-message.dto';
import { DeleteMessageDto } from './dto/request/delete-message.dto';
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
    @Body() dto: CreateMessageDto
  ) {
    return await this.messageService.create(dto);
  }

  @Get()
  @TransformPlainToInstance(MessageDto)
  async findAll() {
    return await this.messageService.findAll();
  }

  // FIX Use GetIdDto
  @Get(':id')
  @TransformPlainToInstance(MessageDto)
  async findOne(
    @Param() { id }: GetMessageIdDto
  ) {
    return await this.messageService.findOne(id);
  }

  // FIX Use GetIdDto
  @Patch(':id')
  @TransformPlainToInstance(MessageDto)
  async update(
    @Param() { id }: GetMessageIdDto,
    @Body() dto: UpdateMessageDto,
  ) {
    return await this.messageService.update(id, dto);
  }

  // FIX Use GetIdDto
  @Delete(':id')
  @TransformPlainToInstance(MessageDto)
  async remove(
    @Param() { id }: GetMessageIdDto,
    @Body() dto: DeleteMessageDto,
  ) {
    return await this.messageService.remove(dto.id, dto.deletedBy);
  }
}
