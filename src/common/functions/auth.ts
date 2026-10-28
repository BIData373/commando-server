import { UnauthorizedException } from "@nestjs/common";
import { JwtPayload, verify } from "jsonwebtoken";
import { IncomingHttpHeaders } from "node:http";
import { CreateUserDto } from "../../entities/user/dto/request/create-user.dto";
import { GetUserInfoDto } from "../../entities/user/dto/request/get-user-info.dto";
import { admin } from "../consts/admin";
import { ssoClientSecret, ssoEnabled, staticToken } from "../consts/env";
import { bearerPrefix, isBiHeader, requestUsernameHeader, staticTokenHeader } from "../consts/headers";

export function extractSsoToken(
  authorization: string | undefined,
  ssoUserCookie: string | undefined,
) {
  if (ssoUserCookie) {
    return ssoUserCookie
  }

  if (authorization && bearerPrefix.test(authorization)) {
    return authorization.replace(bearerPrefix, '')
  }
}

export function verifySsoToken(token: string) {
  try {
    const result = verify(
      token,
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
  ssoToken: string | undefined,
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
      upn: 'yael',
      info: { upn: currentUser.upn, isBI },
    }
  }

  const info = verifySsoToken(ssoToken!)
  return { upn: info.upn, info }
}
