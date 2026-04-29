import { ClassConstructor } from "class-transformer";
import type { Request } from "express";
import { UserDto } from "../../entities/user/dto/response/user.dto";
import { DtoToAdd } from "../functions/transform";
import { AddDtosToContext } from "./add-dtos-to-context.interceptor";

const fields: (keyof Request)[] = ['params', 'query', 'body']

const dtosToAdd = fields.map(to => ({
    from: 'user',
    to,
    dto: UserDto,
    field: 'user'
})) as DtoToAdd<ClassConstructor<Object>>[]

export class AddUserToContextInterceptor extends AddDtosToContext(...dtosToAdd) { }