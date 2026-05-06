import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmptyString } from '../../../../common/decorators/is-not-empty-string.decorator';
import { ICreateSource } from '../../../../types';
import { GetManagerWorkspaceIdFieldDto } from '../../../workspace/dto/request/get-workspace-id-field.dto';

export class CreateSourceDto extends GetManagerWorkspaceIdFieldDto implements ICreateSource {
  @ApiProperty()
  @IsNotEmptyString()
  name: string;
}
