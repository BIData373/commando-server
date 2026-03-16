import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { CreateMessageDto } from './dto/request/create-message.dto';
import { DeleteMessageDto } from './dto/request/delete-message.dto';
import { UpdateMessageDto } from './dto/request/update-message.dto';
import { MessageDto } from './dto/response/message.dto';
import { MessageService } from './message.service';

@Controller('message')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @Post()
  async create(@Body() dto: CreateMessageDto): Promise<MessageDto> {
    const record = await this.messageService.create(dto);
    return plainToInstance(MessageDto, record);
  }

  @Get()
  async findAll(): Promise<MessageDto[]> {
    const records = await this.messageService.findAll();
    return plainToInstance(MessageDto, records);
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<MessageDto> {
    const record = await this.messageService.findOne(id);
    return plainToInstance(MessageDto, record);
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateMessageDto,
  ): Promise<MessageDto> {
    const record = await this.messageService.update(id, dto);
    return plainToInstance(MessageDto, record);
  }

  @Delete(':id')
  async remove(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: DeleteMessageDto,
  ): Promise<MessageDto> {
    const record = await this.messageService.remove(dto.id, dto.deletedBy);
    return plainToInstance(MessageDto, record);
  }
}
