import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class WorkspaceStatusDto {
  @Expose()
  id: number;

  @Expose()
  name: string;

  @Expose()
  color: string;

  @Expose()
  statusType: string;

  @Expose()
  workspaceId: number;
}
