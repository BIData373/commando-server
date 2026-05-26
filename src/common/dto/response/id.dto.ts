import { Exclude } from 'class-transformer';
import { ExposeProperty } from '../../decorators/expose-property.decorator';

@Exclude()
export class IdDto {
  @ExposeProperty()
  id: number;
}