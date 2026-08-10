import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';
import { IsArray, IsBoolean, IsDate, IsOptional, ValidateNested } from 'class-validator';
import { IsNotEmptyString } from '../../../../common/decorators/is-not-empty-string.decorator';
import { TransformToBoolean } from '../../../../common/decorators/transform-to-boolean.decorator';
import { GetManagerWorkspaceIdFieldDto } from '../../../workspace/dto/request/get-workspace-id-field.dto';
import { CreateSourceTaskDto } from './create-source-task.dto';

export class CreateSourceDto extends GetManagerWorkspaceIdFieldDto {
  @ApiProperty()
  @IsNotEmptyString()
  name: string;

  @ApiPropertyOptional({ nullable: true })
  @IsOptional()
  @IsDate()
  @Type(() => Date)
  date?: Date;

  @ApiProperty({ type: [String], required: false })
  @IsOptional()
  @IsArray()
  @IsNotEmptyString({ each: true })
  @Transform(({ value }) => (
    !!value
      ? (
        Array.isArray(value)
          ? value
          : [value]
      )
      : []
  ))
  tags?: string[];

  @ApiProperty({ type: 'string', format: 'binary', required: false, nullable: true })
  @IsOptional()
  attachment?: Express.Multer.File;

  @ApiPropertyOptional({ default: false })
  @IsOptional()
  @IsBoolean()
  @TransformToBoolean()
  aiExtraction?: boolean;

  @ApiPropertyOptional({ default: false })
  @IsOptional()
  @IsBoolean()
  @TransformToBoolean()
  draft?: boolean;

  @ApiPropertyOptional({ type: [CreateSourceTaskDto] })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateSourceTaskDto)
  tasks?: CreateSourceTaskDto[];
}
