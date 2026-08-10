import { BadRequestException, ForbiddenException } from "@nestjs/common";
import { FORBIDDEN_MESSAGE } from "@nestjs/core/guards";
import { ClassConstructor, plainToInstance } from "class-transformer";
import { ValidationError } from "class-validator";
import type { Request } from "express";
import { sendForbiddenMessages } from "../consts/env";
import { Path } from "../types/path.type";

type RequestTarget = 'body' | 'params' | 'query' | 'user'
type ToTarget<TTarget> = RequestTarget | `${RequestTarget}.${Path<TTarget>}`

export type DtoToAdd<TDto, TTarget = unknown> = {
  from: RequestTarget | RequestTarget[]
  to: ToTarget<TTarget> | ToTarget<TTarget>[]
  dto: TDto | TDto[],
  field?: string
  sourceField?: string
}

function applyContext(target: unknown, segments: string[], field: string, instances: object[]): void {
  if (target == null || typeof target !== 'object') return

  if (Array.isArray(target)) {
    target.forEach(item => applyContext(item, segments, field, instances))
    return
  }

  if (segments.length > 0) {
    const [head, ...rest] = segments
    applyContext((target as Record<string, unknown>)[head], rest, field, instances)
    return
  }

  const existingContext = (target as { context?: Record<string, unknown> }).context
  Object.assign(target, {
    context: {
      ...existingContext,
      [field]: {
        ...(existingContext?.[field] as object ?? {}),
        ...Object.assign({}, ...instances)
      }
    }
  })
}

export async function addDtosToContext<TTarget = unknown>(
  request: Request,
  dtosToAdd: DtoToAdd<ClassConstructor<Object>, TTarget>[]
) {
  dtosToAdd.forEach(({ from, to, dto, field, sourceField }) => {
    const fromKeys = Array.isArray(from) ? from : [from]
    const toTargets = Array.isArray(to) ? to : [to]

    const source = sourceField
      ? Object.assign({}, ...fromKeys.map(key => ({ id: (request[key] as Record<string, unknown>)?.[sourceField] })))
      : Object.assign({}, ...fromKeys.map(key => request[key]))

    const instances = (Array.isArray(dto) ? dto : [dto])
      .map(currentDto => plainToInstance(currentDto, source))

    toTargets.forEach(target => {
      const [toKey, ...pathSegments] = (target as string).split('.') as [RequestTarget, ...string[]]

      if (!request[toKey]) return

      applyContext(request[toKey], pathSegments, field ?? toKey, instances)
    })
  })
}

function flattenConstraints(errors: ValidationError[]): string[] {
  return errors.flatMap(error => [
    ...Object.values(error.constraints ?? {}),
    ...flattenConstraints(error.children ?? [])
  ]);
}

export function forbiddenExceptionFactory(errors: ValidationError[]) {
  const messages = flattenConstraints(errors);

  const isForbidden = messages.length > 0 && messages.every(
    constraint => constraint === FORBIDDEN_MESSAGE
  );

  return isForbidden
    ? new ForbiddenException(sendForbiddenMessages ? errors : undefined)
    : new BadRequestException(messages);
}