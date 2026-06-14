import { UserInfo } from "../entities/user/types/user-info.type";

declare global {
  namespace PrismaJson {
    export { UserInfo }
  }
}

export { };
