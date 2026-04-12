import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { UserService } from '../../entities/user/user.service';
import { admin } from '../consts/admin';
import { requestUsernameHeader, staticTokenHeader } from '../consts/headers';
import { verifySsoUSer } from '../functions/cookie';

@Injectable()
export class CookieMiddleware implements NestMiddleware {
  constructor(private readonly userService: UserService) { }

  async use(req: Request, _res: Response, next: NextFunction) {
    const customUpn = req.headers[requestUsernameHeader] as string

    const user = process.env.STATIC_TOKEN === req.headers[staticTokenHeader]
      ? customUpn
        ? { upn: customUpn }
        : admin
      : verifySsoUSer(req.cookies?.ssoUser)

    req.user = await this.userService.upsert(user);

    next()
  }
}
