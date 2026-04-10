import { Injectable, UnauthorizedException } from '@nestjs/common';
import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { managerTypes } from '../../entities/permission/guards/permission.guard';
import { IUserContext } from '../../entities/user/interfaces/user-context.interface';
import { Prisma } from '../../types/prisma';
import { IContext } from '../interfaces/context.interface';
import { PrismaService } from '../prisma.service';

type ExtractValue<TObject, TField extends keyof TObject> = TObject[TField] extends Array<unknown>
  ? TObject[TField][0]
  : TObject[TField]

export type Models = Prisma.TypeMap['meta']['modelProps']
export type ModelTypes<TModel extends Models> = Prisma.TypeMap['model'][Capitalize<TModel>]

type ModelFindUnique<TModel extends Models> = Prisma.TypeMap['model'][Capitalize<TModel>]['operations']['findUnique']
type ModelFindUniqueArgs<TModel extends Models> = Prisma.SelectSubset<ModelFindUnique<TModel>['args'], ModelFindUnique<TModel>['args']>

type ModelDelegate<TModel extends Models> = {
  findUnique(args: ModelFindUniqueArgs<TModel>): ModelFindUnique<TModel>['result']
}

interface IEntityExistsOptions<
  TDto,
  TDtoField extends keyof TDto,
  TModel extends Models
> {
  contextField?: string
  fail?: boolean
  unauthorized?: boolean
  findArgs?(params: { value: ExtractValue<TDto, TDtoField>, obj: TDto }): ModelFindUniqueArgs<TModel>
}

interface IEntityExistsConstraints<
  TDto,
  TDtoField extends keyof TDto,
  TModel extends Models
> extends
  IEntityExistsOptions<TDto, TDtoField, TModel> {
  model: TModel
}

export interface IEntityExistsValidationOptions<
  TDto,
  TDtoField extends keyof TDto,
  TModel extends Models
> extends
  ValidationOptions,
  IEntityExistsOptions<TDto, TDtoField, TModel> { }

@ValidatorConstraint({ name: 'EntityExists', async: true })
@Injectable()
export class EntityExistsConstraint<
  TDto extends object,
  TDtoField extends keyof TDto,
  TModel extends Models
> implements ValidatorConstraintInterface {
  constructor(private readonly prisma: PrismaService) { }

  async validate(value: ExtractValue<TDto, TDtoField>, args: ValidationArguments) {
    const {
      model,
      contextField,
      fail,
      unauthorized,
      findArgs: customFindArgs
    } = args.constraints[0] as IEntityExistsConstraints<TDto, TDtoField, TModel>

    const defaultFindArgs = { where: { id: value } } as unknown as ModelFindUniqueArgs<TModel>
    const findArgs = customFindArgs?.({ value, obj: args.object as TDto }) ?? defaultFindArgs
    const record = (this.prisma[model] as ModelDelegate<TModel>).findUnique(findArgs)

    const success = fail ? !record : !!record
    if (!success && unauthorized) {
      throw new UnauthorizedException()
    }

    if (record && contextField) {
      Object.assign(args.object, {
        [contextField]: {
          ...((args.object as IContext<object>).context ?? {}),
          ...record
        }
      })
    }

    return success;
  }

  defaultMessage(args: ValidationArguments): string {
    const { model } = args.constraints[0] as IEntityExistsConstraints<TDto, TDtoField, TModel>

    return `${String(model)} with id ${args.value} does not exist`;
  }
}

export function EntityExists<
  TDto extends object,
  TDtoField extends keyof TDto,
  TModel extends Models
>(
  model: TModel,
  {
    each,
    message,
    groups,
    always,
    context,
    ...entityExistsOptions
  }: IEntityExistsValidationOptions<TDto, TDtoField, TModel> = {}
) {
  return function (object: TDto, propertyName: TDtoField) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName as string,
      options: { each, message, groups, always, context },
      constraints: [{ model, ...entityExistsOptions }],
      validator: EntityExistsConstraint<TDto, TDtoField, TModel>
    });
  };
}

// function formatPermissionFindArgs<
//   TDto extends IContext<IUserContext>,
//   TDtoField extends keyof TDto
// >(value: ExtractValue<TDto, TDtoField>, obj: TDto) {
//   return {
//     permissions: {
//       some: {
//         type: { in: managerTypes },
//         userId_workspaceId: {
//           userId: obj.context.user.id,
//           workspaceId: value
//         },
//       }
//     }
//   }
// }

// const a: Record<Models, () =>  = {

// }

// export function HasPermission<
//   TDto extends IContext<IUserContext>,
//   TDtoField extends keyof TDto,
//   TModel extends Models
// >(model: TModel) {
//   return EntityExists<TDto, TDtoField, TModel>(model, {
//     findArgs: ({ value, obj }) => ({
//       where: {
//         id: value,
//         ...(model === 'workspace'
//           ? formatPermissionFindArgs(value, obj)
//           : { workspace: formatPermissionFindArgs(value, obj) })
//       }
//     })
//   })
// }