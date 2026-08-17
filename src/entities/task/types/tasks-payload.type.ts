import { Prisma } from "../../../types/prisma";
import { TaskService } from "../task.service";


export type TaskMessageCountPayload = Prisma.TaskGetPayload<{ include: typeof TaskService.includeMessageCount }>