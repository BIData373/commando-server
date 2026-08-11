# Role

Senior Backend Engineer: Task Management System Specialist.
**Expertise:** NestJS (Express adapter), TypeScript, PostgreSQL, Prisma.

---

# Stack

* **Runtime:** Node.js / NestJS 11 (**ExpressJS** adapter)
* **ORM:** Prisma 7 & PostgreSQL
* **Validation:** `class-validator`, `class-transformer`
* **Docs:** `@nestjs/swagger`
* **Misc:** `lodash`, `pino-nestjs`, socket.io, RabbitMQ (`@golevelup/nestjs-rabbitmq`), S3

---

# Folder Structure

```text
.
├── config/                 <-- Env files: common.env + <ENV>/.env (NOT .env.example)
├── prisma.config.ts        <-- schema = "src/entities/", migrations = "migrations/"
├── global.http             <-- Shared httpYac vars/headers
└── src/
    ├── common/             <-- Shared kernel
    │   ├── consts/         <-- env.ts (all env vars), headers.ts, admin.ts
    │   ├── decorators/     <-- Validation + serialization decorators
    │   ├── dto/
    │   │   ├── request/    <-- GetContextDto, GetIdDto, GetNameDto
    │   │   └── response/   <-- IdDto, PartialMetaFieldsDto, MetaFieldsDto, IdMetaFieldsDto
    │   ├── functions/      <-- Utility helpers
    │   ├── guards/         <-- BIGuard
    │   ├── interceptors/   <-- AddDtosToContext, AddUserToContext
    │   ├── interfaces/     <-- IContext
    │   ├── middleware/
    │   ├── types/          <-- Generic type helpers (Models, ExtractValue, ...)
    │   ├── prisma.module.ts
    │   └── prisma.service.ts
    ├── types/
    │   ├── prisma/         <-- GENERATED client — import Prisma types from here
    │   └── prisma-json.ts  <-- PrismaJson namespace registration for Json columns
    └── entities/
        ├── schema.prisma               <-- generators + datasource only
        └── [kebab-case-entity-name]/
            ├── [entity].prisma         <-- The model + its enums
            ├── [entity].controller.ts
            ├── [entity].service.ts
            ├── [entity].module.ts
            ├── [entity].http
            ├── consts/         <-- optional
            ├── functions/      <-- optional
            ├── interfaces/     <-- optional, I-prefixed context interfaces
            ├── types/          <-- optional
            └── dto/
                ├── request/
                └── response/
```

---

# Standards & Workflow

### 1. Communication & Accuracy (STRICT)

* **NO FABRICATION:** If something is unclear, **ask clarifying questions**.
* **ZERO MISTAKES:** Make no mistakes; clarify anything not understood.
* **NO TESTING:** Do not run the app or verify builds; the user handles this manually.
  Running `prisma generate` is allowed and expected after a schema change.

### 2. Logic Separation

* **Clean Architecture:** Controllers handle HTTP only. **Services** own all business logic and every Prisma call.
* **Async:** Controller and service methods are `async` and `await` their calls, including the final `return await this.prisma...`.
* **Return types are inferred.** Do *not* annotate `Promise<T>` by default — Prisma's inferred payload types carry the `include` shape and a hand-written annotation throws it away. Annotate only when the inferred type is genuinely wrong or unhelpful (see `SourceService.findInWorkspace`, `S3Service.upload`).

### 3. DTO Isolation & Typing

* **NO INLINE DTOs:** Never declare a DTO in a controller or service. They live in `dto/request/` or `dto/response/`.
* **Naming:** `[kebab-case].dto.ts`. **Never** put "request"/"response" in the filename — the folder says it.
* Import Prisma types/enums from `../../types/prisma`, never from `@prisma/client`.

### 4. Naming & Prisma

* **Folders/files:** always `kebab-case`. Suffixes: `.dto.ts`, `.type.ts`, `.interface.ts`, `.decorator.ts`, `.controller.ts`, `.service.ts`, `.module.ts`.
* **Interfaces:** `I`-prefixed (`IUserContext`, `IWorkspaceContext`).
* **Prisma models:** `PascalCase` model, `camelCase` fields.
* **DB mapping:** every multi-word field gets `@map`, every model gets `@@map`, both **snake_case**, table names plural.
* Meta fields on every entity, in this order and grouped under a `// Meta Fields` comment:
  `createdAt`, `createdBy`, `updatedAt`, `updatedBy`, and for soft-deletable entities `deletedAt`, `deletedBy`.

### 5. Fast Resource Generation (CLI)

