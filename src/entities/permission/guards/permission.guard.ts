import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { plainToInstance } from "class-transformer";
import { Request } from 'express';
import { PermissionSettings } from "../../../common/decorators/permission-settings.decorator";
import { IContext } from "../../../common/interfaces/context.interface";
import { PermissionType } from "../../../types";
import { GetWorkspaceIdFieldDto } from "../../workspace/dto/request/get-workspace-id-field.dto";
import { PermissionService } from "../permission.service";

export const managerTypes = [PermissionType.MANAGER]
export const viewerTypes = [PermissionType.VIEWER, ...managerTypes]

export const allowedTypes = {
    [PermissionType.VIEWER]: viewerTypes,
    [PermissionType.MANAGER]: managerTypes
}

@Injectable()
export class PermissionGuard implements CanActivate {
    constructor(
        private readonly permissionsService: PermissionService,
        private readonly reflector: Reflector
    ) { }

    async canActivate(context: ExecutionContext) {
        const { type, from, dto, contextField, field } = this.reflector.get(
            PermissionSettings,
            context.getHandler()
        );

        const request = context.switchToHttp().getRequest<Request>();

        // const value = dto
        // ?contextField
        // ?plainToInstance(dto, request[from]).context[contextField]
        // :plainToInstance(dto, request[from]).context[contextField]
        // :plainToInstance(GetWorkspaceIdFieldDto, request[from])
        const value = dto && contextField
            ? plainToInstance(dto, request[from]).context[contextField].workspaceId
            : plainToInstance(GetWorkspaceIdFieldDto, request[from]).workspaceId

        // const dtoField = field ?? 'workspaceId'
        // const dtoValue = dto && contextField
        //     ? plainToInstance(dto, request[from]).context[contextField]
        //     : plainToInstance(GetWorkspaceIdFieldDto, request[from])

        // const value = contextField
        //     ? (dtoValue as IContext<Object>).context
        //     : dto
        //     ? dtoValue[dtoField]
        //     : (dtoValue as GetWorkspaceIdFieldDto).workspaceId

        return await this.permissionsService.hasPermission(
            request.user.id,
            value,
            allowedTypes[type]
        )
    }
}