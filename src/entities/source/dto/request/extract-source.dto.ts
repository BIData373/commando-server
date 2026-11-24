import { ApiProperty, IntersectionType } from '@nestjs/swagger';
import { IdExists } from '../../../../common/decorators/id-exists.decorator';
import { GetContextDto } from '../../../../common/dto/request/get-context.dto';
import { ISourceAttachmentContext } from '../../../source-attachment/interfaces/source-attachment-context.interface';
import { GetManagerSourceIdDto } from './get-source-id.dto';

export class ExtractSourceDto extends IntersectionType(
  GetManagerSourceIdDto,
  GetContextDto<ISourceAttachmentContext>
) {
  @ApiProperty()
  @IdExists('sourceAttachment', {
    contextField: 'sourceAttachment',
    findArgs: ({ value, obj }) => ({
      where: { id: value, sourceId: Number(obj.id) }
    })
  })
  attachmentId: number;
}
