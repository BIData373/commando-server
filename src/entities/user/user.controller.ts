import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { CreateUserDto } from './dto/request/create-user.dto';
import { DeleteUserDto } from './dto/request/delete-user.dto';
import { UpdateUserDto } from './dto/request/update-user.dto';
import { UserDto } from './dto/response/user.dto';
import { UserService } from './user.service';

// FIX Guards
// FIX Use @TransfromPlainToInstance instead of plainToInstance
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() dto: CreateUserDto): Promise<UserDto> {
    const record = await this.userService.create(dto);
    return plainToInstance(UserDto, record);
  }

  @Get()
  async findAll(): Promise<UserDto[]> {
    const records = await this.userService.findAll();
    return plainToInstance(UserDto, records);
  }

  // FIX Use GetIdDto
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<UserDto> {
    const record = await this.userService.findOne(id);
    return plainToInstance(UserDto, record);
  }

  // FIX Use GetIdDto
  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateUserDto,
  ): Promise<UserDto> {
    const record = await this.userService.update(id, dto);
    return plainToInstance(UserDto, record);
  }

  // FIX Use GetIdDto
  @Delete(':id')
  async remove(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: DeleteUserDto,
  ): Promise<UserDto> {
    const record = await this.userService.remove(dto.id);
    return plainToInstance(UserDto, record);
  }
}
