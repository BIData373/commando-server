# Commando Server

Backend for the Vector task management system. NestJS 11 (Express) + Prisma 7 + PostgreSQL, with socket.io
(optional Redis adapter), RabbitMQ for the AI task runner, and S3 for attachments.

Coding conventions and architecture patterns live in [`CLAUDE.md`](CLAUDE.md). Login/SSO is in
[`SSO.md`](SSO.md). The DB diagram is in [`ERD.md`](ERD.md).

## Prerequisites

- Node.js 22
- Docker & Docker Compose (for local Postgres, Redis, Keycloak)

## Quick start (local)

1. **Install dependencies** (`postinstall` runs `prisma generate`):
   ```bash
   npm install
   ```

2. **Start the infrastructure:**
   ```bash
   docker compose up -d postgres redis      # add `keycloak` if you want real SSO (see SSO.md)
   ```
   Postgres listens on `localhost:5433` (`admin` / `matzpen-123-mefaked-456`, db `matzpen_mefaked`).

3. **Create the env files.** Config is loaded from `config/common.env` plus `config/<ENV>/.env`, where `<ENV>` is
   the `--env` flag you pass to npm. Real `*.env` files are git-ignored:
   ```bash
   cp config/common.env.example config/common.env
   cp config/local/.env.example config/local/.env   # matches the docker-compose Postgres
   ```
   `config/dev/.env.example` is the template for a shared dev environment (remote DB, S3, SSL certs).

4. **Apply migrations and seed:**
   ```bash
   npm run migration:deploy --env=local
   npm run db:seed --env=local
   ```

5. **Run the server** (watch mode):
   ```bash
   npm start --env=local
   ```
   Listens on `http://localhost:3000` (`PORT`), with all routes under `SERVER_PREFIX` (`/api` by default).

> The `--env=<name>` flag is required by every script that touches config. Without it only `config/common.env` is
> loaded and `DATABASE_URL` will be missing.

## Swagger

Set `SWAGGER_ENABLED=true`. The UI is served at `/open-api` and the JSON at `/open-api/json`. Both are excluded from
auth.

## Authentication

`/open-api` and `GET /sso/params` are public; everything else goes through `AuthMiddleware`.

- `VITE_USE_SSO=true`: reads the `ssoUser` JWT from the `ssoUser` cookie or an `Authorization: Bearer` header.
  For local login, run Keycloak and the mock SSO server — see [`SSO.md`](SSO.md).
- `VITE_USE_SSO=false` (default locally): no login needed; requests run as the default admin user. Override the
  user/BI flag with the request headers defined in `src/common/consts/headers.ts`.
- With SSO on, a request carrying a `static-token` header equal to `STATIC_TOKEN` also bypasses SSO (same
  header overrides apply).

## Scripts

| Script | What it does |
|---|---|
| `npm start --env=<env>` | Nest dev server, watch mode |
| `npm run start:debug --env=<env>` | Same, with the debugger |
| `npm run build` | Compile to `dist/` |
| `npm run start:dist` | Run the compiled build (`node dist/main.js`) |
| `npm run build:webpack` | Webpack bundle |
| `npm run prisma:client:generate --env=<env>` | Regenerate the client into `src/types/prisma/` |
| `npm run prisma:format` / `prisma:studio` / `prisma:repl` | Format schema / DB browser / REPL |
| `npm run migration:generate --env=<env>` | Create a migration (`--create-only`, review before applying) |
| `npm run migration:deploy --env=<env>` | Apply pending migrations |
| `npm run migration:status` / `migration:reset` | Inspect / wipe and reapply migrations |
| `npm run db:push --env=<env>` | Push the schema without a migration (throwaway DBs only) |
| `npm run db:seed --env=<env>` | Seed the DB. Add `-- --overload` (optionally `--tasks=N --assignees=N`) to generate bulk data for perf testing |
| `npm run mock:sso --env=<env>` | Local SSO server on `http://localhost:4000/sso` |
| `npm run mermaid` | Regenerate the ERD from the Prisma schema |

There is no automated test suite (`npm test` is a placeholder). Endpoints are exercised manually with the httpYac
`.http` files next to each entity (`src/entities/*/*.http`), which import the shared `global.http`.

## Project structure

```text
.
├── config/                 # common.env + <ENV>/.env (see *.example)
├── keycloak/               # Dev OIDC realm import
├── migrations/             # Prisma migrations
├── prisma/seed.ts          # DB seed
├── prisma.config.ts        # schema = src/entities/, migrations = migrations/
├── scripts/mock-sso/       # Local SSO server
├── tools/                  # ERD generator
├── global.http             # Shared httpYac vars/headers
└── src/
    ├── main.ts             # Bootstrap: prefix, Swagger, cookies, Redis socket adapter
    ├── app.module.ts       # Root module, validation pipe, auth middleware
    ├── common/             # Shared kernel: env consts, decorators, guards, DTOs, Prisma service
    ├── entities/           # One folder per domain entity (.prisma, controller, service, module, dto/, .http)
    ├── socket/             # socket.io gateway + Redis adapter
    ├── task-runner/        # RabbitMQ publisher/consumer for AI task extraction
    └── types/prisma/       # GENERATED Prisma client (git-ignored)
```

