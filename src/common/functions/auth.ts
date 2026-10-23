import { UnauthorizedException } from "@nestjs/common";
import { JwtPayload, verify } from "jsonwebtoken";
import { admin } from "../consts/admin";
import { ssoClientSecret, ssoEnabled, staticToken } from "../consts/env";
import { bearerPrefix, isBiHeader, requestUsernameHeader, staticTokenHeader } from "../consts/headers";
import { CreateUserDto } from "../../entities/user/dto/request/create-user.dto";
import { GetUserInfoDto } from "../../entities/user/dto/request/get-user-info.dto";
import { IncomingHttpHeaders } from "node:http";

export function verifySsoUser(ssoUser: string) {
  try {
    const result = verify(
      ssoUser,
      ssoClientSecret!,
      { algorithms: ['HS256'] }
    ) as JwtPayload

    return result?.user as GetUserInfoDto
  }

  catch (e: unknown) {
    console.error('Auth error: ', e)

    throw new UnauthorizedException()
  }
}

export function resolveUser(
  headers: IncomingHttpHeaders,
): CreateUserDto {
  const hasStaticToken = (
    staticToken &&
    staticToken === headers[staticTokenHeader]
  )

  if (hasStaticToken || !ssoEnabled) {
    const customUpn = headers[requestUsernameHeader] as string
    const currentUser = customUpn ? { upn: customUpn } : admin
    const isBI = (headers[isBiHeader] ?? 'true') === 'true'

    return {
      ...currentUser,
      info: { upn: currentUser.upn, isBI },
    }
  }

  const authorization = headers.authorization
  if (!authorization?.startsWith(bearerPrefix)) {
    throw new UnauthorizedException()
  }

  const token = authorization.slice(bearerPrefix.length)
  const info = verifySsoUser(token)
  return { upn: info.upn, info }
}
