import { Exclude, Type } from 'class-transformer';
import { ExposeProperty } from '../../../../common/decorators/expose-property.decorator';
import { PermissionType } from '../../../../types/prisma';
import { UserDto } from '../../../user/dto/response/user.dto';

@Exclude()
export class PermissionDto {
  @ExposeProperty()
  @Type(() => UserDto)
  user: UserDto;

  @ExposeProperty()
  workspaceId: number;

  @ExposeProperty({ enum: PermissionType })
  type: PermissionType;
}
