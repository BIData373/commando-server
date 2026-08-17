import { Prisma } from "../../../types/prisma";
import { TaskService } from "../task.service";


export type TaskPayload = Prisma.TaskGetPayload<{ include: typeof TaskService.includeMessageCount }>