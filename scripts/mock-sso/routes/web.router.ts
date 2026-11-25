import { Router } from "express"
import {
  AUTH_COOKIE,
  AUTH_TTL_SECONDS,
  CALLBACK_URI,
  DEFAULT_COMEBACK,
  PREFIX,
  SSO_USER_COOKIE,
  SSO_USER_TTL_SECONDS
} from "../consts"
import { HttpError } from "../errors"
import { createAuthorization, exchangeCode, verifyTransaction } from "../oidc"

export const webRouter = Router()

// Browser lands here, gets the transaction cookie and is sent to the provider's login page
webRouter.get("/auth/comeback", async (req, res) => {
  const comeback = typeof req.query.comeback === "string" ? req.query.comeback : DEFAULT_COMEBACK
  const { authorizationUrl, transaction } = await createAuthorization(CALLBACK_URI, comeback)

  res.cookie(AUTH_COOKIE, transaction, {
    httpOnly: true,
    sameSite: "lax",
    path: PREFIX,
    maxAge: AUTH_TTL_SECONDS * 1000,
  })

  res.redirect(authorizationUrl)
})

// Provider redirects back with ?code&state&session_state&iss
webRouter.get("/callback", async (req, res) => {
  const transaction = verifyTransaction(req.cookies[AUTH_COOKIE])
  const token = await exchangeCode(req.query, transaction)

  res.clearCookie(AUTH_COOKIE, { path: PREFIX })
  res.cookie(SSO_USER_COOKIE, token, {
    maxAge: SSO_USER_TTL_SECONDS * 1000,
  })

  res.redirect(transaction.comeback ?? DEFAULT_COMEBACK)
})

webRouter.get("/cookies", (req, res) => {
  const ssoUser: string | undefined = req.cookies[SSO_USER_COOKIE]

  if (!ssoUser) {
    throw new HttpError(401, "Not logged in")
  }

  res.json({ ssoUser })
})
