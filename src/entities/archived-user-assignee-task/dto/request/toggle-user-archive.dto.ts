import { FORBIDDEN_MESSAGE } from '@nestjs/core/guards'
import { ApiProperty } from '@nestjs/swagger'
import { IdExists } from '../../../../common/decorators/id-exists.decorator'
import { GetViewerTaskIdFieldDto } from '../../../task/dto/request/get-task-id-field.dto'

export class ToggleUserArchiveDto extends GetViewerTaskIdFieldDto {
  @ApiProperty()
  @IdExists('assignee', {
    message: FORBIDDEN_MESSAGE,
    validateIf: ({ obj }) => !obj.context.user.info?.isBI,
    findArgs: ({ obj, value }) => ({
      where: {
        id: value,
        deletedAt: null,
        users: { some: { id: obj.context.user.id } },
        workspace: { tasks: { some: { id: obj.taskId } } }
      }
    })
  })
  @IdExists('assignee', { filterDeletedAt: true })
  assigneeId: number
}
