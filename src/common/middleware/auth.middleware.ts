import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { InjectPinoLogger, PinoLogger } from 'pino-nestjs';
import { UserService } from '../../entities/user/user.service';
import { resolveUser } from '../functions/auth';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(
    private readonly userService: UserService,
    @InjectPinoLogger(AuthMiddleware.name) private readonly logger: PinoLogger,
  ) { }

  async use(req: Request, _res: Response, next: NextFunction) {
    const user = resolveUser(req.headers);

    // TODO - return UserDto, not User
    req.user = await this.userService.upsert(user);
    this.logger.assign({ user: req.user.info });

    next()
  }
}
