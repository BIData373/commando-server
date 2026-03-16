import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { AssigneeService } from './assignee.service';
import { CreateAssigneeDto } from './dto/request/create-assignee.dto';
import { DeleteAssigneeDto } from './dto/request/delete-assignee.dto';
import { UpdateAssigneeDto } from './dto/request/update-assignee.dto';
import { AssigneeDto } from './dto/response/assignee.dto';

@Controller('assignee')
export class AssigneeController {
  constructor(private readonly assigneeService: AssigneeService) {}

  @Post()
  async create(@Body() dto: CreateAssigneeDto): Promise<AssigneeDto> {
    const record = await this.assigneeService.create(dto);
    return plainToInstance(AssigneeDto, record);
  }

  @Get()
  async findAll(): Promise<AssigneeDto[]> {
    const records = await this.assigneeService.findAll();
    return plainToInstance(AssigneeDto, records);
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<AssigneeDto> {
    const record = await this.assigneeService.findOne(id);
    return plainToInstance(AssigneeDto, record);
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateAssigneeDto,
  ): Promise<AssigneeDto> {
    const record = await this.assigneeService.update(id, dto);
    return plainToInstance(AssigneeDto, record);
  }

  @Delete(':id')
  async remove(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: DeleteAssigneeDto,
  ): Promise<AssigneeDto> {
    const record = await this.assigneeService.remove(dto.id, dto.deletedBy);
    return plainToInstance(AssigneeDto, record);
  }
}
