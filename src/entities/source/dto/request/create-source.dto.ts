import { GetNameDto } from '../../../../common/dto/request/get-name.dto';
import { ICreateSource } from '../../../../types';

export class CreateSourceDto extends GetNameDto implements ICreateSource { }