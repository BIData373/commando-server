import { IntersectionType } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { ExposeProperty } from '../../../../common/decorators/expose-property.decorator';
import { IdDto } from '../../../../common/dto/response/id.dto';
import { MirageUserDto } from './mirage-user.dto';

@Exclude()
export class UserDto extends IntersectionType(IdDto, MirageUserDto) {
    @Expose()
    personalAreaEnteredAt: Date | null
}