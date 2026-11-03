import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsOptional } from 'class-validator';
import { EntityExists } from '../../../../common/decorators/entity-exists.decorator';
import { IdExists } from '../../../../common/decorators/id-exists.decorator';
import { TransformToBoolean } from '../../../../common/decorators/transform-to-boolean.decorator';
import { GetManagerAssigneeIdFieldDto } from './get-assignee-id-field.dto';

export class GetStatusEditableDto extends GetManagerAssigneeIdFieldDto {
  @ApiProperty({ type: Boolean })
  @EntityExists('assignee', {
    message: 'The statusEditable is not enabled',
    validateIf: ({ value }) => value === true,
    findArgs: ({ obj }) => ({
      where: { id: obj.assigneeId, deletedAt: null, workspace: { assigneeStatusEditable: true } }
    })
  })
  @IsBoolean()
  @TransformToBoolean()
  statusEditable: boolean;

  @ApiPropertyOptional()
  @IsOptional()
  @IdExists('assigneeUser', {
    findArgs: ({ obj, value }) => ({
      where: { assigneeId: obj.assigneeId, userId: value }
    })
  })
  userId?: number;
}
