import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsOptional, ValidateNested } from 'class-validator';
import { IsNotEmptyString } from '../../../../common/decorators/is-not-empty-string.decorator';
import { CreateUserDto } from '../../../user/dto/request/create-user.dto';
import { GetManagerWorkspaceIdFieldDto } from '../../../workspace/dto/request/get-workspace-id-field.dto';

export class CreateAssigneeDto extends GetManagerWorkspaceIdFieldDto {
  @ApiProperty()
  @IsNotEmptyString()
  name: string;

  @ApiProperty()
  @IsNotEmptyString()
  color: string;

  @ApiProperty({ type: String, required: false, nullable: true })
  @IsOptional()
  @IsNotEmptyString()
  icon?: string;

  @ApiProperty({ type: CreateUserDto, isArray: true })
  @ValidateNested({ each: true })
  @Type(() => CreateUserDto)
  users: CreateUserDto[]
}
