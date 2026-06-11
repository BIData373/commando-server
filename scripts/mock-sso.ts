import { config } from "dotenv"
import { createServer, type IncomingMessage, type ServerResponse } from "node:http"
import path from "node:path"
import { sign } from "jsonwebtoken"

config({ path: path.join(__dirname, "../config/common.env") })
config({ path: path.join(__dirname, `../config/${process.env.ENV ?? "local"}/.env`) })

const SECRET = process.env.SSO_CLIENT_SECRET
if (!SECRET) {
	console.error("SSO_CLIENT_SECRET is not set — exiting")
	process.exit(1)
}

const PORT = Number(process.env.MOCK_SSO_PORT ?? 4000)

const mockUser = {
	id: Number(process.env.MOCK_USER_ID ?? 1),
	upn: process.env.MOCK_UPN ?? "s0000000",
	name: process.env.MOCK_NAME ?? "Admin",
	displayName: process.env.MOCK_DISPLAY_NAME ?? "Admin",
	isBI: process.env.MOCK_IS_BI === "true",
}

function issueToken(): string {
	return sign({ user: mockUser }, SECRET!, { algorithm: "HS256", expiresIn: "8h" })
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

	if (req.method === "GET" && url.pathname === "/cookies") {
		const token = issueToken()
		res.writeHead(200, { "Content-Type": "application/json" })
		res.end(JSON.stringify({ ssoUser: token }))
		return
	}

	if (req.method === "GET" && url.pathname === "/auth/comeback") {
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
