import { Body, Controller, Delete, Get, Param, Patch, Post, Query, Req, UseGuards, UseInterceptors } from '@nestjs/common';
import { ApiBadRequestResponse, ApiBody, ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiParam, ApiQuery } from '@nestjs/swagger';
import { TransformPlainToInstance } from 'class-transformer';
import { Request } from 'express';
import { BIGuard } from '../../common/guards/bi.guard';
import { CopyDtosInRequest } from '../../common/interceptors/copy-dtos-in-request.interceptor';
import { CreateWorkspaceDto } from './dto/request/create-workspace.dto';
import { GetManagerWorkspaceIdDto, GetWorkspaceIdDto } from './dto/request/get-workspace-id.dto';
import { GetOptionalWorkspaceUrlNameDto } from './dto/request/get-workspace-url-name.dto';
import { UpdateWorkspaceDto } from './dto/request/update-workspace.dto';
import { WorkspaceErrorDto } from './dto/response/workspace-error.dto';
import { WorkspaceWithPermissionDto } from './dto/response/workspace-with-permission.dto';
import { WorkspaceDto } from './dto/response/workspace.dto';
import { WorkspaceService } from './workspace.service';

@Controller('workspace')
export class WorkspaceController {
  constructor(private readonly workspaceService: WorkspaceService) { }

  @UseGuards(BIGuard)
  @ApiOperation({ operationId: 'createWorkspace' })
  @ApiBody({ type: CreateWorkspaceDto })
  @Post()
  @ApiCreatedResponse({ type: WorkspaceDto })
  @ApiBadRequestResponse({ type: WorkspaceErrorDto })
  @TransformPlainToInstance(WorkspaceDto)
  async create(
    @Req() { user }: Request,
    @Body() dto: CreateWorkspaceDto
  ) {
    return await this.workspaceService.create(dto, user.id);
  }

  @ApiOperation({ operationId: 'listWorkspaces' })
  @ApiQuery({ name: 'urlName', type: String, required: false })
  @Get()
  @ApiOkResponse({ type: [WorkspaceWithPermissionDto] })
  @TransformPlainToInstance(WorkspaceWithPermissionDto)
  async findAll(
    @Req() { user }: Request,
    @Query() { context: { workspace } }: GetOptionalWorkspaceUrlNameDto
  ) {
    return await this.workspaceService.findAll(user.id, workspace)
  }

  @ApiOperation({ operationId: 'getPermittedWorkspaces' })
  @Get('permitted')
  @ApiOkResponse({ type: [WorkspaceWithPermissionDto] })
  @TransformPlainToInstance(WorkspaceWithPermissionDto)
  async findPermitted(
    @Req() { user }: Request,
  ) {
    return await this.workspaceService.findPermitted(user.id);
  }

  @ApiOperation({ operationId: 'getWorkspace' })
  @ApiParam({ name: 'id', type: Number })
  @Get(':id')
  @ApiOkResponse({ type: WorkspaceDto })
  @TransformPlainToInstance(WorkspaceDto)
  async findOne(
    @Param() { id }: GetWorkspaceIdDto
  ) {
    return await this.workspaceService.findOne(id);
  }

  @ApiOperation({ operationId: 'updateWorkspace' })
  @ApiParam({ name: 'id', type: Number })
  @ApiBody({ type: UpdateWorkspaceDto })
  @UseInterceptors(CopyDtosInRequest<UpdateWorkspaceDto, GetManagerWorkspaceIdDto>({
    from: 'params.id', to: 'body.context.workspace', dto: GetManagerWorkspaceIdDto
  }))
  
  @Patch(':id')
  @ApiOkResponse({ type: WorkspaceDto })
  @ApiBadRequestResponse({ type: WorkspaceErrorDto })
  @TransformPlainToInstance(WorkspaceDto)
  async update(
    @Req() { user }: Request,
    @Param() { id }: GetManagerWorkspaceIdDto,
    @Body() dto: UpdateWorkspaceDto
  ) {
    return await this.workspaceService.update(id, dto, user.id);
  }

  @ApiOperation({ operationId: 'deleteWorkspace' })
  @ApiParam({ name: 'id', type: Number })
  @Delete(':id')
  @ApiOkResponse({ type: WorkspaceDto })
  @TransformPlainToInstance(WorkspaceDto)
  async remove(
    @Req() { user }: Request,
    @Param() { id }: GetManagerWorkspaceIdDto
  ) {
    return await this.workspaceService.remove(id, user.id);
  }
}
