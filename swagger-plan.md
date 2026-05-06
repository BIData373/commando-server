# Swagger Decorators — Implementation Plan

## Context
The project has 13 controllers and their DTOs with no Swagger decorators except `pikud` (partial) and `tag` (complete — used as the reference).
`SwaggerModule` is configured with `autoTagControllers: true`, so `@ApiTags` is **not needed**.

---

## Decorator Conventions

### Response DTOs — `@ExposeProperty`
Replace every `@Expose()` with the custom `@ExposeProperty()` from  
`src/common/decorators/expose-property.decorator.ts`  
It combines `@ApiProperty(options)` + `@Expose(options)` in one decorator.

```ts
// before
@Expose()
name: string;

// after
@ExposeProperty()
name: string;

// with options
@ExposeProperty({ nullable: true })
deletedAt: Date | null;

@ExposeProperty({ enum: PermissionType })
type: PermissionType;

@ExposeProperty({ type: () => UserInfoDto })
info: UserInfoDto | null;
```

### Request DTOs — `@ApiProperty`
Create/update DTOs use `@ApiProperty()` directly (no `@Expose` on request DTOs).
```ts
@ApiProperty()
name: string;

@ApiProperty({ required: false })
icon?: string;

@ApiProperty({ enum: HistoryAction })
action: HistoryAction;
```

### Update DTOs — `PartialType` import
Change `import { PartialType } from '@nestjs/mapped-types'`  
→ `import { PartialType } from '@nestjs/swagger'`  
Swagger's `PartialType` inherits `@ApiProperty` and marks all fields optional automatically.

### Controllers — decorator order (from tag controller reference)
```ts
@ApiOperation({ operationId: '...' })
@ApiBody({ type: CreateXxxDto })        // POST / PATCH only
@ApiQuery({ type: QueryDto })           // GET with query params
@ApiParam({ name: 'id', type: Number }) // routes with :param
@Post() / @Get() / @Patch() / @Delete()
@ApiCreatedResponse({ type: XxxDto })   // POST
@ApiOkResponse({ type: XxxDto })        // GET / PATCH / DELETE (even for lists)
@TransformPlainToInstance(XxxDto)
```

Key rules:
- `@ApiQuery` takes `{ type: WholeDtoClass }`, not `{ name, type: Number }`
- All responses (including lists) use `@ApiOkResponse({ type: XxxDto })` — no array wrapper
- `@ApiOperation` is always first; HTTP verb decorator is in the middle; response decorator follows it

---

## Files to Modify

### 1 — Common base response DTOs
Replace `@Expose()` → `@ExposeProperty()` (add import, remove old `@Expose` import where unused).

| File | Fields |
|---|---|
| `src/common/dto/response/partial-meta-fields.dto.ts` | `createdAt`, `createdBy`, `updatedAt`, `updatedBy` |
| `src/common/dto/response/meta-fields.dto.ts` | `deletedAt`, `deletedBy` — `{ nullable: true }` |
| `src/common/dto/response/id-meta-fields.dto.ts` | `id` |
| `src/common/dto/response/id.dto.ts` | `id` |

### 2 — Entity response DTOs
Replace `@Expose()` → `@ExposeProperty()` on entity-specific fields. Base fields are covered by §1.

