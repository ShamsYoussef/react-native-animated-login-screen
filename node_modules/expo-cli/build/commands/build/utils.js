"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkIfSdkIsSupported = checkIfSdkIsSupported;
exports.askBuildType = askBuildType;

function _xdl() {
  const data = require("@expo/xdl");

  _xdl = function () {
    return data;
  };

  return data;
}

function _chalk() {
  const data = _interopRequireDefault(require("chalk"));

  _chalk = function () {
    return data;
  };

  return data;
}

function _commander() {
  const data = _interopRequireDefault(require("commander"));

  _commander = function () {
    return data;
  };

  return data;
}

function _log() {
  const data = _interopRequireDefault(require("../../log"));

  _log = function () {
    return data;
  };

  return data;
}

function _prompts() {
  const data = _interopRequireDefault(require("../../prompts"));

  _prompts = function () {
    return data;
  };

  return data;
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function checkIfSdkIsSupported(sdkVersion, platform) {
  const isSupported = await _xdl().Versions.canTurtleBuildSdkVersion(sdkVersion, platform);
  const minimumSdkVersionSupported = await _xdl().Versions.oldestSupportedMajorVersionAsync();
  const majorSdkVersion = Number(sdkVersion.split('.')[0]);
  const {
    version: latestSDKVersion
  } = await _xdl().Versions.newestReleasedSdkVersionAsync();

  if (!isSupported) {
    _log().default.error(_chalk().default.red('Unsupported SDK version: our app builders ' + (majorSdkVersion < minimumSdkVersionSupported ? `no longer support SDK version ${majorSdkVersion}. Please upgrade to at least SDK ${minimumSdkVersionSupported}, or to the latest SDK version (${latestSDKVersion}).` : `do not support SDK version ${majorSdkVersion}, yet. The latest SDK version is ${latestSDKVersion}.`)));

    throw new Error('Unsupported SDK version');
  }
}

async function askBuildType(typeFromFlag, availableTypes) {
  const allowedTypes = Object.keys(availableTypes);
  const typeIsInvalid = typeFromFlag !== undefined && !allowedTypes.includes(typeFromFlag);

  if (typeFromFlag && !typeIsInvalid) {
    return typeFromFlag;
  }

  if (typeIsInvalid) {
    _log().default.error(`Build type must be one of (${allowedTypes.join(', ')})`);

    if (_commander().default.nonInteractive) {
      process.exit(1);
    }
  }

  if (!typeFromFlag && _commander().default.nonInteractive) {
    return allowedTypes[0];
  }

  const {
    answer
  } = await (0, _prompts().default)({
    type: 'select',
    name: 'answer',
    message: 'Choose the build type you would like:',
    choices: allowedTypes.map(type => ({
      title: type,
      value: type,
      description: availableTypes[type]
    }))
  });
  return answer;
}
//# sourceMappingURL=utils.js.map