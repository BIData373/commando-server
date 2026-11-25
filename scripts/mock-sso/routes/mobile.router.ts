import { Router } from "express"
import { generators, type CallbackParamsType } from "openid-client"
import { BACKEND_URL } from "../consts"
import { HttpError } from "../errors"
import { exchangeMobileCode, getClient } from "../oidc"

type SsoParams = {
  site?: string
  client_id: string
  redirect_uri: string
  response_type: string
}

export const mobileRouter = Router()

// Stands in for the 3rd-party mobile wrapper: takes the backend's /sso/params and runs the flow itself.
// The provider then redirects to their redirect_uri (the frontend) with ?code&state&session_state&iss,
// and the frontend posts those to /sso/issue.
mobileRouter.get("/mobile", async (_req, res) => {
  const response = await fetch(`${BACKEND_URL}/sso/params`)

  if (!response.ok) {
    throw new HttpError(502, `GET ${BACKEND_URL}/sso/params failed with ${response.status}`)
  }

  const params = await response.json() as SsoParams
  const client = await getClient()

  res.redirect(client.authorizationUrl({
    ...params,
    scope: "openid",
    state: generators.state(),
  }))
})

// Like GET /cookies, but takes the callback params and only returns the token: no cookies are set.
// The frontend is the redirect_uri, so it's resolved from the request's origin.
mobileRouter.post("/issue", async (req, res) => {
  const { origin } = req.headers
  const params = (req.body ?? {}) as CallbackParamsType

  if (!origin) {
    throw new HttpError(400, "Missing Origin header")
  }

  if (!params.code) {
    throw new HttpError(400, "Missing code")
  }

  const ssoUser = await exchangeMobileCode(params, `${origin}/`)

  res.json({ ssoUser })
})