| File | Fields & options |
|---|---|
| `assignee/dto/response/assignee.dto.ts` | `name`, `color`, `icon` `{ nullable:true }`, `workspaceId` |
| `assignee-task-status/dto/response/assignee-task-status.dto.ts` | `taskId`, `assigneeId`, `statusId` |
| `assignee-user/dto/response/assignee-user.dto.ts` | `assigneeId`, `userId` |
| `message/dto/response/message.dto.ts` | `content`, `assigneeId`, `taskId` |
| `permission/dto/response/permission.dto.ts` | `userId`, `workspaceId`, `type` `{ enum: PermissionType }` |
| `pikud/dto/response/pikud.dto.ts` | Replace `@ApiProperty()` + `@Expose()` pairs → `@ExposeProperty()` |
| `source/dto/response/source.dto.ts` | `name`, `workspaceId` |
| `tag/dto/response/tag.dto.ts` | **Already uses `@ExposeProperty()` — no change** |
| `task/dto/response/task.dto.ts` | `title`, `description` `{ nullable:true }`, `flagged`, `deadlineType`, `issuedAt`, `dueDate`, `notes` `{ nullable:true }`, `workspaceId`, `sourceId` |
| `task-history/dto/response/task-history.dto.ts` | `action` `{ enum: HistoryAction }`, `field`, `value` `{ nullable:true }`, `timestamp`, `taskId`, `workspaceId`, `userId` |
| `user/dto/response/user.dto.ts` | `upn`, `info` `{ nullable:true, type: () => UserInfoDto }` |
| `user/dto/response/user-info.dto.ts` | `id`, `upn`, `name`, `displayName`, `isBI` |
| `workspace/dto/response/workspace.dto.ts` | `title`, `urlName`, `icon` `{ nullable:true }`, `assigneeStatusEditable`, `pikudId` |
| `workspace-status/dto/response/workspace-status.dto.ts` | `name`, `color`, `statusType`, `workspaceId` |

### 3 — Shared request base DTOs
| File | Field | Decorator |
|---|---|---|
| `src/common/dto/request/get-name.dto.ts` | `name` | `@ApiProperty()` |
| `src/entities/workspace/dto/request/get-workspace-id-field.dto.ts` | `workspaceId` in `GetWorkspaceIdFieldDto` and inside `GetPermittedWorkspaceIdFieldDto` factory | `@ApiProperty()` |

### 4 — Create request DTOs (entity-specific fields only)
| File | Fields |
|---|---|
| `assignee/dto/request/create-assignee.dto.ts` | `name`, `color`, `icon` `{ required:false }` |
| `assignee-task-status/dto/request/create-assignee-task-status.dto.ts` | `taskId`, `assigneeId`, `statusId` |
| `assignee-user/dto/request/create-assignee-user.dto.ts` | `assigneeId`, `userId` |
| `message/dto/request/create-message.dto.ts` | `taskId`, `assigneeId` |
| `message/dto/request/get-content.dto.ts` | `content` |
| `permission/dto/request/update-permission.dto.ts` | `upn`, `type` `{ enum: PermissionType }`, `workspaceId` |
| `source/dto/request/create-source.dto.ts` | `name` |
| `tag/dto/request/create-tag.dto.ts` | `name` |
| `task/dto/request/create-task.dto.ts` | `sourceId`, `title`, `description` `{ required:false }`, `flagged` `{ required:false }`, `deadlineType`, `issuedAt` `{ required:false }`, `dueDate`, `notes` `{ required:false }`, `workspaceId` |
| `task-history/dto/request/create-task-history.dto.ts` | `action` `{ enum: HistoryAction }`, `field`, `value` `{ required:false }`, `taskId`, `workspaceId`, `userId` |
| `user/dto/request/create-user.dto.ts` | `upn`, `info` `{ required:false }` |
| `workspace/dto/request/create-workspace.dto.ts` | `title`, `urlName`, `icon` `{ required:false }`, `assigneeStatusEditable` `{ required:false }`, `pikudId` |
| `workspace-status/dto/request/create-workspace-status.dto.ts` | `name`, `color`, `statusType`, `workspaceId` |

### 5 — Update DTOs (PartialType import swap only)
| File |
|---|
| `assignee/dto/request/update-assignee.dto.ts` |
| `message/dto/request/update-message.dto.ts` |
| `pikud/dto/request/update-pikud.dto.ts` |
| `source/dto/request/update-source.dto.ts` |
| `tag/dto/request/update-tag.dto.ts` |
| `task/dto/request/update-task.dto.ts` |
| `user/dto/request/update-user.dto.ts` |
| `workspace/dto/request/update-workspace.dto.ts` |
| `workspace-status/dto/request/update-workspace-status.dto.ts` |

### 6 — Controllers
Apply the tag controller decorator order to all controllers. `tag.controller.ts` is already complete — no change needed.

