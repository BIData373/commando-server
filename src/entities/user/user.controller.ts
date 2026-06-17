import { Body, Controller, Delete, Get, Param, Patch, Post, Query, UseGuards } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiParam, ApiQuery } from '@nestjs/swagger';
import { TransformPlainToInstance } from 'class-transformer';
import { BIGuard } from '../../common/guards/bi.guard';
import { CreateUserDto } from './dto/request/create-user.dto';
import { GetSearchDto } from './dto/request/get-search.dto';
import { GetUserIdDto } from './dto/request/get-user-id.dto';
import { UpdateUserDto } from './dto/request/update-user.dto';
import { MirageUserDto } from './dto/response/mirage-user.dto';
import { UserDto } from './dto/response/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @UseGuards(BIGuard)
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

  @UseGuards(BIGuard)
  @ApiOperation({ operationId: 'listUsers' })
  @Get()
  @ApiOkResponse({ type: [UserDto] })
  @TransformPlainToInstance(UserDto)
  async findAll() {
    return await this.userService.findAll();
  }

  @ApiOperation({ operationId: 'searchUsers' })
  @ApiQuery({ type: GetSearchDto })
  @Get('search')
  @ApiOkResponse({ type: [MirageUserDto] })
  @TransformPlainToInstance(MirageUserDto)
  async search(
    @Query() { search }: GetSearchDto
  ) {
    return await this.userService.search(search);
  }

  @UseGuards(BIGuard)
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

  @UseGuards(BIGuard)
  @ApiOperation({ operationId: 'updateUser' })
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

  @UseGuards(BIGuard)
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
