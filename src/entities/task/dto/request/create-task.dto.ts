import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';
import { IdExists } from '../../../../common/decorators/id-exists.decorator';
import { IsIdPermitted } from '../../../../common/decorators/is-permitted-id.decorator';
import { PermissionType } from '../../../../types/prisma';
import { GetTaskFieldsDto } from './get-task-fields.dto';

export class CreateTaskDto extends GetTaskFieldsDto {
  @ApiProperty()
  @IsIdPermitted('workspace', PermissionType.MANAGER, { filterDeletedAt: true })
  workspaceId: number

  @ApiProperty({ required: false })
  @IsOptional()
  @IdExists('source', {
    findArgs: ({ value, obj }) => ({
      where: {
        id: value,
        deletedAt: null,
        workspace: { id: obj.workspaceId }
      },
    })
  })
  sourceId?: number;
}
