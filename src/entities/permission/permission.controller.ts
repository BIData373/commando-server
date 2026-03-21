import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { TransformPlainToInstance } from 'class-transformer';
import { GetUserIdFieldDto } from '../user/dto/request/get-user-id-field.dto';
import { GetWorkspaceIdFieldDto } from '../workspace/dto/request/get-workspace-id-field.dto';
import { CreatePermissionDto } from './dto/request/create-permission.dto';
import { DeletePermissionDto } from './dto/request/delete-permission.dto';
import { UpdatePermissionDto } from './dto/request/update-permission.dto';
import { PermissionDto } from './dto/response/permission.dto';
import { PermissionService } from './permission.service';

// FIX Guards
@Controller('permission')
export class PermissionController {
  constructor(private readonly permissionService: PermissionService) { }

  @Post()
  @TransformPlainToInstance(PermissionDto)
  async create(
    @Body() dto: CreatePermissionDto
  ) {
    return await this.permissionService.create(dto);
  }

  @Get()
  @TransformPlainToInstance(PermissionDto)
  async findAll() {
    return await this.permissionService.findAll();
  }

  // FIX Get user from cookie middleware 
  // FIX Get workspace from query
  @Get(':userId/:workspaceId')
  @TransformPlainToInstance(PermissionDto)
  async findOne(
    @Param() { userId }: GetUserIdFieldDto,
    @Param() { workspaceId }: GetWorkspaceIdFieldDto,
  ) {
    return await this.permissionService.findOne(userId, workspaceId);
  }

  // FIX Get user from cookie middleware 
  // FIX Get workspace from query
  @Patch(':userId/:workspaceId')
  @TransformPlainToInstance(PermissionDto)
  async update(
    @Body() { userId, workspaceId, type }: UpdatePermissionDto,
  ) {
    return await this.permissionService.update(userId, workspaceId, type);
  }

  // FIX Get user from cookie middleware 
  // FIX Get workspace from query
  @Delete(':userId/:workspaceId')
  @TransformPlainToInstance(PermissionDto)
  async remove(
    @Param() { userId }: GetUserIdFieldDto,
    @Param() { workspaceId }: GetWorkspaceIdFieldDto,
    @Body() dto: DeletePermissionDto,
  ) {
    return await this.permissionService.remove(dto.userId, dto.workspaceId);
  }
}
