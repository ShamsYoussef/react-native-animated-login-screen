"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DEFAULT_CHECK_INTERVAL_MS = exports.default = void 0;

function _xdl() {
  const data = require("@expo/xdl");

  _xdl = function () {
    return data;
  };

  return data;
}

const SubmissionService = {
  startSubmissionAsync,
  getSubmissionAsync
};
const DEFAULT_CHECK_INTERVAL_MS = 5 * 1000; // 5 secs

exports.DEFAULT_CHECK_INTERVAL_MS = DEFAULT_CHECK_INTERVAL_MS;

async function startSubmissionAsync(platform, projectId, config) {
  const api = await getApiClientForUser();
  const {
    submissionId
  } = await api.postAsync(`projects/${projectId}/app-store-submissions`, {
    platform,
    config: config
  });
  return submissionId;
}

async function getSubmissionAsync(projectId, submissionId) {
  const api = await getApiClientForUser();
  const result = await api.getAsync(`projects/${projectId}/app-store-submissions/${submissionId}`);
  return result;
}

async function getApiClientForUser() {
  const user = await _xdl().UserManager.ensureLoggedInAsync();
  return _xdl().ApiV2.clientForUser(user);
}

var _default = SubmissionService;
exports.default = _default;
//# sourceMappingURL=SubmissionService.js.map