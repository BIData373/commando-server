import { Body, Controller, Delete, Get, Param, Patch, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { CreateSourceDto } from './dto/request/create-source.dto';
import { GetSourceIdDto } from './dto/request/get-source-id.dto';
import { UpdateSourceDto } from './dto/request/update-source.dto';
import { SourceService } from './source.service';

// FIX Guards
@Controller('source')
export class SourceController {
  constructor(private readonly sourceService: SourceService) { }

  @Post()
  async create(
    @Body() dto: CreateSourceDto
  ) {
    return await this.sourceService.create(dto);
  }

  @Get()
  async findAll() {
    return await this.sourceService.findAll();
  }

  @Get(':id')
  async findOne(
    @Param() { id }: GetSourceIdDto
  ) {
    return await this.sourceService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param() { id }: GetSourceIdDto,
    @Body() dto: UpdateSourceDto,
  ) {
    return await this.sourceService.update(id, dto);
  }

  @Delete(':id')
  async remove(
    @Req() { user }: Request,
    @Param() { id }: GetSourceIdDto
  ) {
    return await this.sourceService.remove(id, user.id);
  }
}
