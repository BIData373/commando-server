import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { CreateTaskDto } from './dto/request/create-task.dto';
import { DeleteTaskDto } from './dto/request/delete-task.dto';
import { UpdateTaskDto } from './dto/request/update-task.dto';
import { TaskDto } from './dto/response/task.dto';
import { TaskService } from './task.service';

// FIX Guards
// FIX Use @TransfromPlainToInstance instead of plainToInstance
@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  async create(@Body() dto: CreateTaskDto): Promise<TaskDto> {
    const record = await this.taskService.create(dto);
    return plainToInstance(TaskDto, record);
  }

  @Get()
  async findAll(): Promise<TaskDto[]> {
    const records = await this.taskService.findAll();
    return plainToInstance(TaskDto, records);
  }

  // FIX Use GetIdDto
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<TaskDto> {
    const record = await this.taskService.findOne(id);
    return plainToInstance(TaskDto, record);
  }

  // FIX Use GetIdDto
  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateTaskDto,
  ): Promise<TaskDto> {
    const record = await this.taskService.update(id, dto);
    return plainToInstance(TaskDto, record);
  }

  // FIX Use GetIdDto
  @Delete(':id')
  async remove(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: DeleteTaskDto,
  ): Promise<TaskDto> {
    const record = await this.taskService.remove(dto.id, dto.deletedBy);
    return plainToInstance(TaskDto, record);
  }
}
