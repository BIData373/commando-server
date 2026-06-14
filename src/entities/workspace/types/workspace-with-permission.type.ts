import { Prisma } from "../../../types/prisma";

export type WorkspaceWithPermissions = Prisma.WorkspaceGetPayload<{
  include: { permissions: true }
}>;