import { Exclude } from 'class-transformer';
import { ExposeProperty } from '../../../../common/decorators/expose-property.decorator';

@Exclude()
export class SignedUrlDto {
  @ExposeProperty({ type: String, nullable: true })
  url: string | null;
}
