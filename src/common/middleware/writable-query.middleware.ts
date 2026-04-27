import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request } from "express";

@Injectable()
export class WritableQueryMiddleware implements NestMiddleware {
    use(req: Request, _res: Response, next: NextFunction) {
        Object.defineProperty(req, 'query', {
            ...Object.getOwnPropertyDescriptor(req, 'query'),
            writable: true,
            value: req.query
        })

        next()
    }
}