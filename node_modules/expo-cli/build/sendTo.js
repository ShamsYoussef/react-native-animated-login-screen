"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _simpleSpinner() {
  const data = _interopRequireDefault(require("@expo/simple-spinner"));

  _simpleSpinner = function () {
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

function _askUser() {
  const data = _interopRequireDefault(require("./askUser"));

  _askUser = function () {
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

async function getRecipient(sendTo) {
  let recipient = '';

  if (sendTo) {
    if (typeof sendTo !== 'boolean') {
      recipient = sendTo;
    } else {
      recipient = await _xdl().UserSettings.getAsync('sendTo', null);
    }

    if (!recipient) {
      return await _askUser().default.askForSendToAsync();
    }
  }

  return recipient;
}

async function sendUrlAsync(url, recipient) {
  (0, _log().default)('Sending URL to', recipient);

  _simpleSpinner().default.start();

  try {
    var result = await _xdl().Exp.sendAsync(recipient, url);
  } finally {
    _simpleSpinner().default.stop();
  }

  (0, _log().default)('Sent.');
  return result;
}

var _default = {
  getRecipient,
  sendUrlAsync
};
exports.default = _default;
//# sourceMappingURL=sendTo.js.map