#### `assignee.controller.ts`
| Method | Decorators |
|---|---|
| `create` | `@ApiOperation({ operationId: 'createAssignee' })`, `@ApiBody({ type: CreateAssigneeDto })`, `@Post()`, `@ApiCreatedResponse({ type: AssigneeDto })` |
| `findInWorkspace` | `@ApiOperation({ operationId: 'listAssignees' })`, `@ApiQuery({ type: GetViewerWorkspaceIdFieldDto })`, `@Get()`, `@ApiOkResponse({ type: AssigneeDto })` |
| `findOne` | `@ApiOperation({ operationId: 'getAssignee' })`, `@ApiParam({ name: 'id', type: Number })`, `@Get(':id')`, `@ApiOkResponse({ type: AssigneeDto })` |
| `update` | `@ApiOperation({ operationId: 'updateAssignee' })`, `@ApiParam({ name: 'id', type: Number })`, `@ApiBody({ type: UpdateAssigneeDto })`, `@Patch(':id')`, `@ApiOkResponse({ type: AssigneeDto })` |
| `remove` | `@ApiOperation({ operationId: 'deleteAssignee' })`, `@ApiParam({ name: 'id', type: Number })`, `@Delete(':id')`, `@ApiOkResponse({ type: AssigneeDto })` |

#### `assignee-task-status.controller.ts`
| Method | Decorators |
|---|---|
| `findInTask` | `@ApiOperation({ operationId: 'listAssigneeTaskStatuses' })`, `@ApiQuery({ type: GetViewerTaskIdFieldDto })`, `@Get(':taskId')` → check actual route, `@ApiOkResponse({ type: AssigneeTaskStatusDto })` |
| `upsert` | `@ApiOperation({ operationId: 'upsertAssigneeTaskStatus' })`, `@ApiBody({ type: UpdateAssigneeTaskStatusDto })`, `@Put()`, `@ApiOkResponse({ type: AssigneeTaskStatusDto })` |
| `remove` | `@ApiOperation({ operationId: 'deleteAssigneeTaskStatus' })`, `@ApiParam({ name: 'taskId', type: Number })`, `@ApiParam({ name: 'assigneeId', type: Number })`, `@Delete(':taskId/:assigneeId')`, `@ApiOkResponse({ type: AssigneeTaskStatusDto })` |

#### `assignee-user.controller.ts`
| Method | Decorators |
|---|---|
| `create` | `@ApiOperation({ operationId: 'createAssigneeUser' })`, `@ApiBody({ type: CreateAssigneeUserDto })`, `@Post()`, `@ApiCreatedResponse({ type: AssigneeUserDto })` |
| `findAll` | `@ApiOperation({ operationId: 'listAssigneeUsers' })`, `@Get()`, `@ApiOkResponse({ type: AssigneeUserDto })` |
| `findOne` | `@ApiOperation({ operationId: 'getAssigneeUser' })`, `@ApiParam({ name: 'assigneeId', type: Number })`, `@ApiParam({ name: 'userId', type: Number })`, `@Get(':assigneeId/:userId')`, `@ApiOkResponse({ type: AssigneeUserDto })` |
| `remove` | `@ApiOperation({ operationId: 'deleteAssigneeUser' })`, `@ApiParam({ name: 'assigneeId', type: Number })`, `@ApiParam({ name: 'userId', type: Number })`, `@Delete(':assigneeId/:userId')`, `@ApiOkResponse({ type: AssigneeUserDto })` |

#### `message.controller.ts`
| Method | Decorators |
|---|---|
| `create` | `@ApiOperation({ operationId: 'createMessage' })`, `@ApiBody({ type: CreateMessageDto })`, `@Post()`, `@ApiCreatedResponse({ type: MessageDto })` |
| `findInTask` | `@ApiOperation({ operationId: 'listMessages' })`, `@ApiQuery({ type: GetViewerTaskIdFieldDto })`, `@Get()`, `@ApiOkResponse({ type: MessageDto })` |
| `findOne` | `@ApiOperation({ operationId: 'getMessage' })`, `@ApiParam({ name: 'id', type: Number })`, `@Get(':id')`, `@ApiOkResponse({ type: MessageDto })` |
| `update` | `@ApiOperation({ operationId: 'updateMessage' })`, `@ApiParam({ name: 'id', type: Number })`, `@ApiBody({ type: UpdateMessageDto })`, `@Patch(':id')`, `@ApiOkResponse({ type: MessageDto })` |
| `remove` | `@ApiOperation({ operationId: 'deleteMessage' })`, `@ApiParam({ name: 'id', type: Number })`, `@Delete(':id')`, `@ApiOkResponse({ type: MessageDto })` |

