import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsOptional } from 'class-validator';
import { IdExists } from '../../../../common/decorators/id-exists.decorator';
import { TransformToBoolean } from '../../../../common/decorators/transform-to-boolean.decorator';
import { GetContextDto } from '../../../../common/dto/request/get-context.dto';
import { IUserContext } from '../../../user/interfaces/user-context.interface';

export class GetStatusEditableDto extends GetContextDto<IUserContext> {
  @ApiProperty({ type: Boolean })
  @IsBoolean()
  @TransformToBoolean()
  statusEditable: boolean;

  @ApiProperty()
  @IdExists('assignee', { filterDeletedAt: true })
  assigneeId: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IdExists('assigneeUser', {
    findArgs: ({ obj, value }) => ({
      where: { assigneeId: obj.assigneeId, userId: value }
    })
  })
  userId?: number;
}
