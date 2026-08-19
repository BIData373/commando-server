import { BadRequestException, ForbiddenException } from "@nestjs/common";
import { FORBIDDEN_MESSAGE } from "@nestjs/core/guards";
import { ClassConstructor, plainToInstance } from "class-transformer";
import { ValidationError } from "class-validator";
import type { Request } from "express";
import { get } from "lodash";
import { sendForbiddenMessages } from "../consts/env";
import { Path, WritePath } from "../types/path.type";

export type RequestTarget = 'body' | 'params' | 'query' | 'user'
type ToTarget<TTarget> = RequestTarget | `${RequestTarget}.${WritePath<TTarget>}`
type FromTarget<TSource> = RequestTarget | `${RequestTarget}.${Path<TSource>}`

export type DtoToAdd<TDto, TTarget = unknown, TSource = unknown> = {
  from: FromTarget<TSource> | FromTarget<TSource>[]
  to: ToTarget<TTarget> | ToTarget<TTarget>[]
  dto: TDto | TDto[]
}

type PathSegment = { name: string; isArray: boolean }

function parseSegments(rawSegments: string[]): PathSegment[] {
  return rawSegments.map(segment => (
    segment.endsWith('[]')
      ? { name: segment.slice(0, -2), isArray: true }
      : { name: segment, isArray: false }
  ))
}

function copyFields(target: unknown, segments: PathSegment[], instances: object[]): void {
  if (target == null || typeof target !== 'object' || segments.length === 0) return

  if (Array.isArray(target)) {
    target.forEach(item => copyFields(item, segments, instances))
    return
  }

  const [{ name: head, isArray }, ...rest] = segments
  const record = target as Record<string, unknown>

  if (rest.length > 0) {
    if (record[head] === undefined && !isArray) {
      record[head] = {}
    }

    copyFields(record[head], rest, instances)
  }

  else {
    record[head] = {
      ...(record[head] as object ?? {}),
      ...Object.assign({}, ...instances)
    }
  }
}

export async function copyDtosInRequest<TTarget = unknown, TSource = unknown>(
  request: Request,
  dtosToAdd: DtoToAdd<ClassConstructor<Object>, TTarget, TSource>[]
) {
  dtosToAdd.forEach(({ from, to, dto }) => {
    const fromEntries = Array.isArray(from) ? from : [from]
    const toTargets = Array.isArray(to) ? to : [to]

    const source = Object.assign({}, ...fromEntries.map(entry => {
      const [fromKey, ...pathSegments] = (entry as string).split('.') as [RequestTarget, ...string[]]

      return pathSegments.length > 0
        ? { id: get(request[fromKey], pathSegments) }
        : request[fromKey]
    }))

    const instances = (Array.isArray(dto) ? dto : [dto])
      .map(currentDto => plainToInstance(currentDto, source))

    toTargets.forEach(target => {
      const [toKey, ...rawSegments] = (target as string).split('.')

      if (!request[toKey as RequestTarget]) {
        copyFields(request[toKey as RequestTarget], parseSegments(rawSegments), instances)
      }
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