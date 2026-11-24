import { FORBIDDEN_MESSAGE } from '@nestjs/core/guards';
import { ApiProperty } from '@nestjs/swagger';
import { IdExists } from '../../../../common/decorators/id-exists.decorator';
import { IsIdPermitted } from '../../../../common/decorators/is-permitted-id.decorator';
import { GetContextDto } from '../../../../common/dto/request/get-context.dto';
import { PermissionType } from '../../../../types/prisma';
import { IUserContext } from '../../../user/interfaces/user-context.interface';
import { ISourceAttachmentContext } from '../../interfaces/source-attachment-context.interface';
import { SourceAttachmentService } from '../../source-attachment.service';

export function GetPermittedSourceAttachmentIdDto(type: PermissionType) {
  class GetSourceAttachmentIdDto extends GetContextDto<IUserContext & ISourceAttachmentContext> {
    @ApiProperty()
    @IsIdPermitted('sourceAttachment', type, {
      contextField: 'sourceAttachment',
      findArgs: ({ value }) => ({
        where: { id: value, source: { deletedAt: null } }
      }),
      workspaceFindArgs: ({ value }) => ({
        sources: { some: { attachments: { some: { id: value } } } }
      })
    })
    id: number
  }

  return GetSourceAttachmentIdDto
}

export class GetManagerSourceAttachmentIdDto extends GetPermittedSourceAttachmentIdDto(PermissionType.MANAGER) { }

export class GetAccessibleSourceAttachmentIdDto extends GetContextDto<IUserContext & ISourceAttachmentContext> {
  @ApiProperty()
  @IdExists('sourceAttachment', {
    message: FORBIDDEN_MESSAGE,
    findArgs: ({ value, obj }) => ({
      where: {
        id: value,
        source: { deletedAt: null },
        ...SourceAttachmentService.accessibleWhere(obj.context.user)
      }
    })
  })
  @IdExists('sourceAttachment', {
    contextField: 'sourceAttachment',
    findArgs: ({ value }) => ({
      where: { id: value, source: { deletedAt: null } }
    })
  })
  id: number
}
