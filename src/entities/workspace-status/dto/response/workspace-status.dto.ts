import { Exclude } from 'class-transformer';
import { ExposeProperty } from '../../../../common/decorators/expose-property.decorator';
import { PartialMetaFieldsDto } from '../../../../common/dto/response/partial-meta-fields.dto';
import { WorkspaceStatusType } from '../../../../types/prisma/client';

@Exclude()
export class WorkspaceStatusDto extends PartialMetaFieldsDto {
  @ExposeProperty()
  id: number;

  @ExposeProperty()
  name: string;

  @ExposeProperty()
  color: string;

  @ExposeProperty({ enumName: 'WorkspaceStatusType', enum: WorkspaceStatusType })
  type: WorkspaceStatusType;

  @ExposeProperty()
  workspaceId: number;
}
