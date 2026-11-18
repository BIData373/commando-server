import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
    IsEnum,
    ValidateNested
} from 'class-validator';
import { GetOptionalViewerWorkspaceIdFieldDto } from '../../../workspace/dto/request/get-workspace-id-field.dto';
import { Device } from '../../enum/device';
import { UserViewDto } from './user-view.dto';

export class UpsertUserViewDto extends GetOptionalViewerWorkspaceIdFieldDto {

    @ApiProperty({ enum: Device, enumName: 'Device' })
    @IsEnum(Device)
    device: Device;

    @ApiProperty({ type: UserViewDto })
    @ValidateNested()
    @Type(() => UserViewDto)
    view: UserViewDto;
}
