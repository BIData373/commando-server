import { BadRequestException, ForbiddenException } from "@nestjs/common";
import { FORBIDDEN_MESSAGE } from "@nestjs/core/guards";
import { ClassConstructor, plainToInstance } from "class-transformer";
import { ValidationError } from "class-validator";
import type { Request } from "express";

export type DtoToAdd<TDto> = {
    from: keyof Request
    to: keyof Request
    dto: TDto | TDto[]
}

// FIX Check
export async function addDtosToContext(
    request: Request,
    dtosToAdd: DtoToAdd<ClassConstructor<Object>>[]
) {
    dtosToAdd.forEach(({ from, to, dto }) => {
        if (request[to]) {
            const instances = (Array.isArray(dto) ? dto : [dto])
                .map(currentDto => plainToInstance(currentDto, request[from]))

            Object.assign(request[to], {
                ...request[to],
                context: {
                    ...(request?.[to]?.context ?? {}),
                    [to]: {
                        ...(request?.[to]?.context?.[to] ?? {}),
                        ...Object.assign({}, ...instances)
                    }
                }
            })
        }
    })
}

export function forbiddenExceptionFactory(errors: ValidationError[]) {
    console.log(JSON.stringify(errors, undefined, 4))
    const isForbidden = errors.every(error =>
        Object.values(error.constraints ?? {}).every(
            constraint => constraint === FORBIDDEN_MESSAGE
        )
    );

    const messages = errors.flatMap(e => Object.values(e.constraints ?? {}));

    return isForbidden
        ? new ForbiddenException()
        : new BadRequestException(messages);
}