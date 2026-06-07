import { FORBIDDEN_MESSAGE } from "@nestjs/core/guards";
import { IEntityExistsValidationOptions } from "../../../common/decorators/entity-exists.decorator";
import { validateIfNotBI } from "../../../common/functions/user";
import { IContext } from "../../../common/interfaces/context.interface";
import { ExtractValue } from "../../../common/types/extract-value.type";
import { PermissionType } from "../../../types/prisma";
import { IUserContext } from "../../user/interfaces/user-context.interface";
import { allowedTypes } from "../../workspace/decorators/has-workspace-permission.decorator";

export type CheckForAssignee<TDto> = boolean | ((obj: TDto) => number)

export const findArgsInPermittedTask = <
    TDtoField extends keyof TDto,
    TDto extends Record<TDtoField, number> & IContext<IUserContext>
>(
    type: PermissionType,
    checkForAssignee: CheckForAssignee<TDto> = false
): IEntityExistsValidationOptions<TDto, TDtoField, ExtractValue<TDto, TDtoField>, "task"> => ({
    message: FORBIDDEN_MESSAGE,
    validateIf: ({ obj }) => validateIfNotBI(obj.context.user),
    findArgs: ({ value, obj }) => ({
        where: {
            id: value,
            deletedAt: null,
            workspace: {
                OR: [
                    {
                        permissions: {
                            some: {
                                userId: obj.context.user.id,
                                type: { in: allowedTypes[type] }
                            }
                        }
                    },
                    ...(checkForAssignee
                        ? [{
                            assignees: {
                                some: {
                                    ...(typeof checkForAssignee === 'function' && {
                                        id: checkForAssignee(obj as TDto)
                                    }),
                                    users: { some: { id: obj.context.user.id } }
                                }
                            }
                        }]
                        : []
                    )
                ]
            }
        }
    })
})