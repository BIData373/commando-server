import { IntersectionType } from '@nestjs/mapped-types';
import { Exclude, Expose } from 'class-transformer';
import { IdDto } from '../../../../common/dto/response/id.dto';
import { NameDto } from '../../../../common/dto/response/name.dto';

@Exclude()
export class WorkspaceStatusDto extends IntersectionType(
  IdDto,
  NameDto
) {
  @Expose()
  color: string;

  @Expose()
  statusType: string;

  @Expose()
  workspaceId: number;
}
