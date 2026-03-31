import { EntityExists } from "../../decorators/entity-exists.decorator"
import { IsPositiveInt } from "../../decorators/is-positive-int.decorator"
import { PrismaService } from "../../prisma.service"

export function GetIdDto(model: keyof PrismaService) {
    class GetIdDtoClass {
        @IsPositiveInt()
        @EntityExists(model)
        id: number
    }

    return GetIdDtoClass
}