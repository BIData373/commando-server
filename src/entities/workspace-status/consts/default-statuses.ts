import { Prisma, WorkspaceStatusType } from "../../../types/prisma";

export const DEFAULT_STATUSES: Prisma.WorkspaceStatusCreateManyWorkspaceInput[] = [
  { name: 'טרם בוצע', color: '#FA541C', type: WorkspaceStatusType.NOT_STARTED },
  { name: 'בעבודה', color: '#2F54EB', type: WorkspaceStatusType.IN_PROGRESS },
  { name: 'בוצע', color: '#52C41A', type: WorkspaceStatusType.COMPLETED }
] as const