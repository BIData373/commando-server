
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Assignee
 * 
 */
export type Assignee = $Result.DefaultSelection<Prisma.$AssigneePayload>
/**
 * Model AssigneeTaskStatus
 * 
 */
export type AssigneeTaskStatus = $Result.DefaultSelection<Prisma.$AssigneeTaskStatusPayload>
/**
 * Model AssigneeUser
 * 
 */
export type AssigneeUser = $Result.DefaultSelection<Prisma.$AssigneeUserPayload>
/**
 * Model Message
 * 
 */
export type Message = $Result.DefaultSelection<Prisma.$MessagePayload>
/**
 * Model Permission
 * 
 */
export type Permission = $Result.DefaultSelection<Prisma.$PermissionPayload>
/**
 * Model Pikud
 * 
 */
export type Pikud = $Result.DefaultSelection<Prisma.$PikudPayload>
/**
 * Model Source
 * 
 */
export type Source = $Result.DefaultSelection<Prisma.$SourcePayload>
/**
 * Model Tag
 * 
 */
export type Tag = $Result.DefaultSelection<Prisma.$TagPayload>
/**
 * Model Task
 * 
 */
export type Task = $Result.DefaultSelection<Prisma.$TaskPayload>
/**
 * Model TaskHistory
 * 
 */
export type TaskHistory = $Result.DefaultSelection<Prisma.$TaskHistoryPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Workspace
 * 
 */
export type Workspace = $Result.DefaultSelection<Prisma.$WorkspacePayload>
/**
 * Model WorkspaceStatus
 * 
 */
export type WorkspaceStatus = $Result.DefaultSelection<Prisma.$WorkspaceStatusPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const PermissionType: {
  VIEWER: 'VIEWER',
  MANAGER: 'MANAGER'
};

export type PermissionType = (typeof PermissionType)[keyof typeof PermissionType]


export const HistoryAction: {
  CREATE: 'CREATE',
  UPDATE: 'UPDATE',
  DUPLICATE: 'DUPLICATE',
  DELETE: 'DELETE'
};

export type HistoryAction = (typeof HistoryAction)[keyof typeof HistoryAction]

}

export type PermissionType = $Enums.PermissionType

export const PermissionType: typeof $Enums.PermissionType

export type HistoryAction = $Enums.HistoryAction

export const HistoryAction: typeof $Enums.HistoryAction

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Assignees
 * const assignees = await prisma.assignee.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Assignees
   * const assignees = await prisma.assignee.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.assignee`: Exposes CRUD operations for the **Assignee** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Assignees
    * const assignees = await prisma.assignee.findMany()
    * ```
    */
  get assignee(): Prisma.AssigneeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.assigneeTaskStatus`: Exposes CRUD operations for the **AssigneeTaskStatus** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AssigneeTaskStatuses
    * const assigneeTaskStatuses = await prisma.assigneeTaskStatus.findMany()
    * ```
    */
  get assigneeTaskStatus(): Prisma.AssigneeTaskStatusDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.assigneeUser`: Exposes CRUD operations for the **AssigneeUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AssigneeUsers
    * const assigneeUsers = await prisma.assigneeUser.findMany()
    * ```
    */
  get assigneeUser(): Prisma.AssigneeUserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.message`: Exposes CRUD operations for the **Message** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.message.findMany()
    * ```
    */
  get message(): Prisma.MessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.permission`: Exposes CRUD operations for the **Permission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Permissions
    * const permissions = await prisma.permission.findMany()
    * ```
    */
  get permission(): Prisma.PermissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pikud`: Exposes CRUD operations for the **Pikud** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pikuds
    * const pikuds = await prisma.pikud.findMany()
    * ```
    */
  get pikud(): Prisma.PikudDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.source`: Exposes CRUD operations for the **Source** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sources
    * const sources = await prisma.source.findMany()
    * ```
    */
  get source(): Prisma.SourceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tag`: Exposes CRUD operations for the **Tag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tags
    * const tags = await prisma.tag.findMany()
    * ```
    */
  get tag(): Prisma.TagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.task`: Exposes CRUD operations for the **Task** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tasks
    * const tasks = await prisma.task.findMany()
    * ```
    */
  get task(): Prisma.TaskDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.taskHistory`: Exposes CRUD operations for the **TaskHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TaskHistories
    * const taskHistories = await prisma.taskHistory.findMany()
    * ```
    */
  get taskHistory(): Prisma.TaskHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workspace`: Exposes CRUD operations for the **Workspace** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Workspaces
    * const workspaces = await prisma.workspace.findMany()
    * ```
    */
  get workspace(): Prisma.WorkspaceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workspaceStatus`: Exposes CRUD operations for the **WorkspaceStatus** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkspaceStatuses
    * const workspaceStatuses = await prisma.workspaceStatus.findMany()
    * ```
    */
  get workspaceStatus(): Prisma.WorkspaceStatusDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.5.0
   * Query Engine version: 280c870be64f457428992c43c1f6d557fab6e29e
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Assignee: 'Assignee',
    AssigneeTaskStatus: 'AssigneeTaskStatus',
    AssigneeUser: 'AssigneeUser',
    Message: 'Message',
    Permission: 'Permission',
    Pikud: 'Pikud',
    Source: 'Source',
    Tag: 'Tag',
    Task: 'Task',
    TaskHistory: 'TaskHistory',
    User: 'User',
    Workspace: 'Workspace',
    WorkspaceStatus: 'WorkspaceStatus'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "assignee" | "assigneeTaskStatus" | "assigneeUser" | "message" | "permission" | "pikud" | "source" | "tag" | "task" | "taskHistory" | "user" | "workspace" | "workspaceStatus"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Assignee: {
        payload: Prisma.$AssigneePayload<ExtArgs>
        fields: Prisma.AssigneeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AssigneeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssigneePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AssigneeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssigneePayload>
          }
          findFirst: {
            args: Prisma.AssigneeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssigneePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AssigneeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssigneePayload>
          }
          findMany: {
            args: Prisma.AssigneeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssigneePayload>[]
          }
          create: {
            args: Prisma.AssigneeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssigneePayload>
          }
          createMany: {
            args: Prisma.AssigneeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AssigneeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssigneePayload>[]
          }
          delete: {
            args: Prisma.AssigneeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssigneePayload>
          }
          update: {
            args: Prisma.AssigneeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssigneePayload>
          }
          deleteMany: {
            args: Prisma.AssigneeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AssigneeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AssigneeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssigneePayload>[]
          }
          upsert: {
            args: Prisma.AssigneeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssigneePayload>
          }
          aggregate: {
            args: Prisma.AssigneeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAssignee>
          }
          groupBy: {
            args: Prisma.AssigneeGroupByArgs<ExtArgs>
            result: $Utils.Optional<AssigneeGroupByOutputType>[]
          }
          count: {
            args: Prisma.AssigneeCountArgs<ExtArgs>
            result: $Utils.Optional<AssigneeCountAggregateOutputType> | number
          }
        }
      }
      AssigneeTaskStatus: {
        payload: Prisma.$AssigneeTaskStatusPayload<ExtArgs>
        fields: Prisma.AssigneeTaskStatusFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AssigneeTaskStatusFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssigneeTaskStatusPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AssigneeTaskStatusFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssigneeTaskStatusPayload>
          }
          findFirst: {
            args: Prisma.AssigneeTaskStatusFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssigneeTaskStatusPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AssigneeTaskStatusFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssigneeTaskStatusPayload>
          }
          findMany: {
            args: Prisma.AssigneeTaskStatusFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssigneeTaskStatusPayload>[]
          }
          create: {
            args: Prisma.AssigneeTaskStatusCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssigneeTaskStatusPayload>
          }
          createMany: {
            args: Prisma.AssigneeTaskStatusCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AssigneeTaskStatusCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssigneeTaskStatusPayload>[]
          }
          delete: {
            args: Prisma.AssigneeTaskStatusDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssigneeTaskStatusPayload>
          }
          update: {
            args: Prisma.AssigneeTaskStatusUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssigneeTaskStatusPayload>
          }
          deleteMany: {
            args: Prisma.AssigneeTaskStatusDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AssigneeTaskStatusUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AssigneeTaskStatusUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssigneeTaskStatusPayload>[]
          }
          upsert: {
            args: Prisma.AssigneeTaskStatusUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssigneeTaskStatusPayload>
          }
          aggregate: {
            args: Prisma.AssigneeTaskStatusAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAssigneeTaskStatus>
          }
          groupBy: {
            args: Prisma.AssigneeTaskStatusGroupByArgs<ExtArgs>
            result: $Utils.Optional<AssigneeTaskStatusGroupByOutputType>[]
          }
          count: {
            args: Prisma.AssigneeTaskStatusCountArgs<ExtArgs>
            result: $Utils.Optional<AssigneeTaskStatusCountAggregateOutputType> | number
          }
        }
      }
      AssigneeUser: {
        payload: Prisma.$AssigneeUserPayload<ExtArgs>
        fields: Prisma.AssigneeUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AssigneeUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssigneeUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AssigneeUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssigneeUserPayload>
          }
          findFirst: {
            args: Prisma.AssigneeUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssigneeUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AssigneeUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssigneeUserPayload>
          }
          findMany: {
            args: Prisma.AssigneeUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssigneeUserPayload>[]
          }
          create: {
            args: Prisma.AssigneeUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssigneeUserPayload>
          }
          createMany: {
            args: Prisma.AssigneeUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AssigneeUserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssigneeUserPayload>[]
          }
          delete: {
            args: Prisma.AssigneeUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssigneeUserPayload>
          }
          update: {
            args: Prisma.AssigneeUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssigneeUserPayload>
          }
          deleteMany: {
            args: Prisma.AssigneeUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AssigneeUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AssigneeUserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssigneeUserPayload>[]
          }
          upsert: {
            args: Prisma.AssigneeUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssigneeUserPayload>
          }
          aggregate: {
            args: Prisma.AssigneeUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAssigneeUser>
          }
          groupBy: {
            args: Prisma.AssigneeUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<AssigneeUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.AssigneeUserCountArgs<ExtArgs>
            result: $Utils.Optional<AssigneeUserCountAggregateOutputType> | number
          }
        }
      }
      Message: {
        payload: Prisma.$MessagePayload<ExtArgs>
        fields: Prisma.MessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findFirst: {
            args: Prisma.MessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findMany: {
            args: Prisma.MessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          create: {
            args: Prisma.MessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          createMany: {
            args: Prisma.MessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          delete: {
            args: Prisma.MessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          update: {
            args: Prisma.MessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          deleteMany: {
            args: Prisma.MessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          upsert: {
            args: Prisma.MessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          aggregate: {
            args: Prisma.MessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessage>
          }
          groupBy: {
            args: Prisma.MessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageCountArgs<ExtArgs>
            result: $Utils.Optional<MessageCountAggregateOutputType> | number
          }
        }
      }
      Permission: {
        payload: Prisma.$PermissionPayload<ExtArgs>
        fields: Prisma.PermissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PermissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PermissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          findFirst: {
            args: Prisma.PermissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PermissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          findMany: {
            args: Prisma.PermissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>[]
          }
          create: {
            args: Prisma.PermissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          createMany: {
            args: Prisma.PermissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PermissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>[]
          }
          delete: {
            args: Prisma.PermissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          update: {
            args: Prisma.PermissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          deleteMany: {
            args: Prisma.PermissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PermissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PermissionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>[]
          }
          upsert: {
            args: Prisma.PermissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          aggregate: {
            args: Prisma.PermissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePermission>
          }
          groupBy: {
            args: Prisma.PermissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PermissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PermissionCountArgs<ExtArgs>
            result: $Utils.Optional<PermissionCountAggregateOutputType> | number
          }
        }
      }
      Pikud: {
        payload: Prisma.$PikudPayload<ExtArgs>
        fields: Prisma.PikudFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PikudFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PikudPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PikudFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PikudPayload>
          }
          findFirst: {
            args: Prisma.PikudFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PikudPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PikudFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PikudPayload>
          }
          findMany: {
            args: Prisma.PikudFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PikudPayload>[]
          }
          create: {
            args: Prisma.PikudCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PikudPayload>
          }
          createMany: {
            args: Prisma.PikudCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PikudCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PikudPayload>[]
          }
          delete: {
            args: Prisma.PikudDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PikudPayload>
          }
          update: {
            args: Prisma.PikudUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PikudPayload>
          }
          deleteMany: {
            args: Prisma.PikudDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PikudUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PikudUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PikudPayload>[]
          }
          upsert: {
            args: Prisma.PikudUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PikudPayload>
          }
          aggregate: {
            args: Prisma.PikudAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePikud>
          }
          groupBy: {
            args: Prisma.PikudGroupByArgs<ExtArgs>
            result: $Utils.Optional<PikudGroupByOutputType>[]
          }
          count: {
            args: Prisma.PikudCountArgs<ExtArgs>
            result: $Utils.Optional<PikudCountAggregateOutputType> | number
          }
        }
      }
      Source: {
        payload: Prisma.$SourcePayload<ExtArgs>
        fields: Prisma.SourceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SourceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourcePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SourceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourcePayload>
          }
          findFirst: {
            args: Prisma.SourceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourcePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SourceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourcePayload>
          }
          findMany: {
            args: Prisma.SourceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourcePayload>[]
          }
          create: {
            args: Prisma.SourceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourcePayload>
          }
          createMany: {
            args: Prisma.SourceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SourceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourcePayload>[]
          }
          delete: {
            args: Prisma.SourceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourcePayload>
          }
          update: {
            args: Prisma.SourceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourcePayload>
          }
          deleteMany: {
            args: Prisma.SourceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SourceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SourceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourcePayload>[]
          }
          upsert: {
            args: Prisma.SourceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourcePayload>
          }
          aggregate: {
            args: Prisma.SourceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSource>
          }
          groupBy: {
            args: Prisma.SourceGroupByArgs<ExtArgs>
            result: $Utils.Optional<SourceGroupByOutputType>[]
          }
          count: {
            args: Prisma.SourceCountArgs<ExtArgs>
            result: $Utils.Optional<SourceCountAggregateOutputType> | number
          }
        }
      }
      Tag: {
        payload: Prisma.$TagPayload<ExtArgs>
        fields: Prisma.TagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findFirst: {
            args: Prisma.TagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          findMany: {
            args: Prisma.TagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          create: {
            args: Prisma.TagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          createMany: {
            args: Prisma.TagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TagCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          delete: {
            args: Prisma.TagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          update: {
            args: Prisma.TagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          deleteMany: {
            args: Prisma.TagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TagUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>[]
          }
          upsert: {
            args: Prisma.TagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TagPayload>
          }
          aggregate: {
            args: Prisma.TagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTag>
          }
          groupBy: {
            args: Prisma.TagGroupByArgs<ExtArgs>
            result: $Utils.Optional<TagGroupByOutputType>[]
          }
          count: {
            args: Prisma.TagCountArgs<ExtArgs>
            result: $Utils.Optional<TagCountAggregateOutputType> | number
          }
        }
      }
      Task: {
        payload: Prisma.$TaskPayload<ExtArgs>
        fields: Prisma.TaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findFirst: {
            args: Prisma.TaskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findMany: {
            args: Prisma.TaskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          create: {
            args: Prisma.TaskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          createMany: {
            args: Prisma.TaskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaskCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          delete: {
            args: Prisma.TaskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          update: {
            args: Prisma.TaskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          deleteMany: {
            args: Prisma.TaskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TaskUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          upsert: {
            args: Prisma.TaskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          aggregate: {
            args: Prisma.TaskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTask>
          }
          groupBy: {
            args: Prisma.TaskGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskCountArgs<ExtArgs>
            result: $Utils.Optional<TaskCountAggregateOutputType> | number
          }
        }
      }
      TaskHistory: {
        payload: Prisma.$TaskHistoryPayload<ExtArgs>
        fields: Prisma.TaskHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskHistoryPayload>
          }
          findFirst: {
            args: Prisma.TaskHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskHistoryPayload>
          }
          findMany: {
            args: Prisma.TaskHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskHistoryPayload>[]
          }
          create: {
            args: Prisma.TaskHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskHistoryPayload>
          }
          createMany: {
            args: Prisma.TaskHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TaskHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskHistoryPayload>[]
          }
          delete: {
            args: Prisma.TaskHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskHistoryPayload>
          }
          update: {
            args: Prisma.TaskHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskHistoryPayload>
          }
          deleteMany: {
            args: Prisma.TaskHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TaskHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TaskHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskHistoryPayload>[]
          }
          upsert: {
            args: Prisma.TaskHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TaskHistoryPayload>
          }
          aggregate: {
            args: Prisma.TaskHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTaskHistory>
          }
          groupBy: {
            args: Prisma.TaskHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<TaskHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<TaskHistoryCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Workspace: {
        payload: Prisma.$WorkspacePayload<ExtArgs>
        fields: Prisma.WorkspaceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkspaceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkspaceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload>
          }
          findFirst: {
            args: Prisma.WorkspaceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkspaceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload>
          }
          findMany: {
            args: Prisma.WorkspaceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload>[]
          }
          create: {
            args: Prisma.WorkspaceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload>
          }
          createMany: {
            args: Prisma.WorkspaceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkspaceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload>[]
          }
          delete: {
            args: Prisma.WorkspaceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload>
          }
          update: {
            args: Prisma.WorkspaceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload>
          }
          deleteMany: {
            args: Prisma.WorkspaceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkspaceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkspaceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload>[]
          }
          upsert: {
            args: Prisma.WorkspaceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload>
          }
          aggregate: {
            args: Prisma.WorkspaceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkspace>
          }
          groupBy: {
            args: Prisma.WorkspaceGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkspaceGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkspaceCountArgs<ExtArgs>
            result: $Utils.Optional<WorkspaceCountAggregateOutputType> | number
          }
        }
      }
      WorkspaceStatus: {
        payload: Prisma.$WorkspaceStatusPayload<ExtArgs>
        fields: Prisma.WorkspaceStatusFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkspaceStatusFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspaceStatusPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkspaceStatusFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspaceStatusPayload>
          }
          findFirst: {
            args: Prisma.WorkspaceStatusFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspaceStatusPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkspaceStatusFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspaceStatusPayload>
          }
          findMany: {
            args: Prisma.WorkspaceStatusFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspaceStatusPayload>[]
          }
          create: {
            args: Prisma.WorkspaceStatusCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspaceStatusPayload>
          }
          createMany: {
            args: Prisma.WorkspaceStatusCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkspaceStatusCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspaceStatusPayload>[]
          }
          delete: {
            args: Prisma.WorkspaceStatusDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspaceStatusPayload>
          }
          update: {
            args: Prisma.WorkspaceStatusUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspaceStatusPayload>
          }
          deleteMany: {
            args: Prisma.WorkspaceStatusDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkspaceStatusUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkspaceStatusUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspaceStatusPayload>[]
          }
          upsert: {
            args: Prisma.WorkspaceStatusUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspaceStatusPayload>
          }
          aggregate: {
            args: Prisma.WorkspaceStatusAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkspaceStatus>
          }
          groupBy: {
            args: Prisma.WorkspaceStatusGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkspaceStatusGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkspaceStatusCountArgs<ExtArgs>
            result: $Utils.Optional<WorkspaceStatusCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    assignee?: AssigneeOmit
    assigneeTaskStatus?: AssigneeTaskStatusOmit
    assigneeUser?: AssigneeUserOmit
    message?: MessageOmit
    permission?: PermissionOmit
    pikud?: PikudOmit
    source?: SourceOmit
    tag?: TagOmit
    task?: TaskOmit
    taskHistory?: TaskHistoryOmit
    user?: UserOmit
    workspace?: WorkspaceOmit
    workspaceStatus?: WorkspaceStatusOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type AssigneeCountOutputType
   */

  export type AssigneeCountOutputType = {
    users: number
    taskStatuses: number
    messages: number
  }

  export type AssigneeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | AssigneeCountOutputTypeCountUsersArgs
    taskStatuses?: boolean | AssigneeCountOutputTypeCountTaskStatusesArgs
    messages?: boolean | AssigneeCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * AssigneeCountOutputType without action
   */
  export type AssigneeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssigneeCountOutputType
     */
    select?: AssigneeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AssigneeCountOutputType without action
   */
  export type AssigneeCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssigneeUserWhereInput
  }

  /**
   * AssigneeCountOutputType without action
   */
  export type AssigneeCountOutputTypeCountTaskStatusesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssigneeTaskStatusWhereInput
  }

  /**
   * AssigneeCountOutputType without action
   */
  export type AssigneeCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }


  /**
   * Count Type PikudCountOutputType
   */

  export type PikudCountOutputType = {
    workspaces: number
  }

  export type PikudCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspaces?: boolean | PikudCountOutputTypeCountWorkspacesArgs
  }

  // Custom InputTypes
  /**
   * PikudCountOutputType without action
   */
  export type PikudCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PikudCountOutputType
     */
    select?: PikudCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PikudCountOutputType without action
   */
  export type PikudCountOutputTypeCountWorkspacesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkspaceWhereInput
  }


  /**
   * Count Type SourceCountOutputType
   */

  export type SourceCountOutputType = {
    tasks: number
  }

  export type SourceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | SourceCountOutputTypeCountTasksArgs
  }

  // Custom InputTypes
  /**
   * SourceCountOutputType without action
   */
  export type SourceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceCountOutputType
     */
    select?: SourceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SourceCountOutputType without action
   */
  export type SourceCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }


  /**
   * Count Type TagCountOutputType
   */

  export type TagCountOutputType = {
    tasks: number
  }

  export type TagCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | TagCountOutputTypeCountTasksArgs
  }

  // Custom InputTypes
  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagCountOutputType
     */
    select?: TagCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }


  /**
   * Count Type TaskCountOutputType
   */

  export type TaskCountOutputType = {
    tags: number
    assigneeStatuses: number
    messages: number
    history: number
  }

  export type TaskCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tags?: boolean | TaskCountOutputTypeCountTagsArgs
    assigneeStatuses?: boolean | TaskCountOutputTypeCountAssigneeStatusesArgs
    messages?: boolean | TaskCountOutputTypeCountMessagesArgs
    history?: boolean | TaskCountOutputTypeCountHistoryArgs
  }

  // Custom InputTypes
  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskCountOutputType
     */
    select?: TaskCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeCountTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
  }

  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeCountAssigneeStatusesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssigneeTaskStatusWhereInput
  }

  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }

  /**
   * TaskCountOutputType without action
   */
  export type TaskCountOutputTypeCountHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskHistoryWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    assignees: number
    permissions: number
    history: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignees?: boolean | UserCountOutputTypeCountAssigneesArgs
    permissions?: boolean | UserCountOutputTypeCountPermissionsArgs
    history?: boolean | UserCountOutputTypeCountHistoryArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAssigneesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssigneeUserWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPermissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PermissionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskHistoryWhereInput
  }


  /**
   * Count Type WorkspaceCountOutputType
   */

  export type WorkspaceCountOutputType = {
    tags: number
    tasks: number
    workspaceStatuses: number
    permissions: number
    tasksHistory: number
  }

  export type WorkspaceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tags?: boolean | WorkspaceCountOutputTypeCountTagsArgs
    tasks?: boolean | WorkspaceCountOutputTypeCountTasksArgs
    workspaceStatuses?: boolean | WorkspaceCountOutputTypeCountWorkspaceStatusesArgs
    permissions?: boolean | WorkspaceCountOutputTypeCountPermissionsArgs
    tasksHistory?: boolean | WorkspaceCountOutputTypeCountTasksHistoryArgs
  }

  // Custom InputTypes
  /**
   * WorkspaceCountOutputType without action
   */
  export type WorkspaceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkspaceCountOutputType
     */
    select?: WorkspaceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WorkspaceCountOutputType without action
   */
  export type WorkspaceCountOutputTypeCountTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
  }

  /**
   * WorkspaceCountOutputType without action
   */
  export type WorkspaceCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }

  /**
   * WorkspaceCountOutputType without action
   */
  export type WorkspaceCountOutputTypeCountWorkspaceStatusesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkspaceStatusWhereInput
  }

  /**
   * WorkspaceCountOutputType without action
   */
  export type WorkspaceCountOutputTypeCountPermissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PermissionWhereInput
  }

  /**
   * WorkspaceCountOutputType without action
   */
  export type WorkspaceCountOutputTypeCountTasksHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskHistoryWhereInput
  }


  /**
   * Count Type WorkspaceStatusCountOutputType
   */

  export type WorkspaceStatusCountOutputType = {
    assigneeTaskStatuses: number
  }

  export type WorkspaceStatusCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assigneeTaskStatuses?: boolean | WorkspaceStatusCountOutputTypeCountAssigneeTaskStatusesArgs
  }

  // Custom InputTypes
  /**
   * WorkspaceStatusCountOutputType without action
   */
  export type WorkspaceStatusCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkspaceStatusCountOutputType
     */
    select?: WorkspaceStatusCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WorkspaceStatusCountOutputType without action
   */
  export type WorkspaceStatusCountOutputTypeCountAssigneeTaskStatusesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssigneeTaskStatusWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Assignee
   */

  export type AggregateAssignee = {
    _count: AssigneeCountAggregateOutputType | null
    _avg: AssigneeAvgAggregateOutputType | null
    _sum: AssigneeSumAggregateOutputType | null
    _min: AssigneeMinAggregateOutputType | null
    _max: AssigneeMaxAggregateOutputType | null
  }

  export type AssigneeAvgAggregateOutputType = {
    id: number | null
    createdBy: number | null
    updatedBy: number | null
    deletedBy: number | null
  }

  export type AssigneeSumAggregateOutputType = {
    id: number | null
    createdBy: number | null
    updatedBy: number | null
    deletedBy: number | null
  }

  export type AssigneeMinAggregateOutputType = {
    id: number | null
    name: string | null
    color: string | null
    createdAt: Date | null
    createdBy: number | null
    updatedAt: Date | null
    updatedBy: number | null
    deletedAt: Date | null
    deletedBy: number | null
  }

  export type AssigneeMaxAggregateOutputType = {
    id: number | null
    name: string | null
    color: string | null
    createdAt: Date | null
    createdBy: number | null
    updatedAt: Date | null
    updatedBy: number | null
    deletedAt: Date | null
    deletedBy: number | null
  }

  export type AssigneeCountAggregateOutputType = {
    id: number
    name: number
    color: number
    createdAt: number
    createdBy: number
    updatedAt: number
    updatedBy: number
    deletedAt: number
    deletedBy: number
    _all: number
  }


  export type AssigneeAvgAggregateInputType = {
    id?: true
    createdBy?: true
    updatedBy?: true
    deletedBy?: true
  }

  export type AssigneeSumAggregateInputType = {
    id?: true
    createdBy?: true
    updatedBy?: true
    deletedBy?: true
  }

  export type AssigneeMinAggregateInputType = {
    id?: true
    name?: true
    color?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    deletedAt?: true
    deletedBy?: true
  }

  export type AssigneeMaxAggregateInputType = {
    id?: true
    name?: true
    color?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    deletedAt?: true
    deletedBy?: true
  }

  export type AssigneeCountAggregateInputType = {
    id?: true
    name?: true
    color?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    deletedAt?: true
    deletedBy?: true
    _all?: true
  }

  export type AssigneeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Assignee to aggregate.
     */
    where?: AssigneeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assignees to fetch.
     */
    orderBy?: AssigneeOrderByWithRelationInput | AssigneeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AssigneeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assignees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assignees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Assignees
    **/
    _count?: true | AssigneeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AssigneeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AssigneeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AssigneeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AssigneeMaxAggregateInputType
  }

  export type GetAssigneeAggregateType<T extends AssigneeAggregateArgs> = {
        [P in keyof T & keyof AggregateAssignee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAssignee[P]>
      : GetScalarType<T[P], AggregateAssignee[P]>
  }




  export type AssigneeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssigneeWhereInput
    orderBy?: AssigneeOrderByWithAggregationInput | AssigneeOrderByWithAggregationInput[]
    by: AssigneeScalarFieldEnum[] | AssigneeScalarFieldEnum
    having?: AssigneeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AssigneeCountAggregateInputType | true
    _avg?: AssigneeAvgAggregateInputType
    _sum?: AssigneeSumAggregateInputType
    _min?: AssigneeMinAggregateInputType
    _max?: AssigneeMaxAggregateInputType
  }

  export type AssigneeGroupByOutputType = {
    id: number
    name: string
    color: string
    createdAt: Date
    createdBy: number
    updatedAt: Date
    updatedBy: number
    deletedAt: Date | null
    deletedBy: number | null
    _count: AssigneeCountAggregateOutputType | null
    _avg: AssigneeAvgAggregateOutputType | null
    _sum: AssigneeSumAggregateOutputType | null
    _min: AssigneeMinAggregateOutputType | null
    _max: AssigneeMaxAggregateOutputType | null
  }

  type GetAssigneeGroupByPayload<T extends AssigneeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AssigneeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AssigneeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AssigneeGroupByOutputType[P]>
            : GetScalarType<T[P], AssigneeGroupByOutputType[P]>
        }
      >
    >


  export type AssigneeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    color?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
    users?: boolean | Assignee$usersArgs<ExtArgs>
    taskStatuses?: boolean | Assignee$taskStatusesArgs<ExtArgs>
    messages?: boolean | Assignee$messagesArgs<ExtArgs>
    _count?: boolean | AssigneeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assignee"]>

  export type AssigneeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    color?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
  }, ExtArgs["result"]["assignee"]>

  export type AssigneeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    color?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
  }, ExtArgs["result"]["assignee"]>

  export type AssigneeSelectScalar = {
    id?: boolean
    name?: boolean
    color?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
  }

  export type AssigneeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "color" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy" | "deletedAt" | "deletedBy", ExtArgs["result"]["assignee"]>
  export type AssigneeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Assignee$usersArgs<ExtArgs>
    taskStatuses?: boolean | Assignee$taskStatusesArgs<ExtArgs>
    messages?: boolean | Assignee$messagesArgs<ExtArgs>
    _count?: boolean | AssigneeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AssigneeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AssigneeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AssigneePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Assignee"
    objects: {
      users: Prisma.$AssigneeUserPayload<ExtArgs>[]
      taskStatuses: Prisma.$AssigneeTaskStatusPayload<ExtArgs>[]
      messages: Prisma.$MessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      color: string
      createdAt: Date
      createdBy: number
      updatedAt: Date
      updatedBy: number
      deletedAt: Date | null
      deletedBy: number | null
    }, ExtArgs["result"]["assignee"]>
    composites: {}
  }

  type AssigneeGetPayload<S extends boolean | null | undefined | AssigneeDefaultArgs> = $Result.GetResult<Prisma.$AssigneePayload, S>

  type AssigneeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AssigneeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AssigneeCountAggregateInputType | true
    }

  export interface AssigneeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Assignee'], meta: { name: 'Assignee' } }
    /**
     * Find zero or one Assignee that matches the filter.
     * @param {AssigneeFindUniqueArgs} args - Arguments to find a Assignee
     * @example
     * // Get one Assignee
     * const assignee = await prisma.assignee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AssigneeFindUniqueArgs>(args: SelectSubset<T, AssigneeFindUniqueArgs<ExtArgs>>): Prisma__AssigneeClient<$Result.GetResult<Prisma.$AssigneePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Assignee that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AssigneeFindUniqueOrThrowArgs} args - Arguments to find a Assignee
     * @example
     * // Get one Assignee
     * const assignee = await prisma.assignee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AssigneeFindUniqueOrThrowArgs>(args: SelectSubset<T, AssigneeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AssigneeClient<$Result.GetResult<Prisma.$AssigneePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Assignee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssigneeFindFirstArgs} args - Arguments to find a Assignee
     * @example
     * // Get one Assignee
     * const assignee = await prisma.assignee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AssigneeFindFirstArgs>(args?: SelectSubset<T, AssigneeFindFirstArgs<ExtArgs>>): Prisma__AssigneeClient<$Result.GetResult<Prisma.$AssigneePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Assignee that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssigneeFindFirstOrThrowArgs} args - Arguments to find a Assignee
     * @example
     * // Get one Assignee
     * const assignee = await prisma.assignee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AssigneeFindFirstOrThrowArgs>(args?: SelectSubset<T, AssigneeFindFirstOrThrowArgs<ExtArgs>>): Prisma__AssigneeClient<$Result.GetResult<Prisma.$AssigneePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Assignees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssigneeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Assignees
     * const assignees = await prisma.assignee.findMany()
     * 
     * // Get first 10 Assignees
     * const assignees = await prisma.assignee.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const assigneeWithIdOnly = await prisma.assignee.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AssigneeFindManyArgs>(args?: SelectSubset<T, AssigneeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssigneePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Assignee.
     * @param {AssigneeCreateArgs} args - Arguments to create a Assignee.
     * @example
     * // Create one Assignee
     * const Assignee = await prisma.assignee.create({
     *   data: {
     *     // ... data to create a Assignee
     *   }
     * })
     * 
     */
    create<T extends AssigneeCreateArgs>(args: SelectSubset<T, AssigneeCreateArgs<ExtArgs>>): Prisma__AssigneeClient<$Result.GetResult<Prisma.$AssigneePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Assignees.
     * @param {AssigneeCreateManyArgs} args - Arguments to create many Assignees.
     * @example
     * // Create many Assignees
     * const assignee = await prisma.assignee.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AssigneeCreateManyArgs>(args?: SelectSubset<T, AssigneeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Assignees and returns the data saved in the database.
     * @param {AssigneeCreateManyAndReturnArgs} args - Arguments to create many Assignees.
     * @example
     * // Create many Assignees
     * const assignee = await prisma.assignee.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Assignees and only return the `id`
     * const assigneeWithIdOnly = await prisma.assignee.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AssigneeCreateManyAndReturnArgs>(args?: SelectSubset<T, AssigneeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssigneePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Assignee.
     * @param {AssigneeDeleteArgs} args - Arguments to delete one Assignee.
     * @example
     * // Delete one Assignee
     * const Assignee = await prisma.assignee.delete({
     *   where: {
     *     // ... filter to delete one Assignee
     *   }
     * })
     * 
     */
    delete<T extends AssigneeDeleteArgs>(args: SelectSubset<T, AssigneeDeleteArgs<ExtArgs>>): Prisma__AssigneeClient<$Result.GetResult<Prisma.$AssigneePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Assignee.
     * @param {AssigneeUpdateArgs} args - Arguments to update one Assignee.
     * @example
     * // Update one Assignee
     * const assignee = await prisma.assignee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AssigneeUpdateArgs>(args: SelectSubset<T, AssigneeUpdateArgs<ExtArgs>>): Prisma__AssigneeClient<$Result.GetResult<Prisma.$AssigneePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Assignees.
     * @param {AssigneeDeleteManyArgs} args - Arguments to filter Assignees to delete.
     * @example
     * // Delete a few Assignees
     * const { count } = await prisma.assignee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AssigneeDeleteManyArgs>(args?: SelectSubset<T, AssigneeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Assignees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssigneeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Assignees
     * const assignee = await prisma.assignee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AssigneeUpdateManyArgs>(args: SelectSubset<T, AssigneeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Assignees and returns the data updated in the database.
     * @param {AssigneeUpdateManyAndReturnArgs} args - Arguments to update many Assignees.
     * @example
     * // Update many Assignees
     * const assignee = await prisma.assignee.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Assignees and only return the `id`
     * const assigneeWithIdOnly = await prisma.assignee.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AssigneeUpdateManyAndReturnArgs>(args: SelectSubset<T, AssigneeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssigneePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Assignee.
     * @param {AssigneeUpsertArgs} args - Arguments to update or create a Assignee.
     * @example
     * // Update or create a Assignee
     * const assignee = await prisma.assignee.upsert({
     *   create: {
     *     // ... data to create a Assignee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Assignee we want to update
     *   }
     * })
     */
    upsert<T extends AssigneeUpsertArgs>(args: SelectSubset<T, AssigneeUpsertArgs<ExtArgs>>): Prisma__AssigneeClient<$Result.GetResult<Prisma.$AssigneePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Assignees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssigneeCountArgs} args - Arguments to filter Assignees to count.
     * @example
     * // Count the number of Assignees
     * const count = await prisma.assignee.count({
     *   where: {
     *     // ... the filter for the Assignees we want to count
     *   }
     * })
    **/
    count<T extends AssigneeCountArgs>(
      args?: Subset<T, AssigneeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AssigneeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Assignee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssigneeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AssigneeAggregateArgs>(args: Subset<T, AssigneeAggregateArgs>): Prisma.PrismaPromise<GetAssigneeAggregateType<T>>

    /**
     * Group by Assignee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssigneeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AssigneeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AssigneeGroupByArgs['orderBy'] }
        : { orderBy?: AssigneeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AssigneeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssigneeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Assignee model
   */
  readonly fields: AssigneeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Assignee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AssigneeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Assignee$usersArgs<ExtArgs> = {}>(args?: Subset<T, Assignee$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssigneeUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    taskStatuses<T extends Assignee$taskStatusesArgs<ExtArgs> = {}>(args?: Subset<T, Assignee$taskStatusesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssigneeTaskStatusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    messages<T extends Assignee$messagesArgs<ExtArgs> = {}>(args?: Subset<T, Assignee$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Assignee model
   */
  interface AssigneeFieldRefs {
    readonly id: FieldRef<"Assignee", 'Int'>
    readonly name: FieldRef<"Assignee", 'String'>
    readonly color: FieldRef<"Assignee", 'String'>
    readonly createdAt: FieldRef<"Assignee", 'DateTime'>
    readonly createdBy: FieldRef<"Assignee", 'Int'>
    readonly updatedAt: FieldRef<"Assignee", 'DateTime'>
    readonly updatedBy: FieldRef<"Assignee", 'Int'>
    readonly deletedAt: FieldRef<"Assignee", 'DateTime'>
    readonly deletedBy: FieldRef<"Assignee", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Assignee findUnique
   */
  export type AssigneeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignee
     */
    select?: AssigneeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignee
     */
    omit?: AssigneeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssigneeInclude<ExtArgs> | null
    /**
     * Filter, which Assignee to fetch.
     */
    where: AssigneeWhereUniqueInput
  }

  /**
   * Assignee findUniqueOrThrow
   */
  export type AssigneeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignee
     */
    select?: AssigneeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignee
     */
    omit?: AssigneeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssigneeInclude<ExtArgs> | null
    /**
     * Filter, which Assignee to fetch.
     */
    where: AssigneeWhereUniqueInput
  }

  /**
   * Assignee findFirst
   */
  export type AssigneeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignee
     */
    select?: AssigneeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignee
     */
    omit?: AssigneeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssigneeInclude<ExtArgs> | null
    /**
     * Filter, which Assignee to fetch.
     */
    where?: AssigneeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assignees to fetch.
     */
    orderBy?: AssigneeOrderByWithRelationInput | AssigneeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Assignees.
     */
    cursor?: AssigneeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assignees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assignees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assignees.
     */
    distinct?: AssigneeScalarFieldEnum | AssigneeScalarFieldEnum[]
  }

  /**
   * Assignee findFirstOrThrow
   */
  export type AssigneeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignee
     */
    select?: AssigneeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignee
     */
    omit?: AssigneeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssigneeInclude<ExtArgs> | null
    /**
     * Filter, which Assignee to fetch.
     */
    where?: AssigneeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assignees to fetch.
     */
    orderBy?: AssigneeOrderByWithRelationInput | AssigneeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Assignees.
     */
    cursor?: AssigneeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assignees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assignees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assignees.
     */
    distinct?: AssigneeScalarFieldEnum | AssigneeScalarFieldEnum[]
  }

  /**
   * Assignee findMany
   */
  export type AssigneeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignee
     */
    select?: AssigneeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignee
     */
    omit?: AssigneeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssigneeInclude<ExtArgs> | null
    /**
     * Filter, which Assignees to fetch.
     */
    where?: AssigneeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assignees to fetch.
     */
    orderBy?: AssigneeOrderByWithRelationInput | AssigneeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Assignees.
     */
    cursor?: AssigneeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assignees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assignees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assignees.
     */
    distinct?: AssigneeScalarFieldEnum | AssigneeScalarFieldEnum[]
  }

  /**
   * Assignee create
   */
  export type AssigneeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignee
     */
    select?: AssigneeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignee
     */
    omit?: AssigneeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssigneeInclude<ExtArgs> | null
    /**
     * The data needed to create a Assignee.
     */
    data: XOR<AssigneeCreateInput, AssigneeUncheckedCreateInput>
  }

  /**
   * Assignee createMany
   */
  export type AssigneeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Assignees.
     */
    data: AssigneeCreateManyInput | AssigneeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Assignee createManyAndReturn
   */
  export type AssigneeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignee
     */
    select?: AssigneeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Assignee
     */
    omit?: AssigneeOmit<ExtArgs> | null
    /**
     * The data used to create many Assignees.
     */
    data: AssigneeCreateManyInput | AssigneeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Assignee update
   */
  export type AssigneeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignee
     */
    select?: AssigneeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignee
     */
    omit?: AssigneeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssigneeInclude<ExtArgs> | null
    /**
     * The data needed to update a Assignee.
     */
    data: XOR<AssigneeUpdateInput, AssigneeUncheckedUpdateInput>
    /**
     * Choose, which Assignee to update.
     */
    where: AssigneeWhereUniqueInput
  }

  /**
   * Assignee updateMany
   */
  export type AssigneeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Assignees.
     */
    data: XOR<AssigneeUpdateManyMutationInput, AssigneeUncheckedUpdateManyInput>
    /**
     * Filter which Assignees to update
     */
    where?: AssigneeWhereInput
    /**
     * Limit how many Assignees to update.
     */
    limit?: number
  }

  /**
   * Assignee updateManyAndReturn
   */
  export type AssigneeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignee
     */
    select?: AssigneeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Assignee
     */
    omit?: AssigneeOmit<ExtArgs> | null
    /**
     * The data used to update Assignees.
     */
    data: XOR<AssigneeUpdateManyMutationInput, AssigneeUncheckedUpdateManyInput>
    /**
     * Filter which Assignees to update
     */
    where?: AssigneeWhereInput
    /**
     * Limit how many Assignees to update.
     */
    limit?: number
  }

  /**
   * Assignee upsert
   */
  export type AssigneeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignee
     */
    select?: AssigneeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignee
     */
    omit?: AssigneeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssigneeInclude<ExtArgs> | null
    /**
     * The filter to search for the Assignee to update in case it exists.
     */
    where: AssigneeWhereUniqueInput
    /**
     * In case the Assignee found by the `where` argument doesn't exist, create a new Assignee with this data.
     */
    create: XOR<AssigneeCreateInput, AssigneeUncheckedCreateInput>
    /**
     * In case the Assignee was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AssigneeUpdateInput, AssigneeUncheckedUpdateInput>
  }

  /**
   * Assignee delete
   */
  export type AssigneeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignee
     */
    select?: AssigneeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignee
     */
    omit?: AssigneeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssigneeInclude<ExtArgs> | null
    /**
     * Filter which Assignee to delete.
     */
    where: AssigneeWhereUniqueInput
  }

  /**
   * Assignee deleteMany
   */
  export type AssigneeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Assignees to delete
     */
    where?: AssigneeWhereInput
    /**
     * Limit how many Assignees to delete.
     */
    limit?: number
  }

  /**
   * Assignee.users
   */
  export type Assignee$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssigneeUser
     */
    select?: AssigneeUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssigneeUser
     */
    omit?: AssigneeUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssigneeUserInclude<ExtArgs> | null
    where?: AssigneeUserWhereInput
    orderBy?: AssigneeUserOrderByWithRelationInput | AssigneeUserOrderByWithRelationInput[]
    cursor?: AssigneeUserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssigneeUserScalarFieldEnum | AssigneeUserScalarFieldEnum[]
  }

  /**
   * Assignee.taskStatuses
   */
  export type Assignee$taskStatusesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssigneeTaskStatus
     */
    select?: AssigneeTaskStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssigneeTaskStatus
     */
    omit?: AssigneeTaskStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssigneeTaskStatusInclude<ExtArgs> | null
    where?: AssigneeTaskStatusWhereInput
    orderBy?: AssigneeTaskStatusOrderByWithRelationInput | AssigneeTaskStatusOrderByWithRelationInput[]
    cursor?: AssigneeTaskStatusWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssigneeTaskStatusScalarFieldEnum | AssigneeTaskStatusScalarFieldEnum[]
  }

  /**
   * Assignee.messages
   */
  export type Assignee$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Assignee without action
   */
  export type AssigneeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignee
     */
    select?: AssigneeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignee
     */
    omit?: AssigneeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssigneeInclude<ExtArgs> | null
  }


  /**
   * Model AssigneeTaskStatus
   */

  export type AggregateAssigneeTaskStatus = {
    _count: AssigneeTaskStatusCountAggregateOutputType | null
    _avg: AssigneeTaskStatusAvgAggregateOutputType | null
    _sum: AssigneeTaskStatusSumAggregateOutputType | null
    _min: AssigneeTaskStatusMinAggregateOutputType | null
    _max: AssigneeTaskStatusMaxAggregateOutputType | null
  }

  export type AssigneeTaskStatusAvgAggregateOutputType = {
    taskId: number | null
    assigneeId: number | null
    statusId: number | null
  }

  export type AssigneeTaskStatusSumAggregateOutputType = {
    taskId: number | null
    assigneeId: number | null
    statusId: number | null
  }

  export type AssigneeTaskStatusMinAggregateOutputType = {
    taskId: number | null
    assigneeId: number | null
    statusId: number | null
  }

  export type AssigneeTaskStatusMaxAggregateOutputType = {
    taskId: number | null
    assigneeId: number | null
    statusId: number | null
  }

  export type AssigneeTaskStatusCountAggregateOutputType = {
    taskId: number
    assigneeId: number
    statusId: number
    _all: number
  }


  export type AssigneeTaskStatusAvgAggregateInputType = {
    taskId?: true
    assigneeId?: true
    statusId?: true
  }

  export type AssigneeTaskStatusSumAggregateInputType = {
    taskId?: true
    assigneeId?: true
    statusId?: true
  }

  export type AssigneeTaskStatusMinAggregateInputType = {
    taskId?: true
    assigneeId?: true
    statusId?: true
  }

  export type AssigneeTaskStatusMaxAggregateInputType = {
    taskId?: true
    assigneeId?: true
    statusId?: true
  }

  export type AssigneeTaskStatusCountAggregateInputType = {
    taskId?: true
    assigneeId?: true
    statusId?: true
    _all?: true
  }

  export type AssigneeTaskStatusAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AssigneeTaskStatus to aggregate.
     */
    where?: AssigneeTaskStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssigneeTaskStatuses to fetch.
     */
    orderBy?: AssigneeTaskStatusOrderByWithRelationInput | AssigneeTaskStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AssigneeTaskStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssigneeTaskStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssigneeTaskStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AssigneeTaskStatuses
    **/
    _count?: true | AssigneeTaskStatusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AssigneeTaskStatusAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AssigneeTaskStatusSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AssigneeTaskStatusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AssigneeTaskStatusMaxAggregateInputType
  }

  export type GetAssigneeTaskStatusAggregateType<T extends AssigneeTaskStatusAggregateArgs> = {
        [P in keyof T & keyof AggregateAssigneeTaskStatus]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAssigneeTaskStatus[P]>
      : GetScalarType<T[P], AggregateAssigneeTaskStatus[P]>
  }




  export type AssigneeTaskStatusGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssigneeTaskStatusWhereInput
    orderBy?: AssigneeTaskStatusOrderByWithAggregationInput | AssigneeTaskStatusOrderByWithAggregationInput[]
    by: AssigneeTaskStatusScalarFieldEnum[] | AssigneeTaskStatusScalarFieldEnum
    having?: AssigneeTaskStatusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AssigneeTaskStatusCountAggregateInputType | true
    _avg?: AssigneeTaskStatusAvgAggregateInputType
    _sum?: AssigneeTaskStatusSumAggregateInputType
    _min?: AssigneeTaskStatusMinAggregateInputType
    _max?: AssigneeTaskStatusMaxAggregateInputType
  }

  export type AssigneeTaskStatusGroupByOutputType = {
    taskId: number
    assigneeId: number
    statusId: number
    _count: AssigneeTaskStatusCountAggregateOutputType | null
    _avg: AssigneeTaskStatusAvgAggregateOutputType | null
    _sum: AssigneeTaskStatusSumAggregateOutputType | null
    _min: AssigneeTaskStatusMinAggregateOutputType | null
    _max: AssigneeTaskStatusMaxAggregateOutputType | null
  }

  type GetAssigneeTaskStatusGroupByPayload<T extends AssigneeTaskStatusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AssigneeTaskStatusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AssigneeTaskStatusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AssigneeTaskStatusGroupByOutputType[P]>
            : GetScalarType<T[P], AssigneeTaskStatusGroupByOutputType[P]>
        }
      >
    >


  export type AssigneeTaskStatusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    taskId?: boolean
    assigneeId?: boolean
    statusId?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
    assignee?: boolean | AssigneeDefaultArgs<ExtArgs>
    status?: boolean | WorkspaceStatusDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assigneeTaskStatus"]>

  export type AssigneeTaskStatusSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    taskId?: boolean
    assigneeId?: boolean
    statusId?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
    assignee?: boolean | AssigneeDefaultArgs<ExtArgs>
    status?: boolean | WorkspaceStatusDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assigneeTaskStatus"]>

  export type AssigneeTaskStatusSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    taskId?: boolean
    assigneeId?: boolean
    statusId?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
    assignee?: boolean | AssigneeDefaultArgs<ExtArgs>
    status?: boolean | WorkspaceStatusDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assigneeTaskStatus"]>

  export type AssigneeTaskStatusSelectScalar = {
    taskId?: boolean
    assigneeId?: boolean
    statusId?: boolean
  }

  export type AssigneeTaskStatusOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"taskId" | "assigneeId" | "statusId", ExtArgs["result"]["assigneeTaskStatus"]>
  export type AssigneeTaskStatusInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
    assignee?: boolean | AssigneeDefaultArgs<ExtArgs>
    status?: boolean | WorkspaceStatusDefaultArgs<ExtArgs>
  }
  export type AssigneeTaskStatusIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
    assignee?: boolean | AssigneeDefaultArgs<ExtArgs>
    status?: boolean | WorkspaceStatusDefaultArgs<ExtArgs>
  }
  export type AssigneeTaskStatusIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
    assignee?: boolean | AssigneeDefaultArgs<ExtArgs>
    status?: boolean | WorkspaceStatusDefaultArgs<ExtArgs>
  }

  export type $AssigneeTaskStatusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AssigneeTaskStatus"
    objects: {
      task: Prisma.$TaskPayload<ExtArgs>
      assignee: Prisma.$AssigneePayload<ExtArgs>
      status: Prisma.$WorkspaceStatusPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      taskId: number
      assigneeId: number
      statusId: number
    }, ExtArgs["result"]["assigneeTaskStatus"]>
    composites: {}
  }

  type AssigneeTaskStatusGetPayload<S extends boolean | null | undefined | AssigneeTaskStatusDefaultArgs> = $Result.GetResult<Prisma.$AssigneeTaskStatusPayload, S>

  type AssigneeTaskStatusCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AssigneeTaskStatusFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AssigneeTaskStatusCountAggregateInputType | true
    }

  export interface AssigneeTaskStatusDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AssigneeTaskStatus'], meta: { name: 'AssigneeTaskStatus' } }
    /**
     * Find zero or one AssigneeTaskStatus that matches the filter.
     * @param {AssigneeTaskStatusFindUniqueArgs} args - Arguments to find a AssigneeTaskStatus
     * @example
     * // Get one AssigneeTaskStatus
     * const assigneeTaskStatus = await prisma.assigneeTaskStatus.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AssigneeTaskStatusFindUniqueArgs>(args: SelectSubset<T, AssigneeTaskStatusFindUniqueArgs<ExtArgs>>): Prisma__AssigneeTaskStatusClient<$Result.GetResult<Prisma.$AssigneeTaskStatusPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AssigneeTaskStatus that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AssigneeTaskStatusFindUniqueOrThrowArgs} args - Arguments to find a AssigneeTaskStatus
     * @example
     * // Get one AssigneeTaskStatus
     * const assigneeTaskStatus = await prisma.assigneeTaskStatus.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AssigneeTaskStatusFindUniqueOrThrowArgs>(args: SelectSubset<T, AssigneeTaskStatusFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AssigneeTaskStatusClient<$Result.GetResult<Prisma.$AssigneeTaskStatusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AssigneeTaskStatus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssigneeTaskStatusFindFirstArgs} args - Arguments to find a AssigneeTaskStatus
     * @example
     * // Get one AssigneeTaskStatus
     * const assigneeTaskStatus = await prisma.assigneeTaskStatus.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AssigneeTaskStatusFindFirstArgs>(args?: SelectSubset<T, AssigneeTaskStatusFindFirstArgs<ExtArgs>>): Prisma__AssigneeTaskStatusClient<$Result.GetResult<Prisma.$AssigneeTaskStatusPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AssigneeTaskStatus that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssigneeTaskStatusFindFirstOrThrowArgs} args - Arguments to find a AssigneeTaskStatus
     * @example
     * // Get one AssigneeTaskStatus
     * const assigneeTaskStatus = await prisma.assigneeTaskStatus.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AssigneeTaskStatusFindFirstOrThrowArgs>(args?: SelectSubset<T, AssigneeTaskStatusFindFirstOrThrowArgs<ExtArgs>>): Prisma__AssigneeTaskStatusClient<$Result.GetResult<Prisma.$AssigneeTaskStatusPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AssigneeTaskStatuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssigneeTaskStatusFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AssigneeTaskStatuses
     * const assigneeTaskStatuses = await prisma.assigneeTaskStatus.findMany()
     * 
     * // Get first 10 AssigneeTaskStatuses
     * const assigneeTaskStatuses = await prisma.assigneeTaskStatus.findMany({ take: 10 })
     * 
     * // Only select the `taskId`
     * const assigneeTaskStatusWithTaskIdOnly = await prisma.assigneeTaskStatus.findMany({ select: { taskId: true } })
     * 
     */
    findMany<T extends AssigneeTaskStatusFindManyArgs>(args?: SelectSubset<T, AssigneeTaskStatusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssigneeTaskStatusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AssigneeTaskStatus.
     * @param {AssigneeTaskStatusCreateArgs} args - Arguments to create a AssigneeTaskStatus.
     * @example
     * // Create one AssigneeTaskStatus
     * const AssigneeTaskStatus = await prisma.assigneeTaskStatus.create({
     *   data: {
     *     // ... data to create a AssigneeTaskStatus
     *   }
     * })
     * 
     */
    create<T extends AssigneeTaskStatusCreateArgs>(args: SelectSubset<T, AssigneeTaskStatusCreateArgs<ExtArgs>>): Prisma__AssigneeTaskStatusClient<$Result.GetResult<Prisma.$AssigneeTaskStatusPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AssigneeTaskStatuses.
     * @param {AssigneeTaskStatusCreateManyArgs} args - Arguments to create many AssigneeTaskStatuses.
     * @example
     * // Create many AssigneeTaskStatuses
     * const assigneeTaskStatus = await prisma.assigneeTaskStatus.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AssigneeTaskStatusCreateManyArgs>(args?: SelectSubset<T, AssigneeTaskStatusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AssigneeTaskStatuses and returns the data saved in the database.
     * @param {AssigneeTaskStatusCreateManyAndReturnArgs} args - Arguments to create many AssigneeTaskStatuses.
     * @example
     * // Create many AssigneeTaskStatuses
     * const assigneeTaskStatus = await prisma.assigneeTaskStatus.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AssigneeTaskStatuses and only return the `taskId`
     * const assigneeTaskStatusWithTaskIdOnly = await prisma.assigneeTaskStatus.createManyAndReturn({
     *   select: { taskId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AssigneeTaskStatusCreateManyAndReturnArgs>(args?: SelectSubset<T, AssigneeTaskStatusCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssigneeTaskStatusPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AssigneeTaskStatus.
     * @param {AssigneeTaskStatusDeleteArgs} args - Arguments to delete one AssigneeTaskStatus.
     * @example
     * // Delete one AssigneeTaskStatus
     * const AssigneeTaskStatus = await prisma.assigneeTaskStatus.delete({
     *   where: {
     *     // ... filter to delete one AssigneeTaskStatus
     *   }
     * })
     * 
     */
    delete<T extends AssigneeTaskStatusDeleteArgs>(args: SelectSubset<T, AssigneeTaskStatusDeleteArgs<ExtArgs>>): Prisma__AssigneeTaskStatusClient<$Result.GetResult<Prisma.$AssigneeTaskStatusPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AssigneeTaskStatus.
     * @param {AssigneeTaskStatusUpdateArgs} args - Arguments to update one AssigneeTaskStatus.
     * @example
     * // Update one AssigneeTaskStatus
     * const assigneeTaskStatus = await prisma.assigneeTaskStatus.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AssigneeTaskStatusUpdateArgs>(args: SelectSubset<T, AssigneeTaskStatusUpdateArgs<ExtArgs>>): Prisma__AssigneeTaskStatusClient<$Result.GetResult<Prisma.$AssigneeTaskStatusPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AssigneeTaskStatuses.
     * @param {AssigneeTaskStatusDeleteManyArgs} args - Arguments to filter AssigneeTaskStatuses to delete.
     * @example
     * // Delete a few AssigneeTaskStatuses
     * const { count } = await prisma.assigneeTaskStatus.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AssigneeTaskStatusDeleteManyArgs>(args?: SelectSubset<T, AssigneeTaskStatusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AssigneeTaskStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssigneeTaskStatusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AssigneeTaskStatuses
     * const assigneeTaskStatus = await prisma.assigneeTaskStatus.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AssigneeTaskStatusUpdateManyArgs>(args: SelectSubset<T, AssigneeTaskStatusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AssigneeTaskStatuses and returns the data updated in the database.
     * @param {AssigneeTaskStatusUpdateManyAndReturnArgs} args - Arguments to update many AssigneeTaskStatuses.
     * @example
     * // Update many AssigneeTaskStatuses
     * const assigneeTaskStatus = await prisma.assigneeTaskStatus.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AssigneeTaskStatuses and only return the `taskId`
     * const assigneeTaskStatusWithTaskIdOnly = await prisma.assigneeTaskStatus.updateManyAndReturn({
     *   select: { taskId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AssigneeTaskStatusUpdateManyAndReturnArgs>(args: SelectSubset<T, AssigneeTaskStatusUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssigneeTaskStatusPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AssigneeTaskStatus.
     * @param {AssigneeTaskStatusUpsertArgs} args - Arguments to update or create a AssigneeTaskStatus.
     * @example
     * // Update or create a AssigneeTaskStatus
     * const assigneeTaskStatus = await prisma.assigneeTaskStatus.upsert({
     *   create: {
     *     // ... data to create a AssigneeTaskStatus
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AssigneeTaskStatus we want to update
     *   }
     * })
     */
    upsert<T extends AssigneeTaskStatusUpsertArgs>(args: SelectSubset<T, AssigneeTaskStatusUpsertArgs<ExtArgs>>): Prisma__AssigneeTaskStatusClient<$Result.GetResult<Prisma.$AssigneeTaskStatusPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AssigneeTaskStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssigneeTaskStatusCountArgs} args - Arguments to filter AssigneeTaskStatuses to count.
     * @example
     * // Count the number of AssigneeTaskStatuses
     * const count = await prisma.assigneeTaskStatus.count({
     *   where: {
     *     // ... the filter for the AssigneeTaskStatuses we want to count
     *   }
     * })
    **/
    count<T extends AssigneeTaskStatusCountArgs>(
      args?: Subset<T, AssigneeTaskStatusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AssigneeTaskStatusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AssigneeTaskStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssigneeTaskStatusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AssigneeTaskStatusAggregateArgs>(args: Subset<T, AssigneeTaskStatusAggregateArgs>): Prisma.PrismaPromise<GetAssigneeTaskStatusAggregateType<T>>

    /**
     * Group by AssigneeTaskStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssigneeTaskStatusGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AssigneeTaskStatusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AssigneeTaskStatusGroupByArgs['orderBy'] }
        : { orderBy?: AssigneeTaskStatusGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AssigneeTaskStatusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssigneeTaskStatusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AssigneeTaskStatus model
   */
  readonly fields: AssigneeTaskStatusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AssigneeTaskStatus.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AssigneeTaskStatusClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    task<T extends TaskDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TaskDefaultArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    assignee<T extends AssigneeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AssigneeDefaultArgs<ExtArgs>>): Prisma__AssigneeClient<$Result.GetResult<Prisma.$AssigneePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    status<T extends WorkspaceStatusDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkspaceStatusDefaultArgs<ExtArgs>>): Prisma__WorkspaceStatusClient<$Result.GetResult<Prisma.$WorkspaceStatusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AssigneeTaskStatus model
   */
  interface AssigneeTaskStatusFieldRefs {
    readonly taskId: FieldRef<"AssigneeTaskStatus", 'Int'>
    readonly assigneeId: FieldRef<"AssigneeTaskStatus", 'Int'>
    readonly statusId: FieldRef<"AssigneeTaskStatus", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * AssigneeTaskStatus findUnique
   */
  export type AssigneeTaskStatusFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssigneeTaskStatus
     */
    select?: AssigneeTaskStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssigneeTaskStatus
     */
    omit?: AssigneeTaskStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssigneeTaskStatusInclude<ExtArgs> | null
    /**
     * Filter, which AssigneeTaskStatus to fetch.
     */
    where: AssigneeTaskStatusWhereUniqueInput
  }

  /**
   * AssigneeTaskStatus findUniqueOrThrow
   */
  export type AssigneeTaskStatusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssigneeTaskStatus
     */
    select?: AssigneeTaskStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssigneeTaskStatus
     */
    omit?: AssigneeTaskStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssigneeTaskStatusInclude<ExtArgs> | null
    /**
     * Filter, which AssigneeTaskStatus to fetch.
     */
    where: AssigneeTaskStatusWhereUniqueInput
  }

  /**
   * AssigneeTaskStatus findFirst
   */
  export type AssigneeTaskStatusFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssigneeTaskStatus
     */
    select?: AssigneeTaskStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssigneeTaskStatus
     */
    omit?: AssigneeTaskStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssigneeTaskStatusInclude<ExtArgs> | null
    /**
     * Filter, which AssigneeTaskStatus to fetch.
     */
    where?: AssigneeTaskStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssigneeTaskStatuses to fetch.
     */
    orderBy?: AssigneeTaskStatusOrderByWithRelationInput | AssigneeTaskStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AssigneeTaskStatuses.
     */
    cursor?: AssigneeTaskStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssigneeTaskStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssigneeTaskStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AssigneeTaskStatuses.
     */
    distinct?: AssigneeTaskStatusScalarFieldEnum | AssigneeTaskStatusScalarFieldEnum[]
  }

  /**
   * AssigneeTaskStatus findFirstOrThrow
   */
  export type AssigneeTaskStatusFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssigneeTaskStatus
     */
    select?: AssigneeTaskStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssigneeTaskStatus
     */
    omit?: AssigneeTaskStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssigneeTaskStatusInclude<ExtArgs> | null
    /**
     * Filter, which AssigneeTaskStatus to fetch.
     */
    where?: AssigneeTaskStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssigneeTaskStatuses to fetch.
     */
    orderBy?: AssigneeTaskStatusOrderByWithRelationInput | AssigneeTaskStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AssigneeTaskStatuses.
     */
    cursor?: AssigneeTaskStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssigneeTaskStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssigneeTaskStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AssigneeTaskStatuses.
     */
    distinct?: AssigneeTaskStatusScalarFieldEnum | AssigneeTaskStatusScalarFieldEnum[]
  }

  /**
   * AssigneeTaskStatus findMany
   */
  export type AssigneeTaskStatusFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssigneeTaskStatus
     */
    select?: AssigneeTaskStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssigneeTaskStatus
     */
    omit?: AssigneeTaskStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssigneeTaskStatusInclude<ExtArgs> | null
    /**
     * Filter, which AssigneeTaskStatuses to fetch.
     */
    where?: AssigneeTaskStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssigneeTaskStatuses to fetch.
     */
    orderBy?: AssigneeTaskStatusOrderByWithRelationInput | AssigneeTaskStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AssigneeTaskStatuses.
     */
    cursor?: AssigneeTaskStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssigneeTaskStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssigneeTaskStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AssigneeTaskStatuses.
     */
    distinct?: AssigneeTaskStatusScalarFieldEnum | AssigneeTaskStatusScalarFieldEnum[]
  }

  /**
   * AssigneeTaskStatus create
   */
  export type AssigneeTaskStatusCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssigneeTaskStatus
     */
    select?: AssigneeTaskStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssigneeTaskStatus
     */
    omit?: AssigneeTaskStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssigneeTaskStatusInclude<ExtArgs> | null
    /**
     * The data needed to create a AssigneeTaskStatus.
     */
    data: XOR<AssigneeTaskStatusCreateInput, AssigneeTaskStatusUncheckedCreateInput>
  }

  /**
   * AssigneeTaskStatus createMany
   */
  export type AssigneeTaskStatusCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AssigneeTaskStatuses.
     */
    data: AssigneeTaskStatusCreateManyInput | AssigneeTaskStatusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AssigneeTaskStatus createManyAndReturn
   */
  export type AssigneeTaskStatusCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssigneeTaskStatus
     */
    select?: AssigneeTaskStatusSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AssigneeTaskStatus
     */
    omit?: AssigneeTaskStatusOmit<ExtArgs> | null
    /**
     * The data used to create many AssigneeTaskStatuses.
     */
    data: AssigneeTaskStatusCreateManyInput | AssigneeTaskStatusCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssigneeTaskStatusIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AssigneeTaskStatus update
   */
  export type AssigneeTaskStatusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssigneeTaskStatus
     */
    select?: AssigneeTaskStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssigneeTaskStatus
     */
    omit?: AssigneeTaskStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssigneeTaskStatusInclude<ExtArgs> | null
    /**
     * The data needed to update a AssigneeTaskStatus.
     */
    data: XOR<AssigneeTaskStatusUpdateInput, AssigneeTaskStatusUncheckedUpdateInput>
    /**
     * Choose, which AssigneeTaskStatus to update.
     */
    where: AssigneeTaskStatusWhereUniqueInput
  }

  /**
   * AssigneeTaskStatus updateMany
   */
  export type AssigneeTaskStatusUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AssigneeTaskStatuses.
     */
    data: XOR<AssigneeTaskStatusUpdateManyMutationInput, AssigneeTaskStatusUncheckedUpdateManyInput>
    /**
     * Filter which AssigneeTaskStatuses to update
     */
    where?: AssigneeTaskStatusWhereInput
    /**
     * Limit how many AssigneeTaskStatuses to update.
     */
    limit?: number
  }

  /**
   * AssigneeTaskStatus updateManyAndReturn
   */
  export type AssigneeTaskStatusUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssigneeTaskStatus
     */
    select?: AssigneeTaskStatusSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AssigneeTaskStatus
     */
    omit?: AssigneeTaskStatusOmit<ExtArgs> | null
    /**
     * The data used to update AssigneeTaskStatuses.
     */
    data: XOR<AssigneeTaskStatusUpdateManyMutationInput, AssigneeTaskStatusUncheckedUpdateManyInput>
    /**
     * Filter which AssigneeTaskStatuses to update
     */
    where?: AssigneeTaskStatusWhereInput
    /**
     * Limit how many AssigneeTaskStatuses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssigneeTaskStatusIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AssigneeTaskStatus upsert
   */
  export type AssigneeTaskStatusUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssigneeTaskStatus
     */
    select?: AssigneeTaskStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssigneeTaskStatus
     */
    omit?: AssigneeTaskStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssigneeTaskStatusInclude<ExtArgs> | null
    /**
     * The filter to search for the AssigneeTaskStatus to update in case it exists.
     */
    where: AssigneeTaskStatusWhereUniqueInput
    /**
     * In case the AssigneeTaskStatus found by the `where` argument doesn't exist, create a new AssigneeTaskStatus with this data.
     */
    create: XOR<AssigneeTaskStatusCreateInput, AssigneeTaskStatusUncheckedCreateInput>
    /**
     * In case the AssigneeTaskStatus was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AssigneeTaskStatusUpdateInput, AssigneeTaskStatusUncheckedUpdateInput>
  }

  /**
   * AssigneeTaskStatus delete
   */
  export type AssigneeTaskStatusDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssigneeTaskStatus
     */
    select?: AssigneeTaskStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssigneeTaskStatus
     */
    omit?: AssigneeTaskStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssigneeTaskStatusInclude<ExtArgs> | null
    /**
     * Filter which AssigneeTaskStatus to delete.
     */
    where: AssigneeTaskStatusWhereUniqueInput
  }

  /**
   * AssigneeTaskStatus deleteMany
   */
  export type AssigneeTaskStatusDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AssigneeTaskStatuses to delete
     */
    where?: AssigneeTaskStatusWhereInput
    /**
     * Limit how many AssigneeTaskStatuses to delete.
     */
    limit?: number
  }

  /**
   * AssigneeTaskStatus without action
   */
  export type AssigneeTaskStatusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssigneeTaskStatus
     */
    select?: AssigneeTaskStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssigneeTaskStatus
     */
    omit?: AssigneeTaskStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssigneeTaskStatusInclude<ExtArgs> | null
  }


  /**
   * Model AssigneeUser
   */

  export type AggregateAssigneeUser = {
    _count: AssigneeUserCountAggregateOutputType | null
    _avg: AssigneeUserAvgAggregateOutputType | null
    _sum: AssigneeUserSumAggregateOutputType | null
    _min: AssigneeUserMinAggregateOutputType | null
    _max: AssigneeUserMaxAggregateOutputType | null
  }

  export type AssigneeUserAvgAggregateOutputType = {
    assigneeId: number | null
    userId: number | null
  }

  export type AssigneeUserSumAggregateOutputType = {
    assigneeId: number | null
    userId: number | null
  }

  export type AssigneeUserMinAggregateOutputType = {
    assigneeId: number | null
    userId: number | null
  }

  export type AssigneeUserMaxAggregateOutputType = {
    assigneeId: number | null
    userId: number | null
  }

  export type AssigneeUserCountAggregateOutputType = {
    assigneeId: number
    userId: number
    _all: number
  }


  export type AssigneeUserAvgAggregateInputType = {
    assigneeId?: true
    userId?: true
  }

  export type AssigneeUserSumAggregateInputType = {
    assigneeId?: true
    userId?: true
  }

  export type AssigneeUserMinAggregateInputType = {
    assigneeId?: true
    userId?: true
  }

  export type AssigneeUserMaxAggregateInputType = {
    assigneeId?: true
    userId?: true
  }

  export type AssigneeUserCountAggregateInputType = {
    assigneeId?: true
    userId?: true
    _all?: true
  }

  export type AssigneeUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AssigneeUser to aggregate.
     */
    where?: AssigneeUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssigneeUsers to fetch.
     */
    orderBy?: AssigneeUserOrderByWithRelationInput | AssigneeUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AssigneeUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssigneeUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssigneeUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AssigneeUsers
    **/
    _count?: true | AssigneeUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AssigneeUserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AssigneeUserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AssigneeUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AssigneeUserMaxAggregateInputType
  }

  export type GetAssigneeUserAggregateType<T extends AssigneeUserAggregateArgs> = {
        [P in keyof T & keyof AggregateAssigneeUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAssigneeUser[P]>
      : GetScalarType<T[P], AggregateAssigneeUser[P]>
  }




  export type AssigneeUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssigneeUserWhereInput
    orderBy?: AssigneeUserOrderByWithAggregationInput | AssigneeUserOrderByWithAggregationInput[]
    by: AssigneeUserScalarFieldEnum[] | AssigneeUserScalarFieldEnum
    having?: AssigneeUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AssigneeUserCountAggregateInputType | true
    _avg?: AssigneeUserAvgAggregateInputType
    _sum?: AssigneeUserSumAggregateInputType
    _min?: AssigneeUserMinAggregateInputType
    _max?: AssigneeUserMaxAggregateInputType
  }

  export type AssigneeUserGroupByOutputType = {
    assigneeId: number
    userId: number
    _count: AssigneeUserCountAggregateOutputType | null
    _avg: AssigneeUserAvgAggregateOutputType | null
    _sum: AssigneeUserSumAggregateOutputType | null
    _min: AssigneeUserMinAggregateOutputType | null
    _max: AssigneeUserMaxAggregateOutputType | null
  }

  type GetAssigneeUserGroupByPayload<T extends AssigneeUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AssigneeUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AssigneeUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AssigneeUserGroupByOutputType[P]>
            : GetScalarType<T[P], AssigneeUserGroupByOutputType[P]>
        }
      >
    >


  export type AssigneeUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    assigneeId?: boolean
    userId?: boolean
    assignee?: boolean | AssigneeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assigneeUser"]>

  export type AssigneeUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    assigneeId?: boolean
    userId?: boolean
    assignee?: boolean | AssigneeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assigneeUser"]>

  export type AssigneeUserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    assigneeId?: boolean
    userId?: boolean
    assignee?: boolean | AssigneeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assigneeUser"]>

  export type AssigneeUserSelectScalar = {
    assigneeId?: boolean
    userId?: boolean
  }

  export type AssigneeUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"assigneeId" | "userId", ExtArgs["result"]["assigneeUser"]>
  export type AssigneeUserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignee?: boolean | AssigneeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AssigneeUserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignee?: boolean | AssigneeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AssigneeUserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignee?: boolean | AssigneeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AssigneeUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AssigneeUser"
    objects: {
      assignee: Prisma.$AssigneePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      assigneeId: number
      userId: number
    }, ExtArgs["result"]["assigneeUser"]>
    composites: {}
  }

  type AssigneeUserGetPayload<S extends boolean | null | undefined | AssigneeUserDefaultArgs> = $Result.GetResult<Prisma.$AssigneeUserPayload, S>

  type AssigneeUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AssigneeUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AssigneeUserCountAggregateInputType | true
    }

  export interface AssigneeUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AssigneeUser'], meta: { name: 'AssigneeUser' } }
    /**
     * Find zero or one AssigneeUser that matches the filter.
     * @param {AssigneeUserFindUniqueArgs} args - Arguments to find a AssigneeUser
     * @example
     * // Get one AssigneeUser
     * const assigneeUser = await prisma.assigneeUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AssigneeUserFindUniqueArgs>(args: SelectSubset<T, AssigneeUserFindUniqueArgs<ExtArgs>>): Prisma__AssigneeUserClient<$Result.GetResult<Prisma.$AssigneeUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AssigneeUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AssigneeUserFindUniqueOrThrowArgs} args - Arguments to find a AssigneeUser
     * @example
     * // Get one AssigneeUser
     * const assigneeUser = await prisma.assigneeUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AssigneeUserFindUniqueOrThrowArgs>(args: SelectSubset<T, AssigneeUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AssigneeUserClient<$Result.GetResult<Prisma.$AssigneeUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AssigneeUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssigneeUserFindFirstArgs} args - Arguments to find a AssigneeUser
     * @example
     * // Get one AssigneeUser
     * const assigneeUser = await prisma.assigneeUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AssigneeUserFindFirstArgs>(args?: SelectSubset<T, AssigneeUserFindFirstArgs<ExtArgs>>): Prisma__AssigneeUserClient<$Result.GetResult<Prisma.$AssigneeUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AssigneeUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssigneeUserFindFirstOrThrowArgs} args - Arguments to find a AssigneeUser
     * @example
     * // Get one AssigneeUser
     * const assigneeUser = await prisma.assigneeUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AssigneeUserFindFirstOrThrowArgs>(args?: SelectSubset<T, AssigneeUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__AssigneeUserClient<$Result.GetResult<Prisma.$AssigneeUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AssigneeUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssigneeUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AssigneeUsers
     * const assigneeUsers = await prisma.assigneeUser.findMany()
     * 
     * // Get first 10 AssigneeUsers
     * const assigneeUsers = await prisma.assigneeUser.findMany({ take: 10 })
     * 
     * // Only select the `assigneeId`
     * const assigneeUserWithAssigneeIdOnly = await prisma.assigneeUser.findMany({ select: { assigneeId: true } })
     * 
     */
    findMany<T extends AssigneeUserFindManyArgs>(args?: SelectSubset<T, AssigneeUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssigneeUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AssigneeUser.
     * @param {AssigneeUserCreateArgs} args - Arguments to create a AssigneeUser.
     * @example
     * // Create one AssigneeUser
     * const AssigneeUser = await prisma.assigneeUser.create({
     *   data: {
     *     // ... data to create a AssigneeUser
     *   }
     * })
     * 
     */
    create<T extends AssigneeUserCreateArgs>(args: SelectSubset<T, AssigneeUserCreateArgs<ExtArgs>>): Prisma__AssigneeUserClient<$Result.GetResult<Prisma.$AssigneeUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AssigneeUsers.
     * @param {AssigneeUserCreateManyArgs} args - Arguments to create many AssigneeUsers.
     * @example
     * // Create many AssigneeUsers
     * const assigneeUser = await prisma.assigneeUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AssigneeUserCreateManyArgs>(args?: SelectSubset<T, AssigneeUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AssigneeUsers and returns the data saved in the database.
     * @param {AssigneeUserCreateManyAndReturnArgs} args - Arguments to create many AssigneeUsers.
     * @example
     * // Create many AssigneeUsers
     * const assigneeUser = await prisma.assigneeUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AssigneeUsers and only return the `assigneeId`
     * const assigneeUserWithAssigneeIdOnly = await prisma.assigneeUser.createManyAndReturn({
     *   select: { assigneeId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AssigneeUserCreateManyAndReturnArgs>(args?: SelectSubset<T, AssigneeUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssigneeUserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AssigneeUser.
     * @param {AssigneeUserDeleteArgs} args - Arguments to delete one AssigneeUser.
     * @example
     * // Delete one AssigneeUser
     * const AssigneeUser = await prisma.assigneeUser.delete({
     *   where: {
     *     // ... filter to delete one AssigneeUser
     *   }
     * })
     * 
     */
    delete<T extends AssigneeUserDeleteArgs>(args: SelectSubset<T, AssigneeUserDeleteArgs<ExtArgs>>): Prisma__AssigneeUserClient<$Result.GetResult<Prisma.$AssigneeUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AssigneeUser.
     * @param {AssigneeUserUpdateArgs} args - Arguments to update one AssigneeUser.
     * @example
     * // Update one AssigneeUser
     * const assigneeUser = await prisma.assigneeUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AssigneeUserUpdateArgs>(args: SelectSubset<T, AssigneeUserUpdateArgs<ExtArgs>>): Prisma__AssigneeUserClient<$Result.GetResult<Prisma.$AssigneeUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AssigneeUsers.
     * @param {AssigneeUserDeleteManyArgs} args - Arguments to filter AssigneeUsers to delete.
     * @example
     * // Delete a few AssigneeUsers
     * const { count } = await prisma.assigneeUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AssigneeUserDeleteManyArgs>(args?: SelectSubset<T, AssigneeUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AssigneeUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssigneeUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AssigneeUsers
     * const assigneeUser = await prisma.assigneeUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AssigneeUserUpdateManyArgs>(args: SelectSubset<T, AssigneeUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AssigneeUsers and returns the data updated in the database.
     * @param {AssigneeUserUpdateManyAndReturnArgs} args - Arguments to update many AssigneeUsers.
     * @example
     * // Update many AssigneeUsers
     * const assigneeUser = await prisma.assigneeUser.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AssigneeUsers and only return the `assigneeId`
     * const assigneeUserWithAssigneeIdOnly = await prisma.assigneeUser.updateManyAndReturn({
     *   select: { assigneeId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AssigneeUserUpdateManyAndReturnArgs>(args: SelectSubset<T, AssigneeUserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssigneeUserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AssigneeUser.
     * @param {AssigneeUserUpsertArgs} args - Arguments to update or create a AssigneeUser.
     * @example
     * // Update or create a AssigneeUser
     * const assigneeUser = await prisma.assigneeUser.upsert({
     *   create: {
     *     // ... data to create a AssigneeUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AssigneeUser we want to update
     *   }
     * })
     */
    upsert<T extends AssigneeUserUpsertArgs>(args: SelectSubset<T, AssigneeUserUpsertArgs<ExtArgs>>): Prisma__AssigneeUserClient<$Result.GetResult<Prisma.$AssigneeUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AssigneeUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssigneeUserCountArgs} args - Arguments to filter AssigneeUsers to count.
     * @example
     * // Count the number of AssigneeUsers
     * const count = await prisma.assigneeUser.count({
     *   where: {
     *     // ... the filter for the AssigneeUsers we want to count
     *   }
     * })
    **/
    count<T extends AssigneeUserCountArgs>(
      args?: Subset<T, AssigneeUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AssigneeUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AssigneeUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssigneeUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AssigneeUserAggregateArgs>(args: Subset<T, AssigneeUserAggregateArgs>): Prisma.PrismaPromise<GetAssigneeUserAggregateType<T>>

    /**
     * Group by AssigneeUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssigneeUserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AssigneeUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AssigneeUserGroupByArgs['orderBy'] }
        : { orderBy?: AssigneeUserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AssigneeUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssigneeUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AssigneeUser model
   */
  readonly fields: AssigneeUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AssigneeUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AssigneeUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    assignee<T extends AssigneeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AssigneeDefaultArgs<ExtArgs>>): Prisma__AssigneeClient<$Result.GetResult<Prisma.$AssigneePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AssigneeUser model
   */
  interface AssigneeUserFieldRefs {
    readonly assigneeId: FieldRef<"AssigneeUser", 'Int'>
    readonly userId: FieldRef<"AssigneeUser", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * AssigneeUser findUnique
   */
  export type AssigneeUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssigneeUser
     */
    select?: AssigneeUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssigneeUser
     */
    omit?: AssigneeUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssigneeUserInclude<ExtArgs> | null
    /**
     * Filter, which AssigneeUser to fetch.
     */
    where: AssigneeUserWhereUniqueInput
  }

  /**
   * AssigneeUser findUniqueOrThrow
   */
  export type AssigneeUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssigneeUser
     */
    select?: AssigneeUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssigneeUser
     */
    omit?: AssigneeUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssigneeUserInclude<ExtArgs> | null
    /**
     * Filter, which AssigneeUser to fetch.
     */
    where: AssigneeUserWhereUniqueInput
  }

  /**
   * AssigneeUser findFirst
   */
  export type AssigneeUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssigneeUser
     */
    select?: AssigneeUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssigneeUser
     */
    omit?: AssigneeUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssigneeUserInclude<ExtArgs> | null
    /**
     * Filter, which AssigneeUser to fetch.
     */
    where?: AssigneeUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssigneeUsers to fetch.
     */
    orderBy?: AssigneeUserOrderByWithRelationInput | AssigneeUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AssigneeUsers.
     */
    cursor?: AssigneeUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssigneeUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssigneeUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AssigneeUsers.
     */
    distinct?: AssigneeUserScalarFieldEnum | AssigneeUserScalarFieldEnum[]
  }

  /**
   * AssigneeUser findFirstOrThrow
   */
  export type AssigneeUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssigneeUser
     */
    select?: AssigneeUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssigneeUser
     */
    omit?: AssigneeUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssigneeUserInclude<ExtArgs> | null
    /**
     * Filter, which AssigneeUser to fetch.
     */
    where?: AssigneeUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssigneeUsers to fetch.
     */
    orderBy?: AssigneeUserOrderByWithRelationInput | AssigneeUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AssigneeUsers.
     */
    cursor?: AssigneeUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssigneeUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssigneeUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AssigneeUsers.
     */
    distinct?: AssigneeUserScalarFieldEnum | AssigneeUserScalarFieldEnum[]
  }

  /**
   * AssigneeUser findMany
   */
  export type AssigneeUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssigneeUser
     */
    select?: AssigneeUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssigneeUser
     */
    omit?: AssigneeUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssigneeUserInclude<ExtArgs> | null
    /**
     * Filter, which AssigneeUsers to fetch.
     */
    where?: AssigneeUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssigneeUsers to fetch.
     */
    orderBy?: AssigneeUserOrderByWithRelationInput | AssigneeUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AssigneeUsers.
     */
    cursor?: AssigneeUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssigneeUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssigneeUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AssigneeUsers.
     */
    distinct?: AssigneeUserScalarFieldEnum | AssigneeUserScalarFieldEnum[]
  }

  /**
   * AssigneeUser create
   */
  export type AssigneeUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssigneeUser
     */
    select?: AssigneeUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssigneeUser
     */
    omit?: AssigneeUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssigneeUserInclude<ExtArgs> | null
    /**
     * The data needed to create a AssigneeUser.
     */
    data: XOR<AssigneeUserCreateInput, AssigneeUserUncheckedCreateInput>
  }

  /**
   * AssigneeUser createMany
   */
  export type AssigneeUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AssigneeUsers.
     */
    data: AssigneeUserCreateManyInput | AssigneeUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AssigneeUser createManyAndReturn
   */
  export type AssigneeUserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssigneeUser
     */
    select?: AssigneeUserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AssigneeUser
     */
    omit?: AssigneeUserOmit<ExtArgs> | null
    /**
     * The data used to create many AssigneeUsers.
     */
    data: AssigneeUserCreateManyInput | AssigneeUserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssigneeUserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AssigneeUser update
   */
  export type AssigneeUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssigneeUser
     */
    select?: AssigneeUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssigneeUser
     */
    omit?: AssigneeUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssigneeUserInclude<ExtArgs> | null
    /**
     * The data needed to update a AssigneeUser.
     */
    data: XOR<AssigneeUserUpdateInput, AssigneeUserUncheckedUpdateInput>
    /**
     * Choose, which AssigneeUser to update.
     */
    where: AssigneeUserWhereUniqueInput
  }

  /**
   * AssigneeUser updateMany
   */
  export type AssigneeUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AssigneeUsers.
     */
    data: XOR<AssigneeUserUpdateManyMutationInput, AssigneeUserUncheckedUpdateManyInput>
    /**
     * Filter which AssigneeUsers to update
     */
    where?: AssigneeUserWhereInput
    /**
     * Limit how many AssigneeUsers to update.
     */
    limit?: number
  }

  /**
   * AssigneeUser updateManyAndReturn
   */
  export type AssigneeUserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssigneeUser
     */
    select?: AssigneeUserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AssigneeUser
     */
    omit?: AssigneeUserOmit<ExtArgs> | null
    /**
     * The data used to update AssigneeUsers.
     */
    data: XOR<AssigneeUserUpdateManyMutationInput, AssigneeUserUncheckedUpdateManyInput>
    /**
     * Filter which AssigneeUsers to update
     */
    where?: AssigneeUserWhereInput
    /**
     * Limit how many AssigneeUsers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssigneeUserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AssigneeUser upsert
   */
  export type AssigneeUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssigneeUser
     */
    select?: AssigneeUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssigneeUser
     */
    omit?: AssigneeUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssigneeUserInclude<ExtArgs> | null
    /**
     * The filter to search for the AssigneeUser to update in case it exists.
     */
    where: AssigneeUserWhereUniqueInput
    /**
     * In case the AssigneeUser found by the `where` argument doesn't exist, create a new AssigneeUser with this data.
     */
    create: XOR<AssigneeUserCreateInput, AssigneeUserUncheckedCreateInput>
    /**
     * In case the AssigneeUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AssigneeUserUpdateInput, AssigneeUserUncheckedUpdateInput>
  }

  /**
   * AssigneeUser delete
   */
  export type AssigneeUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssigneeUser
     */
    select?: AssigneeUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssigneeUser
     */
    omit?: AssigneeUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssigneeUserInclude<ExtArgs> | null
    /**
     * Filter which AssigneeUser to delete.
     */
    where: AssigneeUserWhereUniqueInput
  }

  /**
   * AssigneeUser deleteMany
   */
  export type AssigneeUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AssigneeUsers to delete
     */
    where?: AssigneeUserWhereInput
    /**
     * Limit how many AssigneeUsers to delete.
     */
    limit?: number
  }

  /**
   * AssigneeUser without action
   */
  export type AssigneeUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssigneeUser
     */
    select?: AssigneeUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssigneeUser
     */
    omit?: AssigneeUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssigneeUserInclude<ExtArgs> | null
  }


  /**
   * Model Message
   */

  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null
    _avg: MessageAvgAggregateOutputType | null
    _sum: MessageSumAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  export type MessageAvgAggregateOutputType = {
    id: number | null
    assigneeId: number | null
    taskId: number | null
    createdBy: number | null
    updatedBy: number | null
    deletedBy: number | null
  }

  export type MessageSumAggregateOutputType = {
    id: number | null
    assigneeId: number | null
    taskId: number | null
    createdBy: number | null
    updatedBy: number | null
    deletedBy: number | null
  }

  export type MessageMinAggregateOutputType = {
    id: number | null
    content: string | null
    assigneeId: number | null
    taskId: number | null
    createdAt: Date | null
    createdBy: number | null
    updatedAt: Date | null
    updatedBy: number | null
    deletedAt: Date | null
    deletedBy: number | null
  }

  export type MessageMaxAggregateOutputType = {
    id: number | null
    content: string | null
    assigneeId: number | null
    taskId: number | null
    createdAt: Date | null
    createdBy: number | null
    updatedAt: Date | null
    updatedBy: number | null
    deletedAt: Date | null
    deletedBy: number | null
  }

  export type MessageCountAggregateOutputType = {
    id: number
    content: number
    assigneeId: number
    taskId: number
    createdAt: number
    createdBy: number
    updatedAt: number
    updatedBy: number
    deletedAt: number
    deletedBy: number
    _all: number
  }


  export type MessageAvgAggregateInputType = {
    id?: true
    assigneeId?: true
    taskId?: true
    createdBy?: true
    updatedBy?: true
    deletedBy?: true
  }

  export type MessageSumAggregateInputType = {
    id?: true
    assigneeId?: true
    taskId?: true
    createdBy?: true
    updatedBy?: true
    deletedBy?: true
  }

  export type MessageMinAggregateInputType = {
    id?: true
    content?: true
    assigneeId?: true
    taskId?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    deletedAt?: true
    deletedBy?: true
  }

  export type MessageMaxAggregateInputType = {
    id?: true
    content?: true
    assigneeId?: true
    taskId?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    deletedAt?: true
    deletedBy?: true
  }

  export type MessageCountAggregateInputType = {
    id?: true
    content?: true
    assigneeId?: true
    taskId?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    deletedAt?: true
    deletedBy?: true
    _all?: true
  }

  export type MessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Message to aggregate.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Messages
    **/
    _count?: true | MessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MessageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MessageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageMaxAggregateInputType
  }

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
        [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>
  }




  export type MessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithAggregationInput | MessageOrderByWithAggregationInput[]
    by: MessageScalarFieldEnum[] | MessageScalarFieldEnum
    having?: MessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageCountAggregateInputType | true
    _avg?: MessageAvgAggregateInputType
    _sum?: MessageSumAggregateInputType
    _min?: MessageMinAggregateInputType
    _max?: MessageMaxAggregateInputType
  }

  export type MessageGroupByOutputType = {
    id: number
    content: string
    assigneeId: number
    taskId: number
    createdAt: Date
    createdBy: number
    updatedAt: Date
    updatedBy: number
    deletedAt: Date | null
    deletedBy: number | null
    _count: MessageCountAggregateOutputType | null
    _avg: MessageAvgAggregateOutputType | null
    _sum: MessageSumAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  type GetMessageGroupByPayload<T extends MessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupByOutputType[P]>
        }
      >
    >


  export type MessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    assigneeId?: boolean
    taskId?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
    assignee?: boolean | AssigneeDefaultArgs<ExtArgs>
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    assigneeId?: boolean
    taskId?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
    assignee?: boolean | AssigneeDefaultArgs<ExtArgs>
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    content?: boolean
    assigneeId?: boolean
    taskId?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
    assignee?: boolean | AssigneeDefaultArgs<ExtArgs>
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectScalar = {
    id?: boolean
    content?: boolean
    assigneeId?: boolean
    taskId?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
  }

  export type MessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "content" | "assigneeId" | "taskId" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy" | "deletedAt" | "deletedBy", ExtArgs["result"]["message"]>
  export type MessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignee?: boolean | AssigneeDefaultArgs<ExtArgs>
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }
  export type MessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignee?: boolean | AssigneeDefaultArgs<ExtArgs>
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }
  export type MessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignee?: boolean | AssigneeDefaultArgs<ExtArgs>
    task?: boolean | TaskDefaultArgs<ExtArgs>
  }

  export type $MessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Message"
    objects: {
      assignee: Prisma.$AssigneePayload<ExtArgs>
      task: Prisma.$TaskPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      content: string
      assigneeId: number
      taskId: number
      createdAt: Date
      createdBy: number
      updatedAt: Date
      updatedBy: number
      deletedAt: Date | null
      deletedBy: number | null
    }, ExtArgs["result"]["message"]>
    composites: {}
  }

  type MessageGetPayload<S extends boolean | null | undefined | MessageDefaultArgs> = $Result.GetResult<Prisma.$MessagePayload, S>

  type MessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessageCountAggregateInputType | true
    }

  export interface MessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Message'], meta: { name: 'Message' } }
    /**
     * Find zero or one Message that matches the filter.
     * @param {MessageFindUniqueArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageFindUniqueArgs>(args: SelectSubset<T, MessageFindUniqueArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Message that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageFindUniqueOrThrowArgs>(args: SelectSubset<T, MessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageFindFirstArgs>(args?: SelectSubset<T, MessageFindFirstArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageFindFirstOrThrowArgs>(args?: SelectSubset<T, MessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.message.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.message.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageWithIdOnly = await prisma.message.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessageFindManyArgs>(args?: SelectSubset<T, MessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Message.
     * @param {MessageCreateArgs} args - Arguments to create a Message.
     * @example
     * // Create one Message
     * const Message = await prisma.message.create({
     *   data: {
     *     // ... data to create a Message
     *   }
     * })
     * 
     */
    create<T extends MessageCreateArgs>(args: SelectSubset<T, MessageCreateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Messages.
     * @param {MessageCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessageCreateManyArgs>(args?: SelectSubset<T, MessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Messages and returns the data saved in the database.
     * @param {MessageCreateManyAndReturnArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MessageCreateManyAndReturnArgs>(args?: SelectSubset<T, MessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Message.
     * @param {MessageDeleteArgs} args - Arguments to delete one Message.
     * @example
     * // Delete one Message
     * const Message = await prisma.message.delete({
     *   where: {
     *     // ... filter to delete one Message
     *   }
     * })
     * 
     */
    delete<T extends MessageDeleteArgs>(args: SelectSubset<T, MessageDeleteArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Message.
     * @param {MessageUpdateArgs} args - Arguments to update one Message.
     * @example
     * // Update one Message
     * const message = await prisma.message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessageUpdateArgs>(args: SelectSubset<T, MessageUpdateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Messages.
     * @param {MessageDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessageDeleteManyArgs>(args?: SelectSubset<T, MessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessageUpdateManyArgs>(args: SelectSubset<T, MessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages and returns the data updated in the database.
     * @param {MessageUpdateManyAndReturnArgs} args - Arguments to update many Messages.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MessageUpdateManyAndReturnArgs>(args: SelectSubset<T, MessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Message.
     * @param {MessageUpsertArgs} args - Arguments to update or create a Message.
     * @example
     * // Update or create a Message
     * const message = await prisma.message.upsert({
     *   create: {
     *     // ... data to create a Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message we want to update
     *   }
     * })
     */
    upsert<T extends MessageUpsertArgs>(args: SelectSubset<T, MessageUpsertArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.message.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends MessageCountArgs>(
      args?: Subset<T, MessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MessageAggregateArgs>(args: Subset<T, MessageAggregateArgs>): Prisma.PrismaPromise<GetMessageAggregateType<T>>

    /**
     * Group by Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageGroupByArgs['orderBy'] }
        : { orderBy?: MessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Message model
   */
  readonly fields: MessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    assignee<T extends AssigneeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AssigneeDefaultArgs<ExtArgs>>): Prisma__AssigneeClient<$Result.GetResult<Prisma.$AssigneePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    task<T extends TaskDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TaskDefaultArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Message model
   */
  interface MessageFieldRefs {
    readonly id: FieldRef<"Message", 'Int'>
    readonly content: FieldRef<"Message", 'String'>
    readonly assigneeId: FieldRef<"Message", 'Int'>
    readonly taskId: FieldRef<"Message", 'Int'>
    readonly createdAt: FieldRef<"Message", 'DateTime'>
    readonly createdBy: FieldRef<"Message", 'Int'>
    readonly updatedAt: FieldRef<"Message", 'DateTime'>
    readonly updatedBy: FieldRef<"Message", 'Int'>
    readonly deletedAt: FieldRef<"Message", 'DateTime'>
    readonly deletedBy: FieldRef<"Message", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Message findUnique
   */
  export type MessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findUniqueOrThrow
   */
  export type MessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findFirst
   */
  export type MessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findFirstOrThrow
   */
  export type MessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findMany
   */
  export type MessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message create
   */
  export type MessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to create a Message.
     */
    data: XOR<MessageCreateInput, MessageUncheckedCreateInput>
  }

  /**
   * Message createMany
   */
  export type MessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Message createManyAndReturn
   */
  export type MessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message update
   */
  export type MessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to update a Message.
     */
    data: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
    /**
     * Choose, which Message to update.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message updateMany
   */
  export type MessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
  }

  /**
   * Message updateManyAndReturn
   */
  export type MessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message upsert
   */
  export type MessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The filter to search for the Message to update in case it exists.
     */
    where: MessageWhereUniqueInput
    /**
     * In case the Message found by the `where` argument doesn't exist, create a new Message with this data.
     */
    create: XOR<MessageCreateInput, MessageUncheckedCreateInput>
    /**
     * In case the Message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
  }

  /**
   * Message delete
   */
  export type MessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter which Message to delete.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message deleteMany
   */
  export type MessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to delete
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to delete.
     */
    limit?: number
  }

  /**
   * Message without action
   */
  export type MessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
  }


  /**
   * Model Permission
   */

  export type AggregatePermission = {
    _count: PermissionCountAggregateOutputType | null
    _avg: PermissionAvgAggregateOutputType | null
    _sum: PermissionSumAggregateOutputType | null
    _min: PermissionMinAggregateOutputType | null
    _max: PermissionMaxAggregateOutputType | null
  }

  export type PermissionAvgAggregateOutputType = {
    userId: number | null
    workspaceId: number | null
  }

  export type PermissionSumAggregateOutputType = {
    userId: number | null
    workspaceId: number | null
  }

  export type PermissionMinAggregateOutputType = {
    userId: number | null
    workspaceId: number | null
    type: $Enums.PermissionType | null
  }

  export type PermissionMaxAggregateOutputType = {
    userId: number | null
    workspaceId: number | null
    type: $Enums.PermissionType | null
  }

  export type PermissionCountAggregateOutputType = {
    userId: number
    workspaceId: number
    type: number
    _all: number
  }


  export type PermissionAvgAggregateInputType = {
    userId?: true
    workspaceId?: true
  }

  export type PermissionSumAggregateInputType = {
    userId?: true
    workspaceId?: true
  }

  export type PermissionMinAggregateInputType = {
    userId?: true
    workspaceId?: true
    type?: true
  }

  export type PermissionMaxAggregateInputType = {
    userId?: true
    workspaceId?: true
    type?: true
  }

  export type PermissionCountAggregateInputType = {
    userId?: true
    workspaceId?: true
    type?: true
    _all?: true
  }

  export type PermissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Permission to aggregate.
     */
    where?: PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Permissions
    **/
    _count?: true | PermissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PermissionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PermissionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PermissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PermissionMaxAggregateInputType
  }

  export type GetPermissionAggregateType<T extends PermissionAggregateArgs> = {
        [P in keyof T & keyof AggregatePermission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePermission[P]>
      : GetScalarType<T[P], AggregatePermission[P]>
  }




  export type PermissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PermissionWhereInput
    orderBy?: PermissionOrderByWithAggregationInput | PermissionOrderByWithAggregationInput[]
    by: PermissionScalarFieldEnum[] | PermissionScalarFieldEnum
    having?: PermissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PermissionCountAggregateInputType | true
    _avg?: PermissionAvgAggregateInputType
    _sum?: PermissionSumAggregateInputType
    _min?: PermissionMinAggregateInputType
    _max?: PermissionMaxAggregateInputType
  }

  export type PermissionGroupByOutputType = {
    userId: number
    workspaceId: number
    type: $Enums.PermissionType
    _count: PermissionCountAggregateOutputType | null
    _avg: PermissionAvgAggregateOutputType | null
    _sum: PermissionSumAggregateOutputType | null
    _min: PermissionMinAggregateOutputType | null
    _max: PermissionMaxAggregateOutputType | null
  }

  type GetPermissionGroupByPayload<T extends PermissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PermissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PermissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PermissionGroupByOutputType[P]>
            : GetScalarType<T[P], PermissionGroupByOutputType[P]>
        }
      >
    >


  export type PermissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    workspaceId?: boolean
    type?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["permission"]>

  export type PermissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    workspaceId?: boolean
    type?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["permission"]>

  export type PermissionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    workspaceId?: boolean
    type?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["permission"]>

  export type PermissionSelectScalar = {
    userId?: boolean
    workspaceId?: boolean
    type?: boolean
  }

  export type PermissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "workspaceId" | "type", ExtArgs["result"]["permission"]>
  export type PermissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }
  export type PermissionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }
  export type PermissionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }

  export type $PermissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Permission"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      workspace: Prisma.$WorkspacePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: number
      workspaceId: number
      type: $Enums.PermissionType
    }, ExtArgs["result"]["permission"]>
    composites: {}
  }

  type PermissionGetPayload<S extends boolean | null | undefined | PermissionDefaultArgs> = $Result.GetResult<Prisma.$PermissionPayload, S>

  type PermissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PermissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PermissionCountAggregateInputType | true
    }

  export interface PermissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Permission'], meta: { name: 'Permission' } }
    /**
     * Find zero or one Permission that matches the filter.
     * @param {PermissionFindUniqueArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PermissionFindUniqueArgs>(args: SelectSubset<T, PermissionFindUniqueArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Permission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PermissionFindUniqueOrThrowArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PermissionFindUniqueOrThrowArgs>(args: SelectSubset<T, PermissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Permission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionFindFirstArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PermissionFindFirstArgs>(args?: SelectSubset<T, PermissionFindFirstArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Permission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionFindFirstOrThrowArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PermissionFindFirstOrThrowArgs>(args?: SelectSubset<T, PermissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Permissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Permissions
     * const permissions = await prisma.permission.findMany()
     * 
     * // Get first 10 Permissions
     * const permissions = await prisma.permission.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const permissionWithUserIdOnly = await prisma.permission.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends PermissionFindManyArgs>(args?: SelectSubset<T, PermissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Permission.
     * @param {PermissionCreateArgs} args - Arguments to create a Permission.
     * @example
     * // Create one Permission
     * const Permission = await prisma.permission.create({
     *   data: {
     *     // ... data to create a Permission
     *   }
     * })
     * 
     */
    create<T extends PermissionCreateArgs>(args: SelectSubset<T, PermissionCreateArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Permissions.
     * @param {PermissionCreateManyArgs} args - Arguments to create many Permissions.
     * @example
     * // Create many Permissions
     * const permission = await prisma.permission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PermissionCreateManyArgs>(args?: SelectSubset<T, PermissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Permissions and returns the data saved in the database.
     * @param {PermissionCreateManyAndReturnArgs} args - Arguments to create many Permissions.
     * @example
     * // Create many Permissions
     * const permission = await prisma.permission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Permissions and only return the `userId`
     * const permissionWithUserIdOnly = await prisma.permission.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PermissionCreateManyAndReturnArgs>(args?: SelectSubset<T, PermissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Permission.
     * @param {PermissionDeleteArgs} args - Arguments to delete one Permission.
     * @example
     * // Delete one Permission
     * const Permission = await prisma.permission.delete({
     *   where: {
     *     // ... filter to delete one Permission
     *   }
     * })
     * 
     */
    delete<T extends PermissionDeleteArgs>(args: SelectSubset<T, PermissionDeleteArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Permission.
     * @param {PermissionUpdateArgs} args - Arguments to update one Permission.
     * @example
     * // Update one Permission
     * const permission = await prisma.permission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PermissionUpdateArgs>(args: SelectSubset<T, PermissionUpdateArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Permissions.
     * @param {PermissionDeleteManyArgs} args - Arguments to filter Permissions to delete.
     * @example
     * // Delete a few Permissions
     * const { count } = await prisma.permission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PermissionDeleteManyArgs>(args?: SelectSubset<T, PermissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Permissions
     * const permission = await prisma.permission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PermissionUpdateManyArgs>(args: SelectSubset<T, PermissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Permissions and returns the data updated in the database.
     * @param {PermissionUpdateManyAndReturnArgs} args - Arguments to update many Permissions.
     * @example
     * // Update many Permissions
     * const permission = await prisma.permission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Permissions and only return the `userId`
     * const permissionWithUserIdOnly = await prisma.permission.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PermissionUpdateManyAndReturnArgs>(args: SelectSubset<T, PermissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Permission.
     * @param {PermissionUpsertArgs} args - Arguments to update or create a Permission.
     * @example
     * // Update or create a Permission
     * const permission = await prisma.permission.upsert({
     *   create: {
     *     // ... data to create a Permission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Permission we want to update
     *   }
     * })
     */
    upsert<T extends PermissionUpsertArgs>(args: SelectSubset<T, PermissionUpsertArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionCountArgs} args - Arguments to filter Permissions to count.
     * @example
     * // Count the number of Permissions
     * const count = await prisma.permission.count({
     *   where: {
     *     // ... the filter for the Permissions we want to count
     *   }
     * })
    **/
    count<T extends PermissionCountArgs>(
      args?: Subset<T, PermissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PermissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Permission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PermissionAggregateArgs>(args: Subset<T, PermissionAggregateArgs>): Prisma.PrismaPromise<GetPermissionAggregateType<T>>

    /**
     * Group by Permission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PermissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PermissionGroupByArgs['orderBy'] }
        : { orderBy?: PermissionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PermissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPermissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Permission model
   */
  readonly fields: PermissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Permission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PermissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    workspace<T extends WorkspaceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkspaceDefaultArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Permission model
   */
  interface PermissionFieldRefs {
    readonly userId: FieldRef<"Permission", 'Int'>
    readonly workspaceId: FieldRef<"Permission", 'Int'>
    readonly type: FieldRef<"Permission", 'PermissionType'>
  }
    

  // Custom InputTypes
  /**
   * Permission findUnique
   */
  export type PermissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permission to fetch.
     */
    where: PermissionWhereUniqueInput
  }

  /**
   * Permission findUniqueOrThrow
   */
  export type PermissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permission to fetch.
     */
    where: PermissionWhereUniqueInput
  }

  /**
   * Permission findFirst
   */
  export type PermissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permission to fetch.
     */
    where?: PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Permissions.
     */
    cursor?: PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Permissions.
     */
    distinct?: PermissionScalarFieldEnum | PermissionScalarFieldEnum[]
  }

  /**
   * Permission findFirstOrThrow
   */
  export type PermissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permission to fetch.
     */
    where?: PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Permissions.
     */
    cursor?: PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Permissions.
     */
    distinct?: PermissionScalarFieldEnum | PermissionScalarFieldEnum[]
  }

  /**
   * Permission findMany
   */
  export type PermissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permissions to fetch.
     */
    where?: PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Permissions.
     */
    cursor?: PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Permissions.
     */
    distinct?: PermissionScalarFieldEnum | PermissionScalarFieldEnum[]
  }

  /**
   * Permission create
   */
  export type PermissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * The data needed to create a Permission.
     */
    data: XOR<PermissionCreateInput, PermissionUncheckedCreateInput>
  }

  /**
   * Permission createMany
   */
  export type PermissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Permissions.
     */
    data: PermissionCreateManyInput | PermissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Permission createManyAndReturn
   */
  export type PermissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * The data used to create many Permissions.
     */
    data: PermissionCreateManyInput | PermissionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Permission update
   */
  export type PermissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * The data needed to update a Permission.
     */
    data: XOR<PermissionUpdateInput, PermissionUncheckedUpdateInput>
    /**
     * Choose, which Permission to update.
     */
    where: PermissionWhereUniqueInput
  }

  /**
   * Permission updateMany
   */
  export type PermissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Permissions.
     */
    data: XOR<PermissionUpdateManyMutationInput, PermissionUncheckedUpdateManyInput>
    /**
     * Filter which Permissions to update
     */
    where?: PermissionWhereInput
    /**
     * Limit how many Permissions to update.
     */
    limit?: number
  }

  /**
   * Permission updateManyAndReturn
   */
  export type PermissionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * The data used to update Permissions.
     */
    data: XOR<PermissionUpdateManyMutationInput, PermissionUncheckedUpdateManyInput>
    /**
     * Filter which Permissions to update
     */
    where?: PermissionWhereInput
    /**
     * Limit how many Permissions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Permission upsert
   */
  export type PermissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * The filter to search for the Permission to update in case it exists.
     */
    where: PermissionWhereUniqueInput
    /**
     * In case the Permission found by the `where` argument doesn't exist, create a new Permission with this data.
     */
    create: XOR<PermissionCreateInput, PermissionUncheckedCreateInput>
    /**
     * In case the Permission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PermissionUpdateInput, PermissionUncheckedUpdateInput>
  }

  /**
   * Permission delete
   */
  export type PermissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter which Permission to delete.
     */
    where: PermissionWhereUniqueInput
  }

  /**
   * Permission deleteMany
   */
  export type PermissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Permissions to delete
     */
    where?: PermissionWhereInput
    /**
     * Limit how many Permissions to delete.
     */
    limit?: number
  }

  /**
   * Permission without action
   */
  export type PermissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
  }


  /**
   * Model Pikud
   */

  export type AggregatePikud = {
    _count: PikudCountAggregateOutputType | null
    _avg: PikudAvgAggregateOutputType | null
    _sum: PikudSumAggregateOutputType | null
    _min: PikudMinAggregateOutputType | null
    _max: PikudMaxAggregateOutputType | null
  }

  export type PikudAvgAggregateOutputType = {
    id: number | null
    createdBy: number | null
    updatedBy: number | null
    deletedBy: number | null
  }

  export type PikudSumAggregateOutputType = {
    id: number | null
    createdBy: number | null
    updatedBy: number | null
    deletedBy: number | null
  }

  export type PikudMinAggregateOutputType = {
    id: number | null
    name: string | null
    icon: string | null
    createdAt: Date | null
    createdBy: number | null
    updatedAt: Date | null
    updatedBy: number | null
    deletedAt: Date | null
    deletedBy: number | null
  }

  export type PikudMaxAggregateOutputType = {
    id: number | null
    name: string | null
    icon: string | null
    createdAt: Date | null
    createdBy: number | null
    updatedAt: Date | null
    updatedBy: number | null
    deletedAt: Date | null
    deletedBy: number | null
  }

  export type PikudCountAggregateOutputType = {
    id: number
    name: number
    icon: number
    createdAt: number
    createdBy: number
    updatedAt: number
    updatedBy: number
    deletedAt: number
    deletedBy: number
    _all: number
  }


  export type PikudAvgAggregateInputType = {
    id?: true
    createdBy?: true
    updatedBy?: true
    deletedBy?: true
  }

  export type PikudSumAggregateInputType = {
    id?: true
    createdBy?: true
    updatedBy?: true
    deletedBy?: true
  }

  export type PikudMinAggregateInputType = {
    id?: true
    name?: true
    icon?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    deletedAt?: true
    deletedBy?: true
  }

  export type PikudMaxAggregateInputType = {
    id?: true
    name?: true
    icon?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    deletedAt?: true
    deletedBy?: true
  }

  export type PikudCountAggregateInputType = {
    id?: true
    name?: true
    icon?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    deletedAt?: true
    deletedBy?: true
    _all?: true
  }

  export type PikudAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pikud to aggregate.
     */
    where?: PikudWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pikuds to fetch.
     */
    orderBy?: PikudOrderByWithRelationInput | PikudOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PikudWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pikuds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pikuds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pikuds
    **/
    _count?: true | PikudCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PikudAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PikudSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PikudMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PikudMaxAggregateInputType
  }

  export type GetPikudAggregateType<T extends PikudAggregateArgs> = {
        [P in keyof T & keyof AggregatePikud]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePikud[P]>
      : GetScalarType<T[P], AggregatePikud[P]>
  }




  export type PikudGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PikudWhereInput
    orderBy?: PikudOrderByWithAggregationInput | PikudOrderByWithAggregationInput[]
    by: PikudScalarFieldEnum[] | PikudScalarFieldEnum
    having?: PikudScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PikudCountAggregateInputType | true
    _avg?: PikudAvgAggregateInputType
    _sum?: PikudSumAggregateInputType
    _min?: PikudMinAggregateInputType
    _max?: PikudMaxAggregateInputType
  }

  export type PikudGroupByOutputType = {
    id: number
    name: string
    icon: string | null
    createdAt: Date
    createdBy: number
    updatedAt: Date
    updatedBy: number
    deletedAt: Date | null
    deletedBy: number | null
    _count: PikudCountAggregateOutputType | null
    _avg: PikudAvgAggregateOutputType | null
    _sum: PikudSumAggregateOutputType | null
    _min: PikudMinAggregateOutputType | null
    _max: PikudMaxAggregateOutputType | null
  }

  type GetPikudGroupByPayload<T extends PikudGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PikudGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PikudGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PikudGroupByOutputType[P]>
            : GetScalarType<T[P], PikudGroupByOutputType[P]>
        }
      >
    >


  export type PikudSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    icon?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
    workspaces?: boolean | Pikud$workspacesArgs<ExtArgs>
    _count?: boolean | PikudCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pikud"]>

  export type PikudSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    icon?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
  }, ExtArgs["result"]["pikud"]>

  export type PikudSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    icon?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
  }, ExtArgs["result"]["pikud"]>

  export type PikudSelectScalar = {
    id?: boolean
    name?: boolean
    icon?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
  }

  export type PikudOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "icon" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy" | "deletedAt" | "deletedBy", ExtArgs["result"]["pikud"]>
  export type PikudInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspaces?: boolean | Pikud$workspacesArgs<ExtArgs>
    _count?: boolean | PikudCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PikudIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PikudIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PikudPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pikud"
    objects: {
      workspaces: Prisma.$WorkspacePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      icon: string | null
      createdAt: Date
      createdBy: number
      updatedAt: Date
      updatedBy: number
      deletedAt: Date | null
      deletedBy: number | null
    }, ExtArgs["result"]["pikud"]>
    composites: {}
  }

  type PikudGetPayload<S extends boolean | null | undefined | PikudDefaultArgs> = $Result.GetResult<Prisma.$PikudPayload, S>

  type PikudCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PikudFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PikudCountAggregateInputType | true
    }

  export interface PikudDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pikud'], meta: { name: 'Pikud' } }
    /**
     * Find zero or one Pikud that matches the filter.
     * @param {PikudFindUniqueArgs} args - Arguments to find a Pikud
     * @example
     * // Get one Pikud
     * const pikud = await prisma.pikud.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PikudFindUniqueArgs>(args: SelectSubset<T, PikudFindUniqueArgs<ExtArgs>>): Prisma__PikudClient<$Result.GetResult<Prisma.$PikudPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pikud that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PikudFindUniqueOrThrowArgs} args - Arguments to find a Pikud
     * @example
     * // Get one Pikud
     * const pikud = await prisma.pikud.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PikudFindUniqueOrThrowArgs>(args: SelectSubset<T, PikudFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PikudClient<$Result.GetResult<Prisma.$PikudPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pikud that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PikudFindFirstArgs} args - Arguments to find a Pikud
     * @example
     * // Get one Pikud
     * const pikud = await prisma.pikud.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PikudFindFirstArgs>(args?: SelectSubset<T, PikudFindFirstArgs<ExtArgs>>): Prisma__PikudClient<$Result.GetResult<Prisma.$PikudPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pikud that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PikudFindFirstOrThrowArgs} args - Arguments to find a Pikud
     * @example
     * // Get one Pikud
     * const pikud = await prisma.pikud.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PikudFindFirstOrThrowArgs>(args?: SelectSubset<T, PikudFindFirstOrThrowArgs<ExtArgs>>): Prisma__PikudClient<$Result.GetResult<Prisma.$PikudPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pikuds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PikudFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pikuds
     * const pikuds = await prisma.pikud.findMany()
     * 
     * // Get first 10 Pikuds
     * const pikuds = await prisma.pikud.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pikudWithIdOnly = await prisma.pikud.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PikudFindManyArgs>(args?: SelectSubset<T, PikudFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PikudPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pikud.
     * @param {PikudCreateArgs} args - Arguments to create a Pikud.
     * @example
     * // Create one Pikud
     * const Pikud = await prisma.pikud.create({
     *   data: {
     *     // ... data to create a Pikud
     *   }
     * })
     * 
     */
    create<T extends PikudCreateArgs>(args: SelectSubset<T, PikudCreateArgs<ExtArgs>>): Prisma__PikudClient<$Result.GetResult<Prisma.$PikudPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pikuds.
     * @param {PikudCreateManyArgs} args - Arguments to create many Pikuds.
     * @example
     * // Create many Pikuds
     * const pikud = await prisma.pikud.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PikudCreateManyArgs>(args?: SelectSubset<T, PikudCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pikuds and returns the data saved in the database.
     * @param {PikudCreateManyAndReturnArgs} args - Arguments to create many Pikuds.
     * @example
     * // Create many Pikuds
     * const pikud = await prisma.pikud.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pikuds and only return the `id`
     * const pikudWithIdOnly = await prisma.pikud.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PikudCreateManyAndReturnArgs>(args?: SelectSubset<T, PikudCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PikudPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pikud.
     * @param {PikudDeleteArgs} args - Arguments to delete one Pikud.
     * @example
     * // Delete one Pikud
     * const Pikud = await prisma.pikud.delete({
     *   where: {
     *     // ... filter to delete one Pikud
     *   }
     * })
     * 
     */
    delete<T extends PikudDeleteArgs>(args: SelectSubset<T, PikudDeleteArgs<ExtArgs>>): Prisma__PikudClient<$Result.GetResult<Prisma.$PikudPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pikud.
     * @param {PikudUpdateArgs} args - Arguments to update one Pikud.
     * @example
     * // Update one Pikud
     * const pikud = await prisma.pikud.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PikudUpdateArgs>(args: SelectSubset<T, PikudUpdateArgs<ExtArgs>>): Prisma__PikudClient<$Result.GetResult<Prisma.$PikudPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pikuds.
     * @param {PikudDeleteManyArgs} args - Arguments to filter Pikuds to delete.
     * @example
     * // Delete a few Pikuds
     * const { count } = await prisma.pikud.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PikudDeleteManyArgs>(args?: SelectSubset<T, PikudDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pikuds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PikudUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pikuds
     * const pikud = await prisma.pikud.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PikudUpdateManyArgs>(args: SelectSubset<T, PikudUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pikuds and returns the data updated in the database.
     * @param {PikudUpdateManyAndReturnArgs} args - Arguments to update many Pikuds.
     * @example
     * // Update many Pikuds
     * const pikud = await prisma.pikud.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pikuds and only return the `id`
     * const pikudWithIdOnly = await prisma.pikud.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PikudUpdateManyAndReturnArgs>(args: SelectSubset<T, PikudUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PikudPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pikud.
     * @param {PikudUpsertArgs} args - Arguments to update or create a Pikud.
     * @example
     * // Update or create a Pikud
     * const pikud = await prisma.pikud.upsert({
     *   create: {
     *     // ... data to create a Pikud
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pikud we want to update
     *   }
     * })
     */
    upsert<T extends PikudUpsertArgs>(args: SelectSubset<T, PikudUpsertArgs<ExtArgs>>): Prisma__PikudClient<$Result.GetResult<Prisma.$PikudPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pikuds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PikudCountArgs} args - Arguments to filter Pikuds to count.
     * @example
     * // Count the number of Pikuds
     * const count = await prisma.pikud.count({
     *   where: {
     *     // ... the filter for the Pikuds we want to count
     *   }
     * })
    **/
    count<T extends PikudCountArgs>(
      args?: Subset<T, PikudCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PikudCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pikud.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PikudAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PikudAggregateArgs>(args: Subset<T, PikudAggregateArgs>): Prisma.PrismaPromise<GetPikudAggregateType<T>>

    /**
     * Group by Pikud.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PikudGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PikudGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PikudGroupByArgs['orderBy'] }
        : { orderBy?: PikudGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PikudGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPikudGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pikud model
   */
  readonly fields: PikudFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pikud.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PikudClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workspaces<T extends Pikud$workspacesArgs<ExtArgs> = {}>(args?: Subset<T, Pikud$workspacesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Pikud model
   */
  interface PikudFieldRefs {
    readonly id: FieldRef<"Pikud", 'Int'>
    readonly name: FieldRef<"Pikud", 'String'>
    readonly icon: FieldRef<"Pikud", 'String'>
    readonly createdAt: FieldRef<"Pikud", 'DateTime'>
    readonly createdBy: FieldRef<"Pikud", 'Int'>
    readonly updatedAt: FieldRef<"Pikud", 'DateTime'>
    readonly updatedBy: FieldRef<"Pikud", 'Int'>
    readonly deletedAt: FieldRef<"Pikud", 'DateTime'>
    readonly deletedBy: FieldRef<"Pikud", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Pikud findUnique
   */
  export type PikudFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pikud
     */
    select?: PikudSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pikud
     */
    omit?: PikudOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PikudInclude<ExtArgs> | null
    /**
     * Filter, which Pikud to fetch.
     */
    where: PikudWhereUniqueInput
  }

  /**
   * Pikud findUniqueOrThrow
   */
  export type PikudFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pikud
     */
    select?: PikudSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pikud
     */
    omit?: PikudOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PikudInclude<ExtArgs> | null
    /**
     * Filter, which Pikud to fetch.
     */
    where: PikudWhereUniqueInput
  }

  /**
   * Pikud findFirst
   */
  export type PikudFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pikud
     */
    select?: PikudSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pikud
     */
    omit?: PikudOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PikudInclude<ExtArgs> | null
    /**
     * Filter, which Pikud to fetch.
     */
    where?: PikudWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pikuds to fetch.
     */
    orderBy?: PikudOrderByWithRelationInput | PikudOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pikuds.
     */
    cursor?: PikudWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pikuds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pikuds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pikuds.
     */
    distinct?: PikudScalarFieldEnum | PikudScalarFieldEnum[]
  }

  /**
   * Pikud findFirstOrThrow
   */
  export type PikudFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pikud
     */
    select?: PikudSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pikud
     */
    omit?: PikudOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PikudInclude<ExtArgs> | null
    /**
     * Filter, which Pikud to fetch.
     */
    where?: PikudWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pikuds to fetch.
     */
    orderBy?: PikudOrderByWithRelationInput | PikudOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pikuds.
     */
    cursor?: PikudWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pikuds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pikuds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pikuds.
     */
    distinct?: PikudScalarFieldEnum | PikudScalarFieldEnum[]
  }

  /**
   * Pikud findMany
   */
  export type PikudFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pikud
     */
    select?: PikudSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pikud
     */
    omit?: PikudOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PikudInclude<ExtArgs> | null
    /**
     * Filter, which Pikuds to fetch.
     */
    where?: PikudWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pikuds to fetch.
     */
    orderBy?: PikudOrderByWithRelationInput | PikudOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pikuds.
     */
    cursor?: PikudWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pikuds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pikuds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pikuds.
     */
    distinct?: PikudScalarFieldEnum | PikudScalarFieldEnum[]
  }

  /**
   * Pikud create
   */
  export type PikudCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pikud
     */
    select?: PikudSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pikud
     */
    omit?: PikudOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PikudInclude<ExtArgs> | null
    /**
     * The data needed to create a Pikud.
     */
    data: XOR<PikudCreateInput, PikudUncheckedCreateInput>
  }

  /**
   * Pikud createMany
   */
  export type PikudCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pikuds.
     */
    data: PikudCreateManyInput | PikudCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pikud createManyAndReturn
   */
  export type PikudCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pikud
     */
    select?: PikudSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pikud
     */
    omit?: PikudOmit<ExtArgs> | null
    /**
     * The data used to create many Pikuds.
     */
    data: PikudCreateManyInput | PikudCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pikud update
   */
  export type PikudUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pikud
     */
    select?: PikudSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pikud
     */
    omit?: PikudOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PikudInclude<ExtArgs> | null
    /**
     * The data needed to update a Pikud.
     */
    data: XOR<PikudUpdateInput, PikudUncheckedUpdateInput>
    /**
     * Choose, which Pikud to update.
     */
    where: PikudWhereUniqueInput
  }

  /**
   * Pikud updateMany
   */
  export type PikudUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pikuds.
     */
    data: XOR<PikudUpdateManyMutationInput, PikudUncheckedUpdateManyInput>
    /**
     * Filter which Pikuds to update
     */
    where?: PikudWhereInput
    /**
     * Limit how many Pikuds to update.
     */
    limit?: number
  }

  /**
   * Pikud updateManyAndReturn
   */
  export type PikudUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pikud
     */
    select?: PikudSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pikud
     */
    omit?: PikudOmit<ExtArgs> | null
    /**
     * The data used to update Pikuds.
     */
    data: XOR<PikudUpdateManyMutationInput, PikudUncheckedUpdateManyInput>
    /**
     * Filter which Pikuds to update
     */
    where?: PikudWhereInput
    /**
     * Limit how many Pikuds to update.
     */
    limit?: number
  }

  /**
   * Pikud upsert
   */
  export type PikudUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pikud
     */
    select?: PikudSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pikud
     */
    omit?: PikudOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PikudInclude<ExtArgs> | null
    /**
     * The filter to search for the Pikud to update in case it exists.
     */
    where: PikudWhereUniqueInput
    /**
     * In case the Pikud found by the `where` argument doesn't exist, create a new Pikud with this data.
     */
    create: XOR<PikudCreateInput, PikudUncheckedCreateInput>
    /**
     * In case the Pikud was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PikudUpdateInput, PikudUncheckedUpdateInput>
  }

  /**
   * Pikud delete
   */
  export type PikudDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pikud
     */
    select?: PikudSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pikud
     */
    omit?: PikudOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PikudInclude<ExtArgs> | null
    /**
     * Filter which Pikud to delete.
     */
    where: PikudWhereUniqueInput
  }

  /**
   * Pikud deleteMany
   */
  export type PikudDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pikuds to delete
     */
    where?: PikudWhereInput
    /**
     * Limit how many Pikuds to delete.
     */
    limit?: number
  }

  /**
   * Pikud.workspaces
   */
  export type Pikud$workspacesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    where?: WorkspaceWhereInput
    orderBy?: WorkspaceOrderByWithRelationInput | WorkspaceOrderByWithRelationInput[]
    cursor?: WorkspaceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkspaceScalarFieldEnum | WorkspaceScalarFieldEnum[]
  }

  /**
   * Pikud without action
   */
  export type PikudDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pikud
     */
    select?: PikudSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pikud
     */
    omit?: PikudOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PikudInclude<ExtArgs> | null
  }


  /**
   * Model Source
   */

  export type AggregateSource = {
    _count: SourceCountAggregateOutputType | null
    _avg: SourceAvgAggregateOutputType | null
    _sum: SourceSumAggregateOutputType | null
    _min: SourceMinAggregateOutputType | null
    _max: SourceMaxAggregateOutputType | null
  }

  export type SourceAvgAggregateOutputType = {
    id: number | null
    createdBy: number | null
    updatedBy: number | null
    deletedBy: number | null
  }

  export type SourceSumAggregateOutputType = {
    id: number | null
    createdBy: number | null
    updatedBy: number | null
    deletedBy: number | null
  }

  export type SourceMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    createdBy: number | null
    updatedAt: Date | null
    updatedBy: number | null
    deletedAt: Date | null
    deletedBy: number | null
  }

  export type SourceMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    createdBy: number | null
    updatedAt: Date | null
    updatedBy: number | null
    deletedAt: Date | null
    deletedBy: number | null
  }

  export type SourceCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    createdBy: number
    updatedAt: number
    updatedBy: number
    deletedAt: number
    deletedBy: number
    _all: number
  }


  export type SourceAvgAggregateInputType = {
    id?: true
    createdBy?: true
    updatedBy?: true
    deletedBy?: true
  }

  export type SourceSumAggregateInputType = {
    id?: true
    createdBy?: true
    updatedBy?: true
    deletedBy?: true
  }

  export type SourceMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    deletedAt?: true
    deletedBy?: true
  }

  export type SourceMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    deletedAt?: true
    deletedBy?: true
  }

  export type SourceCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    deletedAt?: true
    deletedBy?: true
    _all?: true
  }

  export type SourceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Source to aggregate.
     */
    where?: SourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sources to fetch.
     */
    orderBy?: SourceOrderByWithRelationInput | SourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sources
    **/
    _count?: true | SourceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SourceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SourceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SourceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SourceMaxAggregateInputType
  }

  export type GetSourceAggregateType<T extends SourceAggregateArgs> = {
        [P in keyof T & keyof AggregateSource]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSource[P]>
      : GetScalarType<T[P], AggregateSource[P]>
  }




  export type SourceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SourceWhereInput
    orderBy?: SourceOrderByWithAggregationInput | SourceOrderByWithAggregationInput[]
    by: SourceScalarFieldEnum[] | SourceScalarFieldEnum
    having?: SourceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SourceCountAggregateInputType | true
    _avg?: SourceAvgAggregateInputType
    _sum?: SourceSumAggregateInputType
    _min?: SourceMinAggregateInputType
    _max?: SourceMaxAggregateInputType
  }

  export type SourceGroupByOutputType = {
    id: number
    name: string
    createdAt: Date
    createdBy: number
    updatedAt: Date
    updatedBy: number
    deletedAt: Date | null
    deletedBy: number | null
    _count: SourceCountAggregateOutputType | null
    _avg: SourceAvgAggregateOutputType | null
    _sum: SourceSumAggregateOutputType | null
    _min: SourceMinAggregateOutputType | null
    _max: SourceMaxAggregateOutputType | null
  }

  type GetSourceGroupByPayload<T extends SourceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SourceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SourceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SourceGroupByOutputType[P]>
            : GetScalarType<T[P], SourceGroupByOutputType[P]>
        }
      >
    >


  export type SourceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
    tasks?: boolean | Source$tasksArgs<ExtArgs>
    _count?: boolean | SourceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["source"]>

  export type SourceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
  }, ExtArgs["result"]["source"]>

  export type SourceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
  }, ExtArgs["result"]["source"]>

  export type SourceSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
  }

  export type SourceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy" | "deletedAt" | "deletedBy", ExtArgs["result"]["source"]>
  export type SourceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | Source$tasksArgs<ExtArgs>
    _count?: boolean | SourceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SourceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SourceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SourcePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Source"
    objects: {
      tasks: Prisma.$TaskPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      createdAt: Date
      createdBy: number
      updatedAt: Date
      updatedBy: number
      deletedAt: Date | null
      deletedBy: number | null
    }, ExtArgs["result"]["source"]>
    composites: {}
  }

  type SourceGetPayload<S extends boolean | null | undefined | SourceDefaultArgs> = $Result.GetResult<Prisma.$SourcePayload, S>

  type SourceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SourceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SourceCountAggregateInputType | true
    }

  export interface SourceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Source'], meta: { name: 'Source' } }
    /**
     * Find zero or one Source that matches the filter.
     * @param {SourceFindUniqueArgs} args - Arguments to find a Source
     * @example
     * // Get one Source
     * const source = await prisma.source.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SourceFindUniqueArgs>(args: SelectSubset<T, SourceFindUniqueArgs<ExtArgs>>): Prisma__SourceClient<$Result.GetResult<Prisma.$SourcePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Source that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SourceFindUniqueOrThrowArgs} args - Arguments to find a Source
     * @example
     * // Get one Source
     * const source = await prisma.source.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SourceFindUniqueOrThrowArgs>(args: SelectSubset<T, SourceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SourceClient<$Result.GetResult<Prisma.$SourcePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Source that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceFindFirstArgs} args - Arguments to find a Source
     * @example
     * // Get one Source
     * const source = await prisma.source.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SourceFindFirstArgs>(args?: SelectSubset<T, SourceFindFirstArgs<ExtArgs>>): Prisma__SourceClient<$Result.GetResult<Prisma.$SourcePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Source that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceFindFirstOrThrowArgs} args - Arguments to find a Source
     * @example
     * // Get one Source
     * const source = await prisma.source.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SourceFindFirstOrThrowArgs>(args?: SelectSubset<T, SourceFindFirstOrThrowArgs<ExtArgs>>): Prisma__SourceClient<$Result.GetResult<Prisma.$SourcePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sources that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sources
     * const sources = await prisma.source.findMany()
     * 
     * // Get first 10 Sources
     * const sources = await prisma.source.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sourceWithIdOnly = await prisma.source.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SourceFindManyArgs>(args?: SelectSubset<T, SourceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SourcePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Source.
     * @param {SourceCreateArgs} args - Arguments to create a Source.
     * @example
     * // Create one Source
     * const Source = await prisma.source.create({
     *   data: {
     *     // ... data to create a Source
     *   }
     * })
     * 
     */
    create<T extends SourceCreateArgs>(args: SelectSubset<T, SourceCreateArgs<ExtArgs>>): Prisma__SourceClient<$Result.GetResult<Prisma.$SourcePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sources.
     * @param {SourceCreateManyArgs} args - Arguments to create many Sources.
     * @example
     * // Create many Sources
     * const source = await prisma.source.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SourceCreateManyArgs>(args?: SelectSubset<T, SourceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sources and returns the data saved in the database.
     * @param {SourceCreateManyAndReturnArgs} args - Arguments to create many Sources.
     * @example
     * // Create many Sources
     * const source = await prisma.source.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sources and only return the `id`
     * const sourceWithIdOnly = await prisma.source.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SourceCreateManyAndReturnArgs>(args?: SelectSubset<T, SourceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SourcePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Source.
     * @param {SourceDeleteArgs} args - Arguments to delete one Source.
     * @example
     * // Delete one Source
     * const Source = await prisma.source.delete({
     *   where: {
     *     // ... filter to delete one Source
     *   }
     * })
     * 
     */
    delete<T extends SourceDeleteArgs>(args: SelectSubset<T, SourceDeleteArgs<ExtArgs>>): Prisma__SourceClient<$Result.GetResult<Prisma.$SourcePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Source.
     * @param {SourceUpdateArgs} args - Arguments to update one Source.
     * @example
     * // Update one Source
     * const source = await prisma.source.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SourceUpdateArgs>(args: SelectSubset<T, SourceUpdateArgs<ExtArgs>>): Prisma__SourceClient<$Result.GetResult<Prisma.$SourcePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sources.
     * @param {SourceDeleteManyArgs} args - Arguments to filter Sources to delete.
     * @example
     * // Delete a few Sources
     * const { count } = await prisma.source.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SourceDeleteManyArgs>(args?: SelectSubset<T, SourceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sources
     * const source = await prisma.source.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SourceUpdateManyArgs>(args: SelectSubset<T, SourceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sources and returns the data updated in the database.
     * @param {SourceUpdateManyAndReturnArgs} args - Arguments to update many Sources.
     * @example
     * // Update many Sources
     * const source = await prisma.source.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sources and only return the `id`
     * const sourceWithIdOnly = await prisma.source.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SourceUpdateManyAndReturnArgs>(args: SelectSubset<T, SourceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SourcePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Source.
     * @param {SourceUpsertArgs} args - Arguments to update or create a Source.
     * @example
     * // Update or create a Source
     * const source = await prisma.source.upsert({
     *   create: {
     *     // ... data to create a Source
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Source we want to update
     *   }
     * })
     */
    upsert<T extends SourceUpsertArgs>(args: SelectSubset<T, SourceUpsertArgs<ExtArgs>>): Prisma__SourceClient<$Result.GetResult<Prisma.$SourcePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sources.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceCountArgs} args - Arguments to filter Sources to count.
     * @example
     * // Count the number of Sources
     * const count = await prisma.source.count({
     *   where: {
     *     // ... the filter for the Sources we want to count
     *   }
     * })
    **/
    count<T extends SourceCountArgs>(
      args?: Subset<T, SourceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SourceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Source.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SourceAggregateArgs>(args: Subset<T, SourceAggregateArgs>): Prisma.PrismaPromise<GetSourceAggregateType<T>>

    /**
     * Group by Source.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SourceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SourceGroupByArgs['orderBy'] }
        : { orderBy?: SourceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SourceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSourceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Source model
   */
  readonly fields: SourceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Source.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SourceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tasks<T extends Source$tasksArgs<ExtArgs> = {}>(args?: Subset<T, Source$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Source model
   */
  interface SourceFieldRefs {
    readonly id: FieldRef<"Source", 'Int'>
    readonly name: FieldRef<"Source", 'String'>
    readonly createdAt: FieldRef<"Source", 'DateTime'>
    readonly createdBy: FieldRef<"Source", 'Int'>
    readonly updatedAt: FieldRef<"Source", 'DateTime'>
    readonly updatedBy: FieldRef<"Source", 'Int'>
    readonly deletedAt: FieldRef<"Source", 'DateTime'>
    readonly deletedBy: FieldRef<"Source", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Source findUnique
   */
  export type SourceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Source
     */
    select?: SourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Source
     */
    omit?: SourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceInclude<ExtArgs> | null
    /**
     * Filter, which Source to fetch.
     */
    where: SourceWhereUniqueInput
  }

  /**
   * Source findUniqueOrThrow
   */
  export type SourceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Source
     */
    select?: SourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Source
     */
    omit?: SourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceInclude<ExtArgs> | null
    /**
     * Filter, which Source to fetch.
     */
    where: SourceWhereUniqueInput
  }

  /**
   * Source findFirst
   */
  export type SourceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Source
     */
    select?: SourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Source
     */
    omit?: SourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceInclude<ExtArgs> | null
    /**
     * Filter, which Source to fetch.
     */
    where?: SourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sources to fetch.
     */
    orderBy?: SourceOrderByWithRelationInput | SourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sources.
     */
    cursor?: SourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sources.
     */
    distinct?: SourceScalarFieldEnum | SourceScalarFieldEnum[]
  }

  /**
   * Source findFirstOrThrow
   */
  export type SourceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Source
     */
    select?: SourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Source
     */
    omit?: SourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceInclude<ExtArgs> | null
    /**
     * Filter, which Source to fetch.
     */
    where?: SourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sources to fetch.
     */
    orderBy?: SourceOrderByWithRelationInput | SourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sources.
     */
    cursor?: SourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sources.
     */
    distinct?: SourceScalarFieldEnum | SourceScalarFieldEnum[]
  }

  /**
   * Source findMany
   */
  export type SourceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Source
     */
    select?: SourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Source
     */
    omit?: SourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceInclude<ExtArgs> | null
    /**
     * Filter, which Sources to fetch.
     */
    where?: SourceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sources to fetch.
     */
    orderBy?: SourceOrderByWithRelationInput | SourceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sources.
     */
    cursor?: SourceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sources from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sources.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sources.
     */
    distinct?: SourceScalarFieldEnum | SourceScalarFieldEnum[]
  }

  /**
   * Source create
   */
  export type SourceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Source
     */
    select?: SourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Source
     */
    omit?: SourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceInclude<ExtArgs> | null
    /**
     * The data needed to create a Source.
     */
    data: XOR<SourceCreateInput, SourceUncheckedCreateInput>
  }

  /**
   * Source createMany
   */
  export type SourceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sources.
     */
    data: SourceCreateManyInput | SourceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Source createManyAndReturn
   */
  export type SourceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Source
     */
    select?: SourceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Source
     */
    omit?: SourceOmit<ExtArgs> | null
    /**
     * The data used to create many Sources.
     */
    data: SourceCreateManyInput | SourceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Source update
   */
  export type SourceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Source
     */
    select?: SourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Source
     */
    omit?: SourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceInclude<ExtArgs> | null
    /**
     * The data needed to update a Source.
     */
    data: XOR<SourceUpdateInput, SourceUncheckedUpdateInput>
    /**
     * Choose, which Source to update.
     */
    where: SourceWhereUniqueInput
  }

  /**
   * Source updateMany
   */
  export type SourceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sources.
     */
    data: XOR<SourceUpdateManyMutationInput, SourceUncheckedUpdateManyInput>
    /**
     * Filter which Sources to update
     */
    where?: SourceWhereInput
    /**
     * Limit how many Sources to update.
     */
    limit?: number
  }

  /**
   * Source updateManyAndReturn
   */
  export type SourceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Source
     */
    select?: SourceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Source
     */
    omit?: SourceOmit<ExtArgs> | null
    /**
     * The data used to update Sources.
     */
    data: XOR<SourceUpdateManyMutationInput, SourceUncheckedUpdateManyInput>
    /**
     * Filter which Sources to update
     */
    where?: SourceWhereInput
    /**
     * Limit how many Sources to update.
     */
    limit?: number
  }

  /**
   * Source upsert
   */
  export type SourceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Source
     */
    select?: SourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Source
     */
    omit?: SourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceInclude<ExtArgs> | null
    /**
     * The filter to search for the Source to update in case it exists.
     */
    where: SourceWhereUniqueInput
    /**
     * In case the Source found by the `where` argument doesn't exist, create a new Source with this data.
     */
    create: XOR<SourceCreateInput, SourceUncheckedCreateInput>
    /**
     * In case the Source was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SourceUpdateInput, SourceUncheckedUpdateInput>
  }

  /**
   * Source delete
   */
  export type SourceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Source
     */
    select?: SourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Source
     */
    omit?: SourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceInclude<ExtArgs> | null
    /**
     * Filter which Source to delete.
     */
    where: SourceWhereUniqueInput
  }

  /**
   * Source deleteMany
   */
  export type SourceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sources to delete
     */
    where?: SourceWhereInput
    /**
     * Limit how many Sources to delete.
     */
    limit?: number
  }

  /**
   * Source.tasks
   */
  export type Source$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Source without action
   */
  export type SourceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Source
     */
    select?: SourceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Source
     */
    omit?: SourceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceInclude<ExtArgs> | null
  }


  /**
   * Model Tag
   */

  export type AggregateTag = {
    _count: TagCountAggregateOutputType | null
    _avg: TagAvgAggregateOutputType | null
    _sum: TagSumAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  export type TagAvgAggregateOutputType = {
    id: number | null
    createdBy: number | null
    updatedBy: number | null
    workspaceId: number | null
  }

  export type TagSumAggregateOutputType = {
    id: number | null
    createdBy: number | null
    updatedBy: number | null
    workspaceId: number | null
  }

  export type TagMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    createdBy: number | null
    updatedAt: Date | null
    updatedBy: number | null
    workspaceId: number | null
  }

  export type TagMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    createdBy: number | null
    updatedAt: Date | null
    updatedBy: number | null
    workspaceId: number | null
  }

  export type TagCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    createdBy: number
    updatedAt: number
    updatedBy: number
    workspaceId: number
    _all: number
  }


  export type TagAvgAggregateInputType = {
    id?: true
    createdBy?: true
    updatedBy?: true
    workspaceId?: true
  }

  export type TagSumAggregateInputType = {
    id?: true
    createdBy?: true
    updatedBy?: true
    workspaceId?: true
  }

  export type TagMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    workspaceId?: true
  }

  export type TagMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    workspaceId?: true
  }

  export type TagCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    workspaceId?: true
    _all?: true
  }

  export type TagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tag to aggregate.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tags
    **/
    _count?: true | TagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TagAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TagSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagMaxAggregateInputType
  }

  export type GetTagAggregateType<T extends TagAggregateArgs> = {
        [P in keyof T & keyof AggregateTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTag[P]>
      : GetScalarType<T[P], AggregateTag[P]>
  }




  export type TagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TagWhereInput
    orderBy?: TagOrderByWithAggregationInput | TagOrderByWithAggregationInput[]
    by: TagScalarFieldEnum[] | TagScalarFieldEnum
    having?: TagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagCountAggregateInputType | true
    _avg?: TagAvgAggregateInputType
    _sum?: TagSumAggregateInputType
    _min?: TagMinAggregateInputType
    _max?: TagMaxAggregateInputType
  }

  export type TagGroupByOutputType = {
    id: number
    name: string
    createdAt: Date
    createdBy: number
    updatedAt: Date
    updatedBy: number
    workspaceId: number
    _count: TagCountAggregateOutputType | null
    _avg: TagAvgAggregateOutputType | null
    _sum: TagSumAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  type GetTagGroupByPayload<T extends TagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagGroupByOutputType[P]>
            : GetScalarType<T[P], TagGroupByOutputType[P]>
        }
      >
    >


  export type TagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    workspaceId?: boolean
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    tasks?: boolean | Tag$tasksArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tag"]>

  export type TagSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    workspaceId?: boolean
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tag"]>

  export type TagSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    workspaceId?: boolean
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tag"]>

  export type TagSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    workspaceId?: boolean
  }

  export type TagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy" | "workspaceId", ExtArgs["result"]["tag"]>
  export type TagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    tasks?: boolean | Tag$tasksArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TagIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }
  export type TagIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }

  export type $TagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tag"
    objects: {
      workspace: Prisma.$WorkspacePayload<ExtArgs>
      tasks: Prisma.$TaskPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      createdAt: Date
      createdBy: number
      updatedAt: Date
      updatedBy: number
      workspaceId: number
    }, ExtArgs["result"]["tag"]>
    composites: {}
  }

  type TagGetPayload<S extends boolean | null | undefined | TagDefaultArgs> = $Result.GetResult<Prisma.$TagPayload, S>

  type TagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TagCountAggregateInputType | true
    }

  export interface TagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tag'], meta: { name: 'Tag' } }
    /**
     * Find zero or one Tag that matches the filter.
     * @param {TagFindUniqueArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TagFindUniqueArgs>(args: SelectSubset<T, TagFindUniqueArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TagFindUniqueOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TagFindUniqueOrThrowArgs>(args: SelectSubset<T, TagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TagFindFirstArgs>(args?: SelectSubset<T, TagFindFirstArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TagFindFirstOrThrowArgs>(args?: SelectSubset<T, TagFindFirstOrThrowArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tag.findMany()
     * 
     * // Get first 10 Tags
     * const tags = await prisma.tag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tagWithIdOnly = await prisma.tag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TagFindManyArgs>(args?: SelectSubset<T, TagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tag.
     * @param {TagCreateArgs} args - Arguments to create a Tag.
     * @example
     * // Create one Tag
     * const Tag = await prisma.tag.create({
     *   data: {
     *     // ... data to create a Tag
     *   }
     * })
     * 
     */
    create<T extends TagCreateArgs>(args: SelectSubset<T, TagCreateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tags.
     * @param {TagCreateManyArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TagCreateManyArgs>(args?: SelectSubset<T, TagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tags and returns the data saved in the database.
     * @param {TagCreateManyAndReturnArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TagCreateManyAndReturnArgs>(args?: SelectSubset<T, TagCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tag.
     * @param {TagDeleteArgs} args - Arguments to delete one Tag.
     * @example
     * // Delete one Tag
     * const Tag = await prisma.tag.delete({
     *   where: {
     *     // ... filter to delete one Tag
     *   }
     * })
     * 
     */
    delete<T extends TagDeleteArgs>(args: SelectSubset<T, TagDeleteArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tag.
     * @param {TagUpdateArgs} args - Arguments to update one Tag.
     * @example
     * // Update one Tag
     * const tag = await prisma.tag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TagUpdateArgs>(args: SelectSubset<T, TagUpdateArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tags.
     * @param {TagDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TagDeleteManyArgs>(args?: SelectSubset<T, TagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TagUpdateManyArgs>(args: SelectSubset<T, TagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags and returns the data updated in the database.
     * @param {TagUpdateManyAndReturnArgs} args - Arguments to update many Tags.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tags and only return the `id`
     * const tagWithIdOnly = await prisma.tag.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TagUpdateManyAndReturnArgs>(args: SelectSubset<T, TagUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tag.
     * @param {TagUpsertArgs} args - Arguments to update or create a Tag.
     * @example
     * // Update or create a Tag
     * const tag = await prisma.tag.upsert({
     *   create: {
     *     // ... data to create a Tag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tag we want to update
     *   }
     * })
     */
    upsert<T extends TagUpsertArgs>(args: SelectSubset<T, TagUpsertArgs<ExtArgs>>): Prisma__TagClient<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tag.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
    **/
    count<T extends TagCountArgs>(
      args?: Subset<T, TagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TagAggregateArgs>(args: Subset<T, TagAggregateArgs>): Prisma.PrismaPromise<GetTagAggregateType<T>>

    /**
     * Group by Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TagGroupByArgs['orderBy'] }
        : { orderBy?: TagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tag model
   */
  readonly fields: TagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workspace<T extends WorkspaceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkspaceDefaultArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tasks<T extends Tag$tasksArgs<ExtArgs> = {}>(args?: Subset<T, Tag$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Tag model
   */
  interface TagFieldRefs {
    readonly id: FieldRef<"Tag", 'Int'>
    readonly name: FieldRef<"Tag", 'String'>
    readonly createdAt: FieldRef<"Tag", 'DateTime'>
    readonly createdBy: FieldRef<"Tag", 'Int'>
    readonly updatedAt: FieldRef<"Tag", 'DateTime'>
    readonly updatedBy: FieldRef<"Tag", 'Int'>
    readonly workspaceId: FieldRef<"Tag", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Tag findUnique
   */
  export type TagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findUniqueOrThrow
   */
  export type TagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findFirst
   */
  export type TagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findFirstOrThrow
   */
  export type TagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag findMany
   */
  export type TagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter, which Tags to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Tag create
   */
  export type TagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to create a Tag.
     */
    data: XOR<TagCreateInput, TagUncheckedCreateInput>
  }

  /**
   * Tag createMany
   */
  export type TagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tag createManyAndReturn
   */
  export type TagCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * The data used to create many Tags.
     */
    data: TagCreateManyInput | TagCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tag update
   */
  export type TagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The data needed to update a Tag.
     */
    data: XOR<TagUpdateInput, TagUncheckedUpdateInput>
    /**
     * Choose, which Tag to update.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag updateMany
   */
  export type TagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
  }

  /**
   * Tag updateManyAndReturn
   */
  export type TagUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Tag upsert
   */
  export type TagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * The filter to search for the Tag to update in case it exists.
     */
    where: TagWhereUniqueInput
    /**
     * In case the Tag found by the `where` argument doesn't exist, create a new Tag with this data.
     */
    create: XOR<TagCreateInput, TagUncheckedCreateInput>
    /**
     * In case the Tag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TagUpdateInput, TagUncheckedUpdateInput>
  }

  /**
   * Tag delete
   */
  export type TagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    /**
     * Filter which Tag to delete.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag deleteMany
   */
  export type TagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tags to delete
     */
    where?: TagWhereInput
    /**
     * Limit how many Tags to delete.
     */
    limit?: number
  }

  /**
   * Tag.tasks
   */
  export type Tag$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Tag without action
   */
  export type TagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
  }


  /**
   * Model Task
   */

  export type AggregateTask = {
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  export type TaskAvgAggregateOutputType = {
    id: number | null
    createdBy: number | null
    updatedBy: number | null
    deletedBy: number | null
    workspaceId: number | null
    sourceId: number | null
  }

  export type TaskSumAggregateOutputType = {
    id: number | null
    createdBy: number | null
    updatedBy: number | null
    deletedBy: number | null
    workspaceId: number | null
    sourceId: number | null
  }

  export type TaskMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    flagged: boolean | null
    deadlineType: string | null
    issuedAt: Date | null
    dueDate: Date | null
    createdAt: Date | null
    createdBy: number | null
    updatedAt: Date | null
    updatedBy: number | null
    deletedAt: Date | null
    deletedBy: number | null
    workspaceId: number | null
    sourceId: number | null
  }

  export type TaskMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    flagged: boolean | null
    deadlineType: string | null
    issuedAt: Date | null
    dueDate: Date | null
    createdAt: Date | null
    createdBy: number | null
    updatedAt: Date | null
    updatedBy: number | null
    deletedAt: Date | null
    deletedBy: number | null
    workspaceId: number | null
    sourceId: number | null
  }

  export type TaskCountAggregateOutputType = {
    id: number
    title: number
    description: number
    flagged: number
    deadlineType: number
    issuedAt: number
    dueDate: number
    notes: number
    createdAt: number
    createdBy: number
    updatedAt: number
    updatedBy: number
    deletedAt: number
    deletedBy: number
    workspaceId: number
    sourceId: number
    _all: number
  }


  export type TaskAvgAggregateInputType = {
    id?: true
    createdBy?: true
    updatedBy?: true
    deletedBy?: true
    workspaceId?: true
    sourceId?: true
  }

  export type TaskSumAggregateInputType = {
    id?: true
    createdBy?: true
    updatedBy?: true
    deletedBy?: true
    workspaceId?: true
    sourceId?: true
  }

  export type TaskMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    flagged?: true
    deadlineType?: true
    issuedAt?: true
    dueDate?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    deletedAt?: true
    deletedBy?: true
    workspaceId?: true
    sourceId?: true
  }

  export type TaskMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    flagged?: true
    deadlineType?: true
    issuedAt?: true
    dueDate?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    deletedAt?: true
    deletedBy?: true
    workspaceId?: true
    sourceId?: true
  }

  export type TaskCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    flagged?: true
    deadlineType?: true
    issuedAt?: true
    dueDate?: true
    notes?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    deletedAt?: true
    deletedBy?: true
    workspaceId?: true
    sourceId?: true
    _all?: true
  }

  export type TaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Task to aggregate.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tasks
    **/
    _count?: true | TaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TaskAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TaskSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskMaxAggregateInputType
  }

  export type GetTaskAggregateType<T extends TaskAggregateArgs> = {
        [P in keyof T & keyof AggregateTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTask[P]>
      : GetScalarType<T[P], AggregateTask[P]>
  }




  export type TaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithAggregationInput | TaskOrderByWithAggregationInput[]
    by: TaskScalarFieldEnum[] | TaskScalarFieldEnum
    having?: TaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskCountAggregateInputType | true
    _avg?: TaskAvgAggregateInputType
    _sum?: TaskSumAggregateInputType
    _min?: TaskMinAggregateInputType
    _max?: TaskMaxAggregateInputType
  }

  export type TaskGroupByOutputType = {
    id: number
    title: string
    description: string | null
    flagged: boolean
    deadlineType: string
    issuedAt: Date
    dueDate: Date
    notes: JsonValue | null
    createdAt: Date
    createdBy: number
    updatedAt: Date
    updatedBy: number
    deletedAt: Date | null
    deletedBy: number | null
    workspaceId: number
    sourceId: number
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  type GetTaskGroupByPayload<T extends TaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskGroupByOutputType[P]>
            : GetScalarType<T[P], TaskGroupByOutputType[P]>
        }
      >
    >


  export type TaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    flagged?: boolean
    deadlineType?: boolean
    issuedAt?: boolean
    dueDate?: boolean
    notes?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
    workspaceId?: boolean
    sourceId?: boolean
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    source?: boolean | SourceDefaultArgs<ExtArgs>
    tags?: boolean | Task$tagsArgs<ExtArgs>
    assigneeStatuses?: boolean | Task$assigneeStatusesArgs<ExtArgs>
    messages?: boolean | Task$messagesArgs<ExtArgs>
    history?: boolean | Task$historyArgs<ExtArgs>
    _count?: boolean | TaskCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    flagged?: boolean
    deadlineType?: boolean
    issuedAt?: boolean
    dueDate?: boolean
    notes?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
    workspaceId?: boolean
    sourceId?: boolean
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    source?: boolean | SourceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    flagged?: boolean
    deadlineType?: boolean
    issuedAt?: boolean
    dueDate?: boolean
    notes?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
    workspaceId?: boolean
    sourceId?: boolean
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    source?: boolean | SourceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    flagged?: boolean
    deadlineType?: boolean
    issuedAt?: boolean
    dueDate?: boolean
    notes?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
    workspaceId?: boolean
    sourceId?: boolean
  }

  export type TaskOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "flagged" | "deadlineType" | "issuedAt" | "dueDate" | "notes" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy" | "deletedAt" | "deletedBy" | "workspaceId" | "sourceId", ExtArgs["result"]["task"]>
  export type TaskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    source?: boolean | SourceDefaultArgs<ExtArgs>
    tags?: boolean | Task$tagsArgs<ExtArgs>
    assigneeStatuses?: boolean | Task$assigneeStatusesArgs<ExtArgs>
    messages?: boolean | Task$messagesArgs<ExtArgs>
    history?: boolean | Task$historyArgs<ExtArgs>
    _count?: boolean | TaskCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TaskIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    source?: boolean | SourceDefaultArgs<ExtArgs>
  }
  export type TaskIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    source?: boolean | SourceDefaultArgs<ExtArgs>
  }

  export type $TaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Task"
    objects: {
      workspace: Prisma.$WorkspacePayload<ExtArgs>
      source: Prisma.$SourcePayload<ExtArgs>
      tags: Prisma.$TagPayload<ExtArgs>[]
      assigneeStatuses: Prisma.$AssigneeTaskStatusPayload<ExtArgs>[]
      messages: Prisma.$MessagePayload<ExtArgs>[]
      history: Prisma.$TaskHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string | null
      flagged: boolean
      deadlineType: string
      issuedAt: Date
      dueDate: Date
      notes: Prisma.JsonValue | null
      createdAt: Date
      createdBy: number
      updatedAt: Date
      updatedBy: number
      deletedAt: Date | null
      deletedBy: number | null
      workspaceId: number
      sourceId: number
    }, ExtArgs["result"]["task"]>
    composites: {}
  }

  type TaskGetPayload<S extends boolean | null | undefined | TaskDefaultArgs> = $Result.GetResult<Prisma.$TaskPayload, S>

  type TaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TaskFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaskCountAggregateInputType | true
    }

  export interface TaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Task'], meta: { name: 'Task' } }
    /**
     * Find zero or one Task that matches the filter.
     * @param {TaskFindUniqueArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskFindUniqueArgs>(args: SelectSubset<T, TaskFindUniqueArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Task that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TaskFindUniqueOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskFindFirstArgs>(args?: SelectSubset<T, TaskFindFirstArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Task that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tasks
     * const tasks = await prisma.task.findMany()
     * 
     * // Get first 10 Tasks
     * const tasks = await prisma.task.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskWithIdOnly = await prisma.task.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaskFindManyArgs>(args?: SelectSubset<T, TaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Task.
     * @param {TaskCreateArgs} args - Arguments to create a Task.
     * @example
     * // Create one Task
     * const Task = await prisma.task.create({
     *   data: {
     *     // ... data to create a Task
     *   }
     * })
     * 
     */
    create<T extends TaskCreateArgs>(args: SelectSubset<T, TaskCreateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tasks.
     * @param {TaskCreateManyArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaskCreateManyArgs>(args?: SelectSubset<T, TaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tasks and returns the data saved in the database.
     * @param {TaskCreateManyAndReturnArgs} args - Arguments to create many Tasks.
     * @example
     * // Create many Tasks
     * const task = await prisma.task.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tasks and only return the `id`
     * const taskWithIdOnly = await prisma.task.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TaskCreateManyAndReturnArgs>(args?: SelectSubset<T, TaskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Task.
     * @param {TaskDeleteArgs} args - Arguments to delete one Task.
     * @example
     * // Delete one Task
     * const Task = await prisma.task.delete({
     *   where: {
     *     // ... filter to delete one Task
     *   }
     * })
     * 
     */
    delete<T extends TaskDeleteArgs>(args: SelectSubset<T, TaskDeleteArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Task.
     * @param {TaskUpdateArgs} args - Arguments to update one Task.
     * @example
     * // Update one Task
     * const task = await prisma.task.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaskUpdateArgs>(args: SelectSubset<T, TaskUpdateArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tasks.
     * @param {TaskDeleteManyArgs} args - Arguments to filter Tasks to delete.
     * @example
     * // Delete a few Tasks
     * const { count } = await prisma.task.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaskDeleteManyArgs>(args?: SelectSubset<T, TaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaskUpdateManyArgs>(args: SelectSubset<T, TaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks and returns the data updated in the database.
     * @param {TaskUpdateManyAndReturnArgs} args - Arguments to update many Tasks.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tasks and only return the `id`
     * const taskWithIdOnly = await prisma.task.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TaskUpdateManyAndReturnArgs>(args: SelectSubset<T, TaskUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Task.
     * @param {TaskUpsertArgs} args - Arguments to update or create a Task.
     * @example
     * // Update or create a Task
     * const task = await prisma.task.upsert({
     *   create: {
     *     // ... data to create a Task
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Task we want to update
     *   }
     * })
     */
    upsert<T extends TaskUpsertArgs>(args: SelectSubset<T, TaskUpsertArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskCountArgs} args - Arguments to filter Tasks to count.
     * @example
     * // Count the number of Tasks
     * const count = await prisma.task.count({
     *   where: {
     *     // ... the filter for the Tasks we want to count
     *   }
     * })
    **/
    count<T extends TaskCountArgs>(
      args?: Subset<T, TaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TaskAggregateArgs>(args: Subset<T, TaskAggregateArgs>): Prisma.PrismaPromise<GetTaskAggregateType<T>>

    /**
     * Group by Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskGroupByArgs['orderBy'] }
        : { orderBy?: TaskGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Task model
   */
  readonly fields: TaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Task.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workspace<T extends WorkspaceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkspaceDefaultArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    source<T extends SourceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SourceDefaultArgs<ExtArgs>>): Prisma__SourceClient<$Result.GetResult<Prisma.$SourcePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tags<T extends Task$tagsArgs<ExtArgs> = {}>(args?: Subset<T, Task$tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    assigneeStatuses<T extends Task$assigneeStatusesArgs<ExtArgs> = {}>(args?: Subset<T, Task$assigneeStatusesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssigneeTaskStatusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    messages<T extends Task$messagesArgs<ExtArgs> = {}>(args?: Subset<T, Task$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    history<T extends Task$historyArgs<ExtArgs> = {}>(args?: Subset<T, Task$historyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Task model
   */
  interface TaskFieldRefs {
    readonly id: FieldRef<"Task", 'Int'>
    readonly title: FieldRef<"Task", 'String'>
    readonly description: FieldRef<"Task", 'String'>
    readonly flagged: FieldRef<"Task", 'Boolean'>
    readonly deadlineType: FieldRef<"Task", 'String'>
    readonly issuedAt: FieldRef<"Task", 'DateTime'>
    readonly dueDate: FieldRef<"Task", 'DateTime'>
    readonly notes: FieldRef<"Task", 'Json'>
    readonly createdAt: FieldRef<"Task", 'DateTime'>
    readonly createdBy: FieldRef<"Task", 'Int'>
    readonly updatedAt: FieldRef<"Task", 'DateTime'>
    readonly updatedBy: FieldRef<"Task", 'Int'>
    readonly deletedAt: FieldRef<"Task", 'DateTime'>
    readonly deletedBy: FieldRef<"Task", 'Int'>
    readonly workspaceId: FieldRef<"Task", 'Int'>
    readonly sourceId: FieldRef<"Task", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Task findUnique
   */
  export type TaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findUniqueOrThrow
   */
  export type TaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findFirst
   */
  export type TaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findFirstOrThrow
   */
  export type TaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findMany
   */
  export type TaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Tasks to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task create
   */
  export type TaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to create a Task.
     */
    data: XOR<TaskCreateInput, TaskUncheckedCreateInput>
  }

  /**
   * Task createMany
   */
  export type TaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Task createManyAndReturn
   */
  export type TaskCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Task update
   */
  export type TaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to update a Task.
     */
    data: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
    /**
     * Choose, which Task to update.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task updateMany
   */
  export type TaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to update.
     */
    limit?: number
  }

  /**
   * Task updateManyAndReturn
   */
  export type TaskUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Task upsert
   */
  export type TaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The filter to search for the Task to update in case it exists.
     */
    where: TaskWhereUniqueInput
    /**
     * In case the Task found by the `where` argument doesn't exist, create a new Task with this data.
     */
    create: XOR<TaskCreateInput, TaskUncheckedCreateInput>
    /**
     * In case the Task was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
  }

  /**
   * Task delete
   */
  export type TaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter which Task to delete.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task deleteMany
   */
  export type TaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tasks to delete
     */
    where?: TaskWhereInput
    /**
     * Limit how many Tasks to delete.
     */
    limit?: number
  }

  /**
   * Task.tags
   */
  export type Task$tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    where?: TagWhereInput
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    cursor?: TagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Task.assigneeStatuses
   */
  export type Task$assigneeStatusesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssigneeTaskStatus
     */
    select?: AssigneeTaskStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssigneeTaskStatus
     */
    omit?: AssigneeTaskStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssigneeTaskStatusInclude<ExtArgs> | null
    where?: AssigneeTaskStatusWhereInput
    orderBy?: AssigneeTaskStatusOrderByWithRelationInput | AssigneeTaskStatusOrderByWithRelationInput[]
    cursor?: AssigneeTaskStatusWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssigneeTaskStatusScalarFieldEnum | AssigneeTaskStatusScalarFieldEnum[]
  }

  /**
   * Task.messages
   */
  export type Task$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Task.history
   */
  export type Task$historyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskHistory
     */
    select?: TaskHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskHistory
     */
    omit?: TaskHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskHistoryInclude<ExtArgs> | null
    where?: TaskHistoryWhereInput
    orderBy?: TaskHistoryOrderByWithRelationInput | TaskHistoryOrderByWithRelationInput[]
    cursor?: TaskHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskHistoryScalarFieldEnum | TaskHistoryScalarFieldEnum[]
  }

  /**
   * Task without action
   */
  export type TaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
  }


  /**
   * Model TaskHistory
   */

  export type AggregateTaskHistory = {
    _count: TaskHistoryCountAggregateOutputType | null
    _avg: TaskHistoryAvgAggregateOutputType | null
    _sum: TaskHistorySumAggregateOutputType | null
    _min: TaskHistoryMinAggregateOutputType | null
    _max: TaskHistoryMaxAggregateOutputType | null
  }

  export type TaskHistoryAvgAggregateOutputType = {
    id: number | null
    taskId: number | null
    workspaceId: number | null
    userId: number | null
  }

  export type TaskHistorySumAggregateOutputType = {
    id: number | null
    taskId: number | null
    workspaceId: number | null
    userId: number | null
  }

  export type TaskHistoryMinAggregateOutputType = {
    id: number | null
    action: $Enums.HistoryAction | null
    field: string | null
    value: string | null
    timestamp: Date | null
    taskId: number | null
    workspaceId: number | null
    userId: number | null
  }

  export type TaskHistoryMaxAggregateOutputType = {
    id: number | null
    action: $Enums.HistoryAction | null
    field: string | null
    value: string | null
    timestamp: Date | null
    taskId: number | null
    workspaceId: number | null
    userId: number | null
  }

  export type TaskHistoryCountAggregateOutputType = {
    id: number
    action: number
    field: number
    value: number
    timestamp: number
    taskId: number
    workspaceId: number
    userId: number
    _all: number
  }


  export type TaskHistoryAvgAggregateInputType = {
    id?: true
    taskId?: true
    workspaceId?: true
    userId?: true
  }

  export type TaskHistorySumAggregateInputType = {
    id?: true
    taskId?: true
    workspaceId?: true
    userId?: true
  }

  export type TaskHistoryMinAggregateInputType = {
    id?: true
    action?: true
    field?: true
    value?: true
    timestamp?: true
    taskId?: true
    workspaceId?: true
    userId?: true
  }

  export type TaskHistoryMaxAggregateInputType = {
    id?: true
    action?: true
    field?: true
    value?: true
    timestamp?: true
    taskId?: true
    workspaceId?: true
    userId?: true
  }

  export type TaskHistoryCountAggregateInputType = {
    id?: true
    action?: true
    field?: true
    value?: true
    timestamp?: true
    taskId?: true
    workspaceId?: true
    userId?: true
    _all?: true
  }

  export type TaskHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaskHistory to aggregate.
     */
    where?: TaskHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskHistories to fetch.
     */
    orderBy?: TaskHistoryOrderByWithRelationInput | TaskHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TaskHistories
    **/
    _count?: true | TaskHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TaskHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TaskHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskHistoryMaxAggregateInputType
  }

  export type GetTaskHistoryAggregateType<T extends TaskHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateTaskHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTaskHistory[P]>
      : GetScalarType<T[P], AggregateTaskHistory[P]>
  }




  export type TaskHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskHistoryWhereInput
    orderBy?: TaskHistoryOrderByWithAggregationInput | TaskHistoryOrderByWithAggregationInput[]
    by: TaskHistoryScalarFieldEnum[] | TaskHistoryScalarFieldEnum
    having?: TaskHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskHistoryCountAggregateInputType | true
    _avg?: TaskHistoryAvgAggregateInputType
    _sum?: TaskHistorySumAggregateInputType
    _min?: TaskHistoryMinAggregateInputType
    _max?: TaskHistoryMaxAggregateInputType
  }

  export type TaskHistoryGroupByOutputType = {
    id: number
    action: $Enums.HistoryAction
    field: string
    value: string | null
    timestamp: Date
    taskId: number
    workspaceId: number
    userId: number
    _count: TaskHistoryCountAggregateOutputType | null
    _avg: TaskHistoryAvgAggregateOutputType | null
    _sum: TaskHistorySumAggregateOutputType | null
    _min: TaskHistoryMinAggregateOutputType | null
    _max: TaskHistoryMaxAggregateOutputType | null
  }

  type GetTaskHistoryGroupByPayload<T extends TaskHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], TaskHistoryGroupByOutputType[P]>
        }
      >
    >


  export type TaskHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    action?: boolean
    field?: boolean
    value?: boolean
    timestamp?: boolean
    taskId?: boolean
    workspaceId?: boolean
    userId?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taskHistory"]>

  export type TaskHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    action?: boolean
    field?: boolean
    value?: boolean
    timestamp?: boolean
    taskId?: boolean
    workspaceId?: boolean
    userId?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taskHistory"]>

  export type TaskHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    action?: boolean
    field?: boolean
    value?: boolean
    timestamp?: boolean
    taskId?: boolean
    workspaceId?: boolean
    userId?: boolean
    task?: boolean | TaskDefaultArgs<ExtArgs>
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["taskHistory"]>

  export type TaskHistorySelectScalar = {
    id?: boolean
    action?: boolean
    field?: boolean
    value?: boolean
    timestamp?: boolean
    taskId?: boolean
    workspaceId?: boolean
    userId?: boolean
  }

  export type TaskHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "action" | "field" | "value" | "timestamp" | "taskId" | "workspaceId" | "userId", ExtArgs["result"]["taskHistory"]>
  export type TaskHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TaskHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TaskHistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    task?: boolean | TaskDefaultArgs<ExtArgs>
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TaskHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TaskHistory"
    objects: {
      task: Prisma.$TaskPayload<ExtArgs>
      workspace: Prisma.$WorkspacePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      action: $Enums.HistoryAction
      field: string
      value: string | null
      timestamp: Date
      taskId: number
      workspaceId: number
      userId: number
    }, ExtArgs["result"]["taskHistory"]>
    composites: {}
  }

  type TaskHistoryGetPayload<S extends boolean | null | undefined | TaskHistoryDefaultArgs> = $Result.GetResult<Prisma.$TaskHistoryPayload, S>

  type TaskHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TaskHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TaskHistoryCountAggregateInputType | true
    }

  export interface TaskHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TaskHistory'], meta: { name: 'TaskHistory' } }
    /**
     * Find zero or one TaskHistory that matches the filter.
     * @param {TaskHistoryFindUniqueArgs} args - Arguments to find a TaskHistory
     * @example
     * // Get one TaskHistory
     * const taskHistory = await prisma.taskHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TaskHistoryFindUniqueArgs>(args: SelectSubset<T, TaskHistoryFindUniqueArgs<ExtArgs>>): Prisma__TaskHistoryClient<$Result.GetResult<Prisma.$TaskHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TaskHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TaskHistoryFindUniqueOrThrowArgs} args - Arguments to find a TaskHistory
     * @example
     * // Get one TaskHistory
     * const taskHistory = await prisma.taskHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TaskHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, TaskHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TaskHistoryClient<$Result.GetResult<Prisma.$TaskHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TaskHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskHistoryFindFirstArgs} args - Arguments to find a TaskHistory
     * @example
     * // Get one TaskHistory
     * const taskHistory = await prisma.taskHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TaskHistoryFindFirstArgs>(args?: SelectSubset<T, TaskHistoryFindFirstArgs<ExtArgs>>): Prisma__TaskHistoryClient<$Result.GetResult<Prisma.$TaskHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TaskHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskHistoryFindFirstOrThrowArgs} args - Arguments to find a TaskHistory
     * @example
     * // Get one TaskHistory
     * const taskHistory = await prisma.taskHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TaskHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, TaskHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__TaskHistoryClient<$Result.GetResult<Prisma.$TaskHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TaskHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TaskHistories
     * const taskHistories = await prisma.taskHistory.findMany()
     * 
     * // Get first 10 TaskHistories
     * const taskHistories = await prisma.taskHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskHistoryWithIdOnly = await prisma.taskHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TaskHistoryFindManyArgs>(args?: SelectSubset<T, TaskHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TaskHistory.
     * @param {TaskHistoryCreateArgs} args - Arguments to create a TaskHistory.
     * @example
     * // Create one TaskHistory
     * const TaskHistory = await prisma.taskHistory.create({
     *   data: {
     *     // ... data to create a TaskHistory
     *   }
     * })
     * 
     */
    create<T extends TaskHistoryCreateArgs>(args: SelectSubset<T, TaskHistoryCreateArgs<ExtArgs>>): Prisma__TaskHistoryClient<$Result.GetResult<Prisma.$TaskHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TaskHistories.
     * @param {TaskHistoryCreateManyArgs} args - Arguments to create many TaskHistories.
     * @example
     * // Create many TaskHistories
     * const taskHistory = await prisma.taskHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TaskHistoryCreateManyArgs>(args?: SelectSubset<T, TaskHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TaskHistories and returns the data saved in the database.
     * @param {TaskHistoryCreateManyAndReturnArgs} args - Arguments to create many TaskHistories.
     * @example
     * // Create many TaskHistories
     * const taskHistory = await prisma.taskHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TaskHistories and only return the `id`
     * const taskHistoryWithIdOnly = await prisma.taskHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TaskHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, TaskHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TaskHistory.
     * @param {TaskHistoryDeleteArgs} args - Arguments to delete one TaskHistory.
     * @example
     * // Delete one TaskHistory
     * const TaskHistory = await prisma.taskHistory.delete({
     *   where: {
     *     // ... filter to delete one TaskHistory
     *   }
     * })
     * 
     */
    delete<T extends TaskHistoryDeleteArgs>(args: SelectSubset<T, TaskHistoryDeleteArgs<ExtArgs>>): Prisma__TaskHistoryClient<$Result.GetResult<Prisma.$TaskHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TaskHistory.
     * @param {TaskHistoryUpdateArgs} args - Arguments to update one TaskHistory.
     * @example
     * // Update one TaskHistory
     * const taskHistory = await prisma.taskHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TaskHistoryUpdateArgs>(args: SelectSubset<T, TaskHistoryUpdateArgs<ExtArgs>>): Prisma__TaskHistoryClient<$Result.GetResult<Prisma.$TaskHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TaskHistories.
     * @param {TaskHistoryDeleteManyArgs} args - Arguments to filter TaskHistories to delete.
     * @example
     * // Delete a few TaskHistories
     * const { count } = await prisma.taskHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TaskHistoryDeleteManyArgs>(args?: SelectSubset<T, TaskHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TaskHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TaskHistories
     * const taskHistory = await prisma.taskHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TaskHistoryUpdateManyArgs>(args: SelectSubset<T, TaskHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TaskHistories and returns the data updated in the database.
     * @param {TaskHistoryUpdateManyAndReturnArgs} args - Arguments to update many TaskHistories.
     * @example
     * // Update many TaskHistories
     * const taskHistory = await prisma.taskHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TaskHistories and only return the `id`
     * const taskHistoryWithIdOnly = await prisma.taskHistory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TaskHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, TaskHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TaskHistory.
     * @param {TaskHistoryUpsertArgs} args - Arguments to update or create a TaskHistory.
     * @example
     * // Update or create a TaskHistory
     * const taskHistory = await prisma.taskHistory.upsert({
     *   create: {
     *     // ... data to create a TaskHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TaskHistory we want to update
     *   }
     * })
     */
    upsert<T extends TaskHistoryUpsertArgs>(args: SelectSubset<T, TaskHistoryUpsertArgs<ExtArgs>>): Prisma__TaskHistoryClient<$Result.GetResult<Prisma.$TaskHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TaskHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskHistoryCountArgs} args - Arguments to filter TaskHistories to count.
     * @example
     * // Count the number of TaskHistories
     * const count = await prisma.taskHistory.count({
     *   where: {
     *     // ... the filter for the TaskHistories we want to count
     *   }
     * })
    **/
    count<T extends TaskHistoryCountArgs>(
      args?: Subset<T, TaskHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TaskHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TaskHistoryAggregateArgs>(args: Subset<T, TaskHistoryAggregateArgs>): Prisma.PrismaPromise<GetTaskHistoryAggregateType<T>>

    /**
     * Group by TaskHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TaskHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskHistoryGroupByArgs['orderBy'] }
        : { orderBy?: TaskHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TaskHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TaskHistory model
   */
  readonly fields: TaskHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TaskHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    task<T extends TaskDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TaskDefaultArgs<ExtArgs>>): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    workspace<T extends WorkspaceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkspaceDefaultArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TaskHistory model
   */
  interface TaskHistoryFieldRefs {
    readonly id: FieldRef<"TaskHistory", 'Int'>
    readonly action: FieldRef<"TaskHistory", 'HistoryAction'>
    readonly field: FieldRef<"TaskHistory", 'String'>
    readonly value: FieldRef<"TaskHistory", 'String'>
    readonly timestamp: FieldRef<"TaskHistory", 'DateTime'>
    readonly taskId: FieldRef<"TaskHistory", 'Int'>
    readonly workspaceId: FieldRef<"TaskHistory", 'Int'>
    readonly userId: FieldRef<"TaskHistory", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * TaskHistory findUnique
   */
  export type TaskHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskHistory
     */
    select?: TaskHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskHistory
     */
    omit?: TaskHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskHistoryInclude<ExtArgs> | null
    /**
     * Filter, which TaskHistory to fetch.
     */
    where: TaskHistoryWhereUniqueInput
  }

  /**
   * TaskHistory findUniqueOrThrow
   */
  export type TaskHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskHistory
     */
    select?: TaskHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskHistory
     */
    omit?: TaskHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskHistoryInclude<ExtArgs> | null
    /**
     * Filter, which TaskHistory to fetch.
     */
    where: TaskHistoryWhereUniqueInput
  }

  /**
   * TaskHistory findFirst
   */
  export type TaskHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskHistory
     */
    select?: TaskHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskHistory
     */
    omit?: TaskHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskHistoryInclude<ExtArgs> | null
    /**
     * Filter, which TaskHistory to fetch.
     */
    where?: TaskHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskHistories to fetch.
     */
    orderBy?: TaskHistoryOrderByWithRelationInput | TaskHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaskHistories.
     */
    cursor?: TaskHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaskHistories.
     */
    distinct?: TaskHistoryScalarFieldEnum | TaskHistoryScalarFieldEnum[]
  }

  /**
   * TaskHistory findFirstOrThrow
   */
  export type TaskHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskHistory
     */
    select?: TaskHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskHistory
     */
    omit?: TaskHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskHistoryInclude<ExtArgs> | null
    /**
     * Filter, which TaskHistory to fetch.
     */
    where?: TaskHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskHistories to fetch.
     */
    orderBy?: TaskHistoryOrderByWithRelationInput | TaskHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaskHistories.
     */
    cursor?: TaskHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaskHistories.
     */
    distinct?: TaskHistoryScalarFieldEnum | TaskHistoryScalarFieldEnum[]
  }

  /**
   * TaskHistory findMany
   */
  export type TaskHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskHistory
     */
    select?: TaskHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskHistory
     */
    omit?: TaskHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskHistoryInclude<ExtArgs> | null
    /**
     * Filter, which TaskHistories to fetch.
     */
    where?: TaskHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskHistories to fetch.
     */
    orderBy?: TaskHistoryOrderByWithRelationInput | TaskHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TaskHistories.
     */
    cursor?: TaskHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaskHistories.
     */
    distinct?: TaskHistoryScalarFieldEnum | TaskHistoryScalarFieldEnum[]
  }

  /**
   * TaskHistory create
   */
  export type TaskHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskHistory
     */
    select?: TaskHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskHistory
     */
    omit?: TaskHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a TaskHistory.
     */
    data: XOR<TaskHistoryCreateInput, TaskHistoryUncheckedCreateInput>
  }

  /**
   * TaskHistory createMany
   */
  export type TaskHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TaskHistories.
     */
    data: TaskHistoryCreateManyInput | TaskHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TaskHistory createManyAndReturn
   */
  export type TaskHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskHistory
     */
    select?: TaskHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TaskHistory
     */
    omit?: TaskHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many TaskHistories.
     */
    data: TaskHistoryCreateManyInput | TaskHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TaskHistory update
   */
  export type TaskHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskHistory
     */
    select?: TaskHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskHistory
     */
    omit?: TaskHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a TaskHistory.
     */
    data: XOR<TaskHistoryUpdateInput, TaskHistoryUncheckedUpdateInput>
    /**
     * Choose, which TaskHistory to update.
     */
    where: TaskHistoryWhereUniqueInput
  }

  /**
   * TaskHistory updateMany
   */
  export type TaskHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TaskHistories.
     */
    data: XOR<TaskHistoryUpdateManyMutationInput, TaskHistoryUncheckedUpdateManyInput>
    /**
     * Filter which TaskHistories to update
     */
    where?: TaskHistoryWhereInput
    /**
     * Limit how many TaskHistories to update.
     */
    limit?: number
  }

  /**
   * TaskHistory updateManyAndReturn
   */
  export type TaskHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskHistory
     */
    select?: TaskHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TaskHistory
     */
    omit?: TaskHistoryOmit<ExtArgs> | null
    /**
     * The data used to update TaskHistories.
     */
    data: XOR<TaskHistoryUpdateManyMutationInput, TaskHistoryUncheckedUpdateManyInput>
    /**
     * Filter which TaskHistories to update
     */
    where?: TaskHistoryWhereInput
    /**
     * Limit how many TaskHistories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskHistoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TaskHistory upsert
   */
  export type TaskHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskHistory
     */
    select?: TaskHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskHistory
     */
    omit?: TaskHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the TaskHistory to update in case it exists.
     */
    where: TaskHistoryWhereUniqueInput
    /**
     * In case the TaskHistory found by the `where` argument doesn't exist, create a new TaskHistory with this data.
     */
    create: XOR<TaskHistoryCreateInput, TaskHistoryUncheckedCreateInput>
    /**
     * In case the TaskHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskHistoryUpdateInput, TaskHistoryUncheckedUpdateInput>
  }

  /**
   * TaskHistory delete
   */
  export type TaskHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskHistory
     */
    select?: TaskHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskHistory
     */
    omit?: TaskHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskHistoryInclude<ExtArgs> | null
    /**
     * Filter which TaskHistory to delete.
     */
    where: TaskHistoryWhereUniqueInput
  }

  /**
   * TaskHistory deleteMany
   */
  export type TaskHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaskHistories to delete
     */
    where?: TaskHistoryWhereInput
    /**
     * Limit how many TaskHistories to delete.
     */
    limit?: number
  }

  /**
   * TaskHistory without action
   */
  export type TaskHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskHistory
     */
    select?: TaskHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskHistory
     */
    omit?: TaskHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskHistoryInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    upn: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    upn: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    upn: number
    info: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    upn?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    upn?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    upn?: true
    info?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    upn: string
    info: JsonValue | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    upn?: boolean
    info?: boolean
    assignees?: boolean | User$assigneesArgs<ExtArgs>
    permissions?: boolean | User$permissionsArgs<ExtArgs>
    history?: boolean | User$historyArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    upn?: boolean
    info?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    upn?: boolean
    info?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    upn?: boolean
    info?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "upn" | "info", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignees?: boolean | User$assigneesArgs<ExtArgs>
    permissions?: boolean | User$permissionsArgs<ExtArgs>
    history?: boolean | User$historyArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      assignees: Prisma.$AssigneeUserPayload<ExtArgs>[]
      permissions: Prisma.$PermissionPayload<ExtArgs>[]
      history: Prisma.$TaskHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      upn: string
      info: Prisma.JsonValue | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    assignees<T extends User$assigneesArgs<ExtArgs> = {}>(args?: Subset<T, User$assigneesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssigneeUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    permissions<T extends User$permissionsArgs<ExtArgs> = {}>(args?: Subset<T, User$permissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    history<T extends User$historyArgs<ExtArgs> = {}>(args?: Subset<T, User$historyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly upn: FieldRef<"User", 'String'>
    readonly info: FieldRef<"User", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.assignees
   */
  export type User$assigneesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssigneeUser
     */
    select?: AssigneeUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssigneeUser
     */
    omit?: AssigneeUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssigneeUserInclude<ExtArgs> | null
    where?: AssigneeUserWhereInput
    orderBy?: AssigneeUserOrderByWithRelationInput | AssigneeUserOrderByWithRelationInput[]
    cursor?: AssigneeUserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssigneeUserScalarFieldEnum | AssigneeUserScalarFieldEnum[]
  }

  /**
   * User.permissions
   */
  export type User$permissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    where?: PermissionWhereInput
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    cursor?: PermissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PermissionScalarFieldEnum | PermissionScalarFieldEnum[]
  }

  /**
   * User.history
   */
  export type User$historyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskHistory
     */
    select?: TaskHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskHistory
     */
    omit?: TaskHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskHistoryInclude<ExtArgs> | null
    where?: TaskHistoryWhereInput
    orderBy?: TaskHistoryOrderByWithRelationInput | TaskHistoryOrderByWithRelationInput[]
    cursor?: TaskHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskHistoryScalarFieldEnum | TaskHistoryScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Workspace
   */

  export type AggregateWorkspace = {
    _count: WorkspaceCountAggregateOutputType | null
    _avg: WorkspaceAvgAggregateOutputType | null
    _sum: WorkspaceSumAggregateOutputType | null
    _min: WorkspaceMinAggregateOutputType | null
    _max: WorkspaceMaxAggregateOutputType | null
  }

  export type WorkspaceAvgAggregateOutputType = {
    id: number | null
    createdBy: number | null
    updatedBy: number | null
    deletedBy: number | null
    pikudId: number | null
  }

  export type WorkspaceSumAggregateOutputType = {
    id: number | null
    createdBy: number | null
    updatedBy: number | null
    deletedBy: number | null
    pikudId: number | null
  }

  export type WorkspaceMinAggregateOutputType = {
    id: number | null
    title: string | null
    urlName: string | null
    icon: string | null
    assigneeStatusEditable: boolean | null
    createdAt: Date | null
    createdBy: number | null
    updatedAt: Date | null
    updatedBy: number | null
    deletedAt: Date | null
    deletedBy: number | null
    pikudId: number | null
  }

  export type WorkspaceMaxAggregateOutputType = {
    id: number | null
    title: string | null
    urlName: string | null
    icon: string | null
    assigneeStatusEditable: boolean | null
    createdAt: Date | null
    createdBy: number | null
    updatedAt: Date | null
    updatedBy: number | null
    deletedAt: Date | null
    deletedBy: number | null
    pikudId: number | null
  }

  export type WorkspaceCountAggregateOutputType = {
    id: number
    title: number
    urlName: number
    icon: number
    assigneeStatusEditable: number
    createdAt: number
    createdBy: number
    updatedAt: number
    updatedBy: number
    deletedAt: number
    deletedBy: number
    pikudId: number
    _all: number
  }


  export type WorkspaceAvgAggregateInputType = {
    id?: true
    createdBy?: true
    updatedBy?: true
    deletedBy?: true
    pikudId?: true
  }

  export type WorkspaceSumAggregateInputType = {
    id?: true
    createdBy?: true
    updatedBy?: true
    deletedBy?: true
    pikudId?: true
  }

  export type WorkspaceMinAggregateInputType = {
    id?: true
    title?: true
    urlName?: true
    icon?: true
    assigneeStatusEditable?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    deletedAt?: true
    deletedBy?: true
    pikudId?: true
  }

  export type WorkspaceMaxAggregateInputType = {
    id?: true
    title?: true
    urlName?: true
    icon?: true
    assigneeStatusEditable?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    deletedAt?: true
    deletedBy?: true
    pikudId?: true
  }

  export type WorkspaceCountAggregateInputType = {
    id?: true
    title?: true
    urlName?: true
    icon?: true
    assigneeStatusEditable?: true
    createdAt?: true
    createdBy?: true
    updatedAt?: true
    updatedBy?: true
    deletedAt?: true
    deletedBy?: true
    pikudId?: true
    _all?: true
  }

  export type WorkspaceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Workspace to aggregate.
     */
    where?: WorkspaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workspaces to fetch.
     */
    orderBy?: WorkspaceOrderByWithRelationInput | WorkspaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkspaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workspaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workspaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Workspaces
    **/
    _count?: true | WorkspaceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkspaceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkspaceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkspaceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkspaceMaxAggregateInputType
  }

  export type GetWorkspaceAggregateType<T extends WorkspaceAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkspace]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkspace[P]>
      : GetScalarType<T[P], AggregateWorkspace[P]>
  }




  export type WorkspaceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkspaceWhereInput
    orderBy?: WorkspaceOrderByWithAggregationInput | WorkspaceOrderByWithAggregationInput[]
    by: WorkspaceScalarFieldEnum[] | WorkspaceScalarFieldEnum
    having?: WorkspaceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkspaceCountAggregateInputType | true
    _avg?: WorkspaceAvgAggregateInputType
    _sum?: WorkspaceSumAggregateInputType
    _min?: WorkspaceMinAggregateInputType
    _max?: WorkspaceMaxAggregateInputType
  }

  export type WorkspaceGroupByOutputType = {
    id: number
    title: string
    urlName: string
    icon: string | null
    assigneeStatusEditable: boolean
    createdAt: Date
    createdBy: number
    updatedAt: Date
    updatedBy: number
    deletedAt: Date | null
    deletedBy: number | null
    pikudId: number
    _count: WorkspaceCountAggregateOutputType | null
    _avg: WorkspaceAvgAggregateOutputType | null
    _sum: WorkspaceSumAggregateOutputType | null
    _min: WorkspaceMinAggregateOutputType | null
    _max: WorkspaceMaxAggregateOutputType | null
  }

  type GetWorkspaceGroupByPayload<T extends WorkspaceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkspaceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkspaceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkspaceGroupByOutputType[P]>
            : GetScalarType<T[P], WorkspaceGroupByOutputType[P]>
        }
      >
    >


  export type WorkspaceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    urlName?: boolean
    icon?: boolean
    assigneeStatusEditable?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
    pikudId?: boolean
    pikud?: boolean | PikudDefaultArgs<ExtArgs>
    tags?: boolean | Workspace$tagsArgs<ExtArgs>
    tasks?: boolean | Workspace$tasksArgs<ExtArgs>
    workspaceStatuses?: boolean | Workspace$workspaceStatusesArgs<ExtArgs>
    permissions?: boolean | Workspace$permissionsArgs<ExtArgs>
    tasksHistory?: boolean | Workspace$tasksHistoryArgs<ExtArgs>
    _count?: boolean | WorkspaceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workspace"]>

  export type WorkspaceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    urlName?: boolean
    icon?: boolean
    assigneeStatusEditable?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
    pikudId?: boolean
    pikud?: boolean | PikudDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workspace"]>

  export type WorkspaceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    urlName?: boolean
    icon?: boolean
    assigneeStatusEditable?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
    pikudId?: boolean
    pikud?: boolean | PikudDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workspace"]>

  export type WorkspaceSelectScalar = {
    id?: boolean
    title?: boolean
    urlName?: boolean
    icon?: boolean
    assigneeStatusEditable?: boolean
    createdAt?: boolean
    createdBy?: boolean
    updatedAt?: boolean
    updatedBy?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
    pikudId?: boolean
  }

  export type WorkspaceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "urlName" | "icon" | "assigneeStatusEditable" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy" | "deletedAt" | "deletedBy" | "pikudId", ExtArgs["result"]["workspace"]>
  export type WorkspaceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pikud?: boolean | PikudDefaultArgs<ExtArgs>
    tags?: boolean | Workspace$tagsArgs<ExtArgs>
    tasks?: boolean | Workspace$tasksArgs<ExtArgs>
    workspaceStatuses?: boolean | Workspace$workspaceStatusesArgs<ExtArgs>
    permissions?: boolean | Workspace$permissionsArgs<ExtArgs>
    tasksHistory?: boolean | Workspace$tasksHistoryArgs<ExtArgs>
    _count?: boolean | WorkspaceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WorkspaceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pikud?: boolean | PikudDefaultArgs<ExtArgs>
  }
  export type WorkspaceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pikud?: boolean | PikudDefaultArgs<ExtArgs>
  }

  export type $WorkspacePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Workspace"
    objects: {
      pikud: Prisma.$PikudPayload<ExtArgs>
      tags: Prisma.$TagPayload<ExtArgs>[]
      tasks: Prisma.$TaskPayload<ExtArgs>[]
      workspaceStatuses: Prisma.$WorkspaceStatusPayload<ExtArgs>[]
      permissions: Prisma.$PermissionPayload<ExtArgs>[]
      tasksHistory: Prisma.$TaskHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      urlName: string
      icon: string | null
      assigneeStatusEditable: boolean
      createdAt: Date
      createdBy: number
      updatedAt: Date
      updatedBy: number
      deletedAt: Date | null
      deletedBy: number | null
      pikudId: number
    }, ExtArgs["result"]["workspace"]>
    composites: {}
  }

  type WorkspaceGetPayload<S extends boolean | null | undefined | WorkspaceDefaultArgs> = $Result.GetResult<Prisma.$WorkspacePayload, S>

  type WorkspaceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkspaceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkspaceCountAggregateInputType | true
    }

  export interface WorkspaceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Workspace'], meta: { name: 'Workspace' } }
    /**
     * Find zero or one Workspace that matches the filter.
     * @param {WorkspaceFindUniqueArgs} args - Arguments to find a Workspace
     * @example
     * // Get one Workspace
     * const workspace = await prisma.workspace.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkspaceFindUniqueArgs>(args: SelectSubset<T, WorkspaceFindUniqueArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Workspace that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkspaceFindUniqueOrThrowArgs} args - Arguments to find a Workspace
     * @example
     * // Get one Workspace
     * const workspace = await prisma.workspace.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkspaceFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkspaceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Workspace that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceFindFirstArgs} args - Arguments to find a Workspace
     * @example
     * // Get one Workspace
     * const workspace = await prisma.workspace.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkspaceFindFirstArgs>(args?: SelectSubset<T, WorkspaceFindFirstArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Workspace that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceFindFirstOrThrowArgs} args - Arguments to find a Workspace
     * @example
     * // Get one Workspace
     * const workspace = await prisma.workspace.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkspaceFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkspaceFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Workspaces that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Workspaces
     * const workspaces = await prisma.workspace.findMany()
     * 
     * // Get first 10 Workspaces
     * const workspaces = await prisma.workspace.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workspaceWithIdOnly = await prisma.workspace.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkspaceFindManyArgs>(args?: SelectSubset<T, WorkspaceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Workspace.
     * @param {WorkspaceCreateArgs} args - Arguments to create a Workspace.
     * @example
     * // Create one Workspace
     * const Workspace = await prisma.workspace.create({
     *   data: {
     *     // ... data to create a Workspace
     *   }
     * })
     * 
     */
    create<T extends WorkspaceCreateArgs>(args: SelectSubset<T, WorkspaceCreateArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Workspaces.
     * @param {WorkspaceCreateManyArgs} args - Arguments to create many Workspaces.
     * @example
     * // Create many Workspaces
     * const workspace = await prisma.workspace.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkspaceCreateManyArgs>(args?: SelectSubset<T, WorkspaceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Workspaces and returns the data saved in the database.
     * @param {WorkspaceCreateManyAndReturnArgs} args - Arguments to create many Workspaces.
     * @example
     * // Create many Workspaces
     * const workspace = await prisma.workspace.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Workspaces and only return the `id`
     * const workspaceWithIdOnly = await prisma.workspace.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkspaceCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkspaceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Workspace.
     * @param {WorkspaceDeleteArgs} args - Arguments to delete one Workspace.
     * @example
     * // Delete one Workspace
     * const Workspace = await prisma.workspace.delete({
     *   where: {
     *     // ... filter to delete one Workspace
     *   }
     * })
     * 
     */
    delete<T extends WorkspaceDeleteArgs>(args: SelectSubset<T, WorkspaceDeleteArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Workspace.
     * @param {WorkspaceUpdateArgs} args - Arguments to update one Workspace.
     * @example
     * // Update one Workspace
     * const workspace = await prisma.workspace.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkspaceUpdateArgs>(args: SelectSubset<T, WorkspaceUpdateArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Workspaces.
     * @param {WorkspaceDeleteManyArgs} args - Arguments to filter Workspaces to delete.
     * @example
     * // Delete a few Workspaces
     * const { count } = await prisma.workspace.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkspaceDeleteManyArgs>(args?: SelectSubset<T, WorkspaceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workspaces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Workspaces
     * const workspace = await prisma.workspace.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkspaceUpdateManyArgs>(args: SelectSubset<T, WorkspaceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workspaces and returns the data updated in the database.
     * @param {WorkspaceUpdateManyAndReturnArgs} args - Arguments to update many Workspaces.
     * @example
     * // Update many Workspaces
     * const workspace = await prisma.workspace.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Workspaces and only return the `id`
     * const workspaceWithIdOnly = await prisma.workspace.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WorkspaceUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkspaceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Workspace.
     * @param {WorkspaceUpsertArgs} args - Arguments to update or create a Workspace.
     * @example
     * // Update or create a Workspace
     * const workspace = await prisma.workspace.upsert({
     *   create: {
     *     // ... data to create a Workspace
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Workspace we want to update
     *   }
     * })
     */
    upsert<T extends WorkspaceUpsertArgs>(args: SelectSubset<T, WorkspaceUpsertArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Workspaces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceCountArgs} args - Arguments to filter Workspaces to count.
     * @example
     * // Count the number of Workspaces
     * const count = await prisma.workspace.count({
     *   where: {
     *     // ... the filter for the Workspaces we want to count
     *   }
     * })
    **/
    count<T extends WorkspaceCountArgs>(
      args?: Subset<T, WorkspaceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkspaceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Workspace.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkspaceAggregateArgs>(args: Subset<T, WorkspaceAggregateArgs>): Prisma.PrismaPromise<GetWorkspaceAggregateType<T>>

    /**
     * Group by Workspace.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorkspaceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkspaceGroupByArgs['orderBy'] }
        : { orderBy?: WorkspaceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorkspaceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkspaceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Workspace model
   */
  readonly fields: WorkspaceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Workspace.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkspaceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pikud<T extends PikudDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PikudDefaultArgs<ExtArgs>>): Prisma__PikudClient<$Result.GetResult<Prisma.$PikudPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tags<T extends Workspace$tagsArgs<ExtArgs> = {}>(args?: Subset<T, Workspace$tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tasks<T extends Workspace$tasksArgs<ExtArgs> = {}>(args?: Subset<T, Workspace$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    workspaceStatuses<T extends Workspace$workspaceStatusesArgs<ExtArgs> = {}>(args?: Subset<T, Workspace$workspaceStatusesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkspaceStatusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    permissions<T extends Workspace$permissionsArgs<ExtArgs> = {}>(args?: Subset<T, Workspace$permissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tasksHistory<T extends Workspace$tasksHistoryArgs<ExtArgs> = {}>(args?: Subset<T, Workspace$tasksHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Workspace model
   */
  interface WorkspaceFieldRefs {
    readonly id: FieldRef<"Workspace", 'Int'>
    readonly title: FieldRef<"Workspace", 'String'>
    readonly urlName: FieldRef<"Workspace", 'String'>
    readonly icon: FieldRef<"Workspace", 'String'>
    readonly assigneeStatusEditable: FieldRef<"Workspace", 'Boolean'>
    readonly createdAt: FieldRef<"Workspace", 'DateTime'>
    readonly createdBy: FieldRef<"Workspace", 'Int'>
    readonly updatedAt: FieldRef<"Workspace", 'DateTime'>
    readonly updatedBy: FieldRef<"Workspace", 'Int'>
    readonly deletedAt: FieldRef<"Workspace", 'DateTime'>
    readonly deletedBy: FieldRef<"Workspace", 'Int'>
    readonly pikudId: FieldRef<"Workspace", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Workspace findUnique
   */
  export type WorkspaceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    /**
     * Filter, which Workspace to fetch.
     */
    where: WorkspaceWhereUniqueInput
  }

  /**
   * Workspace findUniqueOrThrow
   */
  export type WorkspaceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    /**
     * Filter, which Workspace to fetch.
     */
    where: WorkspaceWhereUniqueInput
  }

  /**
   * Workspace findFirst
   */
  export type WorkspaceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    /**
     * Filter, which Workspace to fetch.
     */
    where?: WorkspaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workspaces to fetch.
     */
    orderBy?: WorkspaceOrderByWithRelationInput | WorkspaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Workspaces.
     */
    cursor?: WorkspaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workspaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workspaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workspaces.
     */
    distinct?: WorkspaceScalarFieldEnum | WorkspaceScalarFieldEnum[]
  }

  /**
   * Workspace findFirstOrThrow
   */
  export type WorkspaceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    /**
     * Filter, which Workspace to fetch.
     */
    where?: WorkspaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workspaces to fetch.
     */
    orderBy?: WorkspaceOrderByWithRelationInput | WorkspaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Workspaces.
     */
    cursor?: WorkspaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workspaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workspaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workspaces.
     */
    distinct?: WorkspaceScalarFieldEnum | WorkspaceScalarFieldEnum[]
  }

  /**
   * Workspace findMany
   */
  export type WorkspaceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    /**
     * Filter, which Workspaces to fetch.
     */
    where?: WorkspaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workspaces to fetch.
     */
    orderBy?: WorkspaceOrderByWithRelationInput | WorkspaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Workspaces.
     */
    cursor?: WorkspaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workspaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workspaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workspaces.
     */
    distinct?: WorkspaceScalarFieldEnum | WorkspaceScalarFieldEnum[]
  }

  /**
   * Workspace create
   */
  export type WorkspaceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    /**
     * The data needed to create a Workspace.
     */
    data: XOR<WorkspaceCreateInput, WorkspaceUncheckedCreateInput>
  }

  /**
   * Workspace createMany
   */
  export type WorkspaceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Workspaces.
     */
    data: WorkspaceCreateManyInput | WorkspaceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Workspace createManyAndReturn
   */
  export type WorkspaceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * The data used to create many Workspaces.
     */
    data: WorkspaceCreateManyInput | WorkspaceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Workspace update
   */
  export type WorkspaceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    /**
     * The data needed to update a Workspace.
     */
    data: XOR<WorkspaceUpdateInput, WorkspaceUncheckedUpdateInput>
    /**
     * Choose, which Workspace to update.
     */
    where: WorkspaceWhereUniqueInput
  }

  /**
   * Workspace updateMany
   */
  export type WorkspaceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Workspaces.
     */
    data: XOR<WorkspaceUpdateManyMutationInput, WorkspaceUncheckedUpdateManyInput>
    /**
     * Filter which Workspaces to update
     */
    where?: WorkspaceWhereInput
    /**
     * Limit how many Workspaces to update.
     */
    limit?: number
  }

  /**
   * Workspace updateManyAndReturn
   */
  export type WorkspaceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * The data used to update Workspaces.
     */
    data: XOR<WorkspaceUpdateManyMutationInput, WorkspaceUncheckedUpdateManyInput>
    /**
     * Filter which Workspaces to update
     */
    where?: WorkspaceWhereInput
    /**
     * Limit how many Workspaces to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Workspace upsert
   */
  export type WorkspaceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    /**
     * The filter to search for the Workspace to update in case it exists.
     */
    where: WorkspaceWhereUniqueInput
    /**
     * In case the Workspace found by the `where` argument doesn't exist, create a new Workspace with this data.
     */
    create: XOR<WorkspaceCreateInput, WorkspaceUncheckedCreateInput>
    /**
     * In case the Workspace was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkspaceUpdateInput, WorkspaceUncheckedUpdateInput>
  }

  /**
   * Workspace delete
   */
  export type WorkspaceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    /**
     * Filter which Workspace to delete.
     */
    where: WorkspaceWhereUniqueInput
  }

  /**
   * Workspace deleteMany
   */
  export type WorkspaceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Workspaces to delete
     */
    where?: WorkspaceWhereInput
    /**
     * Limit how many Workspaces to delete.
     */
    limit?: number
  }

  /**
   * Workspace.tags
   */
  export type Workspace$tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tag
     */
    omit?: TagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TagInclude<ExtArgs> | null
    where?: TagWhereInput
    orderBy?: TagOrderByWithRelationInput | TagOrderByWithRelationInput[]
    cursor?: TagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * Workspace.tasks
   */
  export type Workspace$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Task
     */
    omit?: TaskOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Workspace.workspaceStatuses
   */
  export type Workspace$workspaceStatusesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkspaceStatus
     */
    select?: WorkspaceStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkspaceStatus
     */
    omit?: WorkspaceStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceStatusInclude<ExtArgs> | null
    where?: WorkspaceStatusWhereInput
    orderBy?: WorkspaceStatusOrderByWithRelationInput | WorkspaceStatusOrderByWithRelationInput[]
    cursor?: WorkspaceStatusWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkspaceStatusScalarFieldEnum | WorkspaceStatusScalarFieldEnum[]
  }

  /**
   * Workspace.permissions
   */
  export type Workspace$permissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    where?: PermissionWhereInput
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    cursor?: PermissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PermissionScalarFieldEnum | PermissionScalarFieldEnum[]
  }

  /**
   * Workspace.tasksHistory
   */
  export type Workspace$tasksHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskHistory
     */
    select?: TaskHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TaskHistory
     */
    omit?: TaskHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskHistoryInclude<ExtArgs> | null
    where?: TaskHistoryWhereInput
    orderBy?: TaskHistoryOrderByWithRelationInput | TaskHistoryOrderByWithRelationInput[]
    cursor?: TaskHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskHistoryScalarFieldEnum | TaskHistoryScalarFieldEnum[]
  }

  /**
   * Workspace without action
   */
  export type WorkspaceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
  }


  /**
   * Model WorkspaceStatus
   */

  export type AggregateWorkspaceStatus = {
    _count: WorkspaceStatusCountAggregateOutputType | null
    _avg: WorkspaceStatusAvgAggregateOutputType | null
    _sum: WorkspaceStatusSumAggregateOutputType | null
    _min: WorkspaceStatusMinAggregateOutputType | null
    _max: WorkspaceStatusMaxAggregateOutputType | null
  }

  export type WorkspaceStatusAvgAggregateOutputType = {
    id: number | null
    workspaceId: number | null
  }

  export type WorkspaceStatusSumAggregateOutputType = {
    id: number | null
    workspaceId: number | null
  }

  export type WorkspaceStatusMinAggregateOutputType = {
    id: number | null
    name: string | null
    color: string | null
    statusType: string | null
    workspaceId: number | null
  }

  export type WorkspaceStatusMaxAggregateOutputType = {
    id: number | null
    name: string | null
    color: string | null
    statusType: string | null
    workspaceId: number | null
  }

  export type WorkspaceStatusCountAggregateOutputType = {
    id: number
    name: number
    color: number
    statusType: number
    workspaceId: number
    _all: number
  }


  export type WorkspaceStatusAvgAggregateInputType = {
    id?: true
    workspaceId?: true
  }

  export type WorkspaceStatusSumAggregateInputType = {
    id?: true
    workspaceId?: true
  }

  export type WorkspaceStatusMinAggregateInputType = {
    id?: true
    name?: true
    color?: true
    statusType?: true
    workspaceId?: true
  }

  export type WorkspaceStatusMaxAggregateInputType = {
    id?: true
    name?: true
    color?: true
    statusType?: true
    workspaceId?: true
  }

  export type WorkspaceStatusCountAggregateInputType = {
    id?: true
    name?: true
    color?: true
    statusType?: true
    workspaceId?: true
    _all?: true
  }

  export type WorkspaceStatusAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkspaceStatus to aggregate.
     */
    where?: WorkspaceStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkspaceStatuses to fetch.
     */
    orderBy?: WorkspaceStatusOrderByWithRelationInput | WorkspaceStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkspaceStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkspaceStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkspaceStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkspaceStatuses
    **/
    _count?: true | WorkspaceStatusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkspaceStatusAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkspaceStatusSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkspaceStatusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkspaceStatusMaxAggregateInputType
  }

  export type GetWorkspaceStatusAggregateType<T extends WorkspaceStatusAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkspaceStatus]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkspaceStatus[P]>
      : GetScalarType<T[P], AggregateWorkspaceStatus[P]>
  }




  export type WorkspaceStatusGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkspaceStatusWhereInput
    orderBy?: WorkspaceStatusOrderByWithAggregationInput | WorkspaceStatusOrderByWithAggregationInput[]
    by: WorkspaceStatusScalarFieldEnum[] | WorkspaceStatusScalarFieldEnum
    having?: WorkspaceStatusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkspaceStatusCountAggregateInputType | true
    _avg?: WorkspaceStatusAvgAggregateInputType
    _sum?: WorkspaceStatusSumAggregateInputType
    _min?: WorkspaceStatusMinAggregateInputType
    _max?: WorkspaceStatusMaxAggregateInputType
  }

  export type WorkspaceStatusGroupByOutputType = {
    id: number
    name: string
    color: string
    statusType: string
    workspaceId: number
    _count: WorkspaceStatusCountAggregateOutputType | null
    _avg: WorkspaceStatusAvgAggregateOutputType | null
    _sum: WorkspaceStatusSumAggregateOutputType | null
    _min: WorkspaceStatusMinAggregateOutputType | null
    _max: WorkspaceStatusMaxAggregateOutputType | null
  }

  type GetWorkspaceStatusGroupByPayload<T extends WorkspaceStatusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkspaceStatusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkspaceStatusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkspaceStatusGroupByOutputType[P]>
            : GetScalarType<T[P], WorkspaceStatusGroupByOutputType[P]>
        }
      >
    >


  export type WorkspaceStatusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    color?: boolean
    statusType?: boolean
    workspaceId?: boolean
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    assigneeTaskStatuses?: boolean | WorkspaceStatus$assigneeTaskStatusesArgs<ExtArgs>
    _count?: boolean | WorkspaceStatusCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workspaceStatus"]>

  export type WorkspaceStatusSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    color?: boolean
    statusType?: boolean
    workspaceId?: boolean
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workspaceStatus"]>

  export type WorkspaceStatusSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    color?: boolean
    statusType?: boolean
    workspaceId?: boolean
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workspaceStatus"]>

  export type WorkspaceStatusSelectScalar = {
    id?: boolean
    name?: boolean
    color?: boolean
    statusType?: boolean
    workspaceId?: boolean
  }

  export type WorkspaceStatusOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "color" | "statusType" | "workspaceId", ExtArgs["result"]["workspaceStatus"]>
  export type WorkspaceStatusInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    assigneeTaskStatuses?: boolean | WorkspaceStatus$assigneeTaskStatusesArgs<ExtArgs>
    _count?: boolean | WorkspaceStatusCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WorkspaceStatusIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }
  export type WorkspaceStatusIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }

  export type $WorkspaceStatusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkspaceStatus"
    objects: {
      workspace: Prisma.$WorkspacePayload<ExtArgs>
      assigneeTaskStatuses: Prisma.$AssigneeTaskStatusPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      color: string
      statusType: string
      workspaceId: number
    }, ExtArgs["result"]["workspaceStatus"]>
    composites: {}
  }

  type WorkspaceStatusGetPayload<S extends boolean | null | undefined | WorkspaceStatusDefaultArgs> = $Result.GetResult<Prisma.$WorkspaceStatusPayload, S>

  type WorkspaceStatusCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkspaceStatusFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkspaceStatusCountAggregateInputType | true
    }

  export interface WorkspaceStatusDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkspaceStatus'], meta: { name: 'WorkspaceStatus' } }
    /**
     * Find zero or one WorkspaceStatus that matches the filter.
     * @param {WorkspaceStatusFindUniqueArgs} args - Arguments to find a WorkspaceStatus
     * @example
     * // Get one WorkspaceStatus
     * const workspaceStatus = await prisma.workspaceStatus.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkspaceStatusFindUniqueArgs>(args: SelectSubset<T, WorkspaceStatusFindUniqueArgs<ExtArgs>>): Prisma__WorkspaceStatusClient<$Result.GetResult<Prisma.$WorkspaceStatusPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorkspaceStatus that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkspaceStatusFindUniqueOrThrowArgs} args - Arguments to find a WorkspaceStatus
     * @example
     * // Get one WorkspaceStatus
     * const workspaceStatus = await prisma.workspaceStatus.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkspaceStatusFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkspaceStatusFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkspaceStatusClient<$Result.GetResult<Prisma.$WorkspaceStatusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkspaceStatus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceStatusFindFirstArgs} args - Arguments to find a WorkspaceStatus
     * @example
     * // Get one WorkspaceStatus
     * const workspaceStatus = await prisma.workspaceStatus.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkspaceStatusFindFirstArgs>(args?: SelectSubset<T, WorkspaceStatusFindFirstArgs<ExtArgs>>): Prisma__WorkspaceStatusClient<$Result.GetResult<Prisma.$WorkspaceStatusPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkspaceStatus that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceStatusFindFirstOrThrowArgs} args - Arguments to find a WorkspaceStatus
     * @example
     * // Get one WorkspaceStatus
     * const workspaceStatus = await prisma.workspaceStatus.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkspaceStatusFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkspaceStatusFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkspaceStatusClient<$Result.GetResult<Prisma.$WorkspaceStatusPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkspaceStatuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceStatusFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkspaceStatuses
     * const workspaceStatuses = await prisma.workspaceStatus.findMany()
     * 
     * // Get first 10 WorkspaceStatuses
     * const workspaceStatuses = await prisma.workspaceStatus.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workspaceStatusWithIdOnly = await prisma.workspaceStatus.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkspaceStatusFindManyArgs>(args?: SelectSubset<T, WorkspaceStatusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkspaceStatusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorkspaceStatus.
     * @param {WorkspaceStatusCreateArgs} args - Arguments to create a WorkspaceStatus.
     * @example
     * // Create one WorkspaceStatus
     * const WorkspaceStatus = await prisma.workspaceStatus.create({
     *   data: {
     *     // ... data to create a WorkspaceStatus
     *   }
     * })
     * 
     */
    create<T extends WorkspaceStatusCreateArgs>(args: SelectSubset<T, WorkspaceStatusCreateArgs<ExtArgs>>): Prisma__WorkspaceStatusClient<$Result.GetResult<Prisma.$WorkspaceStatusPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorkspaceStatuses.
     * @param {WorkspaceStatusCreateManyArgs} args - Arguments to create many WorkspaceStatuses.
     * @example
     * // Create many WorkspaceStatuses
     * const workspaceStatus = await prisma.workspaceStatus.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkspaceStatusCreateManyArgs>(args?: SelectSubset<T, WorkspaceStatusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorkspaceStatuses and returns the data saved in the database.
     * @param {WorkspaceStatusCreateManyAndReturnArgs} args - Arguments to create many WorkspaceStatuses.
     * @example
     * // Create many WorkspaceStatuses
     * const workspaceStatus = await prisma.workspaceStatus.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorkspaceStatuses and only return the `id`
     * const workspaceStatusWithIdOnly = await prisma.workspaceStatus.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkspaceStatusCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkspaceStatusCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkspaceStatusPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WorkspaceStatus.
     * @param {WorkspaceStatusDeleteArgs} args - Arguments to delete one WorkspaceStatus.
     * @example
     * // Delete one WorkspaceStatus
     * const WorkspaceStatus = await prisma.workspaceStatus.delete({
     *   where: {
     *     // ... filter to delete one WorkspaceStatus
     *   }
     * })
     * 
     */
    delete<T extends WorkspaceStatusDeleteArgs>(args: SelectSubset<T, WorkspaceStatusDeleteArgs<ExtArgs>>): Prisma__WorkspaceStatusClient<$Result.GetResult<Prisma.$WorkspaceStatusPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorkspaceStatus.
     * @param {WorkspaceStatusUpdateArgs} args - Arguments to update one WorkspaceStatus.
     * @example
     * // Update one WorkspaceStatus
     * const workspaceStatus = await prisma.workspaceStatus.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkspaceStatusUpdateArgs>(args: SelectSubset<T, WorkspaceStatusUpdateArgs<ExtArgs>>): Prisma__WorkspaceStatusClient<$Result.GetResult<Prisma.$WorkspaceStatusPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorkspaceStatuses.
     * @param {WorkspaceStatusDeleteManyArgs} args - Arguments to filter WorkspaceStatuses to delete.
     * @example
     * // Delete a few WorkspaceStatuses
     * const { count } = await prisma.workspaceStatus.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkspaceStatusDeleteManyArgs>(args?: SelectSubset<T, WorkspaceStatusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkspaceStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceStatusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkspaceStatuses
     * const workspaceStatus = await prisma.workspaceStatus.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkspaceStatusUpdateManyArgs>(args: SelectSubset<T, WorkspaceStatusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkspaceStatuses and returns the data updated in the database.
     * @param {WorkspaceStatusUpdateManyAndReturnArgs} args - Arguments to update many WorkspaceStatuses.
     * @example
     * // Update many WorkspaceStatuses
     * const workspaceStatus = await prisma.workspaceStatus.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WorkspaceStatuses and only return the `id`
     * const workspaceStatusWithIdOnly = await prisma.workspaceStatus.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WorkspaceStatusUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkspaceStatusUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkspaceStatusPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WorkspaceStatus.
     * @param {WorkspaceStatusUpsertArgs} args - Arguments to update or create a WorkspaceStatus.
     * @example
     * // Update or create a WorkspaceStatus
     * const workspaceStatus = await prisma.workspaceStatus.upsert({
     *   create: {
     *     // ... data to create a WorkspaceStatus
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkspaceStatus we want to update
     *   }
     * })
     */
    upsert<T extends WorkspaceStatusUpsertArgs>(args: SelectSubset<T, WorkspaceStatusUpsertArgs<ExtArgs>>): Prisma__WorkspaceStatusClient<$Result.GetResult<Prisma.$WorkspaceStatusPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorkspaceStatuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceStatusCountArgs} args - Arguments to filter WorkspaceStatuses to count.
     * @example
     * // Count the number of WorkspaceStatuses
     * const count = await prisma.workspaceStatus.count({
     *   where: {
     *     // ... the filter for the WorkspaceStatuses we want to count
     *   }
     * })
    **/
    count<T extends WorkspaceStatusCountArgs>(
      args?: Subset<T, WorkspaceStatusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkspaceStatusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkspaceStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceStatusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkspaceStatusAggregateArgs>(args: Subset<T, WorkspaceStatusAggregateArgs>): Prisma.PrismaPromise<GetWorkspaceStatusAggregateType<T>>

    /**
     * Group by WorkspaceStatus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceStatusGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorkspaceStatusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkspaceStatusGroupByArgs['orderBy'] }
        : { orderBy?: WorkspaceStatusGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorkspaceStatusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkspaceStatusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkspaceStatus model
   */
  readonly fields: WorkspaceStatusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkspaceStatus.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkspaceStatusClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workspace<T extends WorkspaceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkspaceDefaultArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    assigneeTaskStatuses<T extends WorkspaceStatus$assigneeTaskStatusesArgs<ExtArgs> = {}>(args?: Subset<T, WorkspaceStatus$assigneeTaskStatusesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssigneeTaskStatusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WorkspaceStatus model
   */
  interface WorkspaceStatusFieldRefs {
    readonly id: FieldRef<"WorkspaceStatus", 'Int'>
    readonly name: FieldRef<"WorkspaceStatus", 'String'>
    readonly color: FieldRef<"WorkspaceStatus", 'String'>
    readonly statusType: FieldRef<"WorkspaceStatus", 'String'>
    readonly workspaceId: FieldRef<"WorkspaceStatus", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * WorkspaceStatus findUnique
   */
  export type WorkspaceStatusFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkspaceStatus
     */
    select?: WorkspaceStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkspaceStatus
     */
    omit?: WorkspaceStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceStatusInclude<ExtArgs> | null
    /**
     * Filter, which WorkspaceStatus to fetch.
     */
    where: WorkspaceStatusWhereUniqueInput
  }

  /**
   * WorkspaceStatus findUniqueOrThrow
   */
  export type WorkspaceStatusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkspaceStatus
     */
    select?: WorkspaceStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkspaceStatus
     */
    omit?: WorkspaceStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceStatusInclude<ExtArgs> | null
    /**
     * Filter, which WorkspaceStatus to fetch.
     */
    where: WorkspaceStatusWhereUniqueInput
  }

  /**
   * WorkspaceStatus findFirst
   */
  export type WorkspaceStatusFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkspaceStatus
     */
    select?: WorkspaceStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkspaceStatus
     */
    omit?: WorkspaceStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceStatusInclude<ExtArgs> | null
    /**
     * Filter, which WorkspaceStatus to fetch.
     */
    where?: WorkspaceStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkspaceStatuses to fetch.
     */
    orderBy?: WorkspaceStatusOrderByWithRelationInput | WorkspaceStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkspaceStatuses.
     */
    cursor?: WorkspaceStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkspaceStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkspaceStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkspaceStatuses.
     */
    distinct?: WorkspaceStatusScalarFieldEnum | WorkspaceStatusScalarFieldEnum[]
  }

  /**
   * WorkspaceStatus findFirstOrThrow
   */
  export type WorkspaceStatusFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkspaceStatus
     */
    select?: WorkspaceStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkspaceStatus
     */
    omit?: WorkspaceStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceStatusInclude<ExtArgs> | null
    /**
     * Filter, which WorkspaceStatus to fetch.
     */
    where?: WorkspaceStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkspaceStatuses to fetch.
     */
    orderBy?: WorkspaceStatusOrderByWithRelationInput | WorkspaceStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkspaceStatuses.
     */
    cursor?: WorkspaceStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkspaceStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkspaceStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkspaceStatuses.
     */
    distinct?: WorkspaceStatusScalarFieldEnum | WorkspaceStatusScalarFieldEnum[]
  }

  /**
   * WorkspaceStatus findMany
   */
  export type WorkspaceStatusFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkspaceStatus
     */
    select?: WorkspaceStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkspaceStatus
     */
    omit?: WorkspaceStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceStatusInclude<ExtArgs> | null
    /**
     * Filter, which WorkspaceStatuses to fetch.
     */
    where?: WorkspaceStatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkspaceStatuses to fetch.
     */
    orderBy?: WorkspaceStatusOrderByWithRelationInput | WorkspaceStatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkspaceStatuses.
     */
    cursor?: WorkspaceStatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkspaceStatuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkspaceStatuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkspaceStatuses.
     */
    distinct?: WorkspaceStatusScalarFieldEnum | WorkspaceStatusScalarFieldEnum[]
  }

  /**
   * WorkspaceStatus create
   */
  export type WorkspaceStatusCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkspaceStatus
     */
    select?: WorkspaceStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkspaceStatus
     */
    omit?: WorkspaceStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceStatusInclude<ExtArgs> | null
    /**
     * The data needed to create a WorkspaceStatus.
     */
    data: XOR<WorkspaceStatusCreateInput, WorkspaceStatusUncheckedCreateInput>
  }

  /**
   * WorkspaceStatus createMany
   */
  export type WorkspaceStatusCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkspaceStatuses.
     */
    data: WorkspaceStatusCreateManyInput | WorkspaceStatusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkspaceStatus createManyAndReturn
   */
  export type WorkspaceStatusCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkspaceStatus
     */
    select?: WorkspaceStatusSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkspaceStatus
     */
    omit?: WorkspaceStatusOmit<ExtArgs> | null
    /**
     * The data used to create many WorkspaceStatuses.
     */
    data: WorkspaceStatusCreateManyInput | WorkspaceStatusCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceStatusIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkspaceStatus update
   */
  export type WorkspaceStatusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkspaceStatus
     */
    select?: WorkspaceStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkspaceStatus
     */
    omit?: WorkspaceStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceStatusInclude<ExtArgs> | null
    /**
     * The data needed to update a WorkspaceStatus.
     */
    data: XOR<WorkspaceStatusUpdateInput, WorkspaceStatusUncheckedUpdateInput>
    /**
     * Choose, which WorkspaceStatus to update.
     */
    where: WorkspaceStatusWhereUniqueInput
  }

  /**
   * WorkspaceStatus updateMany
   */
  export type WorkspaceStatusUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkspaceStatuses.
     */
    data: XOR<WorkspaceStatusUpdateManyMutationInput, WorkspaceStatusUncheckedUpdateManyInput>
    /**
     * Filter which WorkspaceStatuses to update
     */
    where?: WorkspaceStatusWhereInput
    /**
     * Limit how many WorkspaceStatuses to update.
     */
    limit?: number
  }

  /**
   * WorkspaceStatus updateManyAndReturn
   */
  export type WorkspaceStatusUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkspaceStatus
     */
    select?: WorkspaceStatusSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkspaceStatus
     */
    omit?: WorkspaceStatusOmit<ExtArgs> | null
    /**
     * The data used to update WorkspaceStatuses.
     */
    data: XOR<WorkspaceStatusUpdateManyMutationInput, WorkspaceStatusUncheckedUpdateManyInput>
    /**
     * Filter which WorkspaceStatuses to update
     */
    where?: WorkspaceStatusWhereInput
    /**
     * Limit how many WorkspaceStatuses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceStatusIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkspaceStatus upsert
   */
  export type WorkspaceStatusUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkspaceStatus
     */
    select?: WorkspaceStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkspaceStatus
     */
    omit?: WorkspaceStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceStatusInclude<ExtArgs> | null
    /**
     * The filter to search for the WorkspaceStatus to update in case it exists.
     */
    where: WorkspaceStatusWhereUniqueInput
    /**
     * In case the WorkspaceStatus found by the `where` argument doesn't exist, create a new WorkspaceStatus with this data.
     */
    create: XOR<WorkspaceStatusCreateInput, WorkspaceStatusUncheckedCreateInput>
    /**
     * In case the WorkspaceStatus was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkspaceStatusUpdateInput, WorkspaceStatusUncheckedUpdateInput>
  }

  /**
   * WorkspaceStatus delete
   */
  export type WorkspaceStatusDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkspaceStatus
     */
    select?: WorkspaceStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkspaceStatus
     */
    omit?: WorkspaceStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceStatusInclude<ExtArgs> | null
    /**
     * Filter which WorkspaceStatus to delete.
     */
    where: WorkspaceStatusWhereUniqueInput
  }

  /**
   * WorkspaceStatus deleteMany
   */
  export type WorkspaceStatusDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkspaceStatuses to delete
     */
    where?: WorkspaceStatusWhereInput
    /**
     * Limit how many WorkspaceStatuses to delete.
     */
    limit?: number
  }

  /**
   * WorkspaceStatus.assigneeTaskStatuses
   */
  export type WorkspaceStatus$assigneeTaskStatusesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssigneeTaskStatus
     */
    select?: AssigneeTaskStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AssigneeTaskStatus
     */
    omit?: AssigneeTaskStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssigneeTaskStatusInclude<ExtArgs> | null
    where?: AssigneeTaskStatusWhereInput
    orderBy?: AssigneeTaskStatusOrderByWithRelationInput | AssigneeTaskStatusOrderByWithRelationInput[]
    cursor?: AssigneeTaskStatusWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssigneeTaskStatusScalarFieldEnum | AssigneeTaskStatusScalarFieldEnum[]
  }

  /**
   * WorkspaceStatus without action
   */
  export type WorkspaceStatusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkspaceStatus
     */
    select?: WorkspaceStatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkspaceStatus
     */
    omit?: WorkspaceStatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceStatusInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AssigneeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    color: 'color',
    createdAt: 'createdAt',
    createdBy: 'createdBy',
    updatedAt: 'updatedAt',
    updatedBy: 'updatedBy',
    deletedAt: 'deletedAt',
    deletedBy: 'deletedBy'
  };

  export type AssigneeScalarFieldEnum = (typeof AssigneeScalarFieldEnum)[keyof typeof AssigneeScalarFieldEnum]


  export const AssigneeTaskStatusScalarFieldEnum: {
    taskId: 'taskId',
    assigneeId: 'assigneeId',
    statusId: 'statusId'
  };

  export type AssigneeTaskStatusScalarFieldEnum = (typeof AssigneeTaskStatusScalarFieldEnum)[keyof typeof AssigneeTaskStatusScalarFieldEnum]


  export const AssigneeUserScalarFieldEnum: {
    assigneeId: 'assigneeId',
    userId: 'userId'
  };

  export type AssigneeUserScalarFieldEnum = (typeof AssigneeUserScalarFieldEnum)[keyof typeof AssigneeUserScalarFieldEnum]


  export const MessageScalarFieldEnum: {
    id: 'id',
    content: 'content',
    assigneeId: 'assigneeId',
    taskId: 'taskId',
    createdAt: 'createdAt',
    createdBy: 'createdBy',
    updatedAt: 'updatedAt',
    updatedBy: 'updatedBy',
    deletedAt: 'deletedAt',
    deletedBy: 'deletedBy'
  };

  export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum]


  export const PermissionScalarFieldEnum: {
    userId: 'userId',
    workspaceId: 'workspaceId',
    type: 'type'
  };

  export type PermissionScalarFieldEnum = (typeof PermissionScalarFieldEnum)[keyof typeof PermissionScalarFieldEnum]


  export const PikudScalarFieldEnum: {
    id: 'id',
    name: 'name',
    icon: 'icon',
    createdAt: 'createdAt',
    createdBy: 'createdBy',
    updatedAt: 'updatedAt',
    updatedBy: 'updatedBy',
    deletedAt: 'deletedAt',
    deletedBy: 'deletedBy'
  };

  export type PikudScalarFieldEnum = (typeof PikudScalarFieldEnum)[keyof typeof PikudScalarFieldEnum]


  export const SourceScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    createdBy: 'createdBy',
    updatedAt: 'updatedAt',
    updatedBy: 'updatedBy',
    deletedAt: 'deletedAt',
    deletedBy: 'deletedBy'
  };

  export type SourceScalarFieldEnum = (typeof SourceScalarFieldEnum)[keyof typeof SourceScalarFieldEnum]


  export const TagScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    createdBy: 'createdBy',
    updatedAt: 'updatedAt',
    updatedBy: 'updatedBy',
    workspaceId: 'workspaceId'
  };

  export type TagScalarFieldEnum = (typeof TagScalarFieldEnum)[keyof typeof TagScalarFieldEnum]


  export const TaskScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    flagged: 'flagged',
    deadlineType: 'deadlineType',
    issuedAt: 'issuedAt',
    dueDate: 'dueDate',
    notes: 'notes',
    createdAt: 'createdAt',
    createdBy: 'createdBy',
    updatedAt: 'updatedAt',
    updatedBy: 'updatedBy',
    deletedAt: 'deletedAt',
    deletedBy: 'deletedBy',
    workspaceId: 'workspaceId',
    sourceId: 'sourceId'
  };

  export type TaskScalarFieldEnum = (typeof TaskScalarFieldEnum)[keyof typeof TaskScalarFieldEnum]


  export const TaskHistoryScalarFieldEnum: {
    id: 'id',
    action: 'action',
    field: 'field',
    value: 'value',
    timestamp: 'timestamp',
    taskId: 'taskId',
    workspaceId: 'workspaceId',
    userId: 'userId'
  };

  export type TaskHistoryScalarFieldEnum = (typeof TaskHistoryScalarFieldEnum)[keyof typeof TaskHistoryScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    upn: 'upn',
    info: 'info'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const WorkspaceScalarFieldEnum: {
    id: 'id',
    title: 'title',
    urlName: 'urlName',
    icon: 'icon',
    assigneeStatusEditable: 'assigneeStatusEditable',
    createdAt: 'createdAt',
    createdBy: 'createdBy',
    updatedAt: 'updatedAt',
    updatedBy: 'updatedBy',
    deletedAt: 'deletedAt',
    deletedBy: 'deletedBy',
    pikudId: 'pikudId'
  };

  export type WorkspaceScalarFieldEnum = (typeof WorkspaceScalarFieldEnum)[keyof typeof WorkspaceScalarFieldEnum]


  export const WorkspaceStatusScalarFieldEnum: {
    id: 'id',
    name: 'name',
    color: 'color',
    statusType: 'statusType',
    workspaceId: 'workspaceId'
  };

  export type WorkspaceStatusScalarFieldEnum = (typeof WorkspaceStatusScalarFieldEnum)[keyof typeof WorkspaceStatusScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'PermissionType'
   */
  export type EnumPermissionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PermissionType'>
    


  /**
   * Reference to a field of type 'PermissionType[]'
   */
  export type ListEnumPermissionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PermissionType[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'HistoryAction'
   */
  export type EnumHistoryActionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'HistoryAction'>
    


  /**
   * Reference to a field of type 'HistoryAction[]'
   */
  export type ListEnumHistoryActionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'HistoryAction[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type AssigneeWhereInput = {
    AND?: AssigneeWhereInput | AssigneeWhereInput[]
    OR?: AssigneeWhereInput[]
    NOT?: AssigneeWhereInput | AssigneeWhereInput[]
    id?: IntFilter<"Assignee"> | number
    name?: StringFilter<"Assignee"> | string
    color?: StringFilter<"Assignee"> | string
    createdAt?: DateTimeFilter<"Assignee"> | Date | string
    createdBy?: IntFilter<"Assignee"> | number
    updatedAt?: DateTimeFilter<"Assignee"> | Date | string
    updatedBy?: IntFilter<"Assignee"> | number
    deletedAt?: DateTimeNullableFilter<"Assignee"> | Date | string | null
    deletedBy?: IntNullableFilter<"Assignee"> | number | null
    users?: AssigneeUserListRelationFilter
    taskStatuses?: AssigneeTaskStatusListRelationFilter
    messages?: MessageListRelationFilter
  }

  export type AssigneeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    deletedBy?: SortOrderInput | SortOrder
    users?: AssigneeUserOrderByRelationAggregateInput
    taskStatuses?: AssigneeTaskStatusOrderByRelationAggregateInput
    messages?: MessageOrderByRelationAggregateInput
  }

  export type AssigneeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AssigneeWhereInput | AssigneeWhereInput[]
    OR?: AssigneeWhereInput[]
    NOT?: AssigneeWhereInput | AssigneeWhereInput[]
    name?: StringFilter<"Assignee"> | string
    color?: StringFilter<"Assignee"> | string
    createdAt?: DateTimeFilter<"Assignee"> | Date | string
    createdBy?: IntFilter<"Assignee"> | number
    updatedAt?: DateTimeFilter<"Assignee"> | Date | string
    updatedBy?: IntFilter<"Assignee"> | number
    deletedAt?: DateTimeNullableFilter<"Assignee"> | Date | string | null
    deletedBy?: IntNullableFilter<"Assignee"> | number | null
    users?: AssigneeUserListRelationFilter
    taskStatuses?: AssigneeTaskStatusListRelationFilter
    messages?: MessageListRelationFilter
  }, "id">

  export type AssigneeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    deletedBy?: SortOrderInput | SortOrder
    _count?: AssigneeCountOrderByAggregateInput
    _avg?: AssigneeAvgOrderByAggregateInput
    _max?: AssigneeMaxOrderByAggregateInput
    _min?: AssigneeMinOrderByAggregateInput
    _sum?: AssigneeSumOrderByAggregateInput
  }

  export type AssigneeScalarWhereWithAggregatesInput = {
    AND?: AssigneeScalarWhereWithAggregatesInput | AssigneeScalarWhereWithAggregatesInput[]
    OR?: AssigneeScalarWhereWithAggregatesInput[]
    NOT?: AssigneeScalarWhereWithAggregatesInput | AssigneeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Assignee"> | number
    name?: StringWithAggregatesFilter<"Assignee"> | string
    color?: StringWithAggregatesFilter<"Assignee"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Assignee"> | Date | string
    createdBy?: IntWithAggregatesFilter<"Assignee"> | number
    updatedAt?: DateTimeWithAggregatesFilter<"Assignee"> | Date | string
    updatedBy?: IntWithAggregatesFilter<"Assignee"> | number
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Assignee"> | Date | string | null
    deletedBy?: IntNullableWithAggregatesFilter<"Assignee"> | number | null
  }

  export type AssigneeTaskStatusWhereInput = {
    AND?: AssigneeTaskStatusWhereInput | AssigneeTaskStatusWhereInput[]
    OR?: AssigneeTaskStatusWhereInput[]
    NOT?: AssigneeTaskStatusWhereInput | AssigneeTaskStatusWhereInput[]
    taskId?: IntFilter<"AssigneeTaskStatus"> | number
    assigneeId?: IntFilter<"AssigneeTaskStatus"> | number
    statusId?: IntFilter<"AssigneeTaskStatus"> | number
    task?: XOR<TaskScalarRelationFilter, TaskWhereInput>
    assignee?: XOR<AssigneeScalarRelationFilter, AssigneeWhereInput>
    status?: XOR<WorkspaceStatusScalarRelationFilter, WorkspaceStatusWhereInput>
  }

  export type AssigneeTaskStatusOrderByWithRelationInput = {
    taskId?: SortOrder
    assigneeId?: SortOrder
    statusId?: SortOrder
    task?: TaskOrderByWithRelationInput
    assignee?: AssigneeOrderByWithRelationInput
    status?: WorkspaceStatusOrderByWithRelationInput
  }

  export type AssigneeTaskStatusWhereUniqueInput = Prisma.AtLeast<{
    taskId_assigneeId?: AssigneeTaskStatusTaskIdAssigneeIdCompoundUniqueInput
    AND?: AssigneeTaskStatusWhereInput | AssigneeTaskStatusWhereInput[]
    OR?: AssigneeTaskStatusWhereInput[]
    NOT?: AssigneeTaskStatusWhereInput | AssigneeTaskStatusWhereInput[]
    taskId?: IntFilter<"AssigneeTaskStatus"> | number
    assigneeId?: IntFilter<"AssigneeTaskStatus"> | number
    statusId?: IntFilter<"AssigneeTaskStatus"> | number
    task?: XOR<TaskScalarRelationFilter, TaskWhereInput>
    assignee?: XOR<AssigneeScalarRelationFilter, AssigneeWhereInput>
    status?: XOR<WorkspaceStatusScalarRelationFilter, WorkspaceStatusWhereInput>
  }, "taskId_assigneeId">

  export type AssigneeTaskStatusOrderByWithAggregationInput = {
    taskId?: SortOrder
    assigneeId?: SortOrder
    statusId?: SortOrder
    _count?: AssigneeTaskStatusCountOrderByAggregateInput
    _avg?: AssigneeTaskStatusAvgOrderByAggregateInput
    _max?: AssigneeTaskStatusMaxOrderByAggregateInput
    _min?: AssigneeTaskStatusMinOrderByAggregateInput
    _sum?: AssigneeTaskStatusSumOrderByAggregateInput
  }

  export type AssigneeTaskStatusScalarWhereWithAggregatesInput = {
    AND?: AssigneeTaskStatusScalarWhereWithAggregatesInput | AssigneeTaskStatusScalarWhereWithAggregatesInput[]
    OR?: AssigneeTaskStatusScalarWhereWithAggregatesInput[]
    NOT?: AssigneeTaskStatusScalarWhereWithAggregatesInput | AssigneeTaskStatusScalarWhereWithAggregatesInput[]
    taskId?: IntWithAggregatesFilter<"AssigneeTaskStatus"> | number
    assigneeId?: IntWithAggregatesFilter<"AssigneeTaskStatus"> | number
    statusId?: IntWithAggregatesFilter<"AssigneeTaskStatus"> | number
  }

  export type AssigneeUserWhereInput = {
    AND?: AssigneeUserWhereInput | AssigneeUserWhereInput[]
    OR?: AssigneeUserWhereInput[]
    NOT?: AssigneeUserWhereInput | AssigneeUserWhereInput[]
    assigneeId?: IntFilter<"AssigneeUser"> | number
    userId?: IntFilter<"AssigneeUser"> | number
    assignee?: XOR<AssigneeScalarRelationFilter, AssigneeWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AssigneeUserOrderByWithRelationInput = {
    assigneeId?: SortOrder
    userId?: SortOrder
    assignee?: AssigneeOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type AssigneeUserWhereUniqueInput = Prisma.AtLeast<{
    assigneeId_userId?: AssigneeUserAssigneeIdUserIdCompoundUniqueInput
    AND?: AssigneeUserWhereInput | AssigneeUserWhereInput[]
    OR?: AssigneeUserWhereInput[]
    NOT?: AssigneeUserWhereInput | AssigneeUserWhereInput[]
    assigneeId?: IntFilter<"AssigneeUser"> | number
    userId?: IntFilter<"AssigneeUser"> | number
    assignee?: XOR<AssigneeScalarRelationFilter, AssigneeWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "assigneeId_userId">

  export type AssigneeUserOrderByWithAggregationInput = {
    assigneeId?: SortOrder
    userId?: SortOrder
    _count?: AssigneeUserCountOrderByAggregateInput
    _avg?: AssigneeUserAvgOrderByAggregateInput
    _max?: AssigneeUserMaxOrderByAggregateInput
    _min?: AssigneeUserMinOrderByAggregateInput
    _sum?: AssigneeUserSumOrderByAggregateInput
  }

  export type AssigneeUserScalarWhereWithAggregatesInput = {
    AND?: AssigneeUserScalarWhereWithAggregatesInput | AssigneeUserScalarWhereWithAggregatesInput[]
    OR?: AssigneeUserScalarWhereWithAggregatesInput[]
    NOT?: AssigneeUserScalarWhereWithAggregatesInput | AssigneeUserScalarWhereWithAggregatesInput[]
    assigneeId?: IntWithAggregatesFilter<"AssigneeUser"> | number
    userId?: IntWithAggregatesFilter<"AssigneeUser"> | number
  }

  export type MessageWhereInput = {
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    id?: IntFilter<"Message"> | number
    content?: StringFilter<"Message"> | string
    assigneeId?: IntFilter<"Message"> | number
    taskId?: IntFilter<"Message"> | number
    createdAt?: DateTimeFilter<"Message"> | Date | string
    createdBy?: IntFilter<"Message"> | number
    updatedAt?: DateTimeFilter<"Message"> | Date | string
    updatedBy?: IntFilter<"Message"> | number
    deletedAt?: DateTimeNullableFilter<"Message"> | Date | string | null
    deletedBy?: IntNullableFilter<"Message"> | number | null
    assignee?: XOR<AssigneeScalarRelationFilter, AssigneeWhereInput>
    task?: XOR<TaskScalarRelationFilter, TaskWhereInput>
  }

  export type MessageOrderByWithRelationInput = {
    id?: SortOrder
    content?: SortOrder
    assigneeId?: SortOrder
    taskId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    deletedBy?: SortOrderInput | SortOrder
    assignee?: AssigneeOrderByWithRelationInput
    task?: TaskOrderByWithRelationInput
  }

  export type MessageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    content?: StringFilter<"Message"> | string
    assigneeId?: IntFilter<"Message"> | number
    taskId?: IntFilter<"Message"> | number
    createdAt?: DateTimeFilter<"Message"> | Date | string
    createdBy?: IntFilter<"Message"> | number
    updatedAt?: DateTimeFilter<"Message"> | Date | string
    updatedBy?: IntFilter<"Message"> | number
    deletedAt?: DateTimeNullableFilter<"Message"> | Date | string | null
    deletedBy?: IntNullableFilter<"Message"> | number | null
    assignee?: XOR<AssigneeScalarRelationFilter, AssigneeWhereInput>
    task?: XOR<TaskScalarRelationFilter, TaskWhereInput>
  }, "id">

  export type MessageOrderByWithAggregationInput = {
    id?: SortOrder
    content?: SortOrder
    assigneeId?: SortOrder
    taskId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    deletedBy?: SortOrderInput | SortOrder
    _count?: MessageCountOrderByAggregateInput
    _avg?: MessageAvgOrderByAggregateInput
    _max?: MessageMaxOrderByAggregateInput
    _min?: MessageMinOrderByAggregateInput
    _sum?: MessageSumOrderByAggregateInput
  }

  export type MessageScalarWhereWithAggregatesInput = {
    AND?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    OR?: MessageScalarWhereWithAggregatesInput[]
    NOT?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Message"> | number
    content?: StringWithAggregatesFilter<"Message"> | string
    assigneeId?: IntWithAggregatesFilter<"Message"> | number
    taskId?: IntWithAggregatesFilter<"Message"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Message"> | Date | string
    createdBy?: IntWithAggregatesFilter<"Message"> | number
    updatedAt?: DateTimeWithAggregatesFilter<"Message"> | Date | string
    updatedBy?: IntWithAggregatesFilter<"Message"> | number
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Message"> | Date | string | null
    deletedBy?: IntNullableWithAggregatesFilter<"Message"> | number | null
  }

  export type PermissionWhereInput = {
    AND?: PermissionWhereInput | PermissionWhereInput[]
    OR?: PermissionWhereInput[]
    NOT?: PermissionWhereInput | PermissionWhereInput[]
    userId?: IntFilter<"Permission"> | number
    workspaceId?: IntFilter<"Permission"> | number
    type?: EnumPermissionTypeFilter<"Permission"> | $Enums.PermissionType
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    workspace?: XOR<WorkspaceScalarRelationFilter, WorkspaceWhereInput>
  }

  export type PermissionOrderByWithRelationInput = {
    userId?: SortOrder
    workspaceId?: SortOrder
    type?: SortOrder
    user?: UserOrderByWithRelationInput
    workspace?: WorkspaceOrderByWithRelationInput
  }

  export type PermissionWhereUniqueInput = Prisma.AtLeast<{
    userId_workspaceId?: PermissionUserIdWorkspaceIdCompoundUniqueInput
    AND?: PermissionWhereInput | PermissionWhereInput[]
    OR?: PermissionWhereInput[]
    NOT?: PermissionWhereInput | PermissionWhereInput[]
    userId?: IntFilter<"Permission"> | number
    workspaceId?: IntFilter<"Permission"> | number
    type?: EnumPermissionTypeFilter<"Permission"> | $Enums.PermissionType
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    workspace?: XOR<WorkspaceScalarRelationFilter, WorkspaceWhereInput>
  }, "userId_workspaceId">

  export type PermissionOrderByWithAggregationInput = {
    userId?: SortOrder
    workspaceId?: SortOrder
    type?: SortOrder
    _count?: PermissionCountOrderByAggregateInput
    _avg?: PermissionAvgOrderByAggregateInput
    _max?: PermissionMaxOrderByAggregateInput
    _min?: PermissionMinOrderByAggregateInput
    _sum?: PermissionSumOrderByAggregateInput
  }

  export type PermissionScalarWhereWithAggregatesInput = {
    AND?: PermissionScalarWhereWithAggregatesInput | PermissionScalarWhereWithAggregatesInput[]
    OR?: PermissionScalarWhereWithAggregatesInput[]
    NOT?: PermissionScalarWhereWithAggregatesInput | PermissionScalarWhereWithAggregatesInput[]
    userId?: IntWithAggregatesFilter<"Permission"> | number
    workspaceId?: IntWithAggregatesFilter<"Permission"> | number
    type?: EnumPermissionTypeWithAggregatesFilter<"Permission"> | $Enums.PermissionType
  }

  export type PikudWhereInput = {
    AND?: PikudWhereInput | PikudWhereInput[]
    OR?: PikudWhereInput[]
    NOT?: PikudWhereInput | PikudWhereInput[]
    id?: IntFilter<"Pikud"> | number
    name?: StringFilter<"Pikud"> | string
    icon?: StringNullableFilter<"Pikud"> | string | null
    createdAt?: DateTimeFilter<"Pikud"> | Date | string
    createdBy?: IntFilter<"Pikud"> | number
    updatedAt?: DateTimeFilter<"Pikud"> | Date | string
    updatedBy?: IntFilter<"Pikud"> | number
    deletedAt?: DateTimeNullableFilter<"Pikud"> | Date | string | null
    deletedBy?: IntNullableFilter<"Pikud"> | number | null
    workspaces?: WorkspaceListRelationFilter
  }

  export type PikudOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    icon?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    deletedBy?: SortOrderInput | SortOrder
    workspaces?: WorkspaceOrderByRelationAggregateInput
  }

  export type PikudWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PikudWhereInput | PikudWhereInput[]
    OR?: PikudWhereInput[]
    NOT?: PikudWhereInput | PikudWhereInput[]
    name?: StringFilter<"Pikud"> | string
    icon?: StringNullableFilter<"Pikud"> | string | null
    createdAt?: DateTimeFilter<"Pikud"> | Date | string
    createdBy?: IntFilter<"Pikud"> | number
    updatedAt?: DateTimeFilter<"Pikud"> | Date | string
    updatedBy?: IntFilter<"Pikud"> | number
    deletedAt?: DateTimeNullableFilter<"Pikud"> | Date | string | null
    deletedBy?: IntNullableFilter<"Pikud"> | number | null
    workspaces?: WorkspaceListRelationFilter
  }, "id">

  export type PikudOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    icon?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    deletedBy?: SortOrderInput | SortOrder
    _count?: PikudCountOrderByAggregateInput
    _avg?: PikudAvgOrderByAggregateInput
    _max?: PikudMaxOrderByAggregateInput
    _min?: PikudMinOrderByAggregateInput
    _sum?: PikudSumOrderByAggregateInput
  }

  export type PikudScalarWhereWithAggregatesInput = {
    AND?: PikudScalarWhereWithAggregatesInput | PikudScalarWhereWithAggregatesInput[]
    OR?: PikudScalarWhereWithAggregatesInput[]
    NOT?: PikudScalarWhereWithAggregatesInput | PikudScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Pikud"> | number
    name?: StringWithAggregatesFilter<"Pikud"> | string
    icon?: StringNullableWithAggregatesFilter<"Pikud"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Pikud"> | Date | string
    createdBy?: IntWithAggregatesFilter<"Pikud"> | number
    updatedAt?: DateTimeWithAggregatesFilter<"Pikud"> | Date | string
    updatedBy?: IntWithAggregatesFilter<"Pikud"> | number
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Pikud"> | Date | string | null
    deletedBy?: IntNullableWithAggregatesFilter<"Pikud"> | number | null
  }

  export type SourceWhereInput = {
    AND?: SourceWhereInput | SourceWhereInput[]
    OR?: SourceWhereInput[]
    NOT?: SourceWhereInput | SourceWhereInput[]
    id?: IntFilter<"Source"> | number
    name?: StringFilter<"Source"> | string
    createdAt?: DateTimeFilter<"Source"> | Date | string
    createdBy?: IntFilter<"Source"> | number
    updatedAt?: DateTimeFilter<"Source"> | Date | string
    updatedBy?: IntFilter<"Source"> | number
    deletedAt?: DateTimeNullableFilter<"Source"> | Date | string | null
    deletedBy?: IntNullableFilter<"Source"> | number | null
    tasks?: TaskListRelationFilter
  }

  export type SourceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    deletedBy?: SortOrderInput | SortOrder
    tasks?: TaskOrderByRelationAggregateInput
  }

  export type SourceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SourceWhereInput | SourceWhereInput[]
    OR?: SourceWhereInput[]
    NOT?: SourceWhereInput | SourceWhereInput[]
    name?: StringFilter<"Source"> | string
    createdAt?: DateTimeFilter<"Source"> | Date | string
    createdBy?: IntFilter<"Source"> | number
    updatedAt?: DateTimeFilter<"Source"> | Date | string
    updatedBy?: IntFilter<"Source"> | number
    deletedAt?: DateTimeNullableFilter<"Source"> | Date | string | null
    deletedBy?: IntNullableFilter<"Source"> | number | null
    tasks?: TaskListRelationFilter
  }, "id">

  export type SourceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    deletedBy?: SortOrderInput | SortOrder
    _count?: SourceCountOrderByAggregateInput
    _avg?: SourceAvgOrderByAggregateInput
    _max?: SourceMaxOrderByAggregateInput
    _min?: SourceMinOrderByAggregateInput
    _sum?: SourceSumOrderByAggregateInput
  }

  export type SourceScalarWhereWithAggregatesInput = {
    AND?: SourceScalarWhereWithAggregatesInput | SourceScalarWhereWithAggregatesInput[]
    OR?: SourceScalarWhereWithAggregatesInput[]
    NOT?: SourceScalarWhereWithAggregatesInput | SourceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Source"> | number
    name?: StringWithAggregatesFilter<"Source"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Source"> | Date | string
    createdBy?: IntWithAggregatesFilter<"Source"> | number
    updatedAt?: DateTimeWithAggregatesFilter<"Source"> | Date | string
    updatedBy?: IntWithAggregatesFilter<"Source"> | number
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Source"> | Date | string | null
    deletedBy?: IntNullableWithAggregatesFilter<"Source"> | number | null
  }

  export type TagWhereInput = {
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    id?: IntFilter<"Tag"> | number
    name?: StringFilter<"Tag"> | string
    createdAt?: DateTimeFilter<"Tag"> | Date | string
    createdBy?: IntFilter<"Tag"> | number
    updatedAt?: DateTimeFilter<"Tag"> | Date | string
    updatedBy?: IntFilter<"Tag"> | number
    workspaceId?: IntFilter<"Tag"> | number
    workspace?: XOR<WorkspaceScalarRelationFilter, WorkspaceWhereInput>
    tasks?: TaskListRelationFilter
  }

  export type TagOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    workspaceId?: SortOrder
    workspace?: WorkspaceOrderByWithRelationInput
    tasks?: TaskOrderByRelationAggregateInput
  }

  export type TagWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TagWhereInput | TagWhereInput[]
    OR?: TagWhereInput[]
    NOT?: TagWhereInput | TagWhereInput[]
    name?: StringFilter<"Tag"> | string
    createdAt?: DateTimeFilter<"Tag"> | Date | string
    createdBy?: IntFilter<"Tag"> | number
    updatedAt?: DateTimeFilter<"Tag"> | Date | string
    updatedBy?: IntFilter<"Tag"> | number
    workspaceId?: IntFilter<"Tag"> | number
    workspace?: XOR<WorkspaceScalarRelationFilter, WorkspaceWhereInput>
    tasks?: TaskListRelationFilter
  }, "id">

  export type TagOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    workspaceId?: SortOrder
    _count?: TagCountOrderByAggregateInput
    _avg?: TagAvgOrderByAggregateInput
    _max?: TagMaxOrderByAggregateInput
    _min?: TagMinOrderByAggregateInput
    _sum?: TagSumOrderByAggregateInput
  }

  export type TagScalarWhereWithAggregatesInput = {
    AND?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    OR?: TagScalarWhereWithAggregatesInput[]
    NOT?: TagScalarWhereWithAggregatesInput | TagScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Tag"> | number
    name?: StringWithAggregatesFilter<"Tag"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Tag"> | Date | string
    createdBy?: IntWithAggregatesFilter<"Tag"> | number
    updatedAt?: DateTimeWithAggregatesFilter<"Tag"> | Date | string
    updatedBy?: IntWithAggregatesFilter<"Tag"> | number
    workspaceId?: IntWithAggregatesFilter<"Tag"> | number
  }

  export type TaskWhereInput = {
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    id?: IntFilter<"Task"> | number
    title?: StringFilter<"Task"> | string
    description?: StringNullableFilter<"Task"> | string | null
    flagged?: BoolFilter<"Task"> | boolean
    deadlineType?: StringFilter<"Task"> | string
    issuedAt?: DateTimeFilter<"Task"> | Date | string
    dueDate?: DateTimeFilter<"Task"> | Date | string
    notes?: JsonNullableFilter<"Task">
    createdAt?: DateTimeFilter<"Task"> | Date | string
    createdBy?: IntFilter<"Task"> | number
    updatedAt?: DateTimeFilter<"Task"> | Date | string
    updatedBy?: IntFilter<"Task"> | number
    deletedAt?: DateTimeNullableFilter<"Task"> | Date | string | null
    deletedBy?: IntNullableFilter<"Task"> | number | null
    workspaceId?: IntFilter<"Task"> | number
    sourceId?: IntFilter<"Task"> | number
    workspace?: XOR<WorkspaceScalarRelationFilter, WorkspaceWhereInput>
    source?: XOR<SourceScalarRelationFilter, SourceWhereInput>
    tags?: TagListRelationFilter
    assigneeStatuses?: AssigneeTaskStatusListRelationFilter
    messages?: MessageListRelationFilter
    history?: TaskHistoryListRelationFilter
  }

  export type TaskOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    flagged?: SortOrder
    deadlineType?: SortOrder
    issuedAt?: SortOrder
    dueDate?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    deletedBy?: SortOrderInput | SortOrder
    workspaceId?: SortOrder
    sourceId?: SortOrder
    workspace?: WorkspaceOrderByWithRelationInput
    source?: SourceOrderByWithRelationInput
    tags?: TagOrderByRelationAggregateInput
    assigneeStatuses?: AssigneeTaskStatusOrderByRelationAggregateInput
    messages?: MessageOrderByRelationAggregateInput
    history?: TaskHistoryOrderByRelationAggregateInput
  }

  export type TaskWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    title?: StringFilter<"Task"> | string
    description?: StringNullableFilter<"Task"> | string | null
    flagged?: BoolFilter<"Task"> | boolean
    deadlineType?: StringFilter<"Task"> | string
    issuedAt?: DateTimeFilter<"Task"> | Date | string
    dueDate?: DateTimeFilter<"Task"> | Date | string
    notes?: JsonNullableFilter<"Task">
    createdAt?: DateTimeFilter<"Task"> | Date | string
    createdBy?: IntFilter<"Task"> | number
    updatedAt?: DateTimeFilter<"Task"> | Date | string
    updatedBy?: IntFilter<"Task"> | number
    deletedAt?: DateTimeNullableFilter<"Task"> | Date | string | null
    deletedBy?: IntNullableFilter<"Task"> | number | null
    workspaceId?: IntFilter<"Task"> | number
    sourceId?: IntFilter<"Task"> | number
    workspace?: XOR<WorkspaceScalarRelationFilter, WorkspaceWhereInput>
    source?: XOR<SourceScalarRelationFilter, SourceWhereInput>
    tags?: TagListRelationFilter
    assigneeStatuses?: AssigneeTaskStatusListRelationFilter
    messages?: MessageListRelationFilter
    history?: TaskHistoryListRelationFilter
  }, "id">

  export type TaskOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    flagged?: SortOrder
    deadlineType?: SortOrder
    issuedAt?: SortOrder
    dueDate?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    deletedBy?: SortOrderInput | SortOrder
    workspaceId?: SortOrder
    sourceId?: SortOrder
    _count?: TaskCountOrderByAggregateInput
    _avg?: TaskAvgOrderByAggregateInput
    _max?: TaskMaxOrderByAggregateInput
    _min?: TaskMinOrderByAggregateInput
    _sum?: TaskSumOrderByAggregateInput
  }

  export type TaskScalarWhereWithAggregatesInput = {
    AND?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    OR?: TaskScalarWhereWithAggregatesInput[]
    NOT?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Task"> | number
    title?: StringWithAggregatesFilter<"Task"> | string
    description?: StringNullableWithAggregatesFilter<"Task"> | string | null
    flagged?: BoolWithAggregatesFilter<"Task"> | boolean
    deadlineType?: StringWithAggregatesFilter<"Task"> | string
    issuedAt?: DateTimeWithAggregatesFilter<"Task"> | Date | string
    dueDate?: DateTimeWithAggregatesFilter<"Task"> | Date | string
    notes?: JsonNullableWithAggregatesFilter<"Task">
    createdAt?: DateTimeWithAggregatesFilter<"Task"> | Date | string
    createdBy?: IntWithAggregatesFilter<"Task"> | number
    updatedAt?: DateTimeWithAggregatesFilter<"Task"> | Date | string
    updatedBy?: IntWithAggregatesFilter<"Task"> | number
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Task"> | Date | string | null
    deletedBy?: IntNullableWithAggregatesFilter<"Task"> | number | null
    workspaceId?: IntWithAggregatesFilter<"Task"> | number
    sourceId?: IntWithAggregatesFilter<"Task"> | number
  }

  export type TaskHistoryWhereInput = {
    AND?: TaskHistoryWhereInput | TaskHistoryWhereInput[]
    OR?: TaskHistoryWhereInput[]
    NOT?: TaskHistoryWhereInput | TaskHistoryWhereInput[]
    id?: IntFilter<"TaskHistory"> | number
    action?: EnumHistoryActionFilter<"TaskHistory"> | $Enums.HistoryAction
    field?: StringFilter<"TaskHistory"> | string
    value?: StringNullableFilter<"TaskHistory"> | string | null
    timestamp?: DateTimeFilter<"TaskHistory"> | Date | string
    taskId?: IntFilter<"TaskHistory"> | number
    workspaceId?: IntFilter<"TaskHistory"> | number
    userId?: IntFilter<"TaskHistory"> | number
    task?: XOR<TaskScalarRelationFilter, TaskWhereInput>
    workspace?: XOR<WorkspaceScalarRelationFilter, WorkspaceWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TaskHistoryOrderByWithRelationInput = {
    id?: SortOrder
    action?: SortOrder
    field?: SortOrder
    value?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    taskId?: SortOrder
    workspaceId?: SortOrder
    userId?: SortOrder
    task?: TaskOrderByWithRelationInput
    workspace?: WorkspaceOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type TaskHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TaskHistoryWhereInput | TaskHistoryWhereInput[]
    OR?: TaskHistoryWhereInput[]
    NOT?: TaskHistoryWhereInput | TaskHistoryWhereInput[]
    action?: EnumHistoryActionFilter<"TaskHistory"> | $Enums.HistoryAction
    field?: StringFilter<"TaskHistory"> | string
    value?: StringNullableFilter<"TaskHistory"> | string | null
    timestamp?: DateTimeFilter<"TaskHistory"> | Date | string
    taskId?: IntFilter<"TaskHistory"> | number
    workspaceId?: IntFilter<"TaskHistory"> | number
    userId?: IntFilter<"TaskHistory"> | number
    task?: XOR<TaskScalarRelationFilter, TaskWhereInput>
    workspace?: XOR<WorkspaceScalarRelationFilter, WorkspaceWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type TaskHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    action?: SortOrder
    field?: SortOrder
    value?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    taskId?: SortOrder
    workspaceId?: SortOrder
    userId?: SortOrder
    _count?: TaskHistoryCountOrderByAggregateInput
    _avg?: TaskHistoryAvgOrderByAggregateInput
    _max?: TaskHistoryMaxOrderByAggregateInput
    _min?: TaskHistoryMinOrderByAggregateInput
    _sum?: TaskHistorySumOrderByAggregateInput
  }

  export type TaskHistoryScalarWhereWithAggregatesInput = {
    AND?: TaskHistoryScalarWhereWithAggregatesInput | TaskHistoryScalarWhereWithAggregatesInput[]
    OR?: TaskHistoryScalarWhereWithAggregatesInput[]
    NOT?: TaskHistoryScalarWhereWithAggregatesInput | TaskHistoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TaskHistory"> | number
    action?: EnumHistoryActionWithAggregatesFilter<"TaskHistory"> | $Enums.HistoryAction
    field?: StringWithAggregatesFilter<"TaskHistory"> | string
    value?: StringNullableWithAggregatesFilter<"TaskHistory"> | string | null
    timestamp?: DateTimeWithAggregatesFilter<"TaskHistory"> | Date | string
    taskId?: IntWithAggregatesFilter<"TaskHistory"> | number
    workspaceId?: IntWithAggregatesFilter<"TaskHistory"> | number
    userId?: IntWithAggregatesFilter<"TaskHistory"> | number
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    upn?: StringFilter<"User"> | string
    info?: JsonNullableFilter<"User">
    assignees?: AssigneeUserListRelationFilter
    permissions?: PermissionListRelationFilter
    history?: TaskHistoryListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    upn?: SortOrder
    info?: SortOrderInput | SortOrder
    assignees?: AssigneeUserOrderByRelationAggregateInput
    permissions?: PermissionOrderByRelationAggregateInput
    history?: TaskHistoryOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    upn?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    info?: JsonNullableFilter<"User">
    assignees?: AssigneeUserListRelationFilter
    permissions?: PermissionListRelationFilter
    history?: TaskHistoryListRelationFilter
  }, "id" | "upn">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    upn?: SortOrder
    info?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    upn?: StringWithAggregatesFilter<"User"> | string
    info?: JsonNullableWithAggregatesFilter<"User">
  }

  export type WorkspaceWhereInput = {
    AND?: WorkspaceWhereInput | WorkspaceWhereInput[]
    OR?: WorkspaceWhereInput[]
    NOT?: WorkspaceWhereInput | WorkspaceWhereInput[]
    id?: IntFilter<"Workspace"> | number
    title?: StringFilter<"Workspace"> | string
    urlName?: StringFilter<"Workspace"> | string
    icon?: StringNullableFilter<"Workspace"> | string | null
    assigneeStatusEditable?: BoolFilter<"Workspace"> | boolean
    createdAt?: DateTimeFilter<"Workspace"> | Date | string
    createdBy?: IntFilter<"Workspace"> | number
    updatedAt?: DateTimeFilter<"Workspace"> | Date | string
    updatedBy?: IntFilter<"Workspace"> | number
    deletedAt?: DateTimeNullableFilter<"Workspace"> | Date | string | null
    deletedBy?: IntNullableFilter<"Workspace"> | number | null
    pikudId?: IntFilter<"Workspace"> | number
    pikud?: XOR<PikudScalarRelationFilter, PikudWhereInput>
    tags?: TagListRelationFilter
    tasks?: TaskListRelationFilter
    workspaceStatuses?: WorkspaceStatusListRelationFilter
    permissions?: PermissionListRelationFilter
    tasksHistory?: TaskHistoryListRelationFilter
  }

  export type WorkspaceOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    urlName?: SortOrder
    icon?: SortOrderInput | SortOrder
    assigneeStatusEditable?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    deletedBy?: SortOrderInput | SortOrder
    pikudId?: SortOrder
    pikud?: PikudOrderByWithRelationInput
    tags?: TagOrderByRelationAggregateInput
    tasks?: TaskOrderByRelationAggregateInput
    workspaceStatuses?: WorkspaceStatusOrderByRelationAggregateInput
    permissions?: PermissionOrderByRelationAggregateInput
    tasksHistory?: TaskHistoryOrderByRelationAggregateInput
  }

  export type WorkspaceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: WorkspaceWhereInput | WorkspaceWhereInput[]
    OR?: WorkspaceWhereInput[]
    NOT?: WorkspaceWhereInput | WorkspaceWhereInput[]
    title?: StringFilter<"Workspace"> | string
    urlName?: StringFilter<"Workspace"> | string
    icon?: StringNullableFilter<"Workspace"> | string | null
    assigneeStatusEditable?: BoolFilter<"Workspace"> | boolean
    createdAt?: DateTimeFilter<"Workspace"> | Date | string
    createdBy?: IntFilter<"Workspace"> | number
    updatedAt?: DateTimeFilter<"Workspace"> | Date | string
    updatedBy?: IntFilter<"Workspace"> | number
    deletedAt?: DateTimeNullableFilter<"Workspace"> | Date | string | null
    deletedBy?: IntNullableFilter<"Workspace"> | number | null
    pikudId?: IntFilter<"Workspace"> | number
    pikud?: XOR<PikudScalarRelationFilter, PikudWhereInput>
    tags?: TagListRelationFilter
    tasks?: TaskListRelationFilter
    workspaceStatuses?: WorkspaceStatusListRelationFilter
    permissions?: PermissionListRelationFilter
    tasksHistory?: TaskHistoryListRelationFilter
  }, "id">

  export type WorkspaceOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    urlName?: SortOrder
    icon?: SortOrderInput | SortOrder
    assigneeStatusEditable?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    deletedBy?: SortOrderInput | SortOrder
    pikudId?: SortOrder
    _count?: WorkspaceCountOrderByAggregateInput
    _avg?: WorkspaceAvgOrderByAggregateInput
    _max?: WorkspaceMaxOrderByAggregateInput
    _min?: WorkspaceMinOrderByAggregateInput
    _sum?: WorkspaceSumOrderByAggregateInput
  }

  export type WorkspaceScalarWhereWithAggregatesInput = {
    AND?: WorkspaceScalarWhereWithAggregatesInput | WorkspaceScalarWhereWithAggregatesInput[]
    OR?: WorkspaceScalarWhereWithAggregatesInput[]
    NOT?: WorkspaceScalarWhereWithAggregatesInput | WorkspaceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Workspace"> | number
    title?: StringWithAggregatesFilter<"Workspace"> | string
    urlName?: StringWithAggregatesFilter<"Workspace"> | string
    icon?: StringNullableWithAggregatesFilter<"Workspace"> | string | null
    assigneeStatusEditable?: BoolWithAggregatesFilter<"Workspace"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Workspace"> | Date | string
    createdBy?: IntWithAggregatesFilter<"Workspace"> | number
    updatedAt?: DateTimeWithAggregatesFilter<"Workspace"> | Date | string
    updatedBy?: IntWithAggregatesFilter<"Workspace"> | number
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Workspace"> | Date | string | null
    deletedBy?: IntNullableWithAggregatesFilter<"Workspace"> | number | null
    pikudId?: IntWithAggregatesFilter<"Workspace"> | number
  }

  export type WorkspaceStatusWhereInput = {
    AND?: WorkspaceStatusWhereInput | WorkspaceStatusWhereInput[]
    OR?: WorkspaceStatusWhereInput[]
    NOT?: WorkspaceStatusWhereInput | WorkspaceStatusWhereInput[]
    id?: IntFilter<"WorkspaceStatus"> | number
    name?: StringFilter<"WorkspaceStatus"> | string
    color?: StringFilter<"WorkspaceStatus"> | string
    statusType?: StringFilter<"WorkspaceStatus"> | string
    workspaceId?: IntFilter<"WorkspaceStatus"> | number
    workspace?: XOR<WorkspaceScalarRelationFilter, WorkspaceWhereInput>
    assigneeTaskStatuses?: AssigneeTaskStatusListRelationFilter
  }

  export type WorkspaceStatusOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrder
    statusType?: SortOrder
    workspaceId?: SortOrder
    workspace?: WorkspaceOrderByWithRelationInput
    assigneeTaskStatuses?: AssigneeTaskStatusOrderByRelationAggregateInput
  }

  export type WorkspaceStatusWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: WorkspaceStatusWhereInput | WorkspaceStatusWhereInput[]
    OR?: WorkspaceStatusWhereInput[]
    NOT?: WorkspaceStatusWhereInput | WorkspaceStatusWhereInput[]
    name?: StringFilter<"WorkspaceStatus"> | string
    color?: StringFilter<"WorkspaceStatus"> | string
    statusType?: StringFilter<"WorkspaceStatus"> | string
    workspaceId?: IntFilter<"WorkspaceStatus"> | number
    workspace?: XOR<WorkspaceScalarRelationFilter, WorkspaceWhereInput>
    assigneeTaskStatuses?: AssigneeTaskStatusListRelationFilter
  }, "id">

  export type WorkspaceStatusOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrder
    statusType?: SortOrder
    workspaceId?: SortOrder
    _count?: WorkspaceStatusCountOrderByAggregateInput
    _avg?: WorkspaceStatusAvgOrderByAggregateInput
    _max?: WorkspaceStatusMaxOrderByAggregateInput
    _min?: WorkspaceStatusMinOrderByAggregateInput
    _sum?: WorkspaceStatusSumOrderByAggregateInput
  }

  export type WorkspaceStatusScalarWhereWithAggregatesInput = {
    AND?: WorkspaceStatusScalarWhereWithAggregatesInput | WorkspaceStatusScalarWhereWithAggregatesInput[]
    OR?: WorkspaceStatusScalarWhereWithAggregatesInput[]
    NOT?: WorkspaceStatusScalarWhereWithAggregatesInput | WorkspaceStatusScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"WorkspaceStatus"> | number
    name?: StringWithAggregatesFilter<"WorkspaceStatus"> | string
    color?: StringWithAggregatesFilter<"WorkspaceStatus"> | string
    statusType?: StringWithAggregatesFilter<"WorkspaceStatus"> | string
    workspaceId?: IntWithAggregatesFilter<"WorkspaceStatus"> | number
  }

  export type AssigneeCreateInput = {
    name: string
    color: string
    createdAt?: Date | string
    createdBy: number
    updatedAt?: Date | string
    updatedBy: number
    deletedAt?: Date | string | null
    deletedBy?: number | null
    users?: AssigneeUserCreateNestedManyWithoutAssigneeInput
    taskStatuses?: AssigneeTaskStatusCreateNestedManyWithoutAssigneeInput
    messages?: MessageCreateNestedManyWithoutAssigneeInput
  }

  export type AssigneeUncheckedCreateInput = {
    id?: number
    name: string
    color: string
    createdAt?: Date | string
    createdBy: number
    updatedAt?: Date | string
    updatedBy: number
    deletedAt?: Date | string | null
    deletedBy?: number | null
    users?: AssigneeUserUncheckedCreateNestedManyWithoutAssigneeInput
    taskStatuses?: AssigneeTaskStatusUncheckedCreateNestedManyWithoutAssigneeInput
    messages?: MessageUncheckedCreateNestedManyWithoutAssigneeInput
  }

  export type AssigneeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    users?: AssigneeUserUpdateManyWithoutAssigneeNestedInput
    taskStatuses?: AssigneeTaskStatusUpdateManyWithoutAssigneeNestedInput
    messages?: MessageUpdateManyWithoutAssigneeNestedInput
  }

  export type AssigneeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    users?: AssigneeUserUncheckedUpdateManyWithoutAssigneeNestedInput
    taskStatuses?: AssigneeTaskStatusUncheckedUpdateManyWithoutAssigneeNestedInput
    messages?: MessageUncheckedUpdateManyWithoutAssigneeNestedInput
  }

  export type AssigneeCreateManyInput = {
    id?: number
    name: string
    color: string
    createdAt?: Date | string
    createdBy: number
    updatedAt?: Date | string
    updatedBy: number
    deletedAt?: Date | string | null
    deletedBy?: number | null
  }

  export type AssigneeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AssigneeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AssigneeTaskStatusCreateInput = {
    task: TaskCreateNestedOneWithoutAssigneeStatusesInput
    assignee: AssigneeCreateNestedOneWithoutTaskStatusesInput
    status: WorkspaceStatusCreateNestedOneWithoutAssigneeTaskStatusesInput
  }

  export type AssigneeTaskStatusUncheckedCreateInput = {
    taskId: number
    assigneeId: number
    statusId: number
  }

  export type AssigneeTaskStatusUpdateInput = {
    task?: TaskUpdateOneRequiredWithoutAssigneeStatusesNestedInput
    assignee?: AssigneeUpdateOneRequiredWithoutTaskStatusesNestedInput
    status?: WorkspaceStatusUpdateOneRequiredWithoutAssigneeTaskStatusesNestedInput
  }

  export type AssigneeTaskStatusUncheckedUpdateInput = {
    taskId?: IntFieldUpdateOperationsInput | number
    assigneeId?: IntFieldUpdateOperationsInput | number
    statusId?: IntFieldUpdateOperationsInput | number
  }

  export type AssigneeTaskStatusCreateManyInput = {
    taskId: number
    assigneeId: number
    statusId: number
  }

  export type AssigneeTaskStatusUpdateManyMutationInput = {

  }

  export type AssigneeTaskStatusUncheckedUpdateManyInput = {
    taskId?: IntFieldUpdateOperationsInput | number
    assigneeId?: IntFieldUpdateOperationsInput | number
    statusId?: IntFieldUpdateOperationsInput | number
  }

  export type AssigneeUserCreateInput = {
    assignee: AssigneeCreateNestedOneWithoutUsersInput
    user: UserCreateNestedOneWithoutAssigneesInput
  }

  export type AssigneeUserUncheckedCreateInput = {
    assigneeId: number
    userId: number
  }

  export type AssigneeUserUpdateInput = {
    assignee?: AssigneeUpdateOneRequiredWithoutUsersNestedInput
    user?: UserUpdateOneRequiredWithoutAssigneesNestedInput
  }

  export type AssigneeUserUncheckedUpdateInput = {
    assigneeId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type AssigneeUserCreateManyInput = {
    assigneeId: number
    userId: number
  }

  export type AssigneeUserUpdateManyMutationInput = {

  }

  export type AssigneeUserUncheckedUpdateManyInput = {
    assigneeId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type MessageCreateInput = {
    content: string
    createdAt?: Date | string
    createdBy: number
    updatedAt?: Date | string
    updatedBy: number
    deletedAt?: Date | string | null
    deletedBy?: number | null
    assignee: AssigneeCreateNestedOneWithoutMessagesInput
    task: TaskCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateInput = {
    id?: number
    content: string
    assigneeId: number
    taskId: number
    createdAt?: Date | string
    createdBy: number
    updatedAt?: Date | string
    updatedBy: number
    deletedAt?: Date | string | null
    deletedBy?: number | null
  }

  export type MessageUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    assignee?: AssigneeUpdateOneRequiredWithoutMessagesNestedInput
    task?: TaskUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    assigneeId?: IntFieldUpdateOperationsInput | number
    taskId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MessageCreateManyInput = {
    id?: number
    content: string
    assigneeId: number
    taskId: number
    createdAt?: Date | string
    createdBy: number
    updatedAt?: Date | string
    updatedBy: number
    deletedAt?: Date | string | null
    deletedBy?: number | null
  }

  export type MessageUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MessageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    assigneeId?: IntFieldUpdateOperationsInput | number
    taskId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PermissionCreateInput = {
    type: $Enums.PermissionType
    user: UserCreateNestedOneWithoutPermissionsInput
    workspace: WorkspaceCreateNestedOneWithoutPermissionsInput
  }

  export type PermissionUncheckedCreateInput = {
    userId: number
    workspaceId: number
    type: $Enums.PermissionType
  }

  export type PermissionUpdateInput = {
    type?: EnumPermissionTypeFieldUpdateOperationsInput | $Enums.PermissionType
    user?: UserUpdateOneRequiredWithoutPermissionsNestedInput
    workspace?: WorkspaceUpdateOneRequiredWithoutPermissionsNestedInput
  }

  export type PermissionUncheckedUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    workspaceId?: IntFieldUpdateOperationsInput | number
    type?: EnumPermissionTypeFieldUpdateOperationsInput | $Enums.PermissionType
  }

  export type PermissionCreateManyInput = {
    userId: number
    workspaceId: number
    type: $Enums.PermissionType
  }

  export type PermissionUpdateManyMutationInput = {
    type?: EnumPermissionTypeFieldUpdateOperationsInput | $Enums.PermissionType
  }

  export type PermissionUncheckedUpdateManyInput = {
    userId?: IntFieldUpdateOperationsInput | number
    workspaceId?: IntFieldUpdateOperationsInput | number
    type?: EnumPermissionTypeFieldUpdateOperationsInput | $Enums.PermissionType
  }

  export type PikudCreateInput = {
    name: string
    icon?: string | null
    createdAt?: Date | string
    createdBy: number
    updatedAt?: Date | string
    updatedBy: number
    deletedAt?: Date | string | null
    deletedBy?: number | null
    workspaces?: WorkspaceCreateNestedManyWithoutPikudInput
  }

  export type PikudUncheckedCreateInput = {
    id?: number
    name: string
    icon?: string | null
    createdAt?: Date | string
    createdBy: number
    updatedAt?: Date | string
    updatedBy: number
    deletedAt?: Date | string | null
    deletedBy?: number | null
    workspaces?: WorkspaceUncheckedCreateNestedManyWithoutPikudInput
  }

  export type PikudUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    workspaces?: WorkspaceUpdateManyWithoutPikudNestedInput
  }

  export type PikudUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    workspaces?: WorkspaceUncheckedUpdateManyWithoutPikudNestedInput
  }

  export type PikudCreateManyInput = {
    id?: number
    name: string
    icon?: string | null
    createdAt?: Date | string
    createdBy: number
    updatedAt?: Date | string
    updatedBy: number
    deletedAt?: Date | string | null
    deletedBy?: number | null
  }

  export type PikudUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PikudUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SourceCreateInput = {
    name: string
    createdAt?: Date | string
    createdBy: number
    updatedAt?: Date | string
    updatedBy: number
    deletedAt?: Date | string | null
    deletedBy?: number | null
    tasks?: TaskCreateNestedManyWithoutSourceInput
  }

  export type SourceUncheckedCreateInput = {
    id?: number
    name: string
    createdAt?: Date | string
    createdBy: number
    updatedAt?: Date | string
    updatedBy: number
    deletedAt?: Date | string | null
    deletedBy?: number | null
    tasks?: TaskUncheckedCreateNestedManyWithoutSourceInput
  }

  export type SourceUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    tasks?: TaskUpdateManyWithoutSourceNestedInput
  }

  export type SourceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    tasks?: TaskUncheckedUpdateManyWithoutSourceNestedInput
  }

  export type SourceCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
    createdBy: number
    updatedAt?: Date | string
    updatedBy: number
    deletedAt?: Date | string | null
    deletedBy?: number | null
  }

  export type SourceUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SourceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TagCreateInput = {
    name: string
    createdAt?: Date | string
    createdBy: number
    updatedAt?: Date | string
    updatedBy: number
    workspace: WorkspaceCreateNestedOneWithoutTagsInput
    tasks?: TaskCreateNestedManyWithoutTagsInput
  }

  export type TagUncheckedCreateInput = {
    id?: number
    name: string
    createdAt?: Date | string
    createdBy: number
    updatedAt?: Date | string
    updatedBy: number
    workspaceId: number
    tasks?: TaskUncheckedCreateNestedManyWithoutTagsInput
  }

  export type TagUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: IntFieldUpdateOperationsInput | number
    workspace?: WorkspaceUpdateOneRequiredWithoutTagsNestedInput
    tasks?: TaskUpdateManyWithoutTagsNestedInput
  }

  export type TagUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: IntFieldUpdateOperationsInput | number
    workspaceId?: IntFieldUpdateOperationsInput | number
    tasks?: TaskUncheckedUpdateManyWithoutTagsNestedInput
  }

  export type TagCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
    createdBy: number
    updatedAt?: Date | string
    updatedBy: number
    workspaceId: number
  }

  export type TagUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: IntFieldUpdateOperationsInput | number
  }

  export type TagUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: IntFieldUpdateOperationsInput | number
    workspaceId?: IntFieldUpdateOperationsInput | number
  }

  export type TaskCreateInput = {
    title: string
    description?: string | null
    flagged?: boolean
    deadlineType: string
    issuedAt?: Date | string
    dueDate: Date | string
    notes?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    createdBy: number
    updatedAt?: Date | string
    updatedBy: number
    deletedAt?: Date | string | null
    deletedBy?: number | null
    workspace: WorkspaceCreateNestedOneWithoutTasksInput
    source: SourceCreateNestedOneWithoutTasksInput
    tags?: TagCreateNestedManyWithoutTasksInput
    assigneeStatuses?: AssigneeTaskStatusCreateNestedManyWithoutTaskInput
    messages?: MessageCreateNestedManyWithoutTaskInput
    history?: TaskHistoryCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateInput = {
    id?: number
    title: string
    description?: string | null
    flagged?: boolean
    deadlineType: string
    issuedAt?: Date | string
    dueDate: Date | string
    notes?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    createdBy: number
    updatedAt?: Date | string
    updatedBy: number
    deletedAt?: Date | string | null
    deletedBy?: number | null
    workspaceId: number
    sourceId: number
    tags?: TagUncheckedCreateNestedManyWithoutTasksInput
    assigneeStatuses?: AssigneeTaskStatusUncheckedCreateNestedManyWithoutTaskInput
    messages?: MessageUncheckedCreateNestedManyWithoutTaskInput
    history?: TaskHistoryUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    flagged?: BoolFieldUpdateOperationsInput | boolean
    deadlineType?: StringFieldUpdateOperationsInput | string
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    workspace?: WorkspaceUpdateOneRequiredWithoutTasksNestedInput
    source?: SourceUpdateOneRequiredWithoutTasksNestedInput
    tags?: TagUpdateManyWithoutTasksNestedInput
    assigneeStatuses?: AssigneeTaskStatusUpdateManyWithoutTaskNestedInput
    messages?: MessageUpdateManyWithoutTaskNestedInput
    history?: TaskHistoryUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    flagged?: BoolFieldUpdateOperationsInput | boolean
    deadlineType?: StringFieldUpdateOperationsInput | string
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    workspaceId?: IntFieldUpdateOperationsInput | number
    sourceId?: IntFieldUpdateOperationsInput | number
    tags?: TagUncheckedUpdateManyWithoutTasksNestedInput
    assigneeStatuses?: AssigneeTaskStatusUncheckedUpdateManyWithoutTaskNestedInput
    messages?: MessageUncheckedUpdateManyWithoutTaskNestedInput
    history?: TaskHistoryUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskCreateManyInput = {
    id?: number
    title: string
    description?: string | null
    flagged?: boolean
    deadlineType: string
    issuedAt?: Date | string
    dueDate: Date | string
    notes?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    createdBy: number
    updatedAt?: Date | string
    updatedBy: number
    deletedAt?: Date | string | null
    deletedBy?: number | null
    workspaceId: number
    sourceId: number
  }

  export type TaskUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    flagged?: BoolFieldUpdateOperationsInput | boolean
    deadlineType?: StringFieldUpdateOperationsInput | string
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TaskUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    flagged?: BoolFieldUpdateOperationsInput | boolean
    deadlineType?: StringFieldUpdateOperationsInput | string
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    workspaceId?: IntFieldUpdateOperationsInput | number
    sourceId?: IntFieldUpdateOperationsInput | number
  }

  export type TaskHistoryCreateInput = {
    action: $Enums.HistoryAction
    field: string
    value?: string | null
    timestamp?: Date | string
    task: TaskCreateNestedOneWithoutHistoryInput
    workspace: WorkspaceCreateNestedOneWithoutTasksHistoryInput
    user: UserCreateNestedOneWithoutHistoryInput
  }

  export type TaskHistoryUncheckedCreateInput = {
    id?: number
    action: $Enums.HistoryAction
    field: string
    value?: string | null
    timestamp?: Date | string
    taskId: number
    workspaceId: number
    userId: number
  }

  export type TaskHistoryUpdateInput = {
    action?: EnumHistoryActionFieldUpdateOperationsInput | $Enums.HistoryAction
    field?: StringFieldUpdateOperationsInput | string
    value?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    task?: TaskUpdateOneRequiredWithoutHistoryNestedInput
    workspace?: WorkspaceUpdateOneRequiredWithoutTasksHistoryNestedInput
    user?: UserUpdateOneRequiredWithoutHistoryNestedInput
  }

  export type TaskHistoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    action?: EnumHistoryActionFieldUpdateOperationsInput | $Enums.HistoryAction
    field?: StringFieldUpdateOperationsInput | string
    value?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    taskId?: IntFieldUpdateOperationsInput | number
    workspaceId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type TaskHistoryCreateManyInput = {
    id?: number
    action: $Enums.HistoryAction
    field: string
    value?: string | null
    timestamp?: Date | string
    taskId: number
    workspaceId: number
    userId: number
  }

  export type TaskHistoryUpdateManyMutationInput = {
    action?: EnumHistoryActionFieldUpdateOperationsInput | $Enums.HistoryAction
    field?: StringFieldUpdateOperationsInput | string
    value?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TaskHistoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    action?: EnumHistoryActionFieldUpdateOperationsInput | $Enums.HistoryAction
    field?: StringFieldUpdateOperationsInput | string
    value?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    taskId?: IntFieldUpdateOperationsInput | number
    workspaceId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type UserCreateInput = {
    upn: string
    info?: NullableJsonNullValueInput | InputJsonValue
    assignees?: AssigneeUserCreateNestedManyWithoutUserInput
    permissions?: PermissionCreateNestedManyWithoutUserInput
    history?: TaskHistoryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    upn: string
    info?: NullableJsonNullValueInput | InputJsonValue
    assignees?: AssigneeUserUncheckedCreateNestedManyWithoutUserInput
    permissions?: PermissionUncheckedCreateNestedManyWithoutUserInput
    history?: TaskHistoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    upn?: StringFieldUpdateOperationsInput | string
    info?: NullableJsonNullValueInput | InputJsonValue
    assignees?: AssigneeUserUpdateManyWithoutUserNestedInput
    permissions?: PermissionUpdateManyWithoutUserNestedInput
    history?: TaskHistoryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    upn?: StringFieldUpdateOperationsInput | string
    info?: NullableJsonNullValueInput | InputJsonValue
    assignees?: AssigneeUserUncheckedUpdateManyWithoutUserNestedInput
    permissions?: PermissionUncheckedUpdateManyWithoutUserNestedInput
    history?: TaskHistoryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    upn: string
    info?: NullableJsonNullValueInput | InputJsonValue
  }

  export type UserUpdateManyMutationInput = {
    upn?: StringFieldUpdateOperationsInput | string
    info?: NullableJsonNullValueInput | InputJsonValue
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    upn?: StringFieldUpdateOperationsInput | string
    info?: NullableJsonNullValueInput | InputJsonValue
  }

  export type WorkspaceCreateInput = {
    title: string
    urlName: string
    icon?: string | null
    assigneeStatusEditable?: boolean
    createdAt?: Date | string
    createdBy: number
    updatedAt?: Date | string
    updatedBy: number
    deletedAt?: Date | string | null
    deletedBy?: number | null
    pikud: PikudCreateNestedOneWithoutWorkspacesInput
    tags?: TagCreateNestedManyWithoutWorkspaceInput
    tasks?: TaskCreateNestedManyWithoutWorkspaceInput
    workspaceStatuses?: WorkspaceStatusCreateNestedManyWithoutWorkspaceInput
    permissions?: PermissionCreateNestedManyWithoutWorkspaceInput
    tasksHistory?: TaskHistoryCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceUncheckedCreateInput = {
    id?: number
    title: string
    urlName: string
    icon?: string | null
    assigneeStatusEditable?: boolean
    createdAt?: Date | string
    createdBy: number
    updatedAt?: Date | string
    updatedBy: number
    deletedAt?: Date | string | null
    deletedBy?: number | null
    pikudId: number
    tags?: TagUncheckedCreateNestedManyWithoutWorkspaceInput
    tasks?: TaskUncheckedCreateNestedManyWithoutWorkspaceInput
    workspaceStatuses?: WorkspaceStatusUncheckedCreateNestedManyWithoutWorkspaceInput
    permissions?: PermissionUncheckedCreateNestedManyWithoutWorkspaceInput
    tasksHistory?: TaskHistoryUncheckedCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    urlName?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    assigneeStatusEditable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    pikud?: PikudUpdateOneRequiredWithoutWorkspacesNestedInput
    tags?: TagUpdateManyWithoutWorkspaceNestedInput
    tasks?: TaskUpdateManyWithoutWorkspaceNestedInput
    workspaceStatuses?: WorkspaceStatusUpdateManyWithoutWorkspaceNestedInput
    permissions?: PermissionUpdateManyWithoutWorkspaceNestedInput
    tasksHistory?: TaskHistoryUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    urlName?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    assigneeStatusEditable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    pikudId?: IntFieldUpdateOperationsInput | number
    tags?: TagUncheckedUpdateManyWithoutWorkspaceNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutWorkspaceNestedInput
    workspaceStatuses?: WorkspaceStatusUncheckedUpdateManyWithoutWorkspaceNestedInput
    permissions?: PermissionUncheckedUpdateManyWithoutWorkspaceNestedInput
    tasksHistory?: TaskHistoryUncheckedUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceCreateManyInput = {
    id?: number
    title: string
    urlName: string
    icon?: string | null
    assigneeStatusEditable?: boolean
    createdAt?: Date | string
    createdBy: number
    updatedAt?: Date | string
    updatedBy: number
    deletedAt?: Date | string | null
    deletedBy?: number | null
    pikudId: number
  }

  export type WorkspaceUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    urlName?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    assigneeStatusEditable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type WorkspaceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    urlName?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    assigneeStatusEditable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    pikudId?: IntFieldUpdateOperationsInput | number
  }

  export type WorkspaceStatusCreateInput = {
    name: string
    color: string
    statusType: string
    workspace: WorkspaceCreateNestedOneWithoutWorkspaceStatusesInput
    assigneeTaskStatuses?: AssigneeTaskStatusCreateNestedManyWithoutStatusInput
  }

  export type WorkspaceStatusUncheckedCreateInput = {
    id?: number
    name: string
    color: string
    statusType: string
    workspaceId: number
    assigneeTaskStatuses?: AssigneeTaskStatusUncheckedCreateNestedManyWithoutStatusInput
  }

  export type WorkspaceStatusUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    statusType?: StringFieldUpdateOperationsInput | string
    workspace?: WorkspaceUpdateOneRequiredWithoutWorkspaceStatusesNestedInput
    assigneeTaskStatuses?: AssigneeTaskStatusUpdateManyWithoutStatusNestedInput
  }

  export type WorkspaceStatusUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    statusType?: StringFieldUpdateOperationsInput | string
    workspaceId?: IntFieldUpdateOperationsInput | number
    assigneeTaskStatuses?: AssigneeTaskStatusUncheckedUpdateManyWithoutStatusNestedInput
  }

  export type WorkspaceStatusCreateManyInput = {
    id?: number
    name: string
    color: string
    statusType: string
    workspaceId: number
  }

  export type WorkspaceStatusUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    statusType?: StringFieldUpdateOperationsInput | string
  }

  export type WorkspaceStatusUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    statusType?: StringFieldUpdateOperationsInput | string
    workspaceId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type AssigneeUserListRelationFilter = {
    every?: AssigneeUserWhereInput
    some?: AssigneeUserWhereInput
    none?: AssigneeUserWhereInput
  }

  export type AssigneeTaskStatusListRelationFilter = {
    every?: AssigneeTaskStatusWhereInput
    some?: AssigneeTaskStatusWhereInput
    none?: AssigneeTaskStatusWhereInput
  }

  export type MessageListRelationFilter = {
    every?: MessageWhereInput
    some?: MessageWhereInput
    none?: MessageWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AssigneeUserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AssigneeTaskStatusOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AssigneeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
  }

  export type AssigneeAvgOrderByAggregateInput = {
    id?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    deletedBy?: SortOrder
  }

  export type AssigneeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
  }

  export type AssigneeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
  }

  export type AssigneeSumOrderByAggregateInput = {
    id?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    deletedBy?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type TaskScalarRelationFilter = {
    is?: TaskWhereInput
    isNot?: TaskWhereInput
  }

  export type AssigneeScalarRelationFilter = {
    is?: AssigneeWhereInput
    isNot?: AssigneeWhereInput
  }

  export type WorkspaceStatusScalarRelationFilter = {
    is?: WorkspaceStatusWhereInput
    isNot?: WorkspaceStatusWhereInput
  }

  export type AssigneeTaskStatusTaskIdAssigneeIdCompoundUniqueInput = {
    taskId: number
    assigneeId: number
  }

  export type AssigneeTaskStatusCountOrderByAggregateInput = {
    taskId?: SortOrder
    assigneeId?: SortOrder
    statusId?: SortOrder
  }

  export type AssigneeTaskStatusAvgOrderByAggregateInput = {
    taskId?: SortOrder
    assigneeId?: SortOrder
    statusId?: SortOrder
  }

  export type AssigneeTaskStatusMaxOrderByAggregateInput = {
    taskId?: SortOrder
    assigneeId?: SortOrder
    statusId?: SortOrder
  }

  export type AssigneeTaskStatusMinOrderByAggregateInput = {
    taskId?: SortOrder
    assigneeId?: SortOrder
    statusId?: SortOrder
  }

  export type AssigneeTaskStatusSumOrderByAggregateInput = {
    taskId?: SortOrder
    assigneeId?: SortOrder
    statusId?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AssigneeUserAssigneeIdUserIdCompoundUniqueInput = {
    assigneeId: number
    userId: number
  }

  export type AssigneeUserCountOrderByAggregateInput = {
    assigneeId?: SortOrder
    userId?: SortOrder
  }

  export type AssigneeUserAvgOrderByAggregateInput = {
    assigneeId?: SortOrder
    userId?: SortOrder
  }

  export type AssigneeUserMaxOrderByAggregateInput = {
    assigneeId?: SortOrder
    userId?: SortOrder
  }

  export type AssigneeUserMinOrderByAggregateInput = {
    assigneeId?: SortOrder
    userId?: SortOrder
  }

  export type AssigneeUserSumOrderByAggregateInput = {
    assigneeId?: SortOrder
    userId?: SortOrder
  }

  export type MessageCountOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    assigneeId?: SortOrder
    taskId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
  }

  export type MessageAvgOrderByAggregateInput = {
    id?: SortOrder
    assigneeId?: SortOrder
    taskId?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    deletedBy?: SortOrder
  }

  export type MessageMaxOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    assigneeId?: SortOrder
    taskId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
  }

  export type MessageMinOrderByAggregateInput = {
    id?: SortOrder
    content?: SortOrder
    assigneeId?: SortOrder
    taskId?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
  }

  export type MessageSumOrderByAggregateInput = {
    id?: SortOrder
    assigneeId?: SortOrder
    taskId?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    deletedBy?: SortOrder
  }

  export type EnumPermissionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PermissionType | EnumPermissionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PermissionType[] | ListEnumPermissionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PermissionType[] | ListEnumPermissionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPermissionTypeFilter<$PrismaModel> | $Enums.PermissionType
  }

  export type WorkspaceScalarRelationFilter = {
    is?: WorkspaceWhereInput
    isNot?: WorkspaceWhereInput
  }

  export type PermissionUserIdWorkspaceIdCompoundUniqueInput = {
    userId: number
    workspaceId: number
  }

  export type PermissionCountOrderByAggregateInput = {
    userId?: SortOrder
    workspaceId?: SortOrder
    type?: SortOrder
  }

  export type PermissionAvgOrderByAggregateInput = {
    userId?: SortOrder
    workspaceId?: SortOrder
  }

  export type PermissionMaxOrderByAggregateInput = {
    userId?: SortOrder
    workspaceId?: SortOrder
    type?: SortOrder
  }

  export type PermissionMinOrderByAggregateInput = {
    userId?: SortOrder
    workspaceId?: SortOrder
    type?: SortOrder
  }

  export type PermissionSumOrderByAggregateInput = {
    userId?: SortOrder
    workspaceId?: SortOrder
  }

  export type EnumPermissionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PermissionType | EnumPermissionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PermissionType[] | ListEnumPermissionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PermissionType[] | ListEnumPermissionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPermissionTypeWithAggregatesFilter<$PrismaModel> | $Enums.PermissionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPermissionTypeFilter<$PrismaModel>
    _max?: NestedEnumPermissionTypeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type WorkspaceListRelationFilter = {
    every?: WorkspaceWhereInput
    some?: WorkspaceWhereInput
    none?: WorkspaceWhereInput
  }

  export type WorkspaceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PikudCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    icon?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
  }

  export type PikudAvgOrderByAggregateInput = {
    id?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    deletedBy?: SortOrder
  }

  export type PikudMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    icon?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
  }

  export type PikudMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    icon?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
  }

  export type PikudSumOrderByAggregateInput = {
    id?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    deletedBy?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type TaskListRelationFilter = {
    every?: TaskWhereInput
    some?: TaskWhereInput
    none?: TaskWhereInput
  }

  export type TaskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SourceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
  }

  export type SourceAvgOrderByAggregateInput = {
    id?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    deletedBy?: SortOrder
  }

  export type SourceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
  }

  export type SourceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
  }

  export type SourceSumOrderByAggregateInput = {
    id?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    deletedBy?: SortOrder
  }

  export type TagCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    workspaceId?: SortOrder
  }

  export type TagAvgOrderByAggregateInput = {
    id?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    workspaceId?: SortOrder
  }

  export type TagMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    workspaceId?: SortOrder
  }

  export type TagMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    workspaceId?: SortOrder
  }

  export type TagSumOrderByAggregateInput = {
    id?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    workspaceId?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type SourceScalarRelationFilter = {
    is?: SourceWhereInput
    isNot?: SourceWhereInput
  }

  export type TagListRelationFilter = {
    every?: TagWhereInput
    some?: TagWhereInput
    none?: TagWhereInput
  }

  export type TaskHistoryListRelationFilter = {
    every?: TaskHistoryWhereInput
    some?: TaskHistoryWhereInput
    none?: TaskHistoryWhereInput
  }

  export type TagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TaskHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TaskCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    flagged?: SortOrder
    deadlineType?: SortOrder
    issuedAt?: SortOrder
    dueDate?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
    workspaceId?: SortOrder
    sourceId?: SortOrder
  }

  export type TaskAvgOrderByAggregateInput = {
    id?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    deletedBy?: SortOrder
    workspaceId?: SortOrder
    sourceId?: SortOrder
  }

  export type TaskMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    flagged?: SortOrder
    deadlineType?: SortOrder
    issuedAt?: SortOrder
    dueDate?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
    workspaceId?: SortOrder
    sourceId?: SortOrder
  }

  export type TaskMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    flagged?: SortOrder
    deadlineType?: SortOrder
    issuedAt?: SortOrder
    dueDate?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
    workspaceId?: SortOrder
    sourceId?: SortOrder
  }

  export type TaskSumOrderByAggregateInput = {
    id?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    deletedBy?: SortOrder
    workspaceId?: SortOrder
    sourceId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type EnumHistoryActionFilter<$PrismaModel = never> = {
    equals?: $Enums.HistoryAction | EnumHistoryActionFieldRefInput<$PrismaModel>
    in?: $Enums.HistoryAction[] | ListEnumHistoryActionFieldRefInput<$PrismaModel>
    notIn?: $Enums.HistoryAction[] | ListEnumHistoryActionFieldRefInput<$PrismaModel>
    not?: NestedEnumHistoryActionFilter<$PrismaModel> | $Enums.HistoryAction
  }

  export type TaskHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    field?: SortOrder
    value?: SortOrder
    timestamp?: SortOrder
    taskId?: SortOrder
    workspaceId?: SortOrder
    userId?: SortOrder
  }

  export type TaskHistoryAvgOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    workspaceId?: SortOrder
    userId?: SortOrder
  }

  export type TaskHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    field?: SortOrder
    value?: SortOrder
    timestamp?: SortOrder
    taskId?: SortOrder
    workspaceId?: SortOrder
    userId?: SortOrder
  }

  export type TaskHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    field?: SortOrder
    value?: SortOrder
    timestamp?: SortOrder
    taskId?: SortOrder
    workspaceId?: SortOrder
    userId?: SortOrder
  }

  export type TaskHistorySumOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    workspaceId?: SortOrder
    userId?: SortOrder
  }

  export type EnumHistoryActionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.HistoryAction | EnumHistoryActionFieldRefInput<$PrismaModel>
    in?: $Enums.HistoryAction[] | ListEnumHistoryActionFieldRefInput<$PrismaModel>
    notIn?: $Enums.HistoryAction[] | ListEnumHistoryActionFieldRefInput<$PrismaModel>
    not?: NestedEnumHistoryActionWithAggregatesFilter<$PrismaModel> | $Enums.HistoryAction
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumHistoryActionFilter<$PrismaModel>
    _max?: NestedEnumHistoryActionFilter<$PrismaModel>
  }

  export type PermissionListRelationFilter = {
    every?: PermissionWhereInput
    some?: PermissionWhereInput
    none?: PermissionWhereInput
  }

  export type PermissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    upn?: SortOrder
    info?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    upn?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    upn?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PikudScalarRelationFilter = {
    is?: PikudWhereInput
    isNot?: PikudWhereInput
  }

  export type WorkspaceStatusListRelationFilter = {
    every?: WorkspaceStatusWhereInput
    some?: WorkspaceStatusWhereInput
    none?: WorkspaceStatusWhereInput
  }

  export type WorkspaceStatusOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkspaceCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    urlName?: SortOrder
    icon?: SortOrder
    assigneeStatusEditable?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
    pikudId?: SortOrder
  }

  export type WorkspaceAvgOrderByAggregateInput = {
    id?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    deletedBy?: SortOrder
    pikudId?: SortOrder
  }

  export type WorkspaceMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    urlName?: SortOrder
    icon?: SortOrder
    assigneeStatusEditable?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
    pikudId?: SortOrder
  }

  export type WorkspaceMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    urlName?: SortOrder
    icon?: SortOrder
    assigneeStatusEditable?: SortOrder
    createdAt?: SortOrder
    createdBy?: SortOrder
    updatedAt?: SortOrder
    updatedBy?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
    pikudId?: SortOrder
  }

  export type WorkspaceSumOrderByAggregateInput = {
    id?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    deletedBy?: SortOrder
    pikudId?: SortOrder
  }

  export type WorkspaceStatusCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrder
    statusType?: SortOrder
    workspaceId?: SortOrder
  }

  export type WorkspaceStatusAvgOrderByAggregateInput = {
    id?: SortOrder
    workspaceId?: SortOrder
  }

  export type WorkspaceStatusMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrder
    statusType?: SortOrder
    workspaceId?: SortOrder
  }

  export type WorkspaceStatusMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    color?: SortOrder
    statusType?: SortOrder
    workspaceId?: SortOrder
  }

  export type WorkspaceStatusSumOrderByAggregateInput = {
    id?: SortOrder
    workspaceId?: SortOrder
  }

  export type AssigneeUserCreateNestedManyWithoutAssigneeInput = {
    create?: XOR<AssigneeUserCreateWithoutAssigneeInput, AssigneeUserUncheckedCreateWithoutAssigneeInput> | AssigneeUserCreateWithoutAssigneeInput[] | AssigneeUserUncheckedCreateWithoutAssigneeInput[]
    connectOrCreate?: AssigneeUserCreateOrConnectWithoutAssigneeInput | AssigneeUserCreateOrConnectWithoutAssigneeInput[]
    createMany?: AssigneeUserCreateManyAssigneeInputEnvelope
    connect?: AssigneeUserWhereUniqueInput | AssigneeUserWhereUniqueInput[]
  }

  export type AssigneeTaskStatusCreateNestedManyWithoutAssigneeInput = {
    create?: XOR<AssigneeTaskStatusCreateWithoutAssigneeInput, AssigneeTaskStatusUncheckedCreateWithoutAssigneeInput> | AssigneeTaskStatusCreateWithoutAssigneeInput[] | AssigneeTaskStatusUncheckedCreateWithoutAssigneeInput[]
    connectOrCreate?: AssigneeTaskStatusCreateOrConnectWithoutAssigneeInput | AssigneeTaskStatusCreateOrConnectWithoutAssigneeInput[]
    createMany?: AssigneeTaskStatusCreateManyAssigneeInputEnvelope
    connect?: AssigneeTaskStatusWhereUniqueInput | AssigneeTaskStatusWhereUniqueInput[]
  }

  export type MessageCreateNestedManyWithoutAssigneeInput = {
    create?: XOR<MessageCreateWithoutAssigneeInput, MessageUncheckedCreateWithoutAssigneeInput> | MessageCreateWithoutAssigneeInput[] | MessageUncheckedCreateWithoutAssigneeInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutAssigneeInput | MessageCreateOrConnectWithoutAssigneeInput[]
    createMany?: MessageCreateManyAssigneeInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type AssigneeUserUncheckedCreateNestedManyWithoutAssigneeInput = {
    create?: XOR<AssigneeUserCreateWithoutAssigneeInput, AssigneeUserUncheckedCreateWithoutAssigneeInput> | AssigneeUserCreateWithoutAssigneeInput[] | AssigneeUserUncheckedCreateWithoutAssigneeInput[]
    connectOrCreate?: AssigneeUserCreateOrConnectWithoutAssigneeInput | AssigneeUserCreateOrConnectWithoutAssigneeInput[]
    createMany?: AssigneeUserCreateManyAssigneeInputEnvelope
    connect?: AssigneeUserWhereUniqueInput | AssigneeUserWhereUniqueInput[]
  }

  export type AssigneeTaskStatusUncheckedCreateNestedManyWithoutAssigneeInput = {
    create?: XOR<AssigneeTaskStatusCreateWithoutAssigneeInput, AssigneeTaskStatusUncheckedCreateWithoutAssigneeInput> | AssigneeTaskStatusCreateWithoutAssigneeInput[] | AssigneeTaskStatusUncheckedCreateWithoutAssigneeInput[]
    connectOrCreate?: AssigneeTaskStatusCreateOrConnectWithoutAssigneeInput | AssigneeTaskStatusCreateOrConnectWithoutAssigneeInput[]
    createMany?: AssigneeTaskStatusCreateManyAssigneeInputEnvelope
    connect?: AssigneeTaskStatusWhereUniqueInput | AssigneeTaskStatusWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutAssigneeInput = {
    create?: XOR<MessageCreateWithoutAssigneeInput, MessageUncheckedCreateWithoutAssigneeInput> | MessageCreateWithoutAssigneeInput[] | MessageUncheckedCreateWithoutAssigneeInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutAssigneeInput | MessageCreateOrConnectWithoutAssigneeInput[]
    createMany?: MessageCreateManyAssigneeInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AssigneeUserUpdateManyWithoutAssigneeNestedInput = {
    create?: XOR<AssigneeUserCreateWithoutAssigneeInput, AssigneeUserUncheckedCreateWithoutAssigneeInput> | AssigneeUserCreateWithoutAssigneeInput[] | AssigneeUserUncheckedCreateWithoutAssigneeInput[]
    connectOrCreate?: AssigneeUserCreateOrConnectWithoutAssigneeInput | AssigneeUserCreateOrConnectWithoutAssigneeInput[]
    upsert?: AssigneeUserUpsertWithWhereUniqueWithoutAssigneeInput | AssigneeUserUpsertWithWhereUniqueWithoutAssigneeInput[]
    createMany?: AssigneeUserCreateManyAssigneeInputEnvelope
    set?: AssigneeUserWhereUniqueInput | AssigneeUserWhereUniqueInput[]
    disconnect?: AssigneeUserWhereUniqueInput | AssigneeUserWhereUniqueInput[]
    delete?: AssigneeUserWhereUniqueInput | AssigneeUserWhereUniqueInput[]
    connect?: AssigneeUserWhereUniqueInput | AssigneeUserWhereUniqueInput[]
    update?: AssigneeUserUpdateWithWhereUniqueWithoutAssigneeInput | AssigneeUserUpdateWithWhereUniqueWithoutAssigneeInput[]
    updateMany?: AssigneeUserUpdateManyWithWhereWithoutAssigneeInput | AssigneeUserUpdateManyWithWhereWithoutAssigneeInput[]
    deleteMany?: AssigneeUserScalarWhereInput | AssigneeUserScalarWhereInput[]
  }

  export type AssigneeTaskStatusUpdateManyWithoutAssigneeNestedInput = {
    create?: XOR<AssigneeTaskStatusCreateWithoutAssigneeInput, AssigneeTaskStatusUncheckedCreateWithoutAssigneeInput> | AssigneeTaskStatusCreateWithoutAssigneeInput[] | AssigneeTaskStatusUncheckedCreateWithoutAssigneeInput[]
    connectOrCreate?: AssigneeTaskStatusCreateOrConnectWithoutAssigneeInput | AssigneeTaskStatusCreateOrConnectWithoutAssigneeInput[]
    upsert?: AssigneeTaskStatusUpsertWithWhereUniqueWithoutAssigneeInput | AssigneeTaskStatusUpsertWithWhereUniqueWithoutAssigneeInput[]
    createMany?: AssigneeTaskStatusCreateManyAssigneeInputEnvelope
    set?: AssigneeTaskStatusWhereUniqueInput | AssigneeTaskStatusWhereUniqueInput[]
    disconnect?: AssigneeTaskStatusWhereUniqueInput | AssigneeTaskStatusWhereUniqueInput[]
    delete?: AssigneeTaskStatusWhereUniqueInput | AssigneeTaskStatusWhereUniqueInput[]
    connect?: AssigneeTaskStatusWhereUniqueInput | AssigneeTaskStatusWhereUniqueInput[]
    update?: AssigneeTaskStatusUpdateWithWhereUniqueWithoutAssigneeInput | AssigneeTaskStatusUpdateWithWhereUniqueWithoutAssigneeInput[]
    updateMany?: AssigneeTaskStatusUpdateManyWithWhereWithoutAssigneeInput | AssigneeTaskStatusUpdateManyWithWhereWithoutAssigneeInput[]
    deleteMany?: AssigneeTaskStatusScalarWhereInput | AssigneeTaskStatusScalarWhereInput[]
  }

  export type MessageUpdateManyWithoutAssigneeNestedInput = {
    create?: XOR<MessageCreateWithoutAssigneeInput, MessageUncheckedCreateWithoutAssigneeInput> | MessageCreateWithoutAssigneeInput[] | MessageUncheckedCreateWithoutAssigneeInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutAssigneeInput | MessageCreateOrConnectWithoutAssigneeInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutAssigneeInput | MessageUpsertWithWhereUniqueWithoutAssigneeInput[]
    createMany?: MessageCreateManyAssigneeInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutAssigneeInput | MessageUpdateWithWhereUniqueWithoutAssigneeInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutAssigneeInput | MessageUpdateManyWithWhereWithoutAssigneeInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type AssigneeUserUncheckedUpdateManyWithoutAssigneeNestedInput = {
    create?: XOR<AssigneeUserCreateWithoutAssigneeInput, AssigneeUserUncheckedCreateWithoutAssigneeInput> | AssigneeUserCreateWithoutAssigneeInput[] | AssigneeUserUncheckedCreateWithoutAssigneeInput[]
    connectOrCreate?: AssigneeUserCreateOrConnectWithoutAssigneeInput | AssigneeUserCreateOrConnectWithoutAssigneeInput[]
    upsert?: AssigneeUserUpsertWithWhereUniqueWithoutAssigneeInput | AssigneeUserUpsertWithWhereUniqueWithoutAssigneeInput[]
    createMany?: AssigneeUserCreateManyAssigneeInputEnvelope
    set?: AssigneeUserWhereUniqueInput | AssigneeUserWhereUniqueInput[]
    disconnect?: AssigneeUserWhereUniqueInput | AssigneeUserWhereUniqueInput[]
    delete?: AssigneeUserWhereUniqueInput | AssigneeUserWhereUniqueInput[]
    connect?: AssigneeUserWhereUniqueInput | AssigneeUserWhereUniqueInput[]
    update?: AssigneeUserUpdateWithWhereUniqueWithoutAssigneeInput | AssigneeUserUpdateWithWhereUniqueWithoutAssigneeInput[]
    updateMany?: AssigneeUserUpdateManyWithWhereWithoutAssigneeInput | AssigneeUserUpdateManyWithWhereWithoutAssigneeInput[]
    deleteMany?: AssigneeUserScalarWhereInput | AssigneeUserScalarWhereInput[]
  }

  export type AssigneeTaskStatusUncheckedUpdateManyWithoutAssigneeNestedInput = {
    create?: XOR<AssigneeTaskStatusCreateWithoutAssigneeInput, AssigneeTaskStatusUncheckedCreateWithoutAssigneeInput> | AssigneeTaskStatusCreateWithoutAssigneeInput[] | AssigneeTaskStatusUncheckedCreateWithoutAssigneeInput[]
    connectOrCreate?: AssigneeTaskStatusCreateOrConnectWithoutAssigneeInput | AssigneeTaskStatusCreateOrConnectWithoutAssigneeInput[]
    upsert?: AssigneeTaskStatusUpsertWithWhereUniqueWithoutAssigneeInput | AssigneeTaskStatusUpsertWithWhereUniqueWithoutAssigneeInput[]
    createMany?: AssigneeTaskStatusCreateManyAssigneeInputEnvelope
    set?: AssigneeTaskStatusWhereUniqueInput | AssigneeTaskStatusWhereUniqueInput[]
    disconnect?: AssigneeTaskStatusWhereUniqueInput | AssigneeTaskStatusWhereUniqueInput[]
    delete?: AssigneeTaskStatusWhereUniqueInput | AssigneeTaskStatusWhereUniqueInput[]
    connect?: AssigneeTaskStatusWhereUniqueInput | AssigneeTaskStatusWhereUniqueInput[]
    update?: AssigneeTaskStatusUpdateWithWhereUniqueWithoutAssigneeInput | AssigneeTaskStatusUpdateWithWhereUniqueWithoutAssigneeInput[]
    updateMany?: AssigneeTaskStatusUpdateManyWithWhereWithoutAssigneeInput | AssigneeTaskStatusUpdateManyWithWhereWithoutAssigneeInput[]
    deleteMany?: AssigneeTaskStatusScalarWhereInput | AssigneeTaskStatusScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutAssigneeNestedInput = {
    create?: XOR<MessageCreateWithoutAssigneeInput, MessageUncheckedCreateWithoutAssigneeInput> | MessageCreateWithoutAssigneeInput[] | MessageUncheckedCreateWithoutAssigneeInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutAssigneeInput | MessageCreateOrConnectWithoutAssigneeInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutAssigneeInput | MessageUpsertWithWhereUniqueWithoutAssigneeInput[]
    createMany?: MessageCreateManyAssigneeInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutAssigneeInput | MessageUpdateWithWhereUniqueWithoutAssigneeInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutAssigneeInput | MessageUpdateManyWithWhereWithoutAssigneeInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type TaskCreateNestedOneWithoutAssigneeStatusesInput = {
    create?: XOR<TaskCreateWithoutAssigneeStatusesInput, TaskUncheckedCreateWithoutAssigneeStatusesInput>
    connectOrCreate?: TaskCreateOrConnectWithoutAssigneeStatusesInput
    connect?: TaskWhereUniqueInput
  }

  export type AssigneeCreateNestedOneWithoutTaskStatusesInput = {
    create?: XOR<AssigneeCreateWithoutTaskStatusesInput, AssigneeUncheckedCreateWithoutTaskStatusesInput>
    connectOrCreate?: AssigneeCreateOrConnectWithoutTaskStatusesInput
    connect?: AssigneeWhereUniqueInput
  }

  export type WorkspaceStatusCreateNestedOneWithoutAssigneeTaskStatusesInput = {
    create?: XOR<WorkspaceStatusCreateWithoutAssigneeTaskStatusesInput, WorkspaceStatusUncheckedCreateWithoutAssigneeTaskStatusesInput>
    connectOrCreate?: WorkspaceStatusCreateOrConnectWithoutAssigneeTaskStatusesInput
    connect?: WorkspaceStatusWhereUniqueInput
  }

  export type TaskUpdateOneRequiredWithoutAssigneeStatusesNestedInput = {
    create?: XOR<TaskCreateWithoutAssigneeStatusesInput, TaskUncheckedCreateWithoutAssigneeStatusesInput>
    connectOrCreate?: TaskCreateOrConnectWithoutAssigneeStatusesInput
    upsert?: TaskUpsertWithoutAssigneeStatusesInput
    connect?: TaskWhereUniqueInput
    update?: XOR<XOR<TaskUpdateToOneWithWhereWithoutAssigneeStatusesInput, TaskUpdateWithoutAssigneeStatusesInput>, TaskUncheckedUpdateWithoutAssigneeStatusesInput>
  }

  export type AssigneeUpdateOneRequiredWithoutTaskStatusesNestedInput = {
    create?: XOR<AssigneeCreateWithoutTaskStatusesInput, AssigneeUncheckedCreateWithoutTaskStatusesInput>
    connectOrCreate?: AssigneeCreateOrConnectWithoutTaskStatusesInput
    upsert?: AssigneeUpsertWithoutTaskStatusesInput
    connect?: AssigneeWhereUniqueInput
    update?: XOR<XOR<AssigneeUpdateToOneWithWhereWithoutTaskStatusesInput, AssigneeUpdateWithoutTaskStatusesInput>, AssigneeUncheckedUpdateWithoutTaskStatusesInput>
  }

  export type WorkspaceStatusUpdateOneRequiredWithoutAssigneeTaskStatusesNestedInput = {
    create?: XOR<WorkspaceStatusCreateWithoutAssigneeTaskStatusesInput, WorkspaceStatusUncheckedCreateWithoutAssigneeTaskStatusesInput>
    connectOrCreate?: WorkspaceStatusCreateOrConnectWithoutAssigneeTaskStatusesInput
    upsert?: WorkspaceStatusUpsertWithoutAssigneeTaskStatusesInput
    connect?: WorkspaceStatusWhereUniqueInput
    update?: XOR<XOR<WorkspaceStatusUpdateToOneWithWhereWithoutAssigneeTaskStatusesInput, WorkspaceStatusUpdateWithoutAssigneeTaskStatusesInput>, WorkspaceStatusUncheckedUpdateWithoutAssigneeTaskStatusesInput>
  }

  export type AssigneeCreateNestedOneWithoutUsersInput = {
    create?: XOR<AssigneeCreateWithoutUsersInput, AssigneeUncheckedCreateWithoutUsersInput>
    connectOrCreate?: AssigneeCreateOrConnectWithoutUsersInput
    connect?: AssigneeWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAssigneesInput = {
    create?: XOR<UserCreateWithoutAssigneesInput, UserUncheckedCreateWithoutAssigneesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssigneesInput
    connect?: UserWhereUniqueInput
  }

  export type AssigneeUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<AssigneeCreateWithoutUsersInput, AssigneeUncheckedCreateWithoutUsersInput>
    connectOrCreate?: AssigneeCreateOrConnectWithoutUsersInput
    upsert?: AssigneeUpsertWithoutUsersInput
    connect?: AssigneeWhereUniqueInput
    update?: XOR<XOR<AssigneeUpdateToOneWithWhereWithoutUsersInput, AssigneeUpdateWithoutUsersInput>, AssigneeUncheckedUpdateWithoutUsersInput>
  }

  export type UserUpdateOneRequiredWithoutAssigneesNestedInput = {
    create?: XOR<UserCreateWithoutAssigneesInput, UserUncheckedCreateWithoutAssigneesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssigneesInput
    upsert?: UserUpsertWithoutAssigneesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAssigneesInput, UserUpdateWithoutAssigneesInput>, UserUncheckedUpdateWithoutAssigneesInput>
  }

  export type AssigneeCreateNestedOneWithoutMessagesInput = {
    create?: XOR<AssigneeCreateWithoutMessagesInput, AssigneeUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: AssigneeCreateOrConnectWithoutMessagesInput
    connect?: AssigneeWhereUniqueInput
  }

  export type TaskCreateNestedOneWithoutMessagesInput = {
    create?: XOR<TaskCreateWithoutMessagesInput, TaskUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: TaskCreateOrConnectWithoutMessagesInput
    connect?: TaskWhereUniqueInput
  }

  export type AssigneeUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<AssigneeCreateWithoutMessagesInput, AssigneeUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: AssigneeCreateOrConnectWithoutMessagesInput
    upsert?: AssigneeUpsertWithoutMessagesInput
    connect?: AssigneeWhereUniqueInput
    update?: XOR<XOR<AssigneeUpdateToOneWithWhereWithoutMessagesInput, AssigneeUpdateWithoutMessagesInput>, AssigneeUncheckedUpdateWithoutMessagesInput>
  }

  export type TaskUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<TaskCreateWithoutMessagesInput, TaskUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: TaskCreateOrConnectWithoutMessagesInput
    upsert?: TaskUpsertWithoutMessagesInput
    connect?: TaskWhereUniqueInput
    update?: XOR<XOR<TaskUpdateToOneWithWhereWithoutMessagesInput, TaskUpdateWithoutMessagesInput>, TaskUncheckedUpdateWithoutMessagesInput>
  }

  export type UserCreateNestedOneWithoutPermissionsInput = {
    create?: XOR<UserCreateWithoutPermissionsInput, UserUncheckedCreateWithoutPermissionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPermissionsInput
    connect?: UserWhereUniqueInput
  }

  export type WorkspaceCreateNestedOneWithoutPermissionsInput = {
    create?: XOR<WorkspaceCreateWithoutPermissionsInput, WorkspaceUncheckedCreateWithoutPermissionsInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutPermissionsInput
    connect?: WorkspaceWhereUniqueInput
  }

  export type EnumPermissionTypeFieldUpdateOperationsInput = {
    set?: $Enums.PermissionType
  }

  export type UserUpdateOneRequiredWithoutPermissionsNestedInput = {
    create?: XOR<UserCreateWithoutPermissionsInput, UserUncheckedCreateWithoutPermissionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPermissionsInput
    upsert?: UserUpsertWithoutPermissionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPermissionsInput, UserUpdateWithoutPermissionsInput>, UserUncheckedUpdateWithoutPermissionsInput>
  }

  export type WorkspaceUpdateOneRequiredWithoutPermissionsNestedInput = {
    create?: XOR<WorkspaceCreateWithoutPermissionsInput, WorkspaceUncheckedCreateWithoutPermissionsInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutPermissionsInput
    upsert?: WorkspaceUpsertWithoutPermissionsInput
    connect?: WorkspaceWhereUniqueInput
    update?: XOR<XOR<WorkspaceUpdateToOneWithWhereWithoutPermissionsInput, WorkspaceUpdateWithoutPermissionsInput>, WorkspaceUncheckedUpdateWithoutPermissionsInput>
  }

  export type WorkspaceCreateNestedManyWithoutPikudInput = {
    create?: XOR<WorkspaceCreateWithoutPikudInput, WorkspaceUncheckedCreateWithoutPikudInput> | WorkspaceCreateWithoutPikudInput[] | WorkspaceUncheckedCreateWithoutPikudInput[]
    connectOrCreate?: WorkspaceCreateOrConnectWithoutPikudInput | WorkspaceCreateOrConnectWithoutPikudInput[]
    createMany?: WorkspaceCreateManyPikudInputEnvelope
    connect?: WorkspaceWhereUniqueInput | WorkspaceWhereUniqueInput[]
  }

  export type WorkspaceUncheckedCreateNestedManyWithoutPikudInput = {
    create?: XOR<WorkspaceCreateWithoutPikudInput, WorkspaceUncheckedCreateWithoutPikudInput> | WorkspaceCreateWithoutPikudInput[] | WorkspaceUncheckedCreateWithoutPikudInput[]
    connectOrCreate?: WorkspaceCreateOrConnectWithoutPikudInput | WorkspaceCreateOrConnectWithoutPikudInput[]
    createMany?: WorkspaceCreateManyPikudInputEnvelope
    connect?: WorkspaceWhereUniqueInput | WorkspaceWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type WorkspaceUpdateManyWithoutPikudNestedInput = {
    create?: XOR<WorkspaceCreateWithoutPikudInput, WorkspaceUncheckedCreateWithoutPikudInput> | WorkspaceCreateWithoutPikudInput[] | WorkspaceUncheckedCreateWithoutPikudInput[]
    connectOrCreate?: WorkspaceCreateOrConnectWithoutPikudInput | WorkspaceCreateOrConnectWithoutPikudInput[]
    upsert?: WorkspaceUpsertWithWhereUniqueWithoutPikudInput | WorkspaceUpsertWithWhereUniqueWithoutPikudInput[]
    createMany?: WorkspaceCreateManyPikudInputEnvelope
    set?: WorkspaceWhereUniqueInput | WorkspaceWhereUniqueInput[]
    disconnect?: WorkspaceWhereUniqueInput | WorkspaceWhereUniqueInput[]
    delete?: WorkspaceWhereUniqueInput | WorkspaceWhereUniqueInput[]
    connect?: WorkspaceWhereUniqueInput | WorkspaceWhereUniqueInput[]
    update?: WorkspaceUpdateWithWhereUniqueWithoutPikudInput | WorkspaceUpdateWithWhereUniqueWithoutPikudInput[]
    updateMany?: WorkspaceUpdateManyWithWhereWithoutPikudInput | WorkspaceUpdateManyWithWhereWithoutPikudInput[]
    deleteMany?: WorkspaceScalarWhereInput | WorkspaceScalarWhereInput[]
  }

  export type WorkspaceUncheckedUpdateManyWithoutPikudNestedInput = {
    create?: XOR<WorkspaceCreateWithoutPikudInput, WorkspaceUncheckedCreateWithoutPikudInput> | WorkspaceCreateWithoutPikudInput[] | WorkspaceUncheckedCreateWithoutPikudInput[]
    connectOrCreate?: WorkspaceCreateOrConnectWithoutPikudInput | WorkspaceCreateOrConnectWithoutPikudInput[]
    upsert?: WorkspaceUpsertWithWhereUniqueWithoutPikudInput | WorkspaceUpsertWithWhereUniqueWithoutPikudInput[]
    createMany?: WorkspaceCreateManyPikudInputEnvelope
    set?: WorkspaceWhereUniqueInput | WorkspaceWhereUniqueInput[]
    disconnect?: WorkspaceWhereUniqueInput | WorkspaceWhereUniqueInput[]
    delete?: WorkspaceWhereUniqueInput | WorkspaceWhereUniqueInput[]
    connect?: WorkspaceWhereUniqueInput | WorkspaceWhereUniqueInput[]
    update?: WorkspaceUpdateWithWhereUniqueWithoutPikudInput | WorkspaceUpdateWithWhereUniqueWithoutPikudInput[]
    updateMany?: WorkspaceUpdateManyWithWhereWithoutPikudInput | WorkspaceUpdateManyWithWhereWithoutPikudInput[]
    deleteMany?: WorkspaceScalarWhereInput | WorkspaceScalarWhereInput[]
  }

  export type TaskCreateNestedManyWithoutSourceInput = {
    create?: XOR<TaskCreateWithoutSourceInput, TaskUncheckedCreateWithoutSourceInput> | TaskCreateWithoutSourceInput[] | TaskUncheckedCreateWithoutSourceInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutSourceInput | TaskCreateOrConnectWithoutSourceInput[]
    createMany?: TaskCreateManySourceInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutSourceInput = {
    create?: XOR<TaskCreateWithoutSourceInput, TaskUncheckedCreateWithoutSourceInput> | TaskCreateWithoutSourceInput[] | TaskUncheckedCreateWithoutSourceInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutSourceInput | TaskCreateOrConnectWithoutSourceInput[]
    createMany?: TaskCreateManySourceInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type TaskUpdateManyWithoutSourceNestedInput = {
    create?: XOR<TaskCreateWithoutSourceInput, TaskUncheckedCreateWithoutSourceInput> | TaskCreateWithoutSourceInput[] | TaskUncheckedCreateWithoutSourceInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutSourceInput | TaskCreateOrConnectWithoutSourceInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutSourceInput | TaskUpsertWithWhereUniqueWithoutSourceInput[]
    createMany?: TaskCreateManySourceInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutSourceInput | TaskUpdateWithWhereUniqueWithoutSourceInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutSourceInput | TaskUpdateManyWithWhereWithoutSourceInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutSourceNestedInput = {
    create?: XOR<TaskCreateWithoutSourceInput, TaskUncheckedCreateWithoutSourceInput> | TaskCreateWithoutSourceInput[] | TaskUncheckedCreateWithoutSourceInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutSourceInput | TaskCreateOrConnectWithoutSourceInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutSourceInput | TaskUpsertWithWhereUniqueWithoutSourceInput[]
    createMany?: TaskCreateManySourceInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutSourceInput | TaskUpdateWithWhereUniqueWithoutSourceInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutSourceInput | TaskUpdateManyWithWhereWithoutSourceInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type WorkspaceCreateNestedOneWithoutTagsInput = {
    create?: XOR<WorkspaceCreateWithoutTagsInput, WorkspaceUncheckedCreateWithoutTagsInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutTagsInput
    connect?: WorkspaceWhereUniqueInput
  }

  export type TaskCreateNestedManyWithoutTagsInput = {
    create?: XOR<TaskCreateWithoutTagsInput, TaskUncheckedCreateWithoutTagsInput> | TaskCreateWithoutTagsInput[] | TaskUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutTagsInput | TaskCreateOrConnectWithoutTagsInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutTagsInput = {
    create?: XOR<TaskCreateWithoutTagsInput, TaskUncheckedCreateWithoutTagsInput> | TaskCreateWithoutTagsInput[] | TaskUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutTagsInput | TaskCreateOrConnectWithoutTagsInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type WorkspaceUpdateOneRequiredWithoutTagsNestedInput = {
    create?: XOR<WorkspaceCreateWithoutTagsInput, WorkspaceUncheckedCreateWithoutTagsInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutTagsInput
    upsert?: WorkspaceUpsertWithoutTagsInput
    connect?: WorkspaceWhereUniqueInput
    update?: XOR<XOR<WorkspaceUpdateToOneWithWhereWithoutTagsInput, WorkspaceUpdateWithoutTagsInput>, WorkspaceUncheckedUpdateWithoutTagsInput>
  }

  export type TaskUpdateManyWithoutTagsNestedInput = {
    create?: XOR<TaskCreateWithoutTagsInput, TaskUncheckedCreateWithoutTagsInput> | TaskCreateWithoutTagsInput[] | TaskUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutTagsInput | TaskCreateOrConnectWithoutTagsInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutTagsInput | TaskUpsertWithWhereUniqueWithoutTagsInput[]
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutTagsInput | TaskUpdateWithWhereUniqueWithoutTagsInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutTagsInput | TaskUpdateManyWithWhereWithoutTagsInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutTagsNestedInput = {
    create?: XOR<TaskCreateWithoutTagsInput, TaskUncheckedCreateWithoutTagsInput> | TaskCreateWithoutTagsInput[] | TaskUncheckedCreateWithoutTagsInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutTagsInput | TaskCreateOrConnectWithoutTagsInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutTagsInput | TaskUpsertWithWhereUniqueWithoutTagsInput[]
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutTagsInput | TaskUpdateWithWhereUniqueWithoutTagsInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutTagsInput | TaskUpdateManyWithWhereWithoutTagsInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type WorkspaceCreateNestedOneWithoutTasksInput = {
    create?: XOR<WorkspaceCreateWithoutTasksInput, WorkspaceUncheckedCreateWithoutTasksInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutTasksInput
    connect?: WorkspaceWhereUniqueInput
  }

  export type SourceCreateNestedOneWithoutTasksInput = {
    create?: XOR<SourceCreateWithoutTasksInput, SourceUncheckedCreateWithoutTasksInput>
    connectOrCreate?: SourceCreateOrConnectWithoutTasksInput
    connect?: SourceWhereUniqueInput
  }

  export type TagCreateNestedManyWithoutTasksInput = {
    create?: XOR<TagCreateWithoutTasksInput, TagUncheckedCreateWithoutTasksInput> | TagCreateWithoutTasksInput[] | TagUncheckedCreateWithoutTasksInput[]
    connectOrCreate?: TagCreateOrConnectWithoutTasksInput | TagCreateOrConnectWithoutTasksInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
  }

  export type AssigneeTaskStatusCreateNestedManyWithoutTaskInput = {
    create?: XOR<AssigneeTaskStatusCreateWithoutTaskInput, AssigneeTaskStatusUncheckedCreateWithoutTaskInput> | AssigneeTaskStatusCreateWithoutTaskInput[] | AssigneeTaskStatusUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: AssigneeTaskStatusCreateOrConnectWithoutTaskInput | AssigneeTaskStatusCreateOrConnectWithoutTaskInput[]
    createMany?: AssigneeTaskStatusCreateManyTaskInputEnvelope
    connect?: AssigneeTaskStatusWhereUniqueInput | AssigneeTaskStatusWhereUniqueInput[]
  }

  export type MessageCreateNestedManyWithoutTaskInput = {
    create?: XOR<MessageCreateWithoutTaskInput, MessageUncheckedCreateWithoutTaskInput> | MessageCreateWithoutTaskInput[] | MessageUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutTaskInput | MessageCreateOrConnectWithoutTaskInput[]
    createMany?: MessageCreateManyTaskInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type TaskHistoryCreateNestedManyWithoutTaskInput = {
    create?: XOR<TaskHistoryCreateWithoutTaskInput, TaskHistoryUncheckedCreateWithoutTaskInput> | TaskHistoryCreateWithoutTaskInput[] | TaskHistoryUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskHistoryCreateOrConnectWithoutTaskInput | TaskHistoryCreateOrConnectWithoutTaskInput[]
    createMany?: TaskHistoryCreateManyTaskInputEnvelope
    connect?: TaskHistoryWhereUniqueInput | TaskHistoryWhereUniqueInput[]
  }

  export type TagUncheckedCreateNestedManyWithoutTasksInput = {
    create?: XOR<TagCreateWithoutTasksInput, TagUncheckedCreateWithoutTasksInput> | TagCreateWithoutTasksInput[] | TagUncheckedCreateWithoutTasksInput[]
    connectOrCreate?: TagCreateOrConnectWithoutTasksInput | TagCreateOrConnectWithoutTasksInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
  }

  export type AssigneeTaskStatusUncheckedCreateNestedManyWithoutTaskInput = {
    create?: XOR<AssigneeTaskStatusCreateWithoutTaskInput, AssigneeTaskStatusUncheckedCreateWithoutTaskInput> | AssigneeTaskStatusCreateWithoutTaskInput[] | AssigneeTaskStatusUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: AssigneeTaskStatusCreateOrConnectWithoutTaskInput | AssigneeTaskStatusCreateOrConnectWithoutTaskInput[]
    createMany?: AssigneeTaskStatusCreateManyTaskInputEnvelope
    connect?: AssigneeTaskStatusWhereUniqueInput | AssigneeTaskStatusWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutTaskInput = {
    create?: XOR<MessageCreateWithoutTaskInput, MessageUncheckedCreateWithoutTaskInput> | MessageCreateWithoutTaskInput[] | MessageUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutTaskInput | MessageCreateOrConnectWithoutTaskInput[]
    createMany?: MessageCreateManyTaskInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type TaskHistoryUncheckedCreateNestedManyWithoutTaskInput = {
    create?: XOR<TaskHistoryCreateWithoutTaskInput, TaskHistoryUncheckedCreateWithoutTaskInput> | TaskHistoryCreateWithoutTaskInput[] | TaskHistoryUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskHistoryCreateOrConnectWithoutTaskInput | TaskHistoryCreateOrConnectWithoutTaskInput[]
    createMany?: TaskHistoryCreateManyTaskInputEnvelope
    connect?: TaskHistoryWhereUniqueInput | TaskHistoryWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type WorkspaceUpdateOneRequiredWithoutTasksNestedInput = {
    create?: XOR<WorkspaceCreateWithoutTasksInput, WorkspaceUncheckedCreateWithoutTasksInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutTasksInput
    upsert?: WorkspaceUpsertWithoutTasksInput
    connect?: WorkspaceWhereUniqueInput
    update?: XOR<XOR<WorkspaceUpdateToOneWithWhereWithoutTasksInput, WorkspaceUpdateWithoutTasksInput>, WorkspaceUncheckedUpdateWithoutTasksInput>
  }

  export type SourceUpdateOneRequiredWithoutTasksNestedInput = {
    create?: XOR<SourceCreateWithoutTasksInput, SourceUncheckedCreateWithoutTasksInput>
    connectOrCreate?: SourceCreateOrConnectWithoutTasksInput
    upsert?: SourceUpsertWithoutTasksInput
    connect?: SourceWhereUniqueInput
    update?: XOR<XOR<SourceUpdateToOneWithWhereWithoutTasksInput, SourceUpdateWithoutTasksInput>, SourceUncheckedUpdateWithoutTasksInput>
  }

  export type TagUpdateManyWithoutTasksNestedInput = {
    create?: XOR<TagCreateWithoutTasksInput, TagUncheckedCreateWithoutTasksInput> | TagCreateWithoutTasksInput[] | TagUncheckedCreateWithoutTasksInput[]
    connectOrCreate?: TagCreateOrConnectWithoutTasksInput | TagCreateOrConnectWithoutTasksInput[]
    upsert?: TagUpsertWithWhereUniqueWithoutTasksInput | TagUpsertWithWhereUniqueWithoutTasksInput[]
    set?: TagWhereUniqueInput | TagWhereUniqueInput[]
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    update?: TagUpdateWithWhereUniqueWithoutTasksInput | TagUpdateWithWhereUniqueWithoutTasksInput[]
    updateMany?: TagUpdateManyWithWhereWithoutTasksInput | TagUpdateManyWithWhereWithoutTasksInput[]
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[]
  }

  export type AssigneeTaskStatusUpdateManyWithoutTaskNestedInput = {
    create?: XOR<AssigneeTaskStatusCreateWithoutTaskInput, AssigneeTaskStatusUncheckedCreateWithoutTaskInput> | AssigneeTaskStatusCreateWithoutTaskInput[] | AssigneeTaskStatusUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: AssigneeTaskStatusCreateOrConnectWithoutTaskInput | AssigneeTaskStatusCreateOrConnectWithoutTaskInput[]
    upsert?: AssigneeTaskStatusUpsertWithWhereUniqueWithoutTaskInput | AssigneeTaskStatusUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: AssigneeTaskStatusCreateManyTaskInputEnvelope
    set?: AssigneeTaskStatusWhereUniqueInput | AssigneeTaskStatusWhereUniqueInput[]
    disconnect?: AssigneeTaskStatusWhereUniqueInput | AssigneeTaskStatusWhereUniqueInput[]
    delete?: AssigneeTaskStatusWhereUniqueInput | AssigneeTaskStatusWhereUniqueInput[]
    connect?: AssigneeTaskStatusWhereUniqueInput | AssigneeTaskStatusWhereUniqueInput[]
    update?: AssigneeTaskStatusUpdateWithWhereUniqueWithoutTaskInput | AssigneeTaskStatusUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: AssigneeTaskStatusUpdateManyWithWhereWithoutTaskInput | AssigneeTaskStatusUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: AssigneeTaskStatusScalarWhereInput | AssigneeTaskStatusScalarWhereInput[]
  }

  export type MessageUpdateManyWithoutTaskNestedInput = {
    create?: XOR<MessageCreateWithoutTaskInput, MessageUncheckedCreateWithoutTaskInput> | MessageCreateWithoutTaskInput[] | MessageUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutTaskInput | MessageCreateOrConnectWithoutTaskInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutTaskInput | MessageUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: MessageCreateManyTaskInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutTaskInput | MessageUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutTaskInput | MessageUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type TaskHistoryUpdateManyWithoutTaskNestedInput = {
    create?: XOR<TaskHistoryCreateWithoutTaskInput, TaskHistoryUncheckedCreateWithoutTaskInput> | TaskHistoryCreateWithoutTaskInput[] | TaskHistoryUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskHistoryCreateOrConnectWithoutTaskInput | TaskHistoryCreateOrConnectWithoutTaskInput[]
    upsert?: TaskHistoryUpsertWithWhereUniqueWithoutTaskInput | TaskHistoryUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: TaskHistoryCreateManyTaskInputEnvelope
    set?: TaskHistoryWhereUniqueInput | TaskHistoryWhereUniqueInput[]
    disconnect?: TaskHistoryWhereUniqueInput | TaskHistoryWhereUniqueInput[]
    delete?: TaskHistoryWhereUniqueInput | TaskHistoryWhereUniqueInput[]
    connect?: TaskHistoryWhereUniqueInput | TaskHistoryWhereUniqueInput[]
    update?: TaskHistoryUpdateWithWhereUniqueWithoutTaskInput | TaskHistoryUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: TaskHistoryUpdateManyWithWhereWithoutTaskInput | TaskHistoryUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: TaskHistoryScalarWhereInput | TaskHistoryScalarWhereInput[]
  }

  export type TagUncheckedUpdateManyWithoutTasksNestedInput = {
    create?: XOR<TagCreateWithoutTasksInput, TagUncheckedCreateWithoutTasksInput> | TagCreateWithoutTasksInput[] | TagUncheckedCreateWithoutTasksInput[]
    connectOrCreate?: TagCreateOrConnectWithoutTasksInput | TagCreateOrConnectWithoutTasksInput[]
    upsert?: TagUpsertWithWhereUniqueWithoutTasksInput | TagUpsertWithWhereUniqueWithoutTasksInput[]
    set?: TagWhereUniqueInput | TagWhereUniqueInput[]
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    update?: TagUpdateWithWhereUniqueWithoutTasksInput | TagUpdateWithWhereUniqueWithoutTasksInput[]
    updateMany?: TagUpdateManyWithWhereWithoutTasksInput | TagUpdateManyWithWhereWithoutTasksInput[]
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[]
  }

  export type AssigneeTaskStatusUncheckedUpdateManyWithoutTaskNestedInput = {
    create?: XOR<AssigneeTaskStatusCreateWithoutTaskInput, AssigneeTaskStatusUncheckedCreateWithoutTaskInput> | AssigneeTaskStatusCreateWithoutTaskInput[] | AssigneeTaskStatusUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: AssigneeTaskStatusCreateOrConnectWithoutTaskInput | AssigneeTaskStatusCreateOrConnectWithoutTaskInput[]
    upsert?: AssigneeTaskStatusUpsertWithWhereUniqueWithoutTaskInput | AssigneeTaskStatusUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: AssigneeTaskStatusCreateManyTaskInputEnvelope
    set?: AssigneeTaskStatusWhereUniqueInput | AssigneeTaskStatusWhereUniqueInput[]
    disconnect?: AssigneeTaskStatusWhereUniqueInput | AssigneeTaskStatusWhereUniqueInput[]
    delete?: AssigneeTaskStatusWhereUniqueInput | AssigneeTaskStatusWhereUniqueInput[]
    connect?: AssigneeTaskStatusWhereUniqueInput | AssigneeTaskStatusWhereUniqueInput[]
    update?: AssigneeTaskStatusUpdateWithWhereUniqueWithoutTaskInput | AssigneeTaskStatusUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: AssigneeTaskStatusUpdateManyWithWhereWithoutTaskInput | AssigneeTaskStatusUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: AssigneeTaskStatusScalarWhereInput | AssigneeTaskStatusScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutTaskNestedInput = {
    create?: XOR<MessageCreateWithoutTaskInput, MessageUncheckedCreateWithoutTaskInput> | MessageCreateWithoutTaskInput[] | MessageUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutTaskInput | MessageCreateOrConnectWithoutTaskInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutTaskInput | MessageUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: MessageCreateManyTaskInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutTaskInput | MessageUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutTaskInput | MessageUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type TaskHistoryUncheckedUpdateManyWithoutTaskNestedInput = {
    create?: XOR<TaskHistoryCreateWithoutTaskInput, TaskHistoryUncheckedCreateWithoutTaskInput> | TaskHistoryCreateWithoutTaskInput[] | TaskHistoryUncheckedCreateWithoutTaskInput[]
    connectOrCreate?: TaskHistoryCreateOrConnectWithoutTaskInput | TaskHistoryCreateOrConnectWithoutTaskInput[]
    upsert?: TaskHistoryUpsertWithWhereUniqueWithoutTaskInput | TaskHistoryUpsertWithWhereUniqueWithoutTaskInput[]
    createMany?: TaskHistoryCreateManyTaskInputEnvelope
    set?: TaskHistoryWhereUniqueInput | TaskHistoryWhereUniqueInput[]
    disconnect?: TaskHistoryWhereUniqueInput | TaskHistoryWhereUniqueInput[]
    delete?: TaskHistoryWhereUniqueInput | TaskHistoryWhereUniqueInput[]
    connect?: TaskHistoryWhereUniqueInput | TaskHistoryWhereUniqueInput[]
    update?: TaskHistoryUpdateWithWhereUniqueWithoutTaskInput | TaskHistoryUpdateWithWhereUniqueWithoutTaskInput[]
    updateMany?: TaskHistoryUpdateManyWithWhereWithoutTaskInput | TaskHistoryUpdateManyWithWhereWithoutTaskInput[]
    deleteMany?: TaskHistoryScalarWhereInput | TaskHistoryScalarWhereInput[]
  }

  export type TaskCreateNestedOneWithoutHistoryInput = {
    create?: XOR<TaskCreateWithoutHistoryInput, TaskUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: TaskCreateOrConnectWithoutHistoryInput
    connect?: TaskWhereUniqueInput
  }

  export type WorkspaceCreateNestedOneWithoutTasksHistoryInput = {
    create?: XOR<WorkspaceCreateWithoutTasksHistoryInput, WorkspaceUncheckedCreateWithoutTasksHistoryInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutTasksHistoryInput
    connect?: WorkspaceWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutHistoryInput = {
    create?: XOR<UserCreateWithoutHistoryInput, UserUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutHistoryInput
    connect?: UserWhereUniqueInput
  }

  export type EnumHistoryActionFieldUpdateOperationsInput = {
    set?: $Enums.HistoryAction
  }

  export type TaskUpdateOneRequiredWithoutHistoryNestedInput = {
    create?: XOR<TaskCreateWithoutHistoryInput, TaskUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: TaskCreateOrConnectWithoutHistoryInput
    upsert?: TaskUpsertWithoutHistoryInput
    connect?: TaskWhereUniqueInput
    update?: XOR<XOR<TaskUpdateToOneWithWhereWithoutHistoryInput, TaskUpdateWithoutHistoryInput>, TaskUncheckedUpdateWithoutHistoryInput>
  }

  export type WorkspaceUpdateOneRequiredWithoutTasksHistoryNestedInput = {
    create?: XOR<WorkspaceCreateWithoutTasksHistoryInput, WorkspaceUncheckedCreateWithoutTasksHistoryInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutTasksHistoryInput
    upsert?: WorkspaceUpsertWithoutTasksHistoryInput
    connect?: WorkspaceWhereUniqueInput
    update?: XOR<XOR<WorkspaceUpdateToOneWithWhereWithoutTasksHistoryInput, WorkspaceUpdateWithoutTasksHistoryInput>, WorkspaceUncheckedUpdateWithoutTasksHistoryInput>
  }

  export type UserUpdateOneRequiredWithoutHistoryNestedInput = {
    create?: XOR<UserCreateWithoutHistoryInput, UserUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutHistoryInput
    upsert?: UserUpsertWithoutHistoryInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutHistoryInput, UserUpdateWithoutHistoryInput>, UserUncheckedUpdateWithoutHistoryInput>
  }

  export type AssigneeUserCreateNestedManyWithoutUserInput = {
    create?: XOR<AssigneeUserCreateWithoutUserInput, AssigneeUserUncheckedCreateWithoutUserInput> | AssigneeUserCreateWithoutUserInput[] | AssigneeUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AssigneeUserCreateOrConnectWithoutUserInput | AssigneeUserCreateOrConnectWithoutUserInput[]
    createMany?: AssigneeUserCreateManyUserInputEnvelope
    connect?: AssigneeUserWhereUniqueInput | AssigneeUserWhereUniqueInput[]
  }

  export type PermissionCreateNestedManyWithoutUserInput = {
    create?: XOR<PermissionCreateWithoutUserInput, PermissionUncheckedCreateWithoutUserInput> | PermissionCreateWithoutUserInput[] | PermissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PermissionCreateOrConnectWithoutUserInput | PermissionCreateOrConnectWithoutUserInput[]
    createMany?: PermissionCreateManyUserInputEnvelope
    connect?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
  }

  export type TaskHistoryCreateNestedManyWithoutUserInput = {
    create?: XOR<TaskHistoryCreateWithoutUserInput, TaskHistoryUncheckedCreateWithoutUserInput> | TaskHistoryCreateWithoutUserInput[] | TaskHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskHistoryCreateOrConnectWithoutUserInput | TaskHistoryCreateOrConnectWithoutUserInput[]
    createMany?: TaskHistoryCreateManyUserInputEnvelope
    connect?: TaskHistoryWhereUniqueInput | TaskHistoryWhereUniqueInput[]
  }

  export type AssigneeUserUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AssigneeUserCreateWithoutUserInput, AssigneeUserUncheckedCreateWithoutUserInput> | AssigneeUserCreateWithoutUserInput[] | AssigneeUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AssigneeUserCreateOrConnectWithoutUserInput | AssigneeUserCreateOrConnectWithoutUserInput[]
    createMany?: AssigneeUserCreateManyUserInputEnvelope
    connect?: AssigneeUserWhereUniqueInput | AssigneeUserWhereUniqueInput[]
  }

  export type PermissionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PermissionCreateWithoutUserInput, PermissionUncheckedCreateWithoutUserInput> | PermissionCreateWithoutUserInput[] | PermissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PermissionCreateOrConnectWithoutUserInput | PermissionCreateOrConnectWithoutUserInput[]
    createMany?: PermissionCreateManyUserInputEnvelope
    connect?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
  }

  export type TaskHistoryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TaskHistoryCreateWithoutUserInput, TaskHistoryUncheckedCreateWithoutUserInput> | TaskHistoryCreateWithoutUserInput[] | TaskHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskHistoryCreateOrConnectWithoutUserInput | TaskHistoryCreateOrConnectWithoutUserInput[]
    createMany?: TaskHistoryCreateManyUserInputEnvelope
    connect?: TaskHistoryWhereUniqueInput | TaskHistoryWhereUniqueInput[]
  }

  export type AssigneeUserUpdateManyWithoutUserNestedInput = {
    create?: XOR<AssigneeUserCreateWithoutUserInput, AssigneeUserUncheckedCreateWithoutUserInput> | AssigneeUserCreateWithoutUserInput[] | AssigneeUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AssigneeUserCreateOrConnectWithoutUserInput | AssigneeUserCreateOrConnectWithoutUserInput[]
    upsert?: AssigneeUserUpsertWithWhereUniqueWithoutUserInput | AssigneeUserUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AssigneeUserCreateManyUserInputEnvelope
    set?: AssigneeUserWhereUniqueInput | AssigneeUserWhereUniqueInput[]
    disconnect?: AssigneeUserWhereUniqueInput | AssigneeUserWhereUniqueInput[]
    delete?: AssigneeUserWhereUniqueInput | AssigneeUserWhereUniqueInput[]
    connect?: AssigneeUserWhereUniqueInput | AssigneeUserWhereUniqueInput[]
    update?: AssigneeUserUpdateWithWhereUniqueWithoutUserInput | AssigneeUserUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AssigneeUserUpdateManyWithWhereWithoutUserInput | AssigneeUserUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AssigneeUserScalarWhereInput | AssigneeUserScalarWhereInput[]
  }

  export type PermissionUpdateManyWithoutUserNestedInput = {
    create?: XOR<PermissionCreateWithoutUserInput, PermissionUncheckedCreateWithoutUserInput> | PermissionCreateWithoutUserInput[] | PermissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PermissionCreateOrConnectWithoutUserInput | PermissionCreateOrConnectWithoutUserInput[]
    upsert?: PermissionUpsertWithWhereUniqueWithoutUserInput | PermissionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PermissionCreateManyUserInputEnvelope
    set?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    disconnect?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    delete?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    connect?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    update?: PermissionUpdateWithWhereUniqueWithoutUserInput | PermissionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PermissionUpdateManyWithWhereWithoutUserInput | PermissionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PermissionScalarWhereInput | PermissionScalarWhereInput[]
  }

  export type TaskHistoryUpdateManyWithoutUserNestedInput = {
    create?: XOR<TaskHistoryCreateWithoutUserInput, TaskHistoryUncheckedCreateWithoutUserInput> | TaskHistoryCreateWithoutUserInput[] | TaskHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskHistoryCreateOrConnectWithoutUserInput | TaskHistoryCreateOrConnectWithoutUserInput[]
    upsert?: TaskHistoryUpsertWithWhereUniqueWithoutUserInput | TaskHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TaskHistoryCreateManyUserInputEnvelope
    set?: TaskHistoryWhereUniqueInput | TaskHistoryWhereUniqueInput[]
    disconnect?: TaskHistoryWhereUniqueInput | TaskHistoryWhereUniqueInput[]
    delete?: TaskHistoryWhereUniqueInput | TaskHistoryWhereUniqueInput[]
    connect?: TaskHistoryWhereUniqueInput | TaskHistoryWhereUniqueInput[]
    update?: TaskHistoryUpdateWithWhereUniqueWithoutUserInput | TaskHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TaskHistoryUpdateManyWithWhereWithoutUserInput | TaskHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TaskHistoryScalarWhereInput | TaskHistoryScalarWhereInput[]
  }

  export type AssigneeUserUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AssigneeUserCreateWithoutUserInput, AssigneeUserUncheckedCreateWithoutUserInput> | AssigneeUserCreateWithoutUserInput[] | AssigneeUserUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AssigneeUserCreateOrConnectWithoutUserInput | AssigneeUserCreateOrConnectWithoutUserInput[]
    upsert?: AssigneeUserUpsertWithWhereUniqueWithoutUserInput | AssigneeUserUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AssigneeUserCreateManyUserInputEnvelope
    set?: AssigneeUserWhereUniqueInput | AssigneeUserWhereUniqueInput[]
    disconnect?: AssigneeUserWhereUniqueInput | AssigneeUserWhereUniqueInput[]
    delete?: AssigneeUserWhereUniqueInput | AssigneeUserWhereUniqueInput[]
    connect?: AssigneeUserWhereUniqueInput | AssigneeUserWhereUniqueInput[]
    update?: AssigneeUserUpdateWithWhereUniqueWithoutUserInput | AssigneeUserUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AssigneeUserUpdateManyWithWhereWithoutUserInput | AssigneeUserUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AssigneeUserScalarWhereInput | AssigneeUserScalarWhereInput[]
  }

  export type PermissionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PermissionCreateWithoutUserInput, PermissionUncheckedCreateWithoutUserInput> | PermissionCreateWithoutUserInput[] | PermissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PermissionCreateOrConnectWithoutUserInput | PermissionCreateOrConnectWithoutUserInput[]
    upsert?: PermissionUpsertWithWhereUniqueWithoutUserInput | PermissionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PermissionCreateManyUserInputEnvelope
    set?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    disconnect?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    delete?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    connect?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    update?: PermissionUpdateWithWhereUniqueWithoutUserInput | PermissionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PermissionUpdateManyWithWhereWithoutUserInput | PermissionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PermissionScalarWhereInput | PermissionScalarWhereInput[]
  }

  export type TaskHistoryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TaskHistoryCreateWithoutUserInput, TaskHistoryUncheckedCreateWithoutUserInput> | TaskHistoryCreateWithoutUserInput[] | TaskHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskHistoryCreateOrConnectWithoutUserInput | TaskHistoryCreateOrConnectWithoutUserInput[]
    upsert?: TaskHistoryUpsertWithWhereUniqueWithoutUserInput | TaskHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TaskHistoryCreateManyUserInputEnvelope
    set?: TaskHistoryWhereUniqueInput | TaskHistoryWhereUniqueInput[]
    disconnect?: TaskHistoryWhereUniqueInput | TaskHistoryWhereUniqueInput[]
    delete?: TaskHistoryWhereUniqueInput | TaskHistoryWhereUniqueInput[]
    connect?: TaskHistoryWhereUniqueInput | TaskHistoryWhereUniqueInput[]
    update?: TaskHistoryUpdateWithWhereUniqueWithoutUserInput | TaskHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TaskHistoryUpdateManyWithWhereWithoutUserInput | TaskHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TaskHistoryScalarWhereInput | TaskHistoryScalarWhereInput[]
  }

  export type PikudCreateNestedOneWithoutWorkspacesInput = {
    create?: XOR<PikudCreateWithoutWorkspacesInput, PikudUncheckedCreateWithoutWorkspacesInput>
    connectOrCreate?: PikudCreateOrConnectWithoutWorkspacesInput
    connect?: PikudWhereUniqueInput
  }

  export type TagCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<TagCreateWithoutWorkspaceInput, TagUncheckedCreateWithoutWorkspaceInput> | TagCreateWithoutWorkspaceInput[] | TagUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: TagCreateOrConnectWithoutWorkspaceInput | TagCreateOrConnectWithoutWorkspaceInput[]
    createMany?: TagCreateManyWorkspaceInputEnvelope
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
  }

  export type TaskCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<TaskCreateWithoutWorkspaceInput, TaskUncheckedCreateWithoutWorkspaceInput> | TaskCreateWithoutWorkspaceInput[] | TaskUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutWorkspaceInput | TaskCreateOrConnectWithoutWorkspaceInput[]
    createMany?: TaskCreateManyWorkspaceInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type WorkspaceStatusCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<WorkspaceStatusCreateWithoutWorkspaceInput, WorkspaceStatusUncheckedCreateWithoutWorkspaceInput> | WorkspaceStatusCreateWithoutWorkspaceInput[] | WorkspaceStatusUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: WorkspaceStatusCreateOrConnectWithoutWorkspaceInput | WorkspaceStatusCreateOrConnectWithoutWorkspaceInput[]
    createMany?: WorkspaceStatusCreateManyWorkspaceInputEnvelope
    connect?: WorkspaceStatusWhereUniqueInput | WorkspaceStatusWhereUniqueInput[]
  }

  export type PermissionCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<PermissionCreateWithoutWorkspaceInput, PermissionUncheckedCreateWithoutWorkspaceInput> | PermissionCreateWithoutWorkspaceInput[] | PermissionUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: PermissionCreateOrConnectWithoutWorkspaceInput | PermissionCreateOrConnectWithoutWorkspaceInput[]
    createMany?: PermissionCreateManyWorkspaceInputEnvelope
    connect?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
  }

  export type TaskHistoryCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<TaskHistoryCreateWithoutWorkspaceInput, TaskHistoryUncheckedCreateWithoutWorkspaceInput> | TaskHistoryCreateWithoutWorkspaceInput[] | TaskHistoryUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: TaskHistoryCreateOrConnectWithoutWorkspaceInput | TaskHistoryCreateOrConnectWithoutWorkspaceInput[]
    createMany?: TaskHistoryCreateManyWorkspaceInputEnvelope
    connect?: TaskHistoryWhereUniqueInput | TaskHistoryWhereUniqueInput[]
  }

  export type TagUncheckedCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<TagCreateWithoutWorkspaceInput, TagUncheckedCreateWithoutWorkspaceInput> | TagCreateWithoutWorkspaceInput[] | TagUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: TagCreateOrConnectWithoutWorkspaceInput | TagCreateOrConnectWithoutWorkspaceInput[]
    createMany?: TagCreateManyWorkspaceInputEnvelope
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<TaskCreateWithoutWorkspaceInput, TaskUncheckedCreateWithoutWorkspaceInput> | TaskCreateWithoutWorkspaceInput[] | TaskUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutWorkspaceInput | TaskCreateOrConnectWithoutWorkspaceInput[]
    createMany?: TaskCreateManyWorkspaceInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type WorkspaceStatusUncheckedCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<WorkspaceStatusCreateWithoutWorkspaceInput, WorkspaceStatusUncheckedCreateWithoutWorkspaceInput> | WorkspaceStatusCreateWithoutWorkspaceInput[] | WorkspaceStatusUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: WorkspaceStatusCreateOrConnectWithoutWorkspaceInput | WorkspaceStatusCreateOrConnectWithoutWorkspaceInput[]
    createMany?: WorkspaceStatusCreateManyWorkspaceInputEnvelope
    connect?: WorkspaceStatusWhereUniqueInput | WorkspaceStatusWhereUniqueInput[]
  }

  export type PermissionUncheckedCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<PermissionCreateWithoutWorkspaceInput, PermissionUncheckedCreateWithoutWorkspaceInput> | PermissionCreateWithoutWorkspaceInput[] | PermissionUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: PermissionCreateOrConnectWithoutWorkspaceInput | PermissionCreateOrConnectWithoutWorkspaceInput[]
    createMany?: PermissionCreateManyWorkspaceInputEnvelope
    connect?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
  }

  export type TaskHistoryUncheckedCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<TaskHistoryCreateWithoutWorkspaceInput, TaskHistoryUncheckedCreateWithoutWorkspaceInput> | TaskHistoryCreateWithoutWorkspaceInput[] | TaskHistoryUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: TaskHistoryCreateOrConnectWithoutWorkspaceInput | TaskHistoryCreateOrConnectWithoutWorkspaceInput[]
    createMany?: TaskHistoryCreateManyWorkspaceInputEnvelope
    connect?: TaskHistoryWhereUniqueInput | TaskHistoryWhereUniqueInput[]
  }

  export type PikudUpdateOneRequiredWithoutWorkspacesNestedInput = {
    create?: XOR<PikudCreateWithoutWorkspacesInput, PikudUncheckedCreateWithoutWorkspacesInput>
    connectOrCreate?: PikudCreateOrConnectWithoutWorkspacesInput
    upsert?: PikudUpsertWithoutWorkspacesInput
    connect?: PikudWhereUniqueInput
    update?: XOR<XOR<PikudUpdateToOneWithWhereWithoutWorkspacesInput, PikudUpdateWithoutWorkspacesInput>, PikudUncheckedUpdateWithoutWorkspacesInput>
  }

  export type TagUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<TagCreateWithoutWorkspaceInput, TagUncheckedCreateWithoutWorkspaceInput> | TagCreateWithoutWorkspaceInput[] | TagUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: TagCreateOrConnectWithoutWorkspaceInput | TagCreateOrConnectWithoutWorkspaceInput[]
    upsert?: TagUpsertWithWhereUniqueWithoutWorkspaceInput | TagUpsertWithWhereUniqueWithoutWorkspaceInput[]
    createMany?: TagCreateManyWorkspaceInputEnvelope
    set?: TagWhereUniqueInput | TagWhereUniqueInput[]
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    update?: TagUpdateWithWhereUniqueWithoutWorkspaceInput | TagUpdateWithWhereUniqueWithoutWorkspaceInput[]
    updateMany?: TagUpdateManyWithWhereWithoutWorkspaceInput | TagUpdateManyWithWhereWithoutWorkspaceInput[]
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[]
  }

  export type TaskUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<TaskCreateWithoutWorkspaceInput, TaskUncheckedCreateWithoutWorkspaceInput> | TaskCreateWithoutWorkspaceInput[] | TaskUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutWorkspaceInput | TaskCreateOrConnectWithoutWorkspaceInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutWorkspaceInput | TaskUpsertWithWhereUniqueWithoutWorkspaceInput[]
    createMany?: TaskCreateManyWorkspaceInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutWorkspaceInput | TaskUpdateWithWhereUniqueWithoutWorkspaceInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutWorkspaceInput | TaskUpdateManyWithWhereWithoutWorkspaceInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type WorkspaceStatusUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<WorkspaceStatusCreateWithoutWorkspaceInput, WorkspaceStatusUncheckedCreateWithoutWorkspaceInput> | WorkspaceStatusCreateWithoutWorkspaceInput[] | WorkspaceStatusUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: WorkspaceStatusCreateOrConnectWithoutWorkspaceInput | WorkspaceStatusCreateOrConnectWithoutWorkspaceInput[]
    upsert?: WorkspaceStatusUpsertWithWhereUniqueWithoutWorkspaceInput | WorkspaceStatusUpsertWithWhereUniqueWithoutWorkspaceInput[]
    createMany?: WorkspaceStatusCreateManyWorkspaceInputEnvelope
    set?: WorkspaceStatusWhereUniqueInput | WorkspaceStatusWhereUniqueInput[]
    disconnect?: WorkspaceStatusWhereUniqueInput | WorkspaceStatusWhereUniqueInput[]
    delete?: WorkspaceStatusWhereUniqueInput | WorkspaceStatusWhereUniqueInput[]
    connect?: WorkspaceStatusWhereUniqueInput | WorkspaceStatusWhereUniqueInput[]
    update?: WorkspaceStatusUpdateWithWhereUniqueWithoutWorkspaceInput | WorkspaceStatusUpdateWithWhereUniqueWithoutWorkspaceInput[]
    updateMany?: WorkspaceStatusUpdateManyWithWhereWithoutWorkspaceInput | WorkspaceStatusUpdateManyWithWhereWithoutWorkspaceInput[]
    deleteMany?: WorkspaceStatusScalarWhereInput | WorkspaceStatusScalarWhereInput[]
  }

  export type PermissionUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<PermissionCreateWithoutWorkspaceInput, PermissionUncheckedCreateWithoutWorkspaceInput> | PermissionCreateWithoutWorkspaceInput[] | PermissionUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: PermissionCreateOrConnectWithoutWorkspaceInput | PermissionCreateOrConnectWithoutWorkspaceInput[]
    upsert?: PermissionUpsertWithWhereUniqueWithoutWorkspaceInput | PermissionUpsertWithWhereUniqueWithoutWorkspaceInput[]
    createMany?: PermissionCreateManyWorkspaceInputEnvelope
    set?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    disconnect?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    delete?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    connect?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    update?: PermissionUpdateWithWhereUniqueWithoutWorkspaceInput | PermissionUpdateWithWhereUniqueWithoutWorkspaceInput[]
    updateMany?: PermissionUpdateManyWithWhereWithoutWorkspaceInput | PermissionUpdateManyWithWhereWithoutWorkspaceInput[]
    deleteMany?: PermissionScalarWhereInput | PermissionScalarWhereInput[]
  }

  export type TaskHistoryUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<TaskHistoryCreateWithoutWorkspaceInput, TaskHistoryUncheckedCreateWithoutWorkspaceInput> | TaskHistoryCreateWithoutWorkspaceInput[] | TaskHistoryUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: TaskHistoryCreateOrConnectWithoutWorkspaceInput | TaskHistoryCreateOrConnectWithoutWorkspaceInput[]
    upsert?: TaskHistoryUpsertWithWhereUniqueWithoutWorkspaceInput | TaskHistoryUpsertWithWhereUniqueWithoutWorkspaceInput[]
    createMany?: TaskHistoryCreateManyWorkspaceInputEnvelope
    set?: TaskHistoryWhereUniqueInput | TaskHistoryWhereUniqueInput[]
    disconnect?: TaskHistoryWhereUniqueInput | TaskHistoryWhereUniqueInput[]
    delete?: TaskHistoryWhereUniqueInput | TaskHistoryWhereUniqueInput[]
    connect?: TaskHistoryWhereUniqueInput | TaskHistoryWhereUniqueInput[]
    update?: TaskHistoryUpdateWithWhereUniqueWithoutWorkspaceInput | TaskHistoryUpdateWithWhereUniqueWithoutWorkspaceInput[]
    updateMany?: TaskHistoryUpdateManyWithWhereWithoutWorkspaceInput | TaskHistoryUpdateManyWithWhereWithoutWorkspaceInput[]
    deleteMany?: TaskHistoryScalarWhereInput | TaskHistoryScalarWhereInput[]
  }

  export type TagUncheckedUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<TagCreateWithoutWorkspaceInput, TagUncheckedCreateWithoutWorkspaceInput> | TagCreateWithoutWorkspaceInput[] | TagUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: TagCreateOrConnectWithoutWorkspaceInput | TagCreateOrConnectWithoutWorkspaceInput[]
    upsert?: TagUpsertWithWhereUniqueWithoutWorkspaceInput | TagUpsertWithWhereUniqueWithoutWorkspaceInput[]
    createMany?: TagCreateManyWorkspaceInputEnvelope
    set?: TagWhereUniqueInput | TagWhereUniqueInput[]
    disconnect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    delete?: TagWhereUniqueInput | TagWhereUniqueInput[]
    connect?: TagWhereUniqueInput | TagWhereUniqueInput[]
    update?: TagUpdateWithWhereUniqueWithoutWorkspaceInput | TagUpdateWithWhereUniqueWithoutWorkspaceInput[]
    updateMany?: TagUpdateManyWithWhereWithoutWorkspaceInput | TagUpdateManyWithWhereWithoutWorkspaceInput[]
    deleteMany?: TagScalarWhereInput | TagScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<TaskCreateWithoutWorkspaceInput, TaskUncheckedCreateWithoutWorkspaceInput> | TaskCreateWithoutWorkspaceInput[] | TaskUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutWorkspaceInput | TaskCreateOrConnectWithoutWorkspaceInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutWorkspaceInput | TaskUpsertWithWhereUniqueWithoutWorkspaceInput[]
    createMany?: TaskCreateManyWorkspaceInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutWorkspaceInput | TaskUpdateWithWhereUniqueWithoutWorkspaceInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutWorkspaceInput | TaskUpdateManyWithWhereWithoutWorkspaceInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type WorkspaceStatusUncheckedUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<WorkspaceStatusCreateWithoutWorkspaceInput, WorkspaceStatusUncheckedCreateWithoutWorkspaceInput> | WorkspaceStatusCreateWithoutWorkspaceInput[] | WorkspaceStatusUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: WorkspaceStatusCreateOrConnectWithoutWorkspaceInput | WorkspaceStatusCreateOrConnectWithoutWorkspaceInput[]
    upsert?: WorkspaceStatusUpsertWithWhereUniqueWithoutWorkspaceInput | WorkspaceStatusUpsertWithWhereUniqueWithoutWorkspaceInput[]
    createMany?: WorkspaceStatusCreateManyWorkspaceInputEnvelope
    set?: WorkspaceStatusWhereUniqueInput | WorkspaceStatusWhereUniqueInput[]
    disconnect?: WorkspaceStatusWhereUniqueInput | WorkspaceStatusWhereUniqueInput[]
    delete?: WorkspaceStatusWhereUniqueInput | WorkspaceStatusWhereUniqueInput[]
    connect?: WorkspaceStatusWhereUniqueInput | WorkspaceStatusWhereUniqueInput[]
    update?: WorkspaceStatusUpdateWithWhereUniqueWithoutWorkspaceInput | WorkspaceStatusUpdateWithWhereUniqueWithoutWorkspaceInput[]
    updateMany?: WorkspaceStatusUpdateManyWithWhereWithoutWorkspaceInput | WorkspaceStatusUpdateManyWithWhereWithoutWorkspaceInput[]
    deleteMany?: WorkspaceStatusScalarWhereInput | WorkspaceStatusScalarWhereInput[]
  }

  export type PermissionUncheckedUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<PermissionCreateWithoutWorkspaceInput, PermissionUncheckedCreateWithoutWorkspaceInput> | PermissionCreateWithoutWorkspaceInput[] | PermissionUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: PermissionCreateOrConnectWithoutWorkspaceInput | PermissionCreateOrConnectWithoutWorkspaceInput[]
    upsert?: PermissionUpsertWithWhereUniqueWithoutWorkspaceInput | PermissionUpsertWithWhereUniqueWithoutWorkspaceInput[]
    createMany?: PermissionCreateManyWorkspaceInputEnvelope
    set?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    disconnect?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    delete?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    connect?: PermissionWhereUniqueInput | PermissionWhereUniqueInput[]
    update?: PermissionUpdateWithWhereUniqueWithoutWorkspaceInput | PermissionUpdateWithWhereUniqueWithoutWorkspaceInput[]
    updateMany?: PermissionUpdateManyWithWhereWithoutWorkspaceInput | PermissionUpdateManyWithWhereWithoutWorkspaceInput[]
    deleteMany?: PermissionScalarWhereInput | PermissionScalarWhereInput[]
  }

  export type TaskHistoryUncheckedUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<TaskHistoryCreateWithoutWorkspaceInput, TaskHistoryUncheckedCreateWithoutWorkspaceInput> | TaskHistoryCreateWithoutWorkspaceInput[] | TaskHistoryUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: TaskHistoryCreateOrConnectWithoutWorkspaceInput | TaskHistoryCreateOrConnectWithoutWorkspaceInput[]
    upsert?: TaskHistoryUpsertWithWhereUniqueWithoutWorkspaceInput | TaskHistoryUpsertWithWhereUniqueWithoutWorkspaceInput[]
    createMany?: TaskHistoryCreateManyWorkspaceInputEnvelope
    set?: TaskHistoryWhereUniqueInput | TaskHistoryWhereUniqueInput[]
    disconnect?: TaskHistoryWhereUniqueInput | TaskHistoryWhereUniqueInput[]
    delete?: TaskHistoryWhereUniqueInput | TaskHistoryWhereUniqueInput[]
    connect?: TaskHistoryWhereUniqueInput | TaskHistoryWhereUniqueInput[]
    update?: TaskHistoryUpdateWithWhereUniqueWithoutWorkspaceInput | TaskHistoryUpdateWithWhereUniqueWithoutWorkspaceInput[]
    updateMany?: TaskHistoryUpdateManyWithWhereWithoutWorkspaceInput | TaskHistoryUpdateManyWithWhereWithoutWorkspaceInput[]
    deleteMany?: TaskHistoryScalarWhereInput | TaskHistoryScalarWhereInput[]
  }

  export type WorkspaceCreateNestedOneWithoutWorkspaceStatusesInput = {
    create?: XOR<WorkspaceCreateWithoutWorkspaceStatusesInput, WorkspaceUncheckedCreateWithoutWorkspaceStatusesInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutWorkspaceStatusesInput
    connect?: WorkspaceWhereUniqueInput
  }

  export type AssigneeTaskStatusCreateNestedManyWithoutStatusInput = {
    create?: XOR<AssigneeTaskStatusCreateWithoutStatusInput, AssigneeTaskStatusUncheckedCreateWithoutStatusInput> | AssigneeTaskStatusCreateWithoutStatusInput[] | AssigneeTaskStatusUncheckedCreateWithoutStatusInput[]
    connectOrCreate?: AssigneeTaskStatusCreateOrConnectWithoutStatusInput | AssigneeTaskStatusCreateOrConnectWithoutStatusInput[]
    createMany?: AssigneeTaskStatusCreateManyStatusInputEnvelope
    connect?: AssigneeTaskStatusWhereUniqueInput | AssigneeTaskStatusWhereUniqueInput[]
  }

  export type AssigneeTaskStatusUncheckedCreateNestedManyWithoutStatusInput = {
    create?: XOR<AssigneeTaskStatusCreateWithoutStatusInput, AssigneeTaskStatusUncheckedCreateWithoutStatusInput> | AssigneeTaskStatusCreateWithoutStatusInput[] | AssigneeTaskStatusUncheckedCreateWithoutStatusInput[]
    connectOrCreate?: AssigneeTaskStatusCreateOrConnectWithoutStatusInput | AssigneeTaskStatusCreateOrConnectWithoutStatusInput[]
    createMany?: AssigneeTaskStatusCreateManyStatusInputEnvelope
    connect?: AssigneeTaskStatusWhereUniqueInput | AssigneeTaskStatusWhereUniqueInput[]
  }

  export type WorkspaceUpdateOneRequiredWithoutWorkspaceStatusesNestedInput = {
    create?: XOR<WorkspaceCreateWithoutWorkspaceStatusesInput, WorkspaceUncheckedCreateWithoutWorkspaceStatusesInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutWorkspaceStatusesInput
    upsert?: WorkspaceUpsertWithoutWorkspaceStatusesInput
    connect?: WorkspaceWhereUniqueInput
    update?: XOR<XOR<WorkspaceUpdateToOneWithWhereWithoutWorkspaceStatusesInput, WorkspaceUpdateWithoutWorkspaceStatusesInput>, WorkspaceUncheckedUpdateWithoutWorkspaceStatusesInput>
  }

  export type AssigneeTaskStatusUpdateManyWithoutStatusNestedInput = {
    create?: XOR<AssigneeTaskStatusCreateWithoutStatusInput, AssigneeTaskStatusUncheckedCreateWithoutStatusInput> | AssigneeTaskStatusCreateWithoutStatusInput[] | AssigneeTaskStatusUncheckedCreateWithoutStatusInput[]
    connectOrCreate?: AssigneeTaskStatusCreateOrConnectWithoutStatusInput | AssigneeTaskStatusCreateOrConnectWithoutStatusInput[]
    upsert?: AssigneeTaskStatusUpsertWithWhereUniqueWithoutStatusInput | AssigneeTaskStatusUpsertWithWhereUniqueWithoutStatusInput[]
    createMany?: AssigneeTaskStatusCreateManyStatusInputEnvelope
    set?: AssigneeTaskStatusWhereUniqueInput | AssigneeTaskStatusWhereUniqueInput[]
    disconnect?: AssigneeTaskStatusWhereUniqueInput | AssigneeTaskStatusWhereUniqueInput[]
    delete?: AssigneeTaskStatusWhereUniqueInput | AssigneeTaskStatusWhereUniqueInput[]
    connect?: AssigneeTaskStatusWhereUniqueInput | AssigneeTaskStatusWhereUniqueInput[]
    update?: AssigneeTaskStatusUpdateWithWhereUniqueWithoutStatusInput | AssigneeTaskStatusUpdateWithWhereUniqueWithoutStatusInput[]
    updateMany?: AssigneeTaskStatusUpdateManyWithWhereWithoutStatusInput | AssigneeTaskStatusUpdateManyWithWhereWithoutStatusInput[]
    deleteMany?: AssigneeTaskStatusScalarWhereInput | AssigneeTaskStatusScalarWhereInput[]
  }

  export type AssigneeTaskStatusUncheckedUpdateManyWithoutStatusNestedInput = {
    create?: XOR<AssigneeTaskStatusCreateWithoutStatusInput, AssigneeTaskStatusUncheckedCreateWithoutStatusInput> | AssigneeTaskStatusCreateWithoutStatusInput[] | AssigneeTaskStatusUncheckedCreateWithoutStatusInput[]
    connectOrCreate?: AssigneeTaskStatusCreateOrConnectWithoutStatusInput | AssigneeTaskStatusCreateOrConnectWithoutStatusInput[]
    upsert?: AssigneeTaskStatusUpsertWithWhereUniqueWithoutStatusInput | AssigneeTaskStatusUpsertWithWhereUniqueWithoutStatusInput[]
    createMany?: AssigneeTaskStatusCreateManyStatusInputEnvelope
    set?: AssigneeTaskStatusWhereUniqueInput | AssigneeTaskStatusWhereUniqueInput[]
    disconnect?: AssigneeTaskStatusWhereUniqueInput | AssigneeTaskStatusWhereUniqueInput[]
    delete?: AssigneeTaskStatusWhereUniqueInput | AssigneeTaskStatusWhereUniqueInput[]
    connect?: AssigneeTaskStatusWhereUniqueInput | AssigneeTaskStatusWhereUniqueInput[]
    update?: AssigneeTaskStatusUpdateWithWhereUniqueWithoutStatusInput | AssigneeTaskStatusUpdateWithWhereUniqueWithoutStatusInput[]
    updateMany?: AssigneeTaskStatusUpdateManyWithWhereWithoutStatusInput | AssigneeTaskStatusUpdateManyWithWhereWithoutStatusInput[]
    deleteMany?: AssigneeTaskStatusScalarWhereInput | AssigneeTaskStatusScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumPermissionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PermissionType | EnumPermissionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PermissionType[] | ListEnumPermissionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PermissionType[] | ListEnumPermissionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPermissionTypeFilter<$PrismaModel> | $Enums.PermissionType
  }

  export type NestedEnumPermissionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PermissionType | EnumPermissionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PermissionType[] | ListEnumPermissionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PermissionType[] | ListEnumPermissionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPermissionTypeWithAggregatesFilter<$PrismaModel> | $Enums.PermissionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPermissionTypeFilter<$PrismaModel>
    _max?: NestedEnumPermissionTypeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumHistoryActionFilter<$PrismaModel = never> = {
    equals?: $Enums.HistoryAction | EnumHistoryActionFieldRefInput<$PrismaModel>
    in?: $Enums.HistoryAction[] | ListEnumHistoryActionFieldRefInput<$PrismaModel>
    notIn?: $Enums.HistoryAction[] | ListEnumHistoryActionFieldRefInput<$PrismaModel>
    not?: NestedEnumHistoryActionFilter<$PrismaModel> | $Enums.HistoryAction
  }

  export type NestedEnumHistoryActionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.HistoryAction | EnumHistoryActionFieldRefInput<$PrismaModel>
    in?: $Enums.HistoryAction[] | ListEnumHistoryActionFieldRefInput<$PrismaModel>
    notIn?: $Enums.HistoryAction[] | ListEnumHistoryActionFieldRefInput<$PrismaModel>
    not?: NestedEnumHistoryActionWithAggregatesFilter<$PrismaModel> | $Enums.HistoryAction
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumHistoryActionFilter<$PrismaModel>
    _max?: NestedEnumHistoryActionFilter<$PrismaModel>
  }

  export type AssigneeUserCreateWithoutAssigneeInput = {
    user: UserCreateNestedOneWithoutAssigneesInput
  }

  export type AssigneeUserUncheckedCreateWithoutAssigneeInput = {
    userId: number
  }

  export type AssigneeUserCreateOrConnectWithoutAssigneeInput = {
    where: AssigneeUserWhereUniqueInput
    create: XOR<AssigneeUserCreateWithoutAssigneeInput, AssigneeUserUncheckedCreateWithoutAssigneeInput>
  }

  export type AssigneeUserCreateManyAssigneeInputEnvelope = {
    data: AssigneeUserCreateManyAssigneeInput | AssigneeUserCreateManyAssigneeInput[]
    skipDuplicates?: boolean
  }

  export type AssigneeTaskStatusCreateWithoutAssigneeInput = {
    task: TaskCreateNestedOneWithoutAssigneeStatusesInput
    status: WorkspaceStatusCreateNestedOneWithoutAssigneeTaskStatusesInput
  }

  export type AssigneeTaskStatusUncheckedCreateWithoutAssigneeInput = {
    taskId: number
    statusId: number
  }

  export type AssigneeTaskStatusCreateOrConnectWithoutAssigneeInput = {
    where: AssigneeTaskStatusWhereUniqueInput
    create: XOR<AssigneeTaskStatusCreateWithoutAssigneeInput, AssigneeTaskStatusUncheckedCreateWithoutAssigneeInput>
  }

  export type AssigneeTaskStatusCreateManyAssigneeInputEnvelope = {
    data: AssigneeTaskStatusCreateManyAssigneeInput | AssigneeTaskStatusCreateManyAssigneeInput[]
    skipDuplicates?: boolean
  }

  export type MessageCreateWithoutAssigneeInput = {
    content: string
    createdAt?: Date | string
    createdBy: number
    updatedAt?: Date | string
    updatedBy: number
    deletedAt?: Date | string | null
    deletedBy?: number | null
    task: TaskCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateWithoutAssigneeInput = {
    id?: number
    content: string
    taskId: number
    createdAt?: Date | string
    createdBy: number
    updatedAt?: Date | string
    updatedBy: number
    deletedAt?: Date | string | null
    deletedBy?: number | null
  }

  export type MessageCreateOrConnectWithoutAssigneeInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutAssigneeInput, MessageUncheckedCreateWithoutAssigneeInput>
  }

  export type MessageCreateManyAssigneeInputEnvelope = {
    data: MessageCreateManyAssigneeInput | MessageCreateManyAssigneeInput[]
    skipDuplicates?: boolean
  }

  export type AssigneeUserUpsertWithWhereUniqueWithoutAssigneeInput = {
    where: AssigneeUserWhereUniqueInput
    update: XOR<AssigneeUserUpdateWithoutAssigneeInput, AssigneeUserUncheckedUpdateWithoutAssigneeInput>
    create: XOR<AssigneeUserCreateWithoutAssigneeInput, AssigneeUserUncheckedCreateWithoutAssigneeInput>
  }

  export type AssigneeUserUpdateWithWhereUniqueWithoutAssigneeInput = {
    where: AssigneeUserWhereUniqueInput
    data: XOR<AssigneeUserUpdateWithoutAssigneeInput, AssigneeUserUncheckedUpdateWithoutAssigneeInput>
  }

  export type AssigneeUserUpdateManyWithWhereWithoutAssigneeInput = {
    where: AssigneeUserScalarWhereInput
    data: XOR<AssigneeUserUpdateManyMutationInput, AssigneeUserUncheckedUpdateManyWithoutAssigneeInput>
  }

  export type AssigneeUserScalarWhereInput = {
    AND?: AssigneeUserScalarWhereInput | AssigneeUserScalarWhereInput[]
    OR?: AssigneeUserScalarWhereInput[]
    NOT?: AssigneeUserScalarWhereInput | AssigneeUserScalarWhereInput[]
    assigneeId?: IntFilter<"AssigneeUser"> | number
    userId?: IntFilter<"AssigneeUser"> | number
  }

  export type AssigneeTaskStatusUpsertWithWhereUniqueWithoutAssigneeInput = {
    where: AssigneeTaskStatusWhereUniqueInput
    update: XOR<AssigneeTaskStatusUpdateWithoutAssigneeInput, AssigneeTaskStatusUncheckedUpdateWithoutAssigneeInput>
    create: XOR<AssigneeTaskStatusCreateWithoutAssigneeInput, AssigneeTaskStatusUncheckedCreateWithoutAssigneeInput>
  }

  export type AssigneeTaskStatusUpdateWithWhereUniqueWithoutAssigneeInput = {
    where: AssigneeTaskStatusWhereUniqueInput
    data: XOR<AssigneeTaskStatusUpdateWithoutAssigneeInput, AssigneeTaskStatusUncheckedUpdateWithoutAssigneeInput>
  }

  export type AssigneeTaskStatusUpdateManyWithWhereWithoutAssigneeInput = {
    where: AssigneeTaskStatusScalarWhereInput
    data: XOR<AssigneeTaskStatusUpdateManyMutationInput, AssigneeTaskStatusUncheckedUpdateManyWithoutAssigneeInput>
  }

  export type AssigneeTaskStatusScalarWhereInput = {
    AND?: AssigneeTaskStatusScalarWhereInput | AssigneeTaskStatusScalarWhereInput[]
    OR?: AssigneeTaskStatusScalarWhereInput[]
    NOT?: AssigneeTaskStatusScalarWhereInput | AssigneeTaskStatusScalarWhereInput[]
    taskId?: IntFilter<"AssigneeTaskStatus"> | number
    assigneeId?: IntFilter<"AssigneeTaskStatus"> | number
    statusId?: IntFilter<"AssigneeTaskStatus"> | number
  }

  export type MessageUpsertWithWhereUniqueWithoutAssigneeInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutAssigneeInput, MessageUncheckedUpdateWithoutAssigneeInput>
    create: XOR<MessageCreateWithoutAssigneeInput, MessageUncheckedCreateWithoutAssigneeInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutAssigneeInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutAssigneeInput, MessageUncheckedUpdateWithoutAssigneeInput>
  }

  export type MessageUpdateManyWithWhereWithoutAssigneeInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutAssigneeInput>
  }

  export type MessageScalarWhereInput = {
    AND?: MessageScalarWhereInput | MessageScalarWhereInput[]
    OR?: MessageScalarWhereInput[]
    NOT?: MessageScalarWhereInput | MessageScalarWhereInput[]
    id?: IntFilter<"Message"> | number
    content?: StringFilter<"Message"> | string
    assigneeId?: IntFilter<"Message"> | number
    taskId?: IntFilter<"Message"> | number
    createdAt?: DateTimeFilter<"Message"> | Date | string
    createdBy?: IntFilter<"Message"> | number
    updatedAt?: DateTimeFilter<"Message"> | Date | string
    updatedBy?: IntFilter<"Message"> | number
    deletedAt?: DateTimeNullableFilter<"Message"> | Date | string | null
    deletedBy?: IntNullableFilter<"Message"> | number | null
  }

  export type TaskCreateWithoutAssigneeStatusesInput = {
    title: string
    description?: string | null
    flagged?: boolean
    deadlineType: string
    issuedAt?: Date | string
    dueDate: Date | string
    notes?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    createdBy: number
    updatedAt?: Date | string
    updatedBy: number
    deletedAt?: Date | string | null
    deletedBy?: number | null
    workspace: WorkspaceCreateNestedOneWithoutTasksInput
    source: SourceCreateNestedOneWithoutTasksInput
    tags?: TagCreateNestedManyWithoutTasksInput
    messages?: MessageCreateNestedManyWithoutTaskInput
    history?: TaskHistoryCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutAssigneeStatusesInput = {
    id?: number
    title: string
    description?: string | null
    flagged?: boolean
    deadlineType: string
    issuedAt?: Date | string
    dueDate: Date | string
    notes?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    createdBy: number
    updatedAt?: Date | string
    updatedBy: number
    deletedAt?: Date | string | null
    deletedBy?: number | null
    workspaceId: number
    sourceId: number
    tags?: TagUncheckedCreateNestedManyWithoutTasksInput
    messages?: MessageUncheckedCreateNestedManyWithoutTaskInput
    history?: TaskHistoryUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutAssigneeStatusesInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutAssigneeStatusesInput, TaskUncheckedCreateWithoutAssigneeStatusesInput>
  }

  export type AssigneeCreateWithoutTaskStatusesInput = {
    name: string
    color: string
    createdAt?: Date | string
    createdBy: number
    updatedAt?: Date | string
    updatedBy: number
    deletedAt?: Date | string | null
    deletedBy?: number | null
    users?: AssigneeUserCreateNestedManyWithoutAssigneeInput
    messages?: MessageCreateNestedManyWithoutAssigneeInput
  }

  export type AssigneeUncheckedCreateWithoutTaskStatusesInput = {
    id?: number
    name: string
    color: string
    createdAt?: Date | string
    createdBy: number
    updatedAt?: Date | string
    updatedBy: number
    deletedAt?: Date | string | null
    deletedBy?: number | null
    users?: AssigneeUserUncheckedCreateNestedManyWithoutAssigneeInput
    messages?: MessageUncheckedCreateNestedManyWithoutAssigneeInput
  }

  export type AssigneeCreateOrConnectWithoutTaskStatusesInput = {
    where: AssigneeWhereUniqueInput
    create: XOR<AssigneeCreateWithoutTaskStatusesInput, AssigneeUncheckedCreateWithoutTaskStatusesInput>
  }

  export type WorkspaceStatusCreateWithoutAssigneeTaskStatusesInput = {
    name: string
    color: string
    statusType: string
    workspace: WorkspaceCreateNestedOneWithoutWorkspaceStatusesInput
  }

  export type WorkspaceStatusUncheckedCreateWithoutAssigneeTaskStatusesInput = {
    id?: number
    name: string
    color: string
    statusType: string
    workspaceId: number
  }

  export type WorkspaceStatusCreateOrConnectWithoutAssigneeTaskStatusesInput = {
    where: WorkspaceStatusWhereUniqueInput
    create: XOR<WorkspaceStatusCreateWithoutAssigneeTaskStatusesInput, WorkspaceStatusUncheckedCreateWithoutAssigneeTaskStatusesInput>
  }

  export type TaskUpsertWithoutAssigneeStatusesInput = {
    update: XOR<TaskUpdateWithoutAssigneeStatusesInput, TaskUncheckedUpdateWithoutAssigneeStatusesInput>
    create: XOR<TaskCreateWithoutAssigneeStatusesInput, TaskUncheckedCreateWithoutAssigneeStatusesInput>
    where?: TaskWhereInput
  }

  export type TaskUpdateToOneWithWhereWithoutAssigneeStatusesInput = {
    where?: TaskWhereInput
    data: XOR<TaskUpdateWithoutAssigneeStatusesInput, TaskUncheckedUpdateWithoutAssigneeStatusesInput>
  }

  export type TaskUpdateWithoutAssigneeStatusesInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    flagged?: BoolFieldUpdateOperationsInput | boolean
    deadlineType?: StringFieldUpdateOperationsInput | string
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    workspace?: WorkspaceUpdateOneRequiredWithoutTasksNestedInput
    source?: SourceUpdateOneRequiredWithoutTasksNestedInput
    tags?: TagUpdateManyWithoutTasksNestedInput
    messages?: MessageUpdateManyWithoutTaskNestedInput
    history?: TaskHistoryUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutAssigneeStatusesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    flagged?: BoolFieldUpdateOperationsInput | boolean
    deadlineType?: StringFieldUpdateOperationsInput | string
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    workspaceId?: IntFieldUpdateOperationsInput | number
    sourceId?: IntFieldUpdateOperationsInput | number
    tags?: TagUncheckedUpdateManyWithoutTasksNestedInput
    messages?: MessageUncheckedUpdateManyWithoutTaskNestedInput
    history?: TaskHistoryUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type AssigneeUpsertWithoutTaskStatusesInput = {
    update: XOR<AssigneeUpdateWithoutTaskStatusesInput, AssigneeUncheckedUpdateWithoutTaskStatusesInput>
    create: XOR<AssigneeCreateWithoutTaskStatusesInput, AssigneeUncheckedCreateWithoutTaskStatusesInput>
    where?: AssigneeWhereInput
  }

  export type AssigneeUpdateToOneWithWhereWithoutTaskStatusesInput = {
    where?: AssigneeWhereInput
    data: XOR<AssigneeUpdateWithoutTaskStatusesInput, AssigneeUncheckedUpdateWithoutTaskStatusesInput>
  }

  export type AssigneeUpdateWithoutTaskStatusesInput = {
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    users?: AssigneeUserUpdateManyWithoutAssigneeNestedInput
    messages?: MessageUpdateManyWithoutAssigneeNestedInput
  }

  export type AssigneeUncheckedUpdateWithoutTaskStatusesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    users?: AssigneeUserUncheckedUpdateManyWithoutAssigneeNestedInput
    messages?: MessageUncheckedUpdateManyWithoutAssigneeNestedInput
  }

  export type WorkspaceStatusUpsertWithoutAssigneeTaskStatusesInput = {
    update: XOR<WorkspaceStatusUpdateWithoutAssigneeTaskStatusesInput, WorkspaceStatusUncheckedUpdateWithoutAssigneeTaskStatusesInput>
    create: XOR<WorkspaceStatusCreateWithoutAssigneeTaskStatusesInput, WorkspaceStatusUncheckedCreateWithoutAssigneeTaskStatusesInput>
    where?: WorkspaceStatusWhereInput
  }

  export type WorkspaceStatusUpdateToOneWithWhereWithoutAssigneeTaskStatusesInput = {
    where?: WorkspaceStatusWhereInput
    data: XOR<WorkspaceStatusUpdateWithoutAssigneeTaskStatusesInput, WorkspaceStatusUncheckedUpdateWithoutAssigneeTaskStatusesInput>
  }

  export type WorkspaceStatusUpdateWithoutAssigneeTaskStatusesInput = {
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    statusType?: StringFieldUpdateOperationsInput | string
    workspace?: WorkspaceUpdateOneRequiredWithoutWorkspaceStatusesNestedInput
  }

  export type WorkspaceStatusUncheckedUpdateWithoutAssigneeTaskStatusesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    statusType?: StringFieldUpdateOperationsInput | string
    workspaceId?: IntFieldUpdateOperationsInput | number
  }

  export type AssigneeCreateWithoutUsersInput = {
    name: string
    color: string
    createdAt?: Date | string
    createdBy: number
    updatedAt?: Date | string
    updatedBy: number
    deletedAt?: Date | string | null
    deletedBy?: number | null
    taskStatuses?: AssigneeTaskStatusCreateNestedManyWithoutAssigneeInput
    messages?: MessageCreateNestedManyWithoutAssigneeInput
  }

  export type AssigneeUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
    color: string
    createdAt?: Date | string
    createdBy: number
    updatedAt?: Date | string
    updatedBy: number
    deletedAt?: Date | string | null
    deletedBy?: number | null
    taskStatuses?: AssigneeTaskStatusUncheckedCreateNestedManyWithoutAssigneeInput
    messages?: MessageUncheckedCreateNestedManyWithoutAssigneeInput
  }

  export type AssigneeCreateOrConnectWithoutUsersInput = {
    where: AssigneeWhereUniqueInput
    create: XOR<AssigneeCreateWithoutUsersInput, AssigneeUncheckedCreateWithoutUsersInput>
  }

  export type UserCreateWithoutAssigneesInput = {
    upn: string
    info?: NullableJsonNullValueInput | InputJsonValue
    permissions?: PermissionCreateNestedManyWithoutUserInput
    history?: TaskHistoryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAssigneesInput = {
    id?: number
    upn: string
    info?: NullableJsonNullValueInput | InputJsonValue
    permissions?: PermissionUncheckedCreateNestedManyWithoutUserInput
    history?: TaskHistoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAssigneesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAssigneesInput, UserUncheckedCreateWithoutAssigneesInput>
  }

  export type AssigneeUpsertWithoutUsersInput = {
    update: XOR<AssigneeUpdateWithoutUsersInput, AssigneeUncheckedUpdateWithoutUsersInput>
    create: XOR<AssigneeCreateWithoutUsersInput, AssigneeUncheckedCreateWithoutUsersInput>
    where?: AssigneeWhereInput
  }

  export type AssigneeUpdateToOneWithWhereWithoutUsersInput = {
    where?: AssigneeWhereInput
    data: XOR<AssigneeUpdateWithoutUsersInput, AssigneeUncheckedUpdateWithoutUsersInput>
  }

  export type AssigneeUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    taskStatuses?: AssigneeTaskStatusUpdateManyWithoutAssigneeNestedInput
    messages?: MessageUpdateManyWithoutAssigneeNestedInput
  }

  export type AssigneeUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    taskStatuses?: AssigneeTaskStatusUncheckedUpdateManyWithoutAssigneeNestedInput
    messages?: MessageUncheckedUpdateManyWithoutAssigneeNestedInput
  }

  export type UserUpsertWithoutAssigneesInput = {
    update: XOR<UserUpdateWithoutAssigneesInput, UserUncheckedUpdateWithoutAssigneesInput>
    create: XOR<UserCreateWithoutAssigneesInput, UserUncheckedCreateWithoutAssigneesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAssigneesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAssigneesInput, UserUncheckedUpdateWithoutAssigneesInput>
  }

  export type UserUpdateWithoutAssigneesInput = {
    upn?: StringFieldUpdateOperationsInput | string
    info?: NullableJsonNullValueInput | InputJsonValue
    permissions?: PermissionUpdateManyWithoutUserNestedInput
    history?: TaskHistoryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAssigneesInput = {
    id?: IntFieldUpdateOperationsInput | number
    upn?: StringFieldUpdateOperationsInput | string
    info?: NullableJsonNullValueInput | InputJsonValue
    permissions?: PermissionUncheckedUpdateManyWithoutUserNestedInput
    history?: TaskHistoryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AssigneeCreateWithoutMessagesInput = {
    name: string
    color: string
    createdAt?: Date | string
    createdBy: number
    updatedAt?: Date | string
    updatedBy: number
    deletedAt?: Date | string | null
    deletedBy?: number | null
    users?: AssigneeUserCreateNestedManyWithoutAssigneeInput
    taskStatuses?: AssigneeTaskStatusCreateNestedManyWithoutAssigneeInput
  }

  export type AssigneeUncheckedCreateWithoutMessagesInput = {
    id?: number
    name: string
    color: string
    createdAt?: Date | string
    createdBy: number
    updatedAt?: Date | string
    updatedBy: number
    deletedAt?: Date | string | null
    deletedBy?: number | null
    users?: AssigneeUserUncheckedCreateNestedManyWithoutAssigneeInput
    taskStatuses?: AssigneeTaskStatusUncheckedCreateNestedManyWithoutAssigneeInput
  }

  export type AssigneeCreateOrConnectWithoutMessagesInput = {
    where: AssigneeWhereUniqueInput
    create: XOR<AssigneeCreateWithoutMessagesInput, AssigneeUncheckedCreateWithoutMessagesInput>
  }

  export type TaskCreateWithoutMessagesInput = {
    title: string
    description?: string | null
    flagged?: boolean
    deadlineType: string
    issuedAt?: Date | string
    dueDate: Date | string
    notes?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    createdBy: number
    updatedAt?: Date | string
    updatedBy: number
    deletedAt?: Date | string | null
    deletedBy?: number | null
    workspace: WorkspaceCreateNestedOneWithoutTasksInput
    source: SourceCreateNestedOneWithoutTasksInput
    tags?: TagCreateNestedManyWithoutTasksInput
    assigneeStatuses?: AssigneeTaskStatusCreateNestedManyWithoutTaskInput
    history?: TaskHistoryCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutMessagesInput = {
    id?: number
    title: string
    description?: string | null
    flagged?: boolean
    deadlineType: string
    issuedAt?: Date | string
    dueDate: Date | string
    notes?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    createdBy: number
    updatedAt?: Date | string
    updatedBy: number
    deletedAt?: Date | string | null
    deletedBy?: number | null
    workspaceId: number
    sourceId: number
    tags?: TagUncheckedCreateNestedManyWithoutTasksInput
    assigneeStatuses?: AssigneeTaskStatusUncheckedCreateNestedManyWithoutTaskInput
    history?: TaskHistoryUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutMessagesInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutMessagesInput, TaskUncheckedCreateWithoutMessagesInput>
  }

  export type AssigneeUpsertWithoutMessagesInput = {
    update: XOR<AssigneeUpdateWithoutMessagesInput, AssigneeUncheckedUpdateWithoutMessagesInput>
    create: XOR<AssigneeCreateWithoutMessagesInput, AssigneeUncheckedCreateWithoutMessagesInput>
    where?: AssigneeWhereInput
  }

  export type AssigneeUpdateToOneWithWhereWithoutMessagesInput = {
    where?: AssigneeWhereInput
    data: XOR<AssigneeUpdateWithoutMessagesInput, AssigneeUncheckedUpdateWithoutMessagesInput>
  }

  export type AssigneeUpdateWithoutMessagesInput = {
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    users?: AssigneeUserUpdateManyWithoutAssigneeNestedInput
    taskStatuses?: AssigneeTaskStatusUpdateManyWithoutAssigneeNestedInput
  }

  export type AssigneeUncheckedUpdateWithoutMessagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    users?: AssigneeUserUncheckedUpdateManyWithoutAssigneeNestedInput
    taskStatuses?: AssigneeTaskStatusUncheckedUpdateManyWithoutAssigneeNestedInput
  }

  export type TaskUpsertWithoutMessagesInput = {
    update: XOR<TaskUpdateWithoutMessagesInput, TaskUncheckedUpdateWithoutMessagesInput>
    create: XOR<TaskCreateWithoutMessagesInput, TaskUncheckedCreateWithoutMessagesInput>
    where?: TaskWhereInput
  }

  export type TaskUpdateToOneWithWhereWithoutMessagesInput = {
    where?: TaskWhereInput
    data: XOR<TaskUpdateWithoutMessagesInput, TaskUncheckedUpdateWithoutMessagesInput>
  }

  export type TaskUpdateWithoutMessagesInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    flagged?: BoolFieldUpdateOperationsInput | boolean
    deadlineType?: StringFieldUpdateOperationsInput | string
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    workspace?: WorkspaceUpdateOneRequiredWithoutTasksNestedInput
    source?: SourceUpdateOneRequiredWithoutTasksNestedInput
    tags?: TagUpdateManyWithoutTasksNestedInput
    assigneeStatuses?: AssigneeTaskStatusUpdateManyWithoutTaskNestedInput
    history?: TaskHistoryUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutMessagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    flagged?: BoolFieldUpdateOperationsInput | boolean
    deadlineType?: StringFieldUpdateOperationsInput | string
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    workspaceId?: IntFieldUpdateOperationsInput | number
    sourceId?: IntFieldUpdateOperationsInput | number
    tags?: TagUncheckedUpdateManyWithoutTasksNestedInput
    assigneeStatuses?: AssigneeTaskStatusUncheckedUpdateManyWithoutTaskNestedInput
    history?: TaskHistoryUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type UserCreateWithoutPermissionsInput = {
    upn: string
    info?: NullableJsonNullValueInput | InputJsonValue
    assignees?: AssigneeUserCreateNestedManyWithoutUserInput
    history?: TaskHistoryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPermissionsInput = {
    id?: number
    upn: string
    info?: NullableJsonNullValueInput | InputJsonValue
    assignees?: AssigneeUserUncheckedCreateNestedManyWithoutUserInput
    history?: TaskHistoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPermissionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPermissionsInput, UserUncheckedCreateWithoutPermissionsInput>
  }

  export type WorkspaceCreateWithoutPermissionsInput = {
    title: string
    urlName: string
    icon?: string | null
    assigneeStatusEditable?: boolean
    createdAt?: Date | string
    createdBy: number
    updatedAt?: Date | string
    updatedBy: number
    deletedAt?: Date | string | null
    deletedBy?: number | null
    pikud: PikudCreateNestedOneWithoutWorkspacesInput
    tags?: TagCreateNestedManyWithoutWorkspaceInput
    tasks?: TaskCreateNestedManyWithoutWorkspaceInput
    workspaceStatuses?: WorkspaceStatusCreateNestedManyWithoutWorkspaceInput
    tasksHistory?: TaskHistoryCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceUncheckedCreateWithoutPermissionsInput = {
    id?: number
    title: string
    urlName: string
    icon?: string | null
    assigneeStatusEditable?: boolean
    createdAt?: Date | string
    createdBy: number
    updatedAt?: Date | string
    updatedBy: number
    deletedAt?: Date | string | null
    deletedBy?: number | null
    pikudId: number
    tags?: TagUncheckedCreateNestedManyWithoutWorkspaceInput
    tasks?: TaskUncheckedCreateNestedManyWithoutWorkspaceInput
    workspaceStatuses?: WorkspaceStatusUncheckedCreateNestedManyWithoutWorkspaceInput
    tasksHistory?: TaskHistoryUncheckedCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceCreateOrConnectWithoutPermissionsInput = {
    where: WorkspaceWhereUniqueInput
    create: XOR<WorkspaceCreateWithoutPermissionsInput, WorkspaceUncheckedCreateWithoutPermissionsInput>
  }

  export type UserUpsertWithoutPermissionsInput = {
    update: XOR<UserUpdateWithoutPermissionsInput, UserUncheckedUpdateWithoutPermissionsInput>
    create: XOR<UserCreateWithoutPermissionsInput, UserUncheckedCreateWithoutPermissionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPermissionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPermissionsInput, UserUncheckedUpdateWithoutPermissionsInput>
  }

  export type UserUpdateWithoutPermissionsInput = {
    upn?: StringFieldUpdateOperationsInput | string
    info?: NullableJsonNullValueInput | InputJsonValue
    assignees?: AssigneeUserUpdateManyWithoutUserNestedInput
    history?: TaskHistoryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPermissionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    upn?: StringFieldUpdateOperationsInput | string
    info?: NullableJsonNullValueInput | InputJsonValue
    assignees?: AssigneeUserUncheckedUpdateManyWithoutUserNestedInput
    history?: TaskHistoryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type WorkspaceUpsertWithoutPermissionsInput = {
    update: XOR<WorkspaceUpdateWithoutPermissionsInput, WorkspaceUncheckedUpdateWithoutPermissionsInput>
    create: XOR<WorkspaceCreateWithoutPermissionsInput, WorkspaceUncheckedCreateWithoutPermissionsInput>
    where?: WorkspaceWhereInput
  }

  export type WorkspaceUpdateToOneWithWhereWithoutPermissionsInput = {
    where?: WorkspaceWhereInput
    data: XOR<WorkspaceUpdateWithoutPermissionsInput, WorkspaceUncheckedUpdateWithoutPermissionsInput>
  }

  export type WorkspaceUpdateWithoutPermissionsInput = {
    title?: StringFieldUpdateOperationsInput | string
    urlName?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    assigneeStatusEditable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    pikud?: PikudUpdateOneRequiredWithoutWorkspacesNestedInput
    tags?: TagUpdateManyWithoutWorkspaceNestedInput
    tasks?: TaskUpdateManyWithoutWorkspaceNestedInput
    workspaceStatuses?: WorkspaceStatusUpdateManyWithoutWorkspaceNestedInput
    tasksHistory?: TaskHistoryUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceUncheckedUpdateWithoutPermissionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    urlName?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    assigneeStatusEditable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    pikudId?: IntFieldUpdateOperationsInput | number
    tags?: TagUncheckedUpdateManyWithoutWorkspaceNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutWorkspaceNestedInput
    workspaceStatuses?: WorkspaceStatusUncheckedUpdateManyWithoutWorkspaceNestedInput
    tasksHistory?: TaskHistoryUncheckedUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceCreateWithoutPikudInput = {
    title: string
    urlName: string
    icon?: string | null
    assigneeStatusEditable?: boolean
    createdAt?: Date | string
    createdBy: number
    updatedAt?: Date | string
    updatedBy: number
    deletedAt?: Date | string | null
    deletedBy?: number | null
    tags?: TagCreateNestedManyWithoutWorkspaceInput
    tasks?: TaskCreateNestedManyWithoutWorkspaceInput
    workspaceStatuses?: WorkspaceStatusCreateNestedManyWithoutWorkspaceInput
    permissions?: PermissionCreateNestedManyWithoutWorkspaceInput
    tasksHistory?: TaskHistoryCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceUncheckedCreateWithoutPikudInput = {
    id?: number
    title: string
    urlName: string
    icon?: string | null
    assigneeStatusEditable?: boolean
    createdAt?: Date | string
    createdBy: number
    updatedAt?: Date | string
    updatedBy: number
    deletedAt?: Date | string | null
    deletedBy?: number | null
    tags?: TagUncheckedCreateNestedManyWithoutWorkspaceInput
    tasks?: TaskUncheckedCreateNestedManyWithoutWorkspaceInput
    workspaceStatuses?: WorkspaceStatusUncheckedCreateNestedManyWithoutWorkspaceInput
    permissions?: PermissionUncheckedCreateNestedManyWithoutWorkspaceInput
    tasksHistory?: TaskHistoryUncheckedCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceCreateOrConnectWithoutPikudInput = {
    where: WorkspaceWhereUniqueInput
    create: XOR<WorkspaceCreateWithoutPikudInput, WorkspaceUncheckedCreateWithoutPikudInput>
  }

  export type WorkspaceCreateManyPikudInputEnvelope = {
    data: WorkspaceCreateManyPikudInput | WorkspaceCreateManyPikudInput[]
    skipDuplicates?: boolean
  }

  export type WorkspaceUpsertWithWhereUniqueWithoutPikudInput = {
    where: WorkspaceWhereUniqueInput
    update: XOR<WorkspaceUpdateWithoutPikudInput, WorkspaceUncheckedUpdateWithoutPikudInput>
    create: XOR<WorkspaceCreateWithoutPikudInput, WorkspaceUncheckedCreateWithoutPikudInput>
  }

  export type WorkspaceUpdateWithWhereUniqueWithoutPikudInput = {
    where: WorkspaceWhereUniqueInput
    data: XOR<WorkspaceUpdateWithoutPikudInput, WorkspaceUncheckedUpdateWithoutPikudInput>
  }

  export type WorkspaceUpdateManyWithWhereWithoutPikudInput = {
    where: WorkspaceScalarWhereInput
    data: XOR<WorkspaceUpdateManyMutationInput, WorkspaceUncheckedUpdateManyWithoutPikudInput>
  }

  export type WorkspaceScalarWhereInput = {
    AND?: WorkspaceScalarWhereInput | WorkspaceScalarWhereInput[]
    OR?: WorkspaceScalarWhereInput[]
    NOT?: WorkspaceScalarWhereInput | WorkspaceScalarWhereInput[]
    id?: IntFilter<"Workspace"> | number
    title?: StringFilter<"Workspace"> | string
    urlName?: StringFilter<"Workspace"> | string
    icon?: StringNullableFilter<"Workspace"> | string | null
    assigneeStatusEditable?: BoolFilter<"Workspace"> | boolean
    createdAt?: DateTimeFilter<"Workspace"> | Date | string
    createdBy?: IntFilter<"Workspace"> | number
    updatedAt?: DateTimeFilter<"Workspace"> | Date | string
    updatedBy?: IntFilter<"Workspace"> | number
    deletedAt?: DateTimeNullableFilter<"Workspace"> | Date | string | null
    deletedBy?: IntNullableFilter<"Workspace"> | number | null
    pikudId?: IntFilter<"Workspace"> | number
  }

  export type TaskCreateWithoutSourceInput = {
    title: string
    description?: string | null
    flagged?: boolean
    deadlineType: string
    issuedAt?: Date | string
    dueDate: Date | string
    notes?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    createdBy: number
    updatedAt?: Date | string
    updatedBy: number
    deletedAt?: Date | string | null
    deletedBy?: number | null
    workspace: WorkspaceCreateNestedOneWithoutTasksInput
    tags?: TagCreateNestedManyWithoutTasksInput
    assigneeStatuses?: AssigneeTaskStatusCreateNestedManyWithoutTaskInput
    messages?: MessageCreateNestedManyWithoutTaskInput
    history?: TaskHistoryCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutSourceInput = {
    id?: number
    title: string
    description?: string | null
    flagged?: boolean
    deadlineType: string
    issuedAt?: Date | string
    dueDate: Date | string
    notes?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    createdBy: number
    updatedAt?: Date | string
    updatedBy: number
    deletedAt?: Date | string | null
    deletedBy?: number | null
    workspaceId: number
    tags?: TagUncheckedCreateNestedManyWithoutTasksInput
    assigneeStatuses?: AssigneeTaskStatusUncheckedCreateNestedManyWithoutTaskInput
    messages?: MessageUncheckedCreateNestedManyWithoutTaskInput
    history?: TaskHistoryUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutSourceInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutSourceInput, TaskUncheckedCreateWithoutSourceInput>
  }

  export type TaskCreateManySourceInputEnvelope = {
    data: TaskCreateManySourceInput | TaskCreateManySourceInput[]
    skipDuplicates?: boolean
  }

  export type TaskUpsertWithWhereUniqueWithoutSourceInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutSourceInput, TaskUncheckedUpdateWithoutSourceInput>
    create: XOR<TaskCreateWithoutSourceInput, TaskUncheckedCreateWithoutSourceInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutSourceInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutSourceInput, TaskUncheckedUpdateWithoutSourceInput>
  }

  export type TaskUpdateManyWithWhereWithoutSourceInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutSourceInput>
  }

  export type TaskScalarWhereInput = {
    AND?: TaskScalarWhereInput | TaskScalarWhereInput[]
    OR?: TaskScalarWhereInput[]
    NOT?: TaskScalarWhereInput | TaskScalarWhereInput[]
    id?: IntFilter<"Task"> | number
    title?: StringFilter<"Task"> | string
    description?: StringNullableFilter<"Task"> | string | null
    flagged?: BoolFilter<"Task"> | boolean
    deadlineType?: StringFilter<"Task"> | string
    issuedAt?: DateTimeFilter<"Task"> | Date | string
    dueDate?: DateTimeFilter<"Task"> | Date | string
    notes?: JsonNullableFilter<"Task">
    createdAt?: DateTimeFilter<"Task"> | Date | string
    createdBy?: IntFilter<"Task"> | number
    updatedAt?: DateTimeFilter<"Task"> | Date | string
    updatedBy?: IntFilter<"Task"> | number
    deletedAt?: DateTimeNullableFilter<"Task"> | Date | string | null
    deletedBy?: IntNullableFilter<"Task"> | number | null
    workspaceId?: IntFilter<"Task"> | number
    sourceId?: IntFilter<"Task"> | number
  }

  export type WorkspaceCreateWithoutTagsInput = {
    title: string
    urlName: string
    icon?: string | null
    assigneeStatusEditable?: boolean
    createdAt?: Date | string
    createdBy: number
    updatedAt?: Date | string
    updatedBy: number
    deletedAt?: Date | string | null
    deletedBy?: number | null
    pikud: PikudCreateNestedOneWithoutWorkspacesInput
    tasks?: TaskCreateNestedManyWithoutWorkspaceInput
    workspaceStatuses?: WorkspaceStatusCreateNestedManyWithoutWorkspaceInput
    permissions?: PermissionCreateNestedManyWithoutWorkspaceInput
    tasksHistory?: TaskHistoryCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceUncheckedCreateWithoutTagsInput = {
    id?: number
    title: string
    urlName: string
    icon?: string | null
    assigneeStatusEditable?: boolean
    createdAt?: Date | string
    createdBy: number
    updatedAt?: Date | string
    updatedBy: number
    deletedAt?: Date | string | null
    deletedBy?: number | null
    pikudId: number
    tasks?: TaskUncheckedCreateNestedManyWithoutWorkspaceInput
    workspaceStatuses?: WorkspaceStatusUncheckedCreateNestedManyWithoutWorkspaceInput
    permissions?: PermissionUncheckedCreateNestedManyWithoutWorkspaceInput
    tasksHistory?: TaskHistoryUncheckedCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceCreateOrConnectWithoutTagsInput = {
    where: WorkspaceWhereUniqueInput
    create: XOR<WorkspaceCreateWithoutTagsInput, WorkspaceUncheckedCreateWithoutTagsInput>
  }

  export type TaskCreateWithoutTagsInput = {
    title: string
    description?: string | null
    flagged?: boolean
    deadlineType: string
    issuedAt?: Date | string
    dueDate: Date | string
    notes?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    createdBy: number
    updatedAt?: Date | string
    updatedBy: number
    deletedAt?: Date | string | null
    deletedBy?: number | null
    workspace: WorkspaceCreateNestedOneWithoutTasksInput
    source: SourceCreateNestedOneWithoutTasksInput
    assigneeStatuses?: AssigneeTaskStatusCreateNestedManyWithoutTaskInput
    messages?: MessageCreateNestedManyWithoutTaskInput
    history?: TaskHistoryCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutTagsInput = {
    id?: number
    title: string
    description?: string | null
    flagged?: boolean
    deadlineType: string
    issuedAt?: Date | string
    dueDate: Date | string
    notes?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    createdBy: number
    updatedAt?: Date | string
    updatedBy: number
    deletedAt?: Date | string | null
    deletedBy?: number | null
    workspaceId: number
    sourceId: number
    assigneeStatuses?: AssigneeTaskStatusUncheckedCreateNestedManyWithoutTaskInput
    messages?: MessageUncheckedCreateNestedManyWithoutTaskInput
    history?: TaskHistoryUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutTagsInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutTagsInput, TaskUncheckedCreateWithoutTagsInput>
  }

  export type WorkspaceUpsertWithoutTagsInput = {
    update: XOR<WorkspaceUpdateWithoutTagsInput, WorkspaceUncheckedUpdateWithoutTagsInput>
    create: XOR<WorkspaceCreateWithoutTagsInput, WorkspaceUncheckedCreateWithoutTagsInput>
    where?: WorkspaceWhereInput
  }

  export type WorkspaceUpdateToOneWithWhereWithoutTagsInput = {
    where?: WorkspaceWhereInput
    data: XOR<WorkspaceUpdateWithoutTagsInput, WorkspaceUncheckedUpdateWithoutTagsInput>
  }

  export type WorkspaceUpdateWithoutTagsInput = {
    title?: StringFieldUpdateOperationsInput | string
    urlName?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    assigneeStatusEditable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    pikud?: PikudUpdateOneRequiredWithoutWorkspacesNestedInput
    tasks?: TaskUpdateManyWithoutWorkspaceNestedInput
    workspaceStatuses?: WorkspaceStatusUpdateManyWithoutWorkspaceNestedInput
    permissions?: PermissionUpdateManyWithoutWorkspaceNestedInput
    tasksHistory?: TaskHistoryUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceUncheckedUpdateWithoutTagsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    urlName?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    assigneeStatusEditable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    pikudId?: IntFieldUpdateOperationsInput | number
    tasks?: TaskUncheckedUpdateManyWithoutWorkspaceNestedInput
    workspaceStatuses?: WorkspaceStatusUncheckedUpdateManyWithoutWorkspaceNestedInput
    permissions?: PermissionUncheckedUpdateManyWithoutWorkspaceNestedInput
    tasksHistory?: TaskHistoryUncheckedUpdateManyWithoutWorkspaceNestedInput
  }

  export type TaskUpsertWithWhereUniqueWithoutTagsInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutTagsInput, TaskUncheckedUpdateWithoutTagsInput>
    create: XOR<TaskCreateWithoutTagsInput, TaskUncheckedCreateWithoutTagsInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutTagsInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutTagsInput, TaskUncheckedUpdateWithoutTagsInput>
  }

  export type TaskUpdateManyWithWhereWithoutTagsInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutTagsInput>
  }

  export type WorkspaceCreateWithoutTasksInput = {
    title: string
    urlName: string
    icon?: string | null
    assigneeStatusEditable?: boolean
    createdAt?: Date | string
    createdBy: number
    updatedAt?: Date | string
    updatedBy: number
    deletedAt?: Date | string | null
    deletedBy?: number | null
    pikud: PikudCreateNestedOneWithoutWorkspacesInput
    tags?: TagCreateNestedManyWithoutWorkspaceInput
    workspaceStatuses?: WorkspaceStatusCreateNestedManyWithoutWorkspaceInput
    permissions?: PermissionCreateNestedManyWithoutWorkspaceInput
    tasksHistory?: TaskHistoryCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceUncheckedCreateWithoutTasksInput = {
    id?: number
    title: string
    urlName: string
    icon?: string | null
    assigneeStatusEditable?: boolean
    createdAt?: Date | string
    createdBy: number
    updatedAt?: Date | string
    updatedBy: number
    deletedAt?: Date | string | null
    deletedBy?: number | null
    pikudId: number
    tags?: TagUncheckedCreateNestedManyWithoutWorkspaceInput
    workspaceStatuses?: WorkspaceStatusUncheckedCreateNestedManyWithoutWorkspaceInput
    permissions?: PermissionUncheckedCreateNestedManyWithoutWorkspaceInput
    tasksHistory?: TaskHistoryUncheckedCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceCreateOrConnectWithoutTasksInput = {
    where: WorkspaceWhereUniqueInput
    create: XOR<WorkspaceCreateWithoutTasksInput, WorkspaceUncheckedCreateWithoutTasksInput>
  }

  export type SourceCreateWithoutTasksInput = {
    name: string
    createdAt?: Date | string
    createdBy: number
    updatedAt?: Date | string
    updatedBy: number
    deletedAt?: Date | string | null
    deletedBy?: number | null
  }

  export type SourceUncheckedCreateWithoutTasksInput = {
    id?: number
    name: string
    createdAt?: Date | string
    createdBy: number
    updatedAt?: Date | string
    updatedBy: number
    deletedAt?: Date | string | null
    deletedBy?: number | null
  }

  export type SourceCreateOrConnectWithoutTasksInput = {
    where: SourceWhereUniqueInput
    create: XOR<SourceCreateWithoutTasksInput, SourceUncheckedCreateWithoutTasksInput>
  }

  export type TagCreateWithoutTasksInput = {
    name: string
    createdAt?: Date | string
    createdBy: number
    updatedAt?: Date | string
    updatedBy: number
    workspace: WorkspaceCreateNestedOneWithoutTagsInput
  }

  export type TagUncheckedCreateWithoutTasksInput = {
    id?: number
    name: string
    createdAt?: Date | string
    createdBy: number
    updatedAt?: Date | string
    updatedBy: number
    workspaceId: number
  }

  export type TagCreateOrConnectWithoutTasksInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutTasksInput, TagUncheckedCreateWithoutTasksInput>
  }

  export type AssigneeTaskStatusCreateWithoutTaskInput = {
    assignee: AssigneeCreateNestedOneWithoutTaskStatusesInput
    status: WorkspaceStatusCreateNestedOneWithoutAssigneeTaskStatusesInput
  }

  export type AssigneeTaskStatusUncheckedCreateWithoutTaskInput = {
    assigneeId: number
    statusId: number
  }

  export type AssigneeTaskStatusCreateOrConnectWithoutTaskInput = {
    where: AssigneeTaskStatusWhereUniqueInput
    create: XOR<AssigneeTaskStatusCreateWithoutTaskInput, AssigneeTaskStatusUncheckedCreateWithoutTaskInput>
  }

  export type AssigneeTaskStatusCreateManyTaskInputEnvelope = {
    data: AssigneeTaskStatusCreateManyTaskInput | AssigneeTaskStatusCreateManyTaskInput[]
    skipDuplicates?: boolean
  }

  export type MessageCreateWithoutTaskInput = {
    content: string
    createdAt?: Date | string
    createdBy: number
    updatedAt?: Date | string
    updatedBy: number
    deletedAt?: Date | string | null
    deletedBy?: number | null
    assignee: AssigneeCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateWithoutTaskInput = {
    id?: number
    content: string
    assigneeId: number
    createdAt?: Date | string
    createdBy: number
    updatedAt?: Date | string
    updatedBy: number
    deletedAt?: Date | string | null
    deletedBy?: number | null
  }

  export type MessageCreateOrConnectWithoutTaskInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutTaskInput, MessageUncheckedCreateWithoutTaskInput>
  }

  export type MessageCreateManyTaskInputEnvelope = {
    data: MessageCreateManyTaskInput | MessageCreateManyTaskInput[]
    skipDuplicates?: boolean
  }

  export type TaskHistoryCreateWithoutTaskInput = {
    action: $Enums.HistoryAction
    field: string
    value?: string | null
    timestamp?: Date | string
    workspace: WorkspaceCreateNestedOneWithoutTasksHistoryInput
    user: UserCreateNestedOneWithoutHistoryInput
  }

  export type TaskHistoryUncheckedCreateWithoutTaskInput = {
    id?: number
    action: $Enums.HistoryAction
    field: string
    value?: string | null
    timestamp?: Date | string
    workspaceId: number
    userId: number
  }

  export type TaskHistoryCreateOrConnectWithoutTaskInput = {
    where: TaskHistoryWhereUniqueInput
    create: XOR<TaskHistoryCreateWithoutTaskInput, TaskHistoryUncheckedCreateWithoutTaskInput>
  }

  export type TaskHistoryCreateManyTaskInputEnvelope = {
    data: TaskHistoryCreateManyTaskInput | TaskHistoryCreateManyTaskInput[]
    skipDuplicates?: boolean
  }

  export type WorkspaceUpsertWithoutTasksInput = {
    update: XOR<WorkspaceUpdateWithoutTasksInput, WorkspaceUncheckedUpdateWithoutTasksInput>
    create: XOR<WorkspaceCreateWithoutTasksInput, WorkspaceUncheckedCreateWithoutTasksInput>
    where?: WorkspaceWhereInput
  }

  export type WorkspaceUpdateToOneWithWhereWithoutTasksInput = {
    where?: WorkspaceWhereInput
    data: XOR<WorkspaceUpdateWithoutTasksInput, WorkspaceUncheckedUpdateWithoutTasksInput>
  }

  export type WorkspaceUpdateWithoutTasksInput = {
    title?: StringFieldUpdateOperationsInput | string
    urlName?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    assigneeStatusEditable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    pikud?: PikudUpdateOneRequiredWithoutWorkspacesNestedInput
    tags?: TagUpdateManyWithoutWorkspaceNestedInput
    workspaceStatuses?: WorkspaceStatusUpdateManyWithoutWorkspaceNestedInput
    permissions?: PermissionUpdateManyWithoutWorkspaceNestedInput
    tasksHistory?: TaskHistoryUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceUncheckedUpdateWithoutTasksInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    urlName?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    assigneeStatusEditable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    pikudId?: IntFieldUpdateOperationsInput | number
    tags?: TagUncheckedUpdateManyWithoutWorkspaceNestedInput
    workspaceStatuses?: WorkspaceStatusUncheckedUpdateManyWithoutWorkspaceNestedInput
    permissions?: PermissionUncheckedUpdateManyWithoutWorkspaceNestedInput
    tasksHistory?: TaskHistoryUncheckedUpdateManyWithoutWorkspaceNestedInput
  }

  export type SourceUpsertWithoutTasksInput = {
    update: XOR<SourceUpdateWithoutTasksInput, SourceUncheckedUpdateWithoutTasksInput>
    create: XOR<SourceCreateWithoutTasksInput, SourceUncheckedCreateWithoutTasksInput>
    where?: SourceWhereInput
  }

  export type SourceUpdateToOneWithWhereWithoutTasksInput = {
    where?: SourceWhereInput
    data: XOR<SourceUpdateWithoutTasksInput, SourceUncheckedUpdateWithoutTasksInput>
  }

  export type SourceUpdateWithoutTasksInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SourceUncheckedUpdateWithoutTasksInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TagUpsertWithWhereUniqueWithoutTasksInput = {
    where: TagWhereUniqueInput
    update: XOR<TagUpdateWithoutTasksInput, TagUncheckedUpdateWithoutTasksInput>
    create: XOR<TagCreateWithoutTasksInput, TagUncheckedCreateWithoutTasksInput>
  }

  export type TagUpdateWithWhereUniqueWithoutTasksInput = {
    where: TagWhereUniqueInput
    data: XOR<TagUpdateWithoutTasksInput, TagUncheckedUpdateWithoutTasksInput>
  }

  export type TagUpdateManyWithWhereWithoutTasksInput = {
    where: TagScalarWhereInput
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyWithoutTasksInput>
  }

  export type TagScalarWhereInput = {
    AND?: TagScalarWhereInput | TagScalarWhereInput[]
    OR?: TagScalarWhereInput[]
    NOT?: TagScalarWhereInput | TagScalarWhereInput[]
    id?: IntFilter<"Tag"> | number
    name?: StringFilter<"Tag"> | string
    createdAt?: DateTimeFilter<"Tag"> | Date | string
    createdBy?: IntFilter<"Tag"> | number
    updatedAt?: DateTimeFilter<"Tag"> | Date | string
    updatedBy?: IntFilter<"Tag"> | number
    workspaceId?: IntFilter<"Tag"> | number
  }

  export type AssigneeTaskStatusUpsertWithWhereUniqueWithoutTaskInput = {
    where: AssigneeTaskStatusWhereUniqueInput
    update: XOR<AssigneeTaskStatusUpdateWithoutTaskInput, AssigneeTaskStatusUncheckedUpdateWithoutTaskInput>
    create: XOR<AssigneeTaskStatusCreateWithoutTaskInput, AssigneeTaskStatusUncheckedCreateWithoutTaskInput>
  }

  export type AssigneeTaskStatusUpdateWithWhereUniqueWithoutTaskInput = {
    where: AssigneeTaskStatusWhereUniqueInput
    data: XOR<AssigneeTaskStatusUpdateWithoutTaskInput, AssigneeTaskStatusUncheckedUpdateWithoutTaskInput>
  }

  export type AssigneeTaskStatusUpdateManyWithWhereWithoutTaskInput = {
    where: AssigneeTaskStatusScalarWhereInput
    data: XOR<AssigneeTaskStatusUpdateManyMutationInput, AssigneeTaskStatusUncheckedUpdateManyWithoutTaskInput>
  }

  export type MessageUpsertWithWhereUniqueWithoutTaskInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutTaskInput, MessageUncheckedUpdateWithoutTaskInput>
    create: XOR<MessageCreateWithoutTaskInput, MessageUncheckedCreateWithoutTaskInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutTaskInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutTaskInput, MessageUncheckedUpdateWithoutTaskInput>
  }

  export type MessageUpdateManyWithWhereWithoutTaskInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutTaskInput>
  }

  export type TaskHistoryUpsertWithWhereUniqueWithoutTaskInput = {
    where: TaskHistoryWhereUniqueInput
    update: XOR<TaskHistoryUpdateWithoutTaskInput, TaskHistoryUncheckedUpdateWithoutTaskInput>
    create: XOR<TaskHistoryCreateWithoutTaskInput, TaskHistoryUncheckedCreateWithoutTaskInput>
  }

  export type TaskHistoryUpdateWithWhereUniqueWithoutTaskInput = {
    where: TaskHistoryWhereUniqueInput
    data: XOR<TaskHistoryUpdateWithoutTaskInput, TaskHistoryUncheckedUpdateWithoutTaskInput>
  }

  export type TaskHistoryUpdateManyWithWhereWithoutTaskInput = {
    where: TaskHistoryScalarWhereInput
    data: XOR<TaskHistoryUpdateManyMutationInput, TaskHistoryUncheckedUpdateManyWithoutTaskInput>
  }

  export type TaskHistoryScalarWhereInput = {
    AND?: TaskHistoryScalarWhereInput | TaskHistoryScalarWhereInput[]
    OR?: TaskHistoryScalarWhereInput[]
    NOT?: TaskHistoryScalarWhereInput | TaskHistoryScalarWhereInput[]
    id?: IntFilter<"TaskHistory"> | number
    action?: EnumHistoryActionFilter<"TaskHistory"> | $Enums.HistoryAction
    field?: StringFilter<"TaskHistory"> | string
    value?: StringNullableFilter<"TaskHistory"> | string | null
    timestamp?: DateTimeFilter<"TaskHistory"> | Date | string
    taskId?: IntFilter<"TaskHistory"> | number
    workspaceId?: IntFilter<"TaskHistory"> | number
    userId?: IntFilter<"TaskHistory"> | number
  }

  export type TaskCreateWithoutHistoryInput = {
    title: string
    description?: string | null
    flagged?: boolean
    deadlineType: string
    issuedAt?: Date | string
    dueDate: Date | string
    notes?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    createdBy: number
    updatedAt?: Date | string
    updatedBy: number
    deletedAt?: Date | string | null
    deletedBy?: number | null
    workspace: WorkspaceCreateNestedOneWithoutTasksInput
    source: SourceCreateNestedOneWithoutTasksInput
    tags?: TagCreateNestedManyWithoutTasksInput
    assigneeStatuses?: AssigneeTaskStatusCreateNestedManyWithoutTaskInput
    messages?: MessageCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutHistoryInput = {
    id?: number
    title: string
    description?: string | null
    flagged?: boolean
    deadlineType: string
    issuedAt?: Date | string
    dueDate: Date | string
    notes?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    createdBy: number
    updatedAt?: Date | string
    updatedBy: number
    deletedAt?: Date | string | null
    deletedBy?: number | null
    workspaceId: number
    sourceId: number
    tags?: TagUncheckedCreateNestedManyWithoutTasksInput
    assigneeStatuses?: AssigneeTaskStatusUncheckedCreateNestedManyWithoutTaskInput
    messages?: MessageUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutHistoryInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutHistoryInput, TaskUncheckedCreateWithoutHistoryInput>
  }

  export type WorkspaceCreateWithoutTasksHistoryInput = {
    title: string
    urlName: string
    icon?: string | null
    assigneeStatusEditable?: boolean
    createdAt?: Date | string
    createdBy: number
    updatedAt?: Date | string
    updatedBy: number
    deletedAt?: Date | string | null
    deletedBy?: number | null
    pikud: PikudCreateNestedOneWithoutWorkspacesInput
    tags?: TagCreateNestedManyWithoutWorkspaceInput
    tasks?: TaskCreateNestedManyWithoutWorkspaceInput
    workspaceStatuses?: WorkspaceStatusCreateNestedManyWithoutWorkspaceInput
    permissions?: PermissionCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceUncheckedCreateWithoutTasksHistoryInput = {
    id?: number
    title: string
    urlName: string
    icon?: string | null
    assigneeStatusEditable?: boolean
    createdAt?: Date | string
    createdBy: number
    updatedAt?: Date | string
    updatedBy: number
    deletedAt?: Date | string | null
    deletedBy?: number | null
    pikudId: number
    tags?: TagUncheckedCreateNestedManyWithoutWorkspaceInput
    tasks?: TaskUncheckedCreateNestedManyWithoutWorkspaceInput
    workspaceStatuses?: WorkspaceStatusUncheckedCreateNestedManyWithoutWorkspaceInput
    permissions?: PermissionUncheckedCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceCreateOrConnectWithoutTasksHistoryInput = {
    where: WorkspaceWhereUniqueInput
    create: XOR<WorkspaceCreateWithoutTasksHistoryInput, WorkspaceUncheckedCreateWithoutTasksHistoryInput>
  }

  export type UserCreateWithoutHistoryInput = {
    upn: string
    info?: NullableJsonNullValueInput | InputJsonValue
    assignees?: AssigneeUserCreateNestedManyWithoutUserInput
    permissions?: PermissionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutHistoryInput = {
    id?: number
    upn: string
    info?: NullableJsonNullValueInput | InputJsonValue
    assignees?: AssigneeUserUncheckedCreateNestedManyWithoutUserInput
    permissions?: PermissionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutHistoryInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutHistoryInput, UserUncheckedCreateWithoutHistoryInput>
  }

  export type TaskUpsertWithoutHistoryInput = {
    update: XOR<TaskUpdateWithoutHistoryInput, TaskUncheckedUpdateWithoutHistoryInput>
    create: XOR<TaskCreateWithoutHistoryInput, TaskUncheckedCreateWithoutHistoryInput>
    where?: TaskWhereInput
  }

  export type TaskUpdateToOneWithWhereWithoutHistoryInput = {
    where?: TaskWhereInput
    data: XOR<TaskUpdateWithoutHistoryInput, TaskUncheckedUpdateWithoutHistoryInput>
  }

  export type TaskUpdateWithoutHistoryInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    flagged?: BoolFieldUpdateOperationsInput | boolean
    deadlineType?: StringFieldUpdateOperationsInput | string
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    workspace?: WorkspaceUpdateOneRequiredWithoutTasksNestedInput
    source?: SourceUpdateOneRequiredWithoutTasksNestedInput
    tags?: TagUpdateManyWithoutTasksNestedInput
    assigneeStatuses?: AssigneeTaskStatusUpdateManyWithoutTaskNestedInput
    messages?: MessageUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutHistoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    flagged?: BoolFieldUpdateOperationsInput | boolean
    deadlineType?: StringFieldUpdateOperationsInput | string
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    workspaceId?: IntFieldUpdateOperationsInput | number
    sourceId?: IntFieldUpdateOperationsInput | number
    tags?: TagUncheckedUpdateManyWithoutTasksNestedInput
    assigneeStatuses?: AssigneeTaskStatusUncheckedUpdateManyWithoutTaskNestedInput
    messages?: MessageUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type WorkspaceUpsertWithoutTasksHistoryInput = {
    update: XOR<WorkspaceUpdateWithoutTasksHistoryInput, WorkspaceUncheckedUpdateWithoutTasksHistoryInput>
    create: XOR<WorkspaceCreateWithoutTasksHistoryInput, WorkspaceUncheckedCreateWithoutTasksHistoryInput>
    where?: WorkspaceWhereInput
  }

  export type WorkspaceUpdateToOneWithWhereWithoutTasksHistoryInput = {
    where?: WorkspaceWhereInput
    data: XOR<WorkspaceUpdateWithoutTasksHistoryInput, WorkspaceUncheckedUpdateWithoutTasksHistoryInput>
  }

  export type WorkspaceUpdateWithoutTasksHistoryInput = {
    title?: StringFieldUpdateOperationsInput | string
    urlName?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    assigneeStatusEditable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    pikud?: PikudUpdateOneRequiredWithoutWorkspacesNestedInput
    tags?: TagUpdateManyWithoutWorkspaceNestedInput
    tasks?: TaskUpdateManyWithoutWorkspaceNestedInput
    workspaceStatuses?: WorkspaceStatusUpdateManyWithoutWorkspaceNestedInput
    permissions?: PermissionUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceUncheckedUpdateWithoutTasksHistoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    urlName?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    assigneeStatusEditable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    pikudId?: IntFieldUpdateOperationsInput | number
    tags?: TagUncheckedUpdateManyWithoutWorkspaceNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutWorkspaceNestedInput
    workspaceStatuses?: WorkspaceStatusUncheckedUpdateManyWithoutWorkspaceNestedInput
    permissions?: PermissionUncheckedUpdateManyWithoutWorkspaceNestedInput
  }

  export type UserUpsertWithoutHistoryInput = {
    update: XOR<UserUpdateWithoutHistoryInput, UserUncheckedUpdateWithoutHistoryInput>
    create: XOR<UserCreateWithoutHistoryInput, UserUncheckedCreateWithoutHistoryInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutHistoryInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutHistoryInput, UserUncheckedUpdateWithoutHistoryInput>
  }

  export type UserUpdateWithoutHistoryInput = {
    upn?: StringFieldUpdateOperationsInput | string
    info?: NullableJsonNullValueInput | InputJsonValue
    assignees?: AssigneeUserUpdateManyWithoutUserNestedInput
    permissions?: PermissionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutHistoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    upn?: StringFieldUpdateOperationsInput | string
    info?: NullableJsonNullValueInput | InputJsonValue
    assignees?: AssigneeUserUncheckedUpdateManyWithoutUserNestedInput
    permissions?: PermissionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AssigneeUserCreateWithoutUserInput = {
    assignee: AssigneeCreateNestedOneWithoutUsersInput
  }

  export type AssigneeUserUncheckedCreateWithoutUserInput = {
    assigneeId: number
  }

  export type AssigneeUserCreateOrConnectWithoutUserInput = {
    where: AssigneeUserWhereUniqueInput
    create: XOR<AssigneeUserCreateWithoutUserInput, AssigneeUserUncheckedCreateWithoutUserInput>
  }

  export type AssigneeUserCreateManyUserInputEnvelope = {
    data: AssigneeUserCreateManyUserInput | AssigneeUserCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PermissionCreateWithoutUserInput = {
    type: $Enums.PermissionType
    workspace: WorkspaceCreateNestedOneWithoutPermissionsInput
  }

  export type PermissionUncheckedCreateWithoutUserInput = {
    workspaceId: number
    type: $Enums.PermissionType
  }

  export type PermissionCreateOrConnectWithoutUserInput = {
    where: PermissionWhereUniqueInput
    create: XOR<PermissionCreateWithoutUserInput, PermissionUncheckedCreateWithoutUserInput>
  }

  export type PermissionCreateManyUserInputEnvelope = {
    data: PermissionCreateManyUserInput | PermissionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TaskHistoryCreateWithoutUserInput = {
    action: $Enums.HistoryAction
    field: string
    value?: string | null
    timestamp?: Date | string
    task: TaskCreateNestedOneWithoutHistoryInput
    workspace: WorkspaceCreateNestedOneWithoutTasksHistoryInput
  }

  export type TaskHistoryUncheckedCreateWithoutUserInput = {
    id?: number
    action: $Enums.HistoryAction
    field: string
    value?: string | null
    timestamp?: Date | string
    taskId: number
    workspaceId: number
  }

  export type TaskHistoryCreateOrConnectWithoutUserInput = {
    where: TaskHistoryWhereUniqueInput
    create: XOR<TaskHistoryCreateWithoutUserInput, TaskHistoryUncheckedCreateWithoutUserInput>
  }

  export type TaskHistoryCreateManyUserInputEnvelope = {
    data: TaskHistoryCreateManyUserInput | TaskHistoryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AssigneeUserUpsertWithWhereUniqueWithoutUserInput = {
    where: AssigneeUserWhereUniqueInput
    update: XOR<AssigneeUserUpdateWithoutUserInput, AssigneeUserUncheckedUpdateWithoutUserInput>
    create: XOR<AssigneeUserCreateWithoutUserInput, AssigneeUserUncheckedCreateWithoutUserInput>
  }

  export type AssigneeUserUpdateWithWhereUniqueWithoutUserInput = {
    where: AssigneeUserWhereUniqueInput
    data: XOR<AssigneeUserUpdateWithoutUserInput, AssigneeUserUncheckedUpdateWithoutUserInput>
  }

  export type AssigneeUserUpdateManyWithWhereWithoutUserInput = {
    where: AssigneeUserScalarWhereInput
    data: XOR<AssigneeUserUpdateManyMutationInput, AssigneeUserUncheckedUpdateManyWithoutUserInput>
  }

  export type PermissionUpsertWithWhereUniqueWithoutUserInput = {
    where: PermissionWhereUniqueInput
    update: XOR<PermissionUpdateWithoutUserInput, PermissionUncheckedUpdateWithoutUserInput>
    create: XOR<PermissionCreateWithoutUserInput, PermissionUncheckedCreateWithoutUserInput>
  }

  export type PermissionUpdateWithWhereUniqueWithoutUserInput = {
    where: PermissionWhereUniqueInput
    data: XOR<PermissionUpdateWithoutUserInput, PermissionUncheckedUpdateWithoutUserInput>
  }

  export type PermissionUpdateManyWithWhereWithoutUserInput = {
    where: PermissionScalarWhereInput
    data: XOR<PermissionUpdateManyMutationInput, PermissionUncheckedUpdateManyWithoutUserInput>
  }

  export type PermissionScalarWhereInput = {
    AND?: PermissionScalarWhereInput | PermissionScalarWhereInput[]
    OR?: PermissionScalarWhereInput[]
    NOT?: PermissionScalarWhereInput | PermissionScalarWhereInput[]
    userId?: IntFilter<"Permission"> | number
    workspaceId?: IntFilter<"Permission"> | number
    type?: EnumPermissionTypeFilter<"Permission"> | $Enums.PermissionType
  }

  export type TaskHistoryUpsertWithWhereUniqueWithoutUserInput = {
    where: TaskHistoryWhereUniqueInput
    update: XOR<TaskHistoryUpdateWithoutUserInput, TaskHistoryUncheckedUpdateWithoutUserInput>
    create: XOR<TaskHistoryCreateWithoutUserInput, TaskHistoryUncheckedCreateWithoutUserInput>
  }

  export type TaskHistoryUpdateWithWhereUniqueWithoutUserInput = {
    where: TaskHistoryWhereUniqueInput
    data: XOR<TaskHistoryUpdateWithoutUserInput, TaskHistoryUncheckedUpdateWithoutUserInput>
  }

  export type TaskHistoryUpdateManyWithWhereWithoutUserInput = {
    where: TaskHistoryScalarWhereInput
    data: XOR<TaskHistoryUpdateManyMutationInput, TaskHistoryUncheckedUpdateManyWithoutUserInput>
  }

  export type PikudCreateWithoutWorkspacesInput = {
    name: string
    icon?: string | null
    createdAt?: Date | string
    createdBy: number
    updatedAt?: Date | string
    updatedBy: number
    deletedAt?: Date | string | null
    deletedBy?: number | null
  }

  export type PikudUncheckedCreateWithoutWorkspacesInput = {
    id?: number
    name: string
    icon?: string | null
    createdAt?: Date | string
    createdBy: number
    updatedAt?: Date | string
    updatedBy: number
    deletedAt?: Date | string | null
    deletedBy?: number | null
  }

  export type PikudCreateOrConnectWithoutWorkspacesInput = {
    where: PikudWhereUniqueInput
    create: XOR<PikudCreateWithoutWorkspacesInput, PikudUncheckedCreateWithoutWorkspacesInput>
  }

  export type TagCreateWithoutWorkspaceInput = {
    name: string
    createdAt?: Date | string
    createdBy: number
    updatedAt?: Date | string
    updatedBy: number
    tasks?: TaskCreateNestedManyWithoutTagsInput
  }

  export type TagUncheckedCreateWithoutWorkspaceInput = {
    id?: number
    name: string
    createdAt?: Date | string
    createdBy: number
    updatedAt?: Date | string
    updatedBy: number
    tasks?: TaskUncheckedCreateNestedManyWithoutTagsInput
  }

  export type TagCreateOrConnectWithoutWorkspaceInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutWorkspaceInput, TagUncheckedCreateWithoutWorkspaceInput>
  }

  export type TagCreateManyWorkspaceInputEnvelope = {
    data: TagCreateManyWorkspaceInput | TagCreateManyWorkspaceInput[]
    skipDuplicates?: boolean
  }

  export type TaskCreateWithoutWorkspaceInput = {
    title: string
    description?: string | null
    flagged?: boolean
    deadlineType: string
    issuedAt?: Date | string
    dueDate: Date | string
    notes?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    createdBy: number
    updatedAt?: Date | string
    updatedBy: number
    deletedAt?: Date | string | null
    deletedBy?: number | null
    source: SourceCreateNestedOneWithoutTasksInput
    tags?: TagCreateNestedManyWithoutTasksInput
    assigneeStatuses?: AssigneeTaskStatusCreateNestedManyWithoutTaskInput
    messages?: MessageCreateNestedManyWithoutTaskInput
    history?: TaskHistoryCreateNestedManyWithoutTaskInput
  }

  export type TaskUncheckedCreateWithoutWorkspaceInput = {
    id?: number
    title: string
    description?: string | null
    flagged?: boolean
    deadlineType: string
    issuedAt?: Date | string
    dueDate: Date | string
    notes?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    createdBy: number
    updatedAt?: Date | string
    updatedBy: number
    deletedAt?: Date | string | null
    deletedBy?: number | null
    sourceId: number
    tags?: TagUncheckedCreateNestedManyWithoutTasksInput
    assigneeStatuses?: AssigneeTaskStatusUncheckedCreateNestedManyWithoutTaskInput
    messages?: MessageUncheckedCreateNestedManyWithoutTaskInput
    history?: TaskHistoryUncheckedCreateNestedManyWithoutTaskInput
  }

  export type TaskCreateOrConnectWithoutWorkspaceInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutWorkspaceInput, TaskUncheckedCreateWithoutWorkspaceInput>
  }

  export type TaskCreateManyWorkspaceInputEnvelope = {
    data: TaskCreateManyWorkspaceInput | TaskCreateManyWorkspaceInput[]
    skipDuplicates?: boolean
  }

  export type WorkspaceStatusCreateWithoutWorkspaceInput = {
    name: string
    color: string
    statusType: string
    assigneeTaskStatuses?: AssigneeTaskStatusCreateNestedManyWithoutStatusInput
  }

  export type WorkspaceStatusUncheckedCreateWithoutWorkspaceInput = {
    id?: number
    name: string
    color: string
    statusType: string
    assigneeTaskStatuses?: AssigneeTaskStatusUncheckedCreateNestedManyWithoutStatusInput
  }

  export type WorkspaceStatusCreateOrConnectWithoutWorkspaceInput = {
    where: WorkspaceStatusWhereUniqueInput
    create: XOR<WorkspaceStatusCreateWithoutWorkspaceInput, WorkspaceStatusUncheckedCreateWithoutWorkspaceInput>
  }

  export type WorkspaceStatusCreateManyWorkspaceInputEnvelope = {
    data: WorkspaceStatusCreateManyWorkspaceInput | WorkspaceStatusCreateManyWorkspaceInput[]
    skipDuplicates?: boolean
  }

  export type PermissionCreateWithoutWorkspaceInput = {
    type: $Enums.PermissionType
    user: UserCreateNestedOneWithoutPermissionsInput
  }

  export type PermissionUncheckedCreateWithoutWorkspaceInput = {
    userId: number
    type: $Enums.PermissionType
  }

  export type PermissionCreateOrConnectWithoutWorkspaceInput = {
    where: PermissionWhereUniqueInput
    create: XOR<PermissionCreateWithoutWorkspaceInput, PermissionUncheckedCreateWithoutWorkspaceInput>
  }

  export type PermissionCreateManyWorkspaceInputEnvelope = {
    data: PermissionCreateManyWorkspaceInput | PermissionCreateManyWorkspaceInput[]
    skipDuplicates?: boolean
  }

  export type TaskHistoryCreateWithoutWorkspaceInput = {
    action: $Enums.HistoryAction
    field: string
    value?: string | null
    timestamp?: Date | string
    task: TaskCreateNestedOneWithoutHistoryInput
    user: UserCreateNestedOneWithoutHistoryInput
  }

  export type TaskHistoryUncheckedCreateWithoutWorkspaceInput = {
    id?: number
    action: $Enums.HistoryAction
    field: string
    value?: string | null
    timestamp?: Date | string
    taskId: number
    userId: number
  }

  export type TaskHistoryCreateOrConnectWithoutWorkspaceInput = {
    where: TaskHistoryWhereUniqueInput
    create: XOR<TaskHistoryCreateWithoutWorkspaceInput, TaskHistoryUncheckedCreateWithoutWorkspaceInput>
  }

  export type TaskHistoryCreateManyWorkspaceInputEnvelope = {
    data: TaskHistoryCreateManyWorkspaceInput | TaskHistoryCreateManyWorkspaceInput[]
    skipDuplicates?: boolean
  }

  export type PikudUpsertWithoutWorkspacesInput = {
    update: XOR<PikudUpdateWithoutWorkspacesInput, PikudUncheckedUpdateWithoutWorkspacesInput>
    create: XOR<PikudCreateWithoutWorkspacesInput, PikudUncheckedCreateWithoutWorkspacesInput>
    where?: PikudWhereInput
  }

  export type PikudUpdateToOneWithWhereWithoutWorkspacesInput = {
    where?: PikudWhereInput
    data: XOR<PikudUpdateWithoutWorkspacesInput, PikudUncheckedUpdateWithoutWorkspacesInput>
  }

  export type PikudUpdateWithoutWorkspacesInput = {
    name?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PikudUncheckedUpdateWithoutWorkspacesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TagUpsertWithWhereUniqueWithoutWorkspaceInput = {
    where: TagWhereUniqueInput
    update: XOR<TagUpdateWithoutWorkspaceInput, TagUncheckedUpdateWithoutWorkspaceInput>
    create: XOR<TagCreateWithoutWorkspaceInput, TagUncheckedCreateWithoutWorkspaceInput>
  }

  export type TagUpdateWithWhereUniqueWithoutWorkspaceInput = {
    where: TagWhereUniqueInput
    data: XOR<TagUpdateWithoutWorkspaceInput, TagUncheckedUpdateWithoutWorkspaceInput>
  }

  export type TagUpdateManyWithWhereWithoutWorkspaceInput = {
    where: TagScalarWhereInput
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyWithoutWorkspaceInput>
  }

  export type TaskUpsertWithWhereUniqueWithoutWorkspaceInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutWorkspaceInput, TaskUncheckedUpdateWithoutWorkspaceInput>
    create: XOR<TaskCreateWithoutWorkspaceInput, TaskUncheckedCreateWithoutWorkspaceInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutWorkspaceInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutWorkspaceInput, TaskUncheckedUpdateWithoutWorkspaceInput>
  }

  export type TaskUpdateManyWithWhereWithoutWorkspaceInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutWorkspaceInput>
  }

  export type WorkspaceStatusUpsertWithWhereUniqueWithoutWorkspaceInput = {
    where: WorkspaceStatusWhereUniqueInput
    update: XOR<WorkspaceStatusUpdateWithoutWorkspaceInput, WorkspaceStatusUncheckedUpdateWithoutWorkspaceInput>
    create: XOR<WorkspaceStatusCreateWithoutWorkspaceInput, WorkspaceStatusUncheckedCreateWithoutWorkspaceInput>
  }

  export type WorkspaceStatusUpdateWithWhereUniqueWithoutWorkspaceInput = {
    where: WorkspaceStatusWhereUniqueInput
    data: XOR<WorkspaceStatusUpdateWithoutWorkspaceInput, WorkspaceStatusUncheckedUpdateWithoutWorkspaceInput>
  }

  export type WorkspaceStatusUpdateManyWithWhereWithoutWorkspaceInput = {
    where: WorkspaceStatusScalarWhereInput
    data: XOR<WorkspaceStatusUpdateManyMutationInput, WorkspaceStatusUncheckedUpdateManyWithoutWorkspaceInput>
  }

  export type WorkspaceStatusScalarWhereInput = {
    AND?: WorkspaceStatusScalarWhereInput | WorkspaceStatusScalarWhereInput[]
    OR?: WorkspaceStatusScalarWhereInput[]
    NOT?: WorkspaceStatusScalarWhereInput | WorkspaceStatusScalarWhereInput[]
    id?: IntFilter<"WorkspaceStatus"> | number
    name?: StringFilter<"WorkspaceStatus"> | string
    color?: StringFilter<"WorkspaceStatus"> | string
    statusType?: StringFilter<"WorkspaceStatus"> | string
    workspaceId?: IntFilter<"WorkspaceStatus"> | number
  }

  export type PermissionUpsertWithWhereUniqueWithoutWorkspaceInput = {
    where: PermissionWhereUniqueInput
    update: XOR<PermissionUpdateWithoutWorkspaceInput, PermissionUncheckedUpdateWithoutWorkspaceInput>
    create: XOR<PermissionCreateWithoutWorkspaceInput, PermissionUncheckedCreateWithoutWorkspaceInput>
  }

  export type PermissionUpdateWithWhereUniqueWithoutWorkspaceInput = {
    where: PermissionWhereUniqueInput
    data: XOR<PermissionUpdateWithoutWorkspaceInput, PermissionUncheckedUpdateWithoutWorkspaceInput>
  }

  export type PermissionUpdateManyWithWhereWithoutWorkspaceInput = {
    where: PermissionScalarWhereInput
    data: XOR<PermissionUpdateManyMutationInput, PermissionUncheckedUpdateManyWithoutWorkspaceInput>
  }

  export type TaskHistoryUpsertWithWhereUniqueWithoutWorkspaceInput = {
    where: TaskHistoryWhereUniqueInput
    update: XOR<TaskHistoryUpdateWithoutWorkspaceInput, TaskHistoryUncheckedUpdateWithoutWorkspaceInput>
    create: XOR<TaskHistoryCreateWithoutWorkspaceInput, TaskHistoryUncheckedCreateWithoutWorkspaceInput>
  }

  export type TaskHistoryUpdateWithWhereUniqueWithoutWorkspaceInput = {
    where: TaskHistoryWhereUniqueInput
    data: XOR<TaskHistoryUpdateWithoutWorkspaceInput, TaskHistoryUncheckedUpdateWithoutWorkspaceInput>
  }

  export type TaskHistoryUpdateManyWithWhereWithoutWorkspaceInput = {
    where: TaskHistoryScalarWhereInput
    data: XOR<TaskHistoryUpdateManyMutationInput, TaskHistoryUncheckedUpdateManyWithoutWorkspaceInput>
  }

  export type WorkspaceCreateWithoutWorkspaceStatusesInput = {
    title: string
    urlName: string
    icon?: string | null
    assigneeStatusEditable?: boolean
    createdAt?: Date | string
    createdBy: number
    updatedAt?: Date | string
    updatedBy: number
    deletedAt?: Date | string | null
    deletedBy?: number | null
    pikud: PikudCreateNestedOneWithoutWorkspacesInput
    tags?: TagCreateNestedManyWithoutWorkspaceInput
    tasks?: TaskCreateNestedManyWithoutWorkspaceInput
    permissions?: PermissionCreateNestedManyWithoutWorkspaceInput
    tasksHistory?: TaskHistoryCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceUncheckedCreateWithoutWorkspaceStatusesInput = {
    id?: number
    title: string
    urlName: string
    icon?: string | null
    assigneeStatusEditable?: boolean
    createdAt?: Date | string
    createdBy: number
    updatedAt?: Date | string
    updatedBy: number
    deletedAt?: Date | string | null
    deletedBy?: number | null
    pikudId: number
    tags?: TagUncheckedCreateNestedManyWithoutWorkspaceInput
    tasks?: TaskUncheckedCreateNestedManyWithoutWorkspaceInput
    permissions?: PermissionUncheckedCreateNestedManyWithoutWorkspaceInput
    tasksHistory?: TaskHistoryUncheckedCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceCreateOrConnectWithoutWorkspaceStatusesInput = {
    where: WorkspaceWhereUniqueInput
    create: XOR<WorkspaceCreateWithoutWorkspaceStatusesInput, WorkspaceUncheckedCreateWithoutWorkspaceStatusesInput>
  }

  export type AssigneeTaskStatusCreateWithoutStatusInput = {
    task: TaskCreateNestedOneWithoutAssigneeStatusesInput
    assignee: AssigneeCreateNestedOneWithoutTaskStatusesInput
  }

  export type AssigneeTaskStatusUncheckedCreateWithoutStatusInput = {
    taskId: number
    assigneeId: number
  }

  export type AssigneeTaskStatusCreateOrConnectWithoutStatusInput = {
    where: AssigneeTaskStatusWhereUniqueInput
    create: XOR<AssigneeTaskStatusCreateWithoutStatusInput, AssigneeTaskStatusUncheckedCreateWithoutStatusInput>
  }

  export type AssigneeTaskStatusCreateManyStatusInputEnvelope = {
    data: AssigneeTaskStatusCreateManyStatusInput | AssigneeTaskStatusCreateManyStatusInput[]
    skipDuplicates?: boolean
  }

  export type WorkspaceUpsertWithoutWorkspaceStatusesInput = {
    update: XOR<WorkspaceUpdateWithoutWorkspaceStatusesInput, WorkspaceUncheckedUpdateWithoutWorkspaceStatusesInput>
    create: XOR<WorkspaceCreateWithoutWorkspaceStatusesInput, WorkspaceUncheckedCreateWithoutWorkspaceStatusesInput>
    where?: WorkspaceWhereInput
  }

  export type WorkspaceUpdateToOneWithWhereWithoutWorkspaceStatusesInput = {
    where?: WorkspaceWhereInput
    data: XOR<WorkspaceUpdateWithoutWorkspaceStatusesInput, WorkspaceUncheckedUpdateWithoutWorkspaceStatusesInput>
  }

  export type WorkspaceUpdateWithoutWorkspaceStatusesInput = {
    title?: StringFieldUpdateOperationsInput | string
    urlName?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    assigneeStatusEditable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    pikud?: PikudUpdateOneRequiredWithoutWorkspacesNestedInput
    tags?: TagUpdateManyWithoutWorkspaceNestedInput
    tasks?: TaskUpdateManyWithoutWorkspaceNestedInput
    permissions?: PermissionUpdateManyWithoutWorkspaceNestedInput
    tasksHistory?: TaskHistoryUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceUncheckedUpdateWithoutWorkspaceStatusesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    urlName?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    assigneeStatusEditable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    pikudId?: IntFieldUpdateOperationsInput | number
    tags?: TagUncheckedUpdateManyWithoutWorkspaceNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutWorkspaceNestedInput
    permissions?: PermissionUncheckedUpdateManyWithoutWorkspaceNestedInput
    tasksHistory?: TaskHistoryUncheckedUpdateManyWithoutWorkspaceNestedInput
  }

  export type AssigneeTaskStatusUpsertWithWhereUniqueWithoutStatusInput = {
    where: AssigneeTaskStatusWhereUniqueInput
    update: XOR<AssigneeTaskStatusUpdateWithoutStatusInput, AssigneeTaskStatusUncheckedUpdateWithoutStatusInput>
    create: XOR<AssigneeTaskStatusCreateWithoutStatusInput, AssigneeTaskStatusUncheckedCreateWithoutStatusInput>
  }

  export type AssigneeTaskStatusUpdateWithWhereUniqueWithoutStatusInput = {
    where: AssigneeTaskStatusWhereUniqueInput
    data: XOR<AssigneeTaskStatusUpdateWithoutStatusInput, AssigneeTaskStatusUncheckedUpdateWithoutStatusInput>
  }

  export type AssigneeTaskStatusUpdateManyWithWhereWithoutStatusInput = {
    where: AssigneeTaskStatusScalarWhereInput
    data: XOR<AssigneeTaskStatusUpdateManyMutationInput, AssigneeTaskStatusUncheckedUpdateManyWithoutStatusInput>
  }

  export type AssigneeUserCreateManyAssigneeInput = {
    userId: number
  }

  export type AssigneeTaskStatusCreateManyAssigneeInput = {
    taskId: number
    statusId: number
  }

  export type MessageCreateManyAssigneeInput = {
    id?: number
    content: string
    taskId: number
    createdAt?: Date | string
    createdBy: number
    updatedAt?: Date | string
    updatedBy: number
    deletedAt?: Date | string | null
    deletedBy?: number | null
  }

  export type AssigneeUserUpdateWithoutAssigneeInput = {
    user?: UserUpdateOneRequiredWithoutAssigneesNestedInput
  }

  export type AssigneeUserUncheckedUpdateWithoutAssigneeInput = {
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type AssigneeUserUncheckedUpdateManyWithoutAssigneeInput = {
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type AssigneeTaskStatusUpdateWithoutAssigneeInput = {
    task?: TaskUpdateOneRequiredWithoutAssigneeStatusesNestedInput
    status?: WorkspaceStatusUpdateOneRequiredWithoutAssigneeTaskStatusesNestedInput
  }

  export type AssigneeTaskStatusUncheckedUpdateWithoutAssigneeInput = {
    taskId?: IntFieldUpdateOperationsInput | number
    statusId?: IntFieldUpdateOperationsInput | number
  }

  export type AssigneeTaskStatusUncheckedUpdateManyWithoutAssigneeInput = {
    taskId?: IntFieldUpdateOperationsInput | number
    statusId?: IntFieldUpdateOperationsInput | number
  }

  export type MessageUpdateWithoutAssigneeInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    task?: TaskUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateWithoutAssigneeInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    taskId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MessageUncheckedUpdateManyWithoutAssigneeInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    taskId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type WorkspaceCreateManyPikudInput = {
    id?: number
    title: string
    urlName: string
    icon?: string | null
    assigneeStatusEditable?: boolean
    createdAt?: Date | string
    createdBy: number
    updatedAt?: Date | string
    updatedBy: number
    deletedAt?: Date | string | null
    deletedBy?: number | null
  }

  export type WorkspaceUpdateWithoutPikudInput = {
    title?: StringFieldUpdateOperationsInput | string
    urlName?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    assigneeStatusEditable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    tags?: TagUpdateManyWithoutWorkspaceNestedInput
    tasks?: TaskUpdateManyWithoutWorkspaceNestedInput
    workspaceStatuses?: WorkspaceStatusUpdateManyWithoutWorkspaceNestedInput
    permissions?: PermissionUpdateManyWithoutWorkspaceNestedInput
    tasksHistory?: TaskHistoryUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceUncheckedUpdateWithoutPikudInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    urlName?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    assigneeStatusEditable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    tags?: TagUncheckedUpdateManyWithoutWorkspaceNestedInput
    tasks?: TaskUncheckedUpdateManyWithoutWorkspaceNestedInput
    workspaceStatuses?: WorkspaceStatusUncheckedUpdateManyWithoutWorkspaceNestedInput
    permissions?: PermissionUncheckedUpdateManyWithoutWorkspaceNestedInput
    tasksHistory?: TaskHistoryUncheckedUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceUncheckedUpdateManyWithoutPikudInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    urlName?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    assigneeStatusEditable?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TaskCreateManySourceInput = {
    id?: number
    title: string
    description?: string | null
    flagged?: boolean
    deadlineType: string
    issuedAt?: Date | string
    dueDate: Date | string
    notes?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    createdBy: number
    updatedAt?: Date | string
    updatedBy: number
    deletedAt?: Date | string | null
    deletedBy?: number | null
    workspaceId: number
  }

  export type TaskUpdateWithoutSourceInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    flagged?: BoolFieldUpdateOperationsInput | boolean
    deadlineType?: StringFieldUpdateOperationsInput | string
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    workspace?: WorkspaceUpdateOneRequiredWithoutTasksNestedInput
    tags?: TagUpdateManyWithoutTasksNestedInput
    assigneeStatuses?: AssigneeTaskStatusUpdateManyWithoutTaskNestedInput
    messages?: MessageUpdateManyWithoutTaskNestedInput
    history?: TaskHistoryUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutSourceInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    flagged?: BoolFieldUpdateOperationsInput | boolean
    deadlineType?: StringFieldUpdateOperationsInput | string
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    workspaceId?: IntFieldUpdateOperationsInput | number
    tags?: TagUncheckedUpdateManyWithoutTasksNestedInput
    assigneeStatuses?: AssigneeTaskStatusUncheckedUpdateManyWithoutTaskNestedInput
    messages?: MessageUncheckedUpdateManyWithoutTaskNestedInput
    history?: TaskHistoryUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateManyWithoutSourceInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    flagged?: BoolFieldUpdateOperationsInput | boolean
    deadlineType?: StringFieldUpdateOperationsInput | string
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    workspaceId?: IntFieldUpdateOperationsInput | number
  }

  export type TaskUpdateWithoutTagsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    flagged?: BoolFieldUpdateOperationsInput | boolean
    deadlineType?: StringFieldUpdateOperationsInput | string
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    workspace?: WorkspaceUpdateOneRequiredWithoutTasksNestedInput
    source?: SourceUpdateOneRequiredWithoutTasksNestedInput
    assigneeStatuses?: AssigneeTaskStatusUpdateManyWithoutTaskNestedInput
    messages?: MessageUpdateManyWithoutTaskNestedInput
    history?: TaskHistoryUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutTagsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    flagged?: BoolFieldUpdateOperationsInput | boolean
    deadlineType?: StringFieldUpdateOperationsInput | string
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    workspaceId?: IntFieldUpdateOperationsInput | number
    sourceId?: IntFieldUpdateOperationsInput | number
    assigneeStatuses?: AssigneeTaskStatusUncheckedUpdateManyWithoutTaskNestedInput
    messages?: MessageUncheckedUpdateManyWithoutTaskNestedInput
    history?: TaskHistoryUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateManyWithoutTagsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    flagged?: BoolFieldUpdateOperationsInput | boolean
    deadlineType?: StringFieldUpdateOperationsInput | string
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    workspaceId?: IntFieldUpdateOperationsInput | number
    sourceId?: IntFieldUpdateOperationsInput | number
  }

  export type AssigneeTaskStatusCreateManyTaskInput = {
    assigneeId: number
    statusId: number
  }

  export type MessageCreateManyTaskInput = {
    id?: number
    content: string
    assigneeId: number
    createdAt?: Date | string
    createdBy: number
    updatedAt?: Date | string
    updatedBy: number
    deletedAt?: Date | string | null
    deletedBy?: number | null
  }

  export type TaskHistoryCreateManyTaskInput = {
    id?: number
    action: $Enums.HistoryAction
    field: string
    value?: string | null
    timestamp?: Date | string
    workspaceId: number
    userId: number
  }

  export type TagUpdateWithoutTasksInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: IntFieldUpdateOperationsInput | number
    workspace?: WorkspaceUpdateOneRequiredWithoutTagsNestedInput
  }

  export type TagUncheckedUpdateWithoutTasksInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: IntFieldUpdateOperationsInput | number
    workspaceId?: IntFieldUpdateOperationsInput | number
  }

  export type TagUncheckedUpdateManyWithoutTasksInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: IntFieldUpdateOperationsInput | number
    workspaceId?: IntFieldUpdateOperationsInput | number
  }

  export type AssigneeTaskStatusUpdateWithoutTaskInput = {
    assignee?: AssigneeUpdateOneRequiredWithoutTaskStatusesNestedInput
    status?: WorkspaceStatusUpdateOneRequiredWithoutAssigneeTaskStatusesNestedInput
  }

  export type AssigneeTaskStatusUncheckedUpdateWithoutTaskInput = {
    assigneeId?: IntFieldUpdateOperationsInput | number
    statusId?: IntFieldUpdateOperationsInput | number
  }

  export type AssigneeTaskStatusUncheckedUpdateManyWithoutTaskInput = {
    assigneeId?: IntFieldUpdateOperationsInput | number
    statusId?: IntFieldUpdateOperationsInput | number
  }

  export type MessageUpdateWithoutTaskInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    assignee?: AssigneeUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateWithoutTaskInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    assigneeId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MessageUncheckedUpdateManyWithoutTaskInput = {
    id?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    assigneeId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TaskHistoryUpdateWithoutTaskInput = {
    action?: EnumHistoryActionFieldUpdateOperationsInput | $Enums.HistoryAction
    field?: StringFieldUpdateOperationsInput | string
    value?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    workspace?: WorkspaceUpdateOneRequiredWithoutTasksHistoryNestedInput
    user?: UserUpdateOneRequiredWithoutHistoryNestedInput
  }

  export type TaskHistoryUncheckedUpdateWithoutTaskInput = {
    id?: IntFieldUpdateOperationsInput | number
    action?: EnumHistoryActionFieldUpdateOperationsInput | $Enums.HistoryAction
    field?: StringFieldUpdateOperationsInput | string
    value?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    workspaceId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type TaskHistoryUncheckedUpdateManyWithoutTaskInput = {
    id?: IntFieldUpdateOperationsInput | number
    action?: EnumHistoryActionFieldUpdateOperationsInput | $Enums.HistoryAction
    field?: StringFieldUpdateOperationsInput | string
    value?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    workspaceId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type AssigneeUserCreateManyUserInput = {
    assigneeId: number
  }

  export type PermissionCreateManyUserInput = {
    workspaceId: number
    type: $Enums.PermissionType
  }

  export type TaskHistoryCreateManyUserInput = {
    id?: number
    action: $Enums.HistoryAction
    field: string
    value?: string | null
    timestamp?: Date | string
    taskId: number
    workspaceId: number
  }

  export type AssigneeUserUpdateWithoutUserInput = {
    assignee?: AssigneeUpdateOneRequiredWithoutUsersNestedInput
  }

  export type AssigneeUserUncheckedUpdateWithoutUserInput = {
    assigneeId?: IntFieldUpdateOperationsInput | number
  }

  export type AssigneeUserUncheckedUpdateManyWithoutUserInput = {
    assigneeId?: IntFieldUpdateOperationsInput | number
  }

  export type PermissionUpdateWithoutUserInput = {
    type?: EnumPermissionTypeFieldUpdateOperationsInput | $Enums.PermissionType
    workspace?: WorkspaceUpdateOneRequiredWithoutPermissionsNestedInput
  }

  export type PermissionUncheckedUpdateWithoutUserInput = {
    workspaceId?: IntFieldUpdateOperationsInput | number
    type?: EnumPermissionTypeFieldUpdateOperationsInput | $Enums.PermissionType
  }

  export type PermissionUncheckedUpdateManyWithoutUserInput = {
    workspaceId?: IntFieldUpdateOperationsInput | number
    type?: EnumPermissionTypeFieldUpdateOperationsInput | $Enums.PermissionType
  }

  export type TaskHistoryUpdateWithoutUserInput = {
    action?: EnumHistoryActionFieldUpdateOperationsInput | $Enums.HistoryAction
    field?: StringFieldUpdateOperationsInput | string
    value?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    task?: TaskUpdateOneRequiredWithoutHistoryNestedInput
    workspace?: WorkspaceUpdateOneRequiredWithoutTasksHistoryNestedInput
  }

  export type TaskHistoryUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    action?: EnumHistoryActionFieldUpdateOperationsInput | $Enums.HistoryAction
    field?: StringFieldUpdateOperationsInput | string
    value?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    taskId?: IntFieldUpdateOperationsInput | number
    workspaceId?: IntFieldUpdateOperationsInput | number
  }

  export type TaskHistoryUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    action?: EnumHistoryActionFieldUpdateOperationsInput | $Enums.HistoryAction
    field?: StringFieldUpdateOperationsInput | string
    value?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    taskId?: IntFieldUpdateOperationsInput | number
    workspaceId?: IntFieldUpdateOperationsInput | number
  }

  export type TagCreateManyWorkspaceInput = {
    id?: number
    name: string
    createdAt?: Date | string
    createdBy: number
    updatedAt?: Date | string
    updatedBy: number
  }

  export type TaskCreateManyWorkspaceInput = {
    id?: number
    title: string
    description?: string | null
    flagged?: boolean
    deadlineType: string
    issuedAt?: Date | string
    dueDate: Date | string
    notes?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    createdBy: number
    updatedAt?: Date | string
    updatedBy: number
    deletedAt?: Date | string | null
    deletedBy?: number | null
    sourceId: number
  }

  export type WorkspaceStatusCreateManyWorkspaceInput = {
    id?: number
    name: string
    color: string
    statusType: string
  }

  export type PermissionCreateManyWorkspaceInput = {
    userId: number
    type: $Enums.PermissionType
  }

  export type TaskHistoryCreateManyWorkspaceInput = {
    id?: number
    action: $Enums.HistoryAction
    field: string
    value?: string | null
    timestamp?: Date | string
    taskId: number
    userId: number
  }

  export type TagUpdateWithoutWorkspaceInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: IntFieldUpdateOperationsInput | number
    tasks?: TaskUpdateManyWithoutTagsNestedInput
  }

  export type TagUncheckedUpdateWithoutWorkspaceInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: IntFieldUpdateOperationsInput | number
    tasks?: TaskUncheckedUpdateManyWithoutTagsNestedInput
  }

  export type TagUncheckedUpdateManyWithoutWorkspaceInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: IntFieldUpdateOperationsInput | number
  }

  export type TaskUpdateWithoutWorkspaceInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    flagged?: BoolFieldUpdateOperationsInput | boolean
    deadlineType?: StringFieldUpdateOperationsInput | string
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    source?: SourceUpdateOneRequiredWithoutTasksNestedInput
    tags?: TagUpdateManyWithoutTasksNestedInput
    assigneeStatuses?: AssigneeTaskStatusUpdateManyWithoutTaskNestedInput
    messages?: MessageUpdateManyWithoutTaskNestedInput
    history?: TaskHistoryUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateWithoutWorkspaceInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    flagged?: BoolFieldUpdateOperationsInput | boolean
    deadlineType?: StringFieldUpdateOperationsInput | string
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    sourceId?: IntFieldUpdateOperationsInput | number
    tags?: TagUncheckedUpdateManyWithoutTasksNestedInput
    assigneeStatuses?: AssigneeTaskStatusUncheckedUpdateManyWithoutTaskNestedInput
    messages?: MessageUncheckedUpdateManyWithoutTaskNestedInput
    history?: TaskHistoryUncheckedUpdateManyWithoutTaskNestedInput
  }

  export type TaskUncheckedUpdateManyWithoutWorkspaceInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    flagged?: BoolFieldUpdateOperationsInput | boolean
    deadlineType?: StringFieldUpdateOperationsInput | string
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: IntFieldUpdateOperationsInput | number
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    sourceId?: IntFieldUpdateOperationsInput | number
  }

  export type WorkspaceStatusUpdateWithoutWorkspaceInput = {
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    statusType?: StringFieldUpdateOperationsInput | string
    assigneeTaskStatuses?: AssigneeTaskStatusUpdateManyWithoutStatusNestedInput
  }

  export type WorkspaceStatusUncheckedUpdateWithoutWorkspaceInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    statusType?: StringFieldUpdateOperationsInput | string
    assigneeTaskStatuses?: AssigneeTaskStatusUncheckedUpdateManyWithoutStatusNestedInput
  }

  export type WorkspaceStatusUncheckedUpdateManyWithoutWorkspaceInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    statusType?: StringFieldUpdateOperationsInput | string
  }

  export type PermissionUpdateWithoutWorkspaceInput = {
    type?: EnumPermissionTypeFieldUpdateOperationsInput | $Enums.PermissionType
    user?: UserUpdateOneRequiredWithoutPermissionsNestedInput
  }

  export type PermissionUncheckedUpdateWithoutWorkspaceInput = {
    userId?: IntFieldUpdateOperationsInput | number
    type?: EnumPermissionTypeFieldUpdateOperationsInput | $Enums.PermissionType
  }

  export type PermissionUncheckedUpdateManyWithoutWorkspaceInput = {
    userId?: IntFieldUpdateOperationsInput | number
    type?: EnumPermissionTypeFieldUpdateOperationsInput | $Enums.PermissionType
  }

  export type TaskHistoryUpdateWithoutWorkspaceInput = {
    action?: EnumHistoryActionFieldUpdateOperationsInput | $Enums.HistoryAction
    field?: StringFieldUpdateOperationsInput | string
    value?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    task?: TaskUpdateOneRequiredWithoutHistoryNestedInput
    user?: UserUpdateOneRequiredWithoutHistoryNestedInput
  }

  export type TaskHistoryUncheckedUpdateWithoutWorkspaceInput = {
    id?: IntFieldUpdateOperationsInput | number
    action?: EnumHistoryActionFieldUpdateOperationsInput | $Enums.HistoryAction
    field?: StringFieldUpdateOperationsInput | string
    value?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    taskId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type TaskHistoryUncheckedUpdateManyWithoutWorkspaceInput = {
    id?: IntFieldUpdateOperationsInput | number
    action?: EnumHistoryActionFieldUpdateOperationsInput | $Enums.HistoryAction
    field?: StringFieldUpdateOperationsInput | string
    value?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    taskId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type AssigneeTaskStatusCreateManyStatusInput = {
    taskId: number
    assigneeId: number
  }

  export type AssigneeTaskStatusUpdateWithoutStatusInput = {
    task?: TaskUpdateOneRequiredWithoutAssigneeStatusesNestedInput
    assignee?: AssigneeUpdateOneRequiredWithoutTaskStatusesNestedInput
  }

  export type AssigneeTaskStatusUncheckedUpdateWithoutStatusInput = {
    taskId?: IntFieldUpdateOperationsInput | number
    assigneeId?: IntFieldUpdateOperationsInput | number
  }

  export type AssigneeTaskStatusUncheckedUpdateManyWithoutStatusInput = {
    taskId?: IntFieldUpdateOperationsInput | number
    assigneeId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}