import { Exclude, Expose } from 'class-transformer';
import { PermissionType } from '../../../../../prisma';

@Exclude()
export class PermissionDto {
  @Expose()
  userId: number;

  @Expose()
  workspaceId: number;

  @Expose()
  type: PermissionType;
}
