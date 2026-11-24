import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsOptional } from 'class-validator';
import { TransformToBoolean } from '../../../../common/decorators/transform-to-boolean.decorator';

export class GetSourceAttachmentFieldsDto {
  @ApiPropertyOptional({ default: false })
  @IsOptional()
  @IsBoolean()
  @TransformToBoolean()
  visibleToAssignees?: boolean;
}
