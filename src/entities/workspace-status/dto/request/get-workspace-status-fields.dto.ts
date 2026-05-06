import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmptyString } from '../../../../common/decorators/is-not-empty-string.decorator';

export class GetWorkspaceStatusFieldsDto {
  @ApiProperty()
  @IsNotEmptyString()
  name: string;

  @ApiProperty()
  @IsNotEmptyString()
  color: string;

  // FIX Enum?
  @ApiProperty()
  @IsNotEmptyString()
  statusType: string;
}
