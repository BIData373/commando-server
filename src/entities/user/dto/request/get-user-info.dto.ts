import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsOptional, IsString } from 'class-validator';
import { IsNotEmptyString } from '../../../../common/decorators/is-not-empty-string.decorator';
import { IsPositiveInt } from '../../../../common/decorators/is-positive-int.decorator';

export class GetUserInfoDto {
    @ApiPropertyOptional()
    @IsOptional()
    @IsPositiveInt()
    id?: number;

    @ApiProperty()
    @IsNotEmptyString()
    upn: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    name?: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    displayName?: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsBoolean()
    isBI?: boolean;
}
