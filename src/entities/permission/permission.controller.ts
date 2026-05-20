import { Body, Controller, Delete, Get, Patch, Query, Req } from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiOperation, ApiQuery } from '@nestjs/swagger';
import { TransformPlainToInstance } from 'class-transformer';
import type { Request } from 'express';
import { GetViewerWorkspaceIdFieldDto, GetWorkspaceIdFieldDto } from '../workspace/dto/request/get-workspace-id-field.dto';
import { DeletePermissionDto } from './dto/request/delete-permission.dto';
import { UpdatePermissionDto } from './dto/request/update-permission.dto';
import { PermissionDto } from './dto/response/permission.dto';
import { PermissionService } from './permission.service';

@Controller('permission')
export class PermissionController {
  constructor(private readonly permissionService: PermissionService) { }

  @ApiOperation({ operationId: 'getPermissions' })
  @ApiQuery({ type: GetViewerWorkspaceIdFieldDto })
  @Get()
  @ApiOkResponse({ type: [PermissionDto] })
  @TransformPlainToInstance(PermissionDto)
  async findInWorkspace(
    @Query() { workspaceId }: GetViewerWorkspaceIdFieldDto
  ) {
    return await this.permissionService.findInWorkspace(workspaceId);
  }

  @ApiOperation({ operationId: 'getMyPermission' })
  @ApiQuery({ type: GetViewerWorkspaceIdFieldDto })
  @Get('me')
  @ApiOkResponse({ type: PermissionDto })
  @TransformPlainToInstance(PermissionDto)
  async findOne(
    @Req() { user }: Request,
    @Query() { workspaceId }: GetWorkspaceIdFieldDto
  ) {
    return await this.permissionService.findOne(user.id, workspaceId);
  }

  @ApiOperation({ operationId: 'updatePermission' })
  @ApiBody({ type: UpdatePermissionDto })
  @Patch()
  @ApiOkResponse({ type: PermissionDto })
  @TransformPlainToInstance(PermissionDto)
  async update(
    @Body() { upn, workspaceId, type }: UpdatePermissionDto
  ) {
    return await this.permissionService.upsert(upn, workspaceId, type);
  }

  @ApiOperation({ operationId: 'deletePermission' })
  @Delete()
  @ApiOkResponse({ type: PermissionDto })
  @TransformPlainToInstance(PermissionDto)
  async remove(
    @Query() { userId, workspaceId }: DeletePermissionDto
  ) {
    return await this.permissionService.remove(userId, workspaceId);
  }
}
