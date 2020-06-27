"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAppConfig = getAppConfig;
exports.getExpoConfig = getExpoConfig;

function _config() {
  const data = require("@expo/config");

  _config = function () {
    return data;
  };

  return data;
}

function getAppConfig(projecDir) {
  const exp = getExpoConfig(projecDir);

  if (!exp.slug) {
    throw new Error('expo.slug is not defined in app.json');
  }

  return {
    owner: exp.owner,
    slug: exp.slug
  };
}

let exp;

function getExpoConfig(projectDir) {
  if (!exp) {
    const {
      exp: _exp
    } = (0, _config().getConfig)(projectDir, {
      skipSDKVersionRequirement: true
    });
    exp = _exp;
  }

  return exp;
}
//# sourceMappingURL=config.js.map