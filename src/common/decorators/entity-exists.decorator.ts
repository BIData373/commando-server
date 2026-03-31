import { Injectable } from '@nestjs/common';
import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { PrismaService } from '../prisma.service';

@ValidatorConstraint({ name: 'EntityExists', async: true })
@Injectable()
export class EntityExistsConstraint implements ValidatorConstraintInterface {
  constructor(private readonly prisma: PrismaService) { }

  async validate(id: number, args: ValidationArguments): Promise<boolean> {
    const model = args.constraints[0] as keyof PrismaService;

    const record = await (this.prisma[model] as any).findUnique({ where: { id } });

    return !!record;
  }

  defaultMessage(args: ValidationArguments): string {
    return `${String(args.constraints[0])} with id ${args.value} does not exist`;
  }
}

// FIX Add findOptions
export function EntityExists(model: keyof PrismaService, options?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName,
      options,
      constraints: [model],
      validator: EntityExistsConstraint,
    });
  };
}
