import { ApiProperty } from "@nestjs/swagger"
import { IEntityExistsValidationOptions } from "../../decorators/entity-exists.decorator"
import { IdExists } from "../../decorators/id-exists.decorator"
import { IContext } from "../../interfaces/context.interface"
import { IId } from "../../interfaces/id.interface"
import { Models } from "../../types/models.type"
import { GetContextDto } from "./get-context.dto"

export function GetIdDto<TModel extends Models>(
    model: TModel,
    options: IEntityExistsValidationOptions<IId, 'id', number, TModel> = {}
) {
    class GetIdDtoClass {
        @ApiProperty()
        @IdExists(model, options)
        id: number
    }

    return GetIdDtoClass
}

export function GetIdContextDto<TModel extends Models>(
    model: TModel,
    contextField: string,
    options: IEntityExistsValidationOptions<
        IId & IContext<Record<typeof contextField, TModel>>,
        'id',
        number,
        TModel
    > = {}
) {
    class GetIdDtoClass extends GetContextDto<Record<typeof contextField, TModel>> {
        @ApiProperty()
        @IdExists(model, options)
        id: number
    }

    return GetIdDtoClass
}

// export function GetPermittedIdDto<TModel extends Models>(
//     model: TModel,
//     type: PermissionType,
//     contextField: string = model,
//     options: IHasWorkspacePermissionOptions<'id', IId & IContext<IUserContext & Record<typeof contextField, TModel>>> = {}
//     // options: IHasWorkspacePermissionOptions<
//     //     'id',
//     //     IId & IContext<Record<typeof contextField, TModel>>
//     // > = {}
// ) {
//     class GetIdDtoClass extends GetContextDto<Record<typeof contextField, TModel>> {
//         @IsIdPermitted(model, type, options)
//         id: number
//     }

//     return GetIdDtoClass
// }
