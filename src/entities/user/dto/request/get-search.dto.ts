import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmptyString } from "../../../../common/decorators/is-not-empty-string.decorator";

export class GetSearchDto {
    @ApiProperty()
    @IsNotEmptyString()
    search: string
}