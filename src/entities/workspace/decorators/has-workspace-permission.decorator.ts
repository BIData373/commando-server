import { EntityExists, IEntityExistsValidationOptions } from "../../../common/decorators/entity-exists.decorator";
import { PermissionType } from "../../../types";
import { allowedTypes } from "../../permission/guards/permission.guard";

// FIX Add isBI check
export function HasWorkspacePermission<
    TDtoField extends string,
    TDto extends Record<TDtoField, number>
>(
    type: PermissionType,
    extractUserId: (obj: TDto) => number,
    options: IEntityExistsValidationOptions<TDto, TDtoField, "permission"> = {}
) {
    return EntityExists<TDto, TDtoField, "permission">('permission', {
        findArgs: ({ value, obj }) => ({
            where: {
                type: { in: allowedTypes[type] },
                userId_workspaceId: {
                    userId: extractUserId(obj),
                    workspaceId: value
                }
            }
        }),
        ...options
    })
}