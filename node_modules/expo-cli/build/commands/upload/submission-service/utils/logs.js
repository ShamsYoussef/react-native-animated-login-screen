"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.displayLogs = displayLogs;

function _got() {
  const data = _interopRequireDefault(require("got"));

  _got = function () {
    return data;
  };

  return data;
}

function _log() {
  const data = _interopRequireDefault(require("../../../../log"));

  _log = function () {
    return data;
  };

  return data;
}

function _SubmissionService() {
  const data = require("../SubmissionService.types");

  _SubmissionService = function () {
    return data;
  };

  return data;
}

function _errors() {
  const data = require("./errors");

  _errors = function () {
    return data;
  };

  return data;
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function displayLogs(submission, status, verbose) {
  var _submission$submissio;

  let printedUnknownError = false;

  if (status === _SubmissionService().SubmissionStatus.ERRORED && (submission === null || submission === void 0 ? void 0 : (_submission$submissio = submission.submissionInfo) === null || _submission$submissio === void 0 ? void 0 : _submission$submissio.error)) {
    printedUnknownError = (0, _errors().printSubmissionError)(submission.submissionInfo.error);
  }

  if ((printedUnknownError || verbose) && submission) {
    await downloadAndPrintSubmissionLogs(submission);
  }
}

async function downloadAndPrintSubmissionLogs(submission) {
  var _submission$submissio2;

  if (!((_submission$submissio2 = submission.submissionInfo) === null || _submission$submissio2 === void 0 ? void 0 : _submission$submissio2.logsUrl)) {
    return;
  }

  const {
    body: data
  } = await _got().default.get(submission.submissionInfo.logsUrl);
  const logs = parseLogs(data);

  _log().default.addNewLineIfNone();

  const prefix = _log().default.chalk.blueBright('[logs] ');

  for (const {
    level,
    msg
  } of logs) {
    const msgWithPrefix = `${prefix}${msg}`;

    if (level === 'error') {
      _log().default.error(msgWithPrefix);
    } else if (level === 'warn') {
      _log().default.warn(msgWithPrefix);
    } else {
      (0, _log().default)(msgWithPrefix);
    }
  }
}

function parseLogs(logs) {
  const lines = logs.split('\n');
  const result = [];

  for (const line of lines) {
    let parsedLine;

    try {
      parsedLine = JSON.parse(line);
    } catch (error) {
      continue;
    }

    let level;
    const {
      level: levelNumber,
      msg
    } = parsedLine;

    if (levelNumber >= 50) {
      level = 'error';
    } else if (levelNumber >= 40) {
      level = 'warn';
    } else {
      level = 'info';
    }

    result.push({
      level,
      msg
    });
  }

  return result;
}
//# sourceMappingURL=logs.js.map