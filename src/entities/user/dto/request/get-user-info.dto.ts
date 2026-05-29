import { IsBoolean, IsString } from 'class-validator';
import { IsNotEmptyString } from '../../../../common/decorators/is-not-empty-string.decorator';
import { IdDto } from '../../../../common/dto/response/id.dto';
import { ApiProperty } from '@nestjs/swagger';

export class GetUserInfoDto extends IdDto {
    @ApiProperty()
    @IsNotEmptyString()
    upn: string;

    @ApiProperty({ required: false })
    @IsString()
    name?: string;

    @ApiProperty({ required: false })
    @IsString()
    displayName?: string;

    @ApiProperty()
    @IsBoolean()
    isBI: boolean;
}
