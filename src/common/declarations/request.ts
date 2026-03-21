import { User } from "../../../prisma";

export { };

declare global {
    namespace Express {
        interface Request {
            user: User
        }
    }
}