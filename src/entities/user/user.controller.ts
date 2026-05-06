import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiParam } from '@nestjs/swagger';
import { TransformPlainToInstance } from 'class-transformer';
import { BIGuard } from '../../common/guards/bi.guard';
import { CreateUserDto } from './dto/request/create-user.dto';
import { GetUserIdDto } from './dto/request/get-user-id.dto';
import { UpdateUserDto } from './dto/request/update-user.dto';
import { UserDto } from './dto/response/user.dto';
import { UserService } from './user.service';

@UseGuards(BIGuard)
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @ApiOperation({ operationId: 'createUser' })
  @ApiBody({ type: CreateUserDto })
  @Post()
  @ApiCreatedResponse({ type: UserDto })
  @TransformPlainToInstance(UserDto)
  async create(
    @Body() dto: CreateUserDto
  ) {
    return await this.userService.create(dto);
  }

  @ApiOperation({ operationId: 'listUsers' })
  @Get()
  @ApiOkResponse({ type: [UserDto] })
  @TransformPlainToInstance(UserDto)
  async findAll() {
    return await this.userService.findAll();
  }

  @ApiOperation({ operationId: 'getUser' })
  @ApiParam({ name: 'id', type: Number })
  @Get(':id')
  @ApiOkResponse({ type: UserDto })
  @TransformPlainToInstance(UserDto)
  async findOne(
    @Param() { id }: GetUserIdDto
  ) {
    return await this.userService.findOne(id);
  }

  @ApiOperation({ operationId: 'patchUser' })
  @ApiParam({ name: 'id', type: Number })
  @ApiBody({ type: UpdateUserDto })
  @Patch(':id')
  @ApiOkResponse({ type: UserDto })
  @TransformPlainToInstance(UserDto)
  async update(
    @Param() { id }: GetUserIdDto,
    @Body() dto: UpdateUserDto
  ) {
    return await this.userService.update(id, dto);
  }

  @ApiOperation({ operationId: 'deleteUser' })
  @ApiParam({ name: 'id', type: Number })
  @Delete(':id')
  @ApiOkResponse({ type: UserDto })
  @TransformPlainToInstance(UserDto)
  async remove(
    @Param() { id }: GetUserIdDto
  ) {
    return await this.userService.remove(id);
  }
}
