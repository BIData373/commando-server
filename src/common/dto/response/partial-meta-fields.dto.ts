import { Exclude } from 'class-transformer';
import { ExposeProperty } from '../../decorators/expose-property.decorator';

@Exclude()
export class PartialMetaFieldsDto {
  @ExposeProperty()
  createdAt: Date;

  @ExposeProperty()
  createdBy: number;

  @ExposeProperty()
  updatedAt: Date;

  @ExposeProperty()
  updatedBy: number;
}
