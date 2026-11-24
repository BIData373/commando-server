import { ApiProperty } from '@nestjs/swagger';
import { IdExists } from '../../../../common/decorators/id-exists.decorator';
import { GetContextDto } from '../../../../common/dto/request/get-context.dto';
import { ISourceContext } from '../../../source/interfaces/source-context.interface';
import { ISourceAttachmentContext } from '../../interfaces/source-attachment-context.interface';

export class GetSourceAttachmentIdFieldDto extends GetContextDto<ISourceContext & ISourceAttachmentContext> {
  @ApiProperty()
  @IdExists('sourceAttachment', {
    contextField: 'sourceAttachment',
    findArgs: ({ value, obj }) => ({
      where: { id: value, sourceId: obj.context.source.id }
    })
  })
  attachmentId: number
}
