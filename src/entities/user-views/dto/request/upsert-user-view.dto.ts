import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
    ValidateNested
} from 'class-validator';
import { GetOptionalViewerWorkspaceIdFieldDto } from '../../../workspace/dto/request/get-workspace-id-field.dto';
import { UserViewDto } from './user-view.dto';

export class UpsertUserViewDto extends GetOptionalViewerWorkspaceIdFieldDto {

    @ApiProperty({ type: UserViewDto })
    @ValidateNested()
    @Type(() => UserViewDto)
    view: UserViewDto;
}
