import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Request } from 'express';
import { UserInfoDto } from "../../entities/user/dto/response/user-info.dto";

// FIX User info type
@Injectable()
export class BIGuard implements CanActivate {
    canActivate(context: ExecutionContext) {
        return !!(context.switchToHttp().getRequest<Request>().user.info as unknown as UserInfoDto)?.isBI;
    }
}