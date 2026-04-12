import { ClassConstructor, plainToInstance } from "class-transformer";
import type { Request } from "express";

type WritableKeys<T> = {
    [K in keyof T]-?: IfEquals<{ [Q in K]: T[K] }, { -readonly [Q in K]: T[K] }, K, never>
}[keyof T]

type IfEquals<X, Y, A, B> =
    (<T>() => T extends X ? 1 : 2) extends
    (<T>() => T extends Y ? 1 : 2) ? A : B

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