import { ClassConstructor } from "class-transformer";
import { CurrentUserDto } from "../../entities/user/dto/response/current-user.dto";
import { DtoToAdd, RequestTarget } from "../functions/transform";
import { CopyDtosInRequest } from "./copy-dtos-in-request.interceptor";

const fields: RequestTarget[] = ['params', 'query', 'body']

const dtosToAdd = fields.map(to => ({
    from: 'user',
    to: `${to}.context.user`,
    dto: CurrentUserDto
})) as unknown as DtoToAdd<ClassConstructor<Object>>[]

export class AddUserToContextInterceptor extends CopyDtosInRequest(...dtosToAdd) { }