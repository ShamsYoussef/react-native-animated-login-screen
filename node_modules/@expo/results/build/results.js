"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ResultStatus;
(function (ResultStatus) {
    ResultStatus["Fulfilled"] = "fulfilled";
    ResultStatus["Rejected"] = "rejected";
})(ResultStatus = exports.ResultStatus || (exports.ResultStatus = {}));
function result(value) {
    return value instanceof Error ? new Failure(value) : new Success(value);
}
exports.result = result;
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
async function asyncResult(promise) {
    try {
        const value = await promise;
        return new Success(value);
    }
    catch (error) {
        return error instanceof Error ? new Failure(error) : new Failure(new Error(error));
    }
}
exports.asyncResult = asyncResult;
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
async function enforceAsyncResult(resultPromise) {
    const result = await resultPromise;
    return result.enforceValue();
}
exports.enforceAsyncResult = enforceAsyncResult;
class Outcome {
    /**
     * Returns the value of this result if it represents a success, or throws the underlying error if
     * this result represents a failure.
     */
    enforceValue() {
        if (!this.ok) {
            throw this.reason;
        }
        return this.value;
    }
    /**
     * Returns the error that caused this failure, or throws a TypeError if this result actually is a
     * success.
     */
    enforceError() {
        if (this.ok) {
            throw new TypeError(`Expected result to have a failure reason but actually was a success`);
        }
        return this.reason;
    }
    /**
     * Converts this result to an object that conforms to the same interface as a standard promise
     * result object.
     *
     * @returns The returned object may have property values that are not necessarily
     * JSON-serializable. It is the responsibility of each value to be JSON-serializable or for the
     * code performing serialization to anticipate non-serializable values.
     */
    toJSON() {
        return this.ok
            ? { status: ResultStatus.Fulfilled, value: this.value }
            : { status: ResultStatus.Rejected, reason: this.reason };
    }
}
class Success extends Outcome {
    constructor(value) {
        super();
        this.status = ResultStatus.Fulfilled;
        this.ok = true;
        this[Symbol.toStringTag] = 'Success';
        this.value = value;
    }
}
exports.Success = Success;
class Failure extends Outcome {
    constructor(reason) {
        super();
        this.status = ResultStatus.Rejected;
        this.ok = false;
        this[Symbol.toStringTag] = 'Failure';
        this.reason = reason;
    }
}
exports.Failure = Failure;
//# sourceMappingURL=results.js.map