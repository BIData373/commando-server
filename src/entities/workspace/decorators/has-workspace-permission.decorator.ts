import { Injectable } from "@nestjs/common";
import { FORBIDDEN_MESSAGE } from "@nestjs/core/guards";
import { registerDecorator, ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { entityExists, ExtractValue, IEntityExistsValidationOptions, PredicateParams } from "../../../common/decorators/entity-exists.decorator";
import { PrismaService } from "../../../common/prisma.service";
import { IUser, PermissionType } from "../../../types";
import { Prisma } from "../../../types/prisma";

interface IPermissionExistsValidationOptions<
    TDtoField extends string,
    TDto extends Record<TDtoField, number>
> extends IEntityExistsValidationOptions<TDto, TDtoField, "permission"> { }

interface IHasWorkspacePermissionOptions<
    TDtoField extends string,
    TDto extends Record<TDtoField, number>
> extends IPermissionExistsValidationOptions<TDtoField, TDto> {
    workspaceFindArgs?: (params: PredicateParams<TDto, TDtoField>) => Prisma.PermissionWhereInput['workspace']
}

interface IHasWorkspacePermissionContraints<
    TDtoField extends string,
    TDto extends Record<TDtoField, number>
> extends IHasWorkspacePermissionOptions<TDtoField, TDto> {
    type: PermissionType,
    extractUser: (obj: TDto) => IUser,
}

const managerTypes = [PermissionType.MANAGER]
const viewerTypes = [PermissionType.VIEWER, ...managerTypes]

const allowedTypes = {
    [PermissionType.VIEWER]: viewerTypes,
    [PermissionType.MANAGER]: managerTypes
}

@ValidatorConstraint({ async: true })
@Injectable()
export class HasWorkspacePermissionConstraint<
    TDtoField extends string,
    TDto extends Record<TDtoField, number>
> implements ValidatorConstraintInterface {
    constructor(private readonly prisma: PrismaService) { }

    async validate(
        value: ExtractValue<TDto, TDtoField>,
        { constraints, ...args }: ValidationArguments
    ) {
        const {
            type,
            extractUser,
            workspaceFindArgs,
            ...entityExistsArgs
        } = constraints[0] as IHasWorkspacePermissionContraints<TDtoField, TDto>

        return await entityExists<TDto, TDtoField, 'permission'>(this.prisma, value, {
            ...args,
            constraints: [{
                model: 'permission',
                message: FORBIDDEN_MESSAGE,
                validateIf: ({ obj }) => !(extractUser(obj).info?.isBI ?? false),
                findArgs: ({ value, obj }) => ({
                    where: {
                        type: { in: allowedTypes[type] },
                        userId: extractUser(obj).id,
                        workspace: workspaceFindArgs?.({ value, obj }) ?? { id: value }
                    }
                }),
                ...entityExistsArgs
            } as IPermissionExistsValidationOptions<TDtoField, TDto>],
        })
    }

    defaultMessage(_: ValidationArguments): string {
        return FORBIDDEN_MESSAGE;
    }
}

export function HasWorkspacePermission<
    TDtoField extends string,
    TDto extends Record<TDtoField, number>
>(
    type: PermissionType,
    extractUser: (obj: TDto) => IUser,
    { workspaceFindArgs, ...options }: IHasWorkspacePermissionOptions<TDtoField, TDto> = {}
) {
    return function (object: TDto, propertyName: TDtoField) {
        registerDecorator({
            target: object.constructor,
            propertyName: propertyName as string,
            options,
            constraints: [{ type, extractUser, workspaceFindArgs }],
            validator: HasWorkspacePermissionConstraint<TDtoField, TDto>
        });
    }
}