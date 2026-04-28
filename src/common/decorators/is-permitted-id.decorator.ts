import { applyDecorators } from "@nestjs/common";
import { IUserContext } from "../../entities/user/interfaces/user-context.interface";
import { HasWorkspacePermission, IHasWorkspacePermissionOptions } from "../../entities/workspace/decorators/has-workspace-permission.decorator";
import { PermissionType } from "../../types";
import { IContext } from "../interfaces/context.interface";
import { Models } from "./entity-exists.decorator";
import { IdExists } from "./id-exists.decorator";

// FIX Add parameter for IdExists options
export function IsIdPermitted<
    TDtoField extends keyof Object,
    TContextField extends keyof Object,
    TModel extends Models,
    TDtoContext extends Record<TContextField, TModel>,
    TContext extends IUserContext & TDtoContext
>(
    model: TModel,
    type: PermissionType,
    { contextField, workspaceFindArgs, ...options }: IHasWorkspacePermissionOptions<
        TDtoField,
        Record<TDtoField, number> & IContext<TContext>
    // TContext,
    // TContextField
    > = {}
) {
    return applyDecorators(
        HasWorkspacePermission<TDtoField, Record<TDtoField, number> & IContext<TContext>>(
            type,
            obj => obj.context.user,
            { workspaceFindArgs, ...options }
        ) as PropertyDecorator,
        IdExists<TModel, Record<TDtoField, number> & IContext<TContext>, TDtoField>(model)
    )
}