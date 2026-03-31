import { User } from "../../types/prisma";

export { };

declare global {
    namespace Express {
        interface Request {
            user: User
        }
    }
}