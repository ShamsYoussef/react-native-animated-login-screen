"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAndroidPackageAsync = getAndroidPackageAsync;
exports.AndroidPackageSourceType = void 0;

function _prompt() {
  const data = _interopRequireDefault(require("../../../../prompt"));

  _prompt = function () {
    return data;
  };

  return data;
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AndroidPackageSourceType;
exports.AndroidPackageSourceType = AndroidPackageSourceType;

(function (AndroidPackageSourceType) {
  AndroidPackageSourceType[AndroidPackageSourceType["userDefined"] = 0] = "userDefined";
  AndroidPackageSourceType[AndroidPackageSourceType["prompt"] = 1] = "prompt";
})(AndroidPackageSourceType || (exports.AndroidPackageSourceType = AndroidPackageSourceType = {}));

async function getAndroidPackageAsync(source) {
  if (source.sourceType === AndroidPackageSourceType.userDefined) {
    return source.androidPackage;
  } else if (source.sourceType === AndroidPackageSourceType.prompt) {
    const {
      androidPackage
    } = await (0, _prompt().default)({
      name: 'androidPackage',
      message: 'Android package name:',
      type: 'input',
      validate: val => val !== ''
    });
    return androidPackage;
  } else {
    throw new Error('This should never happen');
  }
}
//# sourceMappingURL=AndroidPackageSource.js.map