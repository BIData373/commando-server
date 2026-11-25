# SSO

Login goes through an OIDC provider (authorization code flow). Locally that's Keycloak from `docker-compose.yml`,
standing in for the real SSO server. Whatever the flow, the end result is an `ssoUser` token: an HS256 JWT signed
with `SSO_CLIENT_SECRET`, payload `{ user: { upn, name, displayName, isBI } }`, verified by `verifySsoToken`
(`src/common/functions/auth.ts`). `AuthMiddleware` reads it from the `ssoUser`
cookie, falling back to an `Authorization: Bearer <token>` header.

## Pieces

| Piece | Where | Role |
|---|---|---|
| Keycloak | `docker-compose.yml`, `keycloak/vector-realm.json` | OIDC provider, realm `vector`, client `commando-server` |
| SSO server | `scripts/mock-sso/` (`npm run mock:sso`) | Desktop flow: redirects to the provider, handles its callback (`/sso/callback`), sets cookies. Mobile: `GET /sso/mobile` stands in for the wrapper, `POST /sso/issue` exchanges the code |
| Backend | `src/entities/sso/` | Public `GET /sso/params` (under `SERVER_PREFIX`) |

### Env vars (`config/common.env`)

| Var | Meaning |
|---|---|
| `SSO_CLIENT_SECRET` | OIDC client secret **and** the `ssoUser` signing secret. Keycloak reads it at realm import |
| `SSO_CODE_ISSUER` | Issuer URL, e.g. `http://localhost:8180/realms/vector`. Empty = SSO server signs a static mock user |
| `SSO_CLIENT_ID` | OIDC client id |
| `SSO_REDIRECT_URI` | `redirect_uri` handed out by `/sso/params`: the frontend, which gets `?code&state&session_state&iss`. The desktop callback is the SSO server's own `/sso/callback` |
| `SSO_SITE` | `site` returned by `/sso/params` |

### Token claims

Set in the realm: user attributes mapped into claims nested under `user`
(dotted claim names nest in Keycloak). `upn` = username, `name` = first name, `displayName` and `isBI` are
admin-only user attributes. To add a claim: declare the attribute in the user profile and add a protocol mapper
on the client.

## Mobile

1. The user opens a wrapper app made by a 3rd party.
2. The wrapper calls our `GET /sso/params` → `{ site, client_id, redirect_uri, response_type: "code" }` and runs the
   OIDC flow itself.
3. The provider redirects to our callback URL with `session_state`, `code`, `iss`.
4. The frontend extracts those and `POST`s them to the SSO server's `/sso/issue`. It exchanges the code with
   `redirect_uri` = the request's `Origin` + `/` (no state/nonce/PKCE checks: the wrapper ran the flow) and returns
   `{ ssoUser }` as JSON, without setting cookies.
5. The frontend stores the returned `ssoUser` in `localStorage` and sends it as `Authorization: Bearer <ssoUser>`. Done.

## Desktop

1. The user enters and the frontend calls `GET /sso/cookies`. If the cookies are missing/invalid, it redirects to
   the `authorizationUrl` (built with openid-client).
2. The user goes through the SSO flow on the SSO server.
3. The SSO server's redirect back sets two cookies: `ssoUser` and `refreshToken`.

## Status

| Step | State |
|---|---|
| `GET /sso/params` (under `SERVER_PREFIX`) | Done (public, excluded from `AuthMiddleware`) |
| Mobile wrapper stand-in `GET /sso/mobile` (SSO server): fetches the backend's `/sso/params`, redirects to the provider, lands on the frontend | Done |
| `POST /sso/issue` (mobile, SSO server) | Done |
| Desktop `GET /sso/cookies` → redirect to `authorizationUrl` when invalid | Not yet: today it returns 401 and the redirect starts from `GET /sso/auth/comeback` |
| Desktop callback (`GET /sso/callback`): code exchange with state/nonce/PKCE checks, introspect, sets `ssoUser` | Done |
| Desktop callback sets `refreshToken` | Not built |

## Local setup

```sh
docker compose up -d keycloak     # admin console http://localhost:8180 (admin / admin)
npm run mock:sso                  # http://localhost:4000/sso
```

Set `VITE_USE_SSO=true` so the backend reads the `ssoUser` cookie. Test users: `s0000000` / `admin` (BI),
`s1111111` / `user`.

After changing `keycloak/vector-realm.json` or `SSO_CLIENT_SECRET`, run `docker compose up -d --force-recreate keycloak`.
An existing realm is never re-imported, and recreating wipes anything changed by hand in the admin console.
