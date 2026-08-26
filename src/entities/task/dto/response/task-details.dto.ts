import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose, Type } from 'class-transformer';
import { WorkspaceStatusDto } from '../../../workspace-status/dto/response/workspace-status.dto';
import { TaskWithWorkspaceDto } from './task-with-workspace.dto';

@Exclude()
export class TaskDetailsDto extends TaskWithWorkspaceDto {
  @Expose()
  @ApiProperty({ type: WorkspaceStatusDto })
  @Type(() => WorkspaceStatusDto)
  status: WorkspaceStatusDto
}
