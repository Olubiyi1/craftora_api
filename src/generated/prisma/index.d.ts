
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model RefreshToken
 * 
 */
export type RefreshToken = $Result.DefaultSelection<Prisma.$RefreshTokenPayload>
/**
 * Model EmailVerificationToken
 * 
 */
export type EmailVerificationToken = $Result.DefaultSelection<Prisma.$EmailVerificationTokenPayload>
/**
 * Model PasswordResetToken
 * 
 */
export type PasswordResetToken = $Result.DefaultSelection<Prisma.$PasswordResetTokenPayload>
/**
 * Model InstructorProfile
 * 
 */
export type InstructorProfile = $Result.DefaultSelection<Prisma.$InstructorProfilePayload>
/**
 * Model Trade
 * 
 */
export type Trade = $Result.DefaultSelection<Prisma.$TradePayload>
/**
 * Model Course
 * 
 */
export type Course = $Result.DefaultSelection<Prisma.$CoursePayload>
/**
 * Model Module
 * 
 */
export type Module = $Result.DefaultSelection<Prisma.$ModulePayload>
/**
 * Model Lesson
 * 
 */
export type Lesson = $Result.DefaultSelection<Prisma.$LessonPayload>
/**
 * Model Enrollment
 * 
 */
export type Enrollment = $Result.DefaultSelection<Prisma.$EnrollmentPayload>
/**
 * Model LessonProgress
 * 
 */
export type LessonProgress = $Result.DefaultSelection<Prisma.$LessonProgressPayload>
/**
 * Model PayoutRequest
 * 
 */
export type PayoutRequest = $Result.DefaultSelection<Prisma.$PayoutRequestPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  STUDENT: 'STUDENT',
  INSTRUCTOR: 'INSTRUCTOR',
  MODERATOR: 'MODERATOR',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const CourseStatus: {
  DRAFT: 'DRAFT',
  PENDING_REVIEW: 'PENDING_REVIEW',
  PUBLISHED: 'PUBLISHED',
  REJECTED: 'REJECTED'
};

export type CourseStatus = (typeof CourseStatus)[keyof typeof CourseStatus]


export const EnrollmentStatus: {
  PENDING: 'PENDING',
  ACTIVE: 'ACTIVE',
  FAILED: 'FAILED'
};

export type EnrollmentStatus = (typeof EnrollmentStatus)[keyof typeof EnrollmentStatus]


export const PayoutStatus: {
  PENDING: 'PENDING',
  PROCESSING: 'PROCESSING',
  PAID: 'PAID',
  FAILED: 'FAILED'
};

export type PayoutStatus = (typeof PayoutStatus)[keyof typeof PayoutStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type CourseStatus = $Enums.CourseStatus

export const CourseStatus: typeof $Enums.CourseStatus

export type EnrollmentStatus = $Enums.EnrollmentStatus

export const EnrollmentStatus: typeof $Enums.EnrollmentStatus

export type PayoutStatus = $Enums.PayoutStatus

export const PayoutStatus: typeof $Enums.PayoutStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

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
   * `prisma.refreshToken`: Exposes CRUD operations for the **RefreshToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RefreshTokens
    * const refreshTokens = await prisma.refreshToken.findMany()
    * ```
    */
  get refreshToken(): Prisma.RefreshTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.emailVerificationToken`: Exposes CRUD operations for the **EmailVerificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EmailVerificationTokens
    * const emailVerificationTokens = await prisma.emailVerificationToken.findMany()
    * ```
    */
  get emailVerificationToken(): Prisma.EmailVerificationTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.passwordResetToken`: Exposes CRUD operations for the **PasswordResetToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PasswordResetTokens
    * const passwordResetTokens = await prisma.passwordResetToken.findMany()
    * ```
    */
  get passwordResetToken(): Prisma.PasswordResetTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.instructorProfile`: Exposes CRUD operations for the **InstructorProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InstructorProfiles
    * const instructorProfiles = await prisma.instructorProfile.findMany()
    * ```
    */
  get instructorProfile(): Prisma.InstructorProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.trade`: Exposes CRUD operations for the **Trade** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Trades
    * const trades = await prisma.trade.findMany()
    * ```
    */
  get trade(): Prisma.TradeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.course`: Exposes CRUD operations for the **Course** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Courses
    * const courses = await prisma.course.findMany()
    * ```
    */
  get course(): Prisma.CourseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.module`: Exposes CRUD operations for the **Module** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Modules
    * const modules = await prisma.module.findMany()
    * ```
    */
  get module(): Prisma.ModuleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lesson`: Exposes CRUD operations for the **Lesson** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lessons
    * const lessons = await prisma.lesson.findMany()
    * ```
    */
  get lesson(): Prisma.LessonDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.enrollment`: Exposes CRUD operations for the **Enrollment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Enrollments
    * const enrollments = await prisma.enrollment.findMany()
    * ```
    */
  get enrollment(): Prisma.EnrollmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lessonProgress`: Exposes CRUD operations for the **LessonProgress** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LessonProgresses
    * const lessonProgresses = await prisma.lessonProgress.findMany()
    * ```
    */
  get lessonProgress(): Prisma.LessonProgressDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payoutRequest`: Exposes CRUD operations for the **PayoutRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PayoutRequests
    * const payoutRequests = await prisma.payoutRequest.findMany()
    * ```
    */
  get payoutRequest(): Prisma.PayoutRequestDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
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
    User: 'User',
    RefreshToken: 'RefreshToken',
    EmailVerificationToken: 'EmailVerificationToken',
    PasswordResetToken: 'PasswordResetToken',
    InstructorProfile: 'InstructorProfile',
    Trade: 'Trade',
    Course: 'Course',
    Module: 'Module',
    Lesson: 'Lesson',
    Enrollment: 'Enrollment',
    LessonProgress: 'LessonProgress',
    PayoutRequest: 'PayoutRequest'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "refreshToken" | "emailVerificationToken" | "passwordResetToken" | "instructorProfile" | "trade" | "course" | "module" | "lesson" | "enrollment" | "lessonProgress" | "payoutRequest"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
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
      RefreshToken: {
        payload: Prisma.$RefreshTokenPayload<ExtArgs>
        fields: Prisma.RefreshTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RefreshTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RefreshTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          findFirst: {
            args: Prisma.RefreshTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RefreshTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          findMany: {
            args: Prisma.RefreshTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
          }
          create: {
            args: Prisma.RefreshTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          createMany: {
            args: Prisma.RefreshTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RefreshTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
          }
          delete: {
            args: Prisma.RefreshTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          update: {
            args: Prisma.RefreshTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          deleteMany: {
            args: Prisma.RefreshTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RefreshTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RefreshTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
          }
          upsert: {
            args: Prisma.RefreshTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          aggregate: {
            args: Prisma.RefreshTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRefreshToken>
          }
          groupBy: {
            args: Prisma.RefreshTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<RefreshTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.RefreshTokenCountArgs<ExtArgs>
            result: $Utils.Optional<RefreshTokenCountAggregateOutputType> | number
          }
        }
      }
      EmailVerificationToken: {
        payload: Prisma.$EmailVerificationTokenPayload<ExtArgs>
        fields: Prisma.EmailVerificationTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmailVerificationTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmailVerificationTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload>
          }
          findFirst: {
            args: Prisma.EmailVerificationTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmailVerificationTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload>
          }
          findMany: {
            args: Prisma.EmailVerificationTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload>[]
          }
          create: {
            args: Prisma.EmailVerificationTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload>
          }
          createMany: {
            args: Prisma.EmailVerificationTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmailVerificationTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload>[]
          }
          delete: {
            args: Prisma.EmailVerificationTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload>
          }
          update: {
            args: Prisma.EmailVerificationTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload>
          }
          deleteMany: {
            args: Prisma.EmailVerificationTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmailVerificationTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmailVerificationTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload>[]
          }
          upsert: {
            args: Prisma.EmailVerificationTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmailVerificationTokenPayload>
          }
          aggregate: {
            args: Prisma.EmailVerificationTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmailVerificationToken>
          }
          groupBy: {
            args: Prisma.EmailVerificationTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmailVerificationTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmailVerificationTokenCountArgs<ExtArgs>
            result: $Utils.Optional<EmailVerificationTokenCountAggregateOutputType> | number
          }
        }
      }
      PasswordResetToken: {
        payload: Prisma.$PasswordResetTokenPayload<ExtArgs>
        fields: Prisma.PasswordResetTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PasswordResetTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PasswordResetTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>
          }
          findFirst: {
            args: Prisma.PasswordResetTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PasswordResetTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>
          }
          findMany: {
            args: Prisma.PasswordResetTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>[]
          }
          create: {
            args: Prisma.PasswordResetTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>
          }
          createMany: {
            args: Prisma.PasswordResetTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PasswordResetTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>[]
          }
          delete: {
            args: Prisma.PasswordResetTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>
          }
          update: {
            args: Prisma.PasswordResetTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>
          }
          deleteMany: {
            args: Prisma.PasswordResetTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PasswordResetTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PasswordResetTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>[]
          }
          upsert: {
            args: Prisma.PasswordResetTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>
          }
          aggregate: {
            args: Prisma.PasswordResetTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePasswordResetToken>
          }
          groupBy: {
            args: Prisma.PasswordResetTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<PasswordResetTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.PasswordResetTokenCountArgs<ExtArgs>
            result: $Utils.Optional<PasswordResetTokenCountAggregateOutputType> | number
          }
        }
      }
      InstructorProfile: {
        payload: Prisma.$InstructorProfilePayload<ExtArgs>
        fields: Prisma.InstructorProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InstructorProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InstructorProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorProfilePayload>
          }
          findFirst: {
            args: Prisma.InstructorProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InstructorProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorProfilePayload>
          }
          findMany: {
            args: Prisma.InstructorProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorProfilePayload>[]
          }
          create: {
            args: Prisma.InstructorProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorProfilePayload>
          }
          createMany: {
            args: Prisma.InstructorProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InstructorProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorProfilePayload>[]
          }
          delete: {
            args: Prisma.InstructorProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorProfilePayload>
          }
          update: {
            args: Prisma.InstructorProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorProfilePayload>
          }
          deleteMany: {
            args: Prisma.InstructorProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InstructorProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InstructorProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorProfilePayload>[]
          }
          upsert: {
            args: Prisma.InstructorProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstructorProfilePayload>
          }
          aggregate: {
            args: Prisma.InstructorProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInstructorProfile>
          }
          groupBy: {
            args: Prisma.InstructorProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<InstructorProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.InstructorProfileCountArgs<ExtArgs>
            result: $Utils.Optional<InstructorProfileCountAggregateOutputType> | number
          }
        }
      }
      Trade: {
        payload: Prisma.$TradePayload<ExtArgs>
        fields: Prisma.TradeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TradeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TradeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradePayload>
          }
          findFirst: {
            args: Prisma.TradeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TradeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradePayload>
          }
          findMany: {
            args: Prisma.TradeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradePayload>[]
          }
          create: {
            args: Prisma.TradeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradePayload>
          }
          createMany: {
            args: Prisma.TradeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TradeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradePayload>[]
          }
          delete: {
            args: Prisma.TradeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradePayload>
          }
          update: {
            args: Prisma.TradeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradePayload>
          }
          deleteMany: {
            args: Prisma.TradeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TradeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TradeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradePayload>[]
          }
          upsert: {
            args: Prisma.TradeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TradePayload>
          }
          aggregate: {
            args: Prisma.TradeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrade>
          }
          groupBy: {
            args: Prisma.TradeGroupByArgs<ExtArgs>
            result: $Utils.Optional<TradeGroupByOutputType>[]
          }
          count: {
            args: Prisma.TradeCountArgs<ExtArgs>
            result: $Utils.Optional<TradeCountAggregateOutputType> | number
          }
        }
      }
      Course: {
        payload: Prisma.$CoursePayload<ExtArgs>
        fields: Prisma.CourseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CourseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CourseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findFirst: {
            args: Prisma.CourseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CourseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findMany: {
            args: Prisma.CourseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          create: {
            args: Prisma.CourseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          createMany: {
            args: Prisma.CourseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CourseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          delete: {
            args: Prisma.CourseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          update: {
            args: Prisma.CourseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          deleteMany: {
            args: Prisma.CourseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CourseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CourseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          upsert: {
            args: Prisma.CourseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          aggregate: {
            args: Prisma.CourseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourse>
          }
          groupBy: {
            args: Prisma.CourseGroupByArgs<ExtArgs>
            result: $Utils.Optional<CourseGroupByOutputType>[]
          }
          count: {
            args: Prisma.CourseCountArgs<ExtArgs>
            result: $Utils.Optional<CourseCountAggregateOutputType> | number
          }
        }
      }
      Module: {
        payload: Prisma.$ModulePayload<ExtArgs>
        fields: Prisma.ModuleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ModuleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ModuleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>
          }
          findFirst: {
            args: Prisma.ModuleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ModuleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>
          }
          findMany: {
            args: Prisma.ModuleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>[]
          }
          create: {
            args: Prisma.ModuleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>
          }
          createMany: {
            args: Prisma.ModuleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ModuleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>[]
          }
          delete: {
            args: Prisma.ModuleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>
          }
          update: {
            args: Prisma.ModuleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>
          }
          deleteMany: {
            args: Prisma.ModuleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ModuleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ModuleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>[]
          }
          upsert: {
            args: Prisma.ModuleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ModulePayload>
          }
          aggregate: {
            args: Prisma.ModuleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateModule>
          }
          groupBy: {
            args: Prisma.ModuleGroupByArgs<ExtArgs>
            result: $Utils.Optional<ModuleGroupByOutputType>[]
          }
          count: {
            args: Prisma.ModuleCountArgs<ExtArgs>
            result: $Utils.Optional<ModuleCountAggregateOutputType> | number
          }
        }
      }
      Lesson: {
        payload: Prisma.$LessonPayload<ExtArgs>
        fields: Prisma.LessonFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LessonFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LessonFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>
          }
          findFirst: {
            args: Prisma.LessonFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LessonFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>
          }
          findMany: {
            args: Prisma.LessonFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>[]
          }
          create: {
            args: Prisma.LessonCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>
          }
          createMany: {
            args: Prisma.LessonCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LessonCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>[]
          }
          delete: {
            args: Prisma.LessonDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>
          }
          update: {
            args: Prisma.LessonUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>
          }
          deleteMany: {
            args: Prisma.LessonDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LessonUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LessonUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>[]
          }
          upsert: {
            args: Prisma.LessonUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonPayload>
          }
          aggregate: {
            args: Prisma.LessonAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLesson>
          }
          groupBy: {
            args: Prisma.LessonGroupByArgs<ExtArgs>
            result: $Utils.Optional<LessonGroupByOutputType>[]
          }
          count: {
            args: Prisma.LessonCountArgs<ExtArgs>
            result: $Utils.Optional<LessonCountAggregateOutputType> | number
          }
        }
      }
      Enrollment: {
        payload: Prisma.$EnrollmentPayload<ExtArgs>
        fields: Prisma.EnrollmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EnrollmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EnrollmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          findFirst: {
            args: Prisma.EnrollmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EnrollmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          findMany: {
            args: Prisma.EnrollmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>[]
          }
          create: {
            args: Prisma.EnrollmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          createMany: {
            args: Prisma.EnrollmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EnrollmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>[]
          }
          delete: {
            args: Prisma.EnrollmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          update: {
            args: Prisma.EnrollmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          deleteMany: {
            args: Prisma.EnrollmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EnrollmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EnrollmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>[]
          }
          upsert: {
            args: Prisma.EnrollmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          aggregate: {
            args: Prisma.EnrollmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEnrollment>
          }
          groupBy: {
            args: Prisma.EnrollmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<EnrollmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.EnrollmentCountArgs<ExtArgs>
            result: $Utils.Optional<EnrollmentCountAggregateOutputType> | number
          }
        }
      }
      LessonProgress: {
        payload: Prisma.$LessonProgressPayload<ExtArgs>
        fields: Prisma.LessonProgressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LessonProgressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonProgressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LessonProgressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonProgressPayload>
          }
          findFirst: {
            args: Prisma.LessonProgressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonProgressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LessonProgressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonProgressPayload>
          }
          findMany: {
            args: Prisma.LessonProgressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonProgressPayload>[]
          }
          create: {
            args: Prisma.LessonProgressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonProgressPayload>
          }
          createMany: {
            args: Prisma.LessonProgressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LessonProgressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonProgressPayload>[]
          }
          delete: {
            args: Prisma.LessonProgressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonProgressPayload>
          }
          update: {
            args: Prisma.LessonProgressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonProgressPayload>
          }
          deleteMany: {
            args: Prisma.LessonProgressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LessonProgressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LessonProgressUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonProgressPayload>[]
          }
          upsert: {
            args: Prisma.LessonProgressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LessonProgressPayload>
          }
          aggregate: {
            args: Prisma.LessonProgressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLessonProgress>
          }
          groupBy: {
            args: Prisma.LessonProgressGroupByArgs<ExtArgs>
            result: $Utils.Optional<LessonProgressGroupByOutputType>[]
          }
          count: {
            args: Prisma.LessonProgressCountArgs<ExtArgs>
            result: $Utils.Optional<LessonProgressCountAggregateOutputType> | number
          }
        }
      }
      PayoutRequest: {
        payload: Prisma.$PayoutRequestPayload<ExtArgs>
        fields: Prisma.PayoutRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PayoutRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayoutRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PayoutRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayoutRequestPayload>
          }
          findFirst: {
            args: Prisma.PayoutRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayoutRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PayoutRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayoutRequestPayload>
          }
          findMany: {
            args: Prisma.PayoutRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayoutRequestPayload>[]
          }
          create: {
            args: Prisma.PayoutRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayoutRequestPayload>
          }
          createMany: {
            args: Prisma.PayoutRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PayoutRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayoutRequestPayload>[]
          }
          delete: {
            args: Prisma.PayoutRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayoutRequestPayload>
          }
          update: {
            args: Prisma.PayoutRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayoutRequestPayload>
          }
          deleteMany: {
            args: Prisma.PayoutRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PayoutRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PayoutRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayoutRequestPayload>[]
          }
          upsert: {
            args: Prisma.PayoutRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayoutRequestPayload>
          }
          aggregate: {
            args: Prisma.PayoutRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayoutRequest>
          }
          groupBy: {
            args: Prisma.PayoutRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<PayoutRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.PayoutRequestCountArgs<ExtArgs>
            result: $Utils.Optional<PayoutRequestCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
    adapter?: runtime.SqlDriverAdapterFactory | null
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
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    refreshToken?: RefreshTokenOmit
    emailVerificationToken?: EmailVerificationTokenOmit
    passwordResetToken?: PasswordResetTokenOmit
    instructorProfile?: InstructorProfileOmit
    trade?: TradeOmit
    course?: CourseOmit
    module?: ModuleOmit
    lesson?: LessonOmit
    enrollment?: EnrollmentOmit
    lessonProgress?: LessonProgressOmit
    payoutRequest?: PayoutRequestOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    enrollments: number
    progress: number
    payoutRequests: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    enrollments?: boolean | UserCountOutputTypeCountEnrollmentsArgs
    progress?: boolean | UserCountOutputTypeCountProgressArgs
    payoutRequests?: boolean | UserCountOutputTypeCountPayoutRequestsArgs
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
  export type UserCountOutputTypeCountEnrollmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnrollmentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LessonProgressWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPayoutRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PayoutRequestWhereInput
  }


  /**
   * Count Type InstructorProfileCountOutputType
   */

  export type InstructorProfileCountOutputType = {
    courses: number
  }

  export type InstructorProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    courses?: boolean | InstructorProfileCountOutputTypeCountCoursesArgs
  }

  // Custom InputTypes
  /**
   * InstructorProfileCountOutputType without action
   */
  export type InstructorProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstructorProfileCountOutputType
     */
    select?: InstructorProfileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InstructorProfileCountOutputType without action
   */
  export type InstructorProfileCountOutputTypeCountCoursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
  }


  /**
   * Count Type TradeCountOutputType
   */

  export type TradeCountOutputType = {
    instructors: number
  }

  export type TradeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instructors?: boolean | TradeCountOutputTypeCountInstructorsArgs
  }

  // Custom InputTypes
  /**
   * TradeCountOutputType without action
   */
  export type TradeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TradeCountOutputType
     */
    select?: TradeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TradeCountOutputType without action
   */
  export type TradeCountOutputTypeCountInstructorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InstructorProfileWhereInput
  }


  /**
   * Count Type CourseCountOutputType
   */

  export type CourseCountOutputType = {
    modules: number
    enrollments: number
  }

  export type CourseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    modules?: boolean | CourseCountOutputTypeCountModulesArgs
    enrollments?: boolean | CourseCountOutputTypeCountEnrollmentsArgs
  }

  // Custom InputTypes
  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseCountOutputType
     */
    select?: CourseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountModulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModuleWhereInput
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountEnrollmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnrollmentWhereInput
  }


  /**
   * Count Type ModuleCountOutputType
   */

  export type ModuleCountOutputType = {
    lessons: number
  }

  export type ModuleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lessons?: boolean | ModuleCountOutputTypeCountLessonsArgs
  }

  // Custom InputTypes
  /**
   * ModuleCountOutputType without action
   */
  export type ModuleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModuleCountOutputType
     */
    select?: ModuleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ModuleCountOutputType without action
   */
  export type ModuleCountOutputTypeCountLessonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LessonWhereInput
  }


  /**
   * Count Type LessonCountOutputType
   */

  export type LessonCountOutputType = {
    progress: number
  }

  export type LessonCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    progress?: boolean | LessonCountOutputTypeCountProgressArgs
  }

  // Custom InputTypes
  /**
   * LessonCountOutputType without action
   */
  export type LessonCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonCountOutputType
     */
    select?: LessonCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LessonCountOutputType without action
   */
  export type LessonCountOutputTypeCountProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LessonProgressWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    firstName: string | null
    lastName: string | null
    role: $Enums.Role | null
    verifiedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    firstName: string | null
    lastName: string | null
    role: $Enums.Role | null
    verifiedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    firstName: number
    lastName: number
    role: number
    verifiedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    role?: true
    verifiedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    role?: true
    verifiedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    role?: true
    verifiedAt?: true
    createdAt?: true
    updatedAt?: true
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
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    firstName: string
    lastName: string
    role: $Enums.Role
    verifiedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
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
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    role?: boolean
    verifiedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    instructorProfile?: boolean | User$instructorProfileArgs<ExtArgs>
    refreshToken?: boolean | User$refreshTokenArgs<ExtArgs>
    emailVerificationToken?: boolean | User$emailVerificationTokenArgs<ExtArgs>
    passwordResetToken?: boolean | User$passwordResetTokenArgs<ExtArgs>
    enrollments?: boolean | User$enrollmentsArgs<ExtArgs>
    progress?: boolean | User$progressArgs<ExtArgs>
    payoutRequests?: boolean | User$payoutRequestsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    role?: boolean
    verifiedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    role?: boolean
    verifiedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    role?: boolean
    verifiedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "firstName" | "lastName" | "role" | "verifiedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instructorProfile?: boolean | User$instructorProfileArgs<ExtArgs>
    refreshToken?: boolean | User$refreshTokenArgs<ExtArgs>
    emailVerificationToken?: boolean | User$emailVerificationTokenArgs<ExtArgs>
    passwordResetToken?: boolean | User$passwordResetTokenArgs<ExtArgs>
    enrollments?: boolean | User$enrollmentsArgs<ExtArgs>
    progress?: boolean | User$progressArgs<ExtArgs>
    payoutRequests?: boolean | User$payoutRequestsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      instructorProfile: Prisma.$InstructorProfilePayload<ExtArgs> | null
      refreshToken: Prisma.$RefreshTokenPayload<ExtArgs> | null
      emailVerificationToken: Prisma.$EmailVerificationTokenPayload<ExtArgs> | null
      passwordResetToken: Prisma.$PasswordResetTokenPayload<ExtArgs> | null
      enrollments: Prisma.$EnrollmentPayload<ExtArgs>[]
      progress: Prisma.$LessonProgressPayload<ExtArgs>[]
      payoutRequests: Prisma.$PayoutRequestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      firstName: string
      lastName: string
      role: $Enums.Role
      verifiedAt: Date | null
      createdAt: Date
      updatedAt: Date
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
    instructorProfile<T extends User$instructorProfileArgs<ExtArgs> = {}>(args?: Subset<T, User$instructorProfileArgs<ExtArgs>>): Prisma__InstructorProfileClient<$Result.GetResult<Prisma.$InstructorProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    refreshToken<T extends User$refreshTokenArgs<ExtArgs> = {}>(args?: Subset<T, User$refreshTokenArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    emailVerificationToken<T extends User$emailVerificationTokenArgs<ExtArgs> = {}>(args?: Subset<T, User$emailVerificationTokenArgs<ExtArgs>>): Prisma__EmailVerificationTokenClient<$Result.GetResult<Prisma.$EmailVerificationTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    passwordResetToken<T extends User$passwordResetTokenArgs<ExtArgs> = {}>(args?: Subset<T, User$passwordResetTokenArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    enrollments<T extends User$enrollmentsArgs<ExtArgs> = {}>(args?: Subset<T, User$enrollmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    progress<T extends User$progressArgs<ExtArgs> = {}>(args?: Subset<T, User$progressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payoutRequests<T extends User$payoutRequestsArgs<ExtArgs> = {}>(args?: Subset<T, User$payoutRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayoutRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly verifiedAt: FieldRef<"User", 'DateTime'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
   * User.instructorProfile
   */
  export type User$instructorProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstructorProfile
     */
    select?: InstructorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstructorProfile
     */
    omit?: InstructorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorProfileInclude<ExtArgs> | null
    where?: InstructorProfileWhereInput
  }

  /**
   * User.refreshToken
   */
  export type User$refreshTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    where?: RefreshTokenWhereInput
  }

  /**
   * User.emailVerificationToken
   */
  export type User$emailVerificationTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationToken
     */
    select?: EmailVerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationToken
     */
    omit?: EmailVerificationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationTokenInclude<ExtArgs> | null
    where?: EmailVerificationTokenWhereInput
  }

  /**
   * User.passwordResetToken
   */
  export type User$passwordResetTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null
    where?: PasswordResetTokenWhereInput
  }

  /**
   * User.enrollments
   */
  export type User$enrollmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    where?: EnrollmentWhereInput
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    cursor?: EnrollmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[]
  }

  /**
   * User.progress
   */
  export type User$progressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonProgress
     */
    select?: LessonProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonProgress
     */
    omit?: LessonProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonProgressInclude<ExtArgs> | null
    where?: LessonProgressWhereInput
    orderBy?: LessonProgressOrderByWithRelationInput | LessonProgressOrderByWithRelationInput[]
    cursor?: LessonProgressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LessonProgressScalarFieldEnum | LessonProgressScalarFieldEnum[]
  }

  /**
   * User.payoutRequests
   */
  export type User$payoutRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayoutRequest
     */
    select?: PayoutRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayoutRequest
     */
    omit?: PayoutRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayoutRequestInclude<ExtArgs> | null
    where?: PayoutRequestWhereInput
    orderBy?: PayoutRequestOrderByWithRelationInput | PayoutRequestOrderByWithRelationInput[]
    cursor?: PayoutRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PayoutRequestScalarFieldEnum | PayoutRequestScalarFieldEnum[]
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
   * Model RefreshToken
   */

  export type AggregateRefreshToken = {
    _count: RefreshTokenCountAggregateOutputType | null
    _min: RefreshTokenMinAggregateOutputType | null
    _max: RefreshTokenMaxAggregateOutputType | null
  }

  export type RefreshTokenMinAggregateOutputType = {
    id: string | null
    tokenHash: string | null
    expiresAt: Date | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RefreshTokenMaxAggregateOutputType = {
    id: string | null
    tokenHash: string | null
    expiresAt: Date | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RefreshTokenCountAggregateOutputType = {
    id: number
    tokenHash: number
    expiresAt: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RefreshTokenMinAggregateInputType = {
    id?: true
    tokenHash?: true
    expiresAt?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RefreshTokenMaxAggregateInputType = {
    id?: true
    tokenHash?: true
    expiresAt?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RefreshTokenCountAggregateInputType = {
    id?: true
    tokenHash?: true
    expiresAt?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RefreshTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RefreshToken to aggregate.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RefreshTokens
    **/
    _count?: true | RefreshTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RefreshTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RefreshTokenMaxAggregateInputType
  }

  export type GetRefreshTokenAggregateType<T extends RefreshTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateRefreshToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRefreshToken[P]>
      : GetScalarType<T[P], AggregateRefreshToken[P]>
  }




  export type RefreshTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefreshTokenWhereInput
    orderBy?: RefreshTokenOrderByWithAggregationInput | RefreshTokenOrderByWithAggregationInput[]
    by: RefreshTokenScalarFieldEnum[] | RefreshTokenScalarFieldEnum
    having?: RefreshTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RefreshTokenCountAggregateInputType | true
    _min?: RefreshTokenMinAggregateInputType
    _max?: RefreshTokenMaxAggregateInputType
  }

  export type RefreshTokenGroupByOutputType = {
    id: string
    tokenHash: string
    expiresAt: Date
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: RefreshTokenCountAggregateOutputType | null
    _min: RefreshTokenMinAggregateOutputType | null
    _max: RefreshTokenMaxAggregateOutputType | null
  }

  type GetRefreshTokenGroupByPayload<T extends RefreshTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RefreshTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RefreshTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RefreshTokenGroupByOutputType[P]>
            : GetScalarType<T[P], RefreshTokenGroupByOutputType[P]>
        }
      >
    >


  export type RefreshTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tokenHash?: boolean
    expiresAt?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshToken"]>

  export type RefreshTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tokenHash?: boolean
    expiresAt?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshToken"]>

  export type RefreshTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tokenHash?: boolean
    expiresAt?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshToken"]>

  export type RefreshTokenSelectScalar = {
    id?: boolean
    tokenHash?: boolean
    expiresAt?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RefreshTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tokenHash" | "expiresAt" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["refreshToken"]>
  export type RefreshTokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RefreshTokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RefreshTokenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RefreshTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RefreshToken"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tokenHash: string
      expiresAt: Date
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["refreshToken"]>
    composites: {}
  }

  type RefreshTokenGetPayload<S extends boolean | null | undefined | RefreshTokenDefaultArgs> = $Result.GetResult<Prisma.$RefreshTokenPayload, S>

  type RefreshTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RefreshTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RefreshTokenCountAggregateInputType | true
    }

  export interface RefreshTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RefreshToken'], meta: { name: 'RefreshToken' } }
    /**
     * Find zero or one RefreshToken that matches the filter.
     * @param {RefreshTokenFindUniqueArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RefreshTokenFindUniqueArgs>(args: SelectSubset<T, RefreshTokenFindUniqueArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RefreshToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RefreshTokenFindUniqueOrThrowArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RefreshTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, RefreshTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RefreshToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindFirstArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RefreshTokenFindFirstArgs>(args?: SelectSubset<T, RefreshTokenFindFirstArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RefreshToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindFirstOrThrowArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RefreshTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, RefreshTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RefreshTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RefreshTokens
     * const refreshTokens = await prisma.refreshToken.findMany()
     * 
     * // Get first 10 RefreshTokens
     * const refreshTokens = await prisma.refreshToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RefreshTokenFindManyArgs>(args?: SelectSubset<T, RefreshTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RefreshToken.
     * @param {RefreshTokenCreateArgs} args - Arguments to create a RefreshToken.
     * @example
     * // Create one RefreshToken
     * const RefreshToken = await prisma.refreshToken.create({
     *   data: {
     *     // ... data to create a RefreshToken
     *   }
     * })
     * 
     */
    create<T extends RefreshTokenCreateArgs>(args: SelectSubset<T, RefreshTokenCreateArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RefreshTokens.
     * @param {RefreshTokenCreateManyArgs} args - Arguments to create many RefreshTokens.
     * @example
     * // Create many RefreshTokens
     * const refreshToken = await prisma.refreshToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RefreshTokenCreateManyArgs>(args?: SelectSubset<T, RefreshTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RefreshTokens and returns the data saved in the database.
     * @param {RefreshTokenCreateManyAndReturnArgs} args - Arguments to create many RefreshTokens.
     * @example
     * // Create many RefreshTokens
     * const refreshToken = await prisma.refreshToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RefreshTokens and only return the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RefreshTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, RefreshTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RefreshToken.
     * @param {RefreshTokenDeleteArgs} args - Arguments to delete one RefreshToken.
     * @example
     * // Delete one RefreshToken
     * const RefreshToken = await prisma.refreshToken.delete({
     *   where: {
     *     // ... filter to delete one RefreshToken
     *   }
     * })
     * 
     */
    delete<T extends RefreshTokenDeleteArgs>(args: SelectSubset<T, RefreshTokenDeleteArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RefreshToken.
     * @param {RefreshTokenUpdateArgs} args - Arguments to update one RefreshToken.
     * @example
     * // Update one RefreshToken
     * const refreshToken = await prisma.refreshToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RefreshTokenUpdateArgs>(args: SelectSubset<T, RefreshTokenUpdateArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RefreshTokens.
     * @param {RefreshTokenDeleteManyArgs} args - Arguments to filter RefreshTokens to delete.
     * @example
     * // Delete a few RefreshTokens
     * const { count } = await prisma.refreshToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RefreshTokenDeleteManyArgs>(args?: SelectSubset<T, RefreshTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RefreshTokens
     * const refreshToken = await prisma.refreshToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RefreshTokenUpdateManyArgs>(args: SelectSubset<T, RefreshTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RefreshTokens and returns the data updated in the database.
     * @param {RefreshTokenUpdateManyAndReturnArgs} args - Arguments to update many RefreshTokens.
     * @example
     * // Update many RefreshTokens
     * const refreshToken = await prisma.refreshToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RefreshTokens and only return the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.updateManyAndReturn({
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
    updateManyAndReturn<T extends RefreshTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, RefreshTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RefreshToken.
     * @param {RefreshTokenUpsertArgs} args - Arguments to update or create a RefreshToken.
     * @example
     * // Update or create a RefreshToken
     * const refreshToken = await prisma.refreshToken.upsert({
     *   create: {
     *     // ... data to create a RefreshToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RefreshToken we want to update
     *   }
     * })
     */
    upsert<T extends RefreshTokenUpsertArgs>(args: SelectSubset<T, RefreshTokenUpsertArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenCountArgs} args - Arguments to filter RefreshTokens to count.
     * @example
     * // Count the number of RefreshTokens
     * const count = await prisma.refreshToken.count({
     *   where: {
     *     // ... the filter for the RefreshTokens we want to count
     *   }
     * })
    **/
    count<T extends RefreshTokenCountArgs>(
      args?: Subset<T, RefreshTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RefreshTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RefreshTokenAggregateArgs>(args: Subset<T, RefreshTokenAggregateArgs>): Prisma.PrismaPromise<GetRefreshTokenAggregateType<T>>

    /**
     * Group by RefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenGroupByArgs} args - Group by arguments.
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
      T extends RefreshTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RefreshTokenGroupByArgs['orderBy'] }
        : { orderBy?: RefreshTokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RefreshTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRefreshTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RefreshToken model
   */
  readonly fields: RefreshTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RefreshToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RefreshTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the RefreshToken model
   */
  interface RefreshTokenFieldRefs {
    readonly id: FieldRef<"RefreshToken", 'String'>
    readonly tokenHash: FieldRef<"RefreshToken", 'String'>
    readonly expiresAt: FieldRef<"RefreshToken", 'DateTime'>
    readonly userId: FieldRef<"RefreshToken", 'String'>
    readonly createdAt: FieldRef<"RefreshToken", 'DateTime'>
    readonly updatedAt: FieldRef<"RefreshToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RefreshToken findUnique
   */
  export type RefreshTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken findUniqueOrThrow
   */
  export type RefreshTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken findFirst
   */
  export type RefreshTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken findFirstOrThrow
   */
  export type RefreshTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken findMany
   */
  export type RefreshTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshTokens to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken create
   */
  export type RefreshTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The data needed to create a RefreshToken.
     */
    data: XOR<RefreshTokenCreateInput, RefreshTokenUncheckedCreateInput>
  }

  /**
   * RefreshToken createMany
   */
  export type RefreshTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RefreshTokens.
     */
    data: RefreshTokenCreateManyInput | RefreshTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RefreshToken createManyAndReturn
   */
  export type RefreshTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * The data used to create many RefreshTokens.
     */
    data: RefreshTokenCreateManyInput | RefreshTokenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RefreshToken update
   */
  export type RefreshTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The data needed to update a RefreshToken.
     */
    data: XOR<RefreshTokenUpdateInput, RefreshTokenUncheckedUpdateInput>
    /**
     * Choose, which RefreshToken to update.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken updateMany
   */
  export type RefreshTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RefreshTokens.
     */
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyInput>
    /**
     * Filter which RefreshTokens to update
     */
    where?: RefreshTokenWhereInput
    /**
     * Limit how many RefreshTokens to update.
     */
    limit?: number
  }

  /**
   * RefreshToken updateManyAndReturn
   */
  export type RefreshTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * The data used to update RefreshTokens.
     */
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyInput>
    /**
     * Filter which RefreshTokens to update
     */
    where?: RefreshTokenWhereInput
    /**
     * Limit how many RefreshTokens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RefreshToken upsert
   */
  export type RefreshTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The filter to search for the RefreshToken to update in case it exists.
     */
    where: RefreshTokenWhereUniqueInput
    /**
     * In case the RefreshToken found by the `where` argument doesn't exist, create a new RefreshToken with this data.
     */
    create: XOR<RefreshTokenCreateInput, RefreshTokenUncheckedCreateInput>
    /**
     * In case the RefreshToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RefreshTokenUpdateInput, RefreshTokenUncheckedUpdateInput>
  }

  /**
   * RefreshToken delete
   */
  export type RefreshTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter which RefreshToken to delete.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken deleteMany
   */
  export type RefreshTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RefreshTokens to delete
     */
    where?: RefreshTokenWhereInput
    /**
     * Limit how many RefreshTokens to delete.
     */
    limit?: number
  }

  /**
   * RefreshToken without action
   */
  export type RefreshTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
  }


  /**
   * Model EmailVerificationToken
   */

  export type AggregateEmailVerificationToken = {
    _count: EmailVerificationTokenCountAggregateOutputType | null
    _min: EmailVerificationTokenMinAggregateOutputType | null
    _max: EmailVerificationTokenMaxAggregateOutputType | null
  }

  export type EmailVerificationTokenMinAggregateOutputType = {
    id: string | null
    tokenHash: string | null
    expiresAt: Date | null
    userId: string | null
    createdAt: Date | null
  }

  export type EmailVerificationTokenMaxAggregateOutputType = {
    id: string | null
    tokenHash: string | null
    expiresAt: Date | null
    userId: string | null
    createdAt: Date | null
  }

  export type EmailVerificationTokenCountAggregateOutputType = {
    id: number
    tokenHash: number
    expiresAt: number
    userId: number
    createdAt: number
    _all: number
  }


  export type EmailVerificationTokenMinAggregateInputType = {
    id?: true
    tokenHash?: true
    expiresAt?: true
    userId?: true
    createdAt?: true
  }

  export type EmailVerificationTokenMaxAggregateInputType = {
    id?: true
    tokenHash?: true
    expiresAt?: true
    userId?: true
    createdAt?: true
  }

  export type EmailVerificationTokenCountAggregateInputType = {
    id?: true
    tokenHash?: true
    expiresAt?: true
    userId?: true
    createdAt?: true
    _all?: true
  }

  export type EmailVerificationTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmailVerificationToken to aggregate.
     */
    where?: EmailVerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailVerificationTokens to fetch.
     */
    orderBy?: EmailVerificationTokenOrderByWithRelationInput | EmailVerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmailVerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailVerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailVerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EmailVerificationTokens
    **/
    _count?: true | EmailVerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmailVerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmailVerificationTokenMaxAggregateInputType
  }

  export type GetEmailVerificationTokenAggregateType<T extends EmailVerificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateEmailVerificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmailVerificationToken[P]>
      : GetScalarType<T[P], AggregateEmailVerificationToken[P]>
  }




  export type EmailVerificationTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmailVerificationTokenWhereInput
    orderBy?: EmailVerificationTokenOrderByWithAggregationInput | EmailVerificationTokenOrderByWithAggregationInput[]
    by: EmailVerificationTokenScalarFieldEnum[] | EmailVerificationTokenScalarFieldEnum
    having?: EmailVerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmailVerificationTokenCountAggregateInputType | true
    _min?: EmailVerificationTokenMinAggregateInputType
    _max?: EmailVerificationTokenMaxAggregateInputType
  }

  export type EmailVerificationTokenGroupByOutputType = {
    id: string
    tokenHash: string
    expiresAt: Date
    userId: string
    createdAt: Date
    _count: EmailVerificationTokenCountAggregateOutputType | null
    _min: EmailVerificationTokenMinAggregateOutputType | null
    _max: EmailVerificationTokenMaxAggregateOutputType | null
  }

  type GetEmailVerificationTokenGroupByPayload<T extends EmailVerificationTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmailVerificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmailVerificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmailVerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], EmailVerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type EmailVerificationTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tokenHash?: boolean
    expiresAt?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emailVerificationToken"]>

  export type EmailVerificationTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tokenHash?: boolean
    expiresAt?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emailVerificationToken"]>

  export type EmailVerificationTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tokenHash?: boolean
    expiresAt?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["emailVerificationToken"]>

  export type EmailVerificationTokenSelectScalar = {
    id?: boolean
    tokenHash?: boolean
    expiresAt?: boolean
    userId?: boolean
    createdAt?: boolean
  }

  export type EmailVerificationTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tokenHash" | "expiresAt" | "userId" | "createdAt", ExtArgs["result"]["emailVerificationToken"]>
  export type EmailVerificationTokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EmailVerificationTokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EmailVerificationTokenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $EmailVerificationTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EmailVerificationToken"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tokenHash: string
      expiresAt: Date
      userId: string
      createdAt: Date
    }, ExtArgs["result"]["emailVerificationToken"]>
    composites: {}
  }

  type EmailVerificationTokenGetPayload<S extends boolean | null | undefined | EmailVerificationTokenDefaultArgs> = $Result.GetResult<Prisma.$EmailVerificationTokenPayload, S>

  type EmailVerificationTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmailVerificationTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmailVerificationTokenCountAggregateInputType | true
    }

  export interface EmailVerificationTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EmailVerificationToken'], meta: { name: 'EmailVerificationToken' } }
    /**
     * Find zero or one EmailVerificationToken that matches the filter.
     * @param {EmailVerificationTokenFindUniqueArgs} args - Arguments to find a EmailVerificationToken
     * @example
     * // Get one EmailVerificationToken
     * const emailVerificationToken = await prisma.emailVerificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmailVerificationTokenFindUniqueArgs>(args: SelectSubset<T, EmailVerificationTokenFindUniqueArgs<ExtArgs>>): Prisma__EmailVerificationTokenClient<$Result.GetResult<Prisma.$EmailVerificationTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EmailVerificationToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmailVerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a EmailVerificationToken
     * @example
     * // Get one EmailVerificationToken
     * const emailVerificationToken = await prisma.emailVerificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmailVerificationTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, EmailVerificationTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmailVerificationTokenClient<$Result.GetResult<Prisma.$EmailVerificationTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmailVerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailVerificationTokenFindFirstArgs} args - Arguments to find a EmailVerificationToken
     * @example
     * // Get one EmailVerificationToken
     * const emailVerificationToken = await prisma.emailVerificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmailVerificationTokenFindFirstArgs>(args?: SelectSubset<T, EmailVerificationTokenFindFirstArgs<ExtArgs>>): Prisma__EmailVerificationTokenClient<$Result.GetResult<Prisma.$EmailVerificationTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmailVerificationToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailVerificationTokenFindFirstOrThrowArgs} args - Arguments to find a EmailVerificationToken
     * @example
     * // Get one EmailVerificationToken
     * const emailVerificationToken = await prisma.emailVerificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmailVerificationTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, EmailVerificationTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmailVerificationTokenClient<$Result.GetResult<Prisma.$EmailVerificationTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EmailVerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailVerificationTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EmailVerificationTokens
     * const emailVerificationTokens = await prisma.emailVerificationToken.findMany()
     * 
     * // Get first 10 EmailVerificationTokens
     * const emailVerificationTokens = await prisma.emailVerificationToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const emailVerificationTokenWithIdOnly = await prisma.emailVerificationToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmailVerificationTokenFindManyArgs>(args?: SelectSubset<T, EmailVerificationTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailVerificationTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EmailVerificationToken.
     * @param {EmailVerificationTokenCreateArgs} args - Arguments to create a EmailVerificationToken.
     * @example
     * // Create one EmailVerificationToken
     * const EmailVerificationToken = await prisma.emailVerificationToken.create({
     *   data: {
     *     // ... data to create a EmailVerificationToken
     *   }
     * })
     * 
     */
    create<T extends EmailVerificationTokenCreateArgs>(args: SelectSubset<T, EmailVerificationTokenCreateArgs<ExtArgs>>): Prisma__EmailVerificationTokenClient<$Result.GetResult<Prisma.$EmailVerificationTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EmailVerificationTokens.
     * @param {EmailVerificationTokenCreateManyArgs} args - Arguments to create many EmailVerificationTokens.
     * @example
     * // Create many EmailVerificationTokens
     * const emailVerificationToken = await prisma.emailVerificationToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmailVerificationTokenCreateManyArgs>(args?: SelectSubset<T, EmailVerificationTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EmailVerificationTokens and returns the data saved in the database.
     * @param {EmailVerificationTokenCreateManyAndReturnArgs} args - Arguments to create many EmailVerificationTokens.
     * @example
     * // Create many EmailVerificationTokens
     * const emailVerificationToken = await prisma.emailVerificationToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EmailVerificationTokens and only return the `id`
     * const emailVerificationTokenWithIdOnly = await prisma.emailVerificationToken.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmailVerificationTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, EmailVerificationTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailVerificationTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EmailVerificationToken.
     * @param {EmailVerificationTokenDeleteArgs} args - Arguments to delete one EmailVerificationToken.
     * @example
     * // Delete one EmailVerificationToken
     * const EmailVerificationToken = await prisma.emailVerificationToken.delete({
     *   where: {
     *     // ... filter to delete one EmailVerificationToken
     *   }
     * })
     * 
     */
    delete<T extends EmailVerificationTokenDeleteArgs>(args: SelectSubset<T, EmailVerificationTokenDeleteArgs<ExtArgs>>): Prisma__EmailVerificationTokenClient<$Result.GetResult<Prisma.$EmailVerificationTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EmailVerificationToken.
     * @param {EmailVerificationTokenUpdateArgs} args - Arguments to update one EmailVerificationToken.
     * @example
     * // Update one EmailVerificationToken
     * const emailVerificationToken = await prisma.emailVerificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmailVerificationTokenUpdateArgs>(args: SelectSubset<T, EmailVerificationTokenUpdateArgs<ExtArgs>>): Prisma__EmailVerificationTokenClient<$Result.GetResult<Prisma.$EmailVerificationTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EmailVerificationTokens.
     * @param {EmailVerificationTokenDeleteManyArgs} args - Arguments to filter EmailVerificationTokens to delete.
     * @example
     * // Delete a few EmailVerificationTokens
     * const { count } = await prisma.emailVerificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmailVerificationTokenDeleteManyArgs>(args?: SelectSubset<T, EmailVerificationTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmailVerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailVerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EmailVerificationTokens
     * const emailVerificationToken = await prisma.emailVerificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmailVerificationTokenUpdateManyArgs>(args: SelectSubset<T, EmailVerificationTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmailVerificationTokens and returns the data updated in the database.
     * @param {EmailVerificationTokenUpdateManyAndReturnArgs} args - Arguments to update many EmailVerificationTokens.
     * @example
     * // Update many EmailVerificationTokens
     * const emailVerificationToken = await prisma.emailVerificationToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EmailVerificationTokens and only return the `id`
     * const emailVerificationTokenWithIdOnly = await prisma.emailVerificationToken.updateManyAndReturn({
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
    updateManyAndReturn<T extends EmailVerificationTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, EmailVerificationTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmailVerificationTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EmailVerificationToken.
     * @param {EmailVerificationTokenUpsertArgs} args - Arguments to update or create a EmailVerificationToken.
     * @example
     * // Update or create a EmailVerificationToken
     * const emailVerificationToken = await prisma.emailVerificationToken.upsert({
     *   create: {
     *     // ... data to create a EmailVerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EmailVerificationToken we want to update
     *   }
     * })
     */
    upsert<T extends EmailVerificationTokenUpsertArgs>(args: SelectSubset<T, EmailVerificationTokenUpsertArgs<ExtArgs>>): Prisma__EmailVerificationTokenClient<$Result.GetResult<Prisma.$EmailVerificationTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EmailVerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailVerificationTokenCountArgs} args - Arguments to filter EmailVerificationTokens to count.
     * @example
     * // Count the number of EmailVerificationTokens
     * const count = await prisma.emailVerificationToken.count({
     *   where: {
     *     // ... the filter for the EmailVerificationTokens we want to count
     *   }
     * })
    **/
    count<T extends EmailVerificationTokenCountArgs>(
      args?: Subset<T, EmailVerificationTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmailVerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EmailVerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailVerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmailVerificationTokenAggregateArgs>(args: Subset<T, EmailVerificationTokenAggregateArgs>): Prisma.PrismaPromise<GetEmailVerificationTokenAggregateType<T>>

    /**
     * Group by EmailVerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmailVerificationTokenGroupByArgs} args - Group by arguments.
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
      T extends EmailVerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmailVerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: EmailVerificationTokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EmailVerificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmailVerificationTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EmailVerificationToken model
   */
  readonly fields: EmailVerificationTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EmailVerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmailVerificationTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the EmailVerificationToken model
   */
  interface EmailVerificationTokenFieldRefs {
    readonly id: FieldRef<"EmailVerificationToken", 'String'>
    readonly tokenHash: FieldRef<"EmailVerificationToken", 'String'>
    readonly expiresAt: FieldRef<"EmailVerificationToken", 'DateTime'>
    readonly userId: FieldRef<"EmailVerificationToken", 'String'>
    readonly createdAt: FieldRef<"EmailVerificationToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EmailVerificationToken findUnique
   */
  export type EmailVerificationTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationToken
     */
    select?: EmailVerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationToken
     */
    omit?: EmailVerificationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationTokenInclude<ExtArgs> | null
    /**
     * Filter, which EmailVerificationToken to fetch.
     */
    where: EmailVerificationTokenWhereUniqueInput
  }

  /**
   * EmailVerificationToken findUniqueOrThrow
   */
  export type EmailVerificationTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationToken
     */
    select?: EmailVerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationToken
     */
    omit?: EmailVerificationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationTokenInclude<ExtArgs> | null
    /**
     * Filter, which EmailVerificationToken to fetch.
     */
    where: EmailVerificationTokenWhereUniqueInput
  }

  /**
   * EmailVerificationToken findFirst
   */
  export type EmailVerificationTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationToken
     */
    select?: EmailVerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationToken
     */
    omit?: EmailVerificationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationTokenInclude<ExtArgs> | null
    /**
     * Filter, which EmailVerificationToken to fetch.
     */
    where?: EmailVerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailVerificationTokens to fetch.
     */
    orderBy?: EmailVerificationTokenOrderByWithRelationInput | EmailVerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmailVerificationTokens.
     */
    cursor?: EmailVerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailVerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailVerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmailVerificationTokens.
     */
    distinct?: EmailVerificationTokenScalarFieldEnum | EmailVerificationTokenScalarFieldEnum[]
  }

  /**
   * EmailVerificationToken findFirstOrThrow
   */
  export type EmailVerificationTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationToken
     */
    select?: EmailVerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationToken
     */
    omit?: EmailVerificationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationTokenInclude<ExtArgs> | null
    /**
     * Filter, which EmailVerificationToken to fetch.
     */
    where?: EmailVerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailVerificationTokens to fetch.
     */
    orderBy?: EmailVerificationTokenOrderByWithRelationInput | EmailVerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmailVerificationTokens.
     */
    cursor?: EmailVerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailVerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailVerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmailVerificationTokens.
     */
    distinct?: EmailVerificationTokenScalarFieldEnum | EmailVerificationTokenScalarFieldEnum[]
  }

  /**
   * EmailVerificationToken findMany
   */
  export type EmailVerificationTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationToken
     */
    select?: EmailVerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationToken
     */
    omit?: EmailVerificationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationTokenInclude<ExtArgs> | null
    /**
     * Filter, which EmailVerificationTokens to fetch.
     */
    where?: EmailVerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmailVerificationTokens to fetch.
     */
    orderBy?: EmailVerificationTokenOrderByWithRelationInput | EmailVerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EmailVerificationTokens.
     */
    cursor?: EmailVerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmailVerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmailVerificationTokens.
     */
    skip?: number
    distinct?: EmailVerificationTokenScalarFieldEnum | EmailVerificationTokenScalarFieldEnum[]
  }

  /**
   * EmailVerificationToken create
   */
  export type EmailVerificationTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationToken
     */
    select?: EmailVerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationToken
     */
    omit?: EmailVerificationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationTokenInclude<ExtArgs> | null
    /**
     * The data needed to create a EmailVerificationToken.
     */
    data: XOR<EmailVerificationTokenCreateInput, EmailVerificationTokenUncheckedCreateInput>
  }

  /**
   * EmailVerificationToken createMany
   */
  export type EmailVerificationTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EmailVerificationTokens.
     */
    data: EmailVerificationTokenCreateManyInput | EmailVerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EmailVerificationToken createManyAndReturn
   */
  export type EmailVerificationTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationToken
     */
    select?: EmailVerificationTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationToken
     */
    omit?: EmailVerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to create many EmailVerificationTokens.
     */
    data: EmailVerificationTokenCreateManyInput | EmailVerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationTokenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EmailVerificationToken update
   */
  export type EmailVerificationTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationToken
     */
    select?: EmailVerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationToken
     */
    omit?: EmailVerificationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationTokenInclude<ExtArgs> | null
    /**
     * The data needed to update a EmailVerificationToken.
     */
    data: XOR<EmailVerificationTokenUpdateInput, EmailVerificationTokenUncheckedUpdateInput>
    /**
     * Choose, which EmailVerificationToken to update.
     */
    where: EmailVerificationTokenWhereUniqueInput
  }

  /**
   * EmailVerificationToken updateMany
   */
  export type EmailVerificationTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EmailVerificationTokens.
     */
    data: XOR<EmailVerificationTokenUpdateManyMutationInput, EmailVerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which EmailVerificationTokens to update
     */
    where?: EmailVerificationTokenWhereInput
    /**
     * Limit how many EmailVerificationTokens to update.
     */
    limit?: number
  }

  /**
   * EmailVerificationToken updateManyAndReturn
   */
  export type EmailVerificationTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationToken
     */
    select?: EmailVerificationTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationToken
     */
    omit?: EmailVerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to update EmailVerificationTokens.
     */
    data: XOR<EmailVerificationTokenUpdateManyMutationInput, EmailVerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which EmailVerificationTokens to update
     */
    where?: EmailVerificationTokenWhereInput
    /**
     * Limit how many EmailVerificationTokens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationTokenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EmailVerificationToken upsert
   */
  export type EmailVerificationTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationToken
     */
    select?: EmailVerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationToken
     */
    omit?: EmailVerificationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationTokenInclude<ExtArgs> | null
    /**
     * The filter to search for the EmailVerificationToken to update in case it exists.
     */
    where: EmailVerificationTokenWhereUniqueInput
    /**
     * In case the EmailVerificationToken found by the `where` argument doesn't exist, create a new EmailVerificationToken with this data.
     */
    create: XOR<EmailVerificationTokenCreateInput, EmailVerificationTokenUncheckedCreateInput>
    /**
     * In case the EmailVerificationToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmailVerificationTokenUpdateInput, EmailVerificationTokenUncheckedUpdateInput>
  }

  /**
   * EmailVerificationToken delete
   */
  export type EmailVerificationTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationToken
     */
    select?: EmailVerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationToken
     */
    omit?: EmailVerificationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationTokenInclude<ExtArgs> | null
    /**
     * Filter which EmailVerificationToken to delete.
     */
    where: EmailVerificationTokenWhereUniqueInput
  }

  /**
   * EmailVerificationToken deleteMany
   */
  export type EmailVerificationTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmailVerificationTokens to delete
     */
    where?: EmailVerificationTokenWhereInput
    /**
     * Limit how many EmailVerificationTokens to delete.
     */
    limit?: number
  }

  /**
   * EmailVerificationToken without action
   */
  export type EmailVerificationTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmailVerificationToken
     */
    select?: EmailVerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmailVerificationToken
     */
    omit?: EmailVerificationTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmailVerificationTokenInclude<ExtArgs> | null
  }


  /**
   * Model PasswordResetToken
   */

  export type AggregatePasswordResetToken = {
    _count: PasswordResetTokenCountAggregateOutputType | null
    _min: PasswordResetTokenMinAggregateOutputType | null
    _max: PasswordResetTokenMaxAggregateOutputType | null
  }

  export type PasswordResetTokenMinAggregateOutputType = {
    id: string | null
    tokenHash: string | null
    expiresAt: Date | null
    userId: string | null
    createdAt: Date | null
  }

  export type PasswordResetTokenMaxAggregateOutputType = {
    id: string | null
    tokenHash: string | null
    expiresAt: Date | null
    userId: string | null
    createdAt: Date | null
  }

  export type PasswordResetTokenCountAggregateOutputType = {
    id: number
    tokenHash: number
    expiresAt: number
    userId: number
    createdAt: number
    _all: number
  }


  export type PasswordResetTokenMinAggregateInputType = {
    id?: true
    tokenHash?: true
    expiresAt?: true
    userId?: true
    createdAt?: true
  }

  export type PasswordResetTokenMaxAggregateInputType = {
    id?: true
    tokenHash?: true
    expiresAt?: true
    userId?: true
    createdAt?: true
  }

  export type PasswordResetTokenCountAggregateInputType = {
    id?: true
    tokenHash?: true
    expiresAt?: true
    userId?: true
    createdAt?: true
    _all?: true
  }

  export type PasswordResetTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PasswordResetToken to aggregate.
     */
    where?: PasswordResetTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResetTokens to fetch.
     */
    orderBy?: PasswordResetTokenOrderByWithRelationInput | PasswordResetTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PasswordResetTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResetTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResetTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PasswordResetTokens
    **/
    _count?: true | PasswordResetTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PasswordResetTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PasswordResetTokenMaxAggregateInputType
  }

  export type GetPasswordResetTokenAggregateType<T extends PasswordResetTokenAggregateArgs> = {
        [P in keyof T & keyof AggregatePasswordResetToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePasswordResetToken[P]>
      : GetScalarType<T[P], AggregatePasswordResetToken[P]>
  }




  export type PasswordResetTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PasswordResetTokenWhereInput
    orderBy?: PasswordResetTokenOrderByWithAggregationInput | PasswordResetTokenOrderByWithAggregationInput[]
    by: PasswordResetTokenScalarFieldEnum[] | PasswordResetTokenScalarFieldEnum
    having?: PasswordResetTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PasswordResetTokenCountAggregateInputType | true
    _min?: PasswordResetTokenMinAggregateInputType
    _max?: PasswordResetTokenMaxAggregateInputType
  }

  export type PasswordResetTokenGroupByOutputType = {
    id: string
    tokenHash: string
    expiresAt: Date
    userId: string
    createdAt: Date
    _count: PasswordResetTokenCountAggregateOutputType | null
    _min: PasswordResetTokenMinAggregateOutputType | null
    _max: PasswordResetTokenMaxAggregateOutputType | null
  }

  type GetPasswordResetTokenGroupByPayload<T extends PasswordResetTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PasswordResetTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PasswordResetTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PasswordResetTokenGroupByOutputType[P]>
            : GetScalarType<T[P], PasswordResetTokenGroupByOutputType[P]>
        }
      >
    >


  export type PasswordResetTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tokenHash?: boolean
    expiresAt?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["passwordResetToken"]>

  export type PasswordResetTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tokenHash?: boolean
    expiresAt?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["passwordResetToken"]>

  export type PasswordResetTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tokenHash?: boolean
    expiresAt?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["passwordResetToken"]>

  export type PasswordResetTokenSelectScalar = {
    id?: boolean
    tokenHash?: boolean
    expiresAt?: boolean
    userId?: boolean
    createdAt?: boolean
  }

  export type PasswordResetTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tokenHash" | "expiresAt" | "userId" | "createdAt", ExtArgs["result"]["passwordResetToken"]>
  export type PasswordResetTokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PasswordResetTokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PasswordResetTokenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PasswordResetTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PasswordResetToken"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tokenHash: string
      expiresAt: Date
      userId: string
      createdAt: Date
    }, ExtArgs["result"]["passwordResetToken"]>
    composites: {}
  }

  type PasswordResetTokenGetPayload<S extends boolean | null | undefined | PasswordResetTokenDefaultArgs> = $Result.GetResult<Prisma.$PasswordResetTokenPayload, S>

  type PasswordResetTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PasswordResetTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PasswordResetTokenCountAggregateInputType | true
    }

  export interface PasswordResetTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PasswordResetToken'], meta: { name: 'PasswordResetToken' } }
    /**
     * Find zero or one PasswordResetToken that matches the filter.
     * @param {PasswordResetTokenFindUniqueArgs} args - Arguments to find a PasswordResetToken
     * @example
     * // Get one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PasswordResetTokenFindUniqueArgs>(args: SelectSubset<T, PasswordResetTokenFindUniqueArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PasswordResetToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PasswordResetTokenFindUniqueOrThrowArgs} args - Arguments to find a PasswordResetToken
     * @example
     * // Get one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PasswordResetTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, PasswordResetTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PasswordResetToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenFindFirstArgs} args - Arguments to find a PasswordResetToken
     * @example
     * // Get one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PasswordResetTokenFindFirstArgs>(args?: SelectSubset<T, PasswordResetTokenFindFirstArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PasswordResetToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenFindFirstOrThrowArgs} args - Arguments to find a PasswordResetToken
     * @example
     * // Get one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PasswordResetTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, PasswordResetTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PasswordResetTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PasswordResetTokens
     * const passwordResetTokens = await prisma.passwordResetToken.findMany()
     * 
     * // Get first 10 PasswordResetTokens
     * const passwordResetTokens = await prisma.passwordResetToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const passwordResetTokenWithIdOnly = await prisma.passwordResetToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PasswordResetTokenFindManyArgs>(args?: SelectSubset<T, PasswordResetTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PasswordResetToken.
     * @param {PasswordResetTokenCreateArgs} args - Arguments to create a PasswordResetToken.
     * @example
     * // Create one PasswordResetToken
     * const PasswordResetToken = await prisma.passwordResetToken.create({
     *   data: {
     *     // ... data to create a PasswordResetToken
     *   }
     * })
     * 
     */
    create<T extends PasswordResetTokenCreateArgs>(args: SelectSubset<T, PasswordResetTokenCreateArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PasswordResetTokens.
     * @param {PasswordResetTokenCreateManyArgs} args - Arguments to create many PasswordResetTokens.
     * @example
     * // Create many PasswordResetTokens
     * const passwordResetToken = await prisma.passwordResetToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PasswordResetTokenCreateManyArgs>(args?: SelectSubset<T, PasswordResetTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PasswordResetTokens and returns the data saved in the database.
     * @param {PasswordResetTokenCreateManyAndReturnArgs} args - Arguments to create many PasswordResetTokens.
     * @example
     * // Create many PasswordResetTokens
     * const passwordResetToken = await prisma.passwordResetToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PasswordResetTokens and only return the `id`
     * const passwordResetTokenWithIdOnly = await prisma.passwordResetToken.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PasswordResetTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, PasswordResetTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PasswordResetToken.
     * @param {PasswordResetTokenDeleteArgs} args - Arguments to delete one PasswordResetToken.
     * @example
     * // Delete one PasswordResetToken
     * const PasswordResetToken = await prisma.passwordResetToken.delete({
     *   where: {
     *     // ... filter to delete one PasswordResetToken
     *   }
     * })
     * 
     */
    delete<T extends PasswordResetTokenDeleteArgs>(args: SelectSubset<T, PasswordResetTokenDeleteArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PasswordResetToken.
     * @param {PasswordResetTokenUpdateArgs} args - Arguments to update one PasswordResetToken.
     * @example
     * // Update one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PasswordResetTokenUpdateArgs>(args: SelectSubset<T, PasswordResetTokenUpdateArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PasswordResetTokens.
     * @param {PasswordResetTokenDeleteManyArgs} args - Arguments to filter PasswordResetTokens to delete.
     * @example
     * // Delete a few PasswordResetTokens
     * const { count } = await prisma.passwordResetToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PasswordResetTokenDeleteManyArgs>(args?: SelectSubset<T, PasswordResetTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PasswordResetTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PasswordResetTokens
     * const passwordResetToken = await prisma.passwordResetToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PasswordResetTokenUpdateManyArgs>(args: SelectSubset<T, PasswordResetTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PasswordResetTokens and returns the data updated in the database.
     * @param {PasswordResetTokenUpdateManyAndReturnArgs} args - Arguments to update many PasswordResetTokens.
     * @example
     * // Update many PasswordResetTokens
     * const passwordResetToken = await prisma.passwordResetToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PasswordResetTokens and only return the `id`
     * const passwordResetTokenWithIdOnly = await prisma.passwordResetToken.updateManyAndReturn({
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
    updateManyAndReturn<T extends PasswordResetTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, PasswordResetTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PasswordResetToken.
     * @param {PasswordResetTokenUpsertArgs} args - Arguments to update or create a PasswordResetToken.
     * @example
     * // Update or create a PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.upsert({
     *   create: {
     *     // ... data to create a PasswordResetToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PasswordResetToken we want to update
     *   }
     * })
     */
    upsert<T extends PasswordResetTokenUpsertArgs>(args: SelectSubset<T, PasswordResetTokenUpsertArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PasswordResetTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenCountArgs} args - Arguments to filter PasswordResetTokens to count.
     * @example
     * // Count the number of PasswordResetTokens
     * const count = await prisma.passwordResetToken.count({
     *   where: {
     *     // ... the filter for the PasswordResetTokens we want to count
     *   }
     * })
    **/
    count<T extends PasswordResetTokenCountArgs>(
      args?: Subset<T, PasswordResetTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PasswordResetTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PasswordResetToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PasswordResetTokenAggregateArgs>(args: Subset<T, PasswordResetTokenAggregateArgs>): Prisma.PrismaPromise<GetPasswordResetTokenAggregateType<T>>

    /**
     * Group by PasswordResetToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenGroupByArgs} args - Group by arguments.
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
      T extends PasswordResetTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PasswordResetTokenGroupByArgs['orderBy'] }
        : { orderBy?: PasswordResetTokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PasswordResetTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPasswordResetTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PasswordResetToken model
   */
  readonly fields: PasswordResetTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PasswordResetToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PasswordResetTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the PasswordResetToken model
   */
  interface PasswordResetTokenFieldRefs {
    readonly id: FieldRef<"PasswordResetToken", 'String'>
    readonly tokenHash: FieldRef<"PasswordResetToken", 'String'>
    readonly expiresAt: FieldRef<"PasswordResetToken", 'DateTime'>
    readonly userId: FieldRef<"PasswordResetToken", 'String'>
    readonly createdAt: FieldRef<"PasswordResetToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PasswordResetToken findUnique
   */
  export type PasswordResetTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null
    /**
     * Filter, which PasswordResetToken to fetch.
     */
    where: PasswordResetTokenWhereUniqueInput
  }

  /**
   * PasswordResetToken findUniqueOrThrow
   */
  export type PasswordResetTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null
    /**
     * Filter, which PasswordResetToken to fetch.
     */
    where: PasswordResetTokenWhereUniqueInput
  }

  /**
   * PasswordResetToken findFirst
   */
  export type PasswordResetTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null
    /**
     * Filter, which PasswordResetToken to fetch.
     */
    where?: PasswordResetTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResetTokens to fetch.
     */
    orderBy?: PasswordResetTokenOrderByWithRelationInput | PasswordResetTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PasswordResetTokens.
     */
    cursor?: PasswordResetTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResetTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResetTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PasswordResetTokens.
     */
    distinct?: PasswordResetTokenScalarFieldEnum | PasswordResetTokenScalarFieldEnum[]
  }

  /**
   * PasswordResetToken findFirstOrThrow
   */
  export type PasswordResetTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null
    /**
     * Filter, which PasswordResetToken to fetch.
     */
    where?: PasswordResetTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResetTokens to fetch.
     */
    orderBy?: PasswordResetTokenOrderByWithRelationInput | PasswordResetTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PasswordResetTokens.
     */
    cursor?: PasswordResetTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResetTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResetTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PasswordResetTokens.
     */
    distinct?: PasswordResetTokenScalarFieldEnum | PasswordResetTokenScalarFieldEnum[]
  }

  /**
   * PasswordResetToken findMany
   */
  export type PasswordResetTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null
    /**
     * Filter, which PasswordResetTokens to fetch.
     */
    where?: PasswordResetTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResetTokens to fetch.
     */
    orderBy?: PasswordResetTokenOrderByWithRelationInput | PasswordResetTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PasswordResetTokens.
     */
    cursor?: PasswordResetTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResetTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResetTokens.
     */
    skip?: number
    distinct?: PasswordResetTokenScalarFieldEnum | PasswordResetTokenScalarFieldEnum[]
  }

  /**
   * PasswordResetToken create
   */
  export type PasswordResetTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null
    /**
     * The data needed to create a PasswordResetToken.
     */
    data: XOR<PasswordResetTokenCreateInput, PasswordResetTokenUncheckedCreateInput>
  }

  /**
   * PasswordResetToken createMany
   */
  export type PasswordResetTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PasswordResetTokens.
     */
    data: PasswordResetTokenCreateManyInput | PasswordResetTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PasswordResetToken createManyAndReturn
   */
  export type PasswordResetTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * The data used to create many PasswordResetTokens.
     */
    data: PasswordResetTokenCreateManyInput | PasswordResetTokenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PasswordResetToken update
   */
  export type PasswordResetTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null
    /**
     * The data needed to update a PasswordResetToken.
     */
    data: XOR<PasswordResetTokenUpdateInput, PasswordResetTokenUncheckedUpdateInput>
    /**
     * Choose, which PasswordResetToken to update.
     */
    where: PasswordResetTokenWhereUniqueInput
  }

  /**
   * PasswordResetToken updateMany
   */
  export type PasswordResetTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PasswordResetTokens.
     */
    data: XOR<PasswordResetTokenUpdateManyMutationInput, PasswordResetTokenUncheckedUpdateManyInput>
    /**
     * Filter which PasswordResetTokens to update
     */
    where?: PasswordResetTokenWhereInput
    /**
     * Limit how many PasswordResetTokens to update.
     */
    limit?: number
  }

  /**
   * PasswordResetToken updateManyAndReturn
   */
  export type PasswordResetTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * The data used to update PasswordResetTokens.
     */
    data: XOR<PasswordResetTokenUpdateManyMutationInput, PasswordResetTokenUncheckedUpdateManyInput>
    /**
     * Filter which PasswordResetTokens to update
     */
    where?: PasswordResetTokenWhereInput
    /**
     * Limit how many PasswordResetTokens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PasswordResetToken upsert
   */
  export type PasswordResetTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null
    /**
     * The filter to search for the PasswordResetToken to update in case it exists.
     */
    where: PasswordResetTokenWhereUniqueInput
    /**
     * In case the PasswordResetToken found by the `where` argument doesn't exist, create a new PasswordResetToken with this data.
     */
    create: XOR<PasswordResetTokenCreateInput, PasswordResetTokenUncheckedCreateInput>
    /**
     * In case the PasswordResetToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PasswordResetTokenUpdateInput, PasswordResetTokenUncheckedUpdateInput>
  }

  /**
   * PasswordResetToken delete
   */
  export type PasswordResetTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null
    /**
     * Filter which PasswordResetToken to delete.
     */
    where: PasswordResetTokenWhereUniqueInput
  }

  /**
   * PasswordResetToken deleteMany
   */
  export type PasswordResetTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PasswordResetTokens to delete
     */
    where?: PasswordResetTokenWhereInput
    /**
     * Limit how many PasswordResetTokens to delete.
     */
    limit?: number
  }

  /**
   * PasswordResetToken without action
   */
  export type PasswordResetTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null
  }


  /**
   * Model InstructorProfile
   */

  export type AggregateInstructorProfile = {
    _count: InstructorProfileCountAggregateOutputType | null
    _min: InstructorProfileMinAggregateOutputType | null
    _max: InstructorProfileMaxAggregateOutputType | null
  }

  export type InstructorProfileMinAggregateOutputType = {
    id: string | null
    bio: string | null
    tradeId: string | null
    paystackRecipientCode: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InstructorProfileMaxAggregateOutputType = {
    id: string | null
    bio: string | null
    tradeId: string | null
    paystackRecipientCode: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InstructorProfileCountAggregateOutputType = {
    id: number
    bio: number
    tradeId: number
    paystackRecipientCode: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type InstructorProfileMinAggregateInputType = {
    id?: true
    bio?: true
    tradeId?: true
    paystackRecipientCode?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InstructorProfileMaxAggregateInputType = {
    id?: true
    bio?: true
    tradeId?: true
    paystackRecipientCode?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InstructorProfileCountAggregateInputType = {
    id?: true
    bio?: true
    tradeId?: true
    paystackRecipientCode?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type InstructorProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InstructorProfile to aggregate.
     */
    where?: InstructorProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InstructorProfiles to fetch.
     */
    orderBy?: InstructorProfileOrderByWithRelationInput | InstructorProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InstructorProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InstructorProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InstructorProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InstructorProfiles
    **/
    _count?: true | InstructorProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InstructorProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InstructorProfileMaxAggregateInputType
  }

  export type GetInstructorProfileAggregateType<T extends InstructorProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateInstructorProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInstructorProfile[P]>
      : GetScalarType<T[P], AggregateInstructorProfile[P]>
  }




  export type InstructorProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InstructorProfileWhereInput
    orderBy?: InstructorProfileOrderByWithAggregationInput | InstructorProfileOrderByWithAggregationInput[]
    by: InstructorProfileScalarFieldEnum[] | InstructorProfileScalarFieldEnum
    having?: InstructorProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InstructorProfileCountAggregateInputType | true
    _min?: InstructorProfileMinAggregateInputType
    _max?: InstructorProfileMaxAggregateInputType
  }

  export type InstructorProfileGroupByOutputType = {
    id: string
    bio: string | null
    tradeId: string
    paystackRecipientCode: string | null
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: InstructorProfileCountAggregateOutputType | null
    _min: InstructorProfileMinAggregateOutputType | null
    _max: InstructorProfileMaxAggregateOutputType | null
  }

  type GetInstructorProfileGroupByPayload<T extends InstructorProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InstructorProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InstructorProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InstructorProfileGroupByOutputType[P]>
            : GetScalarType<T[P], InstructorProfileGroupByOutputType[P]>
        }
      >
    >


  export type InstructorProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bio?: boolean
    tradeId?: boolean
    paystackRecipientCode?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    trade?: boolean | TradeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    courses?: boolean | InstructorProfile$coursesArgs<ExtArgs>
    _count?: boolean | InstructorProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["instructorProfile"]>

  export type InstructorProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bio?: boolean
    tradeId?: boolean
    paystackRecipientCode?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    trade?: boolean | TradeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["instructorProfile"]>

  export type InstructorProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bio?: boolean
    tradeId?: boolean
    paystackRecipientCode?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    trade?: boolean | TradeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["instructorProfile"]>

  export type InstructorProfileSelectScalar = {
    id?: boolean
    bio?: boolean
    tradeId?: boolean
    paystackRecipientCode?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type InstructorProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "bio" | "tradeId" | "paystackRecipientCode" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["instructorProfile"]>
  export type InstructorProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trade?: boolean | TradeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    courses?: boolean | InstructorProfile$coursesArgs<ExtArgs>
    _count?: boolean | InstructorProfileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InstructorProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trade?: boolean | TradeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type InstructorProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trade?: boolean | TradeDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $InstructorProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InstructorProfile"
    objects: {
      trade: Prisma.$TradePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      courses: Prisma.$CoursePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      bio: string | null
      tradeId: string
      paystackRecipientCode: string | null
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["instructorProfile"]>
    composites: {}
  }

  type InstructorProfileGetPayload<S extends boolean | null | undefined | InstructorProfileDefaultArgs> = $Result.GetResult<Prisma.$InstructorProfilePayload, S>

  type InstructorProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InstructorProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InstructorProfileCountAggregateInputType | true
    }

  export interface InstructorProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InstructorProfile'], meta: { name: 'InstructorProfile' } }
    /**
     * Find zero or one InstructorProfile that matches the filter.
     * @param {InstructorProfileFindUniqueArgs} args - Arguments to find a InstructorProfile
     * @example
     * // Get one InstructorProfile
     * const instructorProfile = await prisma.instructorProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InstructorProfileFindUniqueArgs>(args: SelectSubset<T, InstructorProfileFindUniqueArgs<ExtArgs>>): Prisma__InstructorProfileClient<$Result.GetResult<Prisma.$InstructorProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one InstructorProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InstructorProfileFindUniqueOrThrowArgs} args - Arguments to find a InstructorProfile
     * @example
     * // Get one InstructorProfile
     * const instructorProfile = await prisma.instructorProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InstructorProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, InstructorProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InstructorProfileClient<$Result.GetResult<Prisma.$InstructorProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InstructorProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructorProfileFindFirstArgs} args - Arguments to find a InstructorProfile
     * @example
     * // Get one InstructorProfile
     * const instructorProfile = await prisma.instructorProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InstructorProfileFindFirstArgs>(args?: SelectSubset<T, InstructorProfileFindFirstArgs<ExtArgs>>): Prisma__InstructorProfileClient<$Result.GetResult<Prisma.$InstructorProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first InstructorProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructorProfileFindFirstOrThrowArgs} args - Arguments to find a InstructorProfile
     * @example
     * // Get one InstructorProfile
     * const instructorProfile = await prisma.instructorProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InstructorProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, InstructorProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__InstructorProfileClient<$Result.GetResult<Prisma.$InstructorProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more InstructorProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructorProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InstructorProfiles
     * const instructorProfiles = await prisma.instructorProfile.findMany()
     * 
     * // Get first 10 InstructorProfiles
     * const instructorProfiles = await prisma.instructorProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const instructorProfileWithIdOnly = await prisma.instructorProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InstructorProfileFindManyArgs>(args?: SelectSubset<T, InstructorProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstructorProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a InstructorProfile.
     * @param {InstructorProfileCreateArgs} args - Arguments to create a InstructorProfile.
     * @example
     * // Create one InstructorProfile
     * const InstructorProfile = await prisma.instructorProfile.create({
     *   data: {
     *     // ... data to create a InstructorProfile
     *   }
     * })
     * 
     */
    create<T extends InstructorProfileCreateArgs>(args: SelectSubset<T, InstructorProfileCreateArgs<ExtArgs>>): Prisma__InstructorProfileClient<$Result.GetResult<Prisma.$InstructorProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many InstructorProfiles.
     * @param {InstructorProfileCreateManyArgs} args - Arguments to create many InstructorProfiles.
     * @example
     * // Create many InstructorProfiles
     * const instructorProfile = await prisma.instructorProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InstructorProfileCreateManyArgs>(args?: SelectSubset<T, InstructorProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many InstructorProfiles and returns the data saved in the database.
     * @param {InstructorProfileCreateManyAndReturnArgs} args - Arguments to create many InstructorProfiles.
     * @example
     * // Create many InstructorProfiles
     * const instructorProfile = await prisma.instructorProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many InstructorProfiles and only return the `id`
     * const instructorProfileWithIdOnly = await prisma.instructorProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InstructorProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, InstructorProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstructorProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a InstructorProfile.
     * @param {InstructorProfileDeleteArgs} args - Arguments to delete one InstructorProfile.
     * @example
     * // Delete one InstructorProfile
     * const InstructorProfile = await prisma.instructorProfile.delete({
     *   where: {
     *     // ... filter to delete one InstructorProfile
     *   }
     * })
     * 
     */
    delete<T extends InstructorProfileDeleteArgs>(args: SelectSubset<T, InstructorProfileDeleteArgs<ExtArgs>>): Prisma__InstructorProfileClient<$Result.GetResult<Prisma.$InstructorProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one InstructorProfile.
     * @param {InstructorProfileUpdateArgs} args - Arguments to update one InstructorProfile.
     * @example
     * // Update one InstructorProfile
     * const instructorProfile = await prisma.instructorProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InstructorProfileUpdateArgs>(args: SelectSubset<T, InstructorProfileUpdateArgs<ExtArgs>>): Prisma__InstructorProfileClient<$Result.GetResult<Prisma.$InstructorProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more InstructorProfiles.
     * @param {InstructorProfileDeleteManyArgs} args - Arguments to filter InstructorProfiles to delete.
     * @example
     * // Delete a few InstructorProfiles
     * const { count } = await prisma.instructorProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InstructorProfileDeleteManyArgs>(args?: SelectSubset<T, InstructorProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InstructorProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructorProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InstructorProfiles
     * const instructorProfile = await prisma.instructorProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InstructorProfileUpdateManyArgs>(args: SelectSubset<T, InstructorProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InstructorProfiles and returns the data updated in the database.
     * @param {InstructorProfileUpdateManyAndReturnArgs} args - Arguments to update many InstructorProfiles.
     * @example
     * // Update many InstructorProfiles
     * const instructorProfile = await prisma.instructorProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more InstructorProfiles and only return the `id`
     * const instructorProfileWithIdOnly = await prisma.instructorProfile.updateManyAndReturn({
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
    updateManyAndReturn<T extends InstructorProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, InstructorProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstructorProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one InstructorProfile.
     * @param {InstructorProfileUpsertArgs} args - Arguments to update or create a InstructorProfile.
     * @example
     * // Update or create a InstructorProfile
     * const instructorProfile = await prisma.instructorProfile.upsert({
     *   create: {
     *     // ... data to create a InstructorProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InstructorProfile we want to update
     *   }
     * })
     */
    upsert<T extends InstructorProfileUpsertArgs>(args: SelectSubset<T, InstructorProfileUpsertArgs<ExtArgs>>): Prisma__InstructorProfileClient<$Result.GetResult<Prisma.$InstructorProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of InstructorProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructorProfileCountArgs} args - Arguments to filter InstructorProfiles to count.
     * @example
     * // Count the number of InstructorProfiles
     * const count = await prisma.instructorProfile.count({
     *   where: {
     *     // ... the filter for the InstructorProfiles we want to count
     *   }
     * })
    **/
    count<T extends InstructorProfileCountArgs>(
      args?: Subset<T, InstructorProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InstructorProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InstructorProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructorProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InstructorProfileAggregateArgs>(args: Subset<T, InstructorProfileAggregateArgs>): Prisma.PrismaPromise<GetInstructorProfileAggregateType<T>>

    /**
     * Group by InstructorProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstructorProfileGroupByArgs} args - Group by arguments.
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
      T extends InstructorProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InstructorProfileGroupByArgs['orderBy'] }
        : { orderBy?: InstructorProfileGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InstructorProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInstructorProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InstructorProfile model
   */
  readonly fields: InstructorProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InstructorProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InstructorProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    trade<T extends TradeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TradeDefaultArgs<ExtArgs>>): Prisma__TradeClient<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    courses<T extends InstructorProfile$coursesArgs<ExtArgs> = {}>(args?: Subset<T, InstructorProfile$coursesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the InstructorProfile model
   */
  interface InstructorProfileFieldRefs {
    readonly id: FieldRef<"InstructorProfile", 'String'>
    readonly bio: FieldRef<"InstructorProfile", 'String'>
    readonly tradeId: FieldRef<"InstructorProfile", 'String'>
    readonly paystackRecipientCode: FieldRef<"InstructorProfile", 'String'>
    readonly userId: FieldRef<"InstructorProfile", 'String'>
    readonly createdAt: FieldRef<"InstructorProfile", 'DateTime'>
    readonly updatedAt: FieldRef<"InstructorProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * InstructorProfile findUnique
   */
  export type InstructorProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstructorProfile
     */
    select?: InstructorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstructorProfile
     */
    omit?: InstructorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorProfileInclude<ExtArgs> | null
    /**
     * Filter, which InstructorProfile to fetch.
     */
    where: InstructorProfileWhereUniqueInput
  }

  /**
   * InstructorProfile findUniqueOrThrow
   */
  export type InstructorProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstructorProfile
     */
    select?: InstructorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstructorProfile
     */
    omit?: InstructorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorProfileInclude<ExtArgs> | null
    /**
     * Filter, which InstructorProfile to fetch.
     */
    where: InstructorProfileWhereUniqueInput
  }

  /**
   * InstructorProfile findFirst
   */
  export type InstructorProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstructorProfile
     */
    select?: InstructorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstructorProfile
     */
    omit?: InstructorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorProfileInclude<ExtArgs> | null
    /**
     * Filter, which InstructorProfile to fetch.
     */
    where?: InstructorProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InstructorProfiles to fetch.
     */
    orderBy?: InstructorProfileOrderByWithRelationInput | InstructorProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InstructorProfiles.
     */
    cursor?: InstructorProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InstructorProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InstructorProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InstructorProfiles.
     */
    distinct?: InstructorProfileScalarFieldEnum | InstructorProfileScalarFieldEnum[]
  }

  /**
   * InstructorProfile findFirstOrThrow
   */
  export type InstructorProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstructorProfile
     */
    select?: InstructorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstructorProfile
     */
    omit?: InstructorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorProfileInclude<ExtArgs> | null
    /**
     * Filter, which InstructorProfile to fetch.
     */
    where?: InstructorProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InstructorProfiles to fetch.
     */
    orderBy?: InstructorProfileOrderByWithRelationInput | InstructorProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InstructorProfiles.
     */
    cursor?: InstructorProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InstructorProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InstructorProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InstructorProfiles.
     */
    distinct?: InstructorProfileScalarFieldEnum | InstructorProfileScalarFieldEnum[]
  }

  /**
   * InstructorProfile findMany
   */
  export type InstructorProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstructorProfile
     */
    select?: InstructorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstructorProfile
     */
    omit?: InstructorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorProfileInclude<ExtArgs> | null
    /**
     * Filter, which InstructorProfiles to fetch.
     */
    where?: InstructorProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InstructorProfiles to fetch.
     */
    orderBy?: InstructorProfileOrderByWithRelationInput | InstructorProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InstructorProfiles.
     */
    cursor?: InstructorProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InstructorProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InstructorProfiles.
     */
    skip?: number
    distinct?: InstructorProfileScalarFieldEnum | InstructorProfileScalarFieldEnum[]
  }

  /**
   * InstructorProfile create
   */
  export type InstructorProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstructorProfile
     */
    select?: InstructorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstructorProfile
     */
    omit?: InstructorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a InstructorProfile.
     */
    data: XOR<InstructorProfileCreateInput, InstructorProfileUncheckedCreateInput>
  }

  /**
   * InstructorProfile createMany
   */
  export type InstructorProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InstructorProfiles.
     */
    data: InstructorProfileCreateManyInput | InstructorProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * InstructorProfile createManyAndReturn
   */
  export type InstructorProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstructorProfile
     */
    select?: InstructorProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InstructorProfile
     */
    omit?: InstructorProfileOmit<ExtArgs> | null
    /**
     * The data used to create many InstructorProfiles.
     */
    data: InstructorProfileCreateManyInput | InstructorProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * InstructorProfile update
   */
  export type InstructorProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstructorProfile
     */
    select?: InstructorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstructorProfile
     */
    omit?: InstructorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a InstructorProfile.
     */
    data: XOR<InstructorProfileUpdateInput, InstructorProfileUncheckedUpdateInput>
    /**
     * Choose, which InstructorProfile to update.
     */
    where: InstructorProfileWhereUniqueInput
  }

  /**
   * InstructorProfile updateMany
   */
  export type InstructorProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InstructorProfiles.
     */
    data: XOR<InstructorProfileUpdateManyMutationInput, InstructorProfileUncheckedUpdateManyInput>
    /**
     * Filter which InstructorProfiles to update
     */
    where?: InstructorProfileWhereInput
    /**
     * Limit how many InstructorProfiles to update.
     */
    limit?: number
  }

  /**
   * InstructorProfile updateManyAndReturn
   */
  export type InstructorProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstructorProfile
     */
    select?: InstructorProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the InstructorProfile
     */
    omit?: InstructorProfileOmit<ExtArgs> | null
    /**
     * The data used to update InstructorProfiles.
     */
    data: XOR<InstructorProfileUpdateManyMutationInput, InstructorProfileUncheckedUpdateManyInput>
    /**
     * Filter which InstructorProfiles to update
     */
    where?: InstructorProfileWhereInput
    /**
     * Limit how many InstructorProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * InstructorProfile upsert
   */
  export type InstructorProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstructorProfile
     */
    select?: InstructorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstructorProfile
     */
    omit?: InstructorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the InstructorProfile to update in case it exists.
     */
    where: InstructorProfileWhereUniqueInput
    /**
     * In case the InstructorProfile found by the `where` argument doesn't exist, create a new InstructorProfile with this data.
     */
    create: XOR<InstructorProfileCreateInput, InstructorProfileUncheckedCreateInput>
    /**
     * In case the InstructorProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InstructorProfileUpdateInput, InstructorProfileUncheckedUpdateInput>
  }

  /**
   * InstructorProfile delete
   */
  export type InstructorProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstructorProfile
     */
    select?: InstructorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstructorProfile
     */
    omit?: InstructorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorProfileInclude<ExtArgs> | null
    /**
     * Filter which InstructorProfile to delete.
     */
    where: InstructorProfileWhereUniqueInput
  }

  /**
   * InstructorProfile deleteMany
   */
  export type InstructorProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InstructorProfiles to delete
     */
    where?: InstructorProfileWhereInput
    /**
     * Limit how many InstructorProfiles to delete.
     */
    limit?: number
  }

  /**
   * InstructorProfile.courses
   */
  export type InstructorProfile$coursesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    cursor?: CourseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * InstructorProfile without action
   */
  export type InstructorProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstructorProfile
     */
    select?: InstructorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstructorProfile
     */
    omit?: InstructorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorProfileInclude<ExtArgs> | null
  }


  /**
   * Model Trade
   */

  export type AggregateTrade = {
    _count: TradeCountAggregateOutputType | null
    _min: TradeMinAggregateOutputType | null
    _max: TradeMaxAggregateOutputType | null
  }

  export type TradeMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type TradeMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type TradeCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type TradeMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type TradeMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type TradeCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type TradeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Trade to aggregate.
     */
    where?: TradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trades to fetch.
     */
    orderBy?: TradeOrderByWithRelationInput | TradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Trades
    **/
    _count?: true | TradeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TradeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TradeMaxAggregateInputType
  }

  export type GetTradeAggregateType<T extends TradeAggregateArgs> = {
        [P in keyof T & keyof AggregateTrade]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrade[P]>
      : GetScalarType<T[P], AggregateTrade[P]>
  }




  export type TradeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TradeWhereInput
    orderBy?: TradeOrderByWithAggregationInput | TradeOrderByWithAggregationInput[]
    by: TradeScalarFieldEnum[] | TradeScalarFieldEnum
    having?: TradeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TradeCountAggregateInputType | true
    _min?: TradeMinAggregateInputType
    _max?: TradeMaxAggregateInputType
  }

  export type TradeGroupByOutputType = {
    id: string
    name: string
    _count: TradeCountAggregateOutputType | null
    _min: TradeMinAggregateOutputType | null
    _max: TradeMaxAggregateOutputType | null
  }

  type GetTradeGroupByPayload<T extends TradeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TradeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TradeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TradeGroupByOutputType[P]>
            : GetScalarType<T[P], TradeGroupByOutputType[P]>
        }
      >
    >


  export type TradeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    instructors?: boolean | Trade$instructorsArgs<ExtArgs>
    _count?: boolean | TradeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trade"]>

  export type TradeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["trade"]>

  export type TradeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["trade"]>

  export type TradeSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type TradeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["trade"]>
  export type TradeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instructors?: boolean | Trade$instructorsArgs<ExtArgs>
    _count?: boolean | TradeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TradeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TradeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TradePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Trade"
    objects: {
      instructors: Prisma.$InstructorProfilePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["trade"]>
    composites: {}
  }

  type TradeGetPayload<S extends boolean | null | undefined | TradeDefaultArgs> = $Result.GetResult<Prisma.$TradePayload, S>

  type TradeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TradeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TradeCountAggregateInputType | true
    }

  export interface TradeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Trade'], meta: { name: 'Trade' } }
    /**
     * Find zero or one Trade that matches the filter.
     * @param {TradeFindUniqueArgs} args - Arguments to find a Trade
     * @example
     * // Get one Trade
     * const trade = await prisma.trade.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TradeFindUniqueArgs>(args: SelectSubset<T, TradeFindUniqueArgs<ExtArgs>>): Prisma__TradeClient<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Trade that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TradeFindUniqueOrThrowArgs} args - Arguments to find a Trade
     * @example
     * // Get one Trade
     * const trade = await prisma.trade.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TradeFindUniqueOrThrowArgs>(args: SelectSubset<T, TradeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TradeClient<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trade that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradeFindFirstArgs} args - Arguments to find a Trade
     * @example
     * // Get one Trade
     * const trade = await prisma.trade.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TradeFindFirstArgs>(args?: SelectSubset<T, TradeFindFirstArgs<ExtArgs>>): Prisma__TradeClient<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trade that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradeFindFirstOrThrowArgs} args - Arguments to find a Trade
     * @example
     * // Get one Trade
     * const trade = await prisma.trade.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TradeFindFirstOrThrowArgs>(args?: SelectSubset<T, TradeFindFirstOrThrowArgs<ExtArgs>>): Prisma__TradeClient<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Trades that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Trades
     * const trades = await prisma.trade.findMany()
     * 
     * // Get first 10 Trades
     * const trades = await prisma.trade.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tradeWithIdOnly = await prisma.trade.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TradeFindManyArgs>(args?: SelectSubset<T, TradeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Trade.
     * @param {TradeCreateArgs} args - Arguments to create a Trade.
     * @example
     * // Create one Trade
     * const Trade = await prisma.trade.create({
     *   data: {
     *     // ... data to create a Trade
     *   }
     * })
     * 
     */
    create<T extends TradeCreateArgs>(args: SelectSubset<T, TradeCreateArgs<ExtArgs>>): Prisma__TradeClient<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Trades.
     * @param {TradeCreateManyArgs} args - Arguments to create many Trades.
     * @example
     * // Create many Trades
     * const trade = await prisma.trade.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TradeCreateManyArgs>(args?: SelectSubset<T, TradeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Trades and returns the data saved in the database.
     * @param {TradeCreateManyAndReturnArgs} args - Arguments to create many Trades.
     * @example
     * // Create many Trades
     * const trade = await prisma.trade.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Trades and only return the `id`
     * const tradeWithIdOnly = await prisma.trade.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TradeCreateManyAndReturnArgs>(args?: SelectSubset<T, TradeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Trade.
     * @param {TradeDeleteArgs} args - Arguments to delete one Trade.
     * @example
     * // Delete one Trade
     * const Trade = await prisma.trade.delete({
     *   where: {
     *     // ... filter to delete one Trade
     *   }
     * })
     * 
     */
    delete<T extends TradeDeleteArgs>(args: SelectSubset<T, TradeDeleteArgs<ExtArgs>>): Prisma__TradeClient<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Trade.
     * @param {TradeUpdateArgs} args - Arguments to update one Trade.
     * @example
     * // Update one Trade
     * const trade = await prisma.trade.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TradeUpdateArgs>(args: SelectSubset<T, TradeUpdateArgs<ExtArgs>>): Prisma__TradeClient<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Trades.
     * @param {TradeDeleteManyArgs} args - Arguments to filter Trades to delete.
     * @example
     * // Delete a few Trades
     * const { count } = await prisma.trade.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TradeDeleteManyArgs>(args?: SelectSubset<T, TradeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Trades
     * const trade = await prisma.trade.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TradeUpdateManyArgs>(args: SelectSubset<T, TradeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Trades and returns the data updated in the database.
     * @param {TradeUpdateManyAndReturnArgs} args - Arguments to update many Trades.
     * @example
     * // Update many Trades
     * const trade = await prisma.trade.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Trades and only return the `id`
     * const tradeWithIdOnly = await prisma.trade.updateManyAndReturn({
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
    updateManyAndReturn<T extends TradeUpdateManyAndReturnArgs>(args: SelectSubset<T, TradeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Trade.
     * @param {TradeUpsertArgs} args - Arguments to update or create a Trade.
     * @example
     * // Update or create a Trade
     * const trade = await prisma.trade.upsert({
     *   create: {
     *     // ... data to create a Trade
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Trade we want to update
     *   }
     * })
     */
    upsert<T extends TradeUpsertArgs>(args: SelectSubset<T, TradeUpsertArgs<ExtArgs>>): Prisma__TradeClient<$Result.GetResult<Prisma.$TradePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Trades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradeCountArgs} args - Arguments to filter Trades to count.
     * @example
     * // Count the number of Trades
     * const count = await prisma.trade.count({
     *   where: {
     *     // ... the filter for the Trades we want to count
     *   }
     * })
    **/
    count<T extends TradeCountArgs>(
      args?: Subset<T, TradeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TradeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Trade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TradeAggregateArgs>(args: Subset<T, TradeAggregateArgs>): Prisma.PrismaPromise<GetTradeAggregateType<T>>

    /**
     * Group by Trade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TradeGroupByArgs} args - Group by arguments.
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
      T extends TradeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TradeGroupByArgs['orderBy'] }
        : { orderBy?: TradeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TradeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTradeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Trade model
   */
  readonly fields: TradeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Trade.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TradeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    instructors<T extends Trade$instructorsArgs<ExtArgs> = {}>(args?: Subset<T, Trade$instructorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstructorProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Trade model
   */
  interface TradeFieldRefs {
    readonly id: FieldRef<"Trade", 'String'>
    readonly name: FieldRef<"Trade", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Trade findUnique
   */
  export type TradeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeInclude<ExtArgs> | null
    /**
     * Filter, which Trade to fetch.
     */
    where: TradeWhereUniqueInput
  }

  /**
   * Trade findUniqueOrThrow
   */
  export type TradeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeInclude<ExtArgs> | null
    /**
     * Filter, which Trade to fetch.
     */
    where: TradeWhereUniqueInput
  }

  /**
   * Trade findFirst
   */
  export type TradeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeInclude<ExtArgs> | null
    /**
     * Filter, which Trade to fetch.
     */
    where?: TradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trades to fetch.
     */
    orderBy?: TradeOrderByWithRelationInput | TradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Trades.
     */
    cursor?: TradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trades.
     */
    distinct?: TradeScalarFieldEnum | TradeScalarFieldEnum[]
  }

  /**
   * Trade findFirstOrThrow
   */
  export type TradeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeInclude<ExtArgs> | null
    /**
     * Filter, which Trade to fetch.
     */
    where?: TradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trades to fetch.
     */
    orderBy?: TradeOrderByWithRelationInput | TradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Trades.
     */
    cursor?: TradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Trades.
     */
    distinct?: TradeScalarFieldEnum | TradeScalarFieldEnum[]
  }

  /**
   * Trade findMany
   */
  export type TradeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeInclude<ExtArgs> | null
    /**
     * Filter, which Trades to fetch.
     */
    where?: TradeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Trades to fetch.
     */
    orderBy?: TradeOrderByWithRelationInput | TradeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Trades.
     */
    cursor?: TradeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Trades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Trades.
     */
    skip?: number
    distinct?: TradeScalarFieldEnum | TradeScalarFieldEnum[]
  }

  /**
   * Trade create
   */
  export type TradeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeInclude<ExtArgs> | null
    /**
     * The data needed to create a Trade.
     */
    data: XOR<TradeCreateInput, TradeUncheckedCreateInput>
  }

  /**
   * Trade createMany
   */
  export type TradeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Trades.
     */
    data: TradeCreateManyInput | TradeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Trade createManyAndReturn
   */
  export type TradeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * The data used to create many Trades.
     */
    data: TradeCreateManyInput | TradeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Trade update
   */
  export type TradeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeInclude<ExtArgs> | null
    /**
     * The data needed to update a Trade.
     */
    data: XOR<TradeUpdateInput, TradeUncheckedUpdateInput>
    /**
     * Choose, which Trade to update.
     */
    where: TradeWhereUniqueInput
  }

  /**
   * Trade updateMany
   */
  export type TradeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Trades.
     */
    data: XOR<TradeUpdateManyMutationInput, TradeUncheckedUpdateManyInput>
    /**
     * Filter which Trades to update
     */
    where?: TradeWhereInput
    /**
     * Limit how many Trades to update.
     */
    limit?: number
  }

  /**
   * Trade updateManyAndReturn
   */
  export type TradeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * The data used to update Trades.
     */
    data: XOR<TradeUpdateManyMutationInput, TradeUncheckedUpdateManyInput>
    /**
     * Filter which Trades to update
     */
    where?: TradeWhereInput
    /**
     * Limit how many Trades to update.
     */
    limit?: number
  }

  /**
   * Trade upsert
   */
  export type TradeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeInclude<ExtArgs> | null
    /**
     * The filter to search for the Trade to update in case it exists.
     */
    where: TradeWhereUniqueInput
    /**
     * In case the Trade found by the `where` argument doesn't exist, create a new Trade with this data.
     */
    create: XOR<TradeCreateInput, TradeUncheckedCreateInput>
    /**
     * In case the Trade was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TradeUpdateInput, TradeUncheckedUpdateInput>
  }

  /**
   * Trade delete
   */
  export type TradeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeInclude<ExtArgs> | null
    /**
     * Filter which Trade to delete.
     */
    where: TradeWhereUniqueInput
  }

  /**
   * Trade deleteMany
   */
  export type TradeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Trades to delete
     */
    where?: TradeWhereInput
    /**
     * Limit how many Trades to delete.
     */
    limit?: number
  }

  /**
   * Trade.instructors
   */
  export type Trade$instructorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstructorProfile
     */
    select?: InstructorProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the InstructorProfile
     */
    omit?: InstructorProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstructorProfileInclude<ExtArgs> | null
    where?: InstructorProfileWhereInput
    orderBy?: InstructorProfileOrderByWithRelationInput | InstructorProfileOrderByWithRelationInput[]
    cursor?: InstructorProfileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InstructorProfileScalarFieldEnum | InstructorProfileScalarFieldEnum[]
  }

  /**
   * Trade without action
   */
  export type TradeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trade
     */
    select?: TradeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trade
     */
    omit?: TradeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TradeInclude<ExtArgs> | null
  }


  /**
   * Model Course
   */

  export type AggregateCourse = {
    _count: CourseCountAggregateOutputType | null
    _avg: CourseAvgAggregateOutputType | null
    _sum: CourseSumAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  export type CourseAvgAggregateOutputType = {
    price: number | null
  }

  export type CourseSumAggregateOutputType = {
    price: number | null
  }

  export type CourseMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    price: number | null
    status: $Enums.CourseStatus | null
    coverImageUrl: string | null
    instructorProfileId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CourseMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    price: number | null
    status: $Enums.CourseStatus | null
    coverImageUrl: string | null
    instructorProfileId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CourseCountAggregateOutputType = {
    id: number
    title: number
    description: number
    price: number
    status: number
    coverImageUrl: number
    instructorProfileId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CourseAvgAggregateInputType = {
    price?: true
  }

  export type CourseSumAggregateInputType = {
    price?: true
  }

  export type CourseMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    price?: true
    status?: true
    coverImageUrl?: true
    instructorProfileId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CourseMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    price?: true
    status?: true
    coverImageUrl?: true
    instructorProfileId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CourseCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    price?: true
    status?: true
    coverImageUrl?: true
    instructorProfileId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CourseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Course to aggregate.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Courses
    **/
    _count?: true | CourseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CourseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CourseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseMaxAggregateInputType
  }

  export type GetCourseAggregateType<T extends CourseAggregateArgs> = {
        [P in keyof T & keyof AggregateCourse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourse[P]>
      : GetScalarType<T[P], AggregateCourse[P]>
  }




  export type CourseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithAggregationInput | CourseOrderByWithAggregationInput[]
    by: CourseScalarFieldEnum[] | CourseScalarFieldEnum
    having?: CourseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseCountAggregateInputType | true
    _avg?: CourseAvgAggregateInputType
    _sum?: CourseSumAggregateInputType
    _min?: CourseMinAggregateInputType
    _max?: CourseMaxAggregateInputType
  }

  export type CourseGroupByOutputType = {
    id: string
    title: string
    description: string
    price: number
    status: $Enums.CourseStatus
    coverImageUrl: string | null
    instructorProfileId: string
    createdAt: Date
    updatedAt: Date
    _count: CourseCountAggregateOutputType | null
    _avg: CourseAvgAggregateOutputType | null
    _sum: CourseSumAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  type GetCourseGroupByPayload<T extends CourseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseGroupByOutputType[P]>
            : GetScalarType<T[P], CourseGroupByOutputType[P]>
        }
      >
    >


  export type CourseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    price?: boolean
    status?: boolean
    coverImageUrl?: boolean
    instructorProfileId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    instructorProfile?: boolean | InstructorProfileDefaultArgs<ExtArgs>
    modules?: boolean | Course$modulesArgs<ExtArgs>
    enrollments?: boolean | Course$enrollmentsArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type CourseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    price?: boolean
    status?: boolean
    coverImageUrl?: boolean
    instructorProfileId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    instructorProfile?: boolean | InstructorProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type CourseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    price?: boolean
    status?: boolean
    coverImageUrl?: boolean
    instructorProfileId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    instructorProfile?: boolean | InstructorProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type CourseSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    price?: boolean
    status?: boolean
    coverImageUrl?: boolean
    instructorProfileId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CourseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "price" | "status" | "coverImageUrl" | "instructorProfileId" | "createdAt" | "updatedAt", ExtArgs["result"]["course"]>
  export type CourseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instructorProfile?: boolean | InstructorProfileDefaultArgs<ExtArgs>
    modules?: boolean | Course$modulesArgs<ExtArgs>
    enrollments?: boolean | Course$enrollmentsArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CourseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instructorProfile?: boolean | InstructorProfileDefaultArgs<ExtArgs>
  }
  export type CourseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    instructorProfile?: boolean | InstructorProfileDefaultArgs<ExtArgs>
  }

  export type $CoursePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Course"
    objects: {
      instructorProfile: Prisma.$InstructorProfilePayload<ExtArgs>
      modules: Prisma.$ModulePayload<ExtArgs>[]
      enrollments: Prisma.$EnrollmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      price: number
      status: $Enums.CourseStatus
      coverImageUrl: string | null
      instructorProfileId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["course"]>
    composites: {}
  }

  type CourseGetPayload<S extends boolean | null | undefined | CourseDefaultArgs> = $Result.GetResult<Prisma.$CoursePayload, S>

  type CourseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CourseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CourseCountAggregateInputType | true
    }

  export interface CourseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Course'], meta: { name: 'Course' } }
    /**
     * Find zero or one Course that matches the filter.
     * @param {CourseFindUniqueArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CourseFindUniqueArgs>(args: SelectSubset<T, CourseFindUniqueArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Course that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CourseFindUniqueOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CourseFindUniqueOrThrowArgs>(args: SelectSubset<T, CourseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CourseFindFirstArgs>(args?: SelectSubset<T, CourseFindFirstArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CourseFindFirstOrThrowArgs>(args?: SelectSubset<T, CourseFindFirstOrThrowArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Courses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Courses
     * const courses = await prisma.course.findMany()
     * 
     * // Get first 10 Courses
     * const courses = await prisma.course.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courseWithIdOnly = await prisma.course.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CourseFindManyArgs>(args?: SelectSubset<T, CourseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Course.
     * @param {CourseCreateArgs} args - Arguments to create a Course.
     * @example
     * // Create one Course
     * const Course = await prisma.course.create({
     *   data: {
     *     // ... data to create a Course
     *   }
     * })
     * 
     */
    create<T extends CourseCreateArgs>(args: SelectSubset<T, CourseCreateArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Courses.
     * @param {CourseCreateManyArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CourseCreateManyArgs>(args?: SelectSubset<T, CourseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Courses and returns the data saved in the database.
     * @param {CourseCreateManyAndReturnArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Courses and only return the `id`
     * const courseWithIdOnly = await prisma.course.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CourseCreateManyAndReturnArgs>(args?: SelectSubset<T, CourseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Course.
     * @param {CourseDeleteArgs} args - Arguments to delete one Course.
     * @example
     * // Delete one Course
     * const Course = await prisma.course.delete({
     *   where: {
     *     // ... filter to delete one Course
     *   }
     * })
     * 
     */
    delete<T extends CourseDeleteArgs>(args: SelectSubset<T, CourseDeleteArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Course.
     * @param {CourseUpdateArgs} args - Arguments to update one Course.
     * @example
     * // Update one Course
     * const course = await prisma.course.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CourseUpdateArgs>(args: SelectSubset<T, CourseUpdateArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Courses.
     * @param {CourseDeleteManyArgs} args - Arguments to filter Courses to delete.
     * @example
     * // Delete a few Courses
     * const { count } = await prisma.course.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CourseDeleteManyArgs>(args?: SelectSubset<T, CourseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CourseUpdateManyArgs>(args: SelectSubset<T, CourseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses and returns the data updated in the database.
     * @param {CourseUpdateManyAndReturnArgs} args - Arguments to update many Courses.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Courses and only return the `id`
     * const courseWithIdOnly = await prisma.course.updateManyAndReturn({
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
    updateManyAndReturn<T extends CourseUpdateManyAndReturnArgs>(args: SelectSubset<T, CourseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Course.
     * @param {CourseUpsertArgs} args - Arguments to update or create a Course.
     * @example
     * // Update or create a Course
     * const course = await prisma.course.upsert({
     *   create: {
     *     // ... data to create a Course
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Course we want to update
     *   }
     * })
     */
    upsert<T extends CourseUpsertArgs>(args: SelectSubset<T, CourseUpsertArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseCountArgs} args - Arguments to filter Courses to count.
     * @example
     * // Count the number of Courses
     * const count = await prisma.course.count({
     *   where: {
     *     // ... the filter for the Courses we want to count
     *   }
     * })
    **/
    count<T extends CourseCountArgs>(
      args?: Subset<T, CourseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CourseAggregateArgs>(args: Subset<T, CourseAggregateArgs>): Prisma.PrismaPromise<GetCourseAggregateType<T>>

    /**
     * Group by Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseGroupByArgs} args - Group by arguments.
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
      T extends CourseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourseGroupByArgs['orderBy'] }
        : { orderBy?: CourseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CourseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Course model
   */
  readonly fields: CourseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Course.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CourseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    instructorProfile<T extends InstructorProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, InstructorProfileDefaultArgs<ExtArgs>>): Prisma__InstructorProfileClient<$Result.GetResult<Prisma.$InstructorProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    modules<T extends Course$modulesArgs<ExtArgs> = {}>(args?: Subset<T, Course$modulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    enrollments<T extends Course$enrollmentsArgs<ExtArgs> = {}>(args?: Subset<T, Course$enrollmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Course model
   */
  interface CourseFieldRefs {
    readonly id: FieldRef<"Course", 'String'>
    readonly title: FieldRef<"Course", 'String'>
    readonly description: FieldRef<"Course", 'String'>
    readonly price: FieldRef<"Course", 'Int'>
    readonly status: FieldRef<"Course", 'CourseStatus'>
    readonly coverImageUrl: FieldRef<"Course", 'String'>
    readonly instructorProfileId: FieldRef<"Course", 'String'>
    readonly createdAt: FieldRef<"Course", 'DateTime'>
    readonly updatedAt: FieldRef<"Course", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Course findUnique
   */
  export type CourseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findUniqueOrThrow
   */
  export type CourseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findFirst
   */
  export type CourseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course findFirstOrThrow
   */
  export type CourseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course findMany
   */
  export type CourseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Courses to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course create
   */
  export type CourseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to create a Course.
     */
    data: XOR<CourseCreateInput, CourseUncheckedCreateInput>
  }

  /**
   * Course createMany
   */
  export type CourseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Courses.
     */
    data: CourseCreateManyInput | CourseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Course createManyAndReturn
   */
  export type CourseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * The data used to create many Courses.
     */
    data: CourseCreateManyInput | CourseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Course update
   */
  export type CourseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to update a Course.
     */
    data: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
    /**
     * Choose, which Course to update.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course updateMany
   */
  export type CourseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Courses.
     */
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to update.
     */
    limit?: number
  }

  /**
   * Course updateManyAndReturn
   */
  export type CourseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * The data used to update Courses.
     */
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Course upsert
   */
  export type CourseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The filter to search for the Course to update in case it exists.
     */
    where: CourseWhereUniqueInput
    /**
     * In case the Course found by the `where` argument doesn't exist, create a new Course with this data.
     */
    create: XOR<CourseCreateInput, CourseUncheckedCreateInput>
    /**
     * In case the Course was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
  }

  /**
   * Course delete
   */
  export type CourseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter which Course to delete.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course deleteMany
   */
  export type CourseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Courses to delete
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to delete.
     */
    limit?: number
  }

  /**
   * Course.modules
   */
  export type Course$modulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    where?: ModuleWhereInput
    orderBy?: ModuleOrderByWithRelationInput | ModuleOrderByWithRelationInput[]
    cursor?: ModuleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ModuleScalarFieldEnum | ModuleScalarFieldEnum[]
  }

  /**
   * Course.enrollments
   */
  export type Course$enrollmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    where?: EnrollmentWhereInput
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    cursor?: EnrollmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[]
  }

  /**
   * Course without action
   */
  export type CourseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
  }


  /**
   * Model Module
   */

  export type AggregateModule = {
    _count: ModuleCountAggregateOutputType | null
    _avg: ModuleAvgAggregateOutputType | null
    _sum: ModuleSumAggregateOutputType | null
    _min: ModuleMinAggregateOutputType | null
    _max: ModuleMaxAggregateOutputType | null
  }

  export type ModuleAvgAggregateOutputType = {
    order: number | null
  }

  export type ModuleSumAggregateOutputType = {
    order: number | null
  }

  export type ModuleMinAggregateOutputType = {
    id: string | null
    title: string | null
    order: number | null
    courseId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ModuleMaxAggregateOutputType = {
    id: string | null
    title: string | null
    order: number | null
    courseId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ModuleCountAggregateOutputType = {
    id: number
    title: number
    order: number
    courseId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ModuleAvgAggregateInputType = {
    order?: true
  }

  export type ModuleSumAggregateInputType = {
    order?: true
  }

  export type ModuleMinAggregateInputType = {
    id?: true
    title?: true
    order?: true
    courseId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ModuleMaxAggregateInputType = {
    id?: true
    title?: true
    order?: true
    courseId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ModuleCountAggregateInputType = {
    id?: true
    title?: true
    order?: true
    courseId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ModuleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Module to aggregate.
     */
    where?: ModuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Modules to fetch.
     */
    orderBy?: ModuleOrderByWithRelationInput | ModuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ModuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Modules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Modules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Modules
    **/
    _count?: true | ModuleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ModuleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ModuleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ModuleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ModuleMaxAggregateInputType
  }

  export type GetModuleAggregateType<T extends ModuleAggregateArgs> = {
        [P in keyof T & keyof AggregateModule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateModule[P]>
      : GetScalarType<T[P], AggregateModule[P]>
  }




  export type ModuleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModuleWhereInput
    orderBy?: ModuleOrderByWithAggregationInput | ModuleOrderByWithAggregationInput[]
    by: ModuleScalarFieldEnum[] | ModuleScalarFieldEnum
    having?: ModuleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ModuleCountAggregateInputType | true
    _avg?: ModuleAvgAggregateInputType
    _sum?: ModuleSumAggregateInputType
    _min?: ModuleMinAggregateInputType
    _max?: ModuleMaxAggregateInputType
  }

  export type ModuleGroupByOutputType = {
    id: string
    title: string
    order: number
    courseId: string
    createdAt: Date
    updatedAt: Date
    _count: ModuleCountAggregateOutputType | null
    _avg: ModuleAvgAggregateOutputType | null
    _sum: ModuleSumAggregateOutputType | null
    _min: ModuleMinAggregateOutputType | null
    _max: ModuleMaxAggregateOutputType | null
  }

  type GetModuleGroupByPayload<T extends ModuleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ModuleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ModuleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ModuleGroupByOutputType[P]>
            : GetScalarType<T[P], ModuleGroupByOutputType[P]>
        }
      >
    >


  export type ModuleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    order?: boolean
    courseId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
    lessons?: boolean | Module$lessonsArgs<ExtArgs>
    _count?: boolean | ModuleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["module"]>

  export type ModuleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    order?: boolean
    courseId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["module"]>

  export type ModuleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    order?: boolean
    courseId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["module"]>

  export type ModuleSelectScalar = {
    id?: boolean
    title?: boolean
    order?: boolean
    courseId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ModuleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "order" | "courseId" | "createdAt" | "updatedAt", ExtArgs["result"]["module"]>
  export type ModuleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
    lessons?: boolean | Module$lessonsArgs<ExtArgs>
    _count?: boolean | ModuleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ModuleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type ModuleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }

  export type $ModulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Module"
    objects: {
      course: Prisma.$CoursePayload<ExtArgs>
      lessons: Prisma.$LessonPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      order: number
      courseId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["module"]>
    composites: {}
  }

  type ModuleGetPayload<S extends boolean | null | undefined | ModuleDefaultArgs> = $Result.GetResult<Prisma.$ModulePayload, S>

  type ModuleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ModuleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ModuleCountAggregateInputType | true
    }

  export interface ModuleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Module'], meta: { name: 'Module' } }
    /**
     * Find zero or one Module that matches the filter.
     * @param {ModuleFindUniqueArgs} args - Arguments to find a Module
     * @example
     * // Get one Module
     * const module = await prisma.module.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ModuleFindUniqueArgs>(args: SelectSubset<T, ModuleFindUniqueArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Module that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ModuleFindUniqueOrThrowArgs} args - Arguments to find a Module
     * @example
     * // Get one Module
     * const module = await prisma.module.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ModuleFindUniqueOrThrowArgs>(args: SelectSubset<T, ModuleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Module that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleFindFirstArgs} args - Arguments to find a Module
     * @example
     * // Get one Module
     * const module = await prisma.module.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ModuleFindFirstArgs>(args?: SelectSubset<T, ModuleFindFirstArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Module that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleFindFirstOrThrowArgs} args - Arguments to find a Module
     * @example
     * // Get one Module
     * const module = await prisma.module.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ModuleFindFirstOrThrowArgs>(args?: SelectSubset<T, ModuleFindFirstOrThrowArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Modules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Modules
     * const modules = await prisma.module.findMany()
     * 
     * // Get first 10 Modules
     * const modules = await prisma.module.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const moduleWithIdOnly = await prisma.module.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ModuleFindManyArgs>(args?: SelectSubset<T, ModuleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Module.
     * @param {ModuleCreateArgs} args - Arguments to create a Module.
     * @example
     * // Create one Module
     * const Module = await prisma.module.create({
     *   data: {
     *     // ... data to create a Module
     *   }
     * })
     * 
     */
    create<T extends ModuleCreateArgs>(args: SelectSubset<T, ModuleCreateArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Modules.
     * @param {ModuleCreateManyArgs} args - Arguments to create many Modules.
     * @example
     * // Create many Modules
     * const module = await prisma.module.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ModuleCreateManyArgs>(args?: SelectSubset<T, ModuleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Modules and returns the data saved in the database.
     * @param {ModuleCreateManyAndReturnArgs} args - Arguments to create many Modules.
     * @example
     * // Create many Modules
     * const module = await prisma.module.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Modules and only return the `id`
     * const moduleWithIdOnly = await prisma.module.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ModuleCreateManyAndReturnArgs>(args?: SelectSubset<T, ModuleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Module.
     * @param {ModuleDeleteArgs} args - Arguments to delete one Module.
     * @example
     * // Delete one Module
     * const Module = await prisma.module.delete({
     *   where: {
     *     // ... filter to delete one Module
     *   }
     * })
     * 
     */
    delete<T extends ModuleDeleteArgs>(args: SelectSubset<T, ModuleDeleteArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Module.
     * @param {ModuleUpdateArgs} args - Arguments to update one Module.
     * @example
     * // Update one Module
     * const module = await prisma.module.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ModuleUpdateArgs>(args: SelectSubset<T, ModuleUpdateArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Modules.
     * @param {ModuleDeleteManyArgs} args - Arguments to filter Modules to delete.
     * @example
     * // Delete a few Modules
     * const { count } = await prisma.module.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ModuleDeleteManyArgs>(args?: SelectSubset<T, ModuleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Modules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Modules
     * const module = await prisma.module.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ModuleUpdateManyArgs>(args: SelectSubset<T, ModuleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Modules and returns the data updated in the database.
     * @param {ModuleUpdateManyAndReturnArgs} args - Arguments to update many Modules.
     * @example
     * // Update many Modules
     * const module = await prisma.module.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Modules and only return the `id`
     * const moduleWithIdOnly = await prisma.module.updateManyAndReturn({
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
    updateManyAndReturn<T extends ModuleUpdateManyAndReturnArgs>(args: SelectSubset<T, ModuleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Module.
     * @param {ModuleUpsertArgs} args - Arguments to update or create a Module.
     * @example
     * // Update or create a Module
     * const module = await prisma.module.upsert({
     *   create: {
     *     // ... data to create a Module
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Module we want to update
     *   }
     * })
     */
    upsert<T extends ModuleUpsertArgs>(args: SelectSubset<T, ModuleUpsertArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Modules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleCountArgs} args - Arguments to filter Modules to count.
     * @example
     * // Count the number of Modules
     * const count = await prisma.module.count({
     *   where: {
     *     // ... the filter for the Modules we want to count
     *   }
     * })
    **/
    count<T extends ModuleCountArgs>(
      args?: Subset<T, ModuleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ModuleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Module.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ModuleAggregateArgs>(args: Subset<T, ModuleAggregateArgs>): Prisma.PrismaPromise<GetModuleAggregateType<T>>

    /**
     * Group by Module.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModuleGroupByArgs} args - Group by arguments.
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
      T extends ModuleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ModuleGroupByArgs['orderBy'] }
        : { orderBy?: ModuleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ModuleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModuleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Module model
   */
  readonly fields: ModuleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Module.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ModuleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    lessons<T extends Module$lessonsArgs<ExtArgs> = {}>(args?: Subset<T, Module$lessonsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Module model
   */
  interface ModuleFieldRefs {
    readonly id: FieldRef<"Module", 'String'>
    readonly title: FieldRef<"Module", 'String'>
    readonly order: FieldRef<"Module", 'Int'>
    readonly courseId: FieldRef<"Module", 'String'>
    readonly createdAt: FieldRef<"Module", 'DateTime'>
    readonly updatedAt: FieldRef<"Module", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Module findUnique
   */
  export type ModuleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * Filter, which Module to fetch.
     */
    where: ModuleWhereUniqueInput
  }

  /**
   * Module findUniqueOrThrow
   */
  export type ModuleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * Filter, which Module to fetch.
     */
    where: ModuleWhereUniqueInput
  }

  /**
   * Module findFirst
   */
  export type ModuleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * Filter, which Module to fetch.
     */
    where?: ModuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Modules to fetch.
     */
    orderBy?: ModuleOrderByWithRelationInput | ModuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Modules.
     */
    cursor?: ModuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Modules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Modules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Modules.
     */
    distinct?: ModuleScalarFieldEnum | ModuleScalarFieldEnum[]
  }

  /**
   * Module findFirstOrThrow
   */
  export type ModuleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * Filter, which Module to fetch.
     */
    where?: ModuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Modules to fetch.
     */
    orderBy?: ModuleOrderByWithRelationInput | ModuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Modules.
     */
    cursor?: ModuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Modules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Modules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Modules.
     */
    distinct?: ModuleScalarFieldEnum | ModuleScalarFieldEnum[]
  }

  /**
   * Module findMany
   */
  export type ModuleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * Filter, which Modules to fetch.
     */
    where?: ModuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Modules to fetch.
     */
    orderBy?: ModuleOrderByWithRelationInput | ModuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Modules.
     */
    cursor?: ModuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Modules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Modules.
     */
    skip?: number
    distinct?: ModuleScalarFieldEnum | ModuleScalarFieldEnum[]
  }

  /**
   * Module create
   */
  export type ModuleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * The data needed to create a Module.
     */
    data: XOR<ModuleCreateInput, ModuleUncheckedCreateInput>
  }

  /**
   * Module createMany
   */
  export type ModuleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Modules.
     */
    data: ModuleCreateManyInput | ModuleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Module createManyAndReturn
   */
  export type ModuleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * The data used to create many Modules.
     */
    data: ModuleCreateManyInput | ModuleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Module update
   */
  export type ModuleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * The data needed to update a Module.
     */
    data: XOR<ModuleUpdateInput, ModuleUncheckedUpdateInput>
    /**
     * Choose, which Module to update.
     */
    where: ModuleWhereUniqueInput
  }

  /**
   * Module updateMany
   */
  export type ModuleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Modules.
     */
    data: XOR<ModuleUpdateManyMutationInput, ModuleUncheckedUpdateManyInput>
    /**
     * Filter which Modules to update
     */
    where?: ModuleWhereInput
    /**
     * Limit how many Modules to update.
     */
    limit?: number
  }

  /**
   * Module updateManyAndReturn
   */
  export type ModuleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * The data used to update Modules.
     */
    data: XOR<ModuleUpdateManyMutationInput, ModuleUncheckedUpdateManyInput>
    /**
     * Filter which Modules to update
     */
    where?: ModuleWhereInput
    /**
     * Limit how many Modules to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Module upsert
   */
  export type ModuleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * The filter to search for the Module to update in case it exists.
     */
    where: ModuleWhereUniqueInput
    /**
     * In case the Module found by the `where` argument doesn't exist, create a new Module with this data.
     */
    create: XOR<ModuleCreateInput, ModuleUncheckedCreateInput>
    /**
     * In case the Module was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ModuleUpdateInput, ModuleUncheckedUpdateInput>
  }

  /**
   * Module delete
   */
  export type ModuleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
    /**
     * Filter which Module to delete.
     */
    where: ModuleWhereUniqueInput
  }

  /**
   * Module deleteMany
   */
  export type ModuleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Modules to delete
     */
    where?: ModuleWhereInput
    /**
     * Limit how many Modules to delete.
     */
    limit?: number
  }

  /**
   * Module.lessons
   */
  export type Module$lessonsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    where?: LessonWhereInput
    orderBy?: LessonOrderByWithRelationInput | LessonOrderByWithRelationInput[]
    cursor?: LessonWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LessonScalarFieldEnum | LessonScalarFieldEnum[]
  }

  /**
   * Module without action
   */
  export type ModuleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Module
     */
    select?: ModuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Module
     */
    omit?: ModuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ModuleInclude<ExtArgs> | null
  }


  /**
   * Model Lesson
   */

  export type AggregateLesson = {
    _count: LessonCountAggregateOutputType | null
    _avg: LessonAvgAggregateOutputType | null
    _sum: LessonSumAggregateOutputType | null
    _min: LessonMinAggregateOutputType | null
    _max: LessonMaxAggregateOutputType | null
  }

  export type LessonAvgAggregateOutputType = {
    order: number | null
    duration: number | null
  }

  export type LessonSumAggregateOutputType = {
    order: number | null
    duration: number | null
  }

  export type LessonMinAggregateOutputType = {
    id: string | null
    title: string | null
    order: number | null
    videoUrl: string | null
    duration: number | null
    isFreePreview: boolean | null
    moduleId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LessonMaxAggregateOutputType = {
    id: string | null
    title: string | null
    order: number | null
    videoUrl: string | null
    duration: number | null
    isFreePreview: boolean | null
    moduleId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LessonCountAggregateOutputType = {
    id: number
    title: number
    order: number
    videoUrl: number
    duration: number
    isFreePreview: number
    moduleId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LessonAvgAggregateInputType = {
    order?: true
    duration?: true
  }

  export type LessonSumAggregateInputType = {
    order?: true
    duration?: true
  }

  export type LessonMinAggregateInputType = {
    id?: true
    title?: true
    order?: true
    videoUrl?: true
    duration?: true
    isFreePreview?: true
    moduleId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LessonMaxAggregateInputType = {
    id?: true
    title?: true
    order?: true
    videoUrl?: true
    duration?: true
    isFreePreview?: true
    moduleId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LessonCountAggregateInputType = {
    id?: true
    title?: true
    order?: true
    videoUrl?: true
    duration?: true
    isFreePreview?: true
    moduleId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LessonAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lesson to aggregate.
     */
    where?: LessonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lessons to fetch.
     */
    orderBy?: LessonOrderByWithRelationInput | LessonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LessonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lessons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lessons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Lessons
    **/
    _count?: true | LessonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LessonAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LessonSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LessonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LessonMaxAggregateInputType
  }

  export type GetLessonAggregateType<T extends LessonAggregateArgs> = {
        [P in keyof T & keyof AggregateLesson]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLesson[P]>
      : GetScalarType<T[P], AggregateLesson[P]>
  }




  export type LessonGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LessonWhereInput
    orderBy?: LessonOrderByWithAggregationInput | LessonOrderByWithAggregationInput[]
    by: LessonScalarFieldEnum[] | LessonScalarFieldEnum
    having?: LessonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LessonCountAggregateInputType | true
    _avg?: LessonAvgAggregateInputType
    _sum?: LessonSumAggregateInputType
    _min?: LessonMinAggregateInputType
    _max?: LessonMaxAggregateInputType
  }

  export type LessonGroupByOutputType = {
    id: string
    title: string
    order: number
    videoUrl: string
    duration: number | null
    isFreePreview: boolean
    moduleId: string
    createdAt: Date
    updatedAt: Date
    _count: LessonCountAggregateOutputType | null
    _avg: LessonAvgAggregateOutputType | null
    _sum: LessonSumAggregateOutputType | null
    _min: LessonMinAggregateOutputType | null
    _max: LessonMaxAggregateOutputType | null
  }

  type GetLessonGroupByPayload<T extends LessonGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LessonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LessonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LessonGroupByOutputType[P]>
            : GetScalarType<T[P], LessonGroupByOutputType[P]>
        }
      >
    >


  export type LessonSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    order?: boolean
    videoUrl?: boolean
    duration?: boolean
    isFreePreview?: boolean
    moduleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    module?: boolean | ModuleDefaultArgs<ExtArgs>
    progress?: boolean | Lesson$progressArgs<ExtArgs>
    _count?: boolean | LessonCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lesson"]>

  export type LessonSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    order?: boolean
    videoUrl?: boolean
    duration?: boolean
    isFreePreview?: boolean
    moduleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    module?: boolean | ModuleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lesson"]>

  export type LessonSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    order?: boolean
    videoUrl?: boolean
    duration?: boolean
    isFreePreview?: boolean
    moduleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    module?: boolean | ModuleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lesson"]>

  export type LessonSelectScalar = {
    id?: boolean
    title?: boolean
    order?: boolean
    videoUrl?: boolean
    duration?: boolean
    isFreePreview?: boolean
    moduleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LessonOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "order" | "videoUrl" | "duration" | "isFreePreview" | "moduleId" | "createdAt" | "updatedAt", ExtArgs["result"]["lesson"]>
  export type LessonInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    module?: boolean | ModuleDefaultArgs<ExtArgs>
    progress?: boolean | Lesson$progressArgs<ExtArgs>
    _count?: boolean | LessonCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LessonIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    module?: boolean | ModuleDefaultArgs<ExtArgs>
  }
  export type LessonIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    module?: boolean | ModuleDefaultArgs<ExtArgs>
  }

  export type $LessonPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Lesson"
    objects: {
      module: Prisma.$ModulePayload<ExtArgs>
      progress: Prisma.$LessonProgressPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      order: number
      videoUrl: string
      duration: number | null
      isFreePreview: boolean
      moduleId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["lesson"]>
    composites: {}
  }

  type LessonGetPayload<S extends boolean | null | undefined | LessonDefaultArgs> = $Result.GetResult<Prisma.$LessonPayload, S>

  type LessonCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LessonFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LessonCountAggregateInputType | true
    }

  export interface LessonDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Lesson'], meta: { name: 'Lesson' } }
    /**
     * Find zero or one Lesson that matches the filter.
     * @param {LessonFindUniqueArgs} args - Arguments to find a Lesson
     * @example
     * // Get one Lesson
     * const lesson = await prisma.lesson.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LessonFindUniqueArgs>(args: SelectSubset<T, LessonFindUniqueArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Lesson that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LessonFindUniqueOrThrowArgs} args - Arguments to find a Lesson
     * @example
     * // Get one Lesson
     * const lesson = await prisma.lesson.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LessonFindUniqueOrThrowArgs>(args: SelectSubset<T, LessonFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lesson that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonFindFirstArgs} args - Arguments to find a Lesson
     * @example
     * // Get one Lesson
     * const lesson = await prisma.lesson.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LessonFindFirstArgs>(args?: SelectSubset<T, LessonFindFirstArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lesson that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonFindFirstOrThrowArgs} args - Arguments to find a Lesson
     * @example
     * // Get one Lesson
     * const lesson = await prisma.lesson.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LessonFindFirstOrThrowArgs>(args?: SelectSubset<T, LessonFindFirstOrThrowArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Lessons that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lessons
     * const lessons = await prisma.lesson.findMany()
     * 
     * // Get first 10 Lessons
     * const lessons = await prisma.lesson.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lessonWithIdOnly = await prisma.lesson.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LessonFindManyArgs>(args?: SelectSubset<T, LessonFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Lesson.
     * @param {LessonCreateArgs} args - Arguments to create a Lesson.
     * @example
     * // Create one Lesson
     * const Lesson = await prisma.lesson.create({
     *   data: {
     *     // ... data to create a Lesson
     *   }
     * })
     * 
     */
    create<T extends LessonCreateArgs>(args: SelectSubset<T, LessonCreateArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Lessons.
     * @param {LessonCreateManyArgs} args - Arguments to create many Lessons.
     * @example
     * // Create many Lessons
     * const lesson = await prisma.lesson.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LessonCreateManyArgs>(args?: SelectSubset<T, LessonCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Lessons and returns the data saved in the database.
     * @param {LessonCreateManyAndReturnArgs} args - Arguments to create many Lessons.
     * @example
     * // Create many Lessons
     * const lesson = await prisma.lesson.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Lessons and only return the `id`
     * const lessonWithIdOnly = await prisma.lesson.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LessonCreateManyAndReturnArgs>(args?: SelectSubset<T, LessonCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Lesson.
     * @param {LessonDeleteArgs} args - Arguments to delete one Lesson.
     * @example
     * // Delete one Lesson
     * const Lesson = await prisma.lesson.delete({
     *   where: {
     *     // ... filter to delete one Lesson
     *   }
     * })
     * 
     */
    delete<T extends LessonDeleteArgs>(args: SelectSubset<T, LessonDeleteArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Lesson.
     * @param {LessonUpdateArgs} args - Arguments to update one Lesson.
     * @example
     * // Update one Lesson
     * const lesson = await prisma.lesson.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LessonUpdateArgs>(args: SelectSubset<T, LessonUpdateArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Lessons.
     * @param {LessonDeleteManyArgs} args - Arguments to filter Lessons to delete.
     * @example
     * // Delete a few Lessons
     * const { count } = await prisma.lesson.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LessonDeleteManyArgs>(args?: SelectSubset<T, LessonDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lessons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lessons
     * const lesson = await prisma.lesson.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LessonUpdateManyArgs>(args: SelectSubset<T, LessonUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lessons and returns the data updated in the database.
     * @param {LessonUpdateManyAndReturnArgs} args - Arguments to update many Lessons.
     * @example
     * // Update many Lessons
     * const lesson = await prisma.lesson.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Lessons and only return the `id`
     * const lessonWithIdOnly = await prisma.lesson.updateManyAndReturn({
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
    updateManyAndReturn<T extends LessonUpdateManyAndReturnArgs>(args: SelectSubset<T, LessonUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Lesson.
     * @param {LessonUpsertArgs} args - Arguments to update or create a Lesson.
     * @example
     * // Update or create a Lesson
     * const lesson = await prisma.lesson.upsert({
     *   create: {
     *     // ... data to create a Lesson
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lesson we want to update
     *   }
     * })
     */
    upsert<T extends LessonUpsertArgs>(args: SelectSubset<T, LessonUpsertArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Lessons.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonCountArgs} args - Arguments to filter Lessons to count.
     * @example
     * // Count the number of Lessons
     * const count = await prisma.lesson.count({
     *   where: {
     *     // ... the filter for the Lessons we want to count
     *   }
     * })
    **/
    count<T extends LessonCountArgs>(
      args?: Subset<T, LessonCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LessonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lesson.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LessonAggregateArgs>(args: Subset<T, LessonAggregateArgs>): Prisma.PrismaPromise<GetLessonAggregateType<T>>

    /**
     * Group by Lesson.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonGroupByArgs} args - Group by arguments.
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
      T extends LessonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LessonGroupByArgs['orderBy'] }
        : { orderBy?: LessonGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LessonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLessonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Lesson model
   */
  readonly fields: LessonFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Lesson.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LessonClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    module<T extends ModuleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ModuleDefaultArgs<ExtArgs>>): Prisma__ModuleClient<$Result.GetResult<Prisma.$ModulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    progress<T extends Lesson$progressArgs<ExtArgs> = {}>(args?: Subset<T, Lesson$progressArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Lesson model
   */
  interface LessonFieldRefs {
    readonly id: FieldRef<"Lesson", 'String'>
    readonly title: FieldRef<"Lesson", 'String'>
    readonly order: FieldRef<"Lesson", 'Int'>
    readonly videoUrl: FieldRef<"Lesson", 'String'>
    readonly duration: FieldRef<"Lesson", 'Int'>
    readonly isFreePreview: FieldRef<"Lesson", 'Boolean'>
    readonly moduleId: FieldRef<"Lesson", 'String'>
    readonly createdAt: FieldRef<"Lesson", 'DateTime'>
    readonly updatedAt: FieldRef<"Lesson", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Lesson findUnique
   */
  export type LessonFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * Filter, which Lesson to fetch.
     */
    where: LessonWhereUniqueInput
  }

  /**
   * Lesson findUniqueOrThrow
   */
  export type LessonFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * Filter, which Lesson to fetch.
     */
    where: LessonWhereUniqueInput
  }

  /**
   * Lesson findFirst
   */
  export type LessonFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * Filter, which Lesson to fetch.
     */
    where?: LessonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lessons to fetch.
     */
    orderBy?: LessonOrderByWithRelationInput | LessonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lessons.
     */
    cursor?: LessonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lessons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lessons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lessons.
     */
    distinct?: LessonScalarFieldEnum | LessonScalarFieldEnum[]
  }

  /**
   * Lesson findFirstOrThrow
   */
  export type LessonFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * Filter, which Lesson to fetch.
     */
    where?: LessonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lessons to fetch.
     */
    orderBy?: LessonOrderByWithRelationInput | LessonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lessons.
     */
    cursor?: LessonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lessons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lessons.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lessons.
     */
    distinct?: LessonScalarFieldEnum | LessonScalarFieldEnum[]
  }

  /**
   * Lesson findMany
   */
  export type LessonFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * Filter, which Lessons to fetch.
     */
    where?: LessonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lessons to fetch.
     */
    orderBy?: LessonOrderByWithRelationInput | LessonOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Lessons.
     */
    cursor?: LessonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lessons from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lessons.
     */
    skip?: number
    distinct?: LessonScalarFieldEnum | LessonScalarFieldEnum[]
  }

  /**
   * Lesson create
   */
  export type LessonCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * The data needed to create a Lesson.
     */
    data: XOR<LessonCreateInput, LessonUncheckedCreateInput>
  }

  /**
   * Lesson createMany
   */
  export type LessonCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Lessons.
     */
    data: LessonCreateManyInput | LessonCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Lesson createManyAndReturn
   */
  export type LessonCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * The data used to create many Lessons.
     */
    data: LessonCreateManyInput | LessonCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lesson update
   */
  export type LessonUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * The data needed to update a Lesson.
     */
    data: XOR<LessonUpdateInput, LessonUncheckedUpdateInput>
    /**
     * Choose, which Lesson to update.
     */
    where: LessonWhereUniqueInput
  }

  /**
   * Lesson updateMany
   */
  export type LessonUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Lessons.
     */
    data: XOR<LessonUpdateManyMutationInput, LessonUncheckedUpdateManyInput>
    /**
     * Filter which Lessons to update
     */
    where?: LessonWhereInput
    /**
     * Limit how many Lessons to update.
     */
    limit?: number
  }

  /**
   * Lesson updateManyAndReturn
   */
  export type LessonUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * The data used to update Lessons.
     */
    data: XOR<LessonUpdateManyMutationInput, LessonUncheckedUpdateManyInput>
    /**
     * Filter which Lessons to update
     */
    where?: LessonWhereInput
    /**
     * Limit how many Lessons to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lesson upsert
   */
  export type LessonUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * The filter to search for the Lesson to update in case it exists.
     */
    where: LessonWhereUniqueInput
    /**
     * In case the Lesson found by the `where` argument doesn't exist, create a new Lesson with this data.
     */
    create: XOR<LessonCreateInput, LessonUncheckedCreateInput>
    /**
     * In case the Lesson was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LessonUpdateInput, LessonUncheckedUpdateInput>
  }

  /**
   * Lesson delete
   */
  export type LessonDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
    /**
     * Filter which Lesson to delete.
     */
    where: LessonWhereUniqueInput
  }

  /**
   * Lesson deleteMany
   */
  export type LessonDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lessons to delete
     */
    where?: LessonWhereInput
    /**
     * Limit how many Lessons to delete.
     */
    limit?: number
  }

  /**
   * Lesson.progress
   */
  export type Lesson$progressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonProgress
     */
    select?: LessonProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonProgress
     */
    omit?: LessonProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonProgressInclude<ExtArgs> | null
    where?: LessonProgressWhereInput
    orderBy?: LessonProgressOrderByWithRelationInput | LessonProgressOrderByWithRelationInput[]
    cursor?: LessonProgressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LessonProgressScalarFieldEnum | LessonProgressScalarFieldEnum[]
  }

  /**
   * Lesson without action
   */
  export type LessonDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lesson
     */
    select?: LessonSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lesson
     */
    omit?: LessonOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonInclude<ExtArgs> | null
  }


  /**
   * Model Enrollment
   */

  export type AggregateEnrollment = {
    _count: EnrollmentCountAggregateOutputType | null
    _avg: EnrollmentAvgAggregateOutputType | null
    _sum: EnrollmentSumAggregateOutputType | null
    _min: EnrollmentMinAggregateOutputType | null
    _max: EnrollmentMaxAggregateOutputType | null
  }

  export type EnrollmentAvgAggregateOutputType = {
    amountPaid: number | null
  }

  export type EnrollmentSumAggregateOutputType = {
    amountPaid: number | null
  }

  export type EnrollmentMinAggregateOutputType = {
    id: string | null
    status: $Enums.EnrollmentStatus | null
    paystackReference: string | null
    amountPaid: number | null
    userId: string | null
    courseId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EnrollmentMaxAggregateOutputType = {
    id: string | null
    status: $Enums.EnrollmentStatus | null
    paystackReference: string | null
    amountPaid: number | null
    userId: string | null
    courseId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EnrollmentCountAggregateOutputType = {
    id: number
    status: number
    paystackReference: number
    amountPaid: number
    userId: number
    courseId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EnrollmentAvgAggregateInputType = {
    amountPaid?: true
  }

  export type EnrollmentSumAggregateInputType = {
    amountPaid?: true
  }

  export type EnrollmentMinAggregateInputType = {
    id?: true
    status?: true
    paystackReference?: true
    amountPaid?: true
    userId?: true
    courseId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EnrollmentMaxAggregateInputType = {
    id?: true
    status?: true
    paystackReference?: true
    amountPaid?: true
    userId?: true
    courseId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EnrollmentCountAggregateInputType = {
    id?: true
    status?: true
    paystackReference?: true
    amountPaid?: true
    userId?: true
    courseId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EnrollmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Enrollment to aggregate.
     */
    where?: EnrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enrollments to fetch.
     */
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EnrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enrollments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Enrollments
    **/
    _count?: true | EnrollmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EnrollmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EnrollmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EnrollmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EnrollmentMaxAggregateInputType
  }

  export type GetEnrollmentAggregateType<T extends EnrollmentAggregateArgs> = {
        [P in keyof T & keyof AggregateEnrollment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEnrollment[P]>
      : GetScalarType<T[P], AggregateEnrollment[P]>
  }




  export type EnrollmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnrollmentWhereInput
    orderBy?: EnrollmentOrderByWithAggregationInput | EnrollmentOrderByWithAggregationInput[]
    by: EnrollmentScalarFieldEnum[] | EnrollmentScalarFieldEnum
    having?: EnrollmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EnrollmentCountAggregateInputType | true
    _avg?: EnrollmentAvgAggregateInputType
    _sum?: EnrollmentSumAggregateInputType
    _min?: EnrollmentMinAggregateInputType
    _max?: EnrollmentMaxAggregateInputType
  }

  export type EnrollmentGroupByOutputType = {
    id: string
    status: $Enums.EnrollmentStatus
    paystackReference: string
    amountPaid: number
    userId: string
    courseId: string
    createdAt: Date
    updatedAt: Date
    _count: EnrollmentCountAggregateOutputType | null
    _avg: EnrollmentAvgAggregateOutputType | null
    _sum: EnrollmentSumAggregateOutputType | null
    _min: EnrollmentMinAggregateOutputType | null
    _max: EnrollmentMaxAggregateOutputType | null
  }

  type GetEnrollmentGroupByPayload<T extends EnrollmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EnrollmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EnrollmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EnrollmentGroupByOutputType[P]>
            : GetScalarType<T[P], EnrollmentGroupByOutputType[P]>
        }
      >
    >


  export type EnrollmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    paystackReference?: boolean
    amountPaid?: boolean
    userId?: boolean
    courseId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["enrollment"]>

  export type EnrollmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    paystackReference?: boolean
    amountPaid?: boolean
    userId?: boolean
    courseId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["enrollment"]>

  export type EnrollmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    paystackReference?: boolean
    amountPaid?: boolean
    userId?: boolean
    courseId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["enrollment"]>

  export type EnrollmentSelectScalar = {
    id?: boolean
    status?: boolean
    paystackReference?: boolean
    amountPaid?: boolean
    userId?: boolean
    courseId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EnrollmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "status" | "paystackReference" | "amountPaid" | "userId" | "courseId" | "createdAt" | "updatedAt", ExtArgs["result"]["enrollment"]>
  export type EnrollmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type EnrollmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }
  export type EnrollmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    course?: boolean | CourseDefaultArgs<ExtArgs>
  }

  export type $EnrollmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Enrollment"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      course: Prisma.$CoursePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      status: $Enums.EnrollmentStatus
      paystackReference: string
      amountPaid: number
      userId: string
      courseId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["enrollment"]>
    composites: {}
  }

  type EnrollmentGetPayload<S extends boolean | null | undefined | EnrollmentDefaultArgs> = $Result.GetResult<Prisma.$EnrollmentPayload, S>

  type EnrollmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EnrollmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EnrollmentCountAggregateInputType | true
    }

  export interface EnrollmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Enrollment'], meta: { name: 'Enrollment' } }
    /**
     * Find zero or one Enrollment that matches the filter.
     * @param {EnrollmentFindUniqueArgs} args - Arguments to find a Enrollment
     * @example
     * // Get one Enrollment
     * const enrollment = await prisma.enrollment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EnrollmentFindUniqueArgs>(args: SelectSubset<T, EnrollmentFindUniqueArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Enrollment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EnrollmentFindUniqueOrThrowArgs} args - Arguments to find a Enrollment
     * @example
     * // Get one Enrollment
     * const enrollment = await prisma.enrollment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EnrollmentFindUniqueOrThrowArgs>(args: SelectSubset<T, EnrollmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Enrollment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentFindFirstArgs} args - Arguments to find a Enrollment
     * @example
     * // Get one Enrollment
     * const enrollment = await prisma.enrollment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EnrollmentFindFirstArgs>(args?: SelectSubset<T, EnrollmentFindFirstArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Enrollment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentFindFirstOrThrowArgs} args - Arguments to find a Enrollment
     * @example
     * // Get one Enrollment
     * const enrollment = await prisma.enrollment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EnrollmentFindFirstOrThrowArgs>(args?: SelectSubset<T, EnrollmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Enrollments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Enrollments
     * const enrollments = await prisma.enrollment.findMany()
     * 
     * // Get first 10 Enrollments
     * const enrollments = await prisma.enrollment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const enrollmentWithIdOnly = await prisma.enrollment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EnrollmentFindManyArgs>(args?: SelectSubset<T, EnrollmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Enrollment.
     * @param {EnrollmentCreateArgs} args - Arguments to create a Enrollment.
     * @example
     * // Create one Enrollment
     * const Enrollment = await prisma.enrollment.create({
     *   data: {
     *     // ... data to create a Enrollment
     *   }
     * })
     * 
     */
    create<T extends EnrollmentCreateArgs>(args: SelectSubset<T, EnrollmentCreateArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Enrollments.
     * @param {EnrollmentCreateManyArgs} args - Arguments to create many Enrollments.
     * @example
     * // Create many Enrollments
     * const enrollment = await prisma.enrollment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EnrollmentCreateManyArgs>(args?: SelectSubset<T, EnrollmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Enrollments and returns the data saved in the database.
     * @param {EnrollmentCreateManyAndReturnArgs} args - Arguments to create many Enrollments.
     * @example
     * // Create many Enrollments
     * const enrollment = await prisma.enrollment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Enrollments and only return the `id`
     * const enrollmentWithIdOnly = await prisma.enrollment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EnrollmentCreateManyAndReturnArgs>(args?: SelectSubset<T, EnrollmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Enrollment.
     * @param {EnrollmentDeleteArgs} args - Arguments to delete one Enrollment.
     * @example
     * // Delete one Enrollment
     * const Enrollment = await prisma.enrollment.delete({
     *   where: {
     *     // ... filter to delete one Enrollment
     *   }
     * })
     * 
     */
    delete<T extends EnrollmentDeleteArgs>(args: SelectSubset<T, EnrollmentDeleteArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Enrollment.
     * @param {EnrollmentUpdateArgs} args - Arguments to update one Enrollment.
     * @example
     * // Update one Enrollment
     * const enrollment = await prisma.enrollment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EnrollmentUpdateArgs>(args: SelectSubset<T, EnrollmentUpdateArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Enrollments.
     * @param {EnrollmentDeleteManyArgs} args - Arguments to filter Enrollments to delete.
     * @example
     * // Delete a few Enrollments
     * const { count } = await prisma.enrollment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EnrollmentDeleteManyArgs>(args?: SelectSubset<T, EnrollmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Enrollments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Enrollments
     * const enrollment = await prisma.enrollment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EnrollmentUpdateManyArgs>(args: SelectSubset<T, EnrollmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Enrollments and returns the data updated in the database.
     * @param {EnrollmentUpdateManyAndReturnArgs} args - Arguments to update many Enrollments.
     * @example
     * // Update many Enrollments
     * const enrollment = await prisma.enrollment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Enrollments and only return the `id`
     * const enrollmentWithIdOnly = await prisma.enrollment.updateManyAndReturn({
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
    updateManyAndReturn<T extends EnrollmentUpdateManyAndReturnArgs>(args: SelectSubset<T, EnrollmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Enrollment.
     * @param {EnrollmentUpsertArgs} args - Arguments to update or create a Enrollment.
     * @example
     * // Update or create a Enrollment
     * const enrollment = await prisma.enrollment.upsert({
     *   create: {
     *     // ... data to create a Enrollment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Enrollment we want to update
     *   }
     * })
     */
    upsert<T extends EnrollmentUpsertArgs>(args: SelectSubset<T, EnrollmentUpsertArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Enrollments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentCountArgs} args - Arguments to filter Enrollments to count.
     * @example
     * // Count the number of Enrollments
     * const count = await prisma.enrollment.count({
     *   where: {
     *     // ... the filter for the Enrollments we want to count
     *   }
     * })
    **/
    count<T extends EnrollmentCountArgs>(
      args?: Subset<T, EnrollmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EnrollmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Enrollment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EnrollmentAggregateArgs>(args: Subset<T, EnrollmentAggregateArgs>): Prisma.PrismaPromise<GetEnrollmentAggregateType<T>>

    /**
     * Group by Enrollment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentGroupByArgs} args - Group by arguments.
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
      T extends EnrollmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EnrollmentGroupByArgs['orderBy'] }
        : { orderBy?: EnrollmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EnrollmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEnrollmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Enrollment model
   */
  readonly fields: EnrollmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Enrollment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EnrollmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    course<T extends CourseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourseDefaultArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Enrollment model
   */
  interface EnrollmentFieldRefs {
    readonly id: FieldRef<"Enrollment", 'String'>
    readonly status: FieldRef<"Enrollment", 'EnrollmentStatus'>
    readonly paystackReference: FieldRef<"Enrollment", 'String'>
    readonly amountPaid: FieldRef<"Enrollment", 'Int'>
    readonly userId: FieldRef<"Enrollment", 'String'>
    readonly courseId: FieldRef<"Enrollment", 'String'>
    readonly createdAt: FieldRef<"Enrollment", 'DateTime'>
    readonly updatedAt: FieldRef<"Enrollment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Enrollment findUnique
   */
  export type EnrollmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which Enrollment to fetch.
     */
    where: EnrollmentWhereUniqueInput
  }

  /**
   * Enrollment findUniqueOrThrow
   */
  export type EnrollmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which Enrollment to fetch.
     */
    where: EnrollmentWhereUniqueInput
  }

  /**
   * Enrollment findFirst
   */
  export type EnrollmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which Enrollment to fetch.
     */
    where?: EnrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enrollments to fetch.
     */
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Enrollments.
     */
    cursor?: EnrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enrollments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Enrollments.
     */
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[]
  }

  /**
   * Enrollment findFirstOrThrow
   */
  export type EnrollmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which Enrollment to fetch.
     */
    where?: EnrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enrollments to fetch.
     */
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Enrollments.
     */
    cursor?: EnrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enrollments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Enrollments.
     */
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[]
  }

  /**
   * Enrollment findMany
   */
  export type EnrollmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which Enrollments to fetch.
     */
    where?: EnrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enrollments to fetch.
     */
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Enrollments.
     */
    cursor?: EnrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enrollments.
     */
    skip?: number
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[]
  }

  /**
   * Enrollment create
   */
  export type EnrollmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Enrollment.
     */
    data: XOR<EnrollmentCreateInput, EnrollmentUncheckedCreateInput>
  }

  /**
   * Enrollment createMany
   */
  export type EnrollmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Enrollments.
     */
    data: EnrollmentCreateManyInput | EnrollmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Enrollment createManyAndReturn
   */
  export type EnrollmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * The data used to create many Enrollments.
     */
    data: EnrollmentCreateManyInput | EnrollmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Enrollment update
   */
  export type EnrollmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Enrollment.
     */
    data: XOR<EnrollmentUpdateInput, EnrollmentUncheckedUpdateInput>
    /**
     * Choose, which Enrollment to update.
     */
    where: EnrollmentWhereUniqueInput
  }

  /**
   * Enrollment updateMany
   */
  export type EnrollmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Enrollments.
     */
    data: XOR<EnrollmentUpdateManyMutationInput, EnrollmentUncheckedUpdateManyInput>
    /**
     * Filter which Enrollments to update
     */
    where?: EnrollmentWhereInput
    /**
     * Limit how many Enrollments to update.
     */
    limit?: number
  }

  /**
   * Enrollment updateManyAndReturn
   */
  export type EnrollmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * The data used to update Enrollments.
     */
    data: XOR<EnrollmentUpdateManyMutationInput, EnrollmentUncheckedUpdateManyInput>
    /**
     * Filter which Enrollments to update
     */
    where?: EnrollmentWhereInput
    /**
     * Limit how many Enrollments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Enrollment upsert
   */
  export type EnrollmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Enrollment to update in case it exists.
     */
    where: EnrollmentWhereUniqueInput
    /**
     * In case the Enrollment found by the `where` argument doesn't exist, create a new Enrollment with this data.
     */
    create: XOR<EnrollmentCreateInput, EnrollmentUncheckedCreateInput>
    /**
     * In case the Enrollment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EnrollmentUpdateInput, EnrollmentUncheckedUpdateInput>
  }

  /**
   * Enrollment delete
   */
  export type EnrollmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter which Enrollment to delete.
     */
    where: EnrollmentWhereUniqueInput
  }

  /**
   * Enrollment deleteMany
   */
  export type EnrollmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Enrollments to delete
     */
    where?: EnrollmentWhereInput
    /**
     * Limit how many Enrollments to delete.
     */
    limit?: number
  }

  /**
   * Enrollment without action
   */
  export type EnrollmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Enrollment
     */
    omit?: EnrollmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
  }


  /**
   * Model LessonProgress
   */

  export type AggregateLessonProgress = {
    _count: LessonProgressCountAggregateOutputType | null
    _min: LessonProgressMinAggregateOutputType | null
    _max: LessonProgressMaxAggregateOutputType | null
  }

  export type LessonProgressMinAggregateOutputType = {
    id: string | null
    completedAt: Date | null
    userId: string | null
    lessonId: string | null
  }

  export type LessonProgressMaxAggregateOutputType = {
    id: string | null
    completedAt: Date | null
    userId: string | null
    lessonId: string | null
  }

  export type LessonProgressCountAggregateOutputType = {
    id: number
    completedAt: number
    userId: number
    lessonId: number
    _all: number
  }


  export type LessonProgressMinAggregateInputType = {
    id?: true
    completedAt?: true
    userId?: true
    lessonId?: true
  }

  export type LessonProgressMaxAggregateInputType = {
    id?: true
    completedAt?: true
    userId?: true
    lessonId?: true
  }

  export type LessonProgressCountAggregateInputType = {
    id?: true
    completedAt?: true
    userId?: true
    lessonId?: true
    _all?: true
  }

  export type LessonProgressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LessonProgress to aggregate.
     */
    where?: LessonProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LessonProgresses to fetch.
     */
    orderBy?: LessonProgressOrderByWithRelationInput | LessonProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LessonProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LessonProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LessonProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LessonProgresses
    **/
    _count?: true | LessonProgressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LessonProgressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LessonProgressMaxAggregateInputType
  }

  export type GetLessonProgressAggregateType<T extends LessonProgressAggregateArgs> = {
        [P in keyof T & keyof AggregateLessonProgress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLessonProgress[P]>
      : GetScalarType<T[P], AggregateLessonProgress[P]>
  }




  export type LessonProgressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LessonProgressWhereInput
    orderBy?: LessonProgressOrderByWithAggregationInput | LessonProgressOrderByWithAggregationInput[]
    by: LessonProgressScalarFieldEnum[] | LessonProgressScalarFieldEnum
    having?: LessonProgressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LessonProgressCountAggregateInputType | true
    _min?: LessonProgressMinAggregateInputType
    _max?: LessonProgressMaxAggregateInputType
  }

  export type LessonProgressGroupByOutputType = {
    id: string
    completedAt: Date
    userId: string
    lessonId: string
    _count: LessonProgressCountAggregateOutputType | null
    _min: LessonProgressMinAggregateOutputType | null
    _max: LessonProgressMaxAggregateOutputType | null
  }

  type GetLessonProgressGroupByPayload<T extends LessonProgressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LessonProgressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LessonProgressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LessonProgressGroupByOutputType[P]>
            : GetScalarType<T[P], LessonProgressGroupByOutputType[P]>
        }
      >
    >


  export type LessonProgressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    completedAt?: boolean
    userId?: boolean
    lessonId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    lesson?: boolean | LessonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lessonProgress"]>

  export type LessonProgressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    completedAt?: boolean
    userId?: boolean
    lessonId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    lesson?: boolean | LessonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lessonProgress"]>

  export type LessonProgressSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    completedAt?: boolean
    userId?: boolean
    lessonId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    lesson?: boolean | LessonDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lessonProgress"]>

  export type LessonProgressSelectScalar = {
    id?: boolean
    completedAt?: boolean
    userId?: boolean
    lessonId?: boolean
  }

  export type LessonProgressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "completedAt" | "userId" | "lessonId", ExtArgs["result"]["lessonProgress"]>
  export type LessonProgressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    lesson?: boolean | LessonDefaultArgs<ExtArgs>
  }
  export type LessonProgressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    lesson?: boolean | LessonDefaultArgs<ExtArgs>
  }
  export type LessonProgressIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    lesson?: boolean | LessonDefaultArgs<ExtArgs>
  }

  export type $LessonProgressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LessonProgress"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      lesson: Prisma.$LessonPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      completedAt: Date
      userId: string
      lessonId: string
    }, ExtArgs["result"]["lessonProgress"]>
    composites: {}
  }

  type LessonProgressGetPayload<S extends boolean | null | undefined | LessonProgressDefaultArgs> = $Result.GetResult<Prisma.$LessonProgressPayload, S>

  type LessonProgressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LessonProgressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LessonProgressCountAggregateInputType | true
    }

  export interface LessonProgressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LessonProgress'], meta: { name: 'LessonProgress' } }
    /**
     * Find zero or one LessonProgress that matches the filter.
     * @param {LessonProgressFindUniqueArgs} args - Arguments to find a LessonProgress
     * @example
     * // Get one LessonProgress
     * const lessonProgress = await prisma.lessonProgress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LessonProgressFindUniqueArgs>(args: SelectSubset<T, LessonProgressFindUniqueArgs<ExtArgs>>): Prisma__LessonProgressClient<$Result.GetResult<Prisma.$LessonProgressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LessonProgress that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LessonProgressFindUniqueOrThrowArgs} args - Arguments to find a LessonProgress
     * @example
     * // Get one LessonProgress
     * const lessonProgress = await prisma.lessonProgress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LessonProgressFindUniqueOrThrowArgs>(args: SelectSubset<T, LessonProgressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LessonProgressClient<$Result.GetResult<Prisma.$LessonProgressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LessonProgress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonProgressFindFirstArgs} args - Arguments to find a LessonProgress
     * @example
     * // Get one LessonProgress
     * const lessonProgress = await prisma.lessonProgress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LessonProgressFindFirstArgs>(args?: SelectSubset<T, LessonProgressFindFirstArgs<ExtArgs>>): Prisma__LessonProgressClient<$Result.GetResult<Prisma.$LessonProgressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LessonProgress that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonProgressFindFirstOrThrowArgs} args - Arguments to find a LessonProgress
     * @example
     * // Get one LessonProgress
     * const lessonProgress = await prisma.lessonProgress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LessonProgressFindFirstOrThrowArgs>(args?: SelectSubset<T, LessonProgressFindFirstOrThrowArgs<ExtArgs>>): Prisma__LessonProgressClient<$Result.GetResult<Prisma.$LessonProgressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LessonProgresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonProgressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LessonProgresses
     * const lessonProgresses = await prisma.lessonProgress.findMany()
     * 
     * // Get first 10 LessonProgresses
     * const lessonProgresses = await prisma.lessonProgress.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lessonProgressWithIdOnly = await prisma.lessonProgress.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LessonProgressFindManyArgs>(args?: SelectSubset<T, LessonProgressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonProgressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LessonProgress.
     * @param {LessonProgressCreateArgs} args - Arguments to create a LessonProgress.
     * @example
     * // Create one LessonProgress
     * const LessonProgress = await prisma.lessonProgress.create({
     *   data: {
     *     // ... data to create a LessonProgress
     *   }
     * })
     * 
     */
    create<T extends LessonProgressCreateArgs>(args: SelectSubset<T, LessonProgressCreateArgs<ExtArgs>>): Prisma__LessonProgressClient<$Result.GetResult<Prisma.$LessonProgressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LessonProgresses.
     * @param {LessonProgressCreateManyArgs} args - Arguments to create many LessonProgresses.
     * @example
     * // Create many LessonProgresses
     * const lessonProgress = await prisma.lessonProgress.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LessonProgressCreateManyArgs>(args?: SelectSubset<T, LessonProgressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LessonProgresses and returns the data saved in the database.
     * @param {LessonProgressCreateManyAndReturnArgs} args - Arguments to create many LessonProgresses.
     * @example
     * // Create many LessonProgresses
     * const lessonProgress = await prisma.lessonProgress.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LessonProgresses and only return the `id`
     * const lessonProgressWithIdOnly = await prisma.lessonProgress.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LessonProgressCreateManyAndReturnArgs>(args?: SelectSubset<T, LessonProgressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonProgressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LessonProgress.
     * @param {LessonProgressDeleteArgs} args - Arguments to delete one LessonProgress.
     * @example
     * // Delete one LessonProgress
     * const LessonProgress = await prisma.lessonProgress.delete({
     *   where: {
     *     // ... filter to delete one LessonProgress
     *   }
     * })
     * 
     */
    delete<T extends LessonProgressDeleteArgs>(args: SelectSubset<T, LessonProgressDeleteArgs<ExtArgs>>): Prisma__LessonProgressClient<$Result.GetResult<Prisma.$LessonProgressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LessonProgress.
     * @param {LessonProgressUpdateArgs} args - Arguments to update one LessonProgress.
     * @example
     * // Update one LessonProgress
     * const lessonProgress = await prisma.lessonProgress.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LessonProgressUpdateArgs>(args: SelectSubset<T, LessonProgressUpdateArgs<ExtArgs>>): Prisma__LessonProgressClient<$Result.GetResult<Prisma.$LessonProgressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LessonProgresses.
     * @param {LessonProgressDeleteManyArgs} args - Arguments to filter LessonProgresses to delete.
     * @example
     * // Delete a few LessonProgresses
     * const { count } = await prisma.lessonProgress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LessonProgressDeleteManyArgs>(args?: SelectSubset<T, LessonProgressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LessonProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonProgressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LessonProgresses
     * const lessonProgress = await prisma.lessonProgress.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LessonProgressUpdateManyArgs>(args: SelectSubset<T, LessonProgressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LessonProgresses and returns the data updated in the database.
     * @param {LessonProgressUpdateManyAndReturnArgs} args - Arguments to update many LessonProgresses.
     * @example
     * // Update many LessonProgresses
     * const lessonProgress = await prisma.lessonProgress.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LessonProgresses and only return the `id`
     * const lessonProgressWithIdOnly = await prisma.lessonProgress.updateManyAndReturn({
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
    updateManyAndReturn<T extends LessonProgressUpdateManyAndReturnArgs>(args: SelectSubset<T, LessonProgressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LessonProgressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LessonProgress.
     * @param {LessonProgressUpsertArgs} args - Arguments to update or create a LessonProgress.
     * @example
     * // Update or create a LessonProgress
     * const lessonProgress = await prisma.lessonProgress.upsert({
     *   create: {
     *     // ... data to create a LessonProgress
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LessonProgress we want to update
     *   }
     * })
     */
    upsert<T extends LessonProgressUpsertArgs>(args: SelectSubset<T, LessonProgressUpsertArgs<ExtArgs>>): Prisma__LessonProgressClient<$Result.GetResult<Prisma.$LessonProgressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LessonProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonProgressCountArgs} args - Arguments to filter LessonProgresses to count.
     * @example
     * // Count the number of LessonProgresses
     * const count = await prisma.lessonProgress.count({
     *   where: {
     *     // ... the filter for the LessonProgresses we want to count
     *   }
     * })
    **/
    count<T extends LessonProgressCountArgs>(
      args?: Subset<T, LessonProgressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LessonProgressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LessonProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonProgressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LessonProgressAggregateArgs>(args: Subset<T, LessonProgressAggregateArgs>): Prisma.PrismaPromise<GetLessonProgressAggregateType<T>>

    /**
     * Group by LessonProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LessonProgressGroupByArgs} args - Group by arguments.
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
      T extends LessonProgressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LessonProgressGroupByArgs['orderBy'] }
        : { orderBy?: LessonProgressGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LessonProgressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLessonProgressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LessonProgress model
   */
  readonly fields: LessonProgressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LessonProgress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LessonProgressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    lesson<T extends LessonDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LessonDefaultArgs<ExtArgs>>): Prisma__LessonClient<$Result.GetResult<Prisma.$LessonPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the LessonProgress model
   */
  interface LessonProgressFieldRefs {
    readonly id: FieldRef<"LessonProgress", 'String'>
    readonly completedAt: FieldRef<"LessonProgress", 'DateTime'>
    readonly userId: FieldRef<"LessonProgress", 'String'>
    readonly lessonId: FieldRef<"LessonProgress", 'String'>
  }
    

  // Custom InputTypes
  /**
   * LessonProgress findUnique
   */
  export type LessonProgressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonProgress
     */
    select?: LessonProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonProgress
     */
    omit?: LessonProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonProgressInclude<ExtArgs> | null
    /**
     * Filter, which LessonProgress to fetch.
     */
    where: LessonProgressWhereUniqueInput
  }

  /**
   * LessonProgress findUniqueOrThrow
   */
  export type LessonProgressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonProgress
     */
    select?: LessonProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonProgress
     */
    omit?: LessonProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonProgressInclude<ExtArgs> | null
    /**
     * Filter, which LessonProgress to fetch.
     */
    where: LessonProgressWhereUniqueInput
  }

  /**
   * LessonProgress findFirst
   */
  export type LessonProgressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonProgress
     */
    select?: LessonProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonProgress
     */
    omit?: LessonProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonProgressInclude<ExtArgs> | null
    /**
     * Filter, which LessonProgress to fetch.
     */
    where?: LessonProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LessonProgresses to fetch.
     */
    orderBy?: LessonProgressOrderByWithRelationInput | LessonProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LessonProgresses.
     */
    cursor?: LessonProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LessonProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LessonProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LessonProgresses.
     */
    distinct?: LessonProgressScalarFieldEnum | LessonProgressScalarFieldEnum[]
  }

  /**
   * LessonProgress findFirstOrThrow
   */
  export type LessonProgressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonProgress
     */
    select?: LessonProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonProgress
     */
    omit?: LessonProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonProgressInclude<ExtArgs> | null
    /**
     * Filter, which LessonProgress to fetch.
     */
    where?: LessonProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LessonProgresses to fetch.
     */
    orderBy?: LessonProgressOrderByWithRelationInput | LessonProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LessonProgresses.
     */
    cursor?: LessonProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LessonProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LessonProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LessonProgresses.
     */
    distinct?: LessonProgressScalarFieldEnum | LessonProgressScalarFieldEnum[]
  }

  /**
   * LessonProgress findMany
   */
  export type LessonProgressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonProgress
     */
    select?: LessonProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonProgress
     */
    omit?: LessonProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonProgressInclude<ExtArgs> | null
    /**
     * Filter, which LessonProgresses to fetch.
     */
    where?: LessonProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LessonProgresses to fetch.
     */
    orderBy?: LessonProgressOrderByWithRelationInput | LessonProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LessonProgresses.
     */
    cursor?: LessonProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LessonProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LessonProgresses.
     */
    skip?: number
    distinct?: LessonProgressScalarFieldEnum | LessonProgressScalarFieldEnum[]
  }

  /**
   * LessonProgress create
   */
  export type LessonProgressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonProgress
     */
    select?: LessonProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonProgress
     */
    omit?: LessonProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonProgressInclude<ExtArgs> | null
    /**
     * The data needed to create a LessonProgress.
     */
    data: XOR<LessonProgressCreateInput, LessonProgressUncheckedCreateInput>
  }

  /**
   * LessonProgress createMany
   */
  export type LessonProgressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LessonProgresses.
     */
    data: LessonProgressCreateManyInput | LessonProgressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LessonProgress createManyAndReturn
   */
  export type LessonProgressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonProgress
     */
    select?: LessonProgressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LessonProgress
     */
    omit?: LessonProgressOmit<ExtArgs> | null
    /**
     * The data used to create many LessonProgresses.
     */
    data: LessonProgressCreateManyInput | LessonProgressCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonProgressIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LessonProgress update
   */
  export type LessonProgressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonProgress
     */
    select?: LessonProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonProgress
     */
    omit?: LessonProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonProgressInclude<ExtArgs> | null
    /**
     * The data needed to update a LessonProgress.
     */
    data: XOR<LessonProgressUpdateInput, LessonProgressUncheckedUpdateInput>
    /**
     * Choose, which LessonProgress to update.
     */
    where: LessonProgressWhereUniqueInput
  }

  /**
   * LessonProgress updateMany
   */
  export type LessonProgressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LessonProgresses.
     */
    data: XOR<LessonProgressUpdateManyMutationInput, LessonProgressUncheckedUpdateManyInput>
    /**
     * Filter which LessonProgresses to update
     */
    where?: LessonProgressWhereInput
    /**
     * Limit how many LessonProgresses to update.
     */
    limit?: number
  }

  /**
   * LessonProgress updateManyAndReturn
   */
  export type LessonProgressUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonProgress
     */
    select?: LessonProgressSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LessonProgress
     */
    omit?: LessonProgressOmit<ExtArgs> | null
    /**
     * The data used to update LessonProgresses.
     */
    data: XOR<LessonProgressUpdateManyMutationInput, LessonProgressUncheckedUpdateManyInput>
    /**
     * Filter which LessonProgresses to update
     */
    where?: LessonProgressWhereInput
    /**
     * Limit how many LessonProgresses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonProgressIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LessonProgress upsert
   */
  export type LessonProgressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonProgress
     */
    select?: LessonProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonProgress
     */
    omit?: LessonProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonProgressInclude<ExtArgs> | null
    /**
     * The filter to search for the LessonProgress to update in case it exists.
     */
    where: LessonProgressWhereUniqueInput
    /**
     * In case the LessonProgress found by the `where` argument doesn't exist, create a new LessonProgress with this data.
     */
    create: XOR<LessonProgressCreateInput, LessonProgressUncheckedCreateInput>
    /**
     * In case the LessonProgress was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LessonProgressUpdateInput, LessonProgressUncheckedUpdateInput>
  }

  /**
   * LessonProgress delete
   */
  export type LessonProgressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonProgress
     */
    select?: LessonProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonProgress
     */
    omit?: LessonProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonProgressInclude<ExtArgs> | null
    /**
     * Filter which LessonProgress to delete.
     */
    where: LessonProgressWhereUniqueInput
  }

  /**
   * LessonProgress deleteMany
   */
  export type LessonProgressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LessonProgresses to delete
     */
    where?: LessonProgressWhereInput
    /**
     * Limit how many LessonProgresses to delete.
     */
    limit?: number
  }

  /**
   * LessonProgress without action
   */
  export type LessonProgressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LessonProgress
     */
    select?: LessonProgressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LessonProgress
     */
    omit?: LessonProgressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LessonProgressInclude<ExtArgs> | null
  }


  /**
   * Model PayoutRequest
   */

  export type AggregatePayoutRequest = {
    _count: PayoutRequestCountAggregateOutputType | null
    _avg: PayoutRequestAvgAggregateOutputType | null
    _sum: PayoutRequestSumAggregateOutputType | null
    _min: PayoutRequestMinAggregateOutputType | null
    _max: PayoutRequestMaxAggregateOutputType | null
  }

  export type PayoutRequestAvgAggregateOutputType = {
    amount: number | null
  }

  export type PayoutRequestSumAggregateOutputType = {
    amount: number | null
  }

  export type PayoutRequestMinAggregateOutputType = {
    id: string | null
    amount: number | null
    status: $Enums.PayoutStatus | null
    paystackTransferId: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PayoutRequestMaxAggregateOutputType = {
    id: string | null
    amount: number | null
    status: $Enums.PayoutStatus | null
    paystackTransferId: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PayoutRequestCountAggregateOutputType = {
    id: number
    amount: number
    status: number
    paystackTransferId: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PayoutRequestAvgAggregateInputType = {
    amount?: true
  }

  export type PayoutRequestSumAggregateInputType = {
    amount?: true
  }

  export type PayoutRequestMinAggregateInputType = {
    id?: true
    amount?: true
    status?: true
    paystackTransferId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PayoutRequestMaxAggregateInputType = {
    id?: true
    amount?: true
    status?: true
    paystackTransferId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PayoutRequestCountAggregateInputType = {
    id?: true
    amount?: true
    status?: true
    paystackTransferId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PayoutRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PayoutRequest to aggregate.
     */
    where?: PayoutRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PayoutRequests to fetch.
     */
    orderBy?: PayoutRequestOrderByWithRelationInput | PayoutRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PayoutRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PayoutRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PayoutRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PayoutRequests
    **/
    _count?: true | PayoutRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PayoutRequestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PayoutRequestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PayoutRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PayoutRequestMaxAggregateInputType
  }

  export type GetPayoutRequestAggregateType<T extends PayoutRequestAggregateArgs> = {
        [P in keyof T & keyof AggregatePayoutRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayoutRequest[P]>
      : GetScalarType<T[P], AggregatePayoutRequest[P]>
  }




  export type PayoutRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PayoutRequestWhereInput
    orderBy?: PayoutRequestOrderByWithAggregationInput | PayoutRequestOrderByWithAggregationInput[]
    by: PayoutRequestScalarFieldEnum[] | PayoutRequestScalarFieldEnum
    having?: PayoutRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PayoutRequestCountAggregateInputType | true
    _avg?: PayoutRequestAvgAggregateInputType
    _sum?: PayoutRequestSumAggregateInputType
    _min?: PayoutRequestMinAggregateInputType
    _max?: PayoutRequestMaxAggregateInputType
  }

  export type PayoutRequestGroupByOutputType = {
    id: string
    amount: number
    status: $Enums.PayoutStatus
    paystackTransferId: string | null
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: PayoutRequestCountAggregateOutputType | null
    _avg: PayoutRequestAvgAggregateOutputType | null
    _sum: PayoutRequestSumAggregateOutputType | null
    _min: PayoutRequestMinAggregateOutputType | null
    _max: PayoutRequestMaxAggregateOutputType | null
  }

  type GetPayoutRequestGroupByPayload<T extends PayoutRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PayoutRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PayoutRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PayoutRequestGroupByOutputType[P]>
            : GetScalarType<T[P], PayoutRequestGroupByOutputType[P]>
        }
      >
    >


  export type PayoutRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    status?: boolean
    paystackTransferId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payoutRequest"]>

  export type PayoutRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    status?: boolean
    paystackTransferId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payoutRequest"]>

  export type PayoutRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    status?: boolean
    paystackTransferId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payoutRequest"]>

  export type PayoutRequestSelectScalar = {
    id?: boolean
    amount?: boolean
    status?: boolean
    paystackTransferId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PayoutRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "amount" | "status" | "paystackTransferId" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["payoutRequest"]>
  export type PayoutRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PayoutRequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PayoutRequestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PayoutRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PayoutRequest"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      amount: number
      status: $Enums.PayoutStatus
      paystackTransferId: string | null
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["payoutRequest"]>
    composites: {}
  }

  type PayoutRequestGetPayload<S extends boolean | null | undefined | PayoutRequestDefaultArgs> = $Result.GetResult<Prisma.$PayoutRequestPayload, S>

  type PayoutRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PayoutRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PayoutRequestCountAggregateInputType | true
    }

  export interface PayoutRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PayoutRequest'], meta: { name: 'PayoutRequest' } }
    /**
     * Find zero or one PayoutRequest that matches the filter.
     * @param {PayoutRequestFindUniqueArgs} args - Arguments to find a PayoutRequest
     * @example
     * // Get one PayoutRequest
     * const payoutRequest = await prisma.payoutRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PayoutRequestFindUniqueArgs>(args: SelectSubset<T, PayoutRequestFindUniqueArgs<ExtArgs>>): Prisma__PayoutRequestClient<$Result.GetResult<Prisma.$PayoutRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PayoutRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PayoutRequestFindUniqueOrThrowArgs} args - Arguments to find a PayoutRequest
     * @example
     * // Get one PayoutRequest
     * const payoutRequest = await prisma.payoutRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PayoutRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, PayoutRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PayoutRequestClient<$Result.GetResult<Prisma.$PayoutRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PayoutRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayoutRequestFindFirstArgs} args - Arguments to find a PayoutRequest
     * @example
     * // Get one PayoutRequest
     * const payoutRequest = await prisma.payoutRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PayoutRequestFindFirstArgs>(args?: SelectSubset<T, PayoutRequestFindFirstArgs<ExtArgs>>): Prisma__PayoutRequestClient<$Result.GetResult<Prisma.$PayoutRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PayoutRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayoutRequestFindFirstOrThrowArgs} args - Arguments to find a PayoutRequest
     * @example
     * // Get one PayoutRequest
     * const payoutRequest = await prisma.payoutRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PayoutRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, PayoutRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__PayoutRequestClient<$Result.GetResult<Prisma.$PayoutRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PayoutRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayoutRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PayoutRequests
     * const payoutRequests = await prisma.payoutRequest.findMany()
     * 
     * // Get first 10 PayoutRequests
     * const payoutRequests = await prisma.payoutRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const payoutRequestWithIdOnly = await prisma.payoutRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PayoutRequestFindManyArgs>(args?: SelectSubset<T, PayoutRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayoutRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PayoutRequest.
     * @param {PayoutRequestCreateArgs} args - Arguments to create a PayoutRequest.
     * @example
     * // Create one PayoutRequest
     * const PayoutRequest = await prisma.payoutRequest.create({
     *   data: {
     *     // ... data to create a PayoutRequest
     *   }
     * })
     * 
     */
    create<T extends PayoutRequestCreateArgs>(args: SelectSubset<T, PayoutRequestCreateArgs<ExtArgs>>): Prisma__PayoutRequestClient<$Result.GetResult<Prisma.$PayoutRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PayoutRequests.
     * @param {PayoutRequestCreateManyArgs} args - Arguments to create many PayoutRequests.
     * @example
     * // Create many PayoutRequests
     * const payoutRequest = await prisma.payoutRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PayoutRequestCreateManyArgs>(args?: SelectSubset<T, PayoutRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PayoutRequests and returns the data saved in the database.
     * @param {PayoutRequestCreateManyAndReturnArgs} args - Arguments to create many PayoutRequests.
     * @example
     * // Create many PayoutRequests
     * const payoutRequest = await prisma.payoutRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PayoutRequests and only return the `id`
     * const payoutRequestWithIdOnly = await prisma.payoutRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PayoutRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, PayoutRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayoutRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PayoutRequest.
     * @param {PayoutRequestDeleteArgs} args - Arguments to delete one PayoutRequest.
     * @example
     * // Delete one PayoutRequest
     * const PayoutRequest = await prisma.payoutRequest.delete({
     *   where: {
     *     // ... filter to delete one PayoutRequest
     *   }
     * })
     * 
     */
    delete<T extends PayoutRequestDeleteArgs>(args: SelectSubset<T, PayoutRequestDeleteArgs<ExtArgs>>): Prisma__PayoutRequestClient<$Result.GetResult<Prisma.$PayoutRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PayoutRequest.
     * @param {PayoutRequestUpdateArgs} args - Arguments to update one PayoutRequest.
     * @example
     * // Update one PayoutRequest
     * const payoutRequest = await prisma.payoutRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PayoutRequestUpdateArgs>(args: SelectSubset<T, PayoutRequestUpdateArgs<ExtArgs>>): Prisma__PayoutRequestClient<$Result.GetResult<Prisma.$PayoutRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PayoutRequests.
     * @param {PayoutRequestDeleteManyArgs} args - Arguments to filter PayoutRequests to delete.
     * @example
     * // Delete a few PayoutRequests
     * const { count } = await prisma.payoutRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PayoutRequestDeleteManyArgs>(args?: SelectSubset<T, PayoutRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PayoutRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayoutRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PayoutRequests
     * const payoutRequest = await prisma.payoutRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PayoutRequestUpdateManyArgs>(args: SelectSubset<T, PayoutRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PayoutRequests and returns the data updated in the database.
     * @param {PayoutRequestUpdateManyAndReturnArgs} args - Arguments to update many PayoutRequests.
     * @example
     * // Update many PayoutRequests
     * const payoutRequest = await prisma.payoutRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PayoutRequests and only return the `id`
     * const payoutRequestWithIdOnly = await prisma.payoutRequest.updateManyAndReturn({
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
    updateManyAndReturn<T extends PayoutRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, PayoutRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayoutRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PayoutRequest.
     * @param {PayoutRequestUpsertArgs} args - Arguments to update or create a PayoutRequest.
     * @example
     * // Update or create a PayoutRequest
     * const payoutRequest = await prisma.payoutRequest.upsert({
     *   create: {
     *     // ... data to create a PayoutRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PayoutRequest we want to update
     *   }
     * })
     */
    upsert<T extends PayoutRequestUpsertArgs>(args: SelectSubset<T, PayoutRequestUpsertArgs<ExtArgs>>): Prisma__PayoutRequestClient<$Result.GetResult<Prisma.$PayoutRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PayoutRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayoutRequestCountArgs} args - Arguments to filter PayoutRequests to count.
     * @example
     * // Count the number of PayoutRequests
     * const count = await prisma.payoutRequest.count({
     *   where: {
     *     // ... the filter for the PayoutRequests we want to count
     *   }
     * })
    **/
    count<T extends PayoutRequestCountArgs>(
      args?: Subset<T, PayoutRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PayoutRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PayoutRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayoutRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PayoutRequestAggregateArgs>(args: Subset<T, PayoutRequestAggregateArgs>): Prisma.PrismaPromise<GetPayoutRequestAggregateType<T>>

    /**
     * Group by PayoutRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayoutRequestGroupByArgs} args - Group by arguments.
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
      T extends PayoutRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PayoutRequestGroupByArgs['orderBy'] }
        : { orderBy?: PayoutRequestGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PayoutRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPayoutRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PayoutRequest model
   */
  readonly fields: PayoutRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PayoutRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PayoutRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the PayoutRequest model
   */
  interface PayoutRequestFieldRefs {
    readonly id: FieldRef<"PayoutRequest", 'String'>
    readonly amount: FieldRef<"PayoutRequest", 'Int'>
    readonly status: FieldRef<"PayoutRequest", 'PayoutStatus'>
    readonly paystackTransferId: FieldRef<"PayoutRequest", 'String'>
    readonly userId: FieldRef<"PayoutRequest", 'String'>
    readonly createdAt: FieldRef<"PayoutRequest", 'DateTime'>
    readonly updatedAt: FieldRef<"PayoutRequest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PayoutRequest findUnique
   */
  export type PayoutRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayoutRequest
     */
    select?: PayoutRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayoutRequest
     */
    omit?: PayoutRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayoutRequestInclude<ExtArgs> | null
    /**
     * Filter, which PayoutRequest to fetch.
     */
    where: PayoutRequestWhereUniqueInput
  }

  /**
   * PayoutRequest findUniqueOrThrow
   */
  export type PayoutRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayoutRequest
     */
    select?: PayoutRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayoutRequest
     */
    omit?: PayoutRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayoutRequestInclude<ExtArgs> | null
    /**
     * Filter, which PayoutRequest to fetch.
     */
    where: PayoutRequestWhereUniqueInput
  }

  /**
   * PayoutRequest findFirst
   */
  export type PayoutRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayoutRequest
     */
    select?: PayoutRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayoutRequest
     */
    omit?: PayoutRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayoutRequestInclude<ExtArgs> | null
    /**
     * Filter, which PayoutRequest to fetch.
     */
    where?: PayoutRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PayoutRequests to fetch.
     */
    orderBy?: PayoutRequestOrderByWithRelationInput | PayoutRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PayoutRequests.
     */
    cursor?: PayoutRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PayoutRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PayoutRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PayoutRequests.
     */
    distinct?: PayoutRequestScalarFieldEnum | PayoutRequestScalarFieldEnum[]
  }

  /**
   * PayoutRequest findFirstOrThrow
   */
  export type PayoutRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayoutRequest
     */
    select?: PayoutRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayoutRequest
     */
    omit?: PayoutRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayoutRequestInclude<ExtArgs> | null
    /**
     * Filter, which PayoutRequest to fetch.
     */
    where?: PayoutRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PayoutRequests to fetch.
     */
    orderBy?: PayoutRequestOrderByWithRelationInput | PayoutRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PayoutRequests.
     */
    cursor?: PayoutRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PayoutRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PayoutRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PayoutRequests.
     */
    distinct?: PayoutRequestScalarFieldEnum | PayoutRequestScalarFieldEnum[]
  }

  /**
   * PayoutRequest findMany
   */
  export type PayoutRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayoutRequest
     */
    select?: PayoutRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayoutRequest
     */
    omit?: PayoutRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayoutRequestInclude<ExtArgs> | null
    /**
     * Filter, which PayoutRequests to fetch.
     */
    where?: PayoutRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PayoutRequests to fetch.
     */
    orderBy?: PayoutRequestOrderByWithRelationInput | PayoutRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PayoutRequests.
     */
    cursor?: PayoutRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PayoutRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PayoutRequests.
     */
    skip?: number
    distinct?: PayoutRequestScalarFieldEnum | PayoutRequestScalarFieldEnum[]
  }

  /**
   * PayoutRequest create
   */
  export type PayoutRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayoutRequest
     */
    select?: PayoutRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayoutRequest
     */
    omit?: PayoutRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayoutRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a PayoutRequest.
     */
    data: XOR<PayoutRequestCreateInput, PayoutRequestUncheckedCreateInput>
  }

  /**
   * PayoutRequest createMany
   */
  export type PayoutRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PayoutRequests.
     */
    data: PayoutRequestCreateManyInput | PayoutRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PayoutRequest createManyAndReturn
   */
  export type PayoutRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayoutRequest
     */
    select?: PayoutRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PayoutRequest
     */
    omit?: PayoutRequestOmit<ExtArgs> | null
    /**
     * The data used to create many PayoutRequests.
     */
    data: PayoutRequestCreateManyInput | PayoutRequestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayoutRequestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PayoutRequest update
   */
  export type PayoutRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayoutRequest
     */
    select?: PayoutRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayoutRequest
     */
    omit?: PayoutRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayoutRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a PayoutRequest.
     */
    data: XOR<PayoutRequestUpdateInput, PayoutRequestUncheckedUpdateInput>
    /**
     * Choose, which PayoutRequest to update.
     */
    where: PayoutRequestWhereUniqueInput
  }

  /**
   * PayoutRequest updateMany
   */
  export type PayoutRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PayoutRequests.
     */
    data: XOR<PayoutRequestUpdateManyMutationInput, PayoutRequestUncheckedUpdateManyInput>
    /**
     * Filter which PayoutRequests to update
     */
    where?: PayoutRequestWhereInput
    /**
     * Limit how many PayoutRequests to update.
     */
    limit?: number
  }

  /**
   * PayoutRequest updateManyAndReturn
   */
  export type PayoutRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayoutRequest
     */
    select?: PayoutRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PayoutRequest
     */
    omit?: PayoutRequestOmit<ExtArgs> | null
    /**
     * The data used to update PayoutRequests.
     */
    data: XOR<PayoutRequestUpdateManyMutationInput, PayoutRequestUncheckedUpdateManyInput>
    /**
     * Filter which PayoutRequests to update
     */
    where?: PayoutRequestWhereInput
    /**
     * Limit how many PayoutRequests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayoutRequestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PayoutRequest upsert
   */
  export type PayoutRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayoutRequest
     */
    select?: PayoutRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayoutRequest
     */
    omit?: PayoutRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayoutRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the PayoutRequest to update in case it exists.
     */
    where: PayoutRequestWhereUniqueInput
    /**
     * In case the PayoutRequest found by the `where` argument doesn't exist, create a new PayoutRequest with this data.
     */
    create: XOR<PayoutRequestCreateInput, PayoutRequestUncheckedCreateInput>
    /**
     * In case the PayoutRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PayoutRequestUpdateInput, PayoutRequestUncheckedUpdateInput>
  }

  /**
   * PayoutRequest delete
   */
  export type PayoutRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayoutRequest
     */
    select?: PayoutRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayoutRequest
     */
    omit?: PayoutRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayoutRequestInclude<ExtArgs> | null
    /**
     * Filter which PayoutRequest to delete.
     */
    where: PayoutRequestWhereUniqueInput
  }

  /**
   * PayoutRequest deleteMany
   */
  export type PayoutRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PayoutRequests to delete
     */
    where?: PayoutRequestWhereInput
    /**
     * Limit how many PayoutRequests to delete.
     */
    limit?: number
  }

  /**
   * PayoutRequest without action
   */
  export type PayoutRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayoutRequest
     */
    select?: PayoutRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayoutRequest
     */
    omit?: PayoutRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayoutRequestInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    firstName: 'firstName',
    lastName: 'lastName',
    role: 'role',
    verifiedAt: 'verifiedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RefreshTokenScalarFieldEnum: {
    id: 'id',
    tokenHash: 'tokenHash',
    expiresAt: 'expiresAt',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RefreshTokenScalarFieldEnum = (typeof RefreshTokenScalarFieldEnum)[keyof typeof RefreshTokenScalarFieldEnum]


  export const EmailVerificationTokenScalarFieldEnum: {
    id: 'id',
    tokenHash: 'tokenHash',
    expiresAt: 'expiresAt',
    userId: 'userId',
    createdAt: 'createdAt'
  };

  export type EmailVerificationTokenScalarFieldEnum = (typeof EmailVerificationTokenScalarFieldEnum)[keyof typeof EmailVerificationTokenScalarFieldEnum]


  export const PasswordResetTokenScalarFieldEnum: {
    id: 'id',
    tokenHash: 'tokenHash',
    expiresAt: 'expiresAt',
    userId: 'userId',
    createdAt: 'createdAt'
  };

  export type PasswordResetTokenScalarFieldEnum = (typeof PasswordResetTokenScalarFieldEnum)[keyof typeof PasswordResetTokenScalarFieldEnum]


  export const InstructorProfileScalarFieldEnum: {
    id: 'id',
    bio: 'bio',
    tradeId: 'tradeId',
    paystackRecipientCode: 'paystackRecipientCode',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type InstructorProfileScalarFieldEnum = (typeof InstructorProfileScalarFieldEnum)[keyof typeof InstructorProfileScalarFieldEnum]


  export const TradeScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type TradeScalarFieldEnum = (typeof TradeScalarFieldEnum)[keyof typeof TradeScalarFieldEnum]


  export const CourseScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    price: 'price',
    status: 'status',
    coverImageUrl: 'coverImageUrl',
    instructorProfileId: 'instructorProfileId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CourseScalarFieldEnum = (typeof CourseScalarFieldEnum)[keyof typeof CourseScalarFieldEnum]


  export const ModuleScalarFieldEnum: {
    id: 'id',
    title: 'title',
    order: 'order',
    courseId: 'courseId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ModuleScalarFieldEnum = (typeof ModuleScalarFieldEnum)[keyof typeof ModuleScalarFieldEnum]


  export const LessonScalarFieldEnum: {
    id: 'id',
    title: 'title',
    order: 'order',
    videoUrl: 'videoUrl',
    duration: 'duration',
    isFreePreview: 'isFreePreview',
    moduleId: 'moduleId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LessonScalarFieldEnum = (typeof LessonScalarFieldEnum)[keyof typeof LessonScalarFieldEnum]


  export const EnrollmentScalarFieldEnum: {
    id: 'id',
    status: 'status',
    paystackReference: 'paystackReference',
    amountPaid: 'amountPaid',
    userId: 'userId',
    courseId: 'courseId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EnrollmentScalarFieldEnum = (typeof EnrollmentScalarFieldEnum)[keyof typeof EnrollmentScalarFieldEnum]


  export const LessonProgressScalarFieldEnum: {
    id: 'id',
    completedAt: 'completedAt',
    userId: 'userId',
    lessonId: 'lessonId'
  };

  export type LessonProgressScalarFieldEnum = (typeof LessonProgressScalarFieldEnum)[keyof typeof LessonProgressScalarFieldEnum]


  export const PayoutRequestScalarFieldEnum: {
    id: 'id',
    amount: 'amount',
    status: 'status',
    paystackTransferId: 'paystackTransferId',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PayoutRequestScalarFieldEnum = (typeof PayoutRequestScalarFieldEnum)[keyof typeof PayoutRequestScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'CourseStatus'
   */
  export type EnumCourseStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CourseStatus'>
    


  /**
   * Reference to a field of type 'CourseStatus[]'
   */
  export type ListEnumCourseStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CourseStatus[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'EnrollmentStatus'
   */
  export type EnumEnrollmentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EnrollmentStatus'>
    


  /**
   * Reference to a field of type 'EnrollmentStatus[]'
   */
  export type ListEnumEnrollmentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EnrollmentStatus[]'>
    


  /**
   * Reference to a field of type 'PayoutStatus'
   */
  export type EnumPayoutStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PayoutStatus'>
    


  /**
   * Reference to a field of type 'PayoutStatus[]'
   */
  export type ListEnumPayoutStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PayoutStatus[]'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    verifiedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    instructorProfile?: XOR<InstructorProfileNullableScalarRelationFilter, InstructorProfileWhereInput> | null
    refreshToken?: XOR<RefreshTokenNullableScalarRelationFilter, RefreshTokenWhereInput> | null
    emailVerificationToken?: XOR<EmailVerificationTokenNullableScalarRelationFilter, EmailVerificationTokenWhereInput> | null
    passwordResetToken?: XOR<PasswordResetTokenNullableScalarRelationFilter, PasswordResetTokenWhereInput> | null
    enrollments?: EnrollmentListRelationFilter
    progress?: LessonProgressListRelationFilter
    payoutRequests?: PayoutRequestListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    role?: SortOrder
    verifiedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    instructorProfile?: InstructorProfileOrderByWithRelationInput
    refreshToken?: RefreshTokenOrderByWithRelationInput
    emailVerificationToken?: EmailVerificationTokenOrderByWithRelationInput
    passwordResetToken?: PasswordResetTokenOrderByWithRelationInput
    enrollments?: EnrollmentOrderByRelationAggregateInput
    progress?: LessonProgressOrderByRelationAggregateInput
    payoutRequests?: PayoutRequestOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    verifiedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    instructorProfile?: XOR<InstructorProfileNullableScalarRelationFilter, InstructorProfileWhereInput> | null
    refreshToken?: XOR<RefreshTokenNullableScalarRelationFilter, RefreshTokenWhereInput> | null
    emailVerificationToken?: XOR<EmailVerificationTokenNullableScalarRelationFilter, EmailVerificationTokenWhereInput> | null
    passwordResetToken?: XOR<PasswordResetTokenNullableScalarRelationFilter, PasswordResetTokenWhereInput> | null
    enrollments?: EnrollmentListRelationFilter
    progress?: LessonProgressListRelationFilter
    payoutRequests?: PayoutRequestListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    role?: SortOrder
    verifiedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    verifiedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type RefreshTokenWhereInput = {
    AND?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    OR?: RefreshTokenWhereInput[]
    NOT?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    id?: StringFilter<"RefreshToken"> | string
    tokenHash?: StringFilter<"RefreshToken"> | string
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    userId?: StringFilter<"RefreshToken"> | string
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string
    updatedAt?: DateTimeFilter<"RefreshToken"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type RefreshTokenOrderByWithRelationInput = {
    id?: SortOrder
    tokenHash?: SortOrder
    expiresAt?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type RefreshTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tokenHash?: string
    userId?: string
    AND?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    OR?: RefreshTokenWhereInput[]
    NOT?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    expiresAt?: DateTimeFilter<"RefreshToken"> | Date | string
    createdAt?: DateTimeFilter<"RefreshToken"> | Date | string
    updatedAt?: DateTimeFilter<"RefreshToken"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "tokenHash" | "userId">

  export type RefreshTokenOrderByWithAggregationInput = {
    id?: SortOrder
    tokenHash?: SortOrder
    expiresAt?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RefreshTokenCountOrderByAggregateInput
    _max?: RefreshTokenMaxOrderByAggregateInput
    _min?: RefreshTokenMinOrderByAggregateInput
  }

  export type RefreshTokenScalarWhereWithAggregatesInput = {
    AND?: RefreshTokenScalarWhereWithAggregatesInput | RefreshTokenScalarWhereWithAggregatesInput[]
    OR?: RefreshTokenScalarWhereWithAggregatesInput[]
    NOT?: RefreshTokenScalarWhereWithAggregatesInput | RefreshTokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RefreshToken"> | string
    tokenHash?: StringWithAggregatesFilter<"RefreshToken"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"RefreshToken"> | Date | string
    userId?: StringWithAggregatesFilter<"RefreshToken"> | string
    createdAt?: DateTimeWithAggregatesFilter<"RefreshToken"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RefreshToken"> | Date | string
  }

  export type EmailVerificationTokenWhereInput = {
    AND?: EmailVerificationTokenWhereInput | EmailVerificationTokenWhereInput[]
    OR?: EmailVerificationTokenWhereInput[]
    NOT?: EmailVerificationTokenWhereInput | EmailVerificationTokenWhereInput[]
    id?: StringFilter<"EmailVerificationToken"> | string
    tokenHash?: StringFilter<"EmailVerificationToken"> | string
    expiresAt?: DateTimeFilter<"EmailVerificationToken"> | Date | string
    userId?: StringFilter<"EmailVerificationToken"> | string
    createdAt?: DateTimeFilter<"EmailVerificationToken"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type EmailVerificationTokenOrderByWithRelationInput = {
    id?: SortOrder
    tokenHash?: SortOrder
    expiresAt?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type EmailVerificationTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tokenHash?: string
    userId?: string
    AND?: EmailVerificationTokenWhereInput | EmailVerificationTokenWhereInput[]
    OR?: EmailVerificationTokenWhereInput[]
    NOT?: EmailVerificationTokenWhereInput | EmailVerificationTokenWhereInput[]
    expiresAt?: DateTimeFilter<"EmailVerificationToken"> | Date | string
    createdAt?: DateTimeFilter<"EmailVerificationToken"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "tokenHash" | "userId">

  export type EmailVerificationTokenOrderByWithAggregationInput = {
    id?: SortOrder
    tokenHash?: SortOrder
    expiresAt?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    _count?: EmailVerificationTokenCountOrderByAggregateInput
    _max?: EmailVerificationTokenMaxOrderByAggregateInput
    _min?: EmailVerificationTokenMinOrderByAggregateInput
  }

  export type EmailVerificationTokenScalarWhereWithAggregatesInput = {
    AND?: EmailVerificationTokenScalarWhereWithAggregatesInput | EmailVerificationTokenScalarWhereWithAggregatesInput[]
    OR?: EmailVerificationTokenScalarWhereWithAggregatesInput[]
    NOT?: EmailVerificationTokenScalarWhereWithAggregatesInput | EmailVerificationTokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EmailVerificationToken"> | string
    tokenHash?: StringWithAggregatesFilter<"EmailVerificationToken"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"EmailVerificationToken"> | Date | string
    userId?: StringWithAggregatesFilter<"EmailVerificationToken"> | string
    createdAt?: DateTimeWithAggregatesFilter<"EmailVerificationToken"> | Date | string
  }

  export type PasswordResetTokenWhereInput = {
    AND?: PasswordResetTokenWhereInput | PasswordResetTokenWhereInput[]
    OR?: PasswordResetTokenWhereInput[]
    NOT?: PasswordResetTokenWhereInput | PasswordResetTokenWhereInput[]
    id?: StringFilter<"PasswordResetToken"> | string
    tokenHash?: StringFilter<"PasswordResetToken"> | string
    expiresAt?: DateTimeFilter<"PasswordResetToken"> | Date | string
    userId?: StringFilter<"PasswordResetToken"> | string
    createdAt?: DateTimeFilter<"PasswordResetToken"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PasswordResetTokenOrderByWithRelationInput = {
    id?: SortOrder
    tokenHash?: SortOrder
    expiresAt?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type PasswordResetTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tokenHash?: string
    userId?: string
    AND?: PasswordResetTokenWhereInput | PasswordResetTokenWhereInput[]
    OR?: PasswordResetTokenWhereInput[]
    NOT?: PasswordResetTokenWhereInput | PasswordResetTokenWhereInput[]
    expiresAt?: DateTimeFilter<"PasswordResetToken"> | Date | string
    createdAt?: DateTimeFilter<"PasswordResetToken"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "tokenHash" | "userId">

  export type PasswordResetTokenOrderByWithAggregationInput = {
    id?: SortOrder
    tokenHash?: SortOrder
    expiresAt?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    _count?: PasswordResetTokenCountOrderByAggregateInput
    _max?: PasswordResetTokenMaxOrderByAggregateInput
    _min?: PasswordResetTokenMinOrderByAggregateInput
  }

  export type PasswordResetTokenScalarWhereWithAggregatesInput = {
    AND?: PasswordResetTokenScalarWhereWithAggregatesInput | PasswordResetTokenScalarWhereWithAggregatesInput[]
    OR?: PasswordResetTokenScalarWhereWithAggregatesInput[]
    NOT?: PasswordResetTokenScalarWhereWithAggregatesInput | PasswordResetTokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PasswordResetToken"> | string
    tokenHash?: StringWithAggregatesFilter<"PasswordResetToken"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"PasswordResetToken"> | Date | string
    userId?: StringWithAggregatesFilter<"PasswordResetToken"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PasswordResetToken"> | Date | string
  }

  export type InstructorProfileWhereInput = {
    AND?: InstructorProfileWhereInput | InstructorProfileWhereInput[]
    OR?: InstructorProfileWhereInput[]
    NOT?: InstructorProfileWhereInput | InstructorProfileWhereInput[]
    id?: StringFilter<"InstructorProfile"> | string
    bio?: StringNullableFilter<"InstructorProfile"> | string | null
    tradeId?: StringFilter<"InstructorProfile"> | string
    paystackRecipientCode?: StringNullableFilter<"InstructorProfile"> | string | null
    userId?: StringFilter<"InstructorProfile"> | string
    createdAt?: DateTimeFilter<"InstructorProfile"> | Date | string
    updatedAt?: DateTimeFilter<"InstructorProfile"> | Date | string
    trade?: XOR<TradeScalarRelationFilter, TradeWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    courses?: CourseListRelationFilter
  }

  export type InstructorProfileOrderByWithRelationInput = {
    id?: SortOrder
    bio?: SortOrderInput | SortOrder
    tradeId?: SortOrder
    paystackRecipientCode?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    trade?: TradeOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    courses?: CourseOrderByRelationAggregateInput
  }

  export type InstructorProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: InstructorProfileWhereInput | InstructorProfileWhereInput[]
    OR?: InstructorProfileWhereInput[]
    NOT?: InstructorProfileWhereInput | InstructorProfileWhereInput[]
    bio?: StringNullableFilter<"InstructorProfile"> | string | null
    tradeId?: StringFilter<"InstructorProfile"> | string
    paystackRecipientCode?: StringNullableFilter<"InstructorProfile"> | string | null
    createdAt?: DateTimeFilter<"InstructorProfile"> | Date | string
    updatedAt?: DateTimeFilter<"InstructorProfile"> | Date | string
    trade?: XOR<TradeScalarRelationFilter, TradeWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    courses?: CourseListRelationFilter
  }, "id" | "userId">

  export type InstructorProfileOrderByWithAggregationInput = {
    id?: SortOrder
    bio?: SortOrderInput | SortOrder
    tradeId?: SortOrder
    paystackRecipientCode?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: InstructorProfileCountOrderByAggregateInput
    _max?: InstructorProfileMaxOrderByAggregateInput
    _min?: InstructorProfileMinOrderByAggregateInput
  }

  export type InstructorProfileScalarWhereWithAggregatesInput = {
    AND?: InstructorProfileScalarWhereWithAggregatesInput | InstructorProfileScalarWhereWithAggregatesInput[]
    OR?: InstructorProfileScalarWhereWithAggregatesInput[]
    NOT?: InstructorProfileScalarWhereWithAggregatesInput | InstructorProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"InstructorProfile"> | string
    bio?: StringNullableWithAggregatesFilter<"InstructorProfile"> | string | null
    tradeId?: StringWithAggregatesFilter<"InstructorProfile"> | string
    paystackRecipientCode?: StringNullableWithAggregatesFilter<"InstructorProfile"> | string | null
    userId?: StringWithAggregatesFilter<"InstructorProfile"> | string
    createdAt?: DateTimeWithAggregatesFilter<"InstructorProfile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"InstructorProfile"> | Date | string
  }

  export type TradeWhereInput = {
    AND?: TradeWhereInput | TradeWhereInput[]
    OR?: TradeWhereInput[]
    NOT?: TradeWhereInput | TradeWhereInput[]
    id?: StringFilter<"Trade"> | string
    name?: StringFilter<"Trade"> | string
    instructors?: InstructorProfileListRelationFilter
  }

  export type TradeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    instructors?: InstructorProfileOrderByRelationAggregateInput
  }

  export type TradeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: TradeWhereInput | TradeWhereInput[]
    OR?: TradeWhereInput[]
    NOT?: TradeWhereInput | TradeWhereInput[]
    instructors?: InstructorProfileListRelationFilter
  }, "id" | "name">

  export type TradeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: TradeCountOrderByAggregateInput
    _max?: TradeMaxOrderByAggregateInput
    _min?: TradeMinOrderByAggregateInput
  }

  export type TradeScalarWhereWithAggregatesInput = {
    AND?: TradeScalarWhereWithAggregatesInput | TradeScalarWhereWithAggregatesInput[]
    OR?: TradeScalarWhereWithAggregatesInput[]
    NOT?: TradeScalarWhereWithAggregatesInput | TradeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Trade"> | string
    name?: StringWithAggregatesFilter<"Trade"> | string
  }

  export type CourseWhereInput = {
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    id?: StringFilter<"Course"> | string
    title?: StringFilter<"Course"> | string
    description?: StringFilter<"Course"> | string
    price?: IntFilter<"Course"> | number
    status?: EnumCourseStatusFilter<"Course"> | $Enums.CourseStatus
    coverImageUrl?: StringNullableFilter<"Course"> | string | null
    instructorProfileId?: StringFilter<"Course"> | string
    createdAt?: DateTimeFilter<"Course"> | Date | string
    updatedAt?: DateTimeFilter<"Course"> | Date | string
    instructorProfile?: XOR<InstructorProfileScalarRelationFilter, InstructorProfileWhereInput>
    modules?: ModuleListRelationFilter
    enrollments?: EnrollmentListRelationFilter
  }

  export type CourseOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    status?: SortOrder
    coverImageUrl?: SortOrderInput | SortOrder
    instructorProfileId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    instructorProfile?: InstructorProfileOrderByWithRelationInput
    modules?: ModuleOrderByRelationAggregateInput
    enrollments?: EnrollmentOrderByRelationAggregateInput
  }

  export type CourseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    title?: string
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    description?: StringFilter<"Course"> | string
    price?: IntFilter<"Course"> | number
    status?: EnumCourseStatusFilter<"Course"> | $Enums.CourseStatus
    coverImageUrl?: StringNullableFilter<"Course"> | string | null
    instructorProfileId?: StringFilter<"Course"> | string
    createdAt?: DateTimeFilter<"Course"> | Date | string
    updatedAt?: DateTimeFilter<"Course"> | Date | string
    instructorProfile?: XOR<InstructorProfileScalarRelationFilter, InstructorProfileWhereInput>
    modules?: ModuleListRelationFilter
    enrollments?: EnrollmentListRelationFilter
  }, "id" | "title">

  export type CourseOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    status?: SortOrder
    coverImageUrl?: SortOrderInput | SortOrder
    instructorProfileId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CourseCountOrderByAggregateInput
    _avg?: CourseAvgOrderByAggregateInput
    _max?: CourseMaxOrderByAggregateInput
    _min?: CourseMinOrderByAggregateInput
    _sum?: CourseSumOrderByAggregateInput
  }

  export type CourseScalarWhereWithAggregatesInput = {
    AND?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    OR?: CourseScalarWhereWithAggregatesInput[]
    NOT?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Course"> | string
    title?: StringWithAggregatesFilter<"Course"> | string
    description?: StringWithAggregatesFilter<"Course"> | string
    price?: IntWithAggregatesFilter<"Course"> | number
    status?: EnumCourseStatusWithAggregatesFilter<"Course"> | $Enums.CourseStatus
    coverImageUrl?: StringNullableWithAggregatesFilter<"Course"> | string | null
    instructorProfileId?: StringWithAggregatesFilter<"Course"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Course"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Course"> | Date | string
  }

  export type ModuleWhereInput = {
    AND?: ModuleWhereInput | ModuleWhereInput[]
    OR?: ModuleWhereInput[]
    NOT?: ModuleWhereInput | ModuleWhereInput[]
    id?: StringFilter<"Module"> | string
    title?: StringFilter<"Module"> | string
    order?: IntFilter<"Module"> | number
    courseId?: StringFilter<"Module"> | string
    createdAt?: DateTimeFilter<"Module"> | Date | string
    updatedAt?: DateTimeFilter<"Module"> | Date | string
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    lessons?: LessonListRelationFilter
  }

  export type ModuleOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    order?: SortOrder
    courseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    course?: CourseOrderByWithRelationInput
    lessons?: LessonOrderByRelationAggregateInput
  }

  export type ModuleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ModuleWhereInput | ModuleWhereInput[]
    OR?: ModuleWhereInput[]
    NOT?: ModuleWhereInput | ModuleWhereInput[]
    title?: StringFilter<"Module"> | string
    order?: IntFilter<"Module"> | number
    courseId?: StringFilter<"Module"> | string
    createdAt?: DateTimeFilter<"Module"> | Date | string
    updatedAt?: DateTimeFilter<"Module"> | Date | string
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
    lessons?: LessonListRelationFilter
  }, "id">

  export type ModuleOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    order?: SortOrder
    courseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ModuleCountOrderByAggregateInput
    _avg?: ModuleAvgOrderByAggregateInput
    _max?: ModuleMaxOrderByAggregateInput
    _min?: ModuleMinOrderByAggregateInput
    _sum?: ModuleSumOrderByAggregateInput
  }

  export type ModuleScalarWhereWithAggregatesInput = {
    AND?: ModuleScalarWhereWithAggregatesInput | ModuleScalarWhereWithAggregatesInput[]
    OR?: ModuleScalarWhereWithAggregatesInput[]
    NOT?: ModuleScalarWhereWithAggregatesInput | ModuleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Module"> | string
    title?: StringWithAggregatesFilter<"Module"> | string
    order?: IntWithAggregatesFilter<"Module"> | number
    courseId?: StringWithAggregatesFilter<"Module"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Module"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Module"> | Date | string
  }

  export type LessonWhereInput = {
    AND?: LessonWhereInput | LessonWhereInput[]
    OR?: LessonWhereInput[]
    NOT?: LessonWhereInput | LessonWhereInput[]
    id?: StringFilter<"Lesson"> | string
    title?: StringFilter<"Lesson"> | string
    order?: IntFilter<"Lesson"> | number
    videoUrl?: StringFilter<"Lesson"> | string
    duration?: IntNullableFilter<"Lesson"> | number | null
    isFreePreview?: BoolFilter<"Lesson"> | boolean
    moduleId?: StringFilter<"Lesson"> | string
    createdAt?: DateTimeFilter<"Lesson"> | Date | string
    updatedAt?: DateTimeFilter<"Lesson"> | Date | string
    module?: XOR<ModuleScalarRelationFilter, ModuleWhereInput>
    progress?: LessonProgressListRelationFilter
  }

  export type LessonOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    order?: SortOrder
    videoUrl?: SortOrder
    duration?: SortOrderInput | SortOrder
    isFreePreview?: SortOrder
    moduleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    module?: ModuleOrderByWithRelationInput
    progress?: LessonProgressOrderByRelationAggregateInput
  }

  export type LessonWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LessonWhereInput | LessonWhereInput[]
    OR?: LessonWhereInput[]
    NOT?: LessonWhereInput | LessonWhereInput[]
    title?: StringFilter<"Lesson"> | string
    order?: IntFilter<"Lesson"> | number
    videoUrl?: StringFilter<"Lesson"> | string
    duration?: IntNullableFilter<"Lesson"> | number | null
    isFreePreview?: BoolFilter<"Lesson"> | boolean
    moduleId?: StringFilter<"Lesson"> | string
    createdAt?: DateTimeFilter<"Lesson"> | Date | string
    updatedAt?: DateTimeFilter<"Lesson"> | Date | string
    module?: XOR<ModuleScalarRelationFilter, ModuleWhereInput>
    progress?: LessonProgressListRelationFilter
  }, "id">

  export type LessonOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    order?: SortOrder
    videoUrl?: SortOrder
    duration?: SortOrderInput | SortOrder
    isFreePreview?: SortOrder
    moduleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LessonCountOrderByAggregateInput
    _avg?: LessonAvgOrderByAggregateInput
    _max?: LessonMaxOrderByAggregateInput
    _min?: LessonMinOrderByAggregateInput
    _sum?: LessonSumOrderByAggregateInput
  }

  export type LessonScalarWhereWithAggregatesInput = {
    AND?: LessonScalarWhereWithAggregatesInput | LessonScalarWhereWithAggregatesInput[]
    OR?: LessonScalarWhereWithAggregatesInput[]
    NOT?: LessonScalarWhereWithAggregatesInput | LessonScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Lesson"> | string
    title?: StringWithAggregatesFilter<"Lesson"> | string
    order?: IntWithAggregatesFilter<"Lesson"> | number
    videoUrl?: StringWithAggregatesFilter<"Lesson"> | string
    duration?: IntNullableWithAggregatesFilter<"Lesson"> | number | null
    isFreePreview?: BoolWithAggregatesFilter<"Lesson"> | boolean
    moduleId?: StringWithAggregatesFilter<"Lesson"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Lesson"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Lesson"> | Date | string
  }

  export type EnrollmentWhereInput = {
    AND?: EnrollmentWhereInput | EnrollmentWhereInput[]
    OR?: EnrollmentWhereInput[]
    NOT?: EnrollmentWhereInput | EnrollmentWhereInput[]
    id?: StringFilter<"Enrollment"> | string
    status?: EnumEnrollmentStatusFilter<"Enrollment"> | $Enums.EnrollmentStatus
    paystackReference?: StringFilter<"Enrollment"> | string
    amountPaid?: IntFilter<"Enrollment"> | number
    userId?: StringFilter<"Enrollment"> | string
    courseId?: StringFilter<"Enrollment"> | string
    createdAt?: DateTimeFilter<"Enrollment"> | Date | string
    updatedAt?: DateTimeFilter<"Enrollment"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }

  export type EnrollmentOrderByWithRelationInput = {
    id?: SortOrder
    status?: SortOrder
    paystackReference?: SortOrder
    amountPaid?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    course?: CourseOrderByWithRelationInput
  }

  export type EnrollmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    paystackReference?: string
    userId_courseId?: EnrollmentUserIdCourseIdCompoundUniqueInput
    AND?: EnrollmentWhereInput | EnrollmentWhereInput[]
    OR?: EnrollmentWhereInput[]
    NOT?: EnrollmentWhereInput | EnrollmentWhereInput[]
    status?: EnumEnrollmentStatusFilter<"Enrollment"> | $Enums.EnrollmentStatus
    amountPaid?: IntFilter<"Enrollment"> | number
    userId?: StringFilter<"Enrollment"> | string
    courseId?: StringFilter<"Enrollment"> | string
    createdAt?: DateTimeFilter<"Enrollment"> | Date | string
    updatedAt?: DateTimeFilter<"Enrollment"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    course?: XOR<CourseScalarRelationFilter, CourseWhereInput>
  }, "id" | "paystackReference" | "userId_courseId">

  export type EnrollmentOrderByWithAggregationInput = {
    id?: SortOrder
    status?: SortOrder
    paystackReference?: SortOrder
    amountPaid?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EnrollmentCountOrderByAggregateInput
    _avg?: EnrollmentAvgOrderByAggregateInput
    _max?: EnrollmentMaxOrderByAggregateInput
    _min?: EnrollmentMinOrderByAggregateInput
    _sum?: EnrollmentSumOrderByAggregateInput
  }

  export type EnrollmentScalarWhereWithAggregatesInput = {
    AND?: EnrollmentScalarWhereWithAggregatesInput | EnrollmentScalarWhereWithAggregatesInput[]
    OR?: EnrollmentScalarWhereWithAggregatesInput[]
    NOT?: EnrollmentScalarWhereWithAggregatesInput | EnrollmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Enrollment"> | string
    status?: EnumEnrollmentStatusWithAggregatesFilter<"Enrollment"> | $Enums.EnrollmentStatus
    paystackReference?: StringWithAggregatesFilter<"Enrollment"> | string
    amountPaid?: IntWithAggregatesFilter<"Enrollment"> | number
    userId?: StringWithAggregatesFilter<"Enrollment"> | string
    courseId?: StringWithAggregatesFilter<"Enrollment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Enrollment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Enrollment"> | Date | string
  }

  export type LessonProgressWhereInput = {
    AND?: LessonProgressWhereInput | LessonProgressWhereInput[]
    OR?: LessonProgressWhereInput[]
    NOT?: LessonProgressWhereInput | LessonProgressWhereInput[]
    id?: StringFilter<"LessonProgress"> | string
    completedAt?: DateTimeFilter<"LessonProgress"> | Date | string
    userId?: StringFilter<"LessonProgress"> | string
    lessonId?: StringFilter<"LessonProgress"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    lesson?: XOR<LessonScalarRelationFilter, LessonWhereInput>
  }

  export type LessonProgressOrderByWithRelationInput = {
    id?: SortOrder
    completedAt?: SortOrder
    userId?: SortOrder
    lessonId?: SortOrder
    user?: UserOrderByWithRelationInput
    lesson?: LessonOrderByWithRelationInput
  }

  export type LessonProgressWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_lessonId?: LessonProgressUserIdLessonIdCompoundUniqueInput
    AND?: LessonProgressWhereInput | LessonProgressWhereInput[]
    OR?: LessonProgressWhereInput[]
    NOT?: LessonProgressWhereInput | LessonProgressWhereInput[]
    completedAt?: DateTimeFilter<"LessonProgress"> | Date | string
    userId?: StringFilter<"LessonProgress"> | string
    lessonId?: StringFilter<"LessonProgress"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    lesson?: XOR<LessonScalarRelationFilter, LessonWhereInput>
  }, "id" | "userId_lessonId">

  export type LessonProgressOrderByWithAggregationInput = {
    id?: SortOrder
    completedAt?: SortOrder
    userId?: SortOrder
    lessonId?: SortOrder
    _count?: LessonProgressCountOrderByAggregateInput
    _max?: LessonProgressMaxOrderByAggregateInput
    _min?: LessonProgressMinOrderByAggregateInput
  }

  export type LessonProgressScalarWhereWithAggregatesInput = {
    AND?: LessonProgressScalarWhereWithAggregatesInput | LessonProgressScalarWhereWithAggregatesInput[]
    OR?: LessonProgressScalarWhereWithAggregatesInput[]
    NOT?: LessonProgressScalarWhereWithAggregatesInput | LessonProgressScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LessonProgress"> | string
    completedAt?: DateTimeWithAggregatesFilter<"LessonProgress"> | Date | string
    userId?: StringWithAggregatesFilter<"LessonProgress"> | string
    lessonId?: StringWithAggregatesFilter<"LessonProgress"> | string
  }

  export type PayoutRequestWhereInput = {
    AND?: PayoutRequestWhereInput | PayoutRequestWhereInput[]
    OR?: PayoutRequestWhereInput[]
    NOT?: PayoutRequestWhereInput | PayoutRequestWhereInput[]
    id?: StringFilter<"PayoutRequest"> | string
    amount?: IntFilter<"PayoutRequest"> | number
    status?: EnumPayoutStatusFilter<"PayoutRequest"> | $Enums.PayoutStatus
    paystackTransferId?: StringNullableFilter<"PayoutRequest"> | string | null
    userId?: StringFilter<"PayoutRequest"> | string
    createdAt?: DateTimeFilter<"PayoutRequest"> | Date | string
    updatedAt?: DateTimeFilter<"PayoutRequest"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PayoutRequestOrderByWithRelationInput = {
    id?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    paystackTransferId?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type PayoutRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PayoutRequestWhereInput | PayoutRequestWhereInput[]
    OR?: PayoutRequestWhereInput[]
    NOT?: PayoutRequestWhereInput | PayoutRequestWhereInput[]
    amount?: IntFilter<"PayoutRequest"> | number
    status?: EnumPayoutStatusFilter<"PayoutRequest"> | $Enums.PayoutStatus
    paystackTransferId?: StringNullableFilter<"PayoutRequest"> | string | null
    userId?: StringFilter<"PayoutRequest"> | string
    createdAt?: DateTimeFilter<"PayoutRequest"> | Date | string
    updatedAt?: DateTimeFilter<"PayoutRequest"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type PayoutRequestOrderByWithAggregationInput = {
    id?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    paystackTransferId?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PayoutRequestCountOrderByAggregateInput
    _avg?: PayoutRequestAvgOrderByAggregateInput
    _max?: PayoutRequestMaxOrderByAggregateInput
    _min?: PayoutRequestMinOrderByAggregateInput
    _sum?: PayoutRequestSumOrderByAggregateInput
  }

  export type PayoutRequestScalarWhereWithAggregatesInput = {
    AND?: PayoutRequestScalarWhereWithAggregatesInput | PayoutRequestScalarWhereWithAggregatesInput[]
    OR?: PayoutRequestScalarWhereWithAggregatesInput[]
    NOT?: PayoutRequestScalarWhereWithAggregatesInput | PayoutRequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PayoutRequest"> | string
    amount?: IntWithAggregatesFilter<"PayoutRequest"> | number
    status?: EnumPayoutStatusWithAggregatesFilter<"PayoutRequest"> | $Enums.PayoutStatus
    paystackTransferId?: StringNullableWithAggregatesFilter<"PayoutRequest"> | string | null
    userId?: StringWithAggregatesFilter<"PayoutRequest"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PayoutRequest"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PayoutRequest"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    role?: $Enums.Role
    verifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    instructorProfile?: InstructorProfileCreateNestedOneWithoutUserInput
    refreshToken?: RefreshTokenCreateNestedOneWithoutUserInput
    emailVerificationToken?: EmailVerificationTokenCreateNestedOneWithoutUserInput
    passwordResetToken?: PasswordResetTokenCreateNestedOneWithoutUserInput
    enrollments?: EnrollmentCreateNestedManyWithoutUserInput
    progress?: LessonProgressCreateNestedManyWithoutUserInput
    payoutRequests?: PayoutRequestCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    role?: $Enums.Role
    verifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    instructorProfile?: InstructorProfileUncheckedCreateNestedOneWithoutUserInput
    refreshToken?: RefreshTokenUncheckedCreateNestedOneWithoutUserInput
    emailVerificationToken?: EmailVerificationTokenUncheckedCreateNestedOneWithoutUserInput
    passwordResetToken?: PasswordResetTokenUncheckedCreateNestedOneWithoutUserInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutUserInput
    progress?: LessonProgressUncheckedCreateNestedManyWithoutUserInput
    payoutRequests?: PayoutRequestUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instructorProfile?: InstructorProfileUpdateOneWithoutUserNestedInput
    refreshToken?: RefreshTokenUpdateOneWithoutUserNestedInput
    emailVerificationToken?: EmailVerificationTokenUpdateOneWithoutUserNestedInput
    passwordResetToken?: PasswordResetTokenUpdateOneWithoutUserNestedInput
    enrollments?: EnrollmentUpdateManyWithoutUserNestedInput
    progress?: LessonProgressUpdateManyWithoutUserNestedInput
    payoutRequests?: PayoutRequestUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instructorProfile?: InstructorProfileUncheckedUpdateOneWithoutUserNestedInput
    refreshToken?: RefreshTokenUncheckedUpdateOneWithoutUserNestedInput
    emailVerificationToken?: EmailVerificationTokenUncheckedUpdateOneWithoutUserNestedInput
    passwordResetToken?: PasswordResetTokenUncheckedUpdateOneWithoutUserNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutUserNestedInput
    progress?: LessonProgressUncheckedUpdateManyWithoutUserNestedInput
    payoutRequests?: PayoutRequestUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    role?: $Enums.Role
    verifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenCreateInput = {
    id?: string
    tokenHash: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutRefreshTokenInput
  }

  export type RefreshTokenUncheckedCreateInput = {
    id?: string
    tokenHash: string
    expiresAt: Date | string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RefreshTokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRefreshTokenNestedInput
  }

  export type RefreshTokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenCreateManyInput = {
    id?: string
    tokenHash: string
    expiresAt: Date | string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RefreshTokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailVerificationTokenCreateInput = {
    id?: string
    tokenHash: string
    expiresAt: Date | string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutEmailVerificationTokenInput
  }

  export type EmailVerificationTokenUncheckedCreateInput = {
    id?: string
    tokenHash: string
    expiresAt: Date | string
    userId: string
    createdAt?: Date | string
  }

  export type EmailVerificationTokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEmailVerificationTokenNestedInput
  }

  export type EmailVerificationTokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailVerificationTokenCreateManyInput = {
    id?: string
    tokenHash: string
    expiresAt: Date | string
    userId: string
    createdAt?: Date | string
  }

  export type EmailVerificationTokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailVerificationTokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordResetTokenCreateInput = {
    id?: string
    tokenHash: string
    expiresAt: Date | string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPasswordResetTokenInput
  }

  export type PasswordResetTokenUncheckedCreateInput = {
    id?: string
    tokenHash: string
    expiresAt: Date | string
    userId: string
    createdAt?: Date | string
  }

  export type PasswordResetTokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPasswordResetTokenNestedInput
  }

  export type PasswordResetTokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordResetTokenCreateManyInput = {
    id?: string
    tokenHash: string
    expiresAt: Date | string
    userId: string
    createdAt?: Date | string
  }

  export type PasswordResetTokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordResetTokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InstructorProfileCreateInput = {
    id?: string
    bio?: string | null
    paystackRecipientCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    trade: TradeCreateNestedOneWithoutInstructorsInput
    user: UserCreateNestedOneWithoutInstructorProfileInput
    courses?: CourseCreateNestedManyWithoutInstructorProfileInput
  }

  export type InstructorProfileUncheckedCreateInput = {
    id?: string
    bio?: string | null
    tradeId: string
    paystackRecipientCode?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    courses?: CourseUncheckedCreateNestedManyWithoutInstructorProfileInput
  }

  export type InstructorProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    paystackRecipientCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trade?: TradeUpdateOneRequiredWithoutInstructorsNestedInput
    user?: UserUpdateOneRequiredWithoutInstructorProfileNestedInput
    courses?: CourseUpdateManyWithoutInstructorProfileNestedInput
  }

  export type InstructorProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    tradeId?: StringFieldUpdateOperationsInput | string
    paystackRecipientCode?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courses?: CourseUncheckedUpdateManyWithoutInstructorProfileNestedInput
  }

  export type InstructorProfileCreateManyInput = {
    id?: string
    bio?: string | null
    tradeId: string
    paystackRecipientCode?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InstructorProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    paystackRecipientCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InstructorProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    tradeId?: StringFieldUpdateOperationsInput | string
    paystackRecipientCode?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TradeCreateInput = {
    id?: string
    name: string
    instructors?: InstructorProfileCreateNestedManyWithoutTradeInput
  }

  export type TradeUncheckedCreateInput = {
    id?: string
    name: string
    instructors?: InstructorProfileUncheckedCreateNestedManyWithoutTradeInput
  }

  export type TradeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    instructors?: InstructorProfileUpdateManyWithoutTradeNestedInput
  }

  export type TradeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    instructors?: InstructorProfileUncheckedUpdateManyWithoutTradeNestedInput
  }

  export type TradeCreateManyInput = {
    id?: string
    name: string
  }

  export type TradeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TradeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CourseCreateInput = {
    id?: string
    title: string
    description: string
    price: number
    status?: $Enums.CourseStatus
    coverImageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    instructorProfile: InstructorProfileCreateNestedOneWithoutCoursesInput
    modules?: ModuleCreateNestedManyWithoutCourseInput
    enrollments?: EnrollmentCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    price: number
    status?: $Enums.CourseStatus
    coverImageUrl?: string | null
    instructorProfileId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    modules?: ModuleUncheckedCreateNestedManyWithoutCourseInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    status?: EnumCourseStatusFieldUpdateOperationsInput | $Enums.CourseStatus
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instructorProfile?: InstructorProfileUpdateOneRequiredWithoutCoursesNestedInput
    modules?: ModuleUpdateManyWithoutCourseNestedInput
    enrollments?: EnrollmentUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    status?: EnumCourseStatusFieldUpdateOperationsInput | $Enums.CourseStatus
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    instructorProfileId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modules?: ModuleUncheckedUpdateManyWithoutCourseNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseCreateManyInput = {
    id?: string
    title: string
    description: string
    price: number
    status?: $Enums.CourseStatus
    coverImageUrl?: string | null
    instructorProfileId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    status?: EnumCourseStatusFieldUpdateOperationsInput | $Enums.CourseStatus
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    status?: EnumCourseStatusFieldUpdateOperationsInput | $Enums.CourseStatus
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    instructorProfileId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModuleCreateInput = {
    id?: string
    title: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
    course: CourseCreateNestedOneWithoutModulesInput
    lessons?: LessonCreateNestedManyWithoutModuleInput
  }

  export type ModuleUncheckedCreateInput = {
    id?: string
    title: string
    order: number
    courseId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    lessons?: LessonUncheckedCreateNestedManyWithoutModuleInput
  }

  export type ModuleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutModulesNestedInput
    lessons?: LessonUpdateManyWithoutModuleNestedInput
  }

  export type ModuleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    courseId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lessons?: LessonUncheckedUpdateManyWithoutModuleNestedInput
  }

  export type ModuleCreateManyInput = {
    id?: string
    title: string
    order: number
    courseId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ModuleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModuleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    courseId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LessonCreateInput = {
    id?: string
    title: string
    order: number
    videoUrl: string
    duration?: number | null
    isFreePreview?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    module: ModuleCreateNestedOneWithoutLessonsInput
    progress?: LessonProgressCreateNestedManyWithoutLessonInput
  }

  export type LessonUncheckedCreateInput = {
    id?: string
    title: string
    order: number
    videoUrl: string
    duration?: number | null
    isFreePreview?: boolean
    moduleId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    progress?: LessonProgressUncheckedCreateNestedManyWithoutLessonInput
  }

  export type LessonUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    videoUrl?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    isFreePreview?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    module?: ModuleUpdateOneRequiredWithoutLessonsNestedInput
    progress?: LessonProgressUpdateManyWithoutLessonNestedInput
  }

  export type LessonUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    videoUrl?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    isFreePreview?: BoolFieldUpdateOperationsInput | boolean
    moduleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    progress?: LessonProgressUncheckedUpdateManyWithoutLessonNestedInput
  }

  export type LessonCreateManyInput = {
    id?: string
    title: string
    order: number
    videoUrl: string
    duration?: number | null
    isFreePreview?: boolean
    moduleId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LessonUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    videoUrl?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    isFreePreview?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LessonUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    videoUrl?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    isFreePreview?: BoolFieldUpdateOperationsInput | boolean
    moduleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnrollmentCreateInput = {
    id?: string
    status?: $Enums.EnrollmentStatus
    paystackReference: string
    amountPaid: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutEnrollmentsInput
    course: CourseCreateNestedOneWithoutEnrollmentsInput
  }

  export type EnrollmentUncheckedCreateInput = {
    id?: string
    status?: $Enums.EnrollmentStatus
    paystackReference: string
    amountPaid: number
    userId: string
    courseId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EnrollmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumEnrollmentStatusFieldUpdateOperationsInput | $Enums.EnrollmentStatus
    paystackReference?: StringFieldUpdateOperationsInput | string
    amountPaid?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEnrollmentsNestedInput
    course?: CourseUpdateOneRequiredWithoutEnrollmentsNestedInput
  }

  export type EnrollmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumEnrollmentStatusFieldUpdateOperationsInput | $Enums.EnrollmentStatus
    paystackReference?: StringFieldUpdateOperationsInput | string
    amountPaid?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnrollmentCreateManyInput = {
    id?: string
    status?: $Enums.EnrollmentStatus
    paystackReference: string
    amountPaid: number
    userId: string
    courseId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EnrollmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumEnrollmentStatusFieldUpdateOperationsInput | $Enums.EnrollmentStatus
    paystackReference?: StringFieldUpdateOperationsInput | string
    amountPaid?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnrollmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumEnrollmentStatusFieldUpdateOperationsInput | $Enums.EnrollmentStatus
    paystackReference?: StringFieldUpdateOperationsInput | string
    amountPaid?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    courseId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LessonProgressCreateInput = {
    id?: string
    completedAt?: Date | string
    user: UserCreateNestedOneWithoutProgressInput
    lesson: LessonCreateNestedOneWithoutProgressInput
  }

  export type LessonProgressUncheckedCreateInput = {
    id?: string
    completedAt?: Date | string
    userId: string
    lessonId: string
  }

  export type LessonProgressUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProgressNestedInput
    lesson?: LessonUpdateOneRequiredWithoutProgressNestedInput
  }

  export type LessonProgressUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    lessonId?: StringFieldUpdateOperationsInput | string
  }

  export type LessonProgressCreateManyInput = {
    id?: string
    completedAt?: Date | string
    userId: string
    lessonId: string
  }

  export type LessonProgressUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LessonProgressUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    lessonId?: StringFieldUpdateOperationsInput | string
  }

  export type PayoutRequestCreateInput = {
    id?: string
    amount: number
    status?: $Enums.PayoutStatus
    paystackTransferId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPayoutRequestsInput
  }

  export type PayoutRequestUncheckedCreateInput = {
    id?: string
    amount: number
    status?: $Enums.PayoutStatus
    paystackTransferId?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PayoutRequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    status?: EnumPayoutStatusFieldUpdateOperationsInput | $Enums.PayoutStatus
    paystackTransferId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPayoutRequestsNestedInput
  }

  export type PayoutRequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    status?: EnumPayoutStatusFieldUpdateOperationsInput | $Enums.PayoutStatus
    paystackTransferId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayoutRequestCreateManyInput = {
    id?: string
    amount: number
    status?: $Enums.PayoutStatus
    paystackTransferId?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PayoutRequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    status?: EnumPayoutStatusFieldUpdateOperationsInput | $Enums.PayoutStatus
    paystackTransferId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayoutRequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    status?: EnumPayoutStatusFieldUpdateOperationsInput | $Enums.PayoutStatus
    paystackTransferId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type InstructorProfileNullableScalarRelationFilter = {
    is?: InstructorProfileWhereInput | null
    isNot?: InstructorProfileWhereInput | null
  }

  export type RefreshTokenNullableScalarRelationFilter = {
    is?: RefreshTokenWhereInput | null
    isNot?: RefreshTokenWhereInput | null
  }

  export type EmailVerificationTokenNullableScalarRelationFilter = {
    is?: EmailVerificationTokenWhereInput | null
    isNot?: EmailVerificationTokenWhereInput | null
  }

  export type PasswordResetTokenNullableScalarRelationFilter = {
    is?: PasswordResetTokenWhereInput | null
    isNot?: PasswordResetTokenWhereInput | null
  }

  export type EnrollmentListRelationFilter = {
    every?: EnrollmentWhereInput
    some?: EnrollmentWhereInput
    none?: EnrollmentWhereInput
  }

  export type LessonProgressListRelationFilter = {
    every?: LessonProgressWhereInput
    some?: LessonProgressWhereInput
    none?: LessonProgressWhereInput
  }

  export type PayoutRequestListRelationFilter = {
    every?: PayoutRequestWhereInput
    some?: PayoutRequestWhereInput
    none?: PayoutRequestWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type EnrollmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LessonProgressOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PayoutRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    role?: SortOrder
    verifiedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    role?: SortOrder
    verifiedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    role?: SortOrder
    verifiedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type RefreshTokenCountOrderByAggregateInput = {
    id?: SortOrder
    tokenHash?: SortOrder
    expiresAt?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RefreshTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    tokenHash?: SortOrder
    expiresAt?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RefreshTokenMinOrderByAggregateInput = {
    id?: SortOrder
    tokenHash?: SortOrder
    expiresAt?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EmailVerificationTokenCountOrderByAggregateInput = {
    id?: SortOrder
    tokenHash?: SortOrder
    expiresAt?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type EmailVerificationTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    tokenHash?: SortOrder
    expiresAt?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type EmailVerificationTokenMinOrderByAggregateInput = {
    id?: SortOrder
    tokenHash?: SortOrder
    expiresAt?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type PasswordResetTokenCountOrderByAggregateInput = {
    id?: SortOrder
    tokenHash?: SortOrder
    expiresAt?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type PasswordResetTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    tokenHash?: SortOrder
    expiresAt?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type PasswordResetTokenMinOrderByAggregateInput = {
    id?: SortOrder
    tokenHash?: SortOrder
    expiresAt?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
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

  export type TradeScalarRelationFilter = {
    is?: TradeWhereInput
    isNot?: TradeWhereInput
  }

  export type CourseListRelationFilter = {
    every?: CourseWhereInput
    some?: CourseWhereInput
    none?: CourseWhereInput
  }

  export type CourseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InstructorProfileCountOrderByAggregateInput = {
    id?: SortOrder
    bio?: SortOrder
    tradeId?: SortOrder
    paystackRecipientCode?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InstructorProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    bio?: SortOrder
    tradeId?: SortOrder
    paystackRecipientCode?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InstructorProfileMinOrderByAggregateInput = {
    id?: SortOrder
    bio?: SortOrder
    tradeId?: SortOrder
    paystackRecipientCode?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type InstructorProfileListRelationFilter = {
    every?: InstructorProfileWhereInput
    some?: InstructorProfileWhereInput
    none?: InstructorProfileWhereInput
  }

  export type InstructorProfileOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TradeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TradeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TradeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
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

  export type EnumCourseStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CourseStatus | EnumCourseStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CourseStatus[] | ListEnumCourseStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CourseStatus[] | ListEnumCourseStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCourseStatusFilter<$PrismaModel> | $Enums.CourseStatus
  }

  export type InstructorProfileScalarRelationFilter = {
    is?: InstructorProfileWhereInput
    isNot?: InstructorProfileWhereInput
  }

  export type ModuleListRelationFilter = {
    every?: ModuleWhereInput
    some?: ModuleWhereInput
    none?: ModuleWhereInput
  }

  export type ModuleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CourseCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    status?: SortOrder
    coverImageUrl?: SortOrder
    instructorProfileId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type CourseMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    status?: SortOrder
    coverImageUrl?: SortOrder
    instructorProfileId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    status?: SortOrder
    coverImageUrl?: SortOrder
    instructorProfileId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseSumOrderByAggregateInput = {
    price?: SortOrder
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

  export type EnumCourseStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CourseStatus | EnumCourseStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CourseStatus[] | ListEnumCourseStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CourseStatus[] | ListEnumCourseStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCourseStatusWithAggregatesFilter<$PrismaModel> | $Enums.CourseStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCourseStatusFilter<$PrismaModel>
    _max?: NestedEnumCourseStatusFilter<$PrismaModel>
  }

  export type CourseScalarRelationFilter = {
    is?: CourseWhereInput
    isNot?: CourseWhereInput
  }

  export type LessonListRelationFilter = {
    every?: LessonWhereInput
    some?: LessonWhereInput
    none?: LessonWhereInput
  }

  export type LessonOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ModuleCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    order?: SortOrder
    courseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ModuleAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type ModuleMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    order?: SortOrder
    courseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ModuleMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    order?: SortOrder
    courseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ModuleSumOrderByAggregateInput = {
    order?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ModuleScalarRelationFilter = {
    is?: ModuleWhereInput
    isNot?: ModuleWhereInput
  }

  export type LessonCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    order?: SortOrder
    videoUrl?: SortOrder
    duration?: SortOrder
    isFreePreview?: SortOrder
    moduleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LessonAvgOrderByAggregateInput = {
    order?: SortOrder
    duration?: SortOrder
  }

  export type LessonMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    order?: SortOrder
    videoUrl?: SortOrder
    duration?: SortOrder
    isFreePreview?: SortOrder
    moduleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LessonMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    order?: SortOrder
    videoUrl?: SortOrder
    duration?: SortOrder
    isFreePreview?: SortOrder
    moduleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LessonSumOrderByAggregateInput = {
    order?: SortOrder
    duration?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumEnrollmentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EnrollmentStatus | EnumEnrollmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EnrollmentStatus[] | ListEnumEnrollmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EnrollmentStatus[] | ListEnumEnrollmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEnrollmentStatusFilter<$PrismaModel> | $Enums.EnrollmentStatus
  }

  export type EnrollmentUserIdCourseIdCompoundUniqueInput = {
    userId: string
    courseId: string
  }

  export type EnrollmentCountOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    paystackReference?: SortOrder
    amountPaid?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnrollmentAvgOrderByAggregateInput = {
    amountPaid?: SortOrder
  }

  export type EnrollmentMaxOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    paystackReference?: SortOrder
    amountPaid?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnrollmentMinOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    paystackReference?: SortOrder
    amountPaid?: SortOrder
    userId?: SortOrder
    courseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnrollmentSumOrderByAggregateInput = {
    amountPaid?: SortOrder
  }

  export type EnumEnrollmentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EnrollmentStatus | EnumEnrollmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EnrollmentStatus[] | ListEnumEnrollmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EnrollmentStatus[] | ListEnumEnrollmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEnrollmentStatusWithAggregatesFilter<$PrismaModel> | $Enums.EnrollmentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEnrollmentStatusFilter<$PrismaModel>
    _max?: NestedEnumEnrollmentStatusFilter<$PrismaModel>
  }

  export type LessonScalarRelationFilter = {
    is?: LessonWhereInput
    isNot?: LessonWhereInput
  }

  export type LessonProgressUserIdLessonIdCompoundUniqueInput = {
    userId: string
    lessonId: string
  }

  export type LessonProgressCountOrderByAggregateInput = {
    id?: SortOrder
    completedAt?: SortOrder
    userId?: SortOrder
    lessonId?: SortOrder
  }

  export type LessonProgressMaxOrderByAggregateInput = {
    id?: SortOrder
    completedAt?: SortOrder
    userId?: SortOrder
    lessonId?: SortOrder
  }

  export type LessonProgressMinOrderByAggregateInput = {
    id?: SortOrder
    completedAt?: SortOrder
    userId?: SortOrder
    lessonId?: SortOrder
  }

  export type EnumPayoutStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PayoutStatus | EnumPayoutStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PayoutStatus[] | ListEnumPayoutStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PayoutStatus[] | ListEnumPayoutStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPayoutStatusFilter<$PrismaModel> | $Enums.PayoutStatus
  }

  export type PayoutRequestCountOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    paystackTransferId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PayoutRequestAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type PayoutRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    paystackTransferId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PayoutRequestMinOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    status?: SortOrder
    paystackTransferId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PayoutRequestSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumPayoutStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PayoutStatus | EnumPayoutStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PayoutStatus[] | ListEnumPayoutStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PayoutStatus[] | ListEnumPayoutStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPayoutStatusWithAggregatesFilter<$PrismaModel> | $Enums.PayoutStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPayoutStatusFilter<$PrismaModel>
    _max?: NestedEnumPayoutStatusFilter<$PrismaModel>
  }

  export type InstructorProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<InstructorProfileCreateWithoutUserInput, InstructorProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: InstructorProfileCreateOrConnectWithoutUserInput
    connect?: InstructorProfileWhereUniqueInput
  }

  export type RefreshTokenCreateNestedOneWithoutUserInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput>
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput
    connect?: RefreshTokenWhereUniqueInput
  }

  export type EmailVerificationTokenCreateNestedOneWithoutUserInput = {
    create?: XOR<EmailVerificationTokenCreateWithoutUserInput, EmailVerificationTokenUncheckedCreateWithoutUserInput>
    connectOrCreate?: EmailVerificationTokenCreateOrConnectWithoutUserInput
    connect?: EmailVerificationTokenWhereUniqueInput
  }

  export type PasswordResetTokenCreateNestedOneWithoutUserInput = {
    create?: XOR<PasswordResetTokenCreateWithoutUserInput, PasswordResetTokenUncheckedCreateWithoutUserInput>
    connectOrCreate?: PasswordResetTokenCreateOrConnectWithoutUserInput
    connect?: PasswordResetTokenWhereUniqueInput
  }

  export type EnrollmentCreateNestedManyWithoutUserInput = {
    create?: XOR<EnrollmentCreateWithoutUserInput, EnrollmentUncheckedCreateWithoutUserInput> | EnrollmentCreateWithoutUserInput[] | EnrollmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutUserInput | EnrollmentCreateOrConnectWithoutUserInput[]
    createMany?: EnrollmentCreateManyUserInputEnvelope
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
  }

  export type LessonProgressCreateNestedManyWithoutUserInput = {
    create?: XOR<LessonProgressCreateWithoutUserInput, LessonProgressUncheckedCreateWithoutUserInput> | LessonProgressCreateWithoutUserInput[] | LessonProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LessonProgressCreateOrConnectWithoutUserInput | LessonProgressCreateOrConnectWithoutUserInput[]
    createMany?: LessonProgressCreateManyUserInputEnvelope
    connect?: LessonProgressWhereUniqueInput | LessonProgressWhereUniqueInput[]
  }

  export type PayoutRequestCreateNestedManyWithoutUserInput = {
    create?: XOR<PayoutRequestCreateWithoutUserInput, PayoutRequestUncheckedCreateWithoutUserInput> | PayoutRequestCreateWithoutUserInput[] | PayoutRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PayoutRequestCreateOrConnectWithoutUserInput | PayoutRequestCreateOrConnectWithoutUserInput[]
    createMany?: PayoutRequestCreateManyUserInputEnvelope
    connect?: PayoutRequestWhereUniqueInput | PayoutRequestWhereUniqueInput[]
  }

  export type InstructorProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<InstructorProfileCreateWithoutUserInput, InstructorProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: InstructorProfileCreateOrConnectWithoutUserInput
    connect?: InstructorProfileWhereUniqueInput
  }

  export type RefreshTokenUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput>
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput
    connect?: RefreshTokenWhereUniqueInput
  }

  export type EmailVerificationTokenUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<EmailVerificationTokenCreateWithoutUserInput, EmailVerificationTokenUncheckedCreateWithoutUserInput>
    connectOrCreate?: EmailVerificationTokenCreateOrConnectWithoutUserInput
    connect?: EmailVerificationTokenWhereUniqueInput
  }

  export type PasswordResetTokenUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<PasswordResetTokenCreateWithoutUserInput, PasswordResetTokenUncheckedCreateWithoutUserInput>
    connectOrCreate?: PasswordResetTokenCreateOrConnectWithoutUserInput
    connect?: PasswordResetTokenWhereUniqueInput
  }

  export type EnrollmentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<EnrollmentCreateWithoutUserInput, EnrollmentUncheckedCreateWithoutUserInput> | EnrollmentCreateWithoutUserInput[] | EnrollmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutUserInput | EnrollmentCreateOrConnectWithoutUserInput[]
    createMany?: EnrollmentCreateManyUserInputEnvelope
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
  }

  export type LessonProgressUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LessonProgressCreateWithoutUserInput, LessonProgressUncheckedCreateWithoutUserInput> | LessonProgressCreateWithoutUserInput[] | LessonProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LessonProgressCreateOrConnectWithoutUserInput | LessonProgressCreateOrConnectWithoutUserInput[]
    createMany?: LessonProgressCreateManyUserInputEnvelope
    connect?: LessonProgressWhereUniqueInput | LessonProgressWhereUniqueInput[]
  }

  export type PayoutRequestUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PayoutRequestCreateWithoutUserInput, PayoutRequestUncheckedCreateWithoutUserInput> | PayoutRequestCreateWithoutUserInput[] | PayoutRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PayoutRequestCreateOrConnectWithoutUserInput | PayoutRequestCreateOrConnectWithoutUserInput[]
    createMany?: PayoutRequestCreateManyUserInputEnvelope
    connect?: PayoutRequestWhereUniqueInput | PayoutRequestWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type InstructorProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<InstructorProfileCreateWithoutUserInput, InstructorProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: InstructorProfileCreateOrConnectWithoutUserInput
    upsert?: InstructorProfileUpsertWithoutUserInput
    disconnect?: InstructorProfileWhereInput | boolean
    delete?: InstructorProfileWhereInput | boolean
    connect?: InstructorProfileWhereUniqueInput
    update?: XOR<XOR<InstructorProfileUpdateToOneWithWhereWithoutUserInput, InstructorProfileUpdateWithoutUserInput>, InstructorProfileUncheckedUpdateWithoutUserInput>
  }

  export type RefreshTokenUpdateOneWithoutUserNestedInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput>
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput
    upsert?: RefreshTokenUpsertWithoutUserInput
    disconnect?: RefreshTokenWhereInput | boolean
    delete?: RefreshTokenWhereInput | boolean
    connect?: RefreshTokenWhereUniqueInput
    update?: XOR<XOR<RefreshTokenUpdateToOneWithWhereWithoutUserInput, RefreshTokenUpdateWithoutUserInput>, RefreshTokenUncheckedUpdateWithoutUserInput>
  }

  export type EmailVerificationTokenUpdateOneWithoutUserNestedInput = {
    create?: XOR<EmailVerificationTokenCreateWithoutUserInput, EmailVerificationTokenUncheckedCreateWithoutUserInput>
    connectOrCreate?: EmailVerificationTokenCreateOrConnectWithoutUserInput
    upsert?: EmailVerificationTokenUpsertWithoutUserInput
    disconnect?: EmailVerificationTokenWhereInput | boolean
    delete?: EmailVerificationTokenWhereInput | boolean
    connect?: EmailVerificationTokenWhereUniqueInput
    update?: XOR<XOR<EmailVerificationTokenUpdateToOneWithWhereWithoutUserInput, EmailVerificationTokenUpdateWithoutUserInput>, EmailVerificationTokenUncheckedUpdateWithoutUserInput>
  }

  export type PasswordResetTokenUpdateOneWithoutUserNestedInput = {
    create?: XOR<PasswordResetTokenCreateWithoutUserInput, PasswordResetTokenUncheckedCreateWithoutUserInput>
    connectOrCreate?: PasswordResetTokenCreateOrConnectWithoutUserInput
    upsert?: PasswordResetTokenUpsertWithoutUserInput
    disconnect?: PasswordResetTokenWhereInput | boolean
    delete?: PasswordResetTokenWhereInput | boolean
    connect?: PasswordResetTokenWhereUniqueInput
    update?: XOR<XOR<PasswordResetTokenUpdateToOneWithWhereWithoutUserInput, PasswordResetTokenUpdateWithoutUserInput>, PasswordResetTokenUncheckedUpdateWithoutUserInput>
  }

  export type EnrollmentUpdateManyWithoutUserNestedInput = {
    create?: XOR<EnrollmentCreateWithoutUserInput, EnrollmentUncheckedCreateWithoutUserInput> | EnrollmentCreateWithoutUserInput[] | EnrollmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutUserInput | EnrollmentCreateOrConnectWithoutUserInput[]
    upsert?: EnrollmentUpsertWithWhereUniqueWithoutUserInput | EnrollmentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EnrollmentCreateManyUserInputEnvelope
    set?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    disconnect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    delete?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    update?: EnrollmentUpdateWithWhereUniqueWithoutUserInput | EnrollmentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EnrollmentUpdateManyWithWhereWithoutUserInput | EnrollmentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
  }

  export type LessonProgressUpdateManyWithoutUserNestedInput = {
    create?: XOR<LessonProgressCreateWithoutUserInput, LessonProgressUncheckedCreateWithoutUserInput> | LessonProgressCreateWithoutUserInput[] | LessonProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LessonProgressCreateOrConnectWithoutUserInput | LessonProgressCreateOrConnectWithoutUserInput[]
    upsert?: LessonProgressUpsertWithWhereUniqueWithoutUserInput | LessonProgressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LessonProgressCreateManyUserInputEnvelope
    set?: LessonProgressWhereUniqueInput | LessonProgressWhereUniqueInput[]
    disconnect?: LessonProgressWhereUniqueInput | LessonProgressWhereUniqueInput[]
    delete?: LessonProgressWhereUniqueInput | LessonProgressWhereUniqueInput[]
    connect?: LessonProgressWhereUniqueInput | LessonProgressWhereUniqueInput[]
    update?: LessonProgressUpdateWithWhereUniqueWithoutUserInput | LessonProgressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LessonProgressUpdateManyWithWhereWithoutUserInput | LessonProgressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LessonProgressScalarWhereInput | LessonProgressScalarWhereInput[]
  }

  export type PayoutRequestUpdateManyWithoutUserNestedInput = {
    create?: XOR<PayoutRequestCreateWithoutUserInput, PayoutRequestUncheckedCreateWithoutUserInput> | PayoutRequestCreateWithoutUserInput[] | PayoutRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PayoutRequestCreateOrConnectWithoutUserInput | PayoutRequestCreateOrConnectWithoutUserInput[]
    upsert?: PayoutRequestUpsertWithWhereUniqueWithoutUserInput | PayoutRequestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PayoutRequestCreateManyUserInputEnvelope
    set?: PayoutRequestWhereUniqueInput | PayoutRequestWhereUniqueInput[]
    disconnect?: PayoutRequestWhereUniqueInput | PayoutRequestWhereUniqueInput[]
    delete?: PayoutRequestWhereUniqueInput | PayoutRequestWhereUniqueInput[]
    connect?: PayoutRequestWhereUniqueInput | PayoutRequestWhereUniqueInput[]
    update?: PayoutRequestUpdateWithWhereUniqueWithoutUserInput | PayoutRequestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PayoutRequestUpdateManyWithWhereWithoutUserInput | PayoutRequestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PayoutRequestScalarWhereInput | PayoutRequestScalarWhereInput[]
  }

  export type InstructorProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<InstructorProfileCreateWithoutUserInput, InstructorProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: InstructorProfileCreateOrConnectWithoutUserInput
    upsert?: InstructorProfileUpsertWithoutUserInput
    disconnect?: InstructorProfileWhereInput | boolean
    delete?: InstructorProfileWhereInput | boolean
    connect?: InstructorProfileWhereUniqueInput
    update?: XOR<XOR<InstructorProfileUpdateToOneWithWhereWithoutUserInput, InstructorProfileUpdateWithoutUserInput>, InstructorProfileUncheckedUpdateWithoutUserInput>
  }

  export type RefreshTokenUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput>
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutUserInput
    upsert?: RefreshTokenUpsertWithoutUserInput
    disconnect?: RefreshTokenWhereInput | boolean
    delete?: RefreshTokenWhereInput | boolean
    connect?: RefreshTokenWhereUniqueInput
    update?: XOR<XOR<RefreshTokenUpdateToOneWithWhereWithoutUserInput, RefreshTokenUpdateWithoutUserInput>, RefreshTokenUncheckedUpdateWithoutUserInput>
  }

  export type EmailVerificationTokenUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<EmailVerificationTokenCreateWithoutUserInput, EmailVerificationTokenUncheckedCreateWithoutUserInput>
    connectOrCreate?: EmailVerificationTokenCreateOrConnectWithoutUserInput
    upsert?: EmailVerificationTokenUpsertWithoutUserInput
    disconnect?: EmailVerificationTokenWhereInput | boolean
    delete?: EmailVerificationTokenWhereInput | boolean
    connect?: EmailVerificationTokenWhereUniqueInput
    update?: XOR<XOR<EmailVerificationTokenUpdateToOneWithWhereWithoutUserInput, EmailVerificationTokenUpdateWithoutUserInput>, EmailVerificationTokenUncheckedUpdateWithoutUserInput>
  }

  export type PasswordResetTokenUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<PasswordResetTokenCreateWithoutUserInput, PasswordResetTokenUncheckedCreateWithoutUserInput>
    connectOrCreate?: PasswordResetTokenCreateOrConnectWithoutUserInput
    upsert?: PasswordResetTokenUpsertWithoutUserInput
    disconnect?: PasswordResetTokenWhereInput | boolean
    delete?: PasswordResetTokenWhereInput | boolean
    connect?: PasswordResetTokenWhereUniqueInput
    update?: XOR<XOR<PasswordResetTokenUpdateToOneWithWhereWithoutUserInput, PasswordResetTokenUpdateWithoutUserInput>, PasswordResetTokenUncheckedUpdateWithoutUserInput>
  }

  export type EnrollmentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<EnrollmentCreateWithoutUserInput, EnrollmentUncheckedCreateWithoutUserInput> | EnrollmentCreateWithoutUserInput[] | EnrollmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutUserInput | EnrollmentCreateOrConnectWithoutUserInput[]
    upsert?: EnrollmentUpsertWithWhereUniqueWithoutUserInput | EnrollmentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EnrollmentCreateManyUserInputEnvelope
    set?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    disconnect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    delete?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    update?: EnrollmentUpdateWithWhereUniqueWithoutUserInput | EnrollmentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EnrollmentUpdateManyWithWhereWithoutUserInput | EnrollmentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
  }

  export type LessonProgressUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LessonProgressCreateWithoutUserInput, LessonProgressUncheckedCreateWithoutUserInput> | LessonProgressCreateWithoutUserInput[] | LessonProgressUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LessonProgressCreateOrConnectWithoutUserInput | LessonProgressCreateOrConnectWithoutUserInput[]
    upsert?: LessonProgressUpsertWithWhereUniqueWithoutUserInput | LessonProgressUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LessonProgressCreateManyUserInputEnvelope
    set?: LessonProgressWhereUniqueInput | LessonProgressWhereUniqueInput[]
    disconnect?: LessonProgressWhereUniqueInput | LessonProgressWhereUniqueInput[]
    delete?: LessonProgressWhereUniqueInput | LessonProgressWhereUniqueInput[]
    connect?: LessonProgressWhereUniqueInput | LessonProgressWhereUniqueInput[]
    update?: LessonProgressUpdateWithWhereUniqueWithoutUserInput | LessonProgressUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LessonProgressUpdateManyWithWhereWithoutUserInput | LessonProgressUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LessonProgressScalarWhereInput | LessonProgressScalarWhereInput[]
  }

  export type PayoutRequestUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PayoutRequestCreateWithoutUserInput, PayoutRequestUncheckedCreateWithoutUserInput> | PayoutRequestCreateWithoutUserInput[] | PayoutRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PayoutRequestCreateOrConnectWithoutUserInput | PayoutRequestCreateOrConnectWithoutUserInput[]
    upsert?: PayoutRequestUpsertWithWhereUniqueWithoutUserInput | PayoutRequestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PayoutRequestCreateManyUserInputEnvelope
    set?: PayoutRequestWhereUniqueInput | PayoutRequestWhereUniqueInput[]
    disconnect?: PayoutRequestWhereUniqueInput | PayoutRequestWhereUniqueInput[]
    delete?: PayoutRequestWhereUniqueInput | PayoutRequestWhereUniqueInput[]
    connect?: PayoutRequestWhereUniqueInput | PayoutRequestWhereUniqueInput[]
    update?: PayoutRequestUpdateWithWhereUniqueWithoutUserInput | PayoutRequestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PayoutRequestUpdateManyWithWhereWithoutUserInput | PayoutRequestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PayoutRequestScalarWhereInput | PayoutRequestScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutRefreshTokenInput = {
    create?: XOR<UserCreateWithoutRefreshTokenInput, UserUncheckedCreateWithoutRefreshTokenInput>
    connectOrCreate?: UserCreateOrConnectWithoutRefreshTokenInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutRefreshTokenNestedInput = {
    create?: XOR<UserCreateWithoutRefreshTokenInput, UserUncheckedCreateWithoutRefreshTokenInput>
    connectOrCreate?: UserCreateOrConnectWithoutRefreshTokenInput
    upsert?: UserUpsertWithoutRefreshTokenInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRefreshTokenInput, UserUpdateWithoutRefreshTokenInput>, UserUncheckedUpdateWithoutRefreshTokenInput>
  }

  export type UserCreateNestedOneWithoutEmailVerificationTokenInput = {
    create?: XOR<UserCreateWithoutEmailVerificationTokenInput, UserUncheckedCreateWithoutEmailVerificationTokenInput>
    connectOrCreate?: UserCreateOrConnectWithoutEmailVerificationTokenInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutEmailVerificationTokenNestedInput = {
    create?: XOR<UserCreateWithoutEmailVerificationTokenInput, UserUncheckedCreateWithoutEmailVerificationTokenInput>
    connectOrCreate?: UserCreateOrConnectWithoutEmailVerificationTokenInput
    upsert?: UserUpsertWithoutEmailVerificationTokenInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEmailVerificationTokenInput, UserUpdateWithoutEmailVerificationTokenInput>, UserUncheckedUpdateWithoutEmailVerificationTokenInput>
  }

  export type UserCreateNestedOneWithoutPasswordResetTokenInput = {
    create?: XOR<UserCreateWithoutPasswordResetTokenInput, UserUncheckedCreateWithoutPasswordResetTokenInput>
    connectOrCreate?: UserCreateOrConnectWithoutPasswordResetTokenInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPasswordResetTokenNestedInput = {
    create?: XOR<UserCreateWithoutPasswordResetTokenInput, UserUncheckedCreateWithoutPasswordResetTokenInput>
    connectOrCreate?: UserCreateOrConnectWithoutPasswordResetTokenInput
    upsert?: UserUpsertWithoutPasswordResetTokenInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPasswordResetTokenInput, UserUpdateWithoutPasswordResetTokenInput>, UserUncheckedUpdateWithoutPasswordResetTokenInput>
  }

  export type TradeCreateNestedOneWithoutInstructorsInput = {
    create?: XOR<TradeCreateWithoutInstructorsInput, TradeUncheckedCreateWithoutInstructorsInput>
    connectOrCreate?: TradeCreateOrConnectWithoutInstructorsInput
    connect?: TradeWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutInstructorProfileInput = {
    create?: XOR<UserCreateWithoutInstructorProfileInput, UserUncheckedCreateWithoutInstructorProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutInstructorProfileInput
    connect?: UserWhereUniqueInput
  }

  export type CourseCreateNestedManyWithoutInstructorProfileInput = {
    create?: XOR<CourseCreateWithoutInstructorProfileInput, CourseUncheckedCreateWithoutInstructorProfileInput> | CourseCreateWithoutInstructorProfileInput[] | CourseUncheckedCreateWithoutInstructorProfileInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutInstructorProfileInput | CourseCreateOrConnectWithoutInstructorProfileInput[]
    createMany?: CourseCreateManyInstructorProfileInputEnvelope
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
  }

  export type CourseUncheckedCreateNestedManyWithoutInstructorProfileInput = {
    create?: XOR<CourseCreateWithoutInstructorProfileInput, CourseUncheckedCreateWithoutInstructorProfileInput> | CourseCreateWithoutInstructorProfileInput[] | CourseUncheckedCreateWithoutInstructorProfileInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutInstructorProfileInput | CourseCreateOrConnectWithoutInstructorProfileInput[]
    createMany?: CourseCreateManyInstructorProfileInputEnvelope
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type TradeUpdateOneRequiredWithoutInstructorsNestedInput = {
    create?: XOR<TradeCreateWithoutInstructorsInput, TradeUncheckedCreateWithoutInstructorsInput>
    connectOrCreate?: TradeCreateOrConnectWithoutInstructorsInput
    upsert?: TradeUpsertWithoutInstructorsInput
    connect?: TradeWhereUniqueInput
    update?: XOR<XOR<TradeUpdateToOneWithWhereWithoutInstructorsInput, TradeUpdateWithoutInstructorsInput>, TradeUncheckedUpdateWithoutInstructorsInput>
  }

  export type UserUpdateOneRequiredWithoutInstructorProfileNestedInput = {
    create?: XOR<UserCreateWithoutInstructorProfileInput, UserUncheckedCreateWithoutInstructorProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutInstructorProfileInput
    upsert?: UserUpsertWithoutInstructorProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutInstructorProfileInput, UserUpdateWithoutInstructorProfileInput>, UserUncheckedUpdateWithoutInstructorProfileInput>
  }

  export type CourseUpdateManyWithoutInstructorProfileNestedInput = {
    create?: XOR<CourseCreateWithoutInstructorProfileInput, CourseUncheckedCreateWithoutInstructorProfileInput> | CourseCreateWithoutInstructorProfileInput[] | CourseUncheckedCreateWithoutInstructorProfileInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutInstructorProfileInput | CourseCreateOrConnectWithoutInstructorProfileInput[]
    upsert?: CourseUpsertWithWhereUniqueWithoutInstructorProfileInput | CourseUpsertWithWhereUniqueWithoutInstructorProfileInput[]
    createMany?: CourseCreateManyInstructorProfileInputEnvelope
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    update?: CourseUpdateWithWhereUniqueWithoutInstructorProfileInput | CourseUpdateWithWhereUniqueWithoutInstructorProfileInput[]
    updateMany?: CourseUpdateManyWithWhereWithoutInstructorProfileInput | CourseUpdateManyWithWhereWithoutInstructorProfileInput[]
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[]
  }

  export type CourseUncheckedUpdateManyWithoutInstructorProfileNestedInput = {
    create?: XOR<CourseCreateWithoutInstructorProfileInput, CourseUncheckedCreateWithoutInstructorProfileInput> | CourseCreateWithoutInstructorProfileInput[] | CourseUncheckedCreateWithoutInstructorProfileInput[]
    connectOrCreate?: CourseCreateOrConnectWithoutInstructorProfileInput | CourseCreateOrConnectWithoutInstructorProfileInput[]
    upsert?: CourseUpsertWithWhereUniqueWithoutInstructorProfileInput | CourseUpsertWithWhereUniqueWithoutInstructorProfileInput[]
    createMany?: CourseCreateManyInstructorProfileInputEnvelope
    set?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    disconnect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    delete?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    connect?: CourseWhereUniqueInput | CourseWhereUniqueInput[]
    update?: CourseUpdateWithWhereUniqueWithoutInstructorProfileInput | CourseUpdateWithWhereUniqueWithoutInstructorProfileInput[]
    updateMany?: CourseUpdateManyWithWhereWithoutInstructorProfileInput | CourseUpdateManyWithWhereWithoutInstructorProfileInput[]
    deleteMany?: CourseScalarWhereInput | CourseScalarWhereInput[]
  }

  export type InstructorProfileCreateNestedManyWithoutTradeInput = {
    create?: XOR<InstructorProfileCreateWithoutTradeInput, InstructorProfileUncheckedCreateWithoutTradeInput> | InstructorProfileCreateWithoutTradeInput[] | InstructorProfileUncheckedCreateWithoutTradeInput[]
    connectOrCreate?: InstructorProfileCreateOrConnectWithoutTradeInput | InstructorProfileCreateOrConnectWithoutTradeInput[]
    createMany?: InstructorProfileCreateManyTradeInputEnvelope
    connect?: InstructorProfileWhereUniqueInput | InstructorProfileWhereUniqueInput[]
  }

  export type InstructorProfileUncheckedCreateNestedManyWithoutTradeInput = {
    create?: XOR<InstructorProfileCreateWithoutTradeInput, InstructorProfileUncheckedCreateWithoutTradeInput> | InstructorProfileCreateWithoutTradeInput[] | InstructorProfileUncheckedCreateWithoutTradeInput[]
    connectOrCreate?: InstructorProfileCreateOrConnectWithoutTradeInput | InstructorProfileCreateOrConnectWithoutTradeInput[]
    createMany?: InstructorProfileCreateManyTradeInputEnvelope
    connect?: InstructorProfileWhereUniqueInput | InstructorProfileWhereUniqueInput[]
  }

  export type InstructorProfileUpdateManyWithoutTradeNestedInput = {
    create?: XOR<InstructorProfileCreateWithoutTradeInput, InstructorProfileUncheckedCreateWithoutTradeInput> | InstructorProfileCreateWithoutTradeInput[] | InstructorProfileUncheckedCreateWithoutTradeInput[]
    connectOrCreate?: InstructorProfileCreateOrConnectWithoutTradeInput | InstructorProfileCreateOrConnectWithoutTradeInput[]
    upsert?: InstructorProfileUpsertWithWhereUniqueWithoutTradeInput | InstructorProfileUpsertWithWhereUniqueWithoutTradeInput[]
    createMany?: InstructorProfileCreateManyTradeInputEnvelope
    set?: InstructorProfileWhereUniqueInput | InstructorProfileWhereUniqueInput[]
    disconnect?: InstructorProfileWhereUniqueInput | InstructorProfileWhereUniqueInput[]
    delete?: InstructorProfileWhereUniqueInput | InstructorProfileWhereUniqueInput[]
    connect?: InstructorProfileWhereUniqueInput | InstructorProfileWhereUniqueInput[]
    update?: InstructorProfileUpdateWithWhereUniqueWithoutTradeInput | InstructorProfileUpdateWithWhereUniqueWithoutTradeInput[]
    updateMany?: InstructorProfileUpdateManyWithWhereWithoutTradeInput | InstructorProfileUpdateManyWithWhereWithoutTradeInput[]
    deleteMany?: InstructorProfileScalarWhereInput | InstructorProfileScalarWhereInput[]
  }

  export type InstructorProfileUncheckedUpdateManyWithoutTradeNestedInput = {
    create?: XOR<InstructorProfileCreateWithoutTradeInput, InstructorProfileUncheckedCreateWithoutTradeInput> | InstructorProfileCreateWithoutTradeInput[] | InstructorProfileUncheckedCreateWithoutTradeInput[]
    connectOrCreate?: InstructorProfileCreateOrConnectWithoutTradeInput | InstructorProfileCreateOrConnectWithoutTradeInput[]
    upsert?: InstructorProfileUpsertWithWhereUniqueWithoutTradeInput | InstructorProfileUpsertWithWhereUniqueWithoutTradeInput[]
    createMany?: InstructorProfileCreateManyTradeInputEnvelope
    set?: InstructorProfileWhereUniqueInput | InstructorProfileWhereUniqueInput[]
    disconnect?: InstructorProfileWhereUniqueInput | InstructorProfileWhereUniqueInput[]
    delete?: InstructorProfileWhereUniqueInput | InstructorProfileWhereUniqueInput[]
    connect?: InstructorProfileWhereUniqueInput | InstructorProfileWhereUniqueInput[]
    update?: InstructorProfileUpdateWithWhereUniqueWithoutTradeInput | InstructorProfileUpdateWithWhereUniqueWithoutTradeInput[]
    updateMany?: InstructorProfileUpdateManyWithWhereWithoutTradeInput | InstructorProfileUpdateManyWithWhereWithoutTradeInput[]
    deleteMany?: InstructorProfileScalarWhereInput | InstructorProfileScalarWhereInput[]
  }

  export type InstructorProfileCreateNestedOneWithoutCoursesInput = {
    create?: XOR<InstructorProfileCreateWithoutCoursesInput, InstructorProfileUncheckedCreateWithoutCoursesInput>
    connectOrCreate?: InstructorProfileCreateOrConnectWithoutCoursesInput
    connect?: InstructorProfileWhereUniqueInput
  }

  export type ModuleCreateNestedManyWithoutCourseInput = {
    create?: XOR<ModuleCreateWithoutCourseInput, ModuleUncheckedCreateWithoutCourseInput> | ModuleCreateWithoutCourseInput[] | ModuleUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: ModuleCreateOrConnectWithoutCourseInput | ModuleCreateOrConnectWithoutCourseInput[]
    createMany?: ModuleCreateManyCourseInputEnvelope
    connect?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
  }

  export type EnrollmentCreateNestedManyWithoutCourseInput = {
    create?: XOR<EnrollmentCreateWithoutCourseInput, EnrollmentUncheckedCreateWithoutCourseInput> | EnrollmentCreateWithoutCourseInput[] | EnrollmentUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutCourseInput | EnrollmentCreateOrConnectWithoutCourseInput[]
    createMany?: EnrollmentCreateManyCourseInputEnvelope
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
  }

  export type ModuleUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<ModuleCreateWithoutCourseInput, ModuleUncheckedCreateWithoutCourseInput> | ModuleCreateWithoutCourseInput[] | ModuleUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: ModuleCreateOrConnectWithoutCourseInput | ModuleCreateOrConnectWithoutCourseInput[]
    createMany?: ModuleCreateManyCourseInputEnvelope
    connect?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
  }

  export type EnrollmentUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<EnrollmentCreateWithoutCourseInput, EnrollmentUncheckedCreateWithoutCourseInput> | EnrollmentCreateWithoutCourseInput[] | EnrollmentUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutCourseInput | EnrollmentCreateOrConnectWithoutCourseInput[]
    createMany?: EnrollmentCreateManyCourseInputEnvelope
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumCourseStatusFieldUpdateOperationsInput = {
    set?: $Enums.CourseStatus
  }

  export type InstructorProfileUpdateOneRequiredWithoutCoursesNestedInput = {
    create?: XOR<InstructorProfileCreateWithoutCoursesInput, InstructorProfileUncheckedCreateWithoutCoursesInput>
    connectOrCreate?: InstructorProfileCreateOrConnectWithoutCoursesInput
    upsert?: InstructorProfileUpsertWithoutCoursesInput
    connect?: InstructorProfileWhereUniqueInput
    update?: XOR<XOR<InstructorProfileUpdateToOneWithWhereWithoutCoursesInput, InstructorProfileUpdateWithoutCoursesInput>, InstructorProfileUncheckedUpdateWithoutCoursesInput>
  }

  export type ModuleUpdateManyWithoutCourseNestedInput = {
    create?: XOR<ModuleCreateWithoutCourseInput, ModuleUncheckedCreateWithoutCourseInput> | ModuleCreateWithoutCourseInput[] | ModuleUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: ModuleCreateOrConnectWithoutCourseInput | ModuleCreateOrConnectWithoutCourseInput[]
    upsert?: ModuleUpsertWithWhereUniqueWithoutCourseInput | ModuleUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: ModuleCreateManyCourseInputEnvelope
    set?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
    disconnect?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
    delete?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
    connect?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
    update?: ModuleUpdateWithWhereUniqueWithoutCourseInput | ModuleUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: ModuleUpdateManyWithWhereWithoutCourseInput | ModuleUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: ModuleScalarWhereInput | ModuleScalarWhereInput[]
  }

  export type EnrollmentUpdateManyWithoutCourseNestedInput = {
    create?: XOR<EnrollmentCreateWithoutCourseInput, EnrollmentUncheckedCreateWithoutCourseInput> | EnrollmentCreateWithoutCourseInput[] | EnrollmentUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutCourseInput | EnrollmentCreateOrConnectWithoutCourseInput[]
    upsert?: EnrollmentUpsertWithWhereUniqueWithoutCourseInput | EnrollmentUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: EnrollmentCreateManyCourseInputEnvelope
    set?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    disconnect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    delete?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    update?: EnrollmentUpdateWithWhereUniqueWithoutCourseInput | EnrollmentUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: EnrollmentUpdateManyWithWhereWithoutCourseInput | EnrollmentUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
  }

  export type ModuleUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<ModuleCreateWithoutCourseInput, ModuleUncheckedCreateWithoutCourseInput> | ModuleCreateWithoutCourseInput[] | ModuleUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: ModuleCreateOrConnectWithoutCourseInput | ModuleCreateOrConnectWithoutCourseInput[]
    upsert?: ModuleUpsertWithWhereUniqueWithoutCourseInput | ModuleUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: ModuleCreateManyCourseInputEnvelope
    set?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
    disconnect?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
    delete?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
    connect?: ModuleWhereUniqueInput | ModuleWhereUniqueInput[]
    update?: ModuleUpdateWithWhereUniqueWithoutCourseInput | ModuleUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: ModuleUpdateManyWithWhereWithoutCourseInput | ModuleUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: ModuleScalarWhereInput | ModuleScalarWhereInput[]
  }

  export type EnrollmentUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<EnrollmentCreateWithoutCourseInput, EnrollmentUncheckedCreateWithoutCourseInput> | EnrollmentCreateWithoutCourseInput[] | EnrollmentUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutCourseInput | EnrollmentCreateOrConnectWithoutCourseInput[]
    upsert?: EnrollmentUpsertWithWhereUniqueWithoutCourseInput | EnrollmentUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: EnrollmentCreateManyCourseInputEnvelope
    set?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    disconnect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    delete?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    update?: EnrollmentUpdateWithWhereUniqueWithoutCourseInput | EnrollmentUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: EnrollmentUpdateManyWithWhereWithoutCourseInput | EnrollmentUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
  }

  export type CourseCreateNestedOneWithoutModulesInput = {
    create?: XOR<CourseCreateWithoutModulesInput, CourseUncheckedCreateWithoutModulesInput>
    connectOrCreate?: CourseCreateOrConnectWithoutModulesInput
    connect?: CourseWhereUniqueInput
  }

  export type LessonCreateNestedManyWithoutModuleInput = {
    create?: XOR<LessonCreateWithoutModuleInput, LessonUncheckedCreateWithoutModuleInput> | LessonCreateWithoutModuleInput[] | LessonUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: LessonCreateOrConnectWithoutModuleInput | LessonCreateOrConnectWithoutModuleInput[]
    createMany?: LessonCreateManyModuleInputEnvelope
    connect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
  }

  export type LessonUncheckedCreateNestedManyWithoutModuleInput = {
    create?: XOR<LessonCreateWithoutModuleInput, LessonUncheckedCreateWithoutModuleInput> | LessonCreateWithoutModuleInput[] | LessonUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: LessonCreateOrConnectWithoutModuleInput | LessonCreateOrConnectWithoutModuleInput[]
    createMany?: LessonCreateManyModuleInputEnvelope
    connect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
  }

  export type CourseUpdateOneRequiredWithoutModulesNestedInput = {
    create?: XOR<CourseCreateWithoutModulesInput, CourseUncheckedCreateWithoutModulesInput>
    connectOrCreate?: CourseCreateOrConnectWithoutModulesInput
    upsert?: CourseUpsertWithoutModulesInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutModulesInput, CourseUpdateWithoutModulesInput>, CourseUncheckedUpdateWithoutModulesInput>
  }

  export type LessonUpdateManyWithoutModuleNestedInput = {
    create?: XOR<LessonCreateWithoutModuleInput, LessonUncheckedCreateWithoutModuleInput> | LessonCreateWithoutModuleInput[] | LessonUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: LessonCreateOrConnectWithoutModuleInput | LessonCreateOrConnectWithoutModuleInput[]
    upsert?: LessonUpsertWithWhereUniqueWithoutModuleInput | LessonUpsertWithWhereUniqueWithoutModuleInput[]
    createMany?: LessonCreateManyModuleInputEnvelope
    set?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    disconnect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    delete?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    connect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    update?: LessonUpdateWithWhereUniqueWithoutModuleInput | LessonUpdateWithWhereUniqueWithoutModuleInput[]
    updateMany?: LessonUpdateManyWithWhereWithoutModuleInput | LessonUpdateManyWithWhereWithoutModuleInput[]
    deleteMany?: LessonScalarWhereInput | LessonScalarWhereInput[]
  }

  export type LessonUncheckedUpdateManyWithoutModuleNestedInput = {
    create?: XOR<LessonCreateWithoutModuleInput, LessonUncheckedCreateWithoutModuleInput> | LessonCreateWithoutModuleInput[] | LessonUncheckedCreateWithoutModuleInput[]
    connectOrCreate?: LessonCreateOrConnectWithoutModuleInput | LessonCreateOrConnectWithoutModuleInput[]
    upsert?: LessonUpsertWithWhereUniqueWithoutModuleInput | LessonUpsertWithWhereUniqueWithoutModuleInput[]
    createMany?: LessonCreateManyModuleInputEnvelope
    set?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    disconnect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    delete?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    connect?: LessonWhereUniqueInput | LessonWhereUniqueInput[]
    update?: LessonUpdateWithWhereUniqueWithoutModuleInput | LessonUpdateWithWhereUniqueWithoutModuleInput[]
    updateMany?: LessonUpdateManyWithWhereWithoutModuleInput | LessonUpdateManyWithWhereWithoutModuleInput[]
    deleteMany?: LessonScalarWhereInput | LessonScalarWhereInput[]
  }

  export type ModuleCreateNestedOneWithoutLessonsInput = {
    create?: XOR<ModuleCreateWithoutLessonsInput, ModuleUncheckedCreateWithoutLessonsInput>
    connectOrCreate?: ModuleCreateOrConnectWithoutLessonsInput
    connect?: ModuleWhereUniqueInput
  }

  export type LessonProgressCreateNestedManyWithoutLessonInput = {
    create?: XOR<LessonProgressCreateWithoutLessonInput, LessonProgressUncheckedCreateWithoutLessonInput> | LessonProgressCreateWithoutLessonInput[] | LessonProgressUncheckedCreateWithoutLessonInput[]
    connectOrCreate?: LessonProgressCreateOrConnectWithoutLessonInput | LessonProgressCreateOrConnectWithoutLessonInput[]
    createMany?: LessonProgressCreateManyLessonInputEnvelope
    connect?: LessonProgressWhereUniqueInput | LessonProgressWhereUniqueInput[]
  }

  export type LessonProgressUncheckedCreateNestedManyWithoutLessonInput = {
    create?: XOR<LessonProgressCreateWithoutLessonInput, LessonProgressUncheckedCreateWithoutLessonInput> | LessonProgressCreateWithoutLessonInput[] | LessonProgressUncheckedCreateWithoutLessonInput[]
    connectOrCreate?: LessonProgressCreateOrConnectWithoutLessonInput | LessonProgressCreateOrConnectWithoutLessonInput[]
    createMany?: LessonProgressCreateManyLessonInputEnvelope
    connect?: LessonProgressWhereUniqueInput | LessonProgressWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ModuleUpdateOneRequiredWithoutLessonsNestedInput = {
    create?: XOR<ModuleCreateWithoutLessonsInput, ModuleUncheckedCreateWithoutLessonsInput>
    connectOrCreate?: ModuleCreateOrConnectWithoutLessonsInput
    upsert?: ModuleUpsertWithoutLessonsInput
    connect?: ModuleWhereUniqueInput
    update?: XOR<XOR<ModuleUpdateToOneWithWhereWithoutLessonsInput, ModuleUpdateWithoutLessonsInput>, ModuleUncheckedUpdateWithoutLessonsInput>
  }

  export type LessonProgressUpdateManyWithoutLessonNestedInput = {
    create?: XOR<LessonProgressCreateWithoutLessonInput, LessonProgressUncheckedCreateWithoutLessonInput> | LessonProgressCreateWithoutLessonInput[] | LessonProgressUncheckedCreateWithoutLessonInput[]
    connectOrCreate?: LessonProgressCreateOrConnectWithoutLessonInput | LessonProgressCreateOrConnectWithoutLessonInput[]
    upsert?: LessonProgressUpsertWithWhereUniqueWithoutLessonInput | LessonProgressUpsertWithWhereUniqueWithoutLessonInput[]
    createMany?: LessonProgressCreateManyLessonInputEnvelope
    set?: LessonProgressWhereUniqueInput | LessonProgressWhereUniqueInput[]
    disconnect?: LessonProgressWhereUniqueInput | LessonProgressWhereUniqueInput[]
    delete?: LessonProgressWhereUniqueInput | LessonProgressWhereUniqueInput[]
    connect?: LessonProgressWhereUniqueInput | LessonProgressWhereUniqueInput[]
    update?: LessonProgressUpdateWithWhereUniqueWithoutLessonInput | LessonProgressUpdateWithWhereUniqueWithoutLessonInput[]
    updateMany?: LessonProgressUpdateManyWithWhereWithoutLessonInput | LessonProgressUpdateManyWithWhereWithoutLessonInput[]
    deleteMany?: LessonProgressScalarWhereInput | LessonProgressScalarWhereInput[]
  }

  export type LessonProgressUncheckedUpdateManyWithoutLessonNestedInput = {
    create?: XOR<LessonProgressCreateWithoutLessonInput, LessonProgressUncheckedCreateWithoutLessonInput> | LessonProgressCreateWithoutLessonInput[] | LessonProgressUncheckedCreateWithoutLessonInput[]
    connectOrCreate?: LessonProgressCreateOrConnectWithoutLessonInput | LessonProgressCreateOrConnectWithoutLessonInput[]
    upsert?: LessonProgressUpsertWithWhereUniqueWithoutLessonInput | LessonProgressUpsertWithWhereUniqueWithoutLessonInput[]
    createMany?: LessonProgressCreateManyLessonInputEnvelope
    set?: LessonProgressWhereUniqueInput | LessonProgressWhereUniqueInput[]
    disconnect?: LessonProgressWhereUniqueInput | LessonProgressWhereUniqueInput[]
    delete?: LessonProgressWhereUniqueInput | LessonProgressWhereUniqueInput[]
    connect?: LessonProgressWhereUniqueInput | LessonProgressWhereUniqueInput[]
    update?: LessonProgressUpdateWithWhereUniqueWithoutLessonInput | LessonProgressUpdateWithWhereUniqueWithoutLessonInput[]
    updateMany?: LessonProgressUpdateManyWithWhereWithoutLessonInput | LessonProgressUpdateManyWithWhereWithoutLessonInput[]
    deleteMany?: LessonProgressScalarWhereInput | LessonProgressScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutEnrollmentsInput = {
    create?: XOR<UserCreateWithoutEnrollmentsInput, UserUncheckedCreateWithoutEnrollmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEnrollmentsInput
    connect?: UserWhereUniqueInput
  }

  export type CourseCreateNestedOneWithoutEnrollmentsInput = {
    create?: XOR<CourseCreateWithoutEnrollmentsInput, CourseUncheckedCreateWithoutEnrollmentsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutEnrollmentsInput
    connect?: CourseWhereUniqueInput
  }

  export type EnumEnrollmentStatusFieldUpdateOperationsInput = {
    set?: $Enums.EnrollmentStatus
  }

  export type UserUpdateOneRequiredWithoutEnrollmentsNestedInput = {
    create?: XOR<UserCreateWithoutEnrollmentsInput, UserUncheckedCreateWithoutEnrollmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEnrollmentsInput
    upsert?: UserUpsertWithoutEnrollmentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEnrollmentsInput, UserUpdateWithoutEnrollmentsInput>, UserUncheckedUpdateWithoutEnrollmentsInput>
  }

  export type CourseUpdateOneRequiredWithoutEnrollmentsNestedInput = {
    create?: XOR<CourseCreateWithoutEnrollmentsInput, CourseUncheckedCreateWithoutEnrollmentsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutEnrollmentsInput
    upsert?: CourseUpsertWithoutEnrollmentsInput
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutEnrollmentsInput, CourseUpdateWithoutEnrollmentsInput>, CourseUncheckedUpdateWithoutEnrollmentsInput>
  }

  export type UserCreateNestedOneWithoutProgressInput = {
    create?: XOR<UserCreateWithoutProgressInput, UserUncheckedCreateWithoutProgressInput>
    connectOrCreate?: UserCreateOrConnectWithoutProgressInput
    connect?: UserWhereUniqueInput
  }

  export type LessonCreateNestedOneWithoutProgressInput = {
    create?: XOR<LessonCreateWithoutProgressInput, LessonUncheckedCreateWithoutProgressInput>
    connectOrCreate?: LessonCreateOrConnectWithoutProgressInput
    connect?: LessonWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutProgressNestedInput = {
    create?: XOR<UserCreateWithoutProgressInput, UserUncheckedCreateWithoutProgressInput>
    connectOrCreate?: UserCreateOrConnectWithoutProgressInput
    upsert?: UserUpsertWithoutProgressInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProgressInput, UserUpdateWithoutProgressInput>, UserUncheckedUpdateWithoutProgressInput>
  }

  export type LessonUpdateOneRequiredWithoutProgressNestedInput = {
    create?: XOR<LessonCreateWithoutProgressInput, LessonUncheckedCreateWithoutProgressInput>
    connectOrCreate?: LessonCreateOrConnectWithoutProgressInput
    upsert?: LessonUpsertWithoutProgressInput
    connect?: LessonWhereUniqueInput
    update?: XOR<XOR<LessonUpdateToOneWithWhereWithoutProgressInput, LessonUpdateWithoutProgressInput>, LessonUncheckedUpdateWithoutProgressInput>
  }

  export type UserCreateNestedOneWithoutPayoutRequestsInput = {
    create?: XOR<UserCreateWithoutPayoutRequestsInput, UserUncheckedCreateWithoutPayoutRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPayoutRequestsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumPayoutStatusFieldUpdateOperationsInput = {
    set?: $Enums.PayoutStatus
  }

  export type UserUpdateOneRequiredWithoutPayoutRequestsNestedInput = {
    create?: XOR<UserCreateWithoutPayoutRequestsInput, UserUncheckedCreateWithoutPayoutRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPayoutRequestsInput
    upsert?: UserUpsertWithoutPayoutRequestsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPayoutRequestsInput, UserUpdateWithoutPayoutRequestsInput>, UserUncheckedUpdateWithoutPayoutRequestsInput>
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type NestedEnumCourseStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CourseStatus | EnumCourseStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CourseStatus[] | ListEnumCourseStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CourseStatus[] | ListEnumCourseStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCourseStatusFilter<$PrismaModel> | $Enums.CourseStatus
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

  export type NestedEnumCourseStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CourseStatus | EnumCourseStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CourseStatus[] | ListEnumCourseStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CourseStatus[] | ListEnumCourseStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCourseStatusWithAggregatesFilter<$PrismaModel> | $Enums.CourseStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCourseStatusFilter<$PrismaModel>
    _max?: NestedEnumCourseStatusFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumEnrollmentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.EnrollmentStatus | EnumEnrollmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EnrollmentStatus[] | ListEnumEnrollmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EnrollmentStatus[] | ListEnumEnrollmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEnrollmentStatusFilter<$PrismaModel> | $Enums.EnrollmentStatus
  }

  export type NestedEnumEnrollmentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EnrollmentStatus | EnumEnrollmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.EnrollmentStatus[] | ListEnumEnrollmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.EnrollmentStatus[] | ListEnumEnrollmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumEnrollmentStatusWithAggregatesFilter<$PrismaModel> | $Enums.EnrollmentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEnrollmentStatusFilter<$PrismaModel>
    _max?: NestedEnumEnrollmentStatusFilter<$PrismaModel>
  }

  export type NestedEnumPayoutStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PayoutStatus | EnumPayoutStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PayoutStatus[] | ListEnumPayoutStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PayoutStatus[] | ListEnumPayoutStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPayoutStatusFilter<$PrismaModel> | $Enums.PayoutStatus
  }

  export type NestedEnumPayoutStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PayoutStatus | EnumPayoutStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PayoutStatus[] | ListEnumPayoutStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PayoutStatus[] | ListEnumPayoutStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPayoutStatusWithAggregatesFilter<$PrismaModel> | $Enums.PayoutStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPayoutStatusFilter<$PrismaModel>
    _max?: NestedEnumPayoutStatusFilter<$PrismaModel>
  }

  export type InstructorProfileCreateWithoutUserInput = {
    id?: string
    bio?: string | null
    paystackRecipientCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    trade: TradeCreateNestedOneWithoutInstructorsInput
    courses?: CourseCreateNestedManyWithoutInstructorProfileInput
  }

  export type InstructorProfileUncheckedCreateWithoutUserInput = {
    id?: string
    bio?: string | null
    tradeId: string
    paystackRecipientCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    courses?: CourseUncheckedCreateNestedManyWithoutInstructorProfileInput
  }

  export type InstructorProfileCreateOrConnectWithoutUserInput = {
    where: InstructorProfileWhereUniqueInput
    create: XOR<InstructorProfileCreateWithoutUserInput, InstructorProfileUncheckedCreateWithoutUserInput>
  }

  export type RefreshTokenCreateWithoutUserInput = {
    id?: string
    tokenHash: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RefreshTokenUncheckedCreateWithoutUserInput = {
    id?: string
    tokenHash: string
    expiresAt: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RefreshTokenCreateOrConnectWithoutUserInput = {
    where: RefreshTokenWhereUniqueInput
    create: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput>
  }

  export type EmailVerificationTokenCreateWithoutUserInput = {
    id?: string
    tokenHash: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type EmailVerificationTokenUncheckedCreateWithoutUserInput = {
    id?: string
    tokenHash: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type EmailVerificationTokenCreateOrConnectWithoutUserInput = {
    where: EmailVerificationTokenWhereUniqueInput
    create: XOR<EmailVerificationTokenCreateWithoutUserInput, EmailVerificationTokenUncheckedCreateWithoutUserInput>
  }

  export type PasswordResetTokenCreateWithoutUserInput = {
    id?: string
    tokenHash: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type PasswordResetTokenUncheckedCreateWithoutUserInput = {
    id?: string
    tokenHash: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type PasswordResetTokenCreateOrConnectWithoutUserInput = {
    where: PasswordResetTokenWhereUniqueInput
    create: XOR<PasswordResetTokenCreateWithoutUserInput, PasswordResetTokenUncheckedCreateWithoutUserInput>
  }

  export type EnrollmentCreateWithoutUserInput = {
    id?: string
    status?: $Enums.EnrollmentStatus
    paystackReference: string
    amountPaid: number
    createdAt?: Date | string
    updatedAt?: Date | string
    course: CourseCreateNestedOneWithoutEnrollmentsInput
  }

  export type EnrollmentUncheckedCreateWithoutUserInput = {
    id?: string
    status?: $Enums.EnrollmentStatus
    paystackReference: string
    amountPaid: number
    courseId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EnrollmentCreateOrConnectWithoutUserInput = {
    where: EnrollmentWhereUniqueInput
    create: XOR<EnrollmentCreateWithoutUserInput, EnrollmentUncheckedCreateWithoutUserInput>
  }

  export type EnrollmentCreateManyUserInputEnvelope = {
    data: EnrollmentCreateManyUserInput | EnrollmentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type LessonProgressCreateWithoutUserInput = {
    id?: string
    completedAt?: Date | string
    lesson: LessonCreateNestedOneWithoutProgressInput
  }

  export type LessonProgressUncheckedCreateWithoutUserInput = {
    id?: string
    completedAt?: Date | string
    lessonId: string
  }

  export type LessonProgressCreateOrConnectWithoutUserInput = {
    where: LessonProgressWhereUniqueInput
    create: XOR<LessonProgressCreateWithoutUserInput, LessonProgressUncheckedCreateWithoutUserInput>
  }

  export type LessonProgressCreateManyUserInputEnvelope = {
    data: LessonProgressCreateManyUserInput | LessonProgressCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PayoutRequestCreateWithoutUserInput = {
    id?: string
    amount: number
    status?: $Enums.PayoutStatus
    paystackTransferId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PayoutRequestUncheckedCreateWithoutUserInput = {
    id?: string
    amount: number
    status?: $Enums.PayoutStatus
    paystackTransferId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PayoutRequestCreateOrConnectWithoutUserInput = {
    where: PayoutRequestWhereUniqueInput
    create: XOR<PayoutRequestCreateWithoutUserInput, PayoutRequestUncheckedCreateWithoutUserInput>
  }

  export type PayoutRequestCreateManyUserInputEnvelope = {
    data: PayoutRequestCreateManyUserInput | PayoutRequestCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type InstructorProfileUpsertWithoutUserInput = {
    update: XOR<InstructorProfileUpdateWithoutUserInput, InstructorProfileUncheckedUpdateWithoutUserInput>
    create: XOR<InstructorProfileCreateWithoutUserInput, InstructorProfileUncheckedCreateWithoutUserInput>
    where?: InstructorProfileWhereInput
  }

  export type InstructorProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: InstructorProfileWhereInput
    data: XOR<InstructorProfileUpdateWithoutUserInput, InstructorProfileUncheckedUpdateWithoutUserInput>
  }

  export type InstructorProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    paystackRecipientCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trade?: TradeUpdateOneRequiredWithoutInstructorsNestedInput
    courses?: CourseUpdateManyWithoutInstructorProfileNestedInput
  }

  export type InstructorProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    tradeId?: StringFieldUpdateOperationsInput | string
    paystackRecipientCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courses?: CourseUncheckedUpdateManyWithoutInstructorProfileNestedInput
  }

  export type RefreshTokenUpsertWithoutUserInput = {
    update: XOR<RefreshTokenUpdateWithoutUserInput, RefreshTokenUncheckedUpdateWithoutUserInput>
    create: XOR<RefreshTokenCreateWithoutUserInput, RefreshTokenUncheckedCreateWithoutUserInput>
    where?: RefreshTokenWhereInput
  }

  export type RefreshTokenUpdateToOneWithWhereWithoutUserInput = {
    where?: RefreshTokenWhereInput
    data: XOR<RefreshTokenUpdateWithoutUserInput, RefreshTokenUncheckedUpdateWithoutUserInput>
  }

  export type RefreshTokenUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RefreshTokenUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailVerificationTokenUpsertWithoutUserInput = {
    update: XOR<EmailVerificationTokenUpdateWithoutUserInput, EmailVerificationTokenUncheckedUpdateWithoutUserInput>
    create: XOR<EmailVerificationTokenCreateWithoutUserInput, EmailVerificationTokenUncheckedCreateWithoutUserInput>
    where?: EmailVerificationTokenWhereInput
  }

  export type EmailVerificationTokenUpdateToOneWithWhereWithoutUserInput = {
    where?: EmailVerificationTokenWhereInput
    data: XOR<EmailVerificationTokenUpdateWithoutUserInput, EmailVerificationTokenUncheckedUpdateWithoutUserInput>
  }

  export type EmailVerificationTokenUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmailVerificationTokenUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordResetTokenUpsertWithoutUserInput = {
    update: XOR<PasswordResetTokenUpdateWithoutUserInput, PasswordResetTokenUncheckedUpdateWithoutUserInput>
    create: XOR<PasswordResetTokenCreateWithoutUserInput, PasswordResetTokenUncheckedCreateWithoutUserInput>
    where?: PasswordResetTokenWhereInput
  }

  export type PasswordResetTokenUpdateToOneWithWhereWithoutUserInput = {
    where?: PasswordResetTokenWhereInput
    data: XOR<PasswordResetTokenUpdateWithoutUserInput, PasswordResetTokenUncheckedUpdateWithoutUserInput>
  }

  export type PasswordResetTokenUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordResetTokenUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnrollmentUpsertWithWhereUniqueWithoutUserInput = {
    where: EnrollmentWhereUniqueInput
    update: XOR<EnrollmentUpdateWithoutUserInput, EnrollmentUncheckedUpdateWithoutUserInput>
    create: XOR<EnrollmentCreateWithoutUserInput, EnrollmentUncheckedCreateWithoutUserInput>
  }

  export type EnrollmentUpdateWithWhereUniqueWithoutUserInput = {
    where: EnrollmentWhereUniqueInput
    data: XOR<EnrollmentUpdateWithoutUserInput, EnrollmentUncheckedUpdateWithoutUserInput>
  }

  export type EnrollmentUpdateManyWithWhereWithoutUserInput = {
    where: EnrollmentScalarWhereInput
    data: XOR<EnrollmentUpdateManyMutationInput, EnrollmentUncheckedUpdateManyWithoutUserInput>
  }

  export type EnrollmentScalarWhereInput = {
    AND?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
    OR?: EnrollmentScalarWhereInput[]
    NOT?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
    id?: StringFilter<"Enrollment"> | string
    status?: EnumEnrollmentStatusFilter<"Enrollment"> | $Enums.EnrollmentStatus
    paystackReference?: StringFilter<"Enrollment"> | string
    amountPaid?: IntFilter<"Enrollment"> | number
    userId?: StringFilter<"Enrollment"> | string
    courseId?: StringFilter<"Enrollment"> | string
    createdAt?: DateTimeFilter<"Enrollment"> | Date | string
    updatedAt?: DateTimeFilter<"Enrollment"> | Date | string
  }

  export type LessonProgressUpsertWithWhereUniqueWithoutUserInput = {
    where: LessonProgressWhereUniqueInput
    update: XOR<LessonProgressUpdateWithoutUserInput, LessonProgressUncheckedUpdateWithoutUserInput>
    create: XOR<LessonProgressCreateWithoutUserInput, LessonProgressUncheckedCreateWithoutUserInput>
  }

  export type LessonProgressUpdateWithWhereUniqueWithoutUserInput = {
    where: LessonProgressWhereUniqueInput
    data: XOR<LessonProgressUpdateWithoutUserInput, LessonProgressUncheckedUpdateWithoutUserInput>
  }

  export type LessonProgressUpdateManyWithWhereWithoutUserInput = {
    where: LessonProgressScalarWhereInput
    data: XOR<LessonProgressUpdateManyMutationInput, LessonProgressUncheckedUpdateManyWithoutUserInput>
  }

  export type LessonProgressScalarWhereInput = {
    AND?: LessonProgressScalarWhereInput | LessonProgressScalarWhereInput[]
    OR?: LessonProgressScalarWhereInput[]
    NOT?: LessonProgressScalarWhereInput | LessonProgressScalarWhereInput[]
    id?: StringFilter<"LessonProgress"> | string
    completedAt?: DateTimeFilter<"LessonProgress"> | Date | string
    userId?: StringFilter<"LessonProgress"> | string
    lessonId?: StringFilter<"LessonProgress"> | string
  }

  export type PayoutRequestUpsertWithWhereUniqueWithoutUserInput = {
    where: PayoutRequestWhereUniqueInput
    update: XOR<PayoutRequestUpdateWithoutUserInput, PayoutRequestUncheckedUpdateWithoutUserInput>
    create: XOR<PayoutRequestCreateWithoutUserInput, PayoutRequestUncheckedCreateWithoutUserInput>
  }

  export type PayoutRequestUpdateWithWhereUniqueWithoutUserInput = {
    where: PayoutRequestWhereUniqueInput
    data: XOR<PayoutRequestUpdateWithoutUserInput, PayoutRequestUncheckedUpdateWithoutUserInput>
  }

  export type PayoutRequestUpdateManyWithWhereWithoutUserInput = {
    where: PayoutRequestScalarWhereInput
    data: XOR<PayoutRequestUpdateManyMutationInput, PayoutRequestUncheckedUpdateManyWithoutUserInput>
  }

  export type PayoutRequestScalarWhereInput = {
    AND?: PayoutRequestScalarWhereInput | PayoutRequestScalarWhereInput[]
    OR?: PayoutRequestScalarWhereInput[]
    NOT?: PayoutRequestScalarWhereInput | PayoutRequestScalarWhereInput[]
    id?: StringFilter<"PayoutRequest"> | string
    amount?: IntFilter<"PayoutRequest"> | number
    status?: EnumPayoutStatusFilter<"PayoutRequest"> | $Enums.PayoutStatus
    paystackTransferId?: StringNullableFilter<"PayoutRequest"> | string | null
    userId?: StringFilter<"PayoutRequest"> | string
    createdAt?: DateTimeFilter<"PayoutRequest"> | Date | string
    updatedAt?: DateTimeFilter<"PayoutRequest"> | Date | string
  }

  export type UserCreateWithoutRefreshTokenInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    role?: $Enums.Role
    verifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    instructorProfile?: InstructorProfileCreateNestedOneWithoutUserInput
    emailVerificationToken?: EmailVerificationTokenCreateNestedOneWithoutUserInput
    passwordResetToken?: PasswordResetTokenCreateNestedOneWithoutUserInput
    enrollments?: EnrollmentCreateNestedManyWithoutUserInput
    progress?: LessonProgressCreateNestedManyWithoutUserInput
    payoutRequests?: PayoutRequestCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRefreshTokenInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    role?: $Enums.Role
    verifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    instructorProfile?: InstructorProfileUncheckedCreateNestedOneWithoutUserInput
    emailVerificationToken?: EmailVerificationTokenUncheckedCreateNestedOneWithoutUserInput
    passwordResetToken?: PasswordResetTokenUncheckedCreateNestedOneWithoutUserInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutUserInput
    progress?: LessonProgressUncheckedCreateNestedManyWithoutUserInput
    payoutRequests?: PayoutRequestUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRefreshTokenInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRefreshTokenInput, UserUncheckedCreateWithoutRefreshTokenInput>
  }

  export type UserUpsertWithoutRefreshTokenInput = {
    update: XOR<UserUpdateWithoutRefreshTokenInput, UserUncheckedUpdateWithoutRefreshTokenInput>
    create: XOR<UserCreateWithoutRefreshTokenInput, UserUncheckedCreateWithoutRefreshTokenInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRefreshTokenInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRefreshTokenInput, UserUncheckedUpdateWithoutRefreshTokenInput>
  }

  export type UserUpdateWithoutRefreshTokenInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instructorProfile?: InstructorProfileUpdateOneWithoutUserNestedInput
    emailVerificationToken?: EmailVerificationTokenUpdateOneWithoutUserNestedInput
    passwordResetToken?: PasswordResetTokenUpdateOneWithoutUserNestedInput
    enrollments?: EnrollmentUpdateManyWithoutUserNestedInput
    progress?: LessonProgressUpdateManyWithoutUserNestedInput
    payoutRequests?: PayoutRequestUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRefreshTokenInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instructorProfile?: InstructorProfileUncheckedUpdateOneWithoutUserNestedInput
    emailVerificationToken?: EmailVerificationTokenUncheckedUpdateOneWithoutUserNestedInput
    passwordResetToken?: PasswordResetTokenUncheckedUpdateOneWithoutUserNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutUserNestedInput
    progress?: LessonProgressUncheckedUpdateManyWithoutUserNestedInput
    payoutRequests?: PayoutRequestUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutEmailVerificationTokenInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    role?: $Enums.Role
    verifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    instructorProfile?: InstructorProfileCreateNestedOneWithoutUserInput
    refreshToken?: RefreshTokenCreateNestedOneWithoutUserInput
    passwordResetToken?: PasswordResetTokenCreateNestedOneWithoutUserInput
    enrollments?: EnrollmentCreateNestedManyWithoutUserInput
    progress?: LessonProgressCreateNestedManyWithoutUserInput
    payoutRequests?: PayoutRequestCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutEmailVerificationTokenInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    role?: $Enums.Role
    verifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    instructorProfile?: InstructorProfileUncheckedCreateNestedOneWithoutUserInput
    refreshToken?: RefreshTokenUncheckedCreateNestedOneWithoutUserInput
    passwordResetToken?: PasswordResetTokenUncheckedCreateNestedOneWithoutUserInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutUserInput
    progress?: LessonProgressUncheckedCreateNestedManyWithoutUserInput
    payoutRequests?: PayoutRequestUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutEmailVerificationTokenInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEmailVerificationTokenInput, UserUncheckedCreateWithoutEmailVerificationTokenInput>
  }

  export type UserUpsertWithoutEmailVerificationTokenInput = {
    update: XOR<UserUpdateWithoutEmailVerificationTokenInput, UserUncheckedUpdateWithoutEmailVerificationTokenInput>
    create: XOR<UserCreateWithoutEmailVerificationTokenInput, UserUncheckedCreateWithoutEmailVerificationTokenInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEmailVerificationTokenInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEmailVerificationTokenInput, UserUncheckedUpdateWithoutEmailVerificationTokenInput>
  }

  export type UserUpdateWithoutEmailVerificationTokenInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instructorProfile?: InstructorProfileUpdateOneWithoutUserNestedInput
    refreshToken?: RefreshTokenUpdateOneWithoutUserNestedInput
    passwordResetToken?: PasswordResetTokenUpdateOneWithoutUserNestedInput
    enrollments?: EnrollmentUpdateManyWithoutUserNestedInput
    progress?: LessonProgressUpdateManyWithoutUserNestedInput
    payoutRequests?: PayoutRequestUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutEmailVerificationTokenInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instructorProfile?: InstructorProfileUncheckedUpdateOneWithoutUserNestedInput
    refreshToken?: RefreshTokenUncheckedUpdateOneWithoutUserNestedInput
    passwordResetToken?: PasswordResetTokenUncheckedUpdateOneWithoutUserNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutUserNestedInput
    progress?: LessonProgressUncheckedUpdateManyWithoutUserNestedInput
    payoutRequests?: PayoutRequestUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutPasswordResetTokenInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    role?: $Enums.Role
    verifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    instructorProfile?: InstructorProfileCreateNestedOneWithoutUserInput
    refreshToken?: RefreshTokenCreateNestedOneWithoutUserInput
    emailVerificationToken?: EmailVerificationTokenCreateNestedOneWithoutUserInput
    enrollments?: EnrollmentCreateNestedManyWithoutUserInput
    progress?: LessonProgressCreateNestedManyWithoutUserInput
    payoutRequests?: PayoutRequestCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPasswordResetTokenInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    role?: $Enums.Role
    verifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    instructorProfile?: InstructorProfileUncheckedCreateNestedOneWithoutUserInput
    refreshToken?: RefreshTokenUncheckedCreateNestedOneWithoutUserInput
    emailVerificationToken?: EmailVerificationTokenUncheckedCreateNestedOneWithoutUserInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutUserInput
    progress?: LessonProgressUncheckedCreateNestedManyWithoutUserInput
    payoutRequests?: PayoutRequestUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPasswordResetTokenInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPasswordResetTokenInput, UserUncheckedCreateWithoutPasswordResetTokenInput>
  }

  export type UserUpsertWithoutPasswordResetTokenInput = {
    update: XOR<UserUpdateWithoutPasswordResetTokenInput, UserUncheckedUpdateWithoutPasswordResetTokenInput>
    create: XOR<UserCreateWithoutPasswordResetTokenInput, UserUncheckedCreateWithoutPasswordResetTokenInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPasswordResetTokenInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPasswordResetTokenInput, UserUncheckedUpdateWithoutPasswordResetTokenInput>
  }

  export type UserUpdateWithoutPasswordResetTokenInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instructorProfile?: InstructorProfileUpdateOneWithoutUserNestedInput
    refreshToken?: RefreshTokenUpdateOneWithoutUserNestedInput
    emailVerificationToken?: EmailVerificationTokenUpdateOneWithoutUserNestedInput
    enrollments?: EnrollmentUpdateManyWithoutUserNestedInput
    progress?: LessonProgressUpdateManyWithoutUserNestedInput
    payoutRequests?: PayoutRequestUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPasswordResetTokenInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instructorProfile?: InstructorProfileUncheckedUpdateOneWithoutUserNestedInput
    refreshToken?: RefreshTokenUncheckedUpdateOneWithoutUserNestedInput
    emailVerificationToken?: EmailVerificationTokenUncheckedUpdateOneWithoutUserNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutUserNestedInput
    progress?: LessonProgressUncheckedUpdateManyWithoutUserNestedInput
    payoutRequests?: PayoutRequestUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TradeCreateWithoutInstructorsInput = {
    id?: string
    name: string
  }

  export type TradeUncheckedCreateWithoutInstructorsInput = {
    id?: string
    name: string
  }

  export type TradeCreateOrConnectWithoutInstructorsInput = {
    where: TradeWhereUniqueInput
    create: XOR<TradeCreateWithoutInstructorsInput, TradeUncheckedCreateWithoutInstructorsInput>
  }

  export type UserCreateWithoutInstructorProfileInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    role?: $Enums.Role
    verifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    refreshToken?: RefreshTokenCreateNestedOneWithoutUserInput
    emailVerificationToken?: EmailVerificationTokenCreateNestedOneWithoutUserInput
    passwordResetToken?: PasswordResetTokenCreateNestedOneWithoutUserInput
    enrollments?: EnrollmentCreateNestedManyWithoutUserInput
    progress?: LessonProgressCreateNestedManyWithoutUserInput
    payoutRequests?: PayoutRequestCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutInstructorProfileInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    role?: $Enums.Role
    verifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    refreshToken?: RefreshTokenUncheckedCreateNestedOneWithoutUserInput
    emailVerificationToken?: EmailVerificationTokenUncheckedCreateNestedOneWithoutUserInput
    passwordResetToken?: PasswordResetTokenUncheckedCreateNestedOneWithoutUserInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutUserInput
    progress?: LessonProgressUncheckedCreateNestedManyWithoutUserInput
    payoutRequests?: PayoutRequestUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutInstructorProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInstructorProfileInput, UserUncheckedCreateWithoutInstructorProfileInput>
  }

  export type CourseCreateWithoutInstructorProfileInput = {
    id?: string
    title: string
    description: string
    price: number
    status?: $Enums.CourseStatus
    coverImageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    modules?: ModuleCreateNestedManyWithoutCourseInput
    enrollments?: EnrollmentCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutInstructorProfileInput = {
    id?: string
    title: string
    description: string
    price: number
    status?: $Enums.CourseStatus
    coverImageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    modules?: ModuleUncheckedCreateNestedManyWithoutCourseInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutInstructorProfileInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutInstructorProfileInput, CourseUncheckedCreateWithoutInstructorProfileInput>
  }

  export type CourseCreateManyInstructorProfileInputEnvelope = {
    data: CourseCreateManyInstructorProfileInput | CourseCreateManyInstructorProfileInput[]
    skipDuplicates?: boolean
  }

  export type TradeUpsertWithoutInstructorsInput = {
    update: XOR<TradeUpdateWithoutInstructorsInput, TradeUncheckedUpdateWithoutInstructorsInput>
    create: XOR<TradeCreateWithoutInstructorsInput, TradeUncheckedCreateWithoutInstructorsInput>
    where?: TradeWhereInput
  }

  export type TradeUpdateToOneWithWhereWithoutInstructorsInput = {
    where?: TradeWhereInput
    data: XOR<TradeUpdateWithoutInstructorsInput, TradeUncheckedUpdateWithoutInstructorsInput>
  }

  export type TradeUpdateWithoutInstructorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TradeUncheckedUpdateWithoutInstructorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserUpsertWithoutInstructorProfileInput = {
    update: XOR<UserUpdateWithoutInstructorProfileInput, UserUncheckedUpdateWithoutInstructorProfileInput>
    create: XOR<UserCreateWithoutInstructorProfileInput, UserUncheckedCreateWithoutInstructorProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutInstructorProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutInstructorProfileInput, UserUncheckedUpdateWithoutInstructorProfileInput>
  }

  export type UserUpdateWithoutInstructorProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshToken?: RefreshTokenUpdateOneWithoutUserNestedInput
    emailVerificationToken?: EmailVerificationTokenUpdateOneWithoutUserNestedInput
    passwordResetToken?: PasswordResetTokenUpdateOneWithoutUserNestedInput
    enrollments?: EnrollmentUpdateManyWithoutUserNestedInput
    progress?: LessonProgressUpdateManyWithoutUserNestedInput
    payoutRequests?: PayoutRequestUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutInstructorProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    refreshToken?: RefreshTokenUncheckedUpdateOneWithoutUserNestedInput
    emailVerificationToken?: EmailVerificationTokenUncheckedUpdateOneWithoutUserNestedInput
    passwordResetToken?: PasswordResetTokenUncheckedUpdateOneWithoutUserNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutUserNestedInput
    progress?: LessonProgressUncheckedUpdateManyWithoutUserNestedInput
    payoutRequests?: PayoutRequestUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CourseUpsertWithWhereUniqueWithoutInstructorProfileInput = {
    where: CourseWhereUniqueInput
    update: XOR<CourseUpdateWithoutInstructorProfileInput, CourseUncheckedUpdateWithoutInstructorProfileInput>
    create: XOR<CourseCreateWithoutInstructorProfileInput, CourseUncheckedCreateWithoutInstructorProfileInput>
  }

  export type CourseUpdateWithWhereUniqueWithoutInstructorProfileInput = {
    where: CourseWhereUniqueInput
    data: XOR<CourseUpdateWithoutInstructorProfileInput, CourseUncheckedUpdateWithoutInstructorProfileInput>
  }

  export type CourseUpdateManyWithWhereWithoutInstructorProfileInput = {
    where: CourseScalarWhereInput
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyWithoutInstructorProfileInput>
  }

  export type CourseScalarWhereInput = {
    AND?: CourseScalarWhereInput | CourseScalarWhereInput[]
    OR?: CourseScalarWhereInput[]
    NOT?: CourseScalarWhereInput | CourseScalarWhereInput[]
    id?: StringFilter<"Course"> | string
    title?: StringFilter<"Course"> | string
    description?: StringFilter<"Course"> | string
    price?: IntFilter<"Course"> | number
    status?: EnumCourseStatusFilter<"Course"> | $Enums.CourseStatus
    coverImageUrl?: StringNullableFilter<"Course"> | string | null
    instructorProfileId?: StringFilter<"Course"> | string
    createdAt?: DateTimeFilter<"Course"> | Date | string
    updatedAt?: DateTimeFilter<"Course"> | Date | string
  }

  export type InstructorProfileCreateWithoutTradeInput = {
    id?: string
    bio?: string | null
    paystackRecipientCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutInstructorProfileInput
    courses?: CourseCreateNestedManyWithoutInstructorProfileInput
  }

  export type InstructorProfileUncheckedCreateWithoutTradeInput = {
    id?: string
    bio?: string | null
    paystackRecipientCode?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    courses?: CourseUncheckedCreateNestedManyWithoutInstructorProfileInput
  }

  export type InstructorProfileCreateOrConnectWithoutTradeInput = {
    where: InstructorProfileWhereUniqueInput
    create: XOR<InstructorProfileCreateWithoutTradeInput, InstructorProfileUncheckedCreateWithoutTradeInput>
  }

  export type InstructorProfileCreateManyTradeInputEnvelope = {
    data: InstructorProfileCreateManyTradeInput | InstructorProfileCreateManyTradeInput[]
    skipDuplicates?: boolean
  }

  export type InstructorProfileUpsertWithWhereUniqueWithoutTradeInput = {
    where: InstructorProfileWhereUniqueInput
    update: XOR<InstructorProfileUpdateWithoutTradeInput, InstructorProfileUncheckedUpdateWithoutTradeInput>
    create: XOR<InstructorProfileCreateWithoutTradeInput, InstructorProfileUncheckedCreateWithoutTradeInput>
  }

  export type InstructorProfileUpdateWithWhereUniqueWithoutTradeInput = {
    where: InstructorProfileWhereUniqueInput
    data: XOR<InstructorProfileUpdateWithoutTradeInput, InstructorProfileUncheckedUpdateWithoutTradeInput>
  }

  export type InstructorProfileUpdateManyWithWhereWithoutTradeInput = {
    where: InstructorProfileScalarWhereInput
    data: XOR<InstructorProfileUpdateManyMutationInput, InstructorProfileUncheckedUpdateManyWithoutTradeInput>
  }

  export type InstructorProfileScalarWhereInput = {
    AND?: InstructorProfileScalarWhereInput | InstructorProfileScalarWhereInput[]
    OR?: InstructorProfileScalarWhereInput[]
    NOT?: InstructorProfileScalarWhereInput | InstructorProfileScalarWhereInput[]
    id?: StringFilter<"InstructorProfile"> | string
    bio?: StringNullableFilter<"InstructorProfile"> | string | null
    tradeId?: StringFilter<"InstructorProfile"> | string
    paystackRecipientCode?: StringNullableFilter<"InstructorProfile"> | string | null
    userId?: StringFilter<"InstructorProfile"> | string
    createdAt?: DateTimeFilter<"InstructorProfile"> | Date | string
    updatedAt?: DateTimeFilter<"InstructorProfile"> | Date | string
  }

  export type InstructorProfileCreateWithoutCoursesInput = {
    id?: string
    bio?: string | null
    paystackRecipientCode?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    trade: TradeCreateNestedOneWithoutInstructorsInput
    user: UserCreateNestedOneWithoutInstructorProfileInput
  }

  export type InstructorProfileUncheckedCreateWithoutCoursesInput = {
    id?: string
    bio?: string | null
    tradeId: string
    paystackRecipientCode?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InstructorProfileCreateOrConnectWithoutCoursesInput = {
    where: InstructorProfileWhereUniqueInput
    create: XOR<InstructorProfileCreateWithoutCoursesInput, InstructorProfileUncheckedCreateWithoutCoursesInput>
  }

  export type ModuleCreateWithoutCourseInput = {
    id?: string
    title: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
    lessons?: LessonCreateNestedManyWithoutModuleInput
  }

  export type ModuleUncheckedCreateWithoutCourseInput = {
    id?: string
    title: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
    lessons?: LessonUncheckedCreateNestedManyWithoutModuleInput
  }

  export type ModuleCreateOrConnectWithoutCourseInput = {
    where: ModuleWhereUniqueInput
    create: XOR<ModuleCreateWithoutCourseInput, ModuleUncheckedCreateWithoutCourseInput>
  }

  export type ModuleCreateManyCourseInputEnvelope = {
    data: ModuleCreateManyCourseInput | ModuleCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type EnrollmentCreateWithoutCourseInput = {
    id?: string
    status?: $Enums.EnrollmentStatus
    paystackReference: string
    amountPaid: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutEnrollmentsInput
  }

  export type EnrollmentUncheckedCreateWithoutCourseInput = {
    id?: string
    status?: $Enums.EnrollmentStatus
    paystackReference: string
    amountPaid: number
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EnrollmentCreateOrConnectWithoutCourseInput = {
    where: EnrollmentWhereUniqueInput
    create: XOR<EnrollmentCreateWithoutCourseInput, EnrollmentUncheckedCreateWithoutCourseInput>
  }

  export type EnrollmentCreateManyCourseInputEnvelope = {
    data: EnrollmentCreateManyCourseInput | EnrollmentCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type InstructorProfileUpsertWithoutCoursesInput = {
    update: XOR<InstructorProfileUpdateWithoutCoursesInput, InstructorProfileUncheckedUpdateWithoutCoursesInput>
    create: XOR<InstructorProfileCreateWithoutCoursesInput, InstructorProfileUncheckedCreateWithoutCoursesInput>
    where?: InstructorProfileWhereInput
  }

  export type InstructorProfileUpdateToOneWithWhereWithoutCoursesInput = {
    where?: InstructorProfileWhereInput
    data: XOR<InstructorProfileUpdateWithoutCoursesInput, InstructorProfileUncheckedUpdateWithoutCoursesInput>
  }

  export type InstructorProfileUpdateWithoutCoursesInput = {
    id?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    paystackRecipientCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trade?: TradeUpdateOneRequiredWithoutInstructorsNestedInput
    user?: UserUpdateOneRequiredWithoutInstructorProfileNestedInput
  }

  export type InstructorProfileUncheckedUpdateWithoutCoursesInput = {
    id?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    tradeId?: StringFieldUpdateOperationsInput | string
    paystackRecipientCode?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModuleUpsertWithWhereUniqueWithoutCourseInput = {
    where: ModuleWhereUniqueInput
    update: XOR<ModuleUpdateWithoutCourseInput, ModuleUncheckedUpdateWithoutCourseInput>
    create: XOR<ModuleCreateWithoutCourseInput, ModuleUncheckedCreateWithoutCourseInput>
  }

  export type ModuleUpdateWithWhereUniqueWithoutCourseInput = {
    where: ModuleWhereUniqueInput
    data: XOR<ModuleUpdateWithoutCourseInput, ModuleUncheckedUpdateWithoutCourseInput>
  }

  export type ModuleUpdateManyWithWhereWithoutCourseInput = {
    where: ModuleScalarWhereInput
    data: XOR<ModuleUpdateManyMutationInput, ModuleUncheckedUpdateManyWithoutCourseInput>
  }

  export type ModuleScalarWhereInput = {
    AND?: ModuleScalarWhereInput | ModuleScalarWhereInput[]
    OR?: ModuleScalarWhereInput[]
    NOT?: ModuleScalarWhereInput | ModuleScalarWhereInput[]
    id?: StringFilter<"Module"> | string
    title?: StringFilter<"Module"> | string
    order?: IntFilter<"Module"> | number
    courseId?: StringFilter<"Module"> | string
    createdAt?: DateTimeFilter<"Module"> | Date | string
    updatedAt?: DateTimeFilter<"Module"> | Date | string
  }

  export type EnrollmentUpsertWithWhereUniqueWithoutCourseInput = {
    where: EnrollmentWhereUniqueInput
    update: XOR<EnrollmentUpdateWithoutCourseInput, EnrollmentUncheckedUpdateWithoutCourseInput>
    create: XOR<EnrollmentCreateWithoutCourseInput, EnrollmentUncheckedCreateWithoutCourseInput>
  }

  export type EnrollmentUpdateWithWhereUniqueWithoutCourseInput = {
    where: EnrollmentWhereUniqueInput
    data: XOR<EnrollmentUpdateWithoutCourseInput, EnrollmentUncheckedUpdateWithoutCourseInput>
  }

  export type EnrollmentUpdateManyWithWhereWithoutCourseInput = {
    where: EnrollmentScalarWhereInput
    data: XOR<EnrollmentUpdateManyMutationInput, EnrollmentUncheckedUpdateManyWithoutCourseInput>
  }

  export type CourseCreateWithoutModulesInput = {
    id?: string
    title: string
    description: string
    price: number
    status?: $Enums.CourseStatus
    coverImageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    instructorProfile: InstructorProfileCreateNestedOneWithoutCoursesInput
    enrollments?: EnrollmentCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutModulesInput = {
    id?: string
    title: string
    description: string
    price: number
    status?: $Enums.CourseStatus
    coverImageUrl?: string | null
    instructorProfileId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutModulesInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutModulesInput, CourseUncheckedCreateWithoutModulesInput>
  }

  export type LessonCreateWithoutModuleInput = {
    id?: string
    title: string
    order: number
    videoUrl: string
    duration?: number | null
    isFreePreview?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    progress?: LessonProgressCreateNestedManyWithoutLessonInput
  }

  export type LessonUncheckedCreateWithoutModuleInput = {
    id?: string
    title: string
    order: number
    videoUrl: string
    duration?: number | null
    isFreePreview?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    progress?: LessonProgressUncheckedCreateNestedManyWithoutLessonInput
  }

  export type LessonCreateOrConnectWithoutModuleInput = {
    where: LessonWhereUniqueInput
    create: XOR<LessonCreateWithoutModuleInput, LessonUncheckedCreateWithoutModuleInput>
  }

  export type LessonCreateManyModuleInputEnvelope = {
    data: LessonCreateManyModuleInput | LessonCreateManyModuleInput[]
    skipDuplicates?: boolean
  }

  export type CourseUpsertWithoutModulesInput = {
    update: XOR<CourseUpdateWithoutModulesInput, CourseUncheckedUpdateWithoutModulesInput>
    create: XOR<CourseCreateWithoutModulesInput, CourseUncheckedCreateWithoutModulesInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutModulesInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutModulesInput, CourseUncheckedUpdateWithoutModulesInput>
  }

  export type CourseUpdateWithoutModulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    status?: EnumCourseStatusFieldUpdateOperationsInput | $Enums.CourseStatus
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instructorProfile?: InstructorProfileUpdateOneRequiredWithoutCoursesNestedInput
    enrollments?: EnrollmentUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutModulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    status?: EnumCourseStatusFieldUpdateOperationsInput | $Enums.CourseStatus
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    instructorProfileId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    enrollments?: EnrollmentUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type LessonUpsertWithWhereUniqueWithoutModuleInput = {
    where: LessonWhereUniqueInput
    update: XOR<LessonUpdateWithoutModuleInput, LessonUncheckedUpdateWithoutModuleInput>
    create: XOR<LessonCreateWithoutModuleInput, LessonUncheckedCreateWithoutModuleInput>
  }

  export type LessonUpdateWithWhereUniqueWithoutModuleInput = {
    where: LessonWhereUniqueInput
    data: XOR<LessonUpdateWithoutModuleInput, LessonUncheckedUpdateWithoutModuleInput>
  }

  export type LessonUpdateManyWithWhereWithoutModuleInput = {
    where: LessonScalarWhereInput
    data: XOR<LessonUpdateManyMutationInput, LessonUncheckedUpdateManyWithoutModuleInput>
  }

  export type LessonScalarWhereInput = {
    AND?: LessonScalarWhereInput | LessonScalarWhereInput[]
    OR?: LessonScalarWhereInput[]
    NOT?: LessonScalarWhereInput | LessonScalarWhereInput[]
    id?: StringFilter<"Lesson"> | string
    title?: StringFilter<"Lesson"> | string
    order?: IntFilter<"Lesson"> | number
    videoUrl?: StringFilter<"Lesson"> | string
    duration?: IntNullableFilter<"Lesson"> | number | null
    isFreePreview?: BoolFilter<"Lesson"> | boolean
    moduleId?: StringFilter<"Lesson"> | string
    createdAt?: DateTimeFilter<"Lesson"> | Date | string
    updatedAt?: DateTimeFilter<"Lesson"> | Date | string
  }

  export type ModuleCreateWithoutLessonsInput = {
    id?: string
    title: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
    course: CourseCreateNestedOneWithoutModulesInput
  }

  export type ModuleUncheckedCreateWithoutLessonsInput = {
    id?: string
    title: string
    order: number
    courseId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ModuleCreateOrConnectWithoutLessonsInput = {
    where: ModuleWhereUniqueInput
    create: XOR<ModuleCreateWithoutLessonsInput, ModuleUncheckedCreateWithoutLessonsInput>
  }

  export type LessonProgressCreateWithoutLessonInput = {
    id?: string
    completedAt?: Date | string
    user: UserCreateNestedOneWithoutProgressInput
  }

  export type LessonProgressUncheckedCreateWithoutLessonInput = {
    id?: string
    completedAt?: Date | string
    userId: string
  }

  export type LessonProgressCreateOrConnectWithoutLessonInput = {
    where: LessonProgressWhereUniqueInput
    create: XOR<LessonProgressCreateWithoutLessonInput, LessonProgressUncheckedCreateWithoutLessonInput>
  }

  export type LessonProgressCreateManyLessonInputEnvelope = {
    data: LessonProgressCreateManyLessonInput | LessonProgressCreateManyLessonInput[]
    skipDuplicates?: boolean
  }

  export type ModuleUpsertWithoutLessonsInput = {
    update: XOR<ModuleUpdateWithoutLessonsInput, ModuleUncheckedUpdateWithoutLessonsInput>
    create: XOR<ModuleCreateWithoutLessonsInput, ModuleUncheckedCreateWithoutLessonsInput>
    where?: ModuleWhereInput
  }

  export type ModuleUpdateToOneWithWhereWithoutLessonsInput = {
    where?: ModuleWhereInput
    data: XOR<ModuleUpdateWithoutLessonsInput, ModuleUncheckedUpdateWithoutLessonsInput>
  }

  export type ModuleUpdateWithoutLessonsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutModulesNestedInput
  }

  export type ModuleUncheckedUpdateWithoutLessonsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    courseId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LessonProgressUpsertWithWhereUniqueWithoutLessonInput = {
    where: LessonProgressWhereUniqueInput
    update: XOR<LessonProgressUpdateWithoutLessonInput, LessonProgressUncheckedUpdateWithoutLessonInput>
    create: XOR<LessonProgressCreateWithoutLessonInput, LessonProgressUncheckedCreateWithoutLessonInput>
  }

  export type LessonProgressUpdateWithWhereUniqueWithoutLessonInput = {
    where: LessonProgressWhereUniqueInput
    data: XOR<LessonProgressUpdateWithoutLessonInput, LessonProgressUncheckedUpdateWithoutLessonInput>
  }

  export type LessonProgressUpdateManyWithWhereWithoutLessonInput = {
    where: LessonProgressScalarWhereInput
    data: XOR<LessonProgressUpdateManyMutationInput, LessonProgressUncheckedUpdateManyWithoutLessonInput>
  }

  export type UserCreateWithoutEnrollmentsInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    role?: $Enums.Role
    verifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    instructorProfile?: InstructorProfileCreateNestedOneWithoutUserInput
    refreshToken?: RefreshTokenCreateNestedOneWithoutUserInput
    emailVerificationToken?: EmailVerificationTokenCreateNestedOneWithoutUserInput
    passwordResetToken?: PasswordResetTokenCreateNestedOneWithoutUserInput
    progress?: LessonProgressCreateNestedManyWithoutUserInput
    payoutRequests?: PayoutRequestCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutEnrollmentsInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    role?: $Enums.Role
    verifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    instructorProfile?: InstructorProfileUncheckedCreateNestedOneWithoutUserInput
    refreshToken?: RefreshTokenUncheckedCreateNestedOneWithoutUserInput
    emailVerificationToken?: EmailVerificationTokenUncheckedCreateNestedOneWithoutUserInput
    passwordResetToken?: PasswordResetTokenUncheckedCreateNestedOneWithoutUserInput
    progress?: LessonProgressUncheckedCreateNestedManyWithoutUserInput
    payoutRequests?: PayoutRequestUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutEnrollmentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEnrollmentsInput, UserUncheckedCreateWithoutEnrollmentsInput>
  }

  export type CourseCreateWithoutEnrollmentsInput = {
    id?: string
    title: string
    description: string
    price: number
    status?: $Enums.CourseStatus
    coverImageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    instructorProfile: InstructorProfileCreateNestedOneWithoutCoursesInput
    modules?: ModuleCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateWithoutEnrollmentsInput = {
    id?: string
    title: string
    description: string
    price: number
    status?: $Enums.CourseStatus
    coverImageUrl?: string | null
    instructorProfileId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    modules?: ModuleUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseCreateOrConnectWithoutEnrollmentsInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutEnrollmentsInput, CourseUncheckedCreateWithoutEnrollmentsInput>
  }

  export type UserUpsertWithoutEnrollmentsInput = {
    update: XOR<UserUpdateWithoutEnrollmentsInput, UserUncheckedUpdateWithoutEnrollmentsInput>
    create: XOR<UserCreateWithoutEnrollmentsInput, UserUncheckedCreateWithoutEnrollmentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEnrollmentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEnrollmentsInput, UserUncheckedUpdateWithoutEnrollmentsInput>
  }

  export type UserUpdateWithoutEnrollmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instructorProfile?: InstructorProfileUpdateOneWithoutUserNestedInput
    refreshToken?: RefreshTokenUpdateOneWithoutUserNestedInput
    emailVerificationToken?: EmailVerificationTokenUpdateOneWithoutUserNestedInput
    passwordResetToken?: PasswordResetTokenUpdateOneWithoutUserNestedInput
    progress?: LessonProgressUpdateManyWithoutUserNestedInput
    payoutRequests?: PayoutRequestUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutEnrollmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instructorProfile?: InstructorProfileUncheckedUpdateOneWithoutUserNestedInput
    refreshToken?: RefreshTokenUncheckedUpdateOneWithoutUserNestedInput
    emailVerificationToken?: EmailVerificationTokenUncheckedUpdateOneWithoutUserNestedInput
    passwordResetToken?: PasswordResetTokenUncheckedUpdateOneWithoutUserNestedInput
    progress?: LessonProgressUncheckedUpdateManyWithoutUserNestedInput
    payoutRequests?: PayoutRequestUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CourseUpsertWithoutEnrollmentsInput = {
    update: XOR<CourseUpdateWithoutEnrollmentsInput, CourseUncheckedUpdateWithoutEnrollmentsInput>
    create: XOR<CourseCreateWithoutEnrollmentsInput, CourseUncheckedCreateWithoutEnrollmentsInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutEnrollmentsInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutEnrollmentsInput, CourseUncheckedUpdateWithoutEnrollmentsInput>
  }

  export type CourseUpdateWithoutEnrollmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    status?: EnumCourseStatusFieldUpdateOperationsInput | $Enums.CourseStatus
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instructorProfile?: InstructorProfileUpdateOneRequiredWithoutCoursesNestedInput
    modules?: ModuleUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutEnrollmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    status?: EnumCourseStatusFieldUpdateOperationsInput | $Enums.CourseStatus
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    instructorProfileId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modules?: ModuleUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type UserCreateWithoutProgressInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    role?: $Enums.Role
    verifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    instructorProfile?: InstructorProfileCreateNestedOneWithoutUserInput
    refreshToken?: RefreshTokenCreateNestedOneWithoutUserInput
    emailVerificationToken?: EmailVerificationTokenCreateNestedOneWithoutUserInput
    passwordResetToken?: PasswordResetTokenCreateNestedOneWithoutUserInput
    enrollments?: EnrollmentCreateNestedManyWithoutUserInput
    payoutRequests?: PayoutRequestCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProgressInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    role?: $Enums.Role
    verifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    instructorProfile?: InstructorProfileUncheckedCreateNestedOneWithoutUserInput
    refreshToken?: RefreshTokenUncheckedCreateNestedOneWithoutUserInput
    emailVerificationToken?: EmailVerificationTokenUncheckedCreateNestedOneWithoutUserInput
    passwordResetToken?: PasswordResetTokenUncheckedCreateNestedOneWithoutUserInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutUserInput
    payoutRequests?: PayoutRequestUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProgressInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProgressInput, UserUncheckedCreateWithoutProgressInput>
  }

  export type LessonCreateWithoutProgressInput = {
    id?: string
    title: string
    order: number
    videoUrl: string
    duration?: number | null
    isFreePreview?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    module: ModuleCreateNestedOneWithoutLessonsInput
  }

  export type LessonUncheckedCreateWithoutProgressInput = {
    id?: string
    title: string
    order: number
    videoUrl: string
    duration?: number | null
    isFreePreview?: boolean
    moduleId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LessonCreateOrConnectWithoutProgressInput = {
    where: LessonWhereUniqueInput
    create: XOR<LessonCreateWithoutProgressInput, LessonUncheckedCreateWithoutProgressInput>
  }

  export type UserUpsertWithoutProgressInput = {
    update: XOR<UserUpdateWithoutProgressInput, UserUncheckedUpdateWithoutProgressInput>
    create: XOR<UserCreateWithoutProgressInput, UserUncheckedCreateWithoutProgressInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProgressInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProgressInput, UserUncheckedUpdateWithoutProgressInput>
  }

  export type UserUpdateWithoutProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instructorProfile?: InstructorProfileUpdateOneWithoutUserNestedInput
    refreshToken?: RefreshTokenUpdateOneWithoutUserNestedInput
    emailVerificationToken?: EmailVerificationTokenUpdateOneWithoutUserNestedInput
    passwordResetToken?: PasswordResetTokenUpdateOneWithoutUserNestedInput
    enrollments?: EnrollmentUpdateManyWithoutUserNestedInput
    payoutRequests?: PayoutRequestUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instructorProfile?: InstructorProfileUncheckedUpdateOneWithoutUserNestedInput
    refreshToken?: RefreshTokenUncheckedUpdateOneWithoutUserNestedInput
    emailVerificationToken?: EmailVerificationTokenUncheckedUpdateOneWithoutUserNestedInput
    passwordResetToken?: PasswordResetTokenUncheckedUpdateOneWithoutUserNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutUserNestedInput
    payoutRequests?: PayoutRequestUncheckedUpdateManyWithoutUserNestedInput
  }

  export type LessonUpsertWithoutProgressInput = {
    update: XOR<LessonUpdateWithoutProgressInput, LessonUncheckedUpdateWithoutProgressInput>
    create: XOR<LessonCreateWithoutProgressInput, LessonUncheckedCreateWithoutProgressInput>
    where?: LessonWhereInput
  }

  export type LessonUpdateToOneWithWhereWithoutProgressInput = {
    where?: LessonWhereInput
    data: XOR<LessonUpdateWithoutProgressInput, LessonUncheckedUpdateWithoutProgressInput>
  }

  export type LessonUpdateWithoutProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    videoUrl?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    isFreePreview?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    module?: ModuleUpdateOneRequiredWithoutLessonsNestedInput
  }

  export type LessonUncheckedUpdateWithoutProgressInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    videoUrl?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    isFreePreview?: BoolFieldUpdateOperationsInput | boolean
    moduleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutPayoutRequestsInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    role?: $Enums.Role
    verifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    instructorProfile?: InstructorProfileCreateNestedOneWithoutUserInput
    refreshToken?: RefreshTokenCreateNestedOneWithoutUserInput
    emailVerificationToken?: EmailVerificationTokenCreateNestedOneWithoutUserInput
    passwordResetToken?: PasswordResetTokenCreateNestedOneWithoutUserInput
    enrollments?: EnrollmentCreateNestedManyWithoutUserInput
    progress?: LessonProgressCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPayoutRequestsInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    role?: $Enums.Role
    verifiedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    instructorProfile?: InstructorProfileUncheckedCreateNestedOneWithoutUserInput
    refreshToken?: RefreshTokenUncheckedCreateNestedOneWithoutUserInput
    emailVerificationToken?: EmailVerificationTokenUncheckedCreateNestedOneWithoutUserInput
    passwordResetToken?: PasswordResetTokenUncheckedCreateNestedOneWithoutUserInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutUserInput
    progress?: LessonProgressUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPayoutRequestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPayoutRequestsInput, UserUncheckedCreateWithoutPayoutRequestsInput>
  }

  export type UserUpsertWithoutPayoutRequestsInput = {
    update: XOR<UserUpdateWithoutPayoutRequestsInput, UserUncheckedUpdateWithoutPayoutRequestsInput>
    create: XOR<UserCreateWithoutPayoutRequestsInput, UserUncheckedCreateWithoutPayoutRequestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPayoutRequestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPayoutRequestsInput, UserUncheckedUpdateWithoutPayoutRequestsInput>
  }

  export type UserUpdateWithoutPayoutRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instructorProfile?: InstructorProfileUpdateOneWithoutUserNestedInput
    refreshToken?: RefreshTokenUpdateOneWithoutUserNestedInput
    emailVerificationToken?: EmailVerificationTokenUpdateOneWithoutUserNestedInput
    passwordResetToken?: PasswordResetTokenUpdateOneWithoutUserNestedInput
    enrollments?: EnrollmentUpdateManyWithoutUserNestedInput
    progress?: LessonProgressUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPayoutRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    verifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    instructorProfile?: InstructorProfileUncheckedUpdateOneWithoutUserNestedInput
    refreshToken?: RefreshTokenUncheckedUpdateOneWithoutUserNestedInput
    emailVerificationToken?: EmailVerificationTokenUncheckedUpdateOneWithoutUserNestedInput
    passwordResetToken?: PasswordResetTokenUncheckedUpdateOneWithoutUserNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutUserNestedInput
    progress?: LessonProgressUncheckedUpdateManyWithoutUserNestedInput
  }

  export type EnrollmentCreateManyUserInput = {
    id?: string
    status?: $Enums.EnrollmentStatus
    paystackReference: string
    amountPaid: number
    courseId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LessonProgressCreateManyUserInput = {
    id?: string
    completedAt?: Date | string
    lessonId: string
  }

  export type PayoutRequestCreateManyUserInput = {
    id?: string
    amount: number
    status?: $Enums.PayoutStatus
    paystackTransferId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EnrollmentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumEnrollmentStatusFieldUpdateOperationsInput | $Enums.EnrollmentStatus
    paystackReference?: StringFieldUpdateOperationsInput | string
    amountPaid?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneRequiredWithoutEnrollmentsNestedInput
  }

  export type EnrollmentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumEnrollmentStatusFieldUpdateOperationsInput | $Enums.EnrollmentStatus
    paystackReference?: StringFieldUpdateOperationsInput | string
    amountPaid?: IntFieldUpdateOperationsInput | number
    courseId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnrollmentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumEnrollmentStatusFieldUpdateOperationsInput | $Enums.EnrollmentStatus
    paystackReference?: StringFieldUpdateOperationsInput | string
    amountPaid?: IntFieldUpdateOperationsInput | number
    courseId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LessonProgressUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lesson?: LessonUpdateOneRequiredWithoutProgressNestedInput
  }

  export type LessonProgressUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lessonId?: StringFieldUpdateOperationsInput | string
  }

  export type LessonProgressUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lessonId?: StringFieldUpdateOperationsInput | string
  }

  export type PayoutRequestUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    status?: EnumPayoutStatusFieldUpdateOperationsInput | $Enums.PayoutStatus
    paystackTransferId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayoutRequestUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    status?: EnumPayoutStatusFieldUpdateOperationsInput | $Enums.PayoutStatus
    paystackTransferId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayoutRequestUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    status?: EnumPayoutStatusFieldUpdateOperationsInput | $Enums.PayoutStatus
    paystackTransferId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseCreateManyInstructorProfileInput = {
    id?: string
    title: string
    description: string
    price: number
    status?: $Enums.CourseStatus
    coverImageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseUpdateWithoutInstructorProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    status?: EnumCourseStatusFieldUpdateOperationsInput | $Enums.CourseStatus
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modules?: ModuleUpdateManyWithoutCourseNestedInput
    enrollments?: EnrollmentUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateWithoutInstructorProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    status?: EnumCourseStatusFieldUpdateOperationsInput | $Enums.CourseStatus
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    modules?: ModuleUncheckedUpdateManyWithoutCourseNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateManyWithoutInstructorProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    status?: EnumCourseStatusFieldUpdateOperationsInput | $Enums.CourseStatus
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InstructorProfileCreateManyTradeInput = {
    id?: string
    bio?: string | null
    paystackRecipientCode?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InstructorProfileUpdateWithoutTradeInput = {
    id?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    paystackRecipientCode?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutInstructorProfileNestedInput
    courses?: CourseUpdateManyWithoutInstructorProfileNestedInput
  }

  export type InstructorProfileUncheckedUpdateWithoutTradeInput = {
    id?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    paystackRecipientCode?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courses?: CourseUncheckedUpdateManyWithoutInstructorProfileNestedInput
  }

  export type InstructorProfileUncheckedUpdateManyWithoutTradeInput = {
    id?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    paystackRecipientCode?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ModuleCreateManyCourseInput = {
    id?: string
    title: string
    order: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EnrollmentCreateManyCourseInput = {
    id?: string
    status?: $Enums.EnrollmentStatus
    paystackReference: string
    amountPaid: number
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ModuleUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lessons?: LessonUpdateManyWithoutModuleNestedInput
  }

  export type ModuleUncheckedUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lessons?: LessonUncheckedUpdateManyWithoutModuleNestedInput
  }

  export type ModuleUncheckedUpdateManyWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnrollmentUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumEnrollmentStatusFieldUpdateOperationsInput | $Enums.EnrollmentStatus
    paystackReference?: StringFieldUpdateOperationsInput | string
    amountPaid?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEnrollmentsNestedInput
  }

  export type EnrollmentUncheckedUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumEnrollmentStatusFieldUpdateOperationsInput | $Enums.EnrollmentStatus
    paystackReference?: StringFieldUpdateOperationsInput | string
    amountPaid?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnrollmentUncheckedUpdateManyWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumEnrollmentStatusFieldUpdateOperationsInput | $Enums.EnrollmentStatus
    paystackReference?: StringFieldUpdateOperationsInput | string
    amountPaid?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LessonCreateManyModuleInput = {
    id?: string
    title: string
    order: number
    videoUrl: string
    duration?: number | null
    isFreePreview?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LessonUpdateWithoutModuleInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    videoUrl?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    isFreePreview?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    progress?: LessonProgressUpdateManyWithoutLessonNestedInput
  }

  export type LessonUncheckedUpdateWithoutModuleInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    videoUrl?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    isFreePreview?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    progress?: LessonProgressUncheckedUpdateManyWithoutLessonNestedInput
  }

  export type LessonUncheckedUpdateManyWithoutModuleInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    videoUrl?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    isFreePreview?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LessonProgressCreateManyLessonInput = {
    id?: string
    completedAt?: Date | string
    userId: string
  }

  export type LessonProgressUpdateWithoutLessonInput = {
    id?: StringFieldUpdateOperationsInput | string
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProgressNestedInput
  }

  export type LessonProgressUncheckedUpdateWithoutLessonInput = {
    id?: StringFieldUpdateOperationsInput | string
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type LessonProgressUncheckedUpdateManyWithoutLessonInput = {
    id?: StringFieldUpdateOperationsInput | string
    completedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
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