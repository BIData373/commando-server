import { PartialType } from '@nestjs/swagger';
import { GetNameDto } from '../../../../common/dto/request/get-name.dto';
import { IUpdateSource } from '../../../../types';

export class UpdateSourceDto extends PartialType(GetNameDto) implements IUpdateSource { }
