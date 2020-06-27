"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.runTravelingFastlaneAsync = runTravelingFastlaneAsync;

function _spawnAsync() {
  const data = _interopRequireDefault(require("@expo/spawn-async"));

  _spawnAsync = function () {
    return data;
  };

  return data;
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function runTravelingFastlaneAsync(command, args, envs) {
  const spawnOptions = {
    env: { ...process.env,
      ...envs
    },
    stdio: [0, 1, 'pipe']
  };
  const {
    stderr
  } = await (0, _spawnAsync().default)(command, args, spawnOptions);
  const res = JSON.parse(stderr);

  if (res.result !== 'failure') {
    return res;
  } else {
    var _res$rawDump$message, _res$rawDump, _res$rawDump2;

    let message = res.reason !== 'Unknown reason' ? res.reason : (_res$rawDump$message = res === null || res === void 0 ? void 0 : (_res$rawDump = res.rawDump) === null || _res$rawDump === void 0 ? void 0 : _res$rawDump.message) !== null && _res$rawDump$message !== void 0 ? _res$rawDump$message : 'Unknown error when running fastlane';
    message = `${message}${(res === null || res === void 0 ? void 0 : (_res$rawDump2 = res.rawDump) === null || _res$rawDump2 === void 0 ? void 0 : _res$rawDump2.backtrace) ? `\n${res.rawDump.backtrace.map(i => `    ${i}`).join('\n')}` : ''}`;
    throw new Error(message);
  }
}
//# sourceMappingURL=travelingFastlane.js.map