# Plan: src/types — Shared Interface Layer

## Context
The project needs a typed interface layer under `src/types/` that mirrors every controller's request/response contract using Prisma-generated types as the source of truth. These interfaces are BE-local for now but structured for future extraction into a shared package (e.g. `@commando/types`). Request interfaces are named `IActionEntity` (e.g. `ICreateTask`), response interfaces `IEntity` (e.g. `ITask`).

---

## Folder Structure

```
src/types/
├── common/
│   └── index.ts                   ← enums + OmitBeFields utility
├── assignee/
│   └── index.ts
├── assignee-task-status/
│   └── index.ts
├── assignee-user/
│   └── index.ts
├── message/
│   └── index.ts
├── permission/
│   └── index.ts
├── pikud/
│   └── index.ts
├── source/
│   └── index.ts
├── tag/
│   └── index.ts
├── task/
│   └── index.ts
├── task-history/
│   └── index.ts
├── user/
│   └── index.ts
├── workspace/
│   └── index.ts
├── workspace-status/
│   └── index.ts
└── index.ts                       ← barrel re-export
```

---

## Core Pattern

**Response** — extend the Prisma model type directly. `$Result.DefaultSelection` (what the named export resolves to) already strips relation fields, leaving only scalars.

```typescript
import { Assignee } from '../../../prisma';
export interface IAssignee extends Assignee {}
```

**Create** — extend `Prisma.XxxUncheckedCreateInput` (uses FK integers, not nested relations), stripped of all BE-managed fields via `OmitBeFields`.

```typescript
import { Prisma } from '../../../prisma';
import { OmitBeFields } from '../common';
export interface ICreateAssignee extends OmitBeFields<Prisma.AssigneeUncheckedCreateInput> {}
```

**Update** — `Partial` of the create interface.

```typescript
export interface IUpdateAssignee extends Partial<ICreateAssignee> {}
```

---

## `src/types/common/index.ts`

```typescript
import { PermissionType, HistoryAction } from '../../../prisma';

export { PermissionType, HistoryAction };

/**
 * Strips all BE-managed fields from Prisma create/update input types.
 * Removes: id, createdAt, createdBy, updatedAt, updatedBy, deletedAt, deletedBy
 */
export type OmitBeFields<T> = Omit<
  T,
  'id' | 'createdAt' | 'createdBy' | 'updatedAt' | 'updatedBy' | 'deletedAt' | 'deletedBy'
>;
```

---

## Entity Files

### `src/types/assignee/index.ts`
- `IAssignee extends Assignee`
- `ICreateAssignee extends OmitBeFields<Prisma.AssigneeUncheckedCreateInput>`
  - Result: `{ name: string; color: string }`
- `IUpdateAssignee extends Partial<ICreateAssignee>`

### `src/types/assignee-task-status/index.ts`
- `IAssigneeTaskStatus extends AssigneeTaskStatus`
- `ICreateAssigneeTaskStatus extends OmitBeFields<Prisma.AssigneeTaskStatusUncheckedCreateInput>`
  - Result: `{ taskId: number; assigneeId: number; statusId: number }`
- `IUpdateAssigneeTaskStatus extends Partial<ICreateAssigneeTaskStatus>`

### `src/types/assignee-user/index.ts`
- `IAssigneeUser extends AssigneeUser`
- `ICreateAssigneeUser extends OmitBeFields<Prisma.AssigneeUserUncheckedCreateInput>`
  - Result: `{ assigneeId: number; userId: number }`
- _(no IUpdateAssigneeUser — no PATCH route exists)_

### `src/types/message/index.ts`
- `IMessage extends Message`
- `ICreateMessage extends OmitBeFields<Prisma.MessageUncheckedCreateInput>`
  - Result: `{ content: string; assigneeId: number; taskId: number }`
- `IUpdateMessage extends Partial<ICreateMessage>`

### `src/types/permission/index.ts`
- `IPermission extends Permission`
- `ICreatePermission extends OmitBeFields<Prisma.PermissionUncheckedCreateInput>`
  - Result: `{ userId: number; workspaceId: number; type: PermissionType }`
- `IUpdatePermission extends Partial<ICreatePermission>`

### `src/types/pikud/index.ts`
- `IPikud extends Pikud`
- `ICreatePikud extends OmitBeFields<Prisma.PikudUncheckedCreateInput>`
  - Result: `{ name: string; icon?: string | null }`
- `IUpdatePikud extends Partial<ICreatePikud>`