#### `permission.controller.ts`
| Method | Decorators |
|---|---|
| `findInWorkspace` | `@ApiOperation({ operationId: 'listPermissions' })`, `@ApiQuery({ type: GetViewerWorkspaceIdFieldDto })`, `@Get()`, `@ApiOkResponse({ type: PermissionDto })` |
| `findOne` | `@ApiOperation({ operationId: 'getMyPermission' })`, `@ApiQuery({ type: GetWorkspaceIdFieldDto })`, `@Get('me')`, `@ApiOkResponse({ type: PermissionDto })` |
| `update` | `@ApiOperation({ operationId: 'updatePermission' })`, `@ApiBody({ type: UpdatePermissionDto })`, `@Patch()`, `@ApiOkResponse({ type: PermissionDto })` |
| `remove` | `@ApiOperation({ operationId: 'deletePermission' })`, `@ApiQuery({ type: DeletePermissionDto })`, `@Delete()`, `@ApiOkResponse({ type: PermissionDto })` |

#### `pikud.controller.ts` — fix existing decorators
- Remove `@ApiBody({ type: [CreatePikudDto] })` from `findAll` (GET cannot have a body)
- Add `@ApiOkResponse({ type: PikudDto })` to `findAll`, `findOne`, `update`, `remove`
- Reorder decorators on all methods to match the tag controller order
- Add missing `@ApiBody({ type: UpdatePikudDto })` to `update`

#### `source.controller.ts`
| Method | Decorators |
|---|---|
| `create` | `@ApiOperation({ operationId: 'createSource' })`, `@ApiBody({ type: CreateSourceDto })`, `@Post()`, `@ApiCreatedResponse({ type: SourceDto })` |
| `findAll` | `@ApiOperation({ operationId: 'listSources' })`, `@ApiQuery({ type: GetViewerWorkspaceIdFieldDto })`, `@Get()`, `@ApiOkResponse({ type: SourceDto })` |
| `findOne` | `@ApiOperation({ operationId: 'getSource' })`, `@ApiParam({ name: 'id', type: Number })`, `@Get(':id')`, `@ApiOkResponse({ type: SourceDto })` |
| `update` | `@ApiOperation({ operationId: 'updateSource' })`, `@ApiParam({ name: 'id', type: Number })`, `@ApiBody({ type: UpdateSourceDto })`, `@Patch(':id')`, `@ApiOkResponse({ type: SourceDto })` |
| `remove` | `@ApiOperation({ operationId: 'deleteSource' })`, `@ApiParam({ name: 'id', type: Number })`, `@Delete(':id')`, `@ApiOkResponse({ type: SourceDto })` |

#### `task.controller.ts`
| Method | Decorators |
|---|---|
| `create` | `@ApiOperation({ operationId: 'createTask' })`, `@ApiBody({ type: CreateTaskDto })`, `@Post()`, `@ApiCreatedResponse({ type: TaskDto })` |
| `findInWorkspace` | `@ApiOperation({ operationId: 'listTasks' })`, `@ApiQuery({ type: GetViewerWorkspaceIdFieldDto })`, `@Get()`, `@ApiOkResponse({ type: TaskDto })` |
| `findOne` | `@ApiOperation({ operationId: 'getTask' })`, `@ApiParam({ name: 'id', type: Number })`, `@Get(':id')`, `@ApiOkResponse({ type: TaskDto })` |
| `update` | `@ApiOperation({ operationId: 'updateTask' })`, `@ApiParam({ name: 'id', type: Number })`, `@ApiBody({ type: UpdateTaskDto })`, `@Patch(':id')`, `@ApiOkResponse({ type: TaskDto })` |
| `remove` | `@ApiOperation({ operationId: 'deleteTask' })`, `@ApiParam({ name: 'id', type: Number })`, `@Delete(':id')`, `@ApiOkResponse({ type: TaskDto })` |

