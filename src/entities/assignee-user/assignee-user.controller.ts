import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { AssigneeUserService } from './assignee-user.service';
import { CreateAssigneeUserDto } from './dto/request/create-assignee-user.dto';
import { DeleteAssigneeUserDto } from './dto/request/delete-assignee-user.dto';
import { AssigneeUserDto } from './dto/response/assignee-user.dto';

// FIX Guards
// FIX Use @TransfromPlainToInstance instead of plainToInstance
@Controller('assignee-user')
export class AssigneeUserController {
  constructor(private readonly assigneeUserService: AssigneeUserService) {}

  @Post()
  async create(@Body() dto: CreateAssigneeUserDto): Promise<AssigneeUserDto> {
    const record = await this.assigneeUserService.create(dto);
    return plainToInstance(AssigneeUserDto, record);
  }

  @Get()
  async findAll(): Promise<AssigneeUserDto[]> {
    const records = await this.assigneeUserService.findAll();
    return plainToInstance(AssigneeUserDto, records);
  }

  // FIX Use GetIdDto
  @Get(':assigneeId/:userId')
  async findOne(
    @Param('assigneeId', ParseIntPipe) assigneeId: number,
    @Param('userId', ParseIntPipe) userId: number,
  ): Promise<AssigneeUserDto> {
    const record = await this.assigneeUserService.findOne(assigneeId, userId);
    return plainToInstance(AssigneeUserDto, record);
  }

  // FIX Use GetIdDto
  @Delete(':assigneeId/:userId')
  async remove(
    @Param('assigneeId', ParseIntPipe) assigneeId: number,
    @Param('userId', ParseIntPipe) userId: number,
    @Body() dto: DeleteAssigneeUserDto,
  ): Promise<AssigneeUserDto> {
    const record = await this.assigneeUserService.remove(dto.assigneeId, dto.userId);
    return plainToInstance(AssigneeUserDto, record);
  }
}
