import { IsInt, IsString } from 'class-validator';
import { ICreateWorkspaceStatus } from '../../../../types';

export class CreateWorkspaceStatusDto implements ICreateWorkspaceStatus {
  @IsString()
  name: string;

  @IsString()
  color: string;

  @IsString()
  statusType: string;

  @IsInt()
  workspaceId: number;
}
