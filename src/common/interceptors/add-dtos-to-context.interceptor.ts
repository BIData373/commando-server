import { CallHandler, ExecutionContext, NestInterceptor, UseInterceptors } from "@nestjs/common";
import { ClassConstructor } from "class-transformer";
import type { Request } from "express";
import { addDtosToContext, DtoToAdd } from "../functions/transform";

export function AddDtosToContext<TTarget = unknown>(...dtosToAdd: DtoToAdd<ClassConstructor<Object>, TTarget>[]) {
  class AddDtosToContextInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler) {
      let request = context.switchToHttp().getRequest<Request>()

      addDtosToContext(request, dtosToAdd)

      return next.handle()
    }
  }

  return AddDtosToContextInterceptor
}