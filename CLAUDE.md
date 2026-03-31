# Role

Senior Backend Engineer: Task Management System Specialist.
**Expertise:** NestJS (Express adapter), TypeScript, PostgreSQL, Prisma.

---

# Stack

* **Runtime:** Node.js / NestJS (**ExpressJS** Adapter)
* **ORM:** Prisma & PostgreSQL
* **Validation:** `class-validator`, `class-transformer`

---

# Folder Structure

```text
.
├── .env.example            <-- Required environment variables (Update on new vars)
└── src/
    ├── common/             <-- Shared kernel
    │   ├── decorators/     <-- Custom decorators
    │   ├── dto/            <-- Generic DTOs (e.g., Pagination)
    │   ├── functions/      <-- Utility/Helper functions
    │   └── services/       <-- Shared services (e.g., PrismaService)
    └── entities/
        └── [kebab-case-entity-name]/    
            ├── [entity].prisma         
            ├── [entity].controller.ts
            ├── [entity].service.ts
            ├── [entity].module.ts
            └── dto/
                ├── request/        <-- Isolated Request DTOs
                └── response/       <-- Isolated Response DTOs

```

---

# Standards & Workflow

### 1. Communication & Accuracy (STRICT)

* **NO FABRICATION:** If something is unclear, **ask clarifying questions**.
* **ZERO MISTAKES:** Make no mistakes; clarify anything not understood.
* **NO TESTING:** Do not test things or verify builds; the user handles this manually.

### 2. Logic Separation & Async Pattern

* **Explicit Async/Await:** Every Controller/Service method must be `async`, explicitly return a `Promise<T>`, and `await` all async operations.
* **Clean Architecture:** Controllers handle HTTP only. **Services** handle 100% of business logic and Prisma calls.

### 3. DTO Isolation & Typing

* **NO INLINE DTOs:** DTOs must never be written in a controller or service. They reside in their respective `dto/` subfolders.
* **Standardized Types:** DTO classes must `implement` Prisma types.
* **Naming:** `[kebab-case].dto.ts`. **Do not** include "request" or "response" in the filename.

### 4. Naming & Prisma

* **Folders:** Always `kebab-case`.
* **Prisma Models:** `PascalCase` in code, `camelCase` fields.
* **DB Mapping:** Must use `@map` and `@@map` for **snake_case** in PostgreSQL.

### 5. Fast Resource Generation (CLI)

`nest g res entities/[kebab-case-name] --no-spec`

* Move/Rename DTOs to fit structure.
* Convert methods to explicit `async Promise<T>`.

### 6. Workflow (MANDATORY)

1. **INGEST**: Review provided files/schemas.
2. **PLAN**: List changes. Ensure DTO isolation and Service-layer logic.
3. **EXECUTE**: Output fully refactored, production-ready code.
4. **DOCUMENT**: Update `.env.example` and this `CLAUDE.md` if patterns evolve.

---

## Patterns

### Response DTOs

All response DTOs use `class-transformer` serialization:

* Class decorated with `@Exclude()`
* Every field on its own line with `@Expose()` on the line above it
* Blank line between every property
* Extend `MetaFieldsDto` (full soft-delete fields) or `PartialMetaFieldsDto` (no deletedAt/deletedBy) from `src/common/dto/`
* Entities with no meta-fields (WorkspaceStatus, User, junction tables) do not extend any base DTO

```typescript
@Exclude()
export class XxxDto extends MetaFieldsDto {
  @Expose()
  id: number;

  @Expose()
  name: string;
}
```

### Delete DTOs

Every entity has a `delete-[entity].dto.ts` in `dto/request/`.

* Soft-delete entities: `id` (with `@EntityExists`) + `deletedBy: number`
* Hard-delete entities: `id` (with `@EntityExists`) only
* Composite-PK entities: all PK fields

```typescript
export class DeleteXxxDto {
  @IsInt()
  @EntityExists('xxx')
  id: number;

  @IsInt()
  deletedBy: number;
}
```

### Prisma Multi-file Schema

Schema files live in two places:
* `prisma/schema/` — flat directory that Prisma reads (canonical Prisma source)
* `src/entities/[entity]/[entity].prisma` — co-located mirror for developer reference

When adding a new model, create it in both locations.

`prisma.config.ts` points to `prisma/schema/`. Generator output goes to `prisma/`.

### HTTP Test Files

Each entity folder contains a `[entity].http` file in httpYac format.

Structure per file:
* `# @import ../../../global.http`
* Requests separated by `###`
* `{{@response exports.createdId = response.parsedBody.id; }}` to chain ids across requests
* `?? status == 2xx` assertions after every request
* Covers: create (valid, captures id), create (invalid — 400), findAll, findOne, update, delete (non-existent — 400), delete
* Composite-PK entities export multiple ids and use compound path params (e.g. `GET /entity/:param1/:param2`)
* Append-only entities (task-history) omit PATCH/DELETE
