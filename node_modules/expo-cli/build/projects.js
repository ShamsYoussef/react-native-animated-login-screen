"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ensureProjectExistsAsync = ensureProjectExistsAsync;

function _config() {
  const data = require("@expo/config");

  _config = function () {
    return data;
  };

  return data;
}

function _xdl() {
  const data = require("@expo/xdl");

  _xdl = function () {
    return data;
  };

  return data;
}

function _ora() {
  const data = _interopRequireDefault(require("ora"));

  _ora = function () {
    return data;
  };

  return data;
}

function _log() {
  const data = _interopRequireDefault(require("./log"));

  _log = function () {
    return data;
  };

  return data;
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function ensureProjectExistsAsync(user, {
  accountName,
  projectName,
  privacy
}) {
  const projectFullName = `@${accountName}/${projectName}`;
  const spinner = (0, _ora().default)(`Ensuring project ${_log().default.chalk.bold(projectFullName)} is registered on Expo servers`).start();

  const client = _xdl().ApiV2.clientForUser(user);

  try {
    const [{
      id
    }] = await client.getAsync('projects', {
      experienceName: projectFullName
    });
    spinner.succeed();
    return id;
  } catch (err) {
    if (err.code !== 'EXPERIENCE_NOT_FOUND') {
      spinner.fail(`Something went wrong when looking for project ${_log().default.chalk.bold(projectFullName)} on Expo servers`);
      throw err;
    }
  }

  try {
    spinner.text = `Registering project ${_log().default.chalk.bold(projectFullName)} on Expo servers`;
    const {
      id
    } = await client.postAsync('projects', {
      accountName,
      projectName,
      privacy: privacy || _config().ProjectPrivacy.PUBLIC
    });
    spinner.succeed();
    return id;
  } catch (err) {
    spinner.fail();
    throw err;
  }
}
//# sourceMappingURL=projects.js.map