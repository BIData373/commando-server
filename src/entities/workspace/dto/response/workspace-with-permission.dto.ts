import { Exclude, Transform } from 'class-transformer';
import { ExposeProperty } from '../../../../common/decorators/expose-property.decorator';
import { PermissionType, Prisma } from '../../../../types/prisma';
import { WorkspaceDto } from './workspace.dto';

type WorkspaceWithPermission = Prisma.WorkspaceGetPayload<{ include: { permissions: true } }>

@Exclude()
export class WorkspaceWithPermissionDto extends WorkspaceDto {
  @ExposeProperty({ enumName: 'PermissionType', enum: PermissionType, nullable: true })
  @Transform(({ obj: { permissions } }: { obj: WorkspaceWithPermission }) => permissions[0]?.type)
  permissionType: PermissionType | null;
}
