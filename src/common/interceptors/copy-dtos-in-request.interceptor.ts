import { CallHandler, ExecutionContext, NestInterceptor, UseInterceptors } from "@nestjs/common";
import { ClassConstructor } from "class-transformer";
import type { Request } from "express";
import { copyDtosInRequest, DtoToAdd } from "../functions/transform";

export function CopyDtosInRequest<TTarget = unknown, TSource = unknown>(...dtosToAdd: DtoToAdd<ClassConstructor<Object>, TTarget, TSource>[]) {
  class CopyDtosInRequestInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler) {
      let request = context.switchToHttp().getRequest<Request>()

      copyDtosInRequest<TTarget, TSource>(request, dtosToAdd)

      return next.handle()
    }
  }

  return CopyDtosInRequestInterceptor
}