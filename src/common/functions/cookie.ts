import { UnauthorizedException } from "@nestjs/common";
import { JwtPayload, verify } from "jsonwebtoken";
import { GetUserInfoDto } from "../../entities/user/dto/request/get-user-info.dto";

export function verifySsoUser(ssoUser: string) {
    try {
        const result = verify(
            ssoUser,
            process.env.SSO_CLIENT_SECRET!,
            { algorithms: ['HS256'] }
        ) as JwtPayload

        return result?.user as GetUserInfoDto
    }

    catch (e: unknown) {
        console.error('Auth error: ', e)

        throw new UnauthorizedException()
    }
}