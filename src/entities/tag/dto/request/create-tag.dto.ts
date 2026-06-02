import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmptyString } from '../../../../common/decorators/is-not-empty-string.decorator';
import { GetManagerWorkspaceIdFieldDto } from '../../../workspace/dto/request/get-workspace-id-field.dto';
import { EntityExists } from '../../../../common/decorators/entity-exists.decorator';

export class CreateTagDto extends GetManagerWorkspaceIdFieldDto {
  @ApiProperty()
  @IsNotEmptyString()
  // TODO - error message is wrong, it says id [name]
  @EntityExists('tag', {
    findArgs: ({ obj: { name, workspaceId } }) => ({
      where: { name, workspaceId }
    }),
    failIfExists: true
  })
  name: string;
}