import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';
import { IsNotEmptyString } from '../../../../common/decorators/is-not-empty-string.decorator';
import { ICreateAssignee } from '../../../../types';
import { GetManagerWorkspaceIdFieldDto } from '../../../workspace/dto/request/get-workspace-id-field.dto';

export class CreateAssigneeDto extends GetManagerWorkspaceIdFieldDto implements ICreateAssignee {
  @ApiProperty()
  @IsNotEmptyString()
  name: string;

  @ApiProperty()
  @IsNotEmptyString()
  color: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsNotEmptyString()
  icon?: string;
}
