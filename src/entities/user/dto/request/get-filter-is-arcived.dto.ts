import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsOptional } from "class-validator";
import { TransformToBoolean } from "../../../../common/decorators/transform-to-boolean.decorator";

export class GetFilterIsArchived {
    @ApiProperty({ type: Boolean, required: false, nullable: true })
    @IsOptional()
    @IsBoolean()
    @TransformToBoolean()
    isArchived?: boolean
}