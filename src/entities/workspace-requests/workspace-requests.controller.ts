import { Body, Controller, Delete, Get, Param, Patch, Post, Req, UseGuards } from '@nestjs/common';
import { ApiBadRequestResponse, ApiBody, ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiParam } from '@nestjs/swagger';
import { TransformPlainToInstance } from 'class-transformer';
import { Request } from 'express';
import { BIGuard } from '../../common/guards/bi.guard';
import { CreateWorkspaceRequestDto } from './dto/request/create-workspace-request.dto';
import { GetWorkspaceRequestIdDto } from './dto/request/get-workspace-request-id.dto';
import { UpdateWorkspaceRequestDto } from './dto/request/update-workspace-request.dto';
import { WorkspaceRequestErrorDto } from './dto/response/workspace-request-error.dto';
import { WorkspaceRequestDto } from './dto/response/workspace-request.dto';
import { WorkspaceRequestsService } from './workspace-requests.service';

@Controller('workspace-requests')
export class WorkspaceRequestsController {
  constructor(private readonly workspaceRequestsService: WorkspaceRequestsService) { }

  @ApiOperation({ operationId: 'createWorkspaceRequest' })
  @ApiBody({ type: CreateWorkspaceRequestDto })
  @Post()
  @ApiCreatedResponse({ type: WorkspaceRequestDto })
  @ApiBadRequestResponse({ type: WorkspaceRequestErrorDto })
  @TransformPlainToInstance(WorkspaceRequestDto)
  async create(
    @Req() { user }: Request,
    @Body() createWorkspaceRequestDto: CreateWorkspaceRequestDto
  ) {
    return await this.workspaceRequestsService.create(createWorkspaceRequestDto, user);
  }

  @ApiOperation({ operationId: 'listWorkspaceRequests' })
  @UseGuards(BIGuard)
  @Get()
  @ApiOkResponse({ type: [WorkspaceRequestDto] })
  @TransformPlainToInstance(WorkspaceRequestDto)
  async findAll() {
    return await this.workspaceRequestsService.findAll();
  }

  @ApiOperation({ operationId: 'getWorkspaceRequest' })
  @UseGuards(BIGuard)
  @ApiParam({ name: 'id', type: Number })
  @Get(':id')
  @ApiOkResponse({ type: WorkspaceRequestDto })
  @ApiBadRequestResponse({ type: WorkspaceRequestErrorDto })
  @TransformPlainToInstance(WorkspaceRequestDto)
  async findOne(
    @Param() { id }: GetWorkspaceRequestIdDto
  ) {
    return await this.workspaceRequestsService.findOne(id);
  }

  @ApiOperation({ operationId: 'updateWorkspaceRequest' })
  @UseGuards(BIGuard)
  @ApiParam({ name: 'id', type: Number })
  @ApiBody({ type: UpdateWorkspaceRequestDto })
  @Patch(':id')
  @ApiOkResponse({ type: WorkspaceRequestDto })
  @ApiBadRequestResponse({ type: WorkspaceRequestErrorDto })
  @TransformPlainToInstance(WorkspaceRequestDto)
  async update(
    @Req() { user }: Request,
    @Param() { id }: GetWorkspaceRequestIdDto,
    @Body() updateWorkspaceRequestDto: UpdateWorkspaceRequestDto
  ) {
    return await this.workspaceRequestsService.update(id, updateWorkspaceRequestDto, user.id);
  }

  @ApiOperation({ operationId: 'deleteWorkspaceRequest' })
  @UseGuards(BIGuard)
  @ApiParam({ name: 'id', type: Number })
  @Delete(':id')
  @ApiOkResponse({ type: WorkspaceRequestDto })
  @ApiBadRequestResponse({ type: WorkspaceRequestErrorDto })
  @TransformPlainToInstance(WorkspaceRequestDto)
  async remove(
    @Req() { user }: Request,
    @Param() { id }: GetWorkspaceRequestIdDto
  ) {
    return await this.workspaceRequestsService.remove(id, user.id);
  }
}
