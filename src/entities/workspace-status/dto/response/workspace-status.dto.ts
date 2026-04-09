import { Exclude, Expose } from 'class-transformer';
import { IdDto } from '../../../../common/dto/response/id.dto';
import { IWorkspaceStatus } from '../../../../types';

@Exclude()
export class WorkspaceStatusDto extends IdDto implements IWorkspaceStatus {
  @Expose()
  name: string;

  @Expose()
  color: string;

  @Expose()
  statusType: string;

  @Expose()
  workspaceId: number;
}
