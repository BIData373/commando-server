import { ApiProperty, IntersectionType } from '@nestjs/swagger';
import { ArrayUnique, IsArray, IsOptional } from 'class-validator';
import { EntityExists } from '../../../../common/decorators/entity-exists.decorator';
import { IsPositiveInt } from '../../../../common/decorators/is-positive-int.decorator';
import { GetManagerWorkspaceIdFieldDto } from '../../../workspace/dto/request/get-workspace-id-field.dto';
import { GetAssigneeGroupFieldsDto } from './get-assignee-group-fields.dto';

export class CreateAssigneeGroupDto extends IntersectionType(
  GetManagerWorkspaceIdFieldDto,
  GetAssigneeGroupFieldsDto
) {
  @ApiProperty({ type: [Number], required: false })
  @IsOptional()
  @IsArray()
  @ArrayUnique()
  @IsPositiveInt({ each: true })
  @EntityExists('assignee', {
    each: true,
    validateIf: ({ obj }) => !!obj.workspaceId,
    findArgs: ({ value, obj }) => ({
      where: { id: value, workspaceId: obj.workspaceId, deletedAt: null }
    })
  })
  assigneeIds?: number[];
}
