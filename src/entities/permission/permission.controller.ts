import { Body, Controller, Delete, Get, Patch, Query, Req } from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiOperation, ApiQuery } from '@nestjs/swagger';
import { TransformPlainToInstance } from 'class-transformer';
import type { Request } from 'express';
import { GetWorkspaceIdFieldDto } from '../workspace/dto/request/get-workspace-id-field.dto';
import { DeletePermissionDto } from './dto/request/delete-permission.dto';
import { UpsertPermissionDto } from './dto/request/upsert-permission.dto';
import { PermissionDto } from './dto/response/permission.dto';
import { PermissionService } from './permission.service';

@Controller('permission')
export class PermissionController {
  constructor(private readonly permissionService: PermissionService) { }

  @ApiOperation({ operationId: 'listPermissions' })
  @ApiQuery({ type: GetWorkspaceIdFieldDto })
  @Get()
  @ApiOkResponse({ type: [PermissionDto] })
  @TransformPlainToInstance(PermissionDto)
  async findInWorkspace(
    @Query() { workspaceId }: GetWorkspaceIdFieldDto
  ) {
    return await this.permissionService.findInWorkspace(workspaceId);
  }

  @ApiOperation({ operationId: 'getMyPermission' })
  @ApiQuery({ type: GetWorkspaceIdFieldDto })
  @Get('me')
  @ApiOkResponse({ type: PermissionDto })
  @TransformPlainToInstance(PermissionDto)
  async findOne(
    @Req() { user }: Request,
    @Query() { workspaceId }: GetWorkspaceIdFieldDto
  ) {
    return await this.permissionService.findOne(user, workspaceId);
  }

  @ApiOperation({ operationId: 'upsertPermission' })
  @ApiBody({ type: UpsertPermissionDto })
  @Patch()
  @ApiOkResponse({ type: PermissionDto })
  @TransformPlainToInstance(PermissionDto)
  async upsert(
    @Body() dto: UpsertPermissionDto
  ) {
    return await this.permissionService.upsert(dto);
  }

  @ApiOperation({ operationId: 'deletePermission' })
  @ApiQuery({ type: DeletePermissionDto })
  @Delete()
  @ApiOkResponse({ type: PermissionDto })
  @TransformPlainToInstance(PermissionDto)
  async remove(
    @Query() { userId, workspaceId }: DeletePermissionDto
  ) {
    return await this.permissionService.remove(userId, workspaceId);
  }
}
