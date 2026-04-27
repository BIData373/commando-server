import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { TransformPlainToInstance } from 'class-transformer';
import { GetUserIdFieldDto } from '../user/dto/request/get-user-id-field.dto';
import { AssigneeUserService } from './assignee-user.service';
import { CreateAssigneeUserDto } from './dto/request/create-assignee-user.dto';
import { AssigneeUserDto } from './dto/response/assignee-user.dto';

// FIX Move to assignees controller?
// FIX Guards
@Controller('assignee-user')
export class AssigneeUserController {
  constructor(private readonly assigneeUserService: AssigneeUserService) { }

  @Post()
  @TransformPlainToInstance(AssigneeUserDto)
  async create(
    @Body() dto: CreateAssigneeUserDto
  ) {
    return await this.assigneeUserService.create(dto);
  }

  @Get()
  @TransformPlainToInstance(AssigneeUserDto)
  async findAll() {
    return await this.assigneeUserService.findAll();
  }

  // FIX Use GetIdDto
  @Get(':assigneeId/:userId')
  @TransformPlainToInstance(AssigneeUserDto)
  async findOne(
    @Param('assigneeId', ParseIntPipe) assigneeId: number,
    @Param() { userId }: GetUserIdFieldDto,
  ) {
    return await this.assigneeUserService.findOne(assigneeId, userId);
  }

  // FIX Use GetIdDto
  @Delete(':assigneeId/:userId')
  @TransformPlainToInstance(AssigneeUserDto)
  async remove(
    @Param('assigneeId', ParseIntPipe) assigneeId: number,
    @Param() { userId }: GetUserIdFieldDto,
  ) {
    return await this.assigneeUserService.remove(assigneeId, userId);
  }
}
