import { Exclude } from 'class-transformer';
import { ExposeProperty } from '../../../../common/decorators/expose-property.decorator';
import { PermissionType } from '../../../../types/prisma';

@Exclude()
export class PermissionDto {
  @ExposeProperty()
  userId: number;

  @ExposeProperty()
  workspaceId: number;

  @ExposeProperty({ enum: PermissionType })
  type: PermissionType;
}
