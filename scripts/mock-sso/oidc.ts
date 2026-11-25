import { sign, verify } from "jsonwebtoken"
import { generators, Issuer, type CallbackParamsType, type Client, type TokenSet } from "openid-client"
import {
  ssoClientId,
  ssoClientSecret,
  ssoCodeIssuer
} from "../../src/common/consts/env"
import type { UserInfo } from "../../src/entities/user/types/user-info.type"
import { AUTH_AUDIENCE, AUTH_TTL_SECONDS, CALLBACK_URI } from "./consts"
import { HttpError } from "./errors"
import { issueToken } from "./token"

export type AuthTransaction = {
  nonce: string
  state: string
  codeVerifier: string
  redirectUri: string
  comeback?: string
}

let clientPromise: Promise<Client> | undefined

// Discovery is retried on the next request if the provider wasn't reachable
export function getClient(): Promise<Client> {
  clientPromise ??= Issuer.discover(ssoCodeIssuer!)
    .then(issuer => new issuer.Client({
      client_id: ssoClientId!,
      client_secret: ssoClientSecret!,
      redirect_uris: [CALLBACK_URI],
      response_types: ["code"],
    }))
    .catch((error: Error) => {
      clientPromise = undefined
      throw new HttpError(503, `OIDC discovery failed for ${ssoCodeIssuer}: ${error.message}`)
    })

  return clientPromise
}

export async function createAuthorization(redirectUri: string, comeback?: string) {
  const client = await getClient()

  const transaction: AuthTransaction = {
    nonce: generators.nonce(),
    state: generators.state(),
    codeVerifier: generators.codeVerifier(),
    redirectUri,
    comeback,
  }

  const authorizationUrl = client.authorizationUrl({
    scope: "openid",
    response_type: "code",
    redirect_uri: redirectUri,
    nonce: transaction.nonce,
    state: transaction.state,
    code_challenge: generators.codeChallenge(transaction.codeVerifier),
    code_challenge_method: "S256",
  })

  const signedTransaction = sign(transaction, ssoClientSecret!, {
    algorithm: "HS256",
    audience: AUTH_AUDIENCE,
    expiresIn: AUTH_TTL_SECONDS,
  })

  return { authorizationUrl, transaction: signedTransaction }
}

export function verifyTransaction(signedTransaction: string | undefined): AuthTransaction {
  if (!signedTransaction) {
    throw new HttpError(400, "Missing auth transaction — start the login again")
  }

  try {
    return verify(signedTransaction, ssoClientSecret!, {
      algorithms: ["HS256"],
      audience: AUTH_AUDIENCE,
    }) as AuthTransaction
  }

  catch {
    throw new HttpError(400, "Invalid or expired auth transaction — start the login again")
  }
}

// Exchanges the code (checking state, nonce, PKCE and iss), then introspects the access token
// and signs its `user` claim into the ssoUser token.
export async function exchangeCode(params: CallbackParamsType, transaction: AuthTransaction) {
  const client = await getClient()

  const tokenSet = await client.callback(transaction.redirectUri, params, {
    response_type: "code",
    nonce: transaction.nonce,
    state: transaction.state,
    code_verifier: transaction.codeVerifier,
  })

  return introspectToken(client, tokenSet)
}

// Mobile: the wrapper ran the flow, so there's no transaction to check state/nonce/PKCE against.
// redirectUri must match the one the wrapper sent to the provider.
export async function exchangeMobileCode(params: CallbackParamsType, redirectUri: string) {
  const client = await getClient()

  const tokenSet = await client.callback(redirectUri, params, {
    response_type: "code",
    state: params.state,
  })

  return introspectToken(client, tokenSet)
}

async function introspectToken(client: Client, tokenSet: TokenSet) {
  const introspection = await client.introspect(tokenSet.access_token!)

  if (!introspection.active || !introspection.user) {
    throw new HttpError(401, "Access token is not active")
  }

  return issueToken(introspection.user as UserInfo)
}
