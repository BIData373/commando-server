import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsInt, IsOptional, IsString } from 'class-validator';
import { ICreateWorkspace } from '../../../../types';

export class CreateWorkspaceDto implements ICreateWorkspace {
  @ApiProperty()
  @IsString()
  title: string;

  @ApiProperty()
  @IsString()
  urlName: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  icon?: string;

  @ApiProperty({ required: false })
  @IsBoolean()
  @IsOptional()
  assigneeStatusEditable?: boolean;

  @ApiProperty()
  @IsInt()
  pikudId: number;
}
