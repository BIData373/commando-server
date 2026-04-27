import { CallHandler, ExecutionContext, NestInterceptor, UseInterceptors } from "@nestjs/common";
import { ClassConstructor } from "class-transformer";
import type { Request } from "express";
import { UserDto } from "../../entities/user/dto/response/user.dto";
import { addDtosToContext, DtoToAdd } from "../functions/transform";

export function AddUserToContext(to: keyof Request | (keyof Request)[]) {
    class AddDtosToContextInterceptor implements NestInterceptor {
        intercept(context: ExecutionContext, next: CallHandler) {
            let request = context.switchToHttp().getRequest<Request>()

            const dtosToAdd = (Array.isArray(to) ? to : [to]).map(to => ({
                from: 'user',
                to,
                dto: UserDto
            })) as DtoToAdd<ClassConstructor<Object>>[]

            addDtosToContext(request, dtosToAdd)

            return next.handle()
        }
    }

    return UseInterceptors(AddDtosToContextInterceptor)
}