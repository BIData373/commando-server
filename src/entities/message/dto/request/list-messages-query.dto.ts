import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsArray, IsBoolean, IsOptional } from 'class-validator';
import { TransformToBoolean } from '../../../../common/decorators/transform-to-boolean.decorator';

export class ListMessagesQueryDto {
  @ApiProperty({ type: Number, required: false })
  @IsOptional()
  @Transform(({ value }) => Number(value))
  taskId?: number;

  @ApiProperty({ type: [Number], required: false })
  @IsOptional()
  @Transform(({ value }) => String(value).split(',').map(Number))
  @IsArray()
  taskIds?: number[];

  @ApiProperty({ type: Number, required: false })
  @IsOptional()
  @Transform(({ value }) => Number(value))
  workspaceId?: number;

  @ApiProperty({ type: Boolean, required: false })
  @IsOptional()
  @IsBoolean()
  @TransformToBoolean()
  personal?: boolean;

  @ApiProperty({ type: Boolean, required: false })
  @IsOptional()
  @IsBoolean()
  @TransformToBoolean()
  isArchived?: boolean;
}
