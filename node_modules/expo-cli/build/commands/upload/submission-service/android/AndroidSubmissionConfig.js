"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReleaseTrack = exports.ReleaseStatus = exports.ArchiveType = void 0;
var ArchiveType;
exports.ArchiveType = ArchiveType;

(function (ArchiveType) {
  ArchiveType["apk"] = "apk";
  ArchiveType["aab"] = "aab";
})(ArchiveType || (exports.ArchiveType = ArchiveType = {}));

var ReleaseStatus;
exports.ReleaseStatus = ReleaseStatus;

(function (ReleaseStatus) {
  ReleaseStatus["completed"] = "completed";
  ReleaseStatus["draft"] = "draft";
  ReleaseStatus["halted"] = "halted";
  ReleaseStatus["inProgress"] = "inProgress";
})(ReleaseStatus || (exports.ReleaseStatus = ReleaseStatus = {}));

var ReleaseTrack;
exports.ReleaseTrack = ReleaseTrack;

(function (ReleaseTrack) {
  ReleaseTrack["production"] = "production";
  ReleaseTrack["beta"] = "beta";
  ReleaseTrack["alpha"] = "alpha";
  ReleaseTrack["internal"] = "internal";
})(ReleaseTrack || (exports.ReleaseTrack = ReleaseTrack = {}));
//# sourceMappingURL=AndroidSubmissionConfig.js.map