import { Prisma, WorkspaceStatusType } from "../../../types/prisma";

export const DEFAULT_STATUSES: Prisma.WorkspaceStatusCreateManyWorkspaceInput[] =
  [
    {
      name: "טרם בוצע",
      color: "#FF9C6E",
      type: WorkspaceStatusType.NOT_STARTED,
    },
    { name: "בעבודה", color: "#85A5FF", type: WorkspaceStatusType.IN_PROGRESS },
    { name: "בוצע", color: "#95DE64", type: WorkspaceStatusType.COMPLETED },
  ] as const;
