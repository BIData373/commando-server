import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsOptional, ValidateIf } from 'class-validator';
import { IsNotEmptyString } from '../../../../common/decorators/is-not-empty-string.decorator';
import { WorkspaceRequestStatus } from '../../../../types/prisma';
import { CreateWorkspaceRequestDto } from './create-workspace-request.dto';

export class UpdateWorkspaceRequestDto extends PartialType(CreateWorkspaceRequestDto) {
  @ApiProperty({ enumName: 'WorkspaceRequestStatus', enum: WorkspaceRequestStatus, required: false })
  @IsOptional()
  @IsEnum(WorkspaceRequestStatus)
  status?: WorkspaceRequestStatus;

  @ApiProperty({ type: String, required: false, description: 'Required when status is REJECTED' })
  @ValidateIf(({ status }) => status === WorkspaceRequestStatus.REJECTED)
  @IsNotEmptyString()
  declineMessage?: string;
}
