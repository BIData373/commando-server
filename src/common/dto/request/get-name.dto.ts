import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmptyString } from "../../decorators/is-not-empty-string.decorator";

export class GetNameDto {
    @ApiProperty()
    @IsNotEmptyString()
    name: string
}