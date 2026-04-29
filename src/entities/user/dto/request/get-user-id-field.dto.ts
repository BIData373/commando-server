import { IdExists } from "../../../../common/decorators/id-exists.decorator";

export class GetUserIdFieldDto {
    @IdExists('user')
    userId: number
}