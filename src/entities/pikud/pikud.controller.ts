import { Body, Controller, Delete, Get, Param, Patch, Post, Req, UseGuards } from '@nestjs/common';
import { TransformPlainToInstance } from 'class-transformer';
import { Request } from 'express';
import { BIGuard } from '../../common/guards/bi.guard';
import { CreatePikudDto } from './dto/request/create-pikud.dto';
import { GetPikudIdDto } from './dto/request/get-pikud-id.dto';
import { UpdatePikudDto } from './dto/request/update-pikud.dto';
import { PikudDto } from './dto/response/pikud.dto';
import { PikudService } from './pikud.service';

@Controller('pikud')
export class PikudController {
  constructor(private readonly pikudService: PikudService) { }

  @UseGuards(BIGuard)
  @Post()
  @TransformPlainToInstance(PikudDto)
  async create(
    @Req() { user }: Request,
    @Body() dto: CreatePikudDto
  ) {
    return await this.pikudService.create(dto, user.id);
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

  @UseGuards(BIGuard)
  @Patch(':id')
  @TransformPlainToInstance(PikudDto)
  async update(
    @Req() { user }: Request,
    @Param() { id }: GetPikudIdDto,
    @Body() dto: UpdatePikudDto
  ) {
    return await this.pikudService.update(id, dto, user.id);
  }

  @UseGuards(BIGuard)
  @Delete(':id')
  @TransformPlainToInstance(PikudDto)
  async remove(
    @Req() { user }: Request,
    @Param() { id }: GetPikudIdDto
  ) {
    return await this.pikudService.remove(id, user.id);
  }
}
