import { ApiProperty } from '@nestjs/swagger';
import { IsEnum } from 'class-validator';
import { GetOptionalViewerWorkspaceIdFieldDto } from '../../../workspace/dto/request/get-workspace-id-field.dto';
import { Device } from '../../enum/device';

export class GetUserViewDto extends GetOptionalViewerWorkspaceIdFieldDto {

    @ApiProperty({ enum: Device, enumName: 'Device' })
    @IsEnum(Device)
    device: Device;
}
