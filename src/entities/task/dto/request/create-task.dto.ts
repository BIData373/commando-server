import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsArray, IsOptional, ValidateNested } from 'class-validator';
import { EntityExists } from '../../../../common/decorators/entity-exists.decorator';
import { IdExists } from '../../../../common/decorators/id-exists.decorator';
import { IsIdPermitted } from '../../../../common/decorators/is-permitted-id.decorator';
import { PermissionType } from '../../../../types/prisma';
import { GetTaskAssigneeDto } from './get-task-assignee.dto';
import { GetTaskFieldsDto } from './get-task-fields.dto';

export class CreateTaskDto extends GetTaskFieldsDto {
  @ApiProperty()
  @IsIdPermitted('workspace', PermissionType.MANAGER, { filterDeletedAt: true })
  workspaceId: number

  @ApiProperty({ type: Number, required: false, nullable: true })
  @IdExists('source', {
    findArgs: ({ value, obj }) => ({
      where: {
        id: value,
        deletedAt: null,
        workspace: { id: obj.workspaceId }
      },
    })
  })
  @IsOptional()
  sourceId?: number;

  @ApiProperty({ type: [GetTaskAssigneeDto], required: false })
  @IsOptional()
  @IsArray()
  @EntityExists('assignee', {
    each: true,
    validateIf: ({ value, obj }) => !!value && !!obj.workspaceId,
    findArgs: ({ value, obj }) => ({
      where: { id: value!.id, workspaceId: obj.workspaceId! }
    })
  })
  @ValidateNested({ each: true })
  @Type(() => GetTaskAssigneeDto)
  assignees?: GetTaskAssigneeDto[]
}
