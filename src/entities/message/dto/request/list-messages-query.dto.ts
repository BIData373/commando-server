import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsArray, IsBoolean, IsOptional } from 'class-validator';
import { TransformToBoolean } from '../../../../common/decorators/transform-to-boolean.decorator';

export class ListMessagesQueryDto {
  @ApiProperty({ type: Number, required: false })
  @IsOptional()
  @Type(() => Number)
  taskId?: number;

  @ApiProperty({ type: [Number], required: false })
  @IsOptional()
  @IsArray()
  @Type(() => Number)
  taskIds?: number[];

  @ApiProperty({ type: Number, required: false })
  @IsOptional()
  @Type(() => Number)
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
