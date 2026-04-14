import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { UserService } from '../../entities/user/user.service';
import { ICreateUser } from '../../types';
import { admin } from '../consts/admin';
import { isBiHeader, requestUsernameHeader, staticTokenHeader } from '../consts/headers';
import { verifySsoUser } from '../functions/cookie';

@Injectable()
export class CookieMiddleware implements NestMiddleware {
  constructor(private readonly userService: UserService) { }

  async use(req: Request, _res: Response, next: NextFunction) {
    let user: ICreateUser;

    const hasStaticToken = process.env.STATIC_TOKEN === (req.headers[staticTokenHeader] as string)
    if (hasStaticToken) {
      const customUpn = req.headers[requestUsernameHeader] as string

      const currentUser = customUpn ? { upn: customUpn } : admin
      const isBI = req.headers[isBiHeader] as string === 'true'

      user = {
        ...currentUser,
        info: { upn: currentUser.upn, isBI }
      }
    }

    else {
      const info = verifySsoUser(req.cookies?.ssoUser)

      user = { upn: info.upn, info }
    }

    req.user = await this.userService.upsert(user);

    next()
  }
}
