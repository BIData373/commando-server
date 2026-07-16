import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { InjectPinoLogger, PinoLogger } from 'pino-nestjs';
import { UserService } from '../../entities/user/user.service';
import { resolveUser } from '../functions/cookie';

@Injectable()
export class CookieMiddleware implements NestMiddleware {
  constructor(
    private readonly userService: UserService,
    @InjectPinoLogger(CookieMiddleware.name) private readonly logger: PinoLogger,
  ) { }

  async use(req: Request, _res: Response, next: NextFunction) {
    const user = resolveUser(
      req.headers,
      req.cookies?.ssoUser,
    );

    // TODO - return UserDto, not User
    req.user = await this.userService.upsert(user);
    this.logger.assign({ user: req.user.info });

    next()
  }
}
