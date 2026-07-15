import { Exclude, Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { ExposeProperty } from '../../../../common/decorators/expose-property.decorator';
import { TaskDto } from '../../../task/dto/response/task.dto';
import { SourceDto } from './source.dto';

@Exclude()
export class SourceWithTasksDto extends SourceDto {
  @ExposeProperty({ type: [TaskDto] })
  @Type(() => TaskDto)
  @ValidateNested({ each: true })
  tasks: TaskDto[];
}
