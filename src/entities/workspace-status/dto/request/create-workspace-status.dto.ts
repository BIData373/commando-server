import { IsInt, IsString } from 'class-validator';

export class CreateWorkspaceStatusDto {
  @IsString()
  name: string;

  @IsString()
  color: string;

  @IsString()
  statusType: string;

  @IsInt()
  workspaceId: number;
}
