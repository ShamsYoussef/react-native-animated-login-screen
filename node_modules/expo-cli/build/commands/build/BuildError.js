"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _es6Error() {
  const data = _interopRequireDefault(require("es6-error"));

  _es6Error = function () {
    return data;
  };

  return data;
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class BuildError extends _es6Error().default {
  constructor(message) {
    super();
    this.message = message;

    _defineProperty(this, "name", 'BuildError');
  }

}

exports.default = BuildError;
//# sourceMappingURL=BuildError.js.map