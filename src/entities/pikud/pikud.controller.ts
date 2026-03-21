import { Body, Controller, Delete, Get, Param, Patch, Post, Req } from '@nestjs/common';
import { TransformPlainToInstance } from 'class-transformer';
import { Request } from 'express';
import { CreatePikudDto } from './dto/request/create-pikud.dto';
import { GetPikudIdDto } from './dto/request/get-pikud-id.dto';
import { UpdatePikudDto } from './dto/request/update-pikud.dto';
import { PikudDto } from './dto/response/pikud.dto';
import { PikudService } from './pikud.service';

// FIX Guards
@Controller('pikud')
export class PikudController {
  constructor(private readonly pikudService: PikudService) { }

  @Post()
  @TransformPlainToInstance(PikudDto)
  async create(
    @Body() dto: CreatePikudDto
  ) {
    return await this.pikudService.create(dto);
  }

  @Get()
  @TransformPlainToInstance(PikudDto)
  async findAll() {
    return await this.pikudService.findAll();
  }

  @Get(':id')
  @TransformPlainToInstance(PikudDto)
  async findOne(
    @Param() { id }: GetPikudIdDto
  ) {
    return await this.pikudService.findOne(id);
  }

  @Patch(':id')
  @TransformPlainToInstance(PikudDto)
  async update(
    @Param() { id }: GetPikudIdDto,
    @Body() dto: UpdatePikudDto,
  ) {
    return await this.pikudService.update(id, dto);
  }

  @Delete(':id')
  @TransformPlainToInstance(PikudDto)
  async remove(
    @Req() { user }: Request,
    @Param() { id }: GetPikudIdDto
  ) {
    return await this.pikudService.remove(id, user.id);
  }
}
