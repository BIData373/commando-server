import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsInt, IsOptional, IsString } from 'class-validator';

export class CreateWorkspaceDto {
  @ApiProperty()
  @IsString()
  title: string;

  @ApiProperty()
  @IsString()
  urlName: string;

  @ApiProperty({ type: String, nullable: true, required: false })
  @IsString()
  @IsOptional()
  icon?: string | null;

  @ApiProperty({ required: false })
  @IsBoolean()
  @IsOptional()
  assigneeStatusEditable?: boolean;

  @ApiProperty()
  @IsInt()
  pikudId: number;
}
