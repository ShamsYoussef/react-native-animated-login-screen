"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.runAction = runAction;
exports.WSL_BASH_PATH = exports.travelingFastlane = void 0;

function _spawnAsync() {
  const data = _interopRequireDefault(require("@expo/spawn-async"));

  _spawnAsync = function () {
    return data;
  };

  return data;
}

function _slash() {
  const data = _interopRequireDefault(require("slash"));

  _slash = function () {
    return data;
  };

  return data;
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const travelingFastlane = process.platform === 'darwin' ? require('@expo/traveling-fastlane-darwin')() : require('@expo/traveling-fastlane-linux')();
exports.travelingFastlane = travelingFastlane;
const WSL_BASH_PATH = 'C:\\Windows\\system32\\bash.exe';
exports.WSL_BASH_PATH = WSL_BASH_PATH;
const WSL_BASH = 'bash';
const WSL_ONLY_PATH = 'PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin';

async function runAction(fastlaneAction, args, options = {}) {
  const {
    pipeStdout = false
  } = options;
  const {
    command,
    commandArgs
  } = getCommandAndArgsForPlatform(fastlaneAction, args);
  const {
    stderr
  } = await (0, _spawnAsync().default)(command, commandArgs, {
    stdio: ['inherit', pipeStdout ? 'inherit' : 'pipe', 'pipe']
  });
  const {
    result,
    ...rest
  } = JSON.parse(stderr.trim());

  if (result === 'success') {
    return rest;
  } else {
    const {
      reason,
      rawDump
    } = rest;
    const err = new Error(`Reason: ${reason}, raw: ${JSON.stringify(rawDump)}`); // @ts-ignore

    err.rawDump = rawDump;
    throw err;
  }
}

function getCommandAndArgsForPlatform(fastlaneAction, args) {
  if (process.platform === 'win32') {
    const command = WSL_BASH;
    const argsJoined = args.map(i => `"${i}"`).join(' ');
    const commandArgs = ['-c', `${WSL_ONLY_PATH} ${windowsToWSLPath(fastlaneAction)} ${argsJoined}`];
    return {
      command,
      commandArgs
    };
  } else {
    const command = fastlaneAction;
    const commandArgs = [...args];
    return {
      command,
      commandArgs
    };
  }
}

function windowsToWSLPath(_path) {
  const slashPath = (0, _slash().default)(_path);

  const diskLetter = _path[0].toLowerCase();

  const pathOnDisk = slashPath.slice(2);
  return `/mnt/${diskLetter}${pathOnDisk}`;
}
//# sourceMappingURL=fastlane.js.map