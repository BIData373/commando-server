import { EntityExists } from "../../decorators/entity-exists.decorator"
import { IsPositiveInt } from "../../decorators/is-positive-int.decorator"

export function GetIdDto(model: string) {
    class GetIdDtoClass {
        @IsPositiveInt()
        @EntityExists(model)
        id: number
    }

    return GetIdDtoClass
}