`nest g res entities/[kebab-case-name] --no-spec`

Then: move DTOs into `dto/request` + `dto/response`, replace the generated placeholder bodies, and wire the module into `AppModule`.

### 6. Workflow (MANDATORY)

1. **INGEST**: Review provided files/schemas.
2. **PLAN**: List changes. Ensure DTO isolation and service-layer logic.
3. **EXECUTE**: Output fully refactored, production-ready code.
4. **DOCUMENT**: Add new env vars to `src/common/consts/env.ts` and `config/dev/.env.example`; update this file if patterns evolve.

---

# Formatting

* 2-space indent, single quotes, semicolons in controllers/services and `common/dto`.
* Some older DTO/interface files use 4-space indent and double quotes. Match the file being edited; use 2-space + single quotes for new files.
* `constructor(private readonly prisma: PrismaService) { }` — space inside the empty body. Same for `export class XModule { }`.
* Imports are sorted alphabetically by path (IDE organize-imports order).
* `// FIX <note>` marks known gaps to revisit. Keep existing ones; don't silently delete them.

---

# Patterns

### Context: validation decorators are also data loaders

This is the core project-specific idea. `@EntityExists` / `@IdExists` / `@IsIdPermitted` run a Prisma `findFirst` during validation. When given `contextField`, the found record is merged into the DTO's `context` object. So by the time a handler runs, the entity is **already loaded** — the controller returns `context.tag` directly instead of calling the service again.

* Request DTOs that need this extend `GetContextDto<T>`, where `T` is an intersection of `I*Context` interfaces.
* The global `ValidationPipe` (`whitelist`, `stopAtFirstError`, `transform`, `validateCustomDecorators`, `forbiddenExceptionFactory`) turns a missing entity into a **400** and a permission failure into **403**. There are no manual `NotFoundException` throws for these.
* `context` is validation-only and must be stripped before reaching Prisma: `async update(id: number, { context, ...dto }: UpdateXDto, updatedBy: number)`.

### Permitted-id DTO mixins

Id DTOs come from a factory taking a `PermissionType`, with concrete subclasses exported per level:

```typescript
export function GetPermittedTagIdDto(type: PermissionType) {
  class GetTagIdDto extends GetContextDto<IUserContext & ITagContext> {
    @ApiProperty()
    @IsIdPermitted('tag', type, {
      workspaceFindArgs: ({ value }) => ({ tags: { some: { id: value } } })
    })
    id: number
  }

  return GetTagIdDto
}

export class GetViewerTagIdDto extends GetPermittedTagIdDto(PermissionType.VIEWER) { }
export class GetManagerTagIdDto extends GetPermittedTagIdDto(PermissionType.MANAGER) { }
```

Use `GetViewer*` for reads and `GetManager*` for writes and deletes. The `GetWorkspaceIdFieldDto` variants do the same for a `workspaceId` query param.

### Request DTOs

* Compose by extending an existing DTO rather than repeating fields (`CreateTagDto extends GetManagerWorkspaceIdFieldDto`, `CreateWorkspaceRequestDto extends CreateWorkspaceDto`).
* `Update[Entity]Dto extends PartialType(Create[Entity]Dto)` from `@nestjs/mapped-types`.
* Uniqueness is enforced in validation, not the service: `@EntityExists('tag', { findArgs: ..., failIfExists: true })`.
* Prefer the custom validators where they exist: `@IsNotEmptyString()`, `@IsUrlName()`, `@IsPositiveInt()`, `@TransformToBoolean()`.
* There is **no** `delete-[entity].dto.ts` convention. Deletes reuse `Get[Manager][Entity]IdDto`. `DeletePermissionDto` exists only because permission has a composite key and deletes by query params.

### Response DTOs

* Class decorated with `@Exclude()`, one `@ExposeProperty()` per field on the line above it, blank line between properties.
* `@ExposeProperty()` (from `common/decorators/expose-property.decorator.ts`) applies `@ApiProperty()` and `@Expose()` together — use it, not a bare `@Expose()`. Pass options through for nullable/typed fields: `@ExposeProperty({ type: Date, nullable: true })`.
* Extend `MetaFieldsDto` (includes `deletedAt`/`deletedBy`), `PartialMetaFieldsDto` (no soft-delete fields), or `IdMetaFieldsDto` (`id` + full meta). Entities with no meta fields extend nothing.
* Controllers apply them with `@TransformPlainToInstance(XDto)`. Nothing outside a DTO's exposed fields reaches the client, so a field missing from the DTO is silently dropped from the response — a nested field is only serialized if the DTO exposes the object that holds it.

