import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsOptional } from 'class-validator';
import { EntityExists } from '../../../../common/decorators/entity-exists.decorator';
import { IdExists } from '../../../../common/decorators/id-exists.decorator';
import { TransformToBoolean } from '../../../../common/decorators/transform-to-boolean.decorator';
import { GetContextDto } from '../../../../common/dto/request/get-context.dto';
import { IUserContext } from '../../../user/interfaces/user-context.interface';
import { IAssigneeContext } from '../../interfaces/assignee-context.interface';

export class UpdateStatusEditableDto extends GetContextDto<IAssigneeContext & IUserContext> {
  @ApiProperty({ type: Boolean })
  @EntityExists('assignee', {
    message: 'Cannot set statusEditable: enable assigneeStatusEditable on the workspace first',
    validateIf: ({ value, obj }) => value === true && !!obj?.context?.assignee?.id,
    findArgs: ({ obj }) => ({
      where: { id: obj.context.assignee.id, deletedAt: null, workspace: { assigneeStatusEditable: true } }
    })
  })
  @IsBoolean()
  @TransformToBoolean()
  statusEditable: boolean;

  @ApiPropertyOptional()
  @IsOptional()
  @IdExists('assigneeUser', {
    validateIf: ({ obj }) => !!obj?.context?.assignee?.id,
    findArgs: ({ obj, value }) => ({
      where: { assigneeId: obj.context.assignee.id, userId: value }
    })
  })
  userId?: number;
}
