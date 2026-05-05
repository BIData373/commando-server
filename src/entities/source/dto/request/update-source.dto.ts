import { PartialType } from '@nestjs/mapped-types';
import { GetNameDto } from '../../../../common/dto/request/get-name.dto';
import { IUpdateSource } from '../../../../types';

export class UpdateSourceDto extends PartialType(GetNameDto) implements IUpdateSource { }
