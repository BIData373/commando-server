import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';
import { EntityExists } from '../../../../common/decorators/entity-exists.decorator';
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

  @ApiProperty({ type: String, required: false, nullable: true })
  @IsOptional()
  @IsNotEmptyString()
  icon?: string;

  @ApiProperty({ type: [Number], required: true })
  @EntityExists('user', {
    each: true
  })
  userIds: number[]
}
