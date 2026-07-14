import { Exclude, Type } from 'class-transformer';
import { ExposeProperty } from '../../../../common/decorators/expose-property.decorator';
import { TaskDto } from '../../../task/dto/response/task.dto';

@Exclude()
export class SourceExtractionSuccessDto {
  @ExposeProperty()
  sourceId: number;

  @ExposeProperty({ type: [TaskDto] })
  @Type(() => TaskDto)
  tasks: TaskDto[];
}
