import { Injectable } from '@nestjs/common';
import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { merge } from 'lodash';
import { Prisma } from '../../types/prisma';
import { stringifyObject } from '../functions/string';
import { IContext } from '../interfaces/context.interface';
import { PrismaService } from '../prisma.service';
import { ExtractValue } from '../types/extract-value.type';
import { Models } from '../types/models.type';
import { PredicateParams } from '../types/predicate-params.type';

export type ModelFindFirst<TModel extends Models> = Prisma.TypeMap['model'][Capitalize<TModel>]['operations']['findFirst']
export type ModelFindFirstArgs<TModel extends Models> = ModelFindFirst<TModel>['args']
export type ModelFindFirstSelectArgs<TModel extends Models> = Prisma.SelectSubset<ModelFindFirstArgs<TModel>, ModelFindFirstArgs<TModel>>

type ModelDelegate<TModel extends Models> = {
  findFirst(args: ModelFindFirstSelectArgs<TModel>): Promise<ModelFindFirst<TModel>['result']>
}

interface IEntityExistsOptions<
  TDto,
  TDtoField extends keyof TDto,
  TDtoValue extends ExtractValue<TDto, TDtoField>,
  TModel extends Models
> {
  contextField?: string
  failIfExists?: boolean
  validateIf?: (params: PredicateParams<TDto, TDtoField, TDtoValue>) => boolean
  findArgs?(params: PredicateParams<TDto, TDtoField, TDtoValue>): ModelFindFirstSelectArgs<TModel>,
  filterDeletedAt?: boolean
}

interface IEntityExistsConstraints<
  TDto,
  TDtoField extends keyof TDto,
  TModel extends Models
> extends IEntityExistsOptions<TDto, TDtoField, ExtractValue<TDto, TDtoField>, TModel> {
  model: TModel
  each?: boolean
}

export interface IEntityExistsValidationOptions<
  TDto,
  TDtoField extends keyof TDto,
  TDtoValue extends ExtractValue<TDto, TDtoField>,
  TModel extends Models
> extends
  ValidationOptions,
  IEntityExistsOptions<TDto, TDtoField, TDtoValue, TModel> { }

export async function entityExists<
  TDto extends Object,
  TDtoField extends keyof TDto,
  TModel extends Models
>(
  prisma: PrismaService,
  value: ExtractValue<TDto, TDtoField>,
  { constraints, object }: ValidationArguments
) {
  const {
    model,
    each,
    contextField,
    failIfExists,
    filterDeletedAt,
    findArgs: customFindArgs,
    validateIf
  } = constraints[0] as IEntityExistsConstraints<TDto, TDtoField, TModel>

  const obj = object as TDto

  if (validateIf && !validateIf({ value, obj })) {
    return true
  }

  const defaultFindArgs = {
    where: {
      id: value,
      ...(filterDeletedAt && { deletedAt: null })
    }
  } as unknown as ModelFindFirstSelectArgs<TModel>

  const repo = prisma[model] as ModelDelegate<TModel>

  const findFirst = async (
    value: ExtractValue<TDto, TDtoField>,
    obj: TDto
  ) => await repo.findFirst(customFindArgs?.({ value, obj }) ?? defaultFindArgs)

  const record = await findFirst(value, obj)

  const recordExists = !!record && (
    !each ||
    !Array.isArray(record) ||
    record.length > 0
  )

  if (recordExists && contextField) {
    merge(object, {
      context: {
        [contextField]: {
          ...((object as IContext<object>).context ?? {}),
          ...record
        }
      }
    })
  }

  return failIfExists ? !recordExists : recordExists;
}

@ValidatorConstraint({ async: true })
@Injectable()
export class EntityExistsConstraint<
  TDto extends Object,
  TDtoField extends keyof TDto,
  TModel extends Models
> implements ValidatorConstraintInterface {
  constructor(private readonly prisma: PrismaService) { }

  async validate(value: ExtractValue<TDto, TDtoField>, args: ValidationArguments): Promise<boolean> {
    return await entityExists(this.prisma, value, args)
  }

  defaultMessage({ constraints, value, object }: ValidationArguments): string {
    const { model, failIfExists, each, findArgs } = constraints[0] as IEntityExistsConstraints<TDto, TDtoField, TModel>

    const suffix = failIfExists ? 'already exists' : 'does not exist'

    const formatError = (value: any) => (
      `${String(model)} where ${stringifyObject(findArgs?.({ value, obj: object as TDto }).where) ?? `id is ${value}`} ${suffix}`
    )

    return Array.isArray(value) && each
      ? value.map(formatError).join(', ')
      : formatError(value)
  }
}

export function EntityExists<
  TDto extends Object,
  TDtoField extends keyof TDto,
  TDtoValue extends ExtractValue<TDto, TDtoField>,
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
  }: IEntityExistsValidationOptions<TDto, TDtoField, TDtoValue, TModel> = {}
) {
  return function (target: TDto, propertyName: TDtoField) {
    registerDecorator({
      target: target.constructor,
      propertyName: propertyName as string,
      options: { each, message, groups, always, context },
      constraints: [{ model, each, ...entityExistsOptions }],
      validator: EntityExistsConstraint<TDto, TDtoField, TModel>
    });
  };
}