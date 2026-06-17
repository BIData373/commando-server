import { Exclude } from 'class-transformer';
import { ExposeProperty } from '../../../../common/decorators/expose-property.decorator';
import { PermissionType } from '../../../../types/prisma';
import { WorkspaceDto } from './workspace.dto';

@Exclude()
export class WorkspaceWithPermissionDto extends WorkspaceDto {
  @ExposeProperty({ enumName: 'PermissionType', enum: PermissionType, nullable: true })
  permissionType: PermissionType | null;
}