### `src/types/source/index.ts`
- `ISource extends Source`
- `ICreateSource extends OmitBeFields<Prisma.SourceUncheckedCreateInput>`
  - Result: `{ name: string }`
- `IUpdateSource extends Partial<ICreateSource>`

### `src/types/tag/index.ts`
- `ITag extends Tag` _(Tag has no soft-delete fields in schema — Prisma type already correct)_
- `ICreateTag extends OmitBeFields<Prisma.TagUncheckedCreateInput>`
  - Result: `{ name: string; workspaceId: number }`
- `IUpdateTag extends Partial<ICreateTag>`

### `src/types/task/index.ts`
- `ITask extends Task`
- `ICreateTask` — `notes` overridden (Prisma's `InputJsonValue` not FE-friendly):
  ```typescript
  export interface ICreateTask extends Omit<
    OmitBeFields<Prisma.TaskUncheckedCreateInput>,
    'notes'
  > {
    notes?: object | null;
  }
  ```
  - Result: `{ title: string; deadlineType: string; dueDate: Date | string; workspaceId: number; sourceId: number; description?: string | null; flagged?: boolean; issuedAt?: Date | string; notes?: object | null }`
- `IUpdateTask extends Partial<ICreateTask>`

### `src/types/task-history/index.ts`
- `ITaskHistory extends TaskHistory`
- `ICreateTaskHistory extends OmitBeFields<Prisma.TaskHistoryUncheckedCreateInput>`
  - Result: `{ action: HistoryAction; field: string; value?: string | null; taskId: number; workspaceId: number; userId: number; timestamp?: Date | string }`
- _(no IUpdateTaskHistory — append-only entity)_

### `src/types/user/index.ts`
- `IUser extends User` _(User has no meta fields in schema)_
- `ICreateUser` — `info` overridden same as `notes`:
  ```typescript
  export interface ICreateUser extends Omit<
    OmitBeFields<Prisma.UserUncheckedCreateInput>,
    'info'
  > {
    info?: object | null;
  }
  ```
  - Result: `{ upn: string; info?: object | null }`
- `IUpdateUser extends Partial<ICreateUser>`

### `src/types/workspace/index.ts`
- `IWorkspace extends Workspace`
- `ICreateWorkspace extends OmitBeFields<Prisma.WorkspaceUncheckedCreateInput>`
  - Result: `{ title: string; urlName: string; icon?: string | null; assigneeStatusEditable?: boolean; pikudId: number }`
- `IUpdateWorkspace extends Partial<ICreateWorkspace>`

### `src/types/workspace-status/index.ts`
- `IWorkspaceStatus extends WorkspaceStatus` _(no meta fields in schema)_
- `ICreateWorkspaceStatus extends OmitBeFields<Prisma.WorkspaceStatusUncheckedCreateInput>`
  - Result: `{ name: string; color: string; statusType: string; workspaceId: number }`
- `IUpdateWorkspaceStatus extends Partial<ICreateWorkspaceStatus>`

---

## `src/types/index.ts` — Barrel

```typescript
export * from './common';
export * from './assignee';
export * from './assignee-task-status';
export * from './assignee-user';
export * from './message';
export * from './permission';
export * from './pikud';
export * from './source';
export * from './tag';
export * from './task';
export * from './task-history';
export * from './user';
export * from './workspace';
export * from './workspace-status';
```

---

## Prisma Import Path

| File location | Import path to prisma |
|---|---|
| `src/types/common/index.ts` | `'../../../prisma'` |
| `src/types/[entity]/index.ts` | `'../../../prisma'` |
| `src/types/index.ts` | _(no direct prisma import)_ |

---

## JSON Field Handling

Two models have `Json?` fields using Prisma's internal `InputJsonValue | NullableJsonNullValueInput` — not suitable for FE:

| Model | Field | Override |
|-------|-------|----------|
| Task | notes | `notes?: object \| null` |
| User | info | `info?: object \| null` |

---

## Files to Create (15 total)

1. `src/types/common/index.ts`
2. `src/types/assignee/index.ts`
3. `src/types/assignee-task-status/index.ts`
4. `src/types/assignee-user/index.ts`
5. `src/types/message/index.ts`
6. `src/types/permission/index.ts`
7. `src/types/pikud/index.ts`
8. `src/types/source/index.ts`
9. `src/types/tag/index.ts`
10. `src/types/task/index.ts`
11. `src/types/task-history/index.ts`
12. `src/types/user/index.ts`
13. `src/types/workspace/index.ts`
14. `src/types/workspace-status/index.ts`
15. `src/types/index.ts`

No existing files are modified.
