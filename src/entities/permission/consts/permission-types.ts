import { PermissionType } from "../../../types/prisma"

export const managerTypes = [PermissionType.MANAGER]
export const viewerTypes = [PermissionType.VIEWER, ...managerTypes]

export const allowedTypes = {
    [PermissionType.VIEWER]: viewerTypes,
    [PermissionType.MANAGER]: managerTypes
}
