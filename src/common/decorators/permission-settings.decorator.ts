import { Reflector } from "@nestjs/core";
import { ClassConstructor } from "class-transformer";
import type { Request } from "express";
import { IWorkspaceId, PermissionType } from "../../types";
import { IContext } from "../interfaces/context.interface";

interface IPermissionSettings {
    type: PermissionType
    from: keyof Request
    dto?: ClassConstructor<IContext<Record<string, IWorkspaceId>>>,
    contextField?: string
}

export const PermissionSettings = Reflector.createDecorator<IPermissionSettings>();
