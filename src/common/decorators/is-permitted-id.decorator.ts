import { applyDecorators } from "@nestjs/common";
import { IUserContext } from "../../entities/user/interfaces/user-context.interface";
import { HasWorkspacePermission, IWorkspaceFindArgs } from "../../entities/workspace/decorators/has-workspace-permission.decorator";
import { PermissionType } from "../../types/prisma";
import { IContext } from "../interfaces/context.interface";
import { ExtractValue } from "../types/extract-value.type";
import { Models } from "../types/models.type";
import { IEntityExistsValidationOptions } from "./entity-exists.decorator";
import { IdExists } from "./id-exists.decorator";

interface IIsIdPermittedOptions<
    TDtoField extends keyof TDto,
    TModel extends Models,
    TDto extends Record<TDtoField, number> & IContext<IUserContext>
> extends
    IEntityExistsValidationOptions<
        TDto,
        TDtoField,
        ExtractValue<TDto, TDtoField>,
        TModel
    >,
    IWorkspaceFindArgs<TDtoField, TDto> { }

export function IsIdPermitted<
    TDtoField extends keyof TDto,
    TModel extends Models,
    TDto extends Record<TDtoField, number> & IContext<IUserContext>
>(
    model: TModel,
    type: PermissionType,
    { workspaceFindArgs, ...options }: IIsIdPermittedOptions<TDtoField, TModel, TDto> = {}
) {
    return applyDecorators(
        HasWorkspacePermission<TDtoField, TDto>(type, obj => obj.context.user, { workspaceFindArgs }) as PropertyDecorator,
        IdExists<TModel, TDto, TDtoField, ExtractValue<TDto, TDtoField>>(model, options) as PropertyDecorator
    ) as (target: TDto, propertyName: TDtoField) => void
}