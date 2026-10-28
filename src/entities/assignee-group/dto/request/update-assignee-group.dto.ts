import { ApiProperty, IntersectionType, PartialType } from '@nestjs/swagger';
import { ArrayUnique, IsArray, IsOptional } from 'class-validator';
import { EntityExists } from '../../../../common/decorators/entity-exists.decorator';
import { IsPositiveInt } from '../../../../common/decorators/is-positive-int.decorator';
import { GetContextDto } from '../../../../common/dto/request/get-context.dto';
import { IUserContext } from '../../../user/interfaces/user-context.interface';
import { IAssigneeGroupContext } from '../../interfaces/assignee-group-context.interface';
import { GetAssigneeGroupFieldsDto } from './get-assignee-group-fields.dto';

export class UpdateAssigneeGroupDto extends IntersectionType(
  PartialType(GetAssigneeGroupFieldsDto),
  GetContextDto<IAssigneeGroupContext & IUserContext>
) {
  @ApiProperty({ type: [Number], required: false })
  @IsOptional()
  @IsArray()
  @ArrayUnique()
  @EntityExists('assignee', {
    each: true,
    validateIf: ({ obj }) => !!obj?.context?.assigneeGroup?.id,
    findArgs: ({ value, obj }) => ({
      where: {
        id: value,
        deletedAt: null,
        workspace: {
          assigneeGroups: { some: { id: obj.context.assigneeGroup.id } }
        }
      }
    })
  })
  assigneeIds?: number[];
}
