import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiParam } from '@nestjs/swagger';
import { TransformPlainToInstance } from 'class-transformer';
import { GetManagerAssigneeIdFieldDto, GetViewerAssigneeIdFieldDto } from '../assignee/dto/request/get-assignee-id-field.dto';
import { GetViewerAssigneeIdDto } from '../assignee/dto/request/get-assignee-id.dto';
import { GetUserIdFieldDto } from '../user/dto/request/get-user-id-field.dto';
import { AssigneeUserService } from './assignee-user.service';
import { CreateAssigneeUserDto } from './dto/request/create-assignee-user.dto';
import { AssigneeUserDto } from './dto/response/assignee-user.dto';

// FIX Move to assignees controller?
@Controller('assignee-user')
export class AssigneeUserController {
  constructor(private readonly assigneeUserService: AssigneeUserService) { }

  @ApiOperation({ operationId: 'createAssigneeUser' })
  @ApiBody({ type: CreateAssigneeUserDto })
  @Post()
  @ApiCreatedResponse({ type: AssigneeUserDto })
  @TransformPlainToInstance(AssigneeUserDto)
  async create(
    @Body() dto: CreateAssigneeUserDto
  ) {
    return await this.assigneeUserService.create(dto);
  }


  @ApiOperation({ operationId: 'listAssigneeUsers' })
  @ApiParam({ name: 'id', type: Number })
  @Get(':id')
  @ApiOkResponse({ type: [AssigneeUserDto] })
  @TransformPlainToInstance(AssigneeUserDto)
  async findForAssignee(
    @Param() { id }: GetViewerAssigneeIdDto
  ) {
    return await this.assigneeUserService.findForAssignee(id);
  }

  @ApiOperation({ operationId: 'patchAssigneeUser' })
  @ApiParam({ name: 'assigneeId', type: Number })
  @ApiParam({ name: 'userId', type: Number })
  @Get(':assigneeId/:userId')
  @ApiOkResponse({ type: AssigneeUserDto })
  @TransformPlainToInstance(AssigneeUserDto)
  async findOne(
    @Param() { assigneeId }: GetViewerAssigneeIdFieldDto,
    @Param() { userId }: GetUserIdFieldDto
  ) {
    return await this.assigneeUserService.findOne(assigneeId, userId);
  }

  @ApiOperation({ operationId: 'deleteAssigneeUser' })
  @ApiParam({ name: 'assigneeId', type: Number })
  @ApiParam({ name: 'userId', type: Number })
  @Delete(':assigneeId/:userId')
  @ApiOkResponse({ type: AssigneeUserDto })
  @TransformPlainToInstance(AssigneeUserDto)
  async remove(
    @Param() { assigneeId }: GetManagerAssigneeIdFieldDto,
    @Param() { userId }: GetUserIdFieldDto
  ) {
    return await this.assigneeUserService.remove(assigneeId, userId);
  }
}
