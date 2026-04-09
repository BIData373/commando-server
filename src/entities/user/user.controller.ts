import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { TransformPlainToInstance } from 'class-transformer';
import { BIGuard } from '../../common/guards/bi.guard';
import { CreateUserDto } from './dto/request/create-user.dto';
import { GetUserIdDto } from './dto/request/get-user-id.dto';
import { UpdateUserDto } from './dto/request/update-user.dto';
import { UserDto } from './dto/response/user.dto';
import { UserService } from './user.service';

// FIX Guards
@UseGuards(BIGuard)
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post()
  @TransformPlainToInstance(UserDto)
  async create(
    @Body() dto: CreateUserDto
  ) {
    return await this.userService.create(dto);
  }

  @Get()
  @TransformPlainToInstance(UserDto)
  async findAll() {
    return await this.userService.findAll();
  }

  @Get(':id')
  @TransformPlainToInstance(UserDto)
  async findOne(
    @Param() { id }: GetUserIdDto
  ) {
    return await this.userService.findOne(id);
  }

  @Patch(':id')
  @TransformPlainToInstance(UserDto)
  async update(
    @Param() { id }: GetUserIdDto,
    @Body() dto: UpdateUserDto,
  ) {
    return await this.userService.update(id, dto);
  }

  @Delete(':id')
  @TransformPlainToInstance(UserDto)
  async remove(
    @Param() { id }: GetUserIdDto
  ) {
    return await this.userService.remove(id);
  }
}
