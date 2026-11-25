import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsOptional } from 'class-validator';
import { CreateUserDto } from '../../../user/dto/request/create-user.dto';

export class CreateAssigneeUserDto extends CreateUserDto {
  @ApiProperty({ required: false })
  @IsOptional()
  @IsBoolean()
  statusEditable?: boolean;
}
