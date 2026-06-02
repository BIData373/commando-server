import { Exclude } from 'class-transformer';
import { ExposeProperty } from '../../../../common/decorators/expose-property.decorator';
import { IdDto } from '../../../../common/dto/response/id.dto';
import { WorkspaceStatusType } from '../../../../types/prisma/client';

@Exclude()
export class WorkspaceStatusDto extends IdDto {
  @ExposeProperty()
  name: string;

  @ExposeProperty()
  color: string;

  @ExposeProperty({ enumName: 'WorkspaceStatusType', enum: WorkspaceStatusType })
  type: WorkspaceStatusType;

  @ExposeProperty()
  workspaceId: number;
}
