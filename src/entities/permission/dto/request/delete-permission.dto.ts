import { IsInt } from 'class-validator';

export class DeletePermissionDto {
  @IsInt()
  userId: number;

  @IsInt()
  workspaceId: number;
}
