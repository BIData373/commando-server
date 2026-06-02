import { ApiProperty, IntersectionType, PartialType } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';
import { IdExists } from '../../../../common/decorators/id-exists.decorator';
import { GetContextDto } from '../../../../common/dto/request/get-context.dto';
import { ITaskContext } from '../../interfaces/task.interface';
import { GetTaskFieldsDto } from './get-task-fields.dto';

export class UpdateTaskDto extends IntersectionType(PartialType(GetTaskFieldsDto), GetContextDto<ITaskContext>) {
  @ApiProperty({ required: false })
  @IsOptional()
  @IdExists('source', {
    validateIf: ({ value, obj }) => !!value && !!obj.context.task.id,
    findArgs: ({ value, obj }) => ({
      where: {
        workspace: {
          sources: { some: { id: value! } },
          tasks: { some: { id: obj.context.task.id } }
        }
      }
    })
  })
  sourceId?: number | null;
}
