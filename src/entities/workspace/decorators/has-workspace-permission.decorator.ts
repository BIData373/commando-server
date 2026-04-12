import { EntityExists, IEntityExistsValidationOptions } from "../../../common/decorators/entity-exists.decorator";
import { IUser, PermissionType } from "../../../types";
import { allowedTypes } from "../../permission/guards/permission.guard";

export function HasWorkspacePermission<
    TDtoField extends string,
    TDto extends Record<TDtoField, number>
>(
    type: PermissionType,
    extractUser: (obj: TDto) => IUser,
    options: IEntityExistsValidationOptions<TDto, TDtoField, "permission"> = {}
) {
    return EntityExists<TDto, TDtoField, "permission">('permission', {
        validateIf: ({ obj }) => { console.log(obj); return !extractUser(obj).info?.isBI },
        findArgs: ({ value, obj }) => ({
            where: {
                type: { in: allowedTypes[type] },
                userId_workspaceId: {
                    userId: extractUser(obj).id,
                    workspaceId: value
                }
            }
        }),
        ...options
    })
}