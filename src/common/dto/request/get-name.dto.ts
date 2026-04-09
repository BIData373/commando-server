import { IsNotEmptyString } from "../../decorators/is-not-empty-string.decorator";

export class GetNameDto {
    @IsNotEmptyString()
    name: string
}