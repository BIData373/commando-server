import { Prisma } from "../../../types/prisma";
import { AssigneeService } from "../assignee.service";

export type AssigneesPayload = Prisma.AssigneeGetPayload<{ include: typeof AssigneeService.includeMany }>
