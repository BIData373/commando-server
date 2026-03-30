import { Exclude, Expose } from 'class-transformer';
import { IdDto } from '../../../../common/dto/response/id.dto';

@Exclude()
export class WorkspaceStatusDto extends IdDto {
  @Expose()
  name: string;

  @Expose()
  color: string;

  @Expose()
  statusType: string;

  @Expose()
  workspaceId: number;
}
