import cookieParser from "cookie-parser"
import express, { Router } from "express"
import {
  ssoClientId,
  ssoClientSecret,
  ssoCodeIssuer
} from "../../src/common/consts/env"
import { PORT, PREFIX } from "./consts"
import { errorHandler } from "./errors"
import { mobileRouter } from "./routes/mobile.router"
import { mockRouter } from "./routes/mock.router"
import { webRouter } from "./routes/web.router"
import { mockUser } from "./token"

if (!ssoClientSecret) {
  console.error("SSO_CLIENT_SECRET is not set — exiting")
  process.exit(1)
}

// With SSO_CODE_ISSUER set the server bridges to a real OIDC provider (Keycloak),
// otherwise it signs a static mock user.
if (ssoCodeIssuer && !ssoClientId) {
  console.error("SSO_CODE_ISSUER is set but SSO_CLIENT_ID is missing — exiting")
  process.exit(1)
}

const sso = Router()

if (ssoCodeIssuer) {
  sso.use(webRouter)
  sso.use(mobileRouter)
}

else {
  sso.use(mockRouter)
}

const app = express()

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", req.headers.origin ?? "*")
  res.setHeader("Access-Control-Allow-Credentials", "true")
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
  res.setHeader("Access-Control-Allow-Headers", "Content-Type")

  if (req.method === "OPTIONS") {
    res.sendStatus(204)
    return
  }

  next()
})

app.use(cookieParser())
app.use(express.json())
app.use(PREFIX, sso)
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Mock SSO on http://localhost:${PORT}`)

  if (ssoCodeIssuer) {
    console.log(`OIDC issuer: ${ssoCodeIssuer} (client ${ssoClientId})`)
  }

  else {
    console.log(`User: ${mockUser.upn} (id=${mockUser.id})`)
  }
})
