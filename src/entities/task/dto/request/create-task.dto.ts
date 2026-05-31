import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsBoolean, IsDate, IsOptional, IsString } from 'class-validator';
import { IdExists } from '../../../../common/decorators/id-exists.decorator';
import { GetManagerWorkspaceIdFieldDto } from '../../../workspace/dto/request/get-workspace-id-field.dto';

// FIX Remove workspaceId
export class CreateTaskDto extends GetManagerWorkspaceIdFieldDto {
  @ApiProperty()
  @IdExists('source', {
    findArgs: ({ value, obj }) => ({
      where: {
        id: value,
        deletedAt: null,
        workspace: { id: obj.workspaceId }
      },
    })
  })
  sourceId: number;

  @ApiProperty()
  @IsString()
  title: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({ required: false })
  @IsBoolean()
  @IsOptional()
  flagged?: boolean;

  @ApiProperty()
  @IsString()
  deadlineType: string;

  @ApiProperty({ required: false })
  @IsDate()
  @IsOptional()
  @Type(() => Date)
  issuedAt?: Date;

  @ApiProperty()
  @IsDate()
  @Type(() => Date)
  dueDate: Date;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  notes?: string;
}
