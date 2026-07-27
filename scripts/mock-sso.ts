import { sign } from "jsonwebtoken"
import { createServer, type IncomingMessage, type ServerResponse } from "node:http"
import {
  ssoClientSecret, mockSsoPort,
  mockUserId,
  mockUpn,
  mockName,
  mockDisplayName,
  mockIsBI
} from "../src/common/consts/env"

if (!ssoClientSecret) {
  console.error("SSO_CLIENT_SECRET is not set — exiting")
  process.exit(1)
}

const PORT = Number(mockSsoPort ?? 4000)
const PREFIX = '/sso'

const mockUser = {
  id: Number(mockUserId ?? 1),
  upn: mockUpn ?? "s0000000",
  name: mockName ?? "Admin",
  displayName: mockDisplayName ?? "Admin",
  isBI: mockIsBI === "true",
}

function issueToken(): string {
  return sign({ user: mockUser }, ssoClientSecret!, { algorithm: "HS256", expiresIn: "8h" })
}

function setCors(req: IncomingMessage, res: ServerResponse) {
  const origin = req.headers.origin ?? "*"
  res.setHeader("Access-Control-Allow-Origin", origin)
  res.setHeader("Access-Control-Allow-Credentials", "true")
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
  res.setHeader("Access-Control-Allow-Headers", "Content-Type")
}

const server = createServer((req, res) => {
  setCors(req, res)

  if (req.method === "OPTIONS") {
    res.writeHead(204)
    res.end()
    return
  }

  const url = new URL(req.url ?? "/", `http://localhost:${PORT}`)

  if (req.method === "GET" && url.pathname === `${PREFIX}/cookies`) {
    const token = issueToken()
    res.writeHead(200, { "Content-Type": "application/json" })
    res.end(JSON.stringify({ ssoUser: token }))
    return
  }

  if (req.method === "GET" && url.pathname === `${PREFIX}/auth/comeback`) {
    const comeback = url.searchParams.get("comeback") ?? "http://localhost:5173"
    res.writeHead(302, { Location: comeback })
    res.end()
    return
  }

  res.writeHead(404)
  res.end()
})

server.listen(PORT, () => {
  console.log(`Mock SSO on http://localhost:${PORT}`)
  console.log(`User: ${mockUser.upn} (id=${mockUser.id})`)
})
