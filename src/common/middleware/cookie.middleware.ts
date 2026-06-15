import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { InjectPinoLogger, PinoLogger } from 'pino-nestjs';
import { CreateUserDto } from '../../entities/user/dto/request/create-user.dto';
import { UserService } from '../../entities/user/user.service';
import { admin } from '../consts/admin';
import { ssoEnabled, staticToken } from '../consts/env';
import { isBiHeader, requestUsernameHeader, staticTokenHeader } from '../consts/headers';
import { verifySsoUser } from '../functions/cookie';

@Injectable()
export class CookieMiddleware implements NestMiddleware {
  constructor(
    private readonly userService: UserService,
    @InjectPinoLogger(CookieMiddleware.name) private readonly logger: PinoLogger,
  ) { }

  async use(req: Request, _res: Response, next: NextFunction) {
    let user: CreateUserDto;

    const hasStaticToken = (
      staticToken &&
      staticToken === (req.headers[staticTokenHeader] as string)
    )

    if (hasStaticToken || !ssoEnabled) {
      const customUpn = req.headers[requestUsernameHeader] as string

      const currentUser = customUpn ? { upn: customUpn } : admin
      const isBI = (req.headers[isBiHeader] as string ?? 'true') === 'true'

      user = {
        ...currentUser,
        info: { upn: currentUser.upn, isBI }
      }
    }

    else {
      const info = verifySsoUser(req.cookies?.ssoUser)

      user = { upn: info.upn, info }
    }

    // TODO - return UserDto, not User
    req.user = await this.userService.upsert(user);
    this.logger.assign({ user: req.user.info });

    next()
  }
}
