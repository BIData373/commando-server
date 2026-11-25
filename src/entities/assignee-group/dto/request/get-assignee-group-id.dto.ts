import { ApiProperty } from '@nestjs/swagger';
import { IsIdPermitted } from '../../../../common/decorators/is-permitted-id.decorator';
import { GetContextDto } from '../../../../common/dto/request/get-context.dto';
import { PermissionType } from '../../../../types/prisma';
import { IUserContext } from '../../../user/interfaces/user-context.interface';

export function GetPermittedAssigneeGroupIdDto(type: PermissionType) {
  class GetAssigneeGroupIdDto extends GetContextDto<IUserContext> {
    @ApiProperty()
    @IsIdPermitted('assigneeGroup', type, {
      filterDeletedAt: true,
      workspaceFindArgs: ({ value }) => ({
        assigneeGroups: { some: { id: value, deletedAt: null } }
      })
    })
    id: number
  }

  return GetAssigneeGroupIdDto
}

export class GetViewerAssigneeGroupIdDto extends GetPermittedAssigneeGroupIdDto(PermissionType.VIEWER) { }
export class GetManagerAssigneeGroupIdDto extends GetPermittedAssigneeGroupIdDto(PermissionType.MANAGER) { }
