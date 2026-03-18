import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { CreatePermissionDto } from './dto/request/create-permission.dto';
import { DeletePermissionDto } from './dto/request/delete-permission.dto';
import { UpdatePermissionDto } from './dto/request/update-permission.dto';
import { PermissionDto } from './dto/response/permission.dto';
import { PermissionService } from './permission.service';

// FIX Guards
// FIX Use @TransfromPlainToInstance instead of plainToInstance
@Controller('permission')
export class PermissionController {
  constructor(private readonly permissionService: PermissionService) {}

  @Post()
  async create(@Body() dto: CreatePermissionDto): Promise<PermissionDto> {
    const record = await this.permissionService.create(dto);
    return plainToInstance(PermissionDto, record);
  }

  @Get()
  async findAll(): Promise<PermissionDto[]> {
    const records = await this.permissionService.findAll();
    return plainToInstance(PermissionDto, records);
  }

  // FIX Get user from cookie middleware 
  // FIX Get workspace from query
  // FIX Use GetIdDto
  @Get(':userId/:workspaceId')
  async findOne(
    @Param('userId', ParseIntPipe) userId: number,
    @Param('workspaceId', ParseIntPipe) workspaceId: number,
  ): Promise<PermissionDto> {
    const record = await this.permissionService.findOne(userId, workspaceId);
    return plainToInstance(PermissionDto, record);
  }

  // FIX Get user from cookie middleware 
  // FIX Get workspace from query
  // FIX Use GetIdDto
  @Patch(':userId/:workspaceId')
  async update(
    @Param('userId', ParseIntPipe) userId: number,
    @Param('workspaceId', ParseIntPipe) workspaceId: number,
    @Body() dto: UpdatePermissionDto,
  ): Promise<PermissionDto> {
    const record = await this.permissionService.update(userId, workspaceId, dto);
    return plainToInstance(PermissionDto, record);
  }

  // FIX Get user from cookie middleware 
  // FIX Get workspace from query
  // FIX Use GetIdDto
  @Delete(':userId/:workspaceId')
  async remove(
    @Param('userId', ParseIntPipe) userId: number,
    @Param('workspaceId', ParseIntPipe) workspaceId: number,
    @Body() dto: DeletePermissionDto,
  ): Promise<PermissionDto> {
    const record = await this.permissionService.remove(dto.userId, dto.workspaceId);
    return plainToInstance(PermissionDto, record);
  }
}
