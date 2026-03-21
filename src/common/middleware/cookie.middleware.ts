import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { admin } from '../consts/admin';
import { PrismaService } from '../prisma.service';

@Injectable()
export class CookieMiddleware implements NestMiddleware {
  constructor(private readonly prisma: PrismaService) {}

  async use(req: Request, _res: Response, next: NextFunction): Promise<void> {
    req.user = await this.prisma.user.upsert({
      where: { upn: admin.upn },
      create: admin,
      update: {},
    });

    next();
  }
}
