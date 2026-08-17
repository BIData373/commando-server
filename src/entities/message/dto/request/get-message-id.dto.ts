import { FORBIDDEN_MESSAGE } from "@nestjs/core/guards";
import { IdExists } from "../../../../common/decorators/id-exists.decorator";
import { IsIdPermitted } from "../../../../common/decorators/is-permitted-id.decorator";
import { GetContextDto } from "../../../../common/dto/request/get-context.dto";
import { PermissionType } from "../../../../types/prisma";
import { managerTypes } from "../../../permission/consts/permission-types";
import { IUserContext } from "../../../user/interfaces/user-context.interface";

export function GetPermittedMessageIdDto(type: PermissionType) {
    class GetMessageIdDto extends GetContextDto<IUserContext> {
        @IsIdPermitted('message', type, {
            filterDeletedAt: true,
            workspaceFindArgs: ({ value }) => ({ tasks: { some: { messages: { some: { id: value } } } } })
        })
        id: number
    }

    return GetMessageIdDto
}

export class GetViewerMessageIdDto extends GetPermittedMessageIdDto(PermissionType.VIEWER) { }
export class GetManagerMessageIdDto extends GetPermittedMessageIdDto(PermissionType.MANAGER) { }

export class GetManagerOrOwnerMessageIdDto extends GetContextDto<IUserContext> {
    @IdExists('message', {
        message: FORBIDDEN_MESSAGE,
        validateIf: ({ obj }) => !obj.context.user.info?.isBI,
        findArgs: ({ value, obj }) => ({
            where: {
                id: value,
                deletedAt: null,
                OR: [
                    { task: { workspace: { permissions: { some: { userId: obj.context.user.id, type: { in: managerTypes } } } } } },
                    { userId: obj.context.user.id }
                ]
            }
        })
    })
    @IdExists('message', { filterDeletedAt: true })
    id: number
}