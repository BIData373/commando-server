import { sign } from "jsonwebtoken"
import {
  mockDisplayName,
  mockIsBI,
  mockName,
  mockUpn,
  mockUserId,
  ssoClientSecret
} from "../../src/common/consts/env"
import type { UserInfo } from "../../src/entities/user/types/user-info.type"
import { SSO_USER_TTL_SECONDS } from "./consts"

export const mockUser: UserInfo & { id: number } = {
  id: Number(mockUserId ?? 1),
  upn: mockUpn ?? "s0000000",
  name: mockName ?? "Admin",
  displayName: mockDisplayName ?? "Admin",
  isBI: mockIsBI === "true",
}

// The ssoUser token the backend verifies in `verifySsoToken`
export function issueToken(user: UserInfo): string {
  return sign({ user }, ssoClientSecret!, { algorithm: "HS256", expiresIn: SSO_USER_TTL_SECONDS })
}
