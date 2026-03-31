import { IsBoolean, IsInt, IsOptional, IsString } from 'class-validator';
import { ICreateWorkspace } from '../../../../types';

export class CreateWorkspaceDto implements ICreateWorkspace {
  @IsString()
  title: string;

  @IsString()
  urlName: string;

  @IsString()
  @IsOptional()
  icon?: string;

  @IsBoolean()
  @IsOptional()
  assigneeStatusEditable?: boolean;

  @IsInt()
  pikudId: number;
}