Entities: task, task-history, source, tag, assignee, assignee-group, assignee-task-status, workspace,
workspace-status, workspace-requests, permission, user, user-views, user-viewed-tasks, user-workspace-visits, message,
pikud, s3, sso, services, and the archived assignee-task tables.

## Configuration

All variables are read in `src/common/consts/env.ts` (nowhere else) and documented in the `.env.example` files.

| Group | Variables |
|---|---|
| Server | `NODE_ENV`, `ENVIRONMENT`, `SERVER_PREFIX`, `PORT`, `SWAGGER_ENABLED`, `STATIC_TOKEN` |
| Database | `DATABASE_URL`, `POSTGRES_PRISMA_URL`, `DB_USE_SSL`, `DB_SSLCERT_*`, `DB_SSLKEY_*` |
| SSO | `VITE_USE_SSO`, `SSO_CLIENT_ID`, `SSO_CLIENT_SECRET`, `SSO_CODE_ISSUER`, `SSO_REDIRECT_URI`, `SSO_SITE` |
| S3 | `S3_REGION`, `S3_ACCESS_KEY_ID`, `S3_SECRET_ACCESS_KEY`, `S3_BUCKET_NAME`, `S3_ENDPOINT_URL`, `S3_PUBLIC_URL`, `S3_REJECT_UNAUTHORIZED` |
| Redis (socket.io) | `USE_REDIS`, `REDIS_HOST`, `REDIS_PORT`, `REDIS_USERNAME`, `REDIS_PASSWORD`, `REDIS_SOCKET_PREFIX` |
| RabbitMQ / task runner | `TASK_RUNNER_ENABLED`, `RABBITMQ_*` |
| Mirage | `MIRAGE_ENABLED`, `MIRAGE_URL`, `MIRAGE_KEY`, `MIRAGE_VERSION` |
| Notifications | `MESSAGE_RELAY_*`, `NOTIFICATION_TEMPLATE`, `DISCUSSION_NOTIFICATION_TEMPLATE`, `VECTOR_URL`, `VITE_CHAT_*`, `BI_RED_PHONE`, `SEND_FORBIDDEN_MESSAGES` |
| Misc | `TASK_INVALIDATION_DAYS` (default 30) |

## Database workflow

Each model lives in `src/entities/<entity>/<entity>.prisma`; `src/entities/schema.prisma` holds only the
generator and datasource. After a schema change:

```bash
npm run migration:generate --env=<env>   # create the migration
npm run migration:deploy --env=<env>     # apply it
npm run prisma:client:generate --env=<env>
```

## Docker

- `Dockerfile` — multi-stage Node 22 build; `CMD node dist/main.js`, exposes 3000. Pass config via `--env-file`.
- `docker-compose.yml` — local dev dependencies only (Postgres, Redis, Keycloak), not the app itself.
- `vercel.json` — Vercel config entry pointing at `src/main.ts`.

## Deployment (`run.sh`)

`run.sh` packages the server into a source archive, `server.tar.gz`, for deployment.

```bash
./run.sh        # writes ./server.tar.gz into the current directory
```

Requires Docker and SSH access to `git@github.com:BIData373/commando-server.git`.

What it does:
1. Clones the **`dev` branch** (shallow) into a temp dir. It packages what is on `dev`, not your working tree, so push
   first.
2. Builds `zip.dockerfile` (`ubi9/nodejs-22`, `linux/amd64`): copies the repo and runs `npm install`, which also runs
   `prisma generate`.
3. Tars the result into `server.tar.gz` inside the container and `docker cp`s it to your current directory.
4. Removes the temp container, image and clone, even on failure.

Notes:
- The archive unpacks under `tmp/archive/` and includes `node_modules`. It is **not built** (no `dist/`), so run
  `npm run build` (or `build:webpack`) on the target.
- Env files are git-ignored, so none are included. Provide `config/common.env` and `config/<env>/.env` on the target
  and run migrations there (`npm run migration:deploy --env=<env>`).

## Troubleshooting

- **`DATABASE_URL` missing / Prisma can't connect**: you forgot `--env=<name>` or `config/<name>/.env` doesn't exist.
- **`Cannot find module '../../types/prisma'`**: run `npm run prisma:client:generate --env=<env>`.
- **Port 5433 in use**: another Postgres is running; stop it or change the mapping in `docker-compose.yml`.
- **Keycloak realm changes not applied**: recreate the container (see `SSO.md`).

## License

ISC
