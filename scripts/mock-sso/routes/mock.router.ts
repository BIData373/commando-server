import { Router } from "express"
import { DEFAULT_COMEBACK } from "../consts"
import { issueToken, mockUser } from "../token"

// No provider: every request is the static mock user
export const mockRouter = Router()

mockRouter.get("/cookies", (_req, res) => {
  res.json({ ssoUser: issueToken(mockUser) })
})

mockRouter.post("/issue", (_req, res) => {
  res.json({ ssoUser: issueToken(mockUser) })
})

mockRouter.get("/auth/comeback", (req, res) => {
  const comeback = typeof req.query.comeback === "string" ? req.query.comeback : DEFAULT_COMEBACK
  res.redirect(comeback)
})
