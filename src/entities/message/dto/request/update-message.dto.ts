import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateMessageDto {
    @ApiProperty()
    @IsOptional()
    @IsString()
    content?: string;
}