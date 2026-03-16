import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { CreatePikudDto } from './dto/request/create-pikud.dto';
import { DeletePikudDto } from './dto/request/delete-pikud.dto';
import { UpdatePikudDto } from './dto/request/update-pikud.dto';
import { PikudDto } from './dto/response/pikud.dto';
import { PikudService } from './pikud.service';

@Controller('pikud')
export class PikudController {
  constructor(private readonly pikudService: PikudService) {}

  @Post()
  async create(@Body() dto: CreatePikudDto): Promise<PikudDto> {
    const record = await this.pikudService.create(dto);
    return plainToInstance(PikudDto, record);
  }

  @Get()
  async findAll(): Promise<PikudDto[]> {
    const records = await this.pikudService.findAll();
    return plainToInstance(PikudDto, records);
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<PikudDto> {
    const record = await this.pikudService.findOne(id);
    return plainToInstance(PikudDto, record);
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdatePikudDto,
  ): Promise<PikudDto> {
    const record = await this.pikudService.update(id, dto);
    return plainToInstance(PikudDto, record);
  }

  @Delete(':id')
  async remove(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: DeletePikudDto,
  ): Promise<PikudDto> {
    const record = await this.pikudService.remove(dto.id, dto.deletedBy);
    return plainToInstance(PikudDto, record);
  }
}