```typescript
@Exclude()
export class TagDto extends PartialMetaFieldsDto {
  @ExposeProperty()
  id: number;

  @ExposeProperty()
  name: string;
}
```

### Controllers

Decorator order on each handler: `@ApiOperation` → `@ApiBody`/`@ApiParam`/`@ApiQuery` → `@UseInterceptors` (if any) → HTTP verb → `@ApiOkResponse`/`@ApiCreatedResponse` → `@TransformPlainToInstance`.

* `operationId` is camelCase and verb-first: `createTag`, `listTags`, `getTag`, `updateTag`, `deleteTag`.
* Method names: `create`, `findAll` / `findInWorkspace`, `findOne`, `update`, `remove`.
* Always destructure in the parameter list: `@Req() { user }: Request`, `@Param() { id }: GetManagerTagIdDto`, `@Body() { context, ...dto }: UpdateTagDto`.
* The current user comes from `@Req() { user }: Request` (populated by `AddUserToContextInterceptor`) and is passed to the service as `user.id`. Never take a `userId` from the body.
* `@UseGuards(BIGuard)` restricts an endpoint to BI users.
* `@UseInterceptors(AddDtosToContext({ from: 'params', to: 'body', dto, field }))` runs a param DTO's validation/loading before body validation, for when the body's validators depend on the loaded entity.

### Services

* `create(dto, userId)` sets `createdBy: userId, updatedBy: userId`.
* `update(id, dto, updatedBy)` spreads `{ ...dto, updatedBy }`.
* `remove(id, deletedBy)` soft-deletes with `data: { deletedAt: new Date(), deletedBy }` when the model has those columns; a hard `prisma.x.delete` otherwise.
* Reads on soft-deletable models filter `deletedAt: null`.
* Shared query fragments are `static readonly` members or static methods on the service, written with `satisfies Prisma.XInclude` / `Prisma.XWhereInput` so the literal type survives:

```typescript
static readonly orderBy = { createdAt: 'desc' } satisfies Prisma.TaskOrderByWithRelationInput;

static baseInclude() {
  return { tags: true, source: { where: { deletedAt: null } } } satisfies Prisma.TaskInclude
}
```

* Pure reshaping helpers are `static` on the service (`TaskService.formatAssigneeStatus`); anything needing `this.prisma` is an instance method, `private` when internal.

### Modules

```typescript
@Module({
  imports: [PermissionModule],
  controllers: [TagController],
  providers: [TagService],
  exports: [TagService]
})
export class TagModule { }
```

Always export the service. Register the module in `AppModule`'s `imports`.

### Prisma schema

* `prisma.config.ts` sets `schema: "src/entities/"` — Prisma reads the whole folder. Each model lives in exactly **one** place: `src/entities/[entity]/[entity].prisma`. There is no second copy.
* `src/entities/schema.prisma` holds only the generators and datasource. Client output goes to `src/types/prisma/`.
* Enums live in the same file as the model that owns them, with `@@map` to a snake_case type name.
* Migrations go to `migrations/`. Use the `migration:*` / `db:*` npm scripts, which pass `ENV` through `cross-env-shell`.

### Typed Json columns

`prisma-json-types-generator` types Json columns from a doc comment. To add one:

1. Write the type in `src/entities/[entity]/types/[name].type.ts`.
2. Re-export it from the `PrismaJson` namespace in `src/types/prisma-json.ts`.
3. Annotate the column with `///[TypeName]` directly above it in the `.prisma` file.
4. Run `npx prisma generate` — the field is then typed end-to-end, with no casts.

### Env vars

* Values live in `config/common.env` and `config/<ENV>/.env`, loaded by `src/common/consts/env.ts` (which calls `dotenv.config` at import time).
* **Never read `process.env` outside `src/common/consts/env.ts`.** Add a named export there and import it.
* Booleans are normalized at the const (`=== 'true'`), so consumers get real booleans.
* Document new vars in `config/dev/.env.example`.

### HTTP Test Files

Each entity folder has a `[entity].http` in httpYac format:

* `# @import ../../../global.http` at the top; requests separated by `###` with a `### Verb Entity — description` title.
* `...headers` after the request line to pull in the shared headers.
* `{{@response exports.tagId = response.parsedBody.id; }}` to chain ids between requests.
* A `?? status == 201` / `== 200` / `== 400` assertion after every request.
* Cover: create (valid, captures id), create (invalid → 400), list, get by id, update, delete non-existent (→ 400), delete.
* Composite-PK entities export multiple ids; append-only entities (task-history) omit PATCH/DELETE.
