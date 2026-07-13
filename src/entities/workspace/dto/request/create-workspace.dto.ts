import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsOptional, IsString } from 'class-validator';
import { EntityExists } from '../../../../common/decorators/entity-exists.decorator';
import { IdExists } from '../../../../common/decorators/id-exists.decorator';
import { IsNotEmptyString } from '../../../../common/decorators/is-not-empty-string.decorator';
import { GetNewWorkspaceUrlNameDto } from './get-workspace-url-name.dto';

export class CreateWorkspaceDto extends GetNewWorkspaceUrlNameDto {
  @ApiProperty()
  @EntityExists('workspace', {
    failIfExists: true,
    findArgs: ({ value }) => ({
      where: { title: value, deletedAt: null }
    })
  })
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

    
  @ApiProperty({ required: false })
  @IsOptional()
  @IsBoolean()
  chatNotification?: boolean;

    
  @ApiProperty({ required: false })
  @IsOptional()
  @IsBoolean()
  mailNotification?: boolean;


  @ApiProperty()
  @IdExists('pikud', { filterDeletedAt: true })
  pikudId: number;
}
