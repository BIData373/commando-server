import { Exclude } from 'class-transformer';
import { ExposeProperty } from '../../../../common/decorators/expose-property.decorator';
import { IdDto } from '../../../../common/dto/response/id.dto';

@Exclude()
export class WorkspaceStatusDto extends IdDto {
  @ExposeProperty()
  name: string;

  @ExposeProperty()
  color: string;

  @ExposeProperty()
  statusType: string;

  @ExposeProperty()
  workspaceId: number;
}
