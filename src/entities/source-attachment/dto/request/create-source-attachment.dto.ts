import { ApiProperty, IntersectionType } from '@nestjs/swagger';
import { IsIdPermitted } from '../../../../common/decorators/is-permitted-id.decorator';
import { GetContextDto } from '../../../../common/dto/request/get-context.dto';
import { PermissionType } from '../../../../types/prisma';
import { ISourceContext } from '../../../source/interfaces/source-context.interface';
import { IUserContext } from '../../../user/interfaces/user-context.interface';
import { GetSourceAttachmentFieldsDto } from './get-source-attachment-fields.dto';

export class CreateSourceAttachmentDto extends IntersectionType(
  GetSourceAttachmentFieldsDto,
  GetContextDto<IUserContext & ISourceContext>
) {
  @ApiProperty()
  @IsIdPermitted('source', PermissionType.MANAGER, {
    contextField: 'source',
    filterDeletedAt: true,
    workspaceFindArgs: ({ value }) => ({ sources: { some: { id: value } } })
  })
  sourceId: number;

  @ApiProperty({ type: 'string', format: 'binary' })
  attachment: Express.Multer.File;
}
