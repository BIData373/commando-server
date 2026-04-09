import { Injectable } from '@nestjs/common';
import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { PrismaService } from '../prisma.service';

interface IEntityExistsOptions {
  contextField?: string
  fail?: boolean
}

interface IEntityExistsConstraints extends IEntityExistsOptions {
  model: keyof PrismaService
}

export interface IEntityExistsValidationOptions extends
  ValidationOptions,
  IEntityExistsOptions { }

@ValidatorConstraint({ name: 'EntityExists', async: true })
@Injectable()
export class EntityExistsConstraint implements ValidatorConstraintInterface {
  constructor(private readonly prisma: PrismaService) { }

  async validate(id: number, args: ValidationArguments) {
    const { model, contextField, fail } = args.constraints[0] as IEntityExistsConstraints

    const record = await (this.prisma[model] as any).findUnique({ where: { id } });
    if (contextField) {
      Object.assign(args.object, { [contextField]: record })
    }

    return fail ? !record : !!record;
  }

  defaultMessage(args: ValidationArguments): string {
    const { model } = args.constraints[0] as IEntityExistsConstraints

    return `${String(model)} with id ${args.value} does not exist`;
  }
}

// FIX Add findOptions
export function EntityExists(
  model: keyof PrismaService,
  options?: IEntityExistsOptions
) {
  const { contextField, fail, ...validationOptions } = options ?? {}

  return function (object: object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName,
      options: validationOptions,
      constraints: [{ model, fail, contextField }],
      validator: EntityExistsConstraint
    });
  };
}
