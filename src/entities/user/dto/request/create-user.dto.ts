import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsOptional, ValidateNested } from 'class-validator';
import { IsNotEmptyString } from '../../../../common/decorators/is-not-empty-string.decorator';
import { GetUserInfoDto } from './get-user-info.dto';

export class CreateUserDto {
  @ApiProperty()
  @IsNotEmptyString()
  upn: string;

  @ApiProperty({ nullable: true, required: false, type: GetUserInfoDto })
  @ValidateNested()
  @IsOptional()
  @Type(() => GetUserInfoDto)
  info?: GetUserInfoDto | null;
}
