import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';
import { IdExists } from '../../../../common/decorators/id-exists.decorator';
import { ExtractValue } from '../../../../common/types/extract-value.type';
import { PredicateParams } from '../../../../common/types/predicate-params.type';
import { PermissionType } from '../../../../types/prisma';
import { GetPermittedTaskIdFieldDto } from '../../../task/dto/request/get-task-id-field.dto';

const findInTask = <
  TDto extends { taskId: number },
  TDtoField extends keyof TDto,
  TDtoValue extends ExtractValue<TDto, TDtoField>
>(
  { value, obj }: PredicateParams<TDto, TDtoField, TDtoValue>
) => ({
  where: {
    id: value,
    workspace: { tasks: { some: { id: obj.taskId } } }
  }
})

interface IAssigneeId {
  assigneeId: number
}

class GetTaskIdFieldInAssigneeDto extends GetPermittedTaskIdFieldDto(
  PermissionType.MANAGER,
  (obj: IAssigneeId) => obj.assigneeId
) { }

export class UpdateAssigneeTaskStatusDto extends GetTaskIdFieldInAssigneeDto {
  @ApiProperty()
  @IdExists('assignee', { filterDeletedAt: true, findArgs: findInTask })
  assigneeId: number

  @ApiProperty()
  @IdExists('workspaceStatus', { findArgs: findInTask })
  statusId: number;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  description?: string
}