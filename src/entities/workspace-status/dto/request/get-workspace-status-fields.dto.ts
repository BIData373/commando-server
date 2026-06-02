import { ApiProperty } from '@nestjs/swagger';
import { IsEnum } from 'class-validator';
import { IsNotEmptyString } from '../../../../common/decorators/is-not-empty-string.decorator';
import { WorkspaceStatusType } from '../../../../types/prisma';

export class GetWorkspaceStatusFieldsDto {
  @ApiProperty()
  @IsNotEmptyString()
  name: string;

  @ApiProperty()
  @IsNotEmptyString()
  color: string;

  @ApiProperty({ enumName: 'WorkspaceStatusType', enum: WorkspaceStatusType })
  @IsEnum(WorkspaceStatusType)
  type: WorkspaceStatusType;
}
