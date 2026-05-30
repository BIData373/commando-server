import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsOptional, IsString } from 'class-validator';
import { IdExists } from '../../../../common/decorators/id-exists.decorator';
import { GetNewWorkspaceUrlNameDto } from './get-workspace-url-name.dto';
import { IsNotEmptyString } from '../../../../common/decorators/is-not-empty-string.decorator';

export class CreateWorkspaceDto extends GetNewWorkspaceUrlNameDto {
  @ApiProperty()
  @IsNotEmptyString()
  title: string;

  @ApiProperty({ type: String, nullable: true, required: false })
  @IsOptional()
  @IsString()
  icon?: string | null;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsBoolean()
  assigneeStatusEditable?: boolean;

  @ApiProperty()
  @IdExists('pikud', { filterDeletedAt: true })
  pikudId: number;
}