#### `task-history.controller.ts`
| Method | Decorators |
|---|---|
| `findInTask` | `@ApiOperation({ operationId: 'listTaskHistory' })`, `@ApiQuery({ type: GetViewerTaskIdFieldDto })`, `@Get()`, `@ApiOkResponse({ type: TaskHistoryDto })` |

#### `user.controller.ts`
| Method | Decorators |
|---|---|
| `create` | `@ApiOperation({ operationId: 'createUser' })`, `@ApiBody({ type: CreateUserDto })`, `@Post()`, `@ApiCreatedResponse({ type: UserDto })` |
| `findAll` | `@ApiOperation({ operationId: 'listUsers' })`, `@Get()`, `@ApiOkResponse({ type: UserDto })` |
| `findOne` | `@ApiOperation({ operationId: 'getUser' })`, `@ApiParam({ name: 'id', type: Number })`, `@Get(':id')`, `@ApiOkResponse({ type: UserDto })` |
| `update` | `@ApiOperation({ operationId: 'updateUser' })`, `@ApiParam({ name: 'id', type: Number })`, `@ApiBody({ type: UpdateUserDto })`, `@Patch(':id')`, `@ApiOkResponse({ type: UserDto })` |
| `remove` | `@ApiOperation({ operationId: 'deleteUser' })`, `@ApiParam({ name: 'id', type: Number })`, `@Delete(':id')`, `@ApiOkResponse({ type: UserDto })` |

#### `workspace.controller.ts`
| Method | Decorators |
|---|---|
| `create` | `@ApiOperation({ operationId: 'createWorkspace' })`, `@ApiBody({ type: CreateWorkspaceDto })`, `@Post()`, `@ApiCreatedResponse({ type: WorkspaceDto })` |
| `findAll` | `@ApiOperation({ operationId: 'listWorkspaces' })`, `@Get()`, `@ApiOkResponse({ type: WorkspaceDto })` |
| `findOne` | `@ApiOperation({ operationId: 'getWorkspace' })`, `@ApiParam({ name: 'id', type: Number })`, `@Get(':id')`, `@ApiOkResponse({ type: WorkspaceDto })` |
| `update` | `@ApiOperation({ operationId: 'updateWorkspace' })`, `@ApiParam({ name: 'id', type: Number })`, `@ApiBody({ type: UpdateWorkspaceDto })`, `@Patch(':id')`, `@ApiOkResponse({ type: WorkspaceDto })` |
| `remove` | `@ApiOperation({ operationId: 'deleteWorkspace' })`, `@ApiParam({ name: 'id', type: Number })`, `@Delete(':id')`, `@ApiOkResponse({ type: WorkspaceDto })` |

#### `workspace-status.controller.ts`
| Method | Decorators |
|---|---|
| `create` | `@ApiOperation({ operationId: 'createWorkspaceStatus' })`, `@ApiBody({ type: CreateWorkspaceStatusDto })`, `@Post()`, `@ApiCreatedResponse({ type: WorkspaceStatusDto })` |
| `findInWorkspace` | `@ApiOperation({ operationId: 'listWorkspaceStatuses' })`, `@ApiQuery({ type: GetViewerWorkspaceIdFieldDto })`, `@Get()`, `@ApiOkResponse({ type: WorkspaceStatusDto })` |
| `findOne` | `@ApiOperation({ operationId: 'getWorkspaceStatus' })`, `@ApiParam({ name: 'id', type: Number })`, `@Get(':id')`, `@ApiOkResponse({ type: WorkspaceStatusDto })` |
| `update` | `@ApiOperation({ operationId: 'updateWorkspaceStatus' })`, `@ApiParam({ name: 'id', type: Number })`, `@ApiBody({ type: UpdateWorkspaceStatusDto })`, `@Patch(':id')`, `@ApiOkResponse({ type: WorkspaceStatusDto })` |
| `remove` | `@ApiOperation({ operationId: 'deleteWorkspaceStatus' })`, `@ApiParam({ name: 'id', type: Number })`, `@Delete(':id')`, `@ApiOkResponse({ type: WorkspaceStatusDto })` |

---

## Verification
Start the server and open `http://localhost:{PORT}/open-api` — every controller should appear as a tagged group with all endpoints, request schemas, and response schemas fully described.
