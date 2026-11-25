import type { NextFunction, Request, Response } from "express"
import { errors } from "openid-client"

export class HttpError extends Error {
  constructor(readonly status: number, message: string) {
    super(message)
  }
}

export function errorHandler(error: unknown, _req: Request, res: Response, _next: NextFunction) {
  const status = (
    error instanceof HttpError ? error.status :
      error instanceof errors.OPError || error instanceof errors.RPError ? 400 :
        500
  )

  if (status >= 500) {
    console.error("SSO error: ", error)
  }

  if (!res.headersSent) {
    res.status(status).json({ message: error instanceof Error ? error.message : "Internal error" })
  }
}
