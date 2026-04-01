import { Body, Controller, Delete, Get, Patch, Query, Req, UseGuards } from '@nestjs/common';
import { TransformPlainToInstance } from 'class-transformer';
import type { Request } from 'express';
import { PermissionSettings } from '../../common/decorators/permission-settings.decorator';
import { PermissionType } from '../../types';
import { GetWorkspaceIdFieldDto } from '../workspace/dto/request/get-workspace-id-field.dto';
import { DeletePermissionDto } from './dto/request/delete-permission.dto';
import { UpdatePermissionDto } from './dto/request/update-permission.dto';
import { PermissionDto } from './dto/response/permission.dto';
import { PermissionGuard } from './guards/permission.guard';
import { PermissionService } from './permission.service';

@Controller('permission')
export class PermissionController {
  constructor(private readonly permissionService: PermissionService) { }

  @Get()
  @TransformPlainToInstance(PermissionDto)
  async findInWorkspace(
    @Query() { workspaceId }: GetWorkspaceIdFieldDto
  ) {
    return await this.permissionService.findInWorkspace(workspaceId);
  }

  @Get('me')
  @TransformPlainToInstance(PermissionDto)
  async findOne(
    @Req() { user }: Request,
    @Query() { workspaceId }: GetWorkspaceIdFieldDto
  ) {
    return await this.permissionService.findOne(user.id, workspaceId);
  }

  @UseGuards(PermissionGuard)
  @PermissionSettings({
    type: PermissionType.MANAGER,
    from: 'body'
  })
  @Patch()
  @TransformPlainToInstance(PermissionDto)
  async update(
    @Body() { upn, workspaceId, type }: UpdatePermissionDto
  ) {
    return await this.permissionService.upsert(upn, workspaceId, type);
  }

  @UseGuards(PermissionGuard)
  @PermissionSettings({
    type: PermissionType.MANAGER,
    from: 'body'
  })
  @Delete()
  @TransformPlainToInstance(PermissionDto)
  async remove(
    @Query() { userId, workspaceId }: DeletePermissionDto
  ) {
    return await this.permissionService.remove(userId, workspaceId);
  }
}
