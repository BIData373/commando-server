import { ApiProperty } from "@nestjs/swagger"
import { Type } from "class-transformer"
import { IsOptional, IsString } from "class-validator"
import { IsPositiveInt } from "../../../../common/decorators/is-positive-int.decorator"

export class GetTaskAssigneeDto {
    @ApiProperty()
    @IsPositiveInt()
    @Type(() => Number)
    id: number

    @ApiProperty({ required: false })
    @IsOptional()
    @IsString()
    description?: string
}