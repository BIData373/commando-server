import { EntityExists, IEntityExistsValidationOptions, PredicateParams } from "../../../common/decorators/entity-exists.decorator";
import { IUser, PermissionType } from "../../../types";
import { Prisma } from "../../../types/prisma";
import { allowedTypes } from "../../permission/guards/permission.guard";


interface IHasWorkspacePermissionOptions<
    TDtoField extends string,
    TDto extends Record<TDtoField, number>
> extends IEntityExistsValidationOptions<TDto, TDtoField, "permission"> {
    workspaceFindArgs?: (params: PredicateParams<TDto, TDtoField>) => Prisma.PermissionWhereInput['workspace']
}

export function HasWorkspacePermission<
    TDtoField extends string,
    TDto extends Record<TDtoField, number>
>(
    type: PermissionType,
    extractUser: (obj: TDto) => IUser,
    { workspaceFindArgs, ...options }: IHasWorkspacePermissionOptions<TDtoField, TDto> = {}
) {
    return EntityExists<TDto, TDtoField, "permission">('permission', {
        validateIf: ({ obj }) => !(extractUser(obj).info?.isBI ?? false),
        findArgs: ({ value, obj }) => ({
            where: {
                type: { in: allowedTypes[type] },
                userId: extractUser(obj).id,
                workspace: workspaceFindArgs?.({ value, obj }) ?? { id: value }
            }
        }),
        ...options
    })
}