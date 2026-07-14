import { Exclude } from 'class-transformer';
import { ExposeProperty } from '../../../../common/decorators/expose-property.decorator';
import { ExtractionErrorReason } from '../../types/source-extraction-error-reason.enum';

@Exclude()
export class SourceExtractionFailureDto {
  @ExposeProperty({ enumName: 'ExtractionErrorReason', enum: ExtractionErrorReason })
  reason: ExtractionErrorReason;
}
