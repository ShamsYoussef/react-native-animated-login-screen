"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SubmissionStatus = exports.Platform = void 0;
var Platform;
exports.Platform = Platform;

(function (Platform) {
  Platform["IOS"] = "ios";
  Platform["ANDROID"] = "android";
})(Platform || (exports.Platform = Platform = {}));

var SubmissionStatus;
exports.SubmissionStatus = SubmissionStatus;

(function (SubmissionStatus) {
  SubmissionStatus["IN_QUEUE"] = "in-queue";
  SubmissionStatus["IN_PROGRESS"] = "in-progress";
  SubmissionStatus["FINISHED"] = "finished";
  SubmissionStatus["ERRORED"] = "errored";
})(SubmissionStatus || (exports.SubmissionStatus = SubmissionStatus = {}));
//# sourceMappingURL=SubmissionService.types.js.map