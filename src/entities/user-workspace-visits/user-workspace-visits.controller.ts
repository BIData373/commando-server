import { Controller, HttpCode, Patch, Query, Req } from '@nestjs/common';
import { ApiNoContentResponse, ApiOperation } from '@nestjs/swagger';
import { HttpStatusCode } from 'axios';
import { UserWorkspaceVisitsService } from './user-workspace-visits.service';
import { GetOptionalViewerWorkspaceIdFieldDto } from '../workspace/dto/request/get-workspace-id-field.dto';
import { Request } from 'express';

@Controller('user-workspace-visits')
export class UserWorkspaceVisitsController {
  constructor(private readonly userWorkspaceVisitsService: UserWorkspaceVisitsService) { }

  @ApiOperation({ operationId: 'upsertUserWorkspaceVisit' })
  @Patch()
  @HttpCode(HttpStatusCode.NoContent)
  @ApiNoContentResponse()
  async updateUserVisit(
    @Req() { user }: Request,
    @Query() { workspaceId }: GetOptionalViewerWorkspaceIdFieldDto
  ) {
    return await this.userWorkspaceVisitsService.updateUserVisit(user.id, workspaceId)
  }
}
