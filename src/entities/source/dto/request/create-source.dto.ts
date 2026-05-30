import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsOptional } from 'class-validator';
import { IsNotEmptyString } from '../../../../common/decorators/is-not-empty-string.decorator';
import { GetManagerWorkspaceIdFieldDto } from '../../../workspace/dto/request/get-workspace-id-field.dto';

export class CreateSourceDto extends GetManagerWorkspaceIdFieldDto {
  @ApiProperty()
  @IsNotEmptyString()
  name: string;

  @ApiProperty()
  @IsDate()
  date: Date;

  @ApiProperty()
  @IsNotEmptyString({ each: true })
  tags: string[];

  @ApiProperty({ type: 'string', format: 'binary', required: false })
  attachment?: Express.Multer.File;
}
