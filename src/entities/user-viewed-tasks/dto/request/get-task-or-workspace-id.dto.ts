import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';
import { PermissionType } from '../../../../types/prisma';
import { IsPermittedTaskId } from '../../../task/decorators/is-permitted-task-id.decorator';
import { GetOptionalViewerWorkspaceIdFieldDto } from '../../../workspace/dto/request/get-workspace-id-field.dto';

export class GetTaskOrWorkspaceIdDto extends GetOptionalViewerWorkspaceIdFieldDto {
    @ApiPropertyOptional()
    @IsOptional()
    @IsPermittedTaskId(PermissionType.VIEWER, true)
    taskId?: number;
}
