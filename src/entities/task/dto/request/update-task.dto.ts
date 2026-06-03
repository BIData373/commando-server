import { ApiProperty, IntersectionType, PartialType } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsArray, IsOptional, ValidateNested } from 'class-validator';
import { EntityExists } from '../../../../common/decorators/entity-exists.decorator';
import { IdExists } from '../../../../common/decorators/id-exists.decorator';
import { GetContextDto } from '../../../../common/dto/request/get-context.dto';
import { IContext } from '../../../../common/interfaces/context.interface';
import { IUserContext } from '../../../user/interfaces/user-context.interface';
import { ITaskContext } from '../../interfaces/task.interface';
import { GetTaskAssigneeDto } from './get-task-assignee.dto';
import { GetTaskFieldsDto } from './get-task-fields.dto';

const isInTasks = (obj: IContext<ITaskContext>) => ({
  tasks: { some: { id: obj.context.task.id } }
})

export class UpdateTaskDto extends IntersectionType(
  PartialType(GetTaskFieldsDto),
  GetContextDto<ITaskContext & IUserContext>
) {
  @ApiProperty({ type: Number, nullable: true, required: false })
  @IsOptional()
  @IdExists('source', {
    validateIf: ({ value, obj }) => !!value && !!obj?.context?.task?.id,
    findArgs: ({ value, obj }) => ({
      where: {
        workspace: {
          sources: { some: { id: value! } },
          ...isInTasks(obj)
        }
      }
    })
  })
  sourceId?: number | null;

  @ApiProperty({ type: [GetTaskAssigneeDto], required: false })
  @IsOptional()
  @IsArray()
  @EntityExists('assignee', {
    each: true,
    validateIf: ({ value, obj }) => !!value && !!obj?.context?.task?.id,
    findArgs: ({ value, obj }) => ({
      where: {
        workspace: {
          assignees: { some: { id: value!.id } },
          ...isInTasks(obj)
        }
      }
    })
  })
  @ValidateNested({ each: true })
  @Type(() => GetTaskAssigneeDto)
  assignees?: GetTaskAssigneeDto[]
}
