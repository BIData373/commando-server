import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmptyString } from '../../../../common/decorators/is-not-empty-string.decorator';

export class GetAssigneeGroupFieldsDto {
  @ApiProperty()
  @IsNotEmptyString()
  name: string;
}
