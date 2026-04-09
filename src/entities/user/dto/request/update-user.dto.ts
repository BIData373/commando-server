import { PartialType } from '@nestjs/mapped-types';
import { IUpdateUser } from '../../../../types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) implements IUpdateUser {}
