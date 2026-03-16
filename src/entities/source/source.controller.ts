import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { CreateSourceDto } from './dto/request/create-source.dto';
import { DeleteSourceDto } from './dto/request/delete-source.dto';
import { UpdateSourceDto } from './dto/request/update-source.dto';
import { SourceDto } from './dto/response/source.dto';
import { SourceService } from './source.service';

@Controller('source')
export class SourceController {
  constructor(private readonly sourceService: SourceService) {}

  @Post()
  async create(@Body() dto: CreateSourceDto): Promise<SourceDto> {
    const record = await this.sourceService.create(dto);
    return plainToInstance(SourceDto, record);
  }

  @Get()
  async findAll(): Promise<SourceDto[]> {
    const records = await this.sourceService.findAll();
    return plainToInstance(SourceDto, records);
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<SourceDto> {
    const record = await this.sourceService.findOne(id);
    return plainToInstance(SourceDto, record);
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateSourceDto,
  ): Promise<SourceDto> {
    const record = await this.sourceService.update(id, dto);
    return plainToInstance(SourceDto, record);
  }

  @Delete(':id')
  async remove(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: DeleteSourceDto,
  ): Promise<SourceDto> {
    const record = await this.sourceService.remove(dto.id, dto.deletedBy);
    return plainToInstance(SourceDto, record);
  }
}
