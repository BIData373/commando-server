import { IId } from "../../../types"
import { IEntityExistsValidationOptions, Models } from "../../decorators/entity-exists.decorator"
import { IdExists } from "../../decorators/id-exists.decorator"
import { IContext } from "../../interfaces/context.interface"
import { GetContextDto } from "./get-context.dto"

export function GetIdDto<TModel extends Models>(
    model: TModel,
    contextField: string = model,
    options: IEntityExistsValidationOptions<
        IId & IContext<Record<typeof contextField, TModel>>,
        'id',
        TModel
    > = {}
) {
    class GetIdDtoClass extends GetContextDto<Record<typeof contextField, TModel>> implements IId {
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
//     class GetIdDtoClass extends GetContextDto<Record<typeof contextField, TModel>> implements IId {
//         @IsIdPermitted(model, type, options)
//         id: number
//     }

//     return GetIdDtoClass
// }
