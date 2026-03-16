import { IsBoolean, IsInt, IsOptional, IsString } from 'class-validator';

export class CreateWorkspaceDto {
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

  @IsInt()
  createdBy: number;

  @IsInt()
  updatedBy: number;
}
