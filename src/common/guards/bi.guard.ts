import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Request } from 'express';
import { IUserInfo } from "../../types";

// FIX User info type
@Injectable()
export class BIGuard implements CanActivate {
    canActivate(context: ExecutionContext) {
        return !!(context.switchToHttp().getRequest<Request>().user.info as unknown as IUserInfo)?.isBI;
    }
}