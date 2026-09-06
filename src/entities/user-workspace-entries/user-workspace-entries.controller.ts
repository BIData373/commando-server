import { Controller, HttpCode, Patch, Query, Req } from '@nestjs/common';
import { ApiNoContentResponse, ApiOperation, ApiQuery } from '@nestjs/swagger';
import { HttpStatusCode } from 'axios';
import { UserWorkspaceEntriesService } from './user-workspace-entries.service';
import { GetOptionalViewerWorkspaceIdFieldDto } from '../workspace/dto/request/get-workspace-id-field.dto';
import { Request } from 'express';

@Controller('user-workspace-entries')
export class UserWorkspaceEntriesController {
  constructor(private readonly userWorkspaceEntriesService: UserWorkspaceEntriesService) { }

  @ApiOperation({ operationId: 'updateUserEntrie' })
  @ApiQuery({ type: GetOptionalViewerWorkspaceIdFieldDto })
  @Patch()
  @HttpCode(HttpStatusCode.NoContent)
  @ApiNoContentResponse()
  async updateUserEntrie(
    @Req() { user }: Request,
    @Query() { workspaceId }: GetOptionalViewerWorkspaceIdFieldDto
  ) {
    return await this.userWorkspaceEntriesService.updateUserEntrie(user.id, workspaceId)
  }
}
