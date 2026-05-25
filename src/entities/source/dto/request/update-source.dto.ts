import { PartialType } from '@nestjs/swagger';
import { GetNameDto } from '../../../../common/dto/request/get-name.dto';

export class UpdateSourceDto extends PartialType(GetNameDto) { }
