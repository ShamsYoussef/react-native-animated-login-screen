/**
 * An object that represents the result of an operation that can either return a value successfully
 * or fail. Typically we'd simply either return a value or throw an error, but sometimes we perform
 * multiple operations as a batch, some of which may succeed and others fail. Since we can't
 * simultaneously return values and throw errors, we instead return collections of Result objects.
 * This allows a batch operation to return values for successful operations and errors for failed
 * ones without loss of information, namely the errors. (In contrast, sometimes it is appropriate
 * for a batch operation to return just successful values and omit values for failed operations.)
 *
 * Results are implemented as lightweight objects at runtime. This ensures they clearly appear as
 * Result objects when logging, inspecting, or otherwise using them.
 *
 * @param T The type of a successful operation's value if the result represents a success
 */
export declare type Result<T> = Success<T> | Failure<T>;
export declare enum ResultStatus {
    Fulfilled = "fulfilled",
    Rejected = "rejected"
}
/**
 * Creates a `Result` object from the given value, which can either be the result of a successful
 * operation or an error that occurred during it. This is the primary way to create `Result`
 * objects.
 *
 * @param value Either the successful result value or an error representing the failure reason. Omit
 * this argument if the operation was successful but conceptually doesn't return anything (void).
 * @returns A `Result` object that represents either a success or failure depending on the value
 * passed in
 */
export declare function result<T>(value: Error): Failure<T>;
export declare function result<T>(value: T): Success<T>;
export declare function result(): Success<void>;
/**
 * Converts a regular promise into one that always successfully resolves to a `Result` object.
 *
 * If the given promise is fulfilled, its fulfillment value is used to create a success result.
 *
 * Otherwise, if the given promise is rejected, its rejection reason is used to create a failure
 * result. If the given promise is rejected with a reason other than an `Error` object, the reason
 * is coerced to a string and used as the error message of a new `Error` object.
 *
 * @param promise A promise whose fulfillment value or rejection reason to use to create a `Result`
 * object
 * @returns A promise that always resolves to a `Result` object that represents either a success or
 * a failure depending on whether the given promise is fulfilled or rejected
 */
export declare function asyncResult<T>(promise: Promise<T>): Promise<Result<T>>;
/**
 * Converts a promise that resolves to a `Result` object into a regular promise that either resolves
 * to a successful value or is rejected with an error. This function is the inverse of
 * `asyncResult`.
 *
 * @param resultPromise A promise that resolves to a result. The result is enforced to be a success;
 * if the result is a failure, the failure reason is thrown.
 * @returns A promise that either resolves to the success value of the input result or is rejected
 * with its failure reason
 */
export declare function enforceAsyncResult<T>(resultPromise: Promise<Result<T>>): Promise<T>;
declare abstract class Outcome<T> {
    /**
     * Whether this result represents a success or a failure. Successes always have a result value and
     * never have a failure reason, while failures always have a failure reason and never have a
     * result value.
     *
     * This property is provided for convenience instead of checking the `status` property.
     */
    abstract readonly ok: boolean;
    /**
     * The status of this result: either "fulfilled" or "rejected". This property and its possible
     * values are the same as the `status` field of standard promise results.
     */
    abstract readonly status: ResultStatus;
    /**
     * The value of this result, if it represents a success. This property is always `undefined` if
     * this result represents a failure.
     */
    abstract readonly value: T | undefined;
    /**
     * The reason the operation that created this result failed, if this result represents a failure.
     * This property is always `undefined` if this result represents a success.
     */
    abstract readonly reason: Error | undefined;
    /**
     * Returns the value of this result if it represents a success, or throws the underlying error if
     * this result represents a failure.
     */
    enforceValue(): T;
    /**
     * Returns the error that caused this failure, or throws a TypeError if this result actually is a
     * success.
     */
    enforceError(): Error;
    /**
     * Converts this result to an object that conforms to the same interface as a standard promise
     * result object.
     *
     * @returns The returned object may have property values that are not necessarily
     * JSON-serializable. It is the responsibility of each value to be JSON-serializable or for the
     * code performing serialization to anticipate non-serializable values.
     */
    toJSON(): object;
}
export declare class Success<T> extends Outcome<T> {
    readonly status = ResultStatus.Fulfilled;
    readonly ok = true;
    readonly value: T;
    readonly reason: undefined;
    [Symbol.toStringTag]: string;
    constructor(value: T);
}
export declare class Failure<T> extends Outcome<T> {
    readonly status = ResultStatus.Rejected;
    readonly ok = false;
    readonly value: undefined;
    readonly reason: Error;
    [Symbol.toStringTag]: string;
    constructor(reason: Error);
}
export {};
