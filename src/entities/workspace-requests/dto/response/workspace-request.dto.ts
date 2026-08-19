import { Exclude } from 'class-transformer';
import { ExposeProperty } from '../../../../common/decorators/expose-property.decorator';
import { IdMetaFieldsDto } from '../../../../common/dto/response/id-meta-fields.dto';
import { WorkspaceRequestStatus } from '../../../../types/prisma';

@Exclude()
export class WorkspaceRequestDto extends IdMetaFieldsDto {
  @ExposeProperty()
  title: string;

  @ExposeProperty()
  urlName: string;

  @ExposeProperty({ type: String, nullable: true })
  icon: string | null;

  @ExposeProperty()
  pikudId: number;

  @ExposeProperty({ type: [String] })
  managers: string[];

  @ExposeProperty({ enum: WorkspaceRequestStatus })
  status: WorkspaceRequestStatus;

  @ExposeProperty({ type: String, nullable: true })
  declineMessage: string | null;
}
