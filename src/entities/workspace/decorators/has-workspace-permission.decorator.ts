import { Injectable } from "@nestjs/common";
import { FORBIDDEN_MESSAGE } from "@nestjs/core/guards";
import { registerDecorator, ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { entityExists, IEntityExistsValidationOptions } from "../../../common/decorators/entity-exists.decorator";
import { PrismaService } from "../../../common/prisma.service";
import { ExtractValue } from "../../../common/types/extract-value.type";
import { PredicateParams } from "../../../common/types/predicate-params.type";
import { PermissionType, Prisma } from "../../../types/prisma";
import { allowedTypes } from "../../permission/consts/permission-types";
import { UserDto } from "../../user/dto/response/user.dto";

interface IPermissionExistsValidationOptions<
    TDtoField extends keyof TDto,
    TDto extends Record<TDtoField, number>
> extends IEntityExistsValidationOptions<TDto, TDtoField, ExtractValue<TDto, TDtoField>, "permission"> { }

export interface IWorkspaceFindArgs<
    TDtoField extends keyof TDto,
    TDto extends Record<TDtoField, number>
> {
    workspaceFindArgs?(params: PredicateParams<TDto, TDtoField, ExtractValue<TDto, TDtoField>>): Prisma.PermissionWhereInput['workspace']
}

export interface IHasWorkspacePermissionOptions<
    TDtoField extends keyof TDto,
    TDto extends Record<TDtoField, number>
> extends
    IPermissionExistsValidationOptions<TDtoField, TDto>,
    IWorkspaceFindArgs<TDtoField, TDto> { }

interface IHasWorkspacePermissionContraints<
    TDtoField extends keyof TDto,
    TDto extends Record<TDtoField, number>
> extends IHasWorkspacePermissionOptions<TDtoField, TDto> {
    type: PermissionType,
    extractUser: (obj: TDto) => UserDto,
}

@ValidatorConstraint({ async: true })
@Injectable()
export class HasWorkspacePermissionConstraint<
    TDtoField extends keyof TDto,
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
        return await entityExists<TDto, TDtoField, 'permission'>(
            this.prisma,
            value,
            {
                ...args,
                constraints: [{
                    model: 'permission',
                    message: FORBIDDEN_MESSAGE,
                    validateIf: ({ obj }) => !extractUser(obj).info?.isBI,
                    findArgs: ({ value, obj }) => ({
                        where: {
                            type: { in: allowedTypes[type] },
                            userId: extractUser(obj).id,
                            workspace: workspaceFindArgs?.({ value, obj }) ?? { id: value }
                        }
                    }),
                    ...entityExistsArgs
                } as IPermissionExistsValidationOptions<TDtoField, TDto>],
            }
        )
    }

    defaultMessage(_: ValidationArguments): string {
        return FORBIDDEN_MESSAGE;
    }
}

export function HasWorkspacePermission<
    TDtoField extends keyof TDto,
    TDto extends Record<TDtoField, number>
>(
    type: PermissionType,
    extractUser: (obj: TDto) => UserDto,
    {
        workspaceFindArgs,
        each,
        message,
        groups,
        always,
        context,
        ...entityExistsOptions
    }: IHasWorkspacePermissionOptions<TDtoField, TDto> = {}
) {
    return function (target: TDto, propertyName: TDtoField) {
        registerDecorator({
            target: target.constructor,
            propertyName: propertyName as string,
            options: { each, message, groups, always, context },
            constraints: [{ type, extractUser, workspaceFindArgs, ...entityExistsOptions }],
            validator: HasWorkspacePermissionConstraint<TDtoField, TDto>
        });
    }
}