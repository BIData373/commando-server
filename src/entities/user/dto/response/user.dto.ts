import { IntersectionType } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import { ExposeProperty } from '../../../../common/decorators/expose-property.decorator';
import { IdDto } from '../../../../common/dto/response/id.dto';
import { MirageUserDto } from './mirage-user.dto';

@Exclude()
export class UserDto extends IntersectionType(IdDto, MirageUserDto) {
    // @ExposeProperty({ type: Date, nullable: true }) // do include the when he at per
    personalAreaEnteredAt: Date | null
}