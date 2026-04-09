import { UnauthorizedException } from "@nestjs/common";
import { JwtPayload, verify } from "jsonwebtoken";
import { ICreateUser } from "../../types";

export function verifySsoUSer(ssoUser: string) {
    try {
        const result = verify(
            ssoUser,
            process.env.SSO_CLIENT_SECRET!,
            { algorithms: ['HS256'] }
        ) as JwtPayload

        return result?.user as ICreateUser
    }

    catch (e: unknown) {
        console.error('Auth error: ', e)

        throw new UnauthorizedException()
    }
}