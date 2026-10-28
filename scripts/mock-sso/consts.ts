import { mockSsoPort, port, serverPrefix } from "../../src/common/consts/env"

export const PORT = Number(mockSsoPort ?? 4000)
export const PREFIX = "/sso"
// Desktop flow callback on this server; SSO_REDIRECT_URI is the one handed out by the backend's /sso/params
export const CALLBACK_URI = `http://localhost:${PORT}${PREFIX}/callback`
export const BACKEND_URL = new URL(serverPrefix, `http://localhost:${port}/`).href.replace(/\/$/, "")
export const DEFAULT_COMEBACK = "http://localhost:5173"

export const SSO_USER_COOKIE = "ssoUser"
export const SSO_USER_TTL_SECONDS = 8 * 60 * 60

// Short-lived signed transaction (nonce/state/PKCE) carried between the authorize redirect and the callback.
export const AUTH_COOKIE = "ssoAuth"
export const AUTH_TTL_SECONDS = 5 * 60
export const AUTH_AUDIENCE = "sso-auth-transaction"
