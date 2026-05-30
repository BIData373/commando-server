import { applyDecorators } from "@nestjs/common";
import { IUserContext } from "../../entities/user/interfaces/user-context.interface";
import { HasWorkspacePermission, IWorkspaceFindArgs } from "../../entities/workspace/decorators/has-workspace-permission.decorator";
import { PermissionType } from "../../types/prisma";
import { IContext } from "../interfaces/context.interface";
import { Models } from "../types/models.type";
import { IEntityExistsValidationOptions } from "./entity-exists.decorator";
import { IdExists } from "./id-exists.decorator";

interface IIsIdPermittedOptions<
    TDtoField extends keyof Object,
    TModel extends Models
> extends
    IEntityExistsValidationOptions<Record<TDtoField, number>, TDtoField, TModel>,
    IWorkspaceFindArgs<TDtoField, Record<TDtoField, number>> { }

export function IsIdPermitted<
    TDtoField extends keyof Object,
    TContextField extends keyof Object,
    TModel extends Models,
    TDtoContext extends Record<TContextField, TModel>,
    TContext extends IUserContext & TDtoContext,
    TDto extends Record<TDtoField, number> & IContext<TContext>
>(
    model: TModel,
    type: PermissionType,
    { workspaceFindArgs, ...options }: IIsIdPermittedOptions<TDtoField, TModel> = {}
) {
    return applyDecorators(
        HasWorkspacePermission<TDtoField, TDto>(type, obj => obj.context.user, { workspaceFindArgs }) as PropertyDecorator,
        IdExists<TModel, TDto, TDtoField>(model, options) as PropertyDecorator
    )
}