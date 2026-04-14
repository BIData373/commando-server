import { ForbiddenException, Injectable } from '@nestjs/common';
import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { Prisma } from '../../types/prisma';
import { IContext } from '../interfaces/context.interface';
import { PrismaService } from '../prisma.service';

// FIX Move
export type ExtractValue<TObject, TField extends keyof TObject> = TObject[TField] extends any[]
  ? TObject[TField][0]
  : TObject[TField]

export type Models = Prisma.TypeMap['meta']['modelProps']
export type ModelTypes<TModel extends Models> = Prisma.TypeMap['model'][Capitalize<TModel>]

type ModelFindFirst<TModel extends Models> = Prisma.TypeMap['model'][Capitalize<TModel>]['operations']['findFirst']
type ModelFindFirstArgs<TModel extends Models> = Prisma.SelectSubset<ModelFindFirst<TModel>['args'], ModelFindFirst<TModel>['args']>

type ModelDelegate<TModel extends Models> = {
  findFirst(args: ModelFindFirstArgs<TModel>): Promise<ModelFindFirst<TModel>['result']>
}

export type PredicateParams<
  TDto,
  TDtoField extends keyof TDto
> = {
  value: ExtractValue<TDto, TDtoField>
  obj: TDto
}

interface IEntityExistsOptions<
  TDto,
  TDtoField extends keyof TDto,
  TModel extends Models
> {
  contextField?: string
  failIfExists?: boolean
  forbidden?: boolean
  validateIf?: (params: PredicateParams<TDto, TDtoField>) => boolean
  findArgs?(params: PredicateParams<TDto, TDtoField>): ModelFindFirstArgs<TModel>
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

  async validate(value: ExtractValue<TDto, TDtoField>, { constraints, object }: ValidationArguments) {
    const {
      model,
      contextField,
      failIfExists,
      forbidden,
      findArgs: customFindArgs,
      validateIf
    } = constraints[0] as IEntityExistsConstraints<TDto, TDtoField, TModel>

    const obj = object as TDto

    if (validateIf && !validateIf({ value, obj })) {
      return true
    }

    const defaultFindArgs = { where: { id: value } } as unknown as ModelFindFirstArgs<TModel>
    const findArgs = customFindArgs?.({ value, obj }) ?? defaultFindArgs

    const record = await (this.prisma[model] as ModelDelegate<TModel>).findFirst(findArgs)

    const success = failIfExists ? !record : !!record
    if (!success && forbidden) {
      throw new ForbiddenException()
    }
    
    if (record && contextField) {
      Object.assign(object, {
        [contextField]: {
          ...((object as IContext<object>).context ?? {}),
          ...record
        }
      })
    }
    
    console.log('forbidden', forbidden)
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