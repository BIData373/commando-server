import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { CreateTagDto } from './dto/request/create-tag.dto';
import { DeleteTagDto } from './dto/request/delete-tag.dto';
import { UpdateTagDto } from './dto/request/update-tag.dto';
import { TagDto } from './dto/response/tag.dto';
import { TagService } from './tag.service';

// FIX Guards
// FIX Use @TransfromPlainToInstance instead of plainToInstance
@Controller('tag')
export class TagController {
  constructor(private readonly tagService: TagService) { }

  @Post()
  async create(@Body() dto: CreateTagDto): Promise<TagDto> {
    const record = await this.tagService.create(dto);
    return plainToInstance(TagDto, record);
  }

  @Get()
  async findAll(): Promise<TagDto[]> {
    const records = await this.tagService.findAll();
    return plainToInstance(TagDto, records);
  }

  // FIX Use GetIdDto
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<TagDto> {
    const record = await this.tagService.findOne(id);
    return plainToInstance(TagDto, record);
  }

  // FIX Use GetIdDto
  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateTagDto,
  ): Promise<TagDto> {
    const record = await this.tagService.update(id, dto);
    return plainToInstance(TagDto, record);
  }

  // FIX Use GetIdDto
  @Delete(':id')
  async remove(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: DeleteTagDto,
  ): Promise<TagDto> {
    const record = await this.tagService.remove(dto.id);
    return plainToInstance(TagDto, record);
  }
}
