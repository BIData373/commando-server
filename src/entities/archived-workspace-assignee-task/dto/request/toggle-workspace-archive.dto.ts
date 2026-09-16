import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { IsOptional } from 'class-validator'
import { EntityExists } from '../../../../common/decorators/entity-exists.decorator'
import { IsIdPermitted } from '../../../../common/decorators/is-permitted-id.decorator'
import { GetContextDto } from '../../../../common/dto/request/get-context.dto'
import { PermissionType } from '../../../../types/prisma'
import { IsPermittedTaskId } from '../../../task/decorators/is-permitted-task-id.decorator'
import { IUserContext } from '../../../user/interfaces/user-context.interface'

export class ToggleWorkspaceArchiveDto extends GetContextDto<IUserContext> {
  @ApiProperty()
  @IsPermittedTaskId(PermissionType.MANAGER)
  @EntityExists('task', {
    validateIf: ({ obj }) => obj.assigneeId === undefined,
    findArgs: ({ value }) => ({
      where: {
        id: value,
        assigneeStatuses: { none: { assignee: { deletedAt: null } } }
      }
    })
  })
  taskId: number

  @ApiPropertyOptional()
  @IsOptional()
  @IsIdPermitted('assignee', PermissionType.MANAGER, {
    filterDeletedAt: true,
    workspaceFindArgs: ({ value, obj }) => ({
      assignees: { some: { id: value } },
      tasks: { some: { id: obj.taskId, deletedAt: null } }
    })
  })
  assigneeId?: number
}
