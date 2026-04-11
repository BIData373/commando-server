import { ClassConstructor, plainToInstance } from "class-transformer";
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
            const instances = Array.isArray(dto) ? dto : [dto]
                .map(currentDto => plainToInstance(
                    currentDto,
                    request[from]
                ))

            Object.assign(request[to], {
                ...request[to],
                context: {
                    ...(request[to]?.context ?? {}),
                    [to]: Object.assign((request[to]?.context?.[to] ?? {}), ...instances)
                }
            })
        }
    })
}