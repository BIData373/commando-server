import { ApiProperty, IntersectionType } from '@nestjs/swagger';
import { IsIdPermitted } from '../../../../common/decorators/is-permitted-id.decorator';
import { GetContextDto } from '../../../../common/dto/request/get-context.dto';
import { PermissionType } from '../../../../types/prisma';
import { IUserContext } from '../../../user/interfaces/user-context.interface';
import { GetWorkspaceStatusFieldsDto } from './get-workspace-status-fields.dto';

export class CreateWorkspaceStatusDto extends IntersectionType(
  GetWorkspaceStatusFieldsDto,
  GetContextDto<IUserContext>
) {
  @ApiProperty()
  @IsIdPermitted('workspace', PermissionType.MANAGER, { filterDeletedAt: true })
  workspaceId: number;
}
