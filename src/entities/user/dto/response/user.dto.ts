import { IntersectionType } from '@nestjs/swagger';
import { Exclude } from 'class-transformer';
import { IdDto } from '../../../../common/dto/response/id.dto';
import { MirageUserDto } from './mirage-user.dto';

@Exclude()
export class UserDto extends IntersectionType(IdDto, MirageUserDto) { }