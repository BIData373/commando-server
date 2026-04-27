import { UnauthorizedException } from "@nestjs/common";
import { JwtPayload, verify } from "jsonwebtoken";
import { IUserInfo } from "../../types";

export function verifySsoUser(ssoUser: string) {
    try {
        const result = verify(
            ssoUser,
            process.env.SSO_CLIENT_SECRET!,
            { algorithms: ['HS256'] }
        ) as JwtPayload

        return result?.user as IUserInfo
    }

    catch (e: unknown) {
        console.error('Auth error: ', e)

        throw new UnauthorizedException()
    }
}