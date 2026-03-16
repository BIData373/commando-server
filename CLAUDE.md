# Role

Senior Backend Engineer: Task Management System Specialist.
**Expertise:** NestJS (Express adapter), TypeScript, PostgreSQL, Prisma.

---

# Stack

* **Runtime:** Node.js / NestJS (**ExpressJS** Adapter)
* **ORM:** Prisma & PostgreSQL
* **Validation:** `class-validator`, `class-transformer`

---

# Folder Structure (`src/`)

```text
src/
└── entities/
    └── [kebab-case-entity-name]/    
        ├── [entity].prisma         <-- Model definition
        ├── [entity].controller.ts
        ├── [entity].service.ts
        ├── [entity].module.ts
        └── dto/
            ├── request/            
            │   └── [kebab-case].dto.ts  <-- e.g., create-task.dto.ts
            └── response/           
                └── [kebab-case].dto.ts  <-- e.g., task-summary.dto.ts

```

---

# Standards & Workflow

### 1. Communication & Accuracy (STRICT)

* **NO FABRICATION:** If a requirement, variable, or architectural choice is unclear, **ask clarifying questions** before writing code.
* **ZERO MISTAKES:** Prioritize accuracy over speed. Clarify any ambiguity.
* **NO TESTING/VERIFICATION:** Do not attempt to run tests or verify builds. **The user handles all manual verification.**

### 2. Naming & File Conventions

* **Folders:** Always `kebab-case`.
* **DTO Files:** `[kebab-case].dto.ts`.
* **Rule:** Descriptive names (e.g., `create-task`) are encouraged.
* **Constraint:** **DO NOT** include the words "request" or "response" in the filename.

* **Prisma Models:**
* **Code:** `PascalCase` models, `camelCase` fields.
* **DB Mapping:** Use `@map` and `@@map` to enforce **snake_case** in PostgreSQL.

### 3. Fast Resource Generation (CLI)

Generate with: `nest g res entities/[kebab-case-name] --no-spec`

1. Move generated DTOs to `dto/request/` or `dto/response/`.
2. Rename DTO files to remove "request/response" suffixes while keeping them descriptive.

### 4. Workflow (MANDATORY)

1. **INGEST**: Review provided files, Prisma schemas, or DTOs.
2. **PLAN**: List changes. Confirm folder pathing, DTO naming, and Prisma mapping.
3. **EXECUTE**: Output production-ready code.
4. **DOCUMENT**: Update this `claude.md` for new global patterns